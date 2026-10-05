"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Brain,
  Headphones,
  MessageCircle,
  Sparkles,
  Trophy,
  CheckCircle2,
  Play,
  Languages,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "دروس منظمة",
    description: "تعلم الإسبانية خطوة بخطوة من المستوى A1 حتى C1.",
  },
  {
    icon: Brain,
    title: "مفردات ذكية",
    description: "احفظ الكلمات بطريقة تساعدك على تذكرها لفترة أطول.",
  },
  {
    icon: Headphones,
    title: "الاستماع والنطق",
    description: "استمع إلى النطق الصحيح وتدرب على فهم الإسبانية.",
  },
  {
    icon: MessageCircle,
    title: "المحادثة",
    description: "تدرب على مواقف واقعية واستخدم الإسبانية بثقة.",
  },
];

const levels = [
  {
    level: "A1",
    title: "مبتدئ",
    description: "ابدأ من الصفر وتعلم أساسيات الإسبانية.",
    color: "from-emerald-500 to-green-600",
  },
  {
    level: "A2",
    title: "أساسي",
    description: "وسع مفرداتك وابدأ في تكوين محادثات بسيطة.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    level: "B1",
    title: "متوسط",
    description: "تحدث عن حياتك وأفكارك ومواقفك اليومية.",
    color: "from-violet-500 to-purple-600",
  },
  {
    level: "B2",
    title: "متوسط متقدم",
    description: "طور طلاقتك وافهم الإسبانية بشكل أعمق.",
    color: "from-orange-500 to-red-500",
  },
  {
    level: "C1",
    title: "متقدم",
    description: "اقترب من استخدام الإسبانية بطلاقة واحتراف.",
    color: "from-pink-500 to-rose-600",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)]">
      {/* Header */}
      <header className="relative z-20 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md">
        <div className="container-app flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-black text-xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              🇪🇸
            </span>

            <span>
              Español<span className="text-blue-600">+</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <Link
              href="/lessons"
              className="text-sm font-semibold text-[var(--muted)] transition hover:text-blue-600"
            >
              الدروس
            </Link>

            <Link
              href="/vocabulary"
              className="text-sm font-semibold text-[var(--muted)] transition hover:text-blue-600"
            >
              المفردات
            </Link>

            <Link
              href="/grammar"
              className="text-sm font-semibold text-[var(--muted)] transition hover:text-blue-600"
            >
              القواعد
            </Link>

            <Link
              href="/speaking"
              className="text-sm font-semibold text-[var(--muted)] transition hover:text-blue-600"
            >
              المحادثة
            </Link>
          </nav>

          <Link
            href="/dashboard"
            className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 md:block"
          >
            لوحة التحكم
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />

        <div className="container-app relative flex min-h-[680px] items-center py-16 md:py-24">
          <div className="grid w-full items-center gap-14 lg:grid-cols-2">
            {/* Text */}
            <div className="animate-slide text-center lg:text-right">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                <Sparkles size={17} />
                تعلم الإسبانية بطريقة مختلفة
              </div>

              <h1 className="text-4xl font-black leading-[1.2] tracking-tight sm:text-5xl md:text-6xl">
                ابدأ رحلتك في
                <span className="block text-blue-600">
                  اللغة الإسبانية 🇪🇸
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg lg:mx-0">
                منصة تعليمية متكاملة تساعدك على تعلم الإسبانية من الصفر،
                وبناء المفردات والقواعد والاستماع والمحادثة خطوة بخطوة.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-row-reverse lg:justify-end">
                <Link
                  href="/level"
                  className="btn-primary group"
                >
                  ابدأ التعلم
                  <ArrowLeft
                    size={19}
                    className="transition group-hover:-translate-x-1"
                  />
                </Link>

                <Link
                  href="/placement-test"
                  className="btn-secondary"
                >
                  اختبار تحديد المستوى
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap justify-center gap-5 text-sm text-[var(--muted)] lg:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={18} />
                  مستويات A1 - C1
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={18} />
                  تمارين تفاعلية
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={18} />
                  تعلم تدريجي
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <div className="animate-float relative aspect-square">
                <div className="absolute inset-8 rounded-[40px] bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 shadow-2xl shadow-blue-500/25" />

                <div className="absolute inset-14 flex flex-col items-center justify-center rounded-[32px] bg-white/95 p-7 text-center shadow-2xl backdrop-blur">
                  <div className="mb-5 text-7xl">🇪🇸</div>

                  <div className="text-sm font-bold text-blue-600">
                    Español+
                  </div>

                  <div className="mt-2 text-2xl font-black text-slate-900">
                    ¡Hola!
                  </div>

                  <div className="mt-2 text-sm text-slate-500">
                    أهلاً بك في رحلتك لتعلم الإسبانية
                  </div>

                  <div className="mt-6 flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                    <Play size={15} fill="currentColor" />
                    ابدأ أول درس
                  </div>
                </div>

                <div className="absolute -left-2 top-20 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:-left-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
                    <Trophy className="text-green-600" size={22} />
                  </div>

                  <div>
                    <div className="text-xs text-slate-400">
                      التقدم
                    </div>
                    <div className="font-black text-slate-800">
                      +120 XP
                    </div>
                  </div>
                </div>

                <div className="absolute -right-2 bottom-24 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:-right-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                    <Languages className="text-blue-600" size={22} />
                  </div>

                  <div>
                    <div className="text-xs text-slate-400">
                      كلمات جديدة
                    </div>
                    <div className="font-black text-slate-800">
                      15 كلمة
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-20">
        <div className="container-app">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold text-blue-600">
              لماذا Español+؟
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              كل ما تحتاجه لتعلم الإسبانية
            </h2>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              نظام تعليمي يجمع بين المعرفة النظرية والتطبيق العملي.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="card group p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20">
        <div className="container-app">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold text-blue-600">
              مسار التعلم
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              من الصفر حتى المستوى المتقدم
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--muted)]">
              اختر مستواك وابدأ التعلم وفق مسار واضح ومنظم.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {levels.map((item) => (
              <Link
                key={item.level}
                href="/level"
                className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`bg-gradient-to-br ${item.color} p-6 text-white`}
                >
                  <div className="text-4xl font-black">
                    {item.level}
                  </div>

                  <div className="mt-1 font-bold">
                    {item.title}
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-sm font-bold text-blue-600">
                    اكتشف المستوى
                    <ArrowLeft
                      size={16}
                      className="transition group-hover:-translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-14 text-center text-white shadow-2xl shadow-blue-600/20 sm:px-12">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

            <div className="relative">
              <div className="mb-5 text-5xl">🇪🇸</div>

              <h2 className="text-3xl font-black sm:text-4xl">
                مستعد تبدأ؟
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
                ابدأ الآن أول خطوة في رحلتك نحو التحدث باللغة الإسبانية.
              </p>

              <Link
                href="/level"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 font-black text-blue-700 transition hover:-translate-y-1 hover:shadow-xl"
              >
                ابدأ التعلم
                <ArrowLeft size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-8">
        <div className="container-app flex flex-col items-center justify-between gap-4 text-sm text-[var(--muted)] sm:flex-row">
          <div className="font-bold">
            🇪🇸 Español<span className="text-blue-600">+</span>
          </div>

          <div>
            تعلم الإسبانية خطوة بخطوة.
          </div>

          <div>
            © 2026 Español+
          </div>
        </div>
      </footer>
    </main>
  );
}
