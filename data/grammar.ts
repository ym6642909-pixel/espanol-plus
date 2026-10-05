export type GrammarItem = {
  id: string;
  lessonId: string;
  title: string;
  explanation: string;
  examples: {
    spanish: string;
    arabic: string;
  }[];
};

export const grammar: GrammarItem[] = [
  {
    id: "A1-U1-L1-G1",
    lessonId: "A1-U1-L1",
    title: "التعريف بالنفس باستخدام Ser",
    explanation:
      "نستخدم الفعل ser للتعبير عن الهوية والتعريف بالنفس. في هذه المرحلة سنتعلم استخدامه مع الضمير yo، أي أنا.",
    examples: [
      {
        spanish: "Yo soy Youssef.",
        arabic: "أنا يوسف.",
      },
      {
        spanish: "Yo soy estudiante.",
        arabic: "أنا طالب.",
      },
      {
        spanish: "Soy de Egipto.",
        arabic: "أنا من مصر.",
      },
    ],
  },
];
