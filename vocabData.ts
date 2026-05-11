export interface PorParaChallenge {
  sentence: string;
  translation: string;
  correctAnswer: string;
  options: string[];
  reason: string;
}

export const POR_PARA_GRAMMAR = {
  por: [
    { label: "Պատճառ / Շարժառիթ", example: "Gracias por la ayuda." },
    { label: "Տարածություն / Ընթացք", example: "Camino por el parque." },
    { label: "Ժամանակ (մոտավոր)", example: "Te veo por la tarde." }
  ],
  para: [
    { label: "Նպատակ", example: "Estudio para aprender." },
    { label: "Ուղղություն (վերջնակետ)", example: "Voy para Madrid." },
    { label: "Վերջնաժամկետ", example: "Es para mañana." }
  ]
};

export const POR_PARA_CHALLENGES: PorParaChallenge[] = [
  {
    sentence: "Este libro es ___ mi padre.",
    translation: "Այս գիրքը հորս համար է:",
    correctAnswer: "para",
    options: ["por", "para"],
    reason: "Ստացող / Նպատակային ուղղվածություն"
  },
  {
    sentence: "Camino ___ el bosque.",
    translation: "Ես քայլում եմ անտառով (միջով):",
    correctAnswer: "por",
    options: ["por", "para"],
    reason: "Շարժում տարածության միջով"
  },
  {
    sentence: "Gracias ___ la llave del cofre.",
    translation: "Շնորհակալություն սնդուկի բանալու համար:",
    correctAnswer: "por",
    options: ["por", "para"],
    reason: "Փոխհատուցում / Պատճառ"
  },
  {
    sentence: "Ernesto estudia ___ descubrir el mapa.",
    translation: "Էռնեստոն սովորում է քարտեզը բացահայտելու համար:",
    correctAnswer: "para",
    options: ["por", "para"],
    reason: "Նպատակ (+ Infinitivo)"
  },
  {
    sentence: "Salimos ___ la mañana temprano.",
    translation: "Մենք դուրս ենք գալիս առավոտյան շուտ:",
    correctAnswer: "por",
    options: ["por", "para"],
    reason: "Ժամանակի հատված"
  },
  {
    sentence: "El mapa está listo ___ el viaje.",
    translation: "Քարտեզը պատրաստ է ճանապարհորդության համար:",
    correctAnswer: "para",
    options: ["por", "para"],
    reason: "Նպատակ"
  },
  {
    sentence: "Lo hago ___ amor a mi familia.",
    translation: "Ես դա անում եմ ընտանիքիս հանդեպ սիրուց դրդված:",
    correctAnswer: "por",
    options: ["por", "para"],
    reason: "Շարժառիթ / Պատճառ"
  },
  {
    sentence: "El tren sale ___ la capital.",
    translation: "Գնացքը մեկնում է դեպի մայրաքաղաք:",
    correctAnswer: "para",
    options: ["por", "para"],
    reason: "Ուղղություն / Վերջնակետ"
  },
  {
    sentence: "Busco el cofre ___ tres días.",
    translation: "Ես փնտրում եմ սնդուկը երեք օր շարունակ:",
    correctAnswer: "por",
    options: ["por", "para"],
    reason: "Տևողություն"
  },
  {
    sentence: "Necesito la llave ___ abrir el secreto.",
    translation: "Ինձ բանալի է պետք գաղտնիքը բացելու համար:",
    correctAnswer: "para",
    options: ["por", "para"],
    reason: "Նպատակ"
  }
];
