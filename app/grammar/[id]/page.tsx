"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  Clock3,
  Lightbulb,
  RotateCcw,
  Star,
  Target,
  X,
  Zap,
} from "lucide-react";

type Question = {
  id: number;
  question: string;
  translation?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type GrammarLesson = {
  id: number;
  level: string;
  title: string;
  spanishTitle: string;
  description: string;
  duration: string;
  lessons: number;
  rule: string;
  important: string[];
  examples: {
    spanish: string;
    arabic: string;
    note?: string;
  }[];
  questions: Question[];
};

const lessons: GrammarLesson[] = [
  {
    id: 1,
    level: "A1",
    title: "الضمائر الشخصية",
    spanishTitle: "Los pronombres personales",
    description:
      "تعلم الضمائر الشخصية الأساسية في اللغة الإسبانية وكيفية استخدامها مع الأفعال.",
    duration: "15 دقيقة",
    lessons: 3,
    rule:
      "الضمير الشخصي يحدد من يقوم بالفعل. في الإسبانية يمكن أحيانًا حذف الضمير لأن تصريف الفعل يوضح الشخص، لكن تعلم الضمائر مهم جدًا في البداية.",
    important: [
      "Yo = أنا",
      "Tú = أنتَ / أنتِ بشكل غير رسمي",
      "Él = هو",
      "Ella = هي",
      "Nosotros / Nosotras = نحن",
      "Vosotros / Vosotras = أنتم في إسبانيا",
      "Ellos / Ellas = هم / هن",
      "Usted / Ustedes = حضرتك / حضراتكم بشكل رسمي",
    ],
    examples: [
      {
        spanish: "Yo soy estudiante.",
        arabic: "أنا طالب.",
        note: "Yo = أنا",
      },
      {
        spanish: "Tú eres mi amigo.",
        arabic: "أنت صديقي.",
        note: "Tú = أنت",
      },
      {
        spanish: "Ella es española.",
        arabic: "هي إسبانية.",
        note: "Ella = هي",
      },
      {
        spanish: "Nosotros somos estudiantes.",
        arabic: "نحن طلاب.",
        note: "Nosotros = نحن",
      },
    ],
    questions: [
      {
        id: 1,
        question: "أي ضمير يعني «أنا»؟",
        options: ["Tú", "Yo", "Él", "Ella"],
        correctAnswer: 1,
        explanation: "Yo تعني «أنا».",
      },
      {
        id: 2,
        question: "أي ضمير يعني «هي»؟",
        options: ["Ella", "Ellos", "Nosotros", "Tú"],
        correctAnswer: 0,
        explanation: "Ella تعني «هي».",
      },
      {
        id: 3,
        question: "اختر الضمير المناسب: ___ somos amigos.",
        options: ["Yo", "Ella", "Nosotros", "Tú"],
        correctAnswer: 2,
        explanation: "Nosotros تعني «نحن»، لذلك: Nosotros somos amigos.",
      },
      {
        id: 4,
        question: "ماذا تعني كلمة «Ellos»؟",
        options: ["أنا", "هو", "هم", "نحن"],
        correctAnswer: 2,
        explanation: "Ellos تعني «هم».",
      },
      {
        id: 5,
        question: "اختر الضمير المناسب: ___ eres estudiante.",
        options: ["Yo", "Tú", "Ella", "Nosotros"],
        correctAnswer: 1,
        explanation: "Tú تعني «أنت»، لذلك: Tú eres estudiante.",
      },
    ],
  },

  {
    id: 2,
    level: "A1",
    title: "الفعل Ser",
    spanishTitle: "El verbo ser",
    description:
      "تعلم استخدام الفعل Ser للتعريف والهوية والجنسية والمهنة والصفات الأساسية.",
    duration: "20 دقيقة",
    lessons: 4,
    rule:
      "يُستخدم ser غالبًا للتعبير عن الهوية والجنسية والمهنة والصفات التي نعتبرها تعريفًا أو سمة أساسية.",
    important: [
      "Yo soy = أنا أكون / أنا",
      "Tú eres = أنت تكون",
      "Él / Ella es = هو / هي",
      "Nosotros somos = نحن",
      "Vosotros sois = أنتم",
      "Ellos son = هم",
    ],
    examples: [
      {
        spanish: "Yo soy egipcio.",
        arabic: "أنا مصري.",
      },
      {
        spanish: "Ella es española.",
        arabic: "هي إسبانية.",
      },
      {
        spanish: "Somos estudiantes.",
        arabic: "نحن طلاب.",
      },
      {
        spanish: "Él es médico.",
        arabic: "هو طبيب.",
      },
    ],
    questions: [
      {
        id: 1,
        question: "اختر التصريف الصحيح: Yo ___ estudiante.",
        options: ["eres", "es", "soy", "son"],
        correctAnswer: 2,
        explanation: "مع Yo نستخدم soy.",
      },
      {
        id: 2,
        question: "اختر التصريف الصحيح: Ella ___ española.",
        options: ["soy", "eres", "es", "somos"],
        correctAnswer: 2,
        explanation: "مع Ella نستخدم es.",
      },
      {
        id: 3,
        question: "Nosotros ___ amigos.",
        options: ["somos", "son", "soy", "eres"],
        correctAnswer: 0,
        explanation: "مع Nosotros نستخدم somos.",
      },
      {
        id: 4,
        question: "ماذا تعني: «Él es médico»؟",
        options: [
          "هو طالب",
          "هو طبيب",
          "هو مصري",
          "هو صديقي",
        ],
        correctAnswer: 1,
        explanation: "médico تعني طبيب.",
      },
    ],
  },

  {
    id: 3,
    level: "A1",
    title: "الفعل Estar",
    spanishTitle: "El verbo estar",
    description:
      "تعلم استخدام estar للتعبير عن الحالة والمكان وبعض الظروف المؤقتة.",
    duration: "20 دقيقة",
    lessons: 4,
    rule:
      "يُستخدم estar بشكل أساسي للحالات والمواقع. من أشهر استخداماته التعبير عن الشعور أو الحالة الحالية ومكان وجود شخص أو شيء.",
    important: [
      "Yo estoy = أنا",
      "Tú estás = أنت",
      "Él / Ella está = هو / هي",
      "Nosotros estamos = نحن",
      "Vosotros estáis = أنتم",
      "Ellos están = هم",
    ],
    examples: [
      {
        spanish: "Estoy bien.",
        arabic: "أنا بخير.",
      },
      {
        spanish: "Estoy en casa.",
        arabic: "أنا في المنزل.",
      },
      {
        spanish: "Ella está cansada.",
        arabic: "هي متعبة.",
      },
      {
        spanish: "Estamos en Madrid.",
        arabic: "نحن في مدريد.",
      },
    ],
    questions: [
      {
        id: 1,
        question: "اختر التصريف الصحيح: Yo ___ bien.",
        options: ["estás", "estoy", "está", "están"],
        correctAnswer: 1,
        explanation: "مع Yo نستخدم estoy.",
      },
      {
        id: 2,
        question: "Ella ___ en casa.",
        options: ["estoy", "estamos", "está", "están"],
        correctAnswer: 2,
        explanation: "مع Ella نستخدم está.",
      },
      {
        id: 3,
        question: "ماذا تعني: «Estamos en Madrid»؟",
        options: [
          "هم في مدريد",
          "أنا في مدريد",
          "نحن في مدريد",
          "أنت في مدريد",
        ],
        correctAnswer: 2,
        explanation: "Estamos تعني «نحن نكون»، والجملة تعني «نحن في مدريد».",
      },
      {
        id: 4,
        question: "اختر الجملة الصحيحة:",
        options: [
          "Yo está bien.",
          "Yo estoy bien.",
          "Yo están bien.",
          "Yo estás bien.",
        ],
        correctAnswer: 1,
        explanation: "التصريف الصحيح مع Yo هو estoy.",
      },
    ],
  },

  {
    id: 4,
    level: "A1",
    title: "أدوات التعريف",
    spanishTitle: "Los artículos",
    description:
      "تعلم أدوات التعريف والنكرة في الإسبانية وكيفية توافقها مع الاسم.",
    duration: "15 دقيقة",
    lessons: 3,
    rule:
      "أدوات التعريف هي el و la للمفرد و los و las للجمع. أما أدوات النكرة فهي un و una للمفرد و unos و unas للجمع.",
    important: [
      "el = الـ للمذكر المفرد",
      "la = الـ للمؤنث المفرد",
      "los = الـ للمذكر الجمع",
      "las = الـ للمؤنث الجمع",
      "un = واحد / أداة نكرة للمذكر",
      "una = واحدة / أداة نكرة للمؤنث",
    ],
    examples: [
      {
        spanish: "El libro.",
        arabic: "الكتاب.",
      },
      {
        spanish: "La casa.",
        arabic: "المنزل.",
      },
      {
        spanish: "Los libros.",
        arabic: "الكتب.",
      },
      {
        spanish: "Una casa.",
        arabic: "منزل.",
      },
    ],
    questions: [
      {
        id: 1,
        question: "اختر الأداة الصحيحة: ___ casa.",
        options: ["El", "La", "Los", "Un"],
        correctAnswer: 1,
        explanation: "casa مؤنث مفرد، لذلك نستخدم La.",
      },
      {
        id: 2,
        question: "اختر الأداة الصحيحة: ___ libro.",
        options: ["La", "Las", "El", "Una"],
        correctAnswer: 2,
        explanation: "libro مذكر مفرد، لذلك نستخدم El.",
      },
      {
        id: 3,
        question: "ما أداة التعريف المناسبة للجمع المؤنث؟",
        options: ["el", "la", "los", "las"],
        correctAnswer: 3,
        explanation: "Las تستخدم مع الجمع المؤنث.",
      },
      {
        id: 4,
        question: "اختر الجملة الصحيحة:",
        options: [
          "La libros.",
          "El casas.",
          "Los libros.",
          "Las libro.",
        ],
        correctAnswer: 2,
        explanation: "Los libros = الكتب.",
      },
    ],
  },

  {
    id: 5,
    level: "A1",
    title: "المذكر والمؤنث",
    spanishTitle: "Género y número",
    description:
      "تعلم جنس الأسماء في الإسبانية وكيفية تكوين الجمع.",
    duration: "15 دقيقة",
    lessons: 3,
    rule:
      "الأسماء الإسبانية تكون مذكرة أو مؤنثة. كثير من الكلمات المنتهية بـ -o تكون مذكرة، والمنتهية بـ -a تكون مؤنثة، لكن توجد استثناءات يجب تعلمها مع الكلمة.",
    important: [
      "chico = ولد",
      "chica = بنت",
      "amigo = صديق",
      "amiga = صديقة",
      "libro → libros",
      "casa → casas",
    ],
    examples: [
      {
        spanish: "El chico es alto.",
        arabic: "الولد طويل.",
      },
      {
        spanish: "La chica es alta.",
        arabic: "البنت طويلة.",
      },
      {
        spanish: "Los amigos son buenos.",
        arabic: "الأصدقاء جيدون.",
      },
      {
        spanish: "Las casas son grandes.",
        arabic: "المنازل كبيرة.",
      },
    ],
    questions: [
      {
        id: 1,
        question: "ما جمع كلمة libro؟",
        options: ["libra", "libros", "libres", "libroes"],
        correctAnswer: 1,
        explanation: "في الغالب نضيف s للكلمة المنتهية بحرف صوتي: libro → libros.",
      },
      {
        id: 2,
        question: "أي كلمة مؤنثة؟",
        options: ["chico", "amigo", "casa", "libro"],
        correctAnswer: 2,
        explanation: "casa كلمة مؤنثة.",
      },
      {
        id: 3,
        question: "اختر الجملة الصحيحة:",
        options: [
          "La chico.",
          "El chica.",
          "El chico.",
          "Las chico.",
        ],
        correctAnswer: 2,
        explanation: "الصحيح: El chico.",
      },
      {
        id: 4,
        question: "ما جمع casa؟",
        options: ["casos", "casas", "casaes", "casas"],
        correctAnswer: 1,
        explanation: "casa → casas.",
      },
    ],
  },

  {
    id: 6,
    level: "A1",
    title: "تصريف الأفعال المنتظمة",
    spanishTitle: "Verbos regulares",
    description:
      "تعلم تصريف الأفعال الإسبانية المنتظمة في زمن المضارع.",
    duration: "25 دقيقة",
    lessons: 5,
    rule:
      "الأفعال الإسبانية المنتظمة تنقسم أساسًا إلى أفعال تنتهي بـ -ar و -er و -ir. عند التصريف نحذف النهاية ونضيف النهاية المناسبة للشخص.",
    important: [
      "hablar = يتحدث",
      "comer = يأكل",
      "vivir = يعيش",
      "Yo hablo = أنا أتحدث",
      "Tú comes = أنت تأكل",
      "Él vive = هو يعيش",
    ],
    examples: [
      {
        spanish: "Yo hablo español.",
        arabic: "أنا أتحدث الإسبانية.",
      },
      {
        spanish: "Tú comes pan.",
        arabic: "أنت تأكل الخبز.",
      },
      {
        spanish: "Él vive en España.",
        arabic: "هو يعيش في إسبانيا.",
      },
      {
        spanish: "Nosotros estudiamos.",
        arabic: "نحن ندرس.",
      },
    ],
    questions: [
      {
        id: 1,
        question: "اختر التصريف الصحيح: Yo ___ español.",
        options: ["hablas", "hablo", "habla", "hablan"],
        correctAnswer: 1,
        explanation: "مع Yo يصبح hablar: hablo.",
      },
      {
        id: 2,
        question: "Tú ___ pan.",
        options: ["como", "comes", "come", "comemos"],
        correctAnswer: 1,
        explanation: "مع Tú يصبح comer: comes.",
      },
      {
        id: 3,
        question: "Él ___ en España.",
        options: ["vivo", "vives", "vive", "vivimos"],
        correctAnswer: 2,
        explanation: "مع Él يصبح vivir: vive.",
      },
      {
        id: 4,
        question: "ما النهاية الشائعة مع Yo في أفعال -ar؟",
        options: ["-o", "-as", "-a", "-an"],
        correctAnswer: 0,
        explanation: "مثل: hablar → hablo.",
      },
    ],
  },
];

function getLesson(id: number): GrammarLesson {
  return (
    lessons.find((lesson) => lesson.id === id) ??
    lessons[0]
  );
}

export default function GrammarLessonPage({
  params,
}: {
  params: { id: string };
}) {
  const lessonId = Number(params.id);

  const lesson = useMemo(
    () => getLesson(Number.isNaN(lessonId) ? 1 : lessonId),
    [lessonId]
  );

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [showResults, setShowResults] = useState(false);
  const [finished, setFinished] = useState(false);

  const totalQuestions = lesson.questions.length;

  const answeredCount = Object.keys(selectedAnswers).length;

  const score = lesson.questions.reduce((total, question) => {
    return (
      total +
      (selectedAnswers[question.id] === question.correctAnswer ? 1 : 0)
    );
  }, 0);

  const percentage =
    totalQuestions > 0
      ? Math.round((score / totalQuestions) * 100)
      : 0;

  const selectAnswer = (questionId: number, answerIndex: number) => {
    if (showResults) return;

    setSelectedAnswers((current) => ({
      ...current,
      [questionId]: answerIndex,
    }));
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setFinished(false);
    setCurrentStep(0);
  };

  const finishQuiz = () => {
    if (answeredCount < totalQuestions) return;

    setShowResults(true);
    setFinished(true);
    setCurrentStep(1);
  };

  const nextLessonId =
    lesson.id < lessons.length ? lesson.id + 1 : lesson.id;

  return (
    <main className="min-h-screen bg-[var(--background)] pb-10">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl">
        <div className="container-app flex h-16 items-center justify-between gap-3">
          <Link
            href="/grammar"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div className="min-w-0 flex-1 text-center">
            <div className="text-xs font-bold text-[var(--primary)]">
              {lesson.level} • درس القواعد
            </div>

            <h1 className="truncate text-sm font-black">
              {lesson.title}
            </h1>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
            <BookOpen className="h-5 w-5" />
          </div>
        </div>
      </header>

      <div className="container-app py-6">
        {/* Lesson hero */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow-xl">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black backdrop-blur">
                {lesson.level}
              </span>

              <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">
                <Clock3 className="h-3.5 w-3.5" />
                {lesson.duration}
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-black md:text-3xl">
              {lesson.title}
            </h2>

            <p
              dir="ltr"
              className="mt-2 text-sm font-semibold text-white/80"
            >
              {lesson.spanishTitle}
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
              {lesson.description}
            </p>
          </div>
        </section>

        {/* Lesson navigation */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          <div
            className={`rounded-2xl border p-3 ${
              currentStep === 0
                ? "border-[var(--primary)] bg-[var(--primary)]/5"
                : "border-[var(--border)] bg-[var(--surface)]"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--primary)] text-xs font-black text-white">
                1
              </div>

              <div>
                <div className="text-xs font-black">شرح القاعدة</div>
                <div className="text-[10px] text-[var(--muted)]">
                  افهم قبل أن تختبر
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-2xl border p-3 ${
              currentStep === 1
                ? "border-[var(--primary)] bg-[var(--primary)]/5"
                : "border-[var(--border)] bg-[var(--surface)]"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--primary)] text-xs font-black text-white">
                2
              </div>

              <div>
                <div className="text-xs font-black">اختبر نفسك</div>
                <div className="text-[10px] text-[var(--muted)]">
                  طبّق ما تعلمته
                </div>
              </div>
            </div>
          </div>
        </div>

        {currentStep === 0 && (
          <div className="mt-6 space-y-5">
            {/* Rule */}
            <section className="card p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                  <BookOpen className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-lg font-black">
                    القاعدة ببساطة
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {lesson.rule}
                  </p>
                </div>
              </div>
            </section>

            {/* Important */}
            <section className="card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                  <Lightbulb className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-black">احفظ هذه النقاط</h3>
                  <p className="text-xs text-[var(--muted)]">
                    أهم المعلومات في الدرس
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-2">
                {lesson.important.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-[var(--surface-hover)] p-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />

                    <span
                      dir="ltr"
                      className="text-sm font-medium"
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Examples */}
            <section className="card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black">أمثلة</h3>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    شاهد القاعدة داخل جمل حقيقية.
                  </p>
                </div>

                <Star className="h-5 w-5 text-amber-500" />
              </div>

              <div className="mt-5 space-y-3">
                {lesson.examples.map((example, index) => (
                  <div
                    key={`${example.spanish}-${index}`}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-xs font-black text-[var(--primary)]">
                        {index + 1}
                      </div>

                      <div className="min-w-0">
                        <div
                          dir="ltr"
                          className="text-base font-black"
                        >
                          {example.spanish}
                        </div>

                        <div className="mt-1 text-sm text-[var(--muted)]">
                          {example.arabic}
                        </div>

                        {example.note && (
                          <div className="mt-2 text-xs font-bold text-[var(--primary)]">
                            {example.note}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Start quiz */}
            <button
              onClick={() => setCurrentStep(1)}
              className="flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-5 py-4 text-sm font-black text-white shadow-lg transition hover:opacity-90"
            >
              ابدأ الاختبار
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
        )}

        {currentStep === 1 && (
          <div className="mt-6 space-y-5">
            {/* Quiz header */}
            <section className="card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-[var(--primary)]" />
                    <h2 className="font-black">اختبر نفسك</h2>
                  </div>

                  <p className="mt-1 text-xs text-[var(--muted)]">
                    اختر إجابة واحدة لكل سؤال.
                  </p>
                </div>

                <div className="rounded-xl bg-[var(--primary)]/10 px-3 py-2 text-xs font-black text-[var(--primary)]">
                  {answeredCount}/{totalQuestions}
                </div>
              </div>

              <div className="mt-5 progress-track">
                <div
                  className="progress-value"
                  style={{
                    width: `${
                      totalQuestions
                        ? (answeredCount / totalQuestions) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </section>

            {/* Questions */}
            <div className="space-y-4">
              {lesson.questions.map((question, index) => {
                const selected = selectedAnswers[question.id];

                return (
                  <section
                    key={question.id}
                    className="card overflow-hidden"
                  >
                    <div className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-xs font-black text-white">
                          {index + 1}
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-sm font-black leading-6">
                            {question.question}
                          </h3>

                          {question.translation && (
                            <p className="mt-1 text-xs text-[var(--muted)]">
                              {question.translation}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-5 grid gap-2">
                        {question.options.map((option, optionIndex) => {
                          const isSelected = selected === optionIndex;
                          const isCorrect =
                            question.correctAnswer === optionIndex;

                          let optionClass =
                            "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)]/50";

                          if (showResults && isCorrect) {
                            optionClass =
                              "border-emerald-500 bg-emerald-500/10 text-emerald-700";
                          } else if (
                            showResults &&
                            isSelected &&
                            !isCorrect
                          ) {
                            optionClass =
                              "border-red-500 bg-red-500/10 text-red-600";
                          } else if (isSelected) {
                            optionClass =
                              "border-[var(--primary)] bg-[var(--primary)]/10";
                          }

                          return (
                            <button
                              key={option}
                              onClick={() =>
                                selectAnswer(
                                  question.id,
                                  optionIndex
                                )
                              }
                              disabled={showResults}
                              className={`flex min-h-12 w-full items-center gap-3 rounded-xl border px-4 text-right text-sm font-semibold transition ${optionClass}`}
                            >
                              <span
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-black ${
                                  isSelected
                                    ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                                    : "border-[var(--border)]"
                                }`}
                              >
                                {String.fromCharCode(65 + optionIndex)}
                              </span>

                              <span
                                dir="ltr"
                                className="flex-1 text-left"
                              >
                                {option}
                              </span>

                              {showResults && isCorrect && (
                                <Check className="h-5 w-5 text-emerald-500" />
                              )}

                              {showResults &&
                                isSelected &&
                                !isCorrect && (
                                  <X className="h-5 w-5 text-red-500" />
                                )}
                            </button>
                          );
                        })}
                      </div>

                      {showResults && (
                        <div className="mt-4 rounded-xl bg-[var(--surface-hover)] p-3">
                          <div className="flex gap-2">
                            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />

                            <p className="text-xs leading-6 text-[var(--muted)]">
                              <span className="font-black text-[var(--text)]">
                                التفسير:
                              </span>{" "}
                              {question.explanation}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>

            {/* Quiz actions */}
            {!showResults ? (
              <button
                onClick={finishQuiz}
                disabled={answeredCount < totalQuestions}
                className={`flex h-13 w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-black transition ${
                  answeredCount === totalQuestions
                    ? "bg-[var(--primary)] text-white shadow-lg hover:opacity-90"
                    : "cursor-not-allowed bg-[var(--surface-hover)] text-[var(--muted)]"
                }`}
              >
                إنهاء الاختبار
                <CheckCircle2 className="h-5 w-5" />
              </button>
            ) : (
              <>
                {/* Result */}
                <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-center text-white shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                    {percentage >= 70 ? (
                      <TrophyIcon />
                    ) : (
                      <RotateCcw className="h-7 w-7" />
                    )}
                  </div>

                  <h2 className="mt-4 text-2xl font-black">
                    {percentage >= 90
                      ? "ممتاز جدًا! 🎉"
                      : percentage >= 70
                      ? "أحسنت! 👏"
                      : "محتاج مراجعة بسيطة 💪"}
                  </h2>

                  <div className="mt-3 text-4xl font-black">
                    {percentage}%
                  </div>

                  <p className="mt-2 text-sm text-white/80">
                    أجبت بشكل صحيح على {score} من{" "}
                    {totalQuestions} أسئلة.
                  </p>

                  <div className="mt-5 flex gap-2">
                    <button
                      onClick={resetQuiz}
                      className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-white/15 text-sm font-bold backdrop-blur transition hover:bg-white/20"
                    >
                      <RotateCcw className="h-4 w-4" />
                      إعادة الاختبار
                    </button>

                    {lesson.id < lessons.length && (
                      <Link
                        href={`/grammar/${nextLessonId}`}
                        className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-white text-sm font-bold text-emerald-600 transition hover:bg-white/90"
                      >
                        الدرس التالي
                        <ChevronLeft className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </section>
              </>
            )}

            {/* Back to explanation */}
            <button
              onClick={() => setCurrentStep(0)}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm font-bold"
            >
              <ArrowRight className="h-4 w-4" />
              العودة إلى شرح القاعدة
            </button>
          </div>
        )}

        {/* Bottom navigation */}
        <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-5">
          <Link
            href={
              lesson.id > 1
                ? `/grammar/${lesson.id - 1}`
                : "/grammar"
            }
            className="flex items-center gap-2 text-sm font-bold text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            <ArrowRight className="h-4 w-4" />
            السابق
          </Link>

          <Link
            href="/grammar"
            className="text-xs font-bold text-[var(--primary)]"
          >
            كل القواعد
          </Link>

          <Link
            href={`/grammar/${nextLessonId}`}
            className="flex items-center gap-2 text-sm font-bold text-[var(--primary)]"
          >
            التالي
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}

function TrophyIcon() {
  return (
    <div className="relative">
      <Star className="h-8 w-8 fill-current" />
      <Zap className="absolute -bottom-1 -right-1 h-3.5 w-3.5" />
    </div>
  );
  }
