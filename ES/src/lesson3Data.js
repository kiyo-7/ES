const lesson3Questions = [
  // ===== SER =====
  { id: 1, verb: "Ser", pronoun: "yo", tense: "present", answer: "soy" },
  { id: 2, verb: "Ser", pronoun: "tú", tense: "present", answer: "eres" },
  { id: 3, verb: "Ser", pronoun: "él/ella/usted", tense: "present", answer: "es" },
  { id: 4, verb: "Ser", pronoun: "yo", tense: "past", answer: "fui" },
  { id: 5, verb: "Ser", pronoun: "tú", tense: "past", answer: "fuiste" },
  { id: 6, verb: "Ser", pronoun: "él/ella/usted", tense: "past", answer: "fue" },
  { id: 7, verb: "Ser", pronoun: "yo", tense: "future", answer: "seré" },
  { id: 8, verb: "Ser", pronoun: "tú", tense: "future", answer: "serás" },
  { id: 9, verb: "Ser", pronoun: "él/ella/usted", tense: "future", answer: "será" },

  // ===== ESTAR =====
  { id: 10, verb: "Estar", pronoun: "yo", tense: "present", answer: "estoy" },
  { id: 11, verb: "Estar", pronoun: "tú", tense: "present", answer: "estás" },
  { id: 12, verb: "Estar", pronoun: "él/ella/usted", tense: "present", answer: "está" },
  { id: 13, verb: "Estar", pronoun: "yo", tense: "past", answer: "estuve" },
  { id: 14, verb: "Estar", pronoun: "tú", tense: "past", answer: "estuviste" },
  { id: 15, verb: "Estar", pronoun: "él/ella/usted", tense: "past", answer: "estuvo" },
  { id: 16, verb: "Estar", pronoun: "yo", tense: "future", answer: "estaré" },
  { id: 17, verb: "Estar", pronoun: "tú", tense: "future", answer: "estarás" },
  { id: 18, verb: "Estar", pronoun: "él/ella/usted", tense: "future", answer: "estará" },

  // ===== TENER =====
  { id: 19, verb: "Tener", pronoun: "yo", tense: "present", answer: "tengo" },
  { id: 20, verb: "Tener", pronoun: "tú", tense: "present", answer: "tienes" },
  { id: 21, verb: "Tener", pronoun: "él/ella/usted", tense: "present", answer: "tiene" },
  { id: 22, verb: "Tener", pronoun: "yo", tense: "past", answer: "tuve" },
  { id: 23, verb: "Tener", pronoun: "tú", tense: "past", answer: "tuviste" },
  { id: 24, verb: "Tener", pronoun: "él/ella/usted", tense: "past", answer: "tuvo" },
  { id: 25, verb: "Tener", pronoun: "yo", tense: "future", answer: "tendré" },
  { id: 26, verb: "Tener", pronoun: "tú", tense: "future", answer: "tendrás" },
  { id: 27, verb: "Tener", pronoun: "él/ella/usted", tense: "future", answer: "tendrá" },

  // ===== HABER =====
  { id: 28, verb: "Haber", pronoun: "yo", tense: "present", answer: "he" },
  { id: 29, verb: "Haber", pronoun: "tú", tense: "present", answer: "has" },
  { id: 30, verb: "Haber", pronoun: "él/ella/usted", tense: "present", answer: "ha" },
  { id: 31, verb: "Haber", pronoun: "yo", tense: "past", answer: "hube" },
  { id: 32, verb: "Haber", pronoun: "tú", tense: "past", answer: "hubiste" },
  { id: 33, verb: "Haber", pronoun: "él/ella/usted", tense: "past", answer: "hubo" },
  { id: 34, verb: "Haber", pronoun: "yo", tense: "future", answer: "habré" },
  { id: 35, verb: "Haber", pronoun: "tú", tense: "future", answer: "habrás" },
  { id: 36, verb: "Haber", pronoun: "él/ella/usted", tense: "future", answer: "habrá" },

  // ===== HACER =====
  { id: 37, verb: "Hacer", pronoun: "yo", tense: "present", answer: "hago" },
  { id: 38, verb: "Hacer", pronoun: "tú", tense: "present", answer: "haces" },
  { id: 39, verb: "Hacer", pronoun: "él/ella/usted", tense: "present", answer: "hace" },
  { id: 40, verb: "Hacer", pronoun: "yo", tense: "past", answer: "hice" },
  { id: 41, verb: "Hacer", pronoun: "tú", tense: "past", answer: "hiciste" },
  { id: 42, verb: "Hacer", pronoun: "él/ella/usted", tense: "past", answer: "hizo" },
  { id: 43, verb: "Hacer", pronoun: "yo", tense: "future", answer: "haré" },
  { id: 44, verb: "Hacer", pronoun: "tú", tense: "future", answer: "harás" },
  { id: 45, verb: "Hacer", pronoun: "él/ella/usted", tense: "future", answer: "hará" },

  // ===== PODER =====
  { id: 46, verb: "Poder", pronoun: "yo", tense: "present", answer: "puedo" },
  { id: 47, verb: "Poder", pronoun: "tú", tense: "present", answer: "puedes" },
  { id: 48, verb: "Poder", pronoun: "él/ella/usted", tense: "present", answer: "puede" },
  { id: 49, verb: "Poder", pronoun: "yo", tense: "past", answer: "pude" },
  { id: 50, verb: "Poder", pronoun: "tú", tense: "past", answer: "pudiste" },
  { id: 51, verb: "Poder", pronoun: "él/ella/usted", tense: "past", answer: "pudo" },
  { id: 52, verb: "Poder", pronoun: "yo", tense: "future", answer: "podré" },
  { id: 53, verb: "Poder", pronoun: "tú", tense: "future", answer: "podrás" },
  { id: 54, verb: "Poder", pronoun: "él/ella/usted", tense: "future", answer: "podrá" },

  // ===== IR =====
  { id: 55, verb: "Ir", pronoun: "yo", tense: "present", answer: "voy" },
  { id: 56, verb: "Ir", pronoun: "tú", tense: "present", answer: "vas" },
  { id: 57, verb: "Ir", pronoun: "él/ella/usted", tense: "present", answer: "va" },
  { id: 58, verb: "Ir", pronoun: "yo", tense: "past", answer: "fui" },
  { id: 59, verb: "Ir", pronoun: "tú", tense: "past", answer: "fuiste" },
  { id: 60, verb: "Ir", pronoun: "él/ella/usted", tense: "past", answer: "fue" },
  { id: 61, verb: "Ir", pronoun: "yo", tense: "future", answer: "iré" },
  { id: 62, verb: "Ir", pronoun: "tú", tense: "future", answer: "irás" },
  { id: 63, verb: "Ir", pronoun: "él/ella/usted", tense: "future", answer: "irá" },

  // ===== QUERER =====
  { id: 64, verb: "Querer", pronoun: "yo", tense: "present", answer: "quiero" },
  { id: 65, verb: "Querer", pronoun: "tú", tense: "present", answer: "quieres" },
  { id: 66, verb: "Querer", pronoun: "él/ella/usted", tense: "present", answer: "quiere" },
  { id: 67, verb: "Querer", pronoun: "yo", tense: "past", answer: "quise" },
  { id: 68, verb: "Querer", pronoun: "tú", tense: "past", answer: "quisiste" },
  { id: 69, verb: "Querer", pronoun: "él/ella/usted", tense: "past", answer: "quiso" },
  { id: 70, verb: "Querer", pronoun: "yo", tense: "future", answer: "querré" },
  { id: 71, verb: "Querer", pronoun: "tú", tense: "future", answer: "querrás" },
  { id: 72, verb: "Querer", pronoun: "él/ella/usted", tense: "future", answer: "querrá" },

  // ===== DECIR =====
  { id: 73, verb: "Decir", pronoun: "yo", tense: "present", answer: "digo" },
  { id: 74, verb: "Decir", pronoun: "tú", tense: "present", answer: "dices" },
  { id: 75, verb: "Decir", pronoun: "él/ella/usted", tense: "present", answer: "dice" },
  { id: 76, verb: "Decir", pronoun: "yo", tense: "past", answer: "dije" },
  { id: 77, verb: "Decir", pronoun: "tú", tense: "past", answer: "dijiste" },
  { id: 78, verb: "Decir", pronoun: "él/ella/usted", tense: "past", answer: "dijo" },
  { id: 79, verb: "Decir", pronoun: "yo", tense: "future", answer: "diré" },
  { id: 80, verb: "Decir", pronoun: "tú", tense: "future", answer: "dirás" },
  { id: 81, verb: "Decir", pronoun: "él/ella/usted", tense: "future", answer: "dirá" },

  // ===== SABER =====
  { id: 82, verb: "Saber", pronoun: "yo", tense: "present", answer: "sé" },
  { id: 83, verb: "Saber", pronoun: "tú", tense: "present", answer: "sabes" },
  { id: 84, verb: "Saber", pronoun: "él/ella/usted", tense: "present", answer: "sabe" },
  { id: 85, verb: "Saber", pronoun: "yo", tense: "past", answer: "supe" },
  { id: 86, verb: "Saber", pronoun: "tú", tense: "past", answer: "supiste" },
  { id: 87, verb: "Saber", pronoun: "él/ella/usted", tense: "past", answer: "supo" },
  { id: 88, verb: "Saber", pronoun: "yo", tense: "future", answer: "sabré" },
  { id: 89, verb: "Saber", pronoun: "tú", tense: "future", answer: "sabrás" },
  { id: 90, verb: "Saber", pronoun: "él/ella/usted", tense: "future", answer: "sabrá" },

  // ===== VER =====
  { id: 91, verb: "Ver", pronoun: "yo", tense: "present", answer: "veo" },
  { id: 92, verb: "Ver", pronoun: "tú", tense: "present", answer: "ves" },
  { id: 93, verb: "Ver", pronoun: "él/ella/usted", tense: "present", answer: "ve" },
  { id: 94, verb: "Ver", pronoun: "yo", tense: "past", answer: "vi" },
  { id: 95, verb: "Ver", pronoun: "tú", tense: "past", answer: "viste" },
  { id: 96, verb: "Ver", pronoun: "él/ella/usted", tense: "past", answer: "vio" },
  { id: 97, verb: "Ver", pronoun: "yo", tense: "future", answer: "veré" },
  { id: 98, verb: "Ver", pronoun: "tú", tense: "future", answer: "verás" },
  { id: 99, verb: "Ver", pronoun: "él/ella/usted", tense: "future", answer: "verá" },

  // ===== OLVIDAR =====
  { id: 100, verb: "Olvidar", pronoun: "yo", tense: "present", answer: "olvido" },
  { id: 101, verb: "Olvidar", pronoun: "tú", tense: "present", answer: "olvidas" },
  { id: 102, verb: "Olvidar", pronoun: "él/ella/usted", tense: "present", answer: "olvida" },
  { id: 103, verb: "Olvidar", pronoun: "yo", tense: "past", answer: "olvidé" },
  { id: 104, verb: "Olvidar", pronoun: "tú", tense: "past", answer: "olvidaste" },
  { id: 105, verb: "Olvidar", pronoun: "él/ella/usted", tense: "past", answer: "olvidó" },
  { id: 106, verb: "Olvidar", pronoun: "yo", tense: "future", answer: "olvidaré" },
  { id: 107, verb: "Olvidar", pronoun: "tú", tense: "future", answer: "olvidarás" },
  { id: 108, verb: "Olvidar", pronoun: "él/ella/usted", tense: "future", answer: "olvidará" },
]

export default lesson3Questions
