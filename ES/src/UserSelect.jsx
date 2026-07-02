function CrownIcon() {
  return (
    <svg viewBox="0 0 100 80" className="w-24 h-24 mx-auto" fill="none">
      <path d="M10 58 L10 22 L28 35 L50 8 L72 35 L90 22 L90 58 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="50" cy="14" r="4" fill="currentColor" />
      <circle cx="25" cy="34" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="75" cy="34" r="3" fill="currentColor" opacity="0.5" />
      <rect x="10" y="50" width="80" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <polygon points="28,50 31,45 34,50" fill="currentColor" opacity="0.4" />
      <polygon points="50,50 53,45 56,50" fill="currentColor" opacity="0.4" />
      <polygon points="72,50 75,45 78,50" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

function HeroIcon() {
  return (
    <svg viewBox="0 0 100 80" className="w-24 h-24 mx-auto" fill="none">
      <path d="M50 5 L60 28 L85 30 L66 48 L72 75 L50 60 L28 75 L34 48 L15 30 L40 28 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="50" cy="40" r="5" fill="currentColor" opacity="0.4" />
      <path d="M50 20 L50 55 M38 35 L62 48 M38 48 L62 35" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    </svg>
  )
}

export default function UserSelect({ onSelect }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-10">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-2">🇪🇸</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Spanish Quiz</h2>
        <p className="text-gray-500">Choose your character to begin</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
        <button
          onClick={() => onSelect('prince')}
          className="flex-1 bg-gradient-to-b from-red-800 to-red-950 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border-2 border-red-600 group cursor-pointer"
        >
          <div className="text-amber-400 mb-4">
            <CrownIcon />
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">THE PRINCE</h2>
          <p className="text-amber-300/70 text-sm italic">"The ends justify the means"</p>
          <div className="mt-3 text-amber-200/50 text-xs">— Niccolò Machiavelli</div>
        </button>

        <button
          onClick={() => onSelect('main-character')}
          className="flex-1 bg-gradient-to-b from-purple-800 to-purple-950 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border-2 border-purple-600 group cursor-pointer"
        >
          <div className="text-cyan-400 mb-4">
            <HeroIcon />
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">MAIN CHARACTER</h2>
          <p className="text-cyan-300/70 text-sm italic">"The hero of this story"</p>
          <div className="mt-3 text-cyan-200/50 text-xs">★ Your journey begins</div>
        </button>
      </div>
    </div>
  )
}
