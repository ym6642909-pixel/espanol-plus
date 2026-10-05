"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";

const levels = [
  {
    id: "A1",
    title: "مبتدئ",
    subtitle: "من الصفر",
    description:
      "تعلم التحيات، الأرقام، الكلمات الأساسية، تكوين الجمل البسيطة وأساسيات النطق.",
    words: "500+ كلمة",
    lessons: "40 درس",
    color: "from-emerald-500 to-green-600",
    light: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    id: "A2",
    title: "أساسي",
    subtitle: "أبدأ أتحدث",
    description:
      "وسع مفرداتك وتعلم التحدث عن حياتك اليومية والعائلة والعمل والسفر.",
    words: "1000+ كلمة",
    lessons: "50 درس",
    color: "from-blue-500 to-cyan-600",
    light: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    id: "B1",
    title: "متوسط",
    subtitle: "أتحدث بشكل أفضل",
    description:
      "طور قدرتك على المحادثة وفهم النصوص والتعبير عن آرائك وأفكارك.",
    words: "2000+ كلمة",
    lessons: "60 درس",
    color: "from-violet-500 to-purple-600",
    light: "bg-violet-50",
    text: "text-violet-600",
  },
  {
    id: "B2",
    title: "متوسط متقدم",
    subtitle: "طلاقة أكبر",
    description:
      "تعامل مع المحادثات المعقدة والنصوص الطويلة وطوّر دقة استخدام اللغة.",
    words: "3500+ كلمة",
    lessons: "70 درس",
    color: "from-orange-500 to-red-500",
    light: "bg-orange-50",
    text: "text-orange-600",
  },
  {
    id: "C1",
    title: "متقدم",
    subtitle: "إسبانية متقدمة",
    description:
      "استخدم اللغة بطلاقة وفهم النصوص المتقدمة والتعبير بدقة ومرونة.",
    words: "5000+ كلمة",
    lessons: "80 درس",
    color: "from-pink-500 to-rose-600",
    light: "bg-pink-50",
    text: "text-pink-600",
  },
];

export default function LevelPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)]">
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

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold text-[var(--muted)] transition hover:text-blue-600"
          >
            العودة للرئيسية
            <ArrowLeft size={17} />
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="container-app py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <Sparkles size={27} />
          </div>

          <h1 className="text-3xl font-black sm:text-4xl">
            اختر مستواك في الإسبانية
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--muted)]">
            اختر المستوى الذي يناسبك، ويمكنك دائمًا تغييره لاحقًا.
            إذا كنت لا تعرف مستواك، يمكنك إجراء اختبار تحديد المستوى.
          </p>

          <Link
            href="/placement-test"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-100"
          >
            لا أعرف مستواي
            <ArrowLeft size={17} />
          </Link>
        </div>

        {/* Levels */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {levels.map((level, index) => (
            <Link
              href={`/dashboard?level=${level.id}`}
              key={level.id}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Level Header */}
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${level.color} p-6 text-white`}
              >
                <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
                <div className="absolute -bottom-12 -right-5 h-36 w-36 rounded-full bg-white/10" />

                <div className="relative flex items-start justify-between">
                  <div>
                    <div className="text-5xl font-black tracking-tight">
                      {level.id}
                    </div>

                    <div className="mt-2 text-lg font-bold">
                      {level.title}
                    </div>

                    <div className="mt-1 text-sm text-white/80">
                      {level.subtitle}
                    </div>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-lg font-black backdrop-blur">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="min-h-[72px] text-sm leading-7 text-[var(--muted)]">
                  {level.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className={`rounded-xl ${level.light} p-3`}>
                    <div className={`text-xs ${level.text}`}>
                      المفردات
                    </div>

                    <div className="mt-1 text-sm font-black">
                      {level.words}
                    </div>
                  </div>

                  <div className={`rounded-xl ${level.light} p-3`}>
                    <div className={`text-xs ${level.text}`}>
                      المحتوى
                    </div>

                    <div className="mt-1 text-sm font-black">
                      {level.lessons}
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-5 flex items-center justify-center gap-2 rounded-xl bg-[var(--surface-soft)] py-3 text-sm font-black transition group-hover:bg-blue-600 group-hover:text-white`}
                >
                  ابدأ مستوى {level.id}
                  <ArrowLeft size={17} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:flex-row sm:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-600">
            <Check size={25} />
          </div>

          <div>
            <h3 className="font-black">
              لا تقلق بشأن اختيار المستوى الصحيح
            </h3>

            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
              يمكنك تغيير المستوى لاحقًا، كما سنستخدم نتائج تقدمك لمساعدتك
              على معرفة المستوى الأنسب لك.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
                }
