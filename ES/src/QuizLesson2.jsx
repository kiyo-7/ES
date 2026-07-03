import { useState, useMemo } from 'react'
import allLesson2 from './lesson2Data'

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function DisplayClue({ display }) {
  if (display.type === 'color') {
    return (
      <div className="flex justify-center mb-4">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl shadow-lg border-2 border-gray-200" style={{ backgroundColor: display.value }} />
      </div>
    )
  }
  if (display.type === 'emoji') {
    return <div className="text-6xl sm:text-7xl text-center mb-4 leading-none">{display.value}</div>
  }
  if (display.type === 'digit') {
    return <div className="text-5xl sm:text-6xl font-bold text-center text-gray-800 mb-4 tracking-wider">{display.value}</div>
  }
  if (display.type === 'text') {
    return <div className="text-xl sm:text-2xl text-center text-gray-500 italic mb-4">« {display.value} »</div>
  }
  return null
}

const categoryLabels = {
  colores: '🎨 Colores',
  frutas: '🍎 Frutas',
  animales: '🐾 Animales',
  objetos: '🏠 Objetos',
  'vida-cotidiana': '🌍 Vida cotidiana',
  personas: '👤 Personas',
  familia: '👨‍👩‍👧‍👦 Familia',
  'edad-tiempo': '🎂 Edad y tiempo',
  'reperes-temporels': '📅 Repères temporels',
  meteo: '🌦️ Météo',
  cuerpo: '🧍 Cuerpo',
  numeros: '🔢 Números',
}

export default function QuizLesson2({ question, totalQuestions, currentIndex, score, elapsed, onAnswer, onNext, user }) {
  const [selectedWord, setSelectedWord] = useState(null)
  const [selectedGender, setSelectedGender] = useState(null)
  const [answered, setAnswered] = useState(false)

  const isPrince = user === 'prince'
  const needsGender = question.gender !== null

  const options = useMemo(() => {
    const sameCategory = allLesson2.filter(q => q.category === question.category && q.id !== question.id)
    const pool = [...new Set(sameCategory.map(q => q.spanish))]
    const correct = question.spanish
    const others = pool.filter(s => s !== correct)
    for (let i = others.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [others[i], others[j]] = [others[j], others[i]]
    }
    const distractors = others.slice(0, 3)
    const all = [correct, ...distractors]
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]]
    }
    return all
  }, [question.id])

  const handleConfirm = () => {
    if (answered) return
    const correct = selectedWord === question.spanish
    const genderCorrect = needsGender ? selectedGender === question.gender : null
    setAnswered(true)
    onAnswer(question.id, selectedWord, correct, genderCorrect)
  }

  const handleNext = () => {
    setSelectedWord(null)
    setSelectedGender(null)
    setAnswered(false)
    onNext()
  }

  const canConfirm = selectedWord !== null && (!needsGender || selectedGender !== null)
  const wordCorrect = answered && selectedWord === question.spanish
  const wordWrong = answered && selectedWord !== question.spanish

  const btnBase = 'w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 text-base font-medium cursor-pointer'

  function optionClass(option) {
    const isSelected = selectedWord === option
    const isCorrect = option === question.spanish

    if (answered) {
      if (isCorrect) return `${btnBase} border-green-500 bg-green-50 text-green-800`
      if (isSelected) return `${btnBase} border-red-500 bg-red-50 text-red-800 line-through`
      return `${btnBase} border-gray-200 bg-gray-50 text-gray-400`
    }
    if (isSelected) {
      return `${btnBase} ${isPrince ? 'border-red-500 bg-red-50 text-red-800' : 'border-purple-500 bg-purple-50 text-purple-800'}`
    }
    return `${btnBase} border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700`
  }

  function genderBtnClass(g) {
    const isSelected = selectedGender === g
    const isCorrect = question.gender === g

    if (answered) {
      if (isCorrect) return 'cursor-pointer flex-1 py-3 rounded-xl font-medium transition-all duration-200 bg-green-100 text-green-700 border-2 border-green-500'
      if (isSelected) return 'cursor-pointer flex-1 py-3 rounded-xl font-medium transition-all duration-200 bg-red-100 text-red-700 border-2 border-red-500'
      return 'cursor-pointer flex-1 py-3 rounded-xl font-medium transition-all duration-200 bg-gray-100 text-gray-400 border-2 border-gray-200'
    }
    if (isSelected) {
      return `cursor-pointer flex-1 py-3 rounded-xl font-medium transition-all duration-200 ${isPrince ? 'bg-red-100 text-red-700 border-2 border-red-500' : 'bg-purple-100 text-purple-700 border-2 border-purple-500'}`
    }
    return 'cursor-pointer flex-1 py-3 rounded-xl font-medium transition-all duration-200 bg-gray-100 text-gray-600 border-2 border-gray-200 hover:border-gray-400'
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
        <div className="text-center mb-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500 uppercase tracking-wide">
            {categoryLabels[question.category] || question.category}
          </span>
        </div>

        <DisplayClue display={question.display} />

        <p className="text-center text-gray-400 text-sm mb-5">
          ¿Qué palabra es?
        </p>

        <div className="space-y-3">
          {options.map((opt, i) => (
            <button key={i} onClick={() => { if (!answered) setSelectedWord(opt) }} disabled={answered} className={optionClass(opt)}>
              {opt}
            </button>
          ))}
        </div>

        {needsGender && (
          <div className="mt-5">
            <p className="text-center text-gray-500 text-sm mb-3 font-medium">
              ¿Artículo? (masculino o femenino)
            </p>
            <div className="flex gap-3">
              <button onClick={() => { if (!answered) setSelectedGender('m') }} disabled={answered} className={genderBtnClass('m')}>
                el / un
              </button>
              <button onClick={() => { if (!answered) setSelectedGender('f') }} disabled={answered} className={genderBtnClass('f')}>
                la / una
              </button>
            </div>
          </div>
        )}

        {!needsGender && !answered && (
          <div className="mt-4 text-center text-gray-400 text-xs">
            {question.category === 'numeros' ? '(números — sin género)' : question.category === 'reperes-temporels' ? '(adverbios — sin artículo)' : '(sin género)'}
          </div>
        )}

        {!answered && (
          <button
            onClick={handleConfirm}
            disabled={!canConfirm}
            className={`w-full mt-5 py-3.5 rounded-2xl font-bold text-lg transition-all duration-200 cursor-pointer ${
              canConfirm
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
          <div className="mt-5 space-y-3">
            <div className={`p-4 rounded-2xl text-center font-semibold ${
              wordCorrect
                ? 'bg-green-50 text-green-700 border border-green-300'
                : 'bg-red-50 text-red-700 border border-red-300'
            }`}>
              {wordCorrect
                ? '✅ ¡Correcto!'
                : `❌ La respuesta correcta es: ${question.spanish}`
              }
            </div>

            {needsGender && (
              <div className={`p-3 rounded-xl text-center text-sm border ${
                selectedGender === question.gender
                  ? 'bg-green-50 text-green-600 border-green-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}>
                {selectedGender === question.gender
                  ? '👌 ¡Género correcto!'
                  : `💡 ${question.spanish} es ${question.gender === 'm' ? 'masculino' : 'femenino'} (${question.gender === 'm' ? 'el/un' : 'la/una'})`
                }
              </div>
            )}

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
