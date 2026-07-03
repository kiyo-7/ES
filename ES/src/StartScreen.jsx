export default function StartScreen({ user, lesson, onStart, onTest, onBack }) {
  const isPrince = user === 'prince'
  const isLesson1 = lesson === 'lesson1'

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${
      isPrince
        ? 'bg-linear-to-br from-red-50 via-amber-50 to-orange-100'
        : 'bg-linear-to-br from-purple-50 via-fuchsia-50 to-cyan-100'
    }`}>
      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 max-w-md w-full text-center">
        <div className="text-6xl mb-4">{isLesson1 ? '📖' : '🎨'}</div>
        <h1 className={`text-3xl font-bold mb-3 ${isPrince ? 'text-red-800' : 'text-purple-800'}`}>
          {isLesson1
            ? `¿Listo, ${isPrince ? 'Príncipe' : 'Protagonista'}?`
            : `¿Preparado, ${isPrince ? 'Príncipe' : 'Protagonista'}?`
          }
        </h1>
        <p className="text-gray-500 mb-6">
          {isLesson1
            ? 'Test your Spanish greetings & pronouns!'
            : 'Build your Spanish vocabulary!'
          }
        </p>

        <div className="space-y-3 mb-8 text-left bg-gray-50 rounded-2xl p-5">
          <h3 className="font-semibold text-gray-700">📋 How it works</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {isLesson1 ? (
              <>
                <li>• 31 questions on greetings &amp; pronouns</li>
                <li>• Pick the correct French translation (5 choices)</li>
                <li>• Identify if the greeting is formal or informal</li>
                <li>• 1 point per correct translation</li>
              </>
            ) : (
              <>
                <li>• 48 questions across 12 vocabulary categories</li>
                <li>• Identify the word from a visual clue (emoji, color, digit)</li>
                <li>• Choose the correct article gender (el / la)</li>
                <li>• 1 point per word + 1 point per article</li>
                <li>• ⏱ Chronometer runs from start to end</li>
              </>
            )}
          </ul>
        </div>

        <button
          onClick={onStart}
          className={`w-full py-4 rounded-2xl font-bold text-xl text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer ${
            isPrince
              ? 'bg-red-700 hover:bg-red-600'
              : 'bg-purple-700 hover:bg-purple-600'
          }`}
        >
          🚀 {isLesson1 ? 'Commencer le quiz' : '¡Empezar!'}
        </button>

        {!isPrince && (
          <button
            onClick={onTest}
            className="mt-4 text-xs text-gray-400 hover:text-purple-500 underline transition-colors cursor-pointer"
          >
            🔍 Test Score (94%)
          </button>
        )}

        <button
          onClick={onBack}
          className="mt-3 text-gray-400 hover:text-gray-600 text-sm transition-colors cursor-pointer"
        >
          ← Change lesson
        </button>
      </div>
    </div>
  )
}
