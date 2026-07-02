export default function ResultsScreen({ score, totalQuestions, answers, user, onRestart, onBack }) {
  const isPrince = user === 'prince'
  const pct = Math.round((score / totalQuestions) * 100)

  const formalityQs = answers.filter(a => a.formalityCorrect !== null)
  const formalityScore = formalityQs.filter(a => a.formalityCorrect).length

  const grade =
    pct >= 90 ? { emoji: '🏆', text: '¡Excelente!' } :
    pct >= 70 ? { emoji: '🌟', text: '¡Muy bien!' } :
    pct >= 50 ? { emoji: '👍', text: '¡Bien!' } :
    pct >= 30 ? { emoji: '💪', text: 'Keep going!' } :
    { emoji: '📚', text: 'Time to study!' }

  const circumference = 2 * Math.PI * 50

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${
      isPrince
        ? 'bg-gradient-to-br from-red-50 via-amber-50 to-orange-100'
        : 'bg-gradient-to-br from-purple-50 via-fuchsia-50 to-cyan-100'
    }`}>
      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 max-w-md w-full text-center">
        <div className="text-6xl mb-3">{grade.emoji}</div>
        <h1 className={`text-3xl font-bold mb-1 ${isPrince ? 'text-red-800' : 'text-purple-800'}`}>
          {grade.text}
        </h1>
        <p className="text-gray-400 mb-8 text-sm">Quiz completed</p>

        <div className="relative w-36 h-36 mx-auto mb-8">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" stroke="#e5e7eb" strokeWidth="10" fill="none" />
            <circle
              cx="60" cy="60" r="50"
              stroke={isPrince ? '#dc2626' : '#9333ea'}
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${circumference}`}
              strokeDashoffset={circumference - (pct / 100) * circumference}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-3xl font-bold ${isPrince ? 'text-red-800' : 'text-purple-800'}`}>
              {score}/{totalQuestions}
            </span>
            <span className="text-sm text-gray-400">{pct}%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="text-2xl font-bold text-gray-800">{score}</div>
            <div className="text-xs text-gray-500 mt-1">Traductions correctes</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="text-2xl font-bold text-gray-800">
              {formalityQs.length > 0 ? `${formalityScore}/${formalityQs.length}` : '—'}
            </div>
            <div className="text-xs text-gray-500 mt-1">Formalité correcte</div>
          </div>
        </div>

        <button
          onClick={onRestart}
          className={`w-full py-4 rounded-2xl font-bold text-xl text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer ${
            isPrince
              ? 'bg-red-700 hover:bg-red-600'
              : 'bg-purple-700 hover:bg-purple-600'
          }`}
        >
          🔄 Rejouer
        </button>

        <button
          onClick={onBack}
          className="mt-3 text-gray-400 hover:text-gray-600 text-sm transition-colors cursor-pointer"
        >
          ← Change character
        </button>
      </div>
    </div>
  )
}
