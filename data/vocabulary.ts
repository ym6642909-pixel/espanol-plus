export type VocabularyItem = {
  id: string;
  lessonId: string;
  spanish: string;
  arabic: string;
  pronunciation: string;
  exampleSpanish: string;
  exampleArabic: string;
};

export const vocabulary: VocabularyItem[] = [
  {
    id: "A1-U1-L1-V1",
    lessonId: "A1-U1-L1",
    spanish: "Hola",
    arabic: "مرحبًا",
    pronunciation: "أولا",
    exampleSpanish: "¡Hola! ¿Cómo estás?",
    exampleArabic: "مرحبًا! كيف حالك؟",
  },
  {
    id: "A1-U1-L1-V2",
    lessonId: "A1-U1-L1",
    spanish: "Buenos días",
    arabic: "صباح الخير",
    pronunciation: "بوينوس دياس",
    exampleSpanish: "Buenos días, María.",
    exampleArabic: "صباح الخير، ماريا.",
  },
  {
    id: "A1-U1-L1-V3",
    lessonId: "A1-U1-L1",
    spanish: "Buenas tardes",
    arabic: "مساء الخير",
    pronunciation: "بويناس تاردِس",
    exampleSpanish: "Buenas tardes, señor.",
    exampleArabic: "مساء الخير، سيدي.",
  },
  {
    id: "A1-U1-L1-V4",
    lessonId: "A1-U1-L1",
    spanish: "Buenas noches",
    arabic: "مساء الخير / ليلة سعيدة",
    pronunciation: "بويناس نوتشِس",
    exampleSpanish: "Buenas noches, hasta mañana.",
    exampleArabic: "ليلة سعيدة، أراك غدًا.",
  },
  {
    id: "A1-U1-L1-V5",
    lessonId: "A1-U1-L1",
    spanish: "Adiós",
    arabic: "وداعًا",
    pronunciation: "أديوس",
    exampleSpanish: "Adiós, nos vemos mañana.",
    exampleArabic: "وداعًا، نراك غدًا.",
  },
  {
    id: "A1-U1-L1-V6",
    lessonId: "A1-U1-L1",
    spanish: "Hasta luego",
    arabic: "أراك لاحقًا",
    pronunciation: "أستا لويغو",
    exampleSpanish: "Hasta luego, Carlos.",
    exampleArabic: "أراك لاحقًا، كارلوس.",
  },
  {
    id: "A1-U1-L1-V7",
    lessonId: "A1-U1-L1",
    spanish: "Gracias",
    arabic: "شكرًا",
    pronunciation: "غراسياس",
    exampleSpanish: "Gracias por tu ayuda.",
    exampleArabic: "شكرًا على مساعدتك.",
  },
  {
    id: "A1-U1-L1-V8",
    lessonId: "A1-U1-L1",
    spanish: "Por favor",
    arabic: "من فضلك",
    pronunciation: "بور فافور",
    exampleSpanish: "Un café, por favor.",
    exampleArabic: "قهوة من فضلك.",
  },
  {
    id: "A1-U1-L1-V9",
    lessonId: "A1-U1-L1",
    spanish: "Sí",
    arabic: "نعم",
    pronunciation: "سي",
    exampleSpanish: "Sí, gracias.",
    exampleArabic: "نعم، شكرًا.",
  },
  {
    id: "A1-U1-L1-V10",
    lessonId: "A1-U1-L1",
    spanish: "No",
    arabic: "لا",
    pronunciation: "نو",
    exampleSpanish: "No, gracias.",
    exampleArabic: "لا، شكرًا.",
  },
];
