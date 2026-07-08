import { useState } from 'react'

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

const accentMap = {
  'á': 'a', 'à': 'a', 'â': 'a', 'ä': 'a',
  'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
  'í': 'i', 'î': 'i', 'ï': 'i',
  'ó': 'o', 'ô': 'o', 'ö': 'o',
  'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u',
  'ñ': 'n',
  'ç': 'c',
}

function normalize(str) {
  return str.toLowerCase().replace(/[áàâäéèêëíîïóôöúùûüñç]/g, c => accentMap[c] || c)
}

const tenseLabels = {
  present: '🟢 Présent',
  past: '🔵 Passé (pretérito)',
  future: '🟠 Futur',
}

const pronouns = ['yo', 'tú', 'él/ella/usted']

export default function QuizLesson3({ question, totalQuestions, currentIndex, score, elapsed, onAnswer, onNext, user }) {
  const [inputs, setInputs] = useState({ yo: '', tú: '', 'él/ella/usted': '' })
  const [hintsUsed, setHintsUsed] = useState({ yo: 0, tú: 0, 'él/ella/usted': 0 })
  const [answered, setAnswered] = useState(false)
  const [results, setResults] = useState(null)

  const isPrince = user === 'prince'
  const answers = question.answers

  function applyHint(pronoun) {
    if (answered) return
    const ans = answers[pronoun]
    const val = inputs[pronoun]
    if (hintsUsed[pronoun] >= 2) return

    let matchLen = 0
    for (let i = 0; i < ans.length; i++) {
      if (i < val.length && normalize(val[i]) === normalize(ans[i])) {
        matchLen++
      } else {
        break
      }
    }
    const remaining = ans.slice(matchLen)
    if (remaining.length === 0) return
    const chunk = remaining.slice(0, 2)

    setInputs(prev => ({ ...prev, [pronoun]: val + chunk }))
    setHintsUsed(prev => ({ ...prev, [pronoun]: prev[pronoun] + 1 }))
  }

  function setInput(pronoun, value) {
    if (answered) return
    setInputs(prev => ({ ...prev, [pronoun]: value }))
  }

  function handleConfirm() {
    if (answered) return
    const res = {}
    pronouns.forEach(p => {
      const ok = normalize(inputs[p].trim()) === normalize(answers[p])
      res[p] = ok
      onAnswer(question.id, inputs[p].trim(), ok, hintsUsed[p] > 0 ? 'hint' : 'direct')
    })
    setResults(res)
    setAnswered(true)
    const filled = {}
    pronouns.forEach(p => { filled[p] = res[p] ? answers[p] : inputs[p] })
    setInputs(filled)
  }

  function handleNext() {
    setInputs({ yo: '', tú: '', 'él/ella/usted': '' })
    setHintsUsed({ yo: 0, tú: 0, 'él/ella/usted': 0 })
    setAnswered(false)
    setResults(null)
    onNext()
  }

  const allFilled = pronouns.every(p => inputs[p].trim().length > 0)

  function inputClass(pronoun) {
    if (!answered) return 'flex-1 p-3 rounded-xl border-2 text-base font-medium outline-none transition-all duration-200 bg-gray-50 text-gray-800 border-gray-200 focus:border-purple-400 focus:bg-white'
    const ok = results[pronoun]
    return `flex-1 p-3 rounded-xl border-2 text-base font-medium outline-none transition-all duration-200 ${
      ok ? 'border-green-500 bg-green-50 text-green-800' : 'border-red-500 bg-red-50 text-red-800'
    }`
  }

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
        <div className="flex justify-center gap-2 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 uppercase tracking-wide">
            🔄 Conjugaison
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
            {tenseLabels[question.tense] || question.tense}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 leading-tight">
          {question.verb}
        </h2>

        <div className="space-y-3">
          {pronouns.map(p => {
            const ans = answers[p]
            const canHint = !answered && hintsUsed[p] < 2 && inputs[p].length < ans.length

            return (
              <div key={p} className="flex items-center gap-2">
                <span className="w-28 shrink-0 text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5 text-center">
                  {p}
                </span>
                <input
                  type="text"
                  value={inputs[p]}
                  onChange={e => setInput(p, e.target.value)}
                  className={inputClass(p)}
                  readOnly={answered}
                  autoFocus={p === 'yo' && !answered}
                />
                {!answered && (
                  <button
                    onClick={() => applyHint(p)}
                    disabled={!canHint}
                    className={`shrink-0 px-3 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                      canHint
                        ? 'bg-amber-100 text-amber-700 hover:bg-amber-200 active:bg-amber-300'
                        : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    💡
                  </button>
                )}
                {answered && (
                  <span className="shrink-0 w-10 text-center text-lg">
                    {results[p] ? '✅' : '❌'}
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {!answered && (
          <button
            onClick={handleConfirm}
            disabled={!allFilled}
            className={`w-full mt-6 py-3.5 rounded-2xl font-bold text-lg transition-all duration-200 cursor-pointer ${
              allFilled
                ? isPrince
                  ? 'bg-red-700 text-white hover:bg-red-600 active:bg-red-800 shadow-lg'
                  : 'bg-purple-700 text-white hover:bg-purple-600 active:bg-purple-800 shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            ✓ Vérifier
          </button>
        )}

        {answered && (
          <div className="mt-6 space-y-3">
            <div className="p-4 rounded-2xl text-center font-semibold bg-gray-50 text-gray-700 border border-gray-200">
              {pronouns.filter(p => results[p]).length} / 3 correctes
              {pronouns.some(p => hintsUsed[p] > 0) && (
                <span className="text-gray-400 text-sm ml-2">
                  (avec indices)
                </span>
              )}
            </div>

            <div className="space-y-1.5 text-sm text-center">
              {pronouns.map(p => {
                if (results[p]) return null
                return (
                  <div key={p} className="text-red-600">
                    <span className="font-medium">{p}</span> → {answers[p]}
                  </div>
                )
              })}
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
