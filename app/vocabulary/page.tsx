"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Brain,
  Check,
  ChevronLeft,
  Clock3,
  Flame,
  Headphones,
  Search,
  Star,
  Volume2,
} from "lucide-react";
import { useMemo, useState } from "react";

type Word = {
  id: number;
  spanish: string;
  pronunciation: string;
  arabic: string;
  category: string;
  example: string;
  exampleArabic: string;
  learned: boolean;
  difficulty: "سهل" | "متوسط" | "صعب";
};

const words: Word[] = [
  {
    id: 1,
    spanish: "Hola",
    pronunciation: "أولا",
    arabic: "مرحبًا / أهلاً",
    category: "التحيات",
    example: "Hola, ¿cómo estás?",
    exampleArabic: "مرحبًا، كيف حالك؟",
    learned: true,
    difficulty: "سهل",
  },
  {
    id: 2,
    spanish: "Gracias",
    pronunciation: "جراسياس",
    arabic: "شكرًا",
    category: "التحيات",
    example: "Gracias por tu ayuda.",
    exampleArabic: "شكرًا على مساعدتك.",
    learned: true,
    difficulty: "سهل",
  },
  {
    id: 3,
    spanish: "Familia",
    pronunciation: "فاميليا",
    arabic: "عائلة",
    category: "العائلة",
    example: "Mi familia es grande.",
    exampleArabic: "عائلتي كبيرة.",
    learned: false,
    difficulty: "سهل",
  },
  {
    id: 4,
    spanish: "Casa",
    pronunciation: "كاسا",
    arabic: "بيت / منزل",
    category: "المنزل",
    example: "Mi casa está aquí.",
    exampleArabic: "بيتي هنا.",
    learned: false,
    difficulty: "سهل",
  },
  {
    id: 5,
    spanish: "Comida",
    pronunciation: "كوميدا",
    arabic: "طعام / أكل",
    category: "الطعام",
    example: "La comida está buena.",
    exampleArabic: "الأكل لذيذ.",
    learned: false,
    difficulty: "سهل",
  },
  {
    id: 6,
    spanish: "Agua",
    pronunciation: "أجوا",
    arabic: "ماء",
    category: "الطعام",
    example: "Quiero agua, por favor.",
    exampleArabic: "أريد ماءً من فضلك.",
    learned: true,
    difficulty: "سهل",
  },
  {
    id: 7,
    spanish: "Amigo",
    pronunciation: "أميجو",
    arabic: "صديق",
    category: "الأشخاص",
    example: "Él es mi amigo.",
    exampleArabic: "هو صديقي.",
    learned: false,
    difficulty: "متوسط",
  },
  {
    id: 8,
    spanish: "Trabajo",
    pronunciation: "تراباخو",
    arabic: "عمل",
    category: "الحياة اليومية",
    example: "Tengo trabajo hoy.",
    exampleArabic: "لدي عمل اليوم.",
    learned: false,
    difficulty: "متوسط",
  },
  {
    id: 9,
    spanish: "Tiempo",
    pronunciation: "تييمبو",
    arabic: "وقت",
    category: "الحياة اليومية",
    example: "No tengo tiempo.",
    exampleArabic: "ليس لدي وقت.",
    learned: false,
    difficulty: "متوسط",
  },
  {
    id: 10,
    spanish: "Hablar",
    pronunciation: "أبلار",
    arabic: "يتحدث / يتكلم",
    category: "الأفعال",
    example: "Quiero hablar español.",
    exampleArabic: "أريد أن أتحدث الإسبانية.",
    learned: false,
    difficulty: "متوسط",
  },
  {
    id: 11,
    spanish: "Aprender",
    pronunciation: "أبريندير",
    arabic: "يتعلم",
    category: "الأفعال",
    example: "Quiero aprender español.",
    exampleArabic: "أريد تعلم الإسبانية.",
    learned: false,
    difficulty: "متوسط",
  },
  {
    id: 12,
    spanish: "Querer",
    pronunciation: "كيرير",
    arabic: "يريد / يحب",
    category: "الأفعال",
    example: "Quiero un café.",
    exampleArabic: "أريد قهوة.",
    learned: false,
    difficulty: "صعب",
  },
];

const categories = [
  "الكل",
  "التحيات",
  "العائلة",
  "المنزل",
  "الطعام",
  "الأشخاص",
  "الحياة اليومية",
  "الأفعال",
];

export default function VocabularyPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("الكل");
  const [showLearnedOnly, setShowLearnedOnly] = useState(false);

  const filteredWords = useMemo(() => {
    return words.filter((word) => {
      const matchesCategory =
        category === "الكل" || word.category === category;

      const normalizedQuery = query.trim().toLowerCase();

      const matchesSearch =
        normalizedQuery.length === 0 ||
        word.spanish.toLowerCase().includes(normalizedQuery) ||
        word.arabic.toLowerCase().includes(normalizedQuery) ||
        word.pronunciation.toLowerCase().includes(normalizedQuery);

      const matchesLearned =
        !showLearnedOnly || word.learned;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesLearned
      );
    });
  }, [query, category, showLearnedOnly]);

  const learnedCount = words.filter((word) => word.learned).length;

  function speakWord(word: string) {
    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word);

    utterance.lang = "es-ES";
    utterance.rate = 0.85;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  }

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
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-violet-600 to-blue-700 p-6 text-white shadow-xl shadow-blue-600/10 sm:p-8">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-blue-100">
                <Brain size={17} />
                مركز المفردات
              </div>

              <h1 className="text-3xl font-black">
                ابنِ قاموسك الإسباني 🧠
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                تعلم كلمات جديدة، استمع إلى نطقها، وشاهد كيف تستخدم داخل
                جمل حقيقية.
              </p>
            </div>

            <Link
              href="/vocabulary/review"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-blue-700 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Clock3 size={17} />
              مراجعة الكلمات
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="card p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <BookOpen size={19} />
              </div>

              <div>
                <div className="text-xs text-[var(--muted)]">
                  إجمالي الكلمات
                </div>
                <div className="mt-1 text-xl font-black">
                  500+
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <Check size={19} />
              </div>

              <div>
                <div className="text-xs text-[var(--muted)]">
                  تعلمتها
                </div>
                <div className="mt-1 text-xl font-black">
                  {learnedCount}
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Flame size={19} />
              </div>

              <div>
                <div className="text-xs text-[var(--muted)]">
                  سلسلة المراجعة
                </div>
                <div className="mt-1 text-xl font-black">
                  7 أيام
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                <Star size={19} />
              </div>

              <div>
                <div className="text-xs text-[var(--muted)]">
                  إتقان الكلمات
                </div>
                <div className="mt-1 text-xl font-black">
                  68%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="mt-8">
          <div className="relative">
            <Search
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
            />

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="ابحث عن كلمة بالإسبانية أو العربية..."
              className="h-14 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-12 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>
        </section>

        {/* Filters */}
        <section className="mt-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => {
              const active = category === item;

              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                    active
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-blue-300"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setShowLearnedOnly((value) => !value)}
            className={`mt-2 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition ${
              showLearnedOnly
                ? "bg-green-100 text-green-700"
                : "bg-[var(--surface)] text-[var(--muted)]"
            }`}
          >
            <Check size={16} />
            الكلمات التي تعلمتها فقط
          </button>
        </section>

        {/* Vocabulary Cards */}
        <section className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black">
                الكلمات
              </h2>

              <p className="mt-1 text-sm text-[var(--muted)]">
                {filteredWords.length} كلمة معروضة
              </p>
            </div>
          </div>

          {filteredWords.length === 0 ? (
            <div className="card py-16 text-center">
              <div className="text-5xl">🔎</div>

              <h3 className="mt-4 text-lg font-black">
                لم نجد هذه الكلمة
              </h3>

              <p className="mt-2 text-sm text-[var(--muted)]">
                جرّب كلمة أخرى أو غيّر التصنيف.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredWords.map((word) => (
                <article
                  key={word.id}
                  className="card group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black text-blue-600 dark:bg-blue-950/40">
                          {word.category}
                        </span>

                        <h3 className="mt-4 text-3xl font-black tracking-tight">
                          {word.spanish}
                        </h3>

                        <div className="mt-1 text-sm font-medium text-[var(--muted)]">
                          / {word.pronunciation} /
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => speakWord(word.spanish)}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white dark:bg-blue-950/40"
                        aria-label={`استمع إلى ${word.spanish}`}
                      >
                        <Volume2 size={20} />
                      </button>
                    </div>

                    <div className="mt-4">
                      <div className="text-lg font-black">
                        {word.arabic}
                      </div>

                      <div className="mt-3 rounded-xl bg-[var(--surface-soft)] p-3">
                        <div className="text-sm font-bold">
                          {word.example}
                        </div>

                        <div className="mt-1 text-xs leading-6 text-[var(--muted)]">
                          {word.exampleArabic}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
                          word.difficulty === "سهل"
                            ? "bg-green-100 text-green-700"
                            : word.difficulty === "متوسط"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {word.difficulty}
                      </span>

                      {word.learned ? (
                        <span className="flex items-center gap-1.5 text-xs font-bold text-green-600">
                          <Check size={15} />
                          تم تعلمها
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-[var(--muted)]">
                          لم تُراجع بعد
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-[var(--border)] bg-[var(--surface-soft)] px-5 py-3">
                    <Link
                      href={`/vocabulary/${word.id}`}
                      className="flex items-center justify-between text-sm font-bold text-blue-600"
                    >
                      تفاصيل الكلمة
                      <ChevronLeft size={17} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Learning Method */}
        <section className="mt-10 overflow-hidden rounded-3xl border border-violet-200 bg-violet-50 p-6 dark:border-violet-900 dark:bg-violet-950/20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-600 text-white">
              <Headphones size={26} />
            </div>

            <div className="flex-1">
              <h2 className="font-black">
                لا تحفظ الكلمات فقط
              </h2>

              <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                اسمع الكلمة، اقرأ المثال، استخدمها في جملة، ثم راجعها مرة
                أخرى في الوقت المناسب. سنضيف لاحقًا نظام مراجعة متكررة
                يساعدك على تثبيت الكلمات في الذاكرة.
              </p>
            </div>

            <Link
              href="/vocabulary/review"
              className="btn-primary shrink-0"
            >
              ابدأ المراجعة
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
            className="flex min-w-[60px] flex-col items-center gap-1 px-3 py-2 text-[var(--muted)]"
          >
            <BookOpen size={20} />
            <span className="text-[10px] font-bold">
              الدروس
            </span>
          </Link>

          <Link
            href="/vocabulary"
            className="flex min-w-[60px] flex-col items-center gap-1 px-3 py-2 text-blue-600"
          >
            <Brain size={20} />
            <span className="text-[10px] font-bold">
              الكلمات
            </span>
          </Link>

          <Link
            href="/practice"
            className="flex min-w-[60px] flex-col items-center gap-1 px-3 py-2 text-[var(--muted)]"
          >
            <Star size={20} />
            <span className="text-[10px] font-bold">
              تدريب
            </span>
          </Link>

          <Link
            href="/progress"
            className="flex min-w-[60px] flex-col items-center gap-1 px-3 py-2 text-[var(--muted)]"
          >
            <Flame size={20} />
            <span className="text-[10px] font-bold">
              التقدم
            </span>
          </Link>
        </div>
      </nav>
    </main>
  );
}
