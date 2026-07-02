export default function StartScreen({ user, onStart, onBack }) {
  const isPrince = user === 'prince'

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${
      isPrince
        ? 'bg-gradient-to-br from-red-50 via-amber-50 to-orange-100'
        : 'bg-gradient-to-br from-purple-50 via-fuchsia-50 to-cyan-100'
    }`}>
      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 max-w-md w-full text-center">
        <div className="text-6xl mb-4">{isPrince ? '👑' : '⭐'}</div>
        <h1 className={`text-3xl font-bold mb-3 ${isPrince ? 'text-red-800' : 'text-purple-800'}`}>
          ¿Listo, {isPrince ? 'Príncipe' : 'Protagonista'}?
        </h1>
        <p className="text-gray-500 mb-6">
          Test your Spanish with {isPrince ? 'Machiavellian precision' : 'heroic determination'}!
        </p>

        <div className="space-y-3 mb-8 text-left bg-gray-50 rounded-2xl p-5">
          <h3 className="font-semibold text-gray-700">📋 How it works</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 31 questions on Spanish greetings & pronouns</li>
            <li>• Pick the correct French translation (5 choices)</li>
            <li>• Identify if the greeting is formal or informal</li>
            <li>• 1 point per correct translation</li>
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
          🚀 Commencer le quiz
        </button>

        <button
          onClick={onBack}
          className="mt-4 text-gray-400 hover:text-gray-600 text-sm transition-colors cursor-pointer"
        >
          ← Change character
        </button>
      </div>
    </div>
  )
}
