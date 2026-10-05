"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  Clock3,
  Filter,
  Lock,
  Search,
  Star,
  Trophy,
} from "lucide-react";

type Level = "A1" | "A2" | "B1" | "B2" | "C1";

type GrammarTopic = {
  id: number;
  level: Level;
  title: string;
  description: string;
  example: string;
  translation: string;
  lessons: number;
  duration: string;
  progress: number;
  completed: boolean;
  locked: boolean;
  category: string;
};

const levels: Level[] = ["A1", "A2", "B1", "B2", "C1"];

const levelInfo: Record<
  Level,
  {
    name: string;
    description: string;
  }
> = {
  A1: {
    name: "مبتدئ",
    description: "أساسيات القواعد الإسبانية",
  },
  A2: {
    name: "مبتدئ متقدم",
    description: "بناء جمل أكثر تنوعًا",
  },
  B1: {
    name: "متوسط",
    description: "التعبير عن الأفكار والمواقف",
  },
  B2: {
    name: "فوق المتوسط",
    description: "قواعد متقدمة واستخدام طبيعي",
  },
  C1: {
    name: "متقدم",
    description: "إتقان دقيق للغة",
  },
};

const grammarTopics: GrammarTopic[] = [
  {
    id: 1,
    level: "A1",
    title: "ضمائر الفاعل",
    description: "تعلم الضمائر الشخصية واستخدامها مع الأفعال.",
    example: "Yo soy estudiante.",
    translation: "أنا طالب.",
    lessons: 3,
    duration: "15 دقيقة",
    progress: 100,
    completed: true,
    locked: false,
    category: "الأساسيات",
  },
  {
    id: 2,
    level: "A1",
    title: "الفعل Ser",
    description: "استخدام ser للتعريف والهوية والصفات الأساسية.",
    example: "Ella es española.",
    translation: "هي إسبانية.",
    lessons: 4,
    duration: "20 دقيقة",
    progress: 100,
    completed: true,
    locked: false,
    category: "الأفعال",
  },
  {
    id: 3,
    level: "A1",
    title: "الفعل Estar",
    description: "استخدام estar للحالة والمكان والمواقف المؤقتة.",
    example: "Estoy en casa.",
    translation: "أنا في المنزل.",
    lessons: 4,
    duration: "20 دقيقة",
    progress: 75,
    completed: false,
    locked: false,
    category: "الأفعال",
  },
  {
    id: 4,
    level: "A1",
    title: "أدوات التعريف والنكرة",
    description: "el, la, los, las و un, una, unos, unas.",
    example: "Tengo una casa.",
    translation: "لدي منزل.",
    lessons: 3,
    duration: "15 دقيقة",
    progress: 50,
    completed: false,
    locked: false,
    category: "الأسماء",
  },
  {
    id: 5,
    level: "A1",
    title: "المذكر والمؤنث",
    description: "فهم جنس الأسماء وكيفية توافق الصفات معها.",
    example: "Un chico alto.",
    translation: "ولد طويل.",
    lessons: 3,
    duration: "15 دقيقة",
    progress: 25,
    completed: false,
    locked: false,
    category: "الأسماء",
  },
  {
    id: 6,
    level: "A1",
    title: "المضارع البسيط",
    description: "تصريف الأفعال المنتظمة في زمن المضارع.",
    example: "Yo estudio español.",
    translation: "أنا أدرس الإسبانية.",
    lessons: 5,
    duration: "25 دقيقة",
    progress: 0,
    completed: false,
    locked: false,
    category: "الأفعال",
  },
  {
    id: 7,
    level: "A1",
    title: "النفي في الإسبانية",
    description: "كيفية تكوين الجمل المنفية باستخدام no.",
    example: "No entiendo.",
    translation: "أنا لا أفهم.",
    lessons: 2,
    duration: "10 دقائق",
    progress: 0,
    completed: false,
    locked: false,
    category: "الجمل",
  },
  {
    id: 8,
    level: "A1",
    title: "تكوين الأسئلة",
    description: "أدوات السؤال وتركيب الأسئلة الأساسية.",
    example: "¿Dónde vives?",
    translation: "أين تعيش؟",
    lessons: 4,
    duration: "20 دقيقة",
    progress: 0,
    completed: false,
    locked: false,
    category: "الجمل",
  },

  {
    id: 9,
    level: "A2",
    title: "الماضي القريب Pretérito Perfecto",
    description: "التحدث عن الأحداث التي حدثت في الماضي القريب.",
    example: "He comido.",
    translation: "لقد أكلت.",
    lessons: 5,
    duration: "25 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الأزمنة",
  },
  {
    id: 10,
    level: "A2",
    title: "الماضي البسيط Pretérito Indefinido",
    description: "التحدث عن أحداث مكتملة في الماضي.",
    example: "Ayer fui al mercado.",
    translation: "ذهبت إلى السوق أمس.",
    lessons: 6,
    duration: "30 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الأزمنة",
  },
  {
    id: 11,
    level: "A2",
    title: "الماضي المستمر Imperfecto",
    description: "وصف العادات والأحداث المستمرة في الماضي.",
    example: "Cuando era niño...",
    translation: "عندما كنت طفلًا...",
    lessons: 5,
    duration: "25 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الأزمنة",
  },
  {
    id: 12,
    level: "A2",
    title: "المقارنة والتفضيل",
    description: "más, menos, mejor, peor وغيرها.",
    example: "Madrid es más grande.",
    translation: "مدريد أكبر.",
    lessons: 4,
    duration: "20 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الصفات",
  },

  {
    id: 13,
    level: "B1",
    title: "المستقبل البسيط",
    description: "التحدث عن الخطط والتوقعات المستقبلية.",
    example: "Mañana viajaré.",
    translation: "سأسافر غدًا.",
    lessons: 5,
    duration: "25 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الأزمنة",
  },
  {
    id: 14,
    level: "B1",
    title: "الشرط Conditional",
    description: "التحدث عن الاحتمالات والمواقف الافتراضية.",
    example: "Viajaría contigo.",
    translation: "كنت سأسافر معك.",
    lessons: 5,
    duration: "25 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الأفعال",
  },
  {
    id: 15,
    level: "B1",
    title: "ضمائر المفعول",
    description: "lo, la, los, las, le وغيرها.",
    example: "Lo conozco.",
    translation: "أنا أعرفه.",
    lessons: 5,
    duration: "25 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الضمائر",
  },
  {
    id: 16,
    level: "B1",
    title: "الأفعال الانعكاسية",
    description: "استخدام الأفعال التي يعود تأثيرها على الفاعل.",
    example: "Me levanto temprano.",
    translation: "أستيقظ مبكرًا.",
    lessons: 4,
    duration: "20 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الأفعال",
  },

  {
    id: 17,
    level: "B2",
    title: "الماضي التام",
    description: "التعبير عن حدث وقع قبل حدث آخر في الماضي.",
    example: "Ya había salido.",
    translation: "كنت قد خرجت بالفعل.",
    lessons: 5,
    duration: "30 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الأزمنة",
  },
  {
    id: 18,
    level: "B2",
    title: "المبني للمجهول",
    description: "استخدام المبني للمجهول في اللغة الإسبانية.",
    example: "La casa fue construida.",
    translation: "تم بناء المنزل.",
    lessons: 4,
    duration: "25 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الجمل",
  },
  {
    id: 19,
    level: "B2",
    title: "أسلوب نقل الكلام",
    description: "نقل كلام شخص آخر بطريقة غير مباشرة.",
    example: "Dijo que vendría.",
    translation: "قال إنه سيأتي.",
    lessons: 5,
    duration: "30 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الجمل",
  },

  {
    id: 20,
    level: "C1",
    title: "Subjuntivo المتقدم",
    description: "استخدام صيغة التمني والشك والاحتمال بشكل متقدم.",
    example: "Ojalá pudiera ir.",
    translation: "ليتني أستطيع الذهاب.",
    lessons: 8,
    duration: "40 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الأفعال",
  },
  {
    id: 21,
    level: "C1",
    title: "الجمل الشرطية المتقدمة",
    description: "التعبير عن الفرضيات المعقدة والاحتمالات.",
    example: "Si hubiera sabido...",
    translation: "لو كنت قد عرفت...",
    lessons: 7,
    duration: "35 دقيقة",
    progress: 0,
    completed: false,
    locked: true,
    category: "الجمل",
  },
];

export default function GrammarPage() {
  const [selectedLevel, setSelectedLevel] = useState<Level>("A1");
  const [search, setSearch] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const filteredTopics = useMemo(() => {
    const query = search.trim().toLowerCase();

    return grammarTopics.filter((topic) => {
      const matchesLevel = topic.level === selectedLevel;

      const matchesSearch =
        !query ||
        topic.title.toLowerCase().includes(query) ||
        topic.description.toLowerCase().includes(query) ||
        topic.example.toLowerCase().includes(query) ||
        topic.translation.toLowerCase().includes(query) ||
        topic.category.toLowerCase().includes(query);

      const matchesCompleted = showCompleted ? topic.completed : true;

      return matchesLevel && matchesSearch && matchesCompleted;
    });
  }, [selectedLevel, search, showCompleted]);

  const currentTopics = grammarTopics.filter(
    (topic) => topic.level === selectedLevel
  );

  const completedCount = currentTopics.filter(
    (topic) => topic.completed
  ).length;

  const totalProgress =
    currentTopics.length > 0
      ? Math.round(
          currentTopics.reduce((sum, topic) => sum + topic.progress, 0) /
            currentTopics.length
        )
      : 0;

  return (
    <main className="min-h-screen bg-[var(--background)] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl">
        <div className="container-app flex h-16 items-center justify-between">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-bold text-[var(--text)]"
          >
            <ArrowLeft className="h-5 w-5" />
            العودة
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
              <BookOpen className="h-5 w-5" />
            </div>

            <span className="font-extrabold text-[var(--text)]">
              القواعد
            </span>
          </div>
        </div>
      </header>

      <div className="container-app space-y-6 py-6">
        {/* Hero */}
        <section className="card overflow-hidden">
          <div className="relative p-5 sm:p-7">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[var(--primary)]/
