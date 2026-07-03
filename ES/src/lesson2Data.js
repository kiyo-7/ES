const lesson2Questions = [
  { id: 1, category: "colores", spanish: "rojo", gender: null, display: { type: "color", value: "#FF0000" } },
  { id: 2, category: "colores", spanish: "azul", gender: null, display: { type: "color", value: "#0000FF" } },
  { id: 3, category: "colores", spanish: "verde", gender: null, display: { type: "color", value: "#008000" } },
  { id: 4, category: "colores", spanish: "amarillo", gender: null, display: { type: "color", value: "#FFD700" } },
  { id: 5, category: "colores", spanish: "negro", gender: null, display: { type: "color", value: "#000000" } },

  { id: 6, category: "frutas", spanish: "manzana", gender: "f", display: { type: "emoji", value: "🍎" } },
  { id: 7, category: "frutas", spanish: "plátano", gender: "m", display: { type: "emoji", value: "🍌" } },
  { id: 8, category: "frutas", spanish: "naranja", gender: "f", display: { type: "emoji", value: "🍊" } },
  { id: 9, category: "frutas", spanish: "fresa", gender: "f", display: { type: "emoji", value: "🍓" } },
  { id: 10, category: "frutas", spanish: "sandía", gender: "f", display: { type: "emoji", value: "🍉" } },

  { id: 11, category: "animales", spanish: "perro", gender: "m", display: { type: "emoji", value: "🐕" } },
  { id: 12, category: "animales", spanish: "gato", gender: "m", display: { type: "emoji", value: "🐈" } },
  { id: 13, category: "animales", spanish: "caballo", gender: "m", display: { type: "emoji", value: "🐴" } },
  { id: 14, category: "animales", spanish: "vaca", gender: "f", display: { type: "emoji", value: "🐄" } },
  { id: 15, category: "animales", spanish: "león", gender: "m", display: { type: "emoji", value: "🦁" } },

  { id: 16, category: "objetos", spanish: "casa", gender: "f", display: { type: "emoji", value: "🏠" } },
  { id: 17, category: "objetos", spanish: "puerta", gender: "f", display: { type: "emoji", value: "🚪" } },
  { id: 18, category: "objetos", spanish: "ventana", gender: "f", display: { type: "emoji", value: "🪟" } },
  { id: 19, category: "objetos", spanish: "teléfono", gender: "m", display: { type: "emoji", value: "📱" } },
  { id: 20, category: "objetos", spanish: "dinero", gender: "m", display: { type: "emoji", value: "💰" } },

  { id: 21, category: "vida-cotidiana", spanish: "escuela", gender: "f", display: { type: "emoji", value: "🏫" } },
  { id: 22, category: "vida-cotidiana", spanish: "hospital", gender: "m", display: { type: "emoji", value: "🏥" } },
  { id: 23, category: "vida-cotidiana", spanish: "coche", gender: "m", display: { type: "emoji", value: "🚗" } },
  { id: 24, category: "vida-cotidiana", spanish: "tren", gender: "m", display: { type: "emoji", value: "🚂" } },
  { id: 25, category: "vida-cotidiana", spanish: "bicicleta", gender: "f", display: { type: "emoji", value: "🚲" } },

  { id: 26, category: "personas", spanish: "hombre", gender: "m", display: { type: "emoji", value: "👨" } },
  { id: 27, category: "personas", spanish: "mujer", gender: "f", display: { type: "emoji", value: "👩" } },
  { id: 28, category: "personas", spanish: "niño", gender: "m", display: { type: "emoji", value: "👦" } },
  { id: 29, category: "personas", spanish: "profesor", gender: "m", display: { type: "emoji", value: "👨‍🏫" } },
  { id: 30, category: "personas", spanish: "estudiante", gender: "m", display: { type: "emoji", value: "🧑‍🎓" } },

  { id: 31, category: "familia", spanish: "madre", gender: "f", display: { type: "emoji", value: "👩" } },
  { id: 32, category: "familia", spanish: "padre", gender: "m", display: { type: "emoji", value: "👨" } },
  { id: 33, category: "familia", spanish: "hermano", gender: "m", display: { type: "emoji", value: "👦" } },
  { id: 34, category: "familia", spanish: "abuelo", gender: "m", display: { type: "emoji", value: "👴" } },
  { id: 35, category: "familia", spanish: "abuela", gender: "f", display: { type: "emoji", value: "👵" } },

  { id: 36, category: "edad-tiempo", spanish: "año", gender: "m", display: { type: "emoji", value: "📅" } },
  { id: 37, category: "edad-tiempo", spanish: "mes", gender: "m", display: { type: "emoji", value: "📅" } },
  { id: 38, category: "edad-tiempo", spanish: "semana", gender: "f", display: { type: "emoji", value: "📅" } },
  { id: 39, category: "edad-tiempo", spanish: "día", gender: "m", display: { type: "emoji", value: "🌞" } },

  { id: 40, category: "reperes-temporels", spanish: "hoy", gender: null, display: { type: "text", value: "aujourd'hui" } },
  { id: 41, category: "reperes-temporels", spanish: "ayer", gender: null, display: { type: "text", value: "hier" } },
  { id: 42, category: "reperes-temporels", spanish: "mañana", gender: null, display: { type: "text", value: "demain" } },
  { id: 43, category: "reperes-temporels", spanish: "siempre", gender: null, display: { type: "text", value: "toujours" } },

  { id: 44, category: "meteo", spanish: "sol", gender: "m", display: { type: "emoji", value: "☀️" } },
  { id: 45, category: "meteo", spanish: "lluvia", gender: "f", display: { type: "emoji", value: "🌧️" } },
  { id: 46, category: "meteo", spanish: "nieve", gender: "f", display: { type: "emoji", value: "❄️" } },
  { id: 47, category: "meteo", spanish: "viento", gender: "m", display: { type: "emoji", value: "💨" } },
  { id: 48, category: "meteo", spanish: "nube", gender: "f", display: { type: "emoji", value: "☁️" } },

  { id: 49, category: "cuerpo", spanish: "ojo", gender: "m", display: { type: "emoji", value: "👁️" } },
  { id: 50, category: "cuerpo", spanish: "mano", gender: "f", display: { type: "emoji", value: "✋" } },
  { id: 51, category: "cuerpo", spanish: "boca", gender: "f", display: { type: "emoji", value: "👄" } },
  { id: 52, category: "cuerpo", spanish: "pie", gender: "m", display: { type: "emoji", value: "🦶" } },

  { id: 53, category: "numeros", spanish: "once", gender: null, display: { type: "digit", value: "11" } },
  { id: 54, category: "numeros", spanish: "quince", gender: null, display: { type: "digit", value: "15" } },
  { id: 55, category: "numeros", spanish: "veinte", gender: null, display: { type: "digit", value: "20" } },
  { id: 56, category: "numeros", spanish: "treinta y uno", gender: null, display: { type: "digit", value: "31" } },
  { id: 57, category: "numeros", spanish: "cuarenta y dos", gender: null, display: { type: "digit", value: "42" } },
  { id: 58, category: "numeros", spanish: "noventa y nueve", gender: null, display: { type: "digit", value: "99" } },
  { id: 59, category: "numeros", spanish: "cien", gender: null, display: { type: "digit", value: "100" } },
  { id: 60, category: "numeros", spanish: "uno y medio", gender: null, display: { type: "digit", value: "1,5" } },
]

export default lesson2Questions
