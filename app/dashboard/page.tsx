"use client";

import Link from "next/link";
import {
  BookOpen,
  Brain,
  Flame,
  Headphones,
  Lock,
  MessageCircle,
  Play,
  Trophy,
  ChevronLeft,
  Star,
  Target,
  PenLine,
  Settings,
} from "lucide-react";

const skills = [
  {
    icon: BookOpen,
    title: "القراءة",
    progress: 72,
    color: "bg-blue-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Headphones,
    title: "الاستماع",
    progress: 48,
    color: "bg-purple-600",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: MessageCircle,
    title: "المحادثة",
    progress: 35,
    color: "bg-green-600",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: PenLine,
    title: "الكتابة",
    progress: 56,
    color: "bg-orange-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Brain,
    title: "القواعد",
    progress: 64,
    color: "bg-pink-600",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

const units = [
  {
    number: 1,
    title: "¡Hola!",
    description: "التحيات والتعارف",
    progress: 100,
    completed: true,
  },
  {
    number: 2,
    title: "Los números",
    description: "الأرقام والأعداد",
    progress: 75,
    completed: false,
  },
  {
    number: 3,
    title: "Mi familia",
    description: "العائلة والأشخاص",
    progress: 0,
    completed: false,
  },
  {
    number: 4,
    title: "Mi día",
    description: "الحياة اليومية",
    progress: 0,
    completed: false,
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pb-24">
      {/* Desktop Header */}
      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-xl">
        <div className="container-app flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-black text-xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              🇪🇸
            </span>

            <span>
              Español<span className="text-blue-600">+</span>
            </span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/lessons"
              className="rounded-lg px-3 py-2 text-sm font-bold text-[var(--muted)] hover:bg-[var(--surface-soft)]"
            >
              الدروس
            </Link>

            <Link
              href="/vocabulary"
              className="rounded-lg px-3 py-2 text-sm font-bold text-[var(--muted)] hover:bg-[var(--surface-soft)]"
            >
              المفردات
            </Link>

            <Link
              href="/practice"
              className="rounded-lg px-3 py-2 text-sm font-bold text-[var(--muted)] hover:bg-[var(--surface-soft)]"
            >
              التمارين
            </Link>

            <Link
              href="/progress"
              className="rounded-lg px-3 py-2 text-sm font-bold text-[var(--muted)] hover:bg-[var(--surface-soft)]"
            >
              التقدم
            </Link>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] hover:bg-[var(--surface-soft)]"
              aria-label="الإعدادات"
            >
              <Settings size={19} />
            </button>
          </div>
        </div>
      </header>

      <div className="container-app pt-8">
        {/* Welcome */}
        <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-6 text-white shadow-xl shadow-blue-600/15 sm:p-8">
          <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-100">
                <span>🇪🇸</span>
                مستواك الحالي: A1
              </div>

              <h1 className="text-2xl font-black sm:text-3xl">
                أهلاً بك من جديد 👋
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                استمر في رحلتك. أنت تقترب خطوة أخرى من التحدث بالإسبانية
                بثقة.
              </p>

              <Link
                href="/lessons/1"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-blue-700 shadow-lg transition hover:-translate-y-0.5"
              >
                <Play size={17} fill="currentColor" />
                متابعة التعلم
              </Link>
            </div>

            <div className="flex shrink-0 items-center justify-center">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-white/20">
                <div className="absolute inset-0 rounded-full border-[10px] border-transparent border-t-white border-r-white rotate-[35deg]" />

                <div className="text-center">
                  <div className="text-3xl font-black">72%</div>
                  <div className="text-xs text-blue-100">تقدم A1</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          <div className="card p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Flame size={22} />
              </div>

              <div>
                <div className="text-xs text-[var(--muted)]">
                  سلسلة التعلم
                </div>
                <div className="mt-1 text-xl font-black">7 أيام</div>
              </div>
            </div>
          </div>

          <div className="card p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                <Star size={22} />
              </div>

              <div>
                <div className="text-xs text-[var(--muted)]">
                  النقاط
                </div>
                <div className="mt-1 text-xl font-black">1,240 XP</div>
              </div>
            </div>
          </div>

          <div className="card p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <BookOpen size={22} />
              </div>

              <div>
                <div className="text-xs text-[var(--muted)]">
                  الدروس
                </div>
                <div className="mt-1 text-xl font-black">24</div>
              </div>
            </div>
          </div>

          <div className="card p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <Brain size={22} />
              </div>

              <div>
                <div className="text-xs text-[var(--muted)]">
                  الكلمات
                </div>
                <div className="mt-1 text-xl font-black">86</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Continue Learning */}
          <section className="card overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--border)] p-5 sm:p-6">
              <div>
                <h2 className="text-lg font-black">
                  أكمل من حيث توقفت
                </h2>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  الدرس التالي في مسارك
                </p>
              </div>

              <Link
                href="/lessons"
                className="text-sm font-bold text-blue-600"
              >
                كل الدروس
              </Link>
            </div>

            <div className="p-5 sm:p-6">
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-5 dark:from-blue-950/40 dark:to-indigo-950/40">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg">
                    👋
                  </div>

                  <div className="flex-1">
                    <div className="text-xs font-bold text-blue-600">
                      الوحدة 2 • الدرس 4
                    </div>

                    <h3 className="mt-1 text-xl font-black">
                      Presentarse
                    </h3>

                    <p className="mt-1 text-sm text-[var(--muted)]">
                      التعريف بنفسك والتحدث عن معلوماتك الشخصية.
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="progress-track flex-1">
                        <div
                          className="progress-value bg-blue-600"
                          style={{ width: "65%" }}
                        />
                      </div>

                      <span className="text-xs font-black">
                        65%
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/lessons/4"
                    className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-black text-white transition hover:bg-blue-700"
                  >
                    متابعة
                    <Play size={16} fill="currentColor" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Daily Goal */}
          <section className="card p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black">
                  هدف اليوم
                </h2>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  15 دقيقة يوميًا
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <Target size={21} />
              </div>
            </div>

            <div className="mt-7 flex items-center justify-center">
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-2 rounded-full border-[10px] border-green-500 border-l-transparent rotate-[-40deg]" />

                <div className="text-center">
                  <div className="text-3xl font-black">
                    10
                  </div>

                  <div className="mt-1 text-xs text-[var(--muted)]">
                    من 15 دقيقة
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="text-sm font-bold text-green-600">
                ممتاز! بقي 5 دقائق فقط 🎯
              </div>
            </div>
          </section>
        </div>

        {/* Skills */}
        <section className="mt-8">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-black">
                مهاراتك
              </h2>

              <p className="mt-1 text-sm text-[var(--muted)]">
                تابع تطور كل مهارة بشكل منفصل
              </p>
            </div>

            <Link
              href="/progress"
              className="hidden text-sm font-bold text-blue-600 sm:block"
            >
              عرض التفاصيل
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="card p-5 transition hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${skill.iconBg} ${skill.iconColor}`}
                    >
                      <Icon size={21} />
                    </div>

                    <span className="text-sm font-black">
                      {skill.progress}%
                    </span>
                  </div>

                  <h3 className="mt-4 font-black">
                    {skill.title}
                  </h3>

                  <div className="mt-3 progress-track">
                    <div
                      className={`progress-value ${skill.color}`}
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Course Units */}
        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-black">
              مسار A1
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              تقدم خلال الوحدات بالترتيب
            </p>
          </div>

          <div className="space-y-3">
            {units.map((unit) => (
              <Link
                href={
                  unit.completed || unit.progress > 0
                    ? `/lessons/unit-${unit.number}`
                    : "#"
                }
                key={unit.number}
                className={`card flex items-center gap-4 p-4 transition sm:p-5 ${
                  !unit.completed && unit.progress === 0
                    ? "cursor-not-allowed opacity-70"
                    : "hover:-translate-y-0.5 hover:shadow-lg"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-black ${
                    unit.completed
                      ? "bg-green-100 text-green-600"
                      : unit.progress > 0
                        ? "bg-blue-100 text-blue-600"
                        : "bg-[var(--surface-soft)] text-[var(--muted)]"
                  }`}
                >
                  {unit.completed ? (
                    "✓"
                  ) : unit.progress === 0 ? (
                    <Lock size={18} />
                  ) : (
                    unit.number
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-black">
                        {unit.title}
                      </h3>

                      <p className="mt-1 truncate text-sm text-[var(--muted)]">
                        {unit.description}
                      </p>
                    </div>

                    <span className="hidden text-xs font-bold sm:block">
                      {unit.progress}%
                    </span>
                  </div>

                  <div className="mt-3 progress-track">
                    <div
                      className={`progress-value ${
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

                {unit.progress > 0 && !unit.completed && (
                  <ChevronLeft
                    size={20}
                    className="shrink-0 text-[var(--muted)]"
                  />
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-black">
              إنجازاتك
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              استمر في التعلم لفتح المزيد من الإنجازات
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="card p-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🔥
              </div>

              <div className="mt-3 font-black">
                أسبوع كامل
              </div>

              <div className="mt-1 text-xs text-[var(--muted)]">
                7 أيام متتالية
              </div>
            </div>

            <div className="card p-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-2xl">
                ⭐
              </div>

              <div className="mt-3 font-black">
                أول 1000 XP
              </div>

              <div className="mt-1 text-xs text-[var(--muted)]">
                تم فتحها
              </div>
            </div>

            <div className="card p-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                📚
              </div>

              <div className="mt-3 font-black">
                قارئ جيد
              </div>

              <div className="mt-1 text-xs text-[var(--muted)]">
                20 درسًا
              </div>
            </div>

            <div className="card p-5 text-center opacity-50">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
                🏆
              </div>

              <div className="mt-3 font-black">
                متحدث
              </div>

              <div className="mt-1 text-xs text-[var(--muted)]">
                مقفلة
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-[var(--surface)]/95 px-2 py-2 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-around">
          <Link
            href="/dashboard"
            className="flex min-w-[60px] flex-col items-center gap-1 rounded-xl px-3 py-2 text-blue-600"
          >
            <BookOpen size={20} />
            <span className="text-[10px] font-bold">الرئيسية</span>
          </Link>

          <Link
            href="/lessons"
            className="flex min-w-[60px] flex-col items-center gap-1 rounded-xl px-3 py-2 text-[var(--muted)]"
          >
            <BookOpen size={20} />
            <span className="text-[10px] font-bold">الدروس</span>
          </Link>

          <Link
            href="/vocabulary"
            className="flex min-w-[60px] flex-col items-center gap-1 rounded-xl px-3 py-2 text-[var(--muted)]"
          >
            <Brain size={20} />
            <span className="text-[10px] font-bold">الكلمات</span>
          </Link>

          <Link
            href="/speaking"
            className="flex min-w-[60px] flex-col items-center gap-1 rounded-xl px-3 py-2 text-[var(--muted)]"
          >
            <MessageCircle size={20} />
            <span className="text-[10px] font-bold">المحادثة</span>
          </Link>

          <Link
            href="/progress"
            className="flex min-w-[60px] flex-col items-center gap-1 rounded-xl px-3 py-2 text-[var(--muted)]"
          >
            <Trophy size={20} />
            <span className="text-[10px] font-bold">التقدم</span>
          </Link>
        </div>
      </nav>
    </main>
  );
    }
