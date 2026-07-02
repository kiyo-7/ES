import { useState, useMemo } from 'react'
import allQuestions from './quizData'

export default function QuizQuestion({ question, totalQuestions, currentIndex, score, onAnswer, onNext, user }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [selectedFormality, setSelectedFormality] = useState(null)
  const [answered, setAnswered] = useState(false)

  const isPrince = user === 'prince'

  const options = useMemo(() => {
    const uniqueFrench = [...new Set(allQuestions.map(q => q.french))]
    const correct = question.french
    const others = uniqueFrench.filter(f => f !== correct)
    for (let i = others.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [others[i], others[j]] = [others[j], others[i]]
    }
    const distractors = others.slice(0, 4)
    const all = [correct, ...distractors]
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]]
    }
    return all
  }, [question.id])

  const needsFormality = question.formality === 'formal' || question.formality === 'informal'

  const handleSelect = (option) => {
    if (!answered) setSelectedAnswer(option)
  }

  const handleConfirm = () => {
    if (answered) return
    const correct = selectedAnswer === question.french
    const formalityCorrect = needsFormality ? selectedFormality === question.formality : null
    setAnswered(true)
    onAnswer(question.id, selectedAnswer, correct, formalityCorrect)
  }

  const handleNext = () => {
    setSelectedAnswer(null)
    setSelectedFormality(null)
    setAnswered(false)
    onNext()
  }

  const canConfirm = selectedAnswer !== null && (!needsFormality || selectedFormality !== null)

  const categoryLabel = question.category === 'greeting' ? '👋 Salutation' : '👤 Pronom'
  const answerCorrect = answered && selectedAnswer === question.french
  const answerWrong = answered && selectedAnswer !== question.french

  const btnBase = 'w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 text-base font-medium cursor-pointer'

  function optionClass(option) {
    const isSelected = selectedAnswer === option
    const isCorrectAnswer = option === question.french

    if (answered) {
      if (isCorrectAnswer) return `${btnBase} border-green-500 bg-green-50 text-green-800`
      if (isSelected) return `${btnBase} border-red-500 bg-red-50 text-red-800 line-through`
      return `${btnBase} border-gray-200 bg-gray-50 text-gray-400`
    }
    if (isSelected) {
      return `${btnBase} ${isPrince ? 'border-red-500 bg-red-50 text-red-800' : 'border-purple-500 bg-purple-50 text-purple-800'}`
    }
    return `${btnBase} border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700`
  }

  function formalityBtnClass(type) {
    const isSelected = selectedFormality === type
    const isCorrect = question.formality === type

    if (answered) {
      if (isCorrect) return 'cursor-pointer px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-green-100 text-green-700 border-2 border-green-500'
      if (isSelected) return 'cursor-pointer px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-red-100 text-red-700 border-2 border-red-500'
      return 'cursor-pointer px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-gray-100 text-gray-400 border-2 border-gray-200'
    }
    if (isSelected) {
      return `cursor-pointer px-6 py-3 rounded-xl font-medium transition-all duration-200 ${isPrince ? 'bg-red-100 text-red-700 border-2 border-red-500' : 'bg-purple-100 text-purple-700 border-2 border-purple-500'}`
    }
    return 'cursor-pointer px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-gray-100 text-gray-600 border-2 border-gray-200 hover:border-gray-400'
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 ${
      isPrince
        ? 'bg-gradient-to-br from-red-50 via-amber-50 to-orange-100'
        : 'bg-gradient-to-br from-purple-50 via-fuchsia-50 to-cyan-100'
    }`}>
      <div className="w-full max-w-lg mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 text-sm font-medium">
            {currentIndex + 1} / {totalQuestions}
          </span>
          <span className="text-gray-500 text-sm font-medium">
            ✅ {score}
          </span>
        </div>
        <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ease-out ${isPrince ? 'bg-red-600' : 'bg-purple-600'}`}
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-6 sm:p-8">
        <div className="text-center mb-1">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500 uppercase tracking-wide">
            {categoryLabel}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 my-4 leading-tight">
          {question.spanish}
        </h2>

        <p className="text-center text-gray-400 text-sm mb-6">Que signifie cette phrase ?</p>

        <div className="space-y-3">
          {options.map((option, i) => (
            <button key={i} onClick={() => handleSelect(option)} disabled={answered} className={optionClass(option)}>
              {option}
            </button>
          ))}
        </div>

        {needsFormality && (
          <div className="mt-6">
            <p className="text-center text-gray-500 text-sm mb-3 font-medium">
              Formelle ou informelle ?
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => !answered && setSelectedFormality('formal')}
                disabled={answered}
                className={formalityBtnClass('formal')}
              >
                👔 Formelle
              </button>
              <button
                onClick={() => !answered && setSelectedFormality('informal')}
                disabled={answered}
                className={formalityBtnClass('informal')}
              >
                🫶 Informelle
              </button>
            </div>
          </div>
        )}

        {!needsFormality && !answered && question.category === 'greeting' && (
          <div className="mt-4 text-center text-gray-400 text-xs">
            Cette salutation fonctionne dans les deux contextes
          </div>
        )}

        {!needsFormality && question.category === 'pronoun' && !answered && (
          <div className="mt-4 text-center text-gray-400 text-xs">
            (pronoms — pas de distinction formel/informel)
          </div>
        )}

        {!answered && (
          <button
            onClick={handleConfirm}
            disabled={!canConfirm}
            className={`w-full mt-6 py-3.5 rounded-2xl font-bold text-lg transition-all duration-200 cursor-pointer ${
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
          <div className="mt-6 space-y-3">
            <div className={`p-4 rounded-2xl text-center font-semibold ${
              answerCorrect
                ? 'bg-green-50 text-green-700 border border-green-300'
                : 'bg-red-50 text-red-700 border border-red-300'
            }`}>
              {answerCorrect
                ? '✅ Correcto !'
                : `❌ Oops ! La bonne réponse était : ${question.french}`
              }
            </div>

            {needsFormality && (
              <div className={`p-3 rounded-xl text-center text-sm border ${
                selectedFormality === question.formality
                  ? 'bg-green-50 text-green-600 border-green-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}>
                {selectedFormality === question.formality
                  ? '👌 Bonne formality !'
                  : `💡 Cette phrase est ${question.formality === 'formal' ? 'formelle' : 'informelle'} (tu as sélectionné "${selectedFormality}")`
                }
              </div>
            )}

            {question.formality === 'both' && (
              <div className="p-3 rounded-xl text-center text-sm bg-blue-50 text-blue-700 border border-blue-200">
                💡 Cette salutation est utilisée dans les contextes formel ET informel.
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
