export type Level = {
  id: string;
  name: string;
  title: string;
  description: string;
  totalLessons: number;
};

export const levels: Level[] = [
  {
    id: "A1",
    name: "A1",
    title: "المبتدئ",
    description: "ابدأ أساسيات اللغة الإسبانية من الصفر.",
    totalLessons: 50,
  },
  {
    id: "A2",
    name: "A2",
    title: "ما قبل المتوسط",
    description: "طوّر قدرتك على التواصل في المواقف اليومية.",
    totalLessons: 50,
  },
  {
    id: "B1",
    name: "B1",
    title: "المتوسط",
    description: "تحدث وفهم الإسبانية بثقة أكبر.",
    totalLessons: 60,
  },
  {
    id: "B2",
    name: "B2",
    title: "فوق المتوسط",
    description: "طوّر الطلاقة والفهم والتعبير.",
    totalLessons: 60,
  },
  {
    id: "C1",
    name: "C1",
    title: "المتقدم",
    description: "استخدم الإسبانية بمستوى متقدم.",
    totalLessons: 70,
  },
  {
    id: "C2",
    name: "C2",
    title: "إتقان اللغة",
    description: "اقترب من أعلى مستويات إتقان الإسبانية.",
    totalLessons: 70,
  },
];
