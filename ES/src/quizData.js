const questions = [
  // === Informal greetings ===
  { id: 1, spanish: "Hola", french: "Salut / Bonjour", formality: "informal", category: "greeting" },
  { id: 2, spanish: "¡Hola, qué tal!", french: "Salut, ça va ?", formality: "informal", category: "greeting" },
  { id: 3, spanish: "¿Qué tal?", french: "Ça va ?", formality: "informal", category: "greeting" },
  { id: 4, spanish: "¿Cómo estás?", french: "Comment vas-tu ?", formality: "informal", category: "greeting" },
  { id: 5, spanish: "¿Cómo te va?", french: "Comment ça va ?", formality: "informal", category: "greeting" },
  { id: 6, spanish: "¿Qué pasa?", french: "Quoi de neuf ?", formality: "informal", category: "greeting" },
  { id: 7, spanish: "¿Qué hay de nuevo?", french: "Quoi de neuf ?", formality: "informal", category: "greeting" },
  { id: 8, spanish: "¿Qué haces?", french: "Que fais-tu ?", formality: "informal", category: "greeting" },
  { id: 9, spanish: "¡Ey! / ¡Hey!", french: "Hé !", formality: "informal", category: "greeting" },
  { id: 10, spanish: "¿Todo bien?", french: "Tout va bien ?", formality: "informal", category: "greeting" },
  { id: 11, spanish: "¿Cómo andas?", french: "Comment ça va ?", formality: "informal", category: "greeting" },

  // === Ambivalent greetings (both formal & informal) ===
  { id: 12, spanish: "Buenos días", french: "Bonjour (le matin)", formality: "both", category: "greeting" },
  { id: 13, spanish: "Buenas tardes", french: "Bon après-midi / Bonsoir", formality: "both", category: "greeting" },
  { id: 14, spanish: "Buenas noches", french: "Bonsoir / Bonne nuit", formality: "both", category: "greeting" },

  // === Formal greetings ===
  { id: 15, spanish: "¿Cómo está usted?", french: "Comment allez-vous ?", formality: "formal", category: "greeting" },
  { id: 16, spanish: "¿Cómo se encuentra?", french: "Comment vous sentez-vous ?", formality: "formal", category: "greeting" },
  { id: 17, spanish: "Mucho gusto", french: "Enchanté(e)", formality: "formal", category: "greeting" },
  { id: 18, spanish: "Encantado/a de conocerle", french: "Ravi(e) de vous rencontrer", formality: "formal", category: "greeting" },
  { id: 19, spanish: "Es un placer conocerle", french: "C'est un plaisir de vous rencontrer", formality: "formal", category: "greeting" },
  { id: 20, spanish: "Bienvenido/a", french: "Bienvenue", formality: "formal", category: "greeting" },
  { id: 21, spanish: "¿Qué tal está usted?", french: "Comment allez-vous ?", formality: "formal", category: "greeting" },

  // === Personal pronouns ===
  { id: 22, spanish: "Yo", french: "Je", category: "pronoun" },
  { id: 23, spanish: "Tú", french: "Tu", category: "pronoun" },
  { id: 24, spanish: "Él", french: "Il", category: "pronoun" },
  { id: 25, spanish: "Ella", french: "Elle", category: "pronoun" },
  { id: 26, spanish: "Usted", french: "Vous (politesse, singulier)", category: "pronoun" },
  { id: 27, spanish: "Nosotros / Nosotras", french: "Nous", category: "pronoun" },
  { id: 28, spanish: "Vosotros / Vosotras", french: "Vous (pluriel, Espagne)", category: "pronoun" },
  { id: 29, spanish: "Ustedes", french: "Vous (pluriel, formel ou Amérique latine)", category: "pronoun" },
  { id: 30, spanish: "Ellos", french: "Ils", category: "pronoun" },
  { id: 31, spanish: "Ellas", french: "Elles", category: "pronoun" },
]

export default questions
