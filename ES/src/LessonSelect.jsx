export default function LessonSelect({ user, onSelect }) {
  const isPrince = user === 'prince'

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${
      isPrince
        ? 'bg-linear-to-br from-red-50 via-amber-50 to-orange-100'
        : 'bg-linear-to-br from-purple-50 via-fuchsia-50 to-cyan-100'
    }`}>
      <div className="text-center mb-8">
        <div className="text-5xl mb-2">{isPrince ? '👑' : '⭐'}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Choose your lesson</h2>
        <p className="text-gray-400 text-sm">What would you like to learn today?</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 w-full max-w-2xl">
        <button
          onClick={() => onSelect('lesson1')}
          className={`flex-1 bg-white rounded-3xl p-7 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border-2 cursor-pointer text-left ${
            isPrince ? 'border-red-200 hover:border-red-400' : 'border-purple-200 hover:border-purple-400'
          }`}
        >
          <div className="text-4xl mb-3">📖</div>
          <h3 className={`text-xl font-bold mb-1 ${isPrince ? 'text-red-800' : 'text-purple-800'}`}>
            Lesson 1
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Greetings &amp; Pronouns<br />
            <span className="text-xs text-gray-400">31 questions — translations + formality</span>
          </p>
        </button>

        <button
          onClick={() => onSelect('lesson2')}
          className={`flex-1 bg-white rounded-3xl p-7 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border-2 cursor-pointer text-left ${
            isPrince ? 'border-red-200 hover:border-red-400' : 'border-purple-200 hover:border-purple-400'
          }`}
        >
          <div className="text-4xl mb-3">🎨</div>
          <h3 className={`text-xl font-bold mb-1 ${isPrince ? 'text-red-800' : 'text-purple-800'}`}>
            Lesson 2
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Visual Vocabulary<br />
            <span className="text-xs text-gray-400">57 questions — images + gender (el/la)</span>
          </p>
        </button>
      </div>
    </div>
  )
}
