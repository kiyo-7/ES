import { useState, useRef } from 'react'

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

const accentMap = {
  'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
  'à': 'a', 'â': 'a', 'ä': 'a',
  'ù': 'u', 'û': 'u', 'ü': 'u',
  'ô': 'o', 'ö': 'o',
  'î': 'i', 'ï': 'i',
  'ç': 'c',
}

function normalize(str) {
  return str.toLowerCase().replace(/[éèêëàâäùûüôöîïç]/g, c => accentMap[c] || c)
}

const categoryLabels = {
  infinitive: '📖 Infinitif',
  conjugation: '🔄 Conjugaison',
}

export default function QuizLesson3({ question, totalQuestions, currentIndex, score, elapsed, onAnswer, onNext, user }) {
  const [input, setInput] = useState('')
  const [hintsUsed, setHintsUsed] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)
  const inputRef = useRef(null)

  const isPrince = user === 'prince'
  const isInfinitive = question.category === 'infinitive'
  const answer = question.french

  function applyHint() {
    if (answered) return
    const typed = input
    let matchLen = 0
    for (let i = 0; i < answer.length; i++) {
      if (i < typed.length && normalize(typed[i]) === normalize(answer[i])) {
        matchLen++
      } else {
        break
      }
    }
    const remaining = answer.slice(matchLen)
    if (remaining.length === 0) return
    const chunk = remaining.slice(0, 2)
    setInput(typed + chunk)
    setHintsUsed(prev => prev + 1)
  }

  function handleConfirm() {
    if (answered) return
    const ok = normalize(input.trim()) === normalize(answer)
    setCorrect(ok)
    setAnswered(true)
    if (ok) {
      setInput(answer)
    }
    onAnswer(question.id, input.trim(), ok, hintsUsed > 0 ? 'hint' : 'direct')
  }

  function handleNext() {
    setInput('')
    setHintsUsed(0)
    setAnswered(false)
    setCorrect(false)
    onNext()
  }

  const hintAvailable = !answered && input.length < answer.length && hintsUsed < 2

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 ${
      isPrince
        ? 'bg-linear-to-br from-red-50 via-amber-50 to-orange-100'
        : 'bg-linear-to-br from-purple-50 via-fuchsia-50 to-cyan-100'
    }`}>
      <div className="w-full max-w-lg mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 text-sm font-medium">{currentIndex + 1} / {totalQuestions}</span>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-sm font-medium">✅ {score}</span>
            <span className="text-gray-500 text-sm font-mono tracking-wider">⏱ {formatTime(elapsed)}</span>
          </div>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ease-out ${isPrince ? 'bg-red-600' : 'bg-purple-600'}`}
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-6 sm:p-8">
        <div className="text-center mb-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500 uppercase tracking-wide">
            {categoryLabels[question.category] || question.category}
          </span>
        </div>

        {isInfinitive ? (
          <>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 my-4 leading-tight">
              {question.spanish}
            </h2>
            <p className="text-center text-gray-400 text-sm mb-5">Tape la traduction française</p>
          </>
        ) : (
          <>
            <div className="text-center mb-1">
              <span className="inline-block px-3 py-1 rounded-lg text-sm font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                {question.pronoun}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 my-4 leading-tight">
              {question.spanish}
            </h2>
            <p className="text-center text-gray-400 text-sm mb-5">Conjugue en français</p>
          </>
        )}

        <div className="mb-4">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => { if (!answered) setInput(e.target.value) }}
            placeholder={isInfinitive ? 'ex: être' : 'ex: je suis'}
            autoFocus
            className={`w-full p-4 rounded-2xl border-2 text-lg font-medium outline-none transition-all duration-200 ${
              answered
                ? correct
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : 'border-red-500 bg-red-50 text-red-800'
                : 'border-gray-200 bg-gray-50 text-gray-800 focus:border-purple-400 focus:bg-white'
            }`}
            readOnly={answered}
          />
        </div>

        {!answered && (
          <div className="flex gap-3">
            <button
              onClick={applyHint}
              disabled={!hintAvailable}
              className={`flex-1 py-3.5 rounded-2xl font-bold text-lg transition-all duration-200 cursor-pointer ${
                hintAvailable
                  ? 'bg-amber-100 text-amber-700 hover:bg-amber-200 active:bg-amber-300 shadow'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              💡 Hint ({hintsUsed + 1})
            </button>
            <button
              onClick={handleConfirm}
              disabled={input.trim().length === 0}
              className={`flex-1 py-3.5 rounded-2xl font-bold text-lg transition-all duration-200 cursor-pointer ${
                input.trim().length > 0
                  ? isPrince
                    ? 'bg-red-700 text-white hover:bg-red-600 active:bg-red-800 shadow-lg'
                    : 'bg-purple-700 text-white hover:bg-purple-600 active:bg-purple-800 shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              ✓ Vérifier
            </button>
          </div>
        )}

        {answered && (
          <div className="mt-5 space-y-3">
            <div className={`p-4 rounded-2xl text-center font-semibold ${
              correct
                ? 'bg-green-50 text-green-700 border border-green-300'
                : 'bg-red-50 text-red-700 border border-red-300'
            }`}>
              {correct
                ? `✅ ¡Correcto!${hintsUsed > 0 ? ` (${hintsUsed} indice${hintsUsed > 1 ? 's' : ''})` : ''}`
                : `❌ La réponse correcte est : ${answer}`
              }
            </div>

            <button
              onClick={handleNext}
              className={`w-full py-3.5 rounded-2xl font-bold text-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg cursor-pointer ${
                isPrince
                  ? 'bg-red-700 text-white hover:bg-red-600'
                  : 'bg-purple-700 text-white hover:bg-purple-600'
              }`}
            >
              {currentIndex < totalQuestions - 1 ? '→ Suivante' : '🏁 Voir les résultats'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
