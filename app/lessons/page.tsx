"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  Lock,
  Play,
  Star,
} from "lucide-react";

const units = [
  {
    number: 1,
    title: "¡Hola!",
    subtitle: "التحيات والتعارف",
    description:
      "تعلم كيف تلقي التحية، تقدم نفسك وتسأل الآخرين عن أسمائهم.",
    progress: 100,
    completed: true,
    lessons: [
      "التحيات الأساسية",
      "التعريف بالنفس",
      "السؤال عن الاسم",
      "مراجعة الوحدة",
    ],
  },
  {
    number: 2,
    title: "Los números",
    subtitle: "الأرقام والأعداد",
    description:
      "تعلم الأرقام واستخدامها في العمر، الهاتف والأسعار.",
    progress: 65,
    completed: false,
    lessons: [
      "الأرقام من 0 إلى 20",
      "العمر",
      "أرقام الهاتف",
      "الأسعار",
    ],
  },
  {
    number: 3,
    title: "Mi familia",
    subtitle: "العائلة والأشخاص",
    description:
      "تعلم أسماء أفراد العائلة وكيف تصف الأشخاص من حولك.",
    progress: 0,
    completed: false,
    lessons: [
      "أفراد العائلة",
      "الملكية",
      "وصف الأشخاص",
      "مراجعة الوحدة",
    ],
  },
  {
    number: 4,
    title: "Mi día",
    subtitle: "الحياة اليومية",
    description:
      "تعلم التحدث عن يومك، أوقاتك والأنشطة التي تقوم بها.",
    progress: 0,
    completed: false,
    lessons: [
      "الروتين اليومي",
      "أوقات اليوم",
      "الأفعال اليومية",
      "مراجعة الوحدة",
    ],
  },
  {
    number: 5,
    title: "La comida",
    subtitle: "الطعام والشراب",
    description:
      "تعلم أسماء الأطعمة والمشروبات وكيف تطلب الطعام.",
    progress: 0,
    completed: false,
    lessons: [
      "الأطعمة",
      "المشروبات",
      "في المطعم",
      "طلب الطعام",
    ],
  },
  {
    number: 6,
    title: "Mi casa",
    subtitle: "المنزل",
    description:
      "تعلم أسماء الغرف والأثاث ووصف مكان إقامتك.",
    progress: 0,
    completed: false,
    lessons: [
      "غرف المنزل",
      "الأثاث",
      "حروف الجر للمكان",
      "وصف المنزل",
    ],
  },
  {
    number: 7,
    title: "La ciudad",
    subtitle: "المدينة والمواصلات",
    description:
      "تعلم كيفية السؤال عن الأماكن والتعامل مع المواصلات.",
    progress: 0,
    completed: false,
    lessons: [
      "أماكن المدينة",
      "الاتجاهات",
      "المواصلات",
      "السؤال عن الطريق",
    ],
  },
  {
    number: 8,
    title: "Mi tiempo",
    subtitle: "الوقت والهوايات",
    description:
      "تحدث عن وقت فراغك وهواياتك والأنشطة التي تحبها.",
    progress: 0,
    completed: false,
    lessons: [
      "الهوايات",
      "أيام الأسبوع",
      "الوقت",
      "ما أحب وما لا أحب",
    ],
  },
];

export default function LessonsPage() {
  const completedUnits = units.filter((unit) => unit.completed).length;

  return (
    <main className="min-h-screen bg-[var(--background)] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl">
        <div className="container-app flex h-16 items-center justify-between">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-black text-xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              🇪🇸
            </span>

            <span>
              Español<span className="text-blue-600">+</span>
            </span>
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-bold text-[var(--muted)] hover:text-blue-600"
          >
            لوحة التحكم
            <ArrowLeft size={17} />
          </Link>
        </div>
      </header>

      <div className="container-app pt-8">
        {/* Page Intro */}
        <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-xl shadow-blue-600/15 sm:p-8">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-blue-100">
                  <BookOpen size={17} />
                  المسار التعليمي
                </div>

                <h1 className="text-3xl font-black">
                  الإسبانية A1
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                  ابدأ من الأساسيات وتقدم تدريجيًا في المفردات والقواعد
                  والاستماع والمحادثة.
                </p>
              </div>

              <div className="shrink-0 rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="text-sm text-blue-100">
                  تقدم المستوى
                </div>

                <div className="mt-1 text-3xl font-black">
                  72%
                </div>

                <div className="mt-3 h-2 w-40 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-white"
                    style={{ width: "72%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="card p-4">
            <div className="text-xs text-[var(--muted)]">
              الوحدات
            </div>

            <div className="mt-1 text-2xl font-black">
              {completedUnits}/8
            </div>
          </div>

          <div className="card p-4">
            <div className="text-xs text-[var(--muted)]">
              الدروس
            </div>

            <div className="mt-1 text-2xl font-black">
              32
            </div>
          </div>

          <div className="card p-4">
            <div className="text-xs text-[var(--muted)]">
              الكلمات
            </div>

            <div className="mt-1 text-2xl font-black">
              500+
            </div>
          </div>

          <div className="card p-4">
            <div className="text-xs text-[var(--muted)]">
              XP متاح
            </div>

            <div className="mt-1 flex items-center gap-1 text-2xl font-black">
              <Star size={20} className="text-yellow-500" fill="currentColor" />
              3200
            </div>
          </div>
        </section>

        {/* Units */}
        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-black">
              وحدات A1
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              أكمل الوحدات بالترتيب للحصول على أفضل تجربة تعليمية.
            </p>
          </div>

          <div className="space-y-5">
            {units.map((unit) => {
              const isLocked =
                unit.progress === 0 &&
                unit.number > 3;

              const isCurrent =
                unit.progress > 0 && !unit.completed;

              return (
                <div
                  key={unit.number}
                  className={`card overflow-hidden ${
                    isCurrent
                      ? "ring-2 ring-blue-500/20"
                      : ""
                  }`}
                >
                  {/* Unit Header */}
                  <div className="flex flex-col gap-4 border-b border-[var(--border)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-black ${
                          unit.completed
                            ? "bg-green-100 text-green-600"
                            : isCurrent
                              ? "bg-blue-100 text-blue-600"
                              : "bg-[var(--surface-soft)] text-[var(--muted)]"
                        }`}
                      >
                        {unit.completed ? (
                          <CheckCircle2 size={26} />
                        ) : isLocked ? (
                          <Lock size={21} />
                        ) : (
                          unit.number
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-black">
                            {unit.title}
                          </h3>

                          {isCurrent && (
                            <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-black text-blue-700">
                              أنت هنا
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {unit.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-left">
                        <div className="text-xs text-[var(--muted)]">
                          التقدم
                        </div>

                        <div className="mt-1 text-sm font-black">
                          {unit.progress}%
                        </div>
                      </div>

                      <div className="h-10 w-10 overflow-hidden rounded-full bg-[var(--surface-soft)]">
                        <div
                          className={`h-full ${
                            unit.completed
                              ? "bg-green-500"
                              : "bg-blue-600"
                          }`}
                          style={{
                            width: `${unit.progress}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-5 sm:p-6">
                    <p className="max-w-3xl text-sm leading-7 text-[var(--muted)]">
                      {unit.description}
                    </p>

                    {/* Lessons */}
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {unit.lessons.map((lesson, index) => {
                        const lessonLocked =
                          isLocked ||
                          (isCurrent && index > 2);

                        return (
                          <Link
                            key={lesson}
                            href={
                              lessonLocked
                                ? "#"
                                : `/lessons/${unit.number}-${index + 1}`
                            }
                            className={`group flex items-center gap-3 rounded-xl border border-[var(--border)] p-3 transition ${
                              lessonLocked
                                ? "cursor-not-allowed opacity-50"
                                : "hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/30"
                            }`}
                          >
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                unit.completed
                                  ? "bg-green-100 text-green-600"
                                  : lessonLocked
                                    ? "bg-[var(--surface-soft)] text-[var(--muted)]"
                                    : "bg-blue-100 text-blue-600"
                              }`}
                            >
                              {unit.completed ? (
                                <CheckCircle2 size={17} />
                              ) : lessonLocked ? (
                                <Lock size={15} />
                              ) : (
                                <Play size={15} fill="currentColor" />
                              )}
                            </div>

                            <span className="flex-1 text-sm font-bold">
                              {lesson}
                            </span>

                            {!lessonLocked && (
                              <ChevronLeft
                                size={17}
                                className="text-[var(--muted)] transition group-hover:-translate-x-1"
                              />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-black">
                لا تعرف من أين تبدأ؟
              </h2>

              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                يمكنك إجراء اختبار تحديد المستوى وسنساعدك على اختيار المسار
                المناسب لك.
              </p>
            </div>

            <Link
              href="/placement-test"
              className="btn-primary shrink-0"
            >
              اختبار تحديد المستوى
              <ArrowLeft size={17} />
            </Link>
          </div>
        </section>
      </div>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-[var(--surface)]/95 px-2 py-2 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-around">
          <Link
            href="/dashboard"
            className="flex min-w-[60px] flex-col items-center gap-1 px-3 py-2 text-[var(--muted)]"
          >
            <BookOpen size={20} />
            <span className="text-[10px] font-bold">
              الرئيسية
            </span>
          </Link>

          <Link
            href="/lessons"
            className="flex min-w-[60px] flex-col items-center gap-1 px-3 py-2 text-blue-600"
          >
            <BookOpen size={20} />
            <span className="text-[10px] font-bold">
              الدروس
            </span>
          </Link>

          <Link
            href="/vocabulary"
            className="flex min-w-[60px] flex-col items-center gap-1 px-3 py-2 text-[var(--muted)]"
          >
            <Star size={20} />
            <span className="text-[10px] font-bold">
              الكلمات
            </span>
          </Link>

          <Link
            href="/practice"
            className="flex min-w-[60px] flex-col items-center gap-1 px-3 py-2 text-[var(--muted)]"
          >
            <BrainIcon />
            <span className="text-[10px] font-bold">
              تدريب
            </span>
          </Link>

          <Link
            href="/progress"
            className="flex min-w-[60px] flex-col items-center gap-1 px-3 py-2 text-[var(--muted)]"
          >
            <Star size={20} />
            <span className="text-[10px] font-bold">
              التقدم
            </span>
          </Link>
        </div>
      </nav>
    </main>
  );
}

function BrainIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125A4 4 0 0 0 5 13.5 4 4 0 0 0 8 20a4 4 0 0 0 4-3.5A4 4 0 0 0 12 5Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125A4 4 0 0 1 19 13.5a4 4 0 0 1-3 6.5 4 4 0 0 1-4-3.5" />
      <path d="M8 9h1" />
      <path d="M15 9h1" />
      <path d="M8 15h1" />
      <path d="M15 15h1" />
      <path d="M12 8v8" />
    </svg>
  );
    }
