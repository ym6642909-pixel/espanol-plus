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

export default function GrammarPage({ id }: { id: string }) {
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
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[var(--primary)]/10 blur-2xl" />

            <div className="relative">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--primary)]/10 px-3 py-1.5 text-xs font-bold text-[var(--primary)]">
                <BookOpen className="h-4 w-4" />
                قواعد اللغة الإسبانية
              </div>

              <h1 className="text-2xl font-black tracking-tight text-[var(--text)] sm:text-3xl">
                افهم القاعدة، ثم استخدمها
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                تعلم قواعد الإسبانية تدريجيًا من A1 حتى C1، مع أمثلة إسبانية
                وترجمتها العربية وتمارين تطبيقية.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl bg-[var(--surface)] p-4">
                  <div className="text-2xl font-black text-[var(--text)]">
                    {grammarTopics.length}
                  </div>
                  <div className="mt-1 text-xs text-[var(--muted)]">
                    موضوعًا
                  </div>
                </div>

                <div className="rounded-2xl bg-[var(--surface)] p-4">
                  <div className="text-2xl font-black text-[var(--text)]">
                    5
                  </div>
                  <div className="mt-1 text-xs text-[var(--muted)]">
                    مستويات
                  </div>
                </div>

                <div className="rounded-2xl bg-[var(--surface)] p-4">
                  <div className="text-2xl font-black text-[var(--text)]">
                    {completedCount}
                  </div>
                  <div className="mt-1 text-xs text-[var(--muted)]">
                    مكتمل
                  </div>
                </div>

                <div className="rounded-2xl bg-[var(--surface)] p-4">
                  <div className="text-2xl font-black text-[var(--primary)]">
                    {totalProgress}%
                  </div>
                  <div className="mt-1 text-xs text-[var(--muted)]">
                    تقدم {selectedLevel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Levels */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-[var(--text)]">
                اختر مستواك
              </h2>
              <p className="mt-1 text-xs text-[var(--muted)]">
                {levelInfo[selectedLevel].description}
              </p>
            </div>

            <Trophy className="h-5 w-5 text-[var(--primary)]" />
          </div>

          <div className="grid grid-cols-5 gap-2">
            {levels.map((level) => {
              const active = selectedLevel === level;

              return (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`rounded-2xl border px-2 py-3 text-center transition ${
                    active
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-lg"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--primary)]/40"
                  }`}
                >
                  <div className="text-sm font-black">{level}</div>
                  <div
                    className={`mt-1 hidden text-[10px] sm:block ${
                      active ? "text-white/80" : "text-[var(--muted)]"
                    }`}
                  >
                    {levelInfo[level].name}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Search + filter */}
        <section className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted)]" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن قاعدة أو مثال..."
              className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] pr-12 pl-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
            />
          </div>

          <button
            onClick={() => setShowCompleted((value) => !value)}
            className={`flex h-12 items-center justify-center gap-2 rounded-2xl border px-5 text-sm font-bold transition ${
              showCompleted
                ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
            }`}
          >
            <Filter className="h-4 w-4" />
            المكتملة فقط
          </button>
        </section>

        {/* Level progress */}
        <section className="card p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-[var(--text)]">
                تقدم مستوى {selectedLevel}
              </div>
              <div className="mt-1 text-xs text-[var(--muted)]">
                {completedCount} من {currentTopics.length} موضوع مكتمل
              </div>
            </div>

            <div className="text-xl font-black text-[var(--primary)]">
              {totalProgress}%
            </div>
          </div>

          <div className="progress-track mt-4">
            <div
              className="progress-value"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
        </section>

        {/* Topics */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-[var(--text)]">
              قواعد {selectedLevel}
            </h2>

            <span className="text-xs font-bold text-[var(--muted)]">
              {filteredTopics.length} موضوع
            </span>
          </div>

          {filteredTopics.length === 0 ? (
            <div className="card p-10 text-center">
              <Search className="mx-auto h-10 w-10 text-[var(--muted)]" />

              <h3 className="mt-4 font-bold text-[var(--text)]">
                لم نجد ما تبحث عنه
              </h3>

              <p className="mt-2 text-sm text-[var(--muted)]">
                جرّب كلمة أخرى أو ألغِ فلتر المكتملة.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredTopics.map((topic, index) => (
                <div
                  key={topic.id}
                  className={`card overflow-hidden transition ${
                    topic.locked
                      ? "opacity-80"
                      : "hover:-translate-y-0.5 hover:shadow-lg"
                  }`}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      {/* Number */}
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${
                          topic.completed
                            ? "bg-emerald-500/10 text-emerald-500"
                            : topic.locked
                            ? "bg-[var(--muted)]/10 text-[var(--muted)]"
                            : "bg-[var(--primary)]/10 text-[var(--primary)]"
                        }`}
                      >
                        {topic.completed ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : topic.locked ? (
                          <Lock className="h-5 w-5" />
                        ) : (
                          String(index + 1).padStart(2, "0")
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-extrabold text-[var(--text)]">
                            {topic.title}
                          </h3>

                          <span className="rounded-full bg-[var(--surface)] px-2.5 py-1 text-[10px] font-bold text-[var(--muted)]">
                            {topic.category}
                          </span>
                        </div>

                        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                          {topic.description}
                        </p>

                        {/* Example */}
                        <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                          <div
                            dir="ltr"
                            className="text-sm font-bold text-[var(--text)]"
                          >
                            {topic.example}
                          </div>

                          <div className="mt-1 text-xs text-[var(--muted)]">
                            {topic.translation}
                          </div>
                        </div>

                        {/* Meta */}
                        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[var(--muted)]">
                          <span className="flex items-center gap-1.5">
                            <BookOpen className="h-4 w-4" />
                            {topic.lessons} دروس
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Clock3 className="h-4 w-4" />
                            {topic.duration}
                          </span>

                          {topic.completed && (
                            <span className="flex items-center gap-1.5 text-emerald-500">
                              <CheckCircle2 className="h-4 w-4" />
                              مكتملة
                            </span>
                          )}
                        </div>

                        {/* Progress */}
                        {!topic.locked && topic.progress > 0 && (
                          <div className="mt-4">
                            <div className="mb-1.5 flex justify-between text-[10px] font-bold text-[var(--muted)]">
                              <span>التقدم</span>
                              <span>{topic.progress}%</span>
                            </div>

                            <div className="progress-track">
                              <div
                                className="progress-value"
                                style={{
                                  width: `${topic.progress}%`,
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Action */}
                      <div className="hidden shrink-0 sm:block">
                        {topic.locked ? (
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--muted)]">
                            <Lock className="h-4 w-4" />
                          </div>
                        ) : (
                          <Link
                            href={`/grammar/${topic.id}`}
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] text-white transition hover:scale-105"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Mobile action */}
                    <div className="mt-4 sm:hidden">
                      {topic.locked ? (
                        <div className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[var(--surface)] text-sm font-bold text-[var(--muted)]">
                          <Lock className="h-4 w-4" />
                          هذا الدرس مقفل
                        </div>
                      ) : (
                        <Link
                          href={`/grammar/${topic.id}`}
                          className="btn-primary flex h-11 items-center justify-center gap-2"
                        >
                          {topic.progress > 0 ? "متابعة الدرس" : "ابدأ الدرس"}
                          <ChevronLeft className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Grammar tip */}
        <section className="card overflow-hidden">
          <div className="p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                <Star className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-extrabold text-[var(--text)]">
                  نصيحة للتعلم
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  لا تحاول حفظ القاعدة وحدها. اقرأ المثال الإسباني بصوت
                  مرتفع، ثم كوّن جملة جديدة من عندك باستخدام نفس القاعدة.
                  بهذه الطريقة تتحول القاعدة من معلومة محفوظة إلى مهارة
                  تستخدمها تلقائيًا.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl sm:hidden">
        <div className="grid h-16 grid-cols-4">
          <Link
            href="/dashboard"
            className="flex flex-col items-center justify-center gap-1 text-[var(--muted)]"
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-[10px] font-bold">الرئيسية</span>
          </Link>

          <Link
            href="/lessons"
            className="flex flex-col items-center justify-center gap-1 text-[var(--muted)]"
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-[10px] font-bold">الدروس</span>
          </Link>

          <Link
            href="/vocabulary"
            className="flex flex-col items-center justify-center gap-1 text-[var(--muted)]"
          >
            <Star className="h-5 w-5" />
            <span className="text-[10px] font-bold">المفردات</span>
          </Link>

          <Link
            href="/grammar"
            className="flex flex-col items-center justify-center gap-1 text-[var(--primary)]"
          >
            <CheckCircle2 className="h-5 w-5" />
            <span className="text-[10px] font-bold">القواعد</span>
          </Link>
        </div>
      </nav>
    </main>
  );
}
