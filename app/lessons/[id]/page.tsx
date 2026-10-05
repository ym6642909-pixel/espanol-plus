"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const lessons: Record<string, any> = {
  "1-1": {
    unit: "الوحدة 1",
    title: "¡Hola!",
    subtitle: "التحيات والتعارف",
    words: [
      {
        spanish: "Hola",
        pronunciation: "أولا",
        arabic: "مرحبًا",
        example: "¡Hola! ¿Cómo estás?",
        exampleArabic: "مرحبًا! كيف حالك؟",
      },
      {
        spanish: "Buenos días",
        pronunciation: "بوينوس دياس",
        arabic: "صباح الخير",
        example: "¡Buenos días, María!",
        exampleArabic: "صباح الخير يا ماريا!",
      },
      {
        spanish: "Buenas tardes",
        pronunciation: "بويناس تاردِس",
        arabic: "مساء الخير",
        example: "Buenas tardes.",
        exampleArabic: "مساء الخير.",
      },
      {
        spanish: "Gracias",
        pronunciation: "غراسياس",
        arabic: "شكرًا",
        example: "Gracias por tu ayuda.",
        exampleArabic: "شكرًا على مساعدتك.",
      },
      {
        spanish: "Adiós",
        pronunciation: "أديوس",
        arabic: "وداعًا",
        example: "¡Adiós! Hasta mañana.",
        exampleArabic: "وداعًا! أراك غدًا.",
      },
    ],

    questions: [
      {
        question: 'ماذا تعني كلمة "Hola"؟',
        options: ["شكرًا", "مرحبًا", "وداعًا", "صباح الخير"],
        answer: "مرحبًا",
      },
      {
        question: 'كيف تقول "شكرًا" بالإسبانية؟',
        options: ["Adiós", "Hola", "Gracias", "Buenas tardes"],
        answer: "Gracias",
      },
      {
        question: 'ماذا تعني "Buenos días"؟',
        options: ["مساء الخير", "صباح الخير", "وداعًا", "مرحبًا"],
        answer: "صباح الخير",
      },
      {
        question: 'ما معنى "Adiós"؟',
        options: ["مرحبًا", "شكرًا", "وداعًا", "صباح الخير"],
        answer: "وداعًا",
      },
    ],
  },
};

export function generateStaticParams() {
  return [
    { id: "1-1" },
    { id: "1-2" },
    { id: "1-3" },
    { id: "1-4" },
    { id: "2-1" },
    { id: "2-2" },
    { id: "2-3" },
    { id: "2-4" },
  ];
}

export const dynamicParams = false;

export default function LessonPage({
  params,
}: {
  params: { id: string };
}) {
  const lesson = lessons[params.id];

  const [currentWord, setCurrentWord] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`lesson-${params.id}-completed`);
    if (saved === "true") {
      setCompleted(true);
    }
  }, [params.id]);

  if (!lesson) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">الدرس غير موجود</h1>

          <Link
            href="/lessons"
            className="inline-block rounded-xl bg-indigo-600 px-6 py-3 text-white"
          >
            العودة للدروس
          </Link>
        </div>
      </main>
    );
  }

  const word = lesson.words[currentWord];
  const question = lesson.questions[currentQuestion];

  function speak(text: string) {
    if (typeof window === "undefined") return;

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "es-ES";
    speech.rate = 0.85;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  }

  function checkAnswer(option: string) {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    if (option === question.answer) {
      setScore((prev) => prev + 1);
    }
  }

  function nextQuestion() {
    if (currentQuestion < lesson.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      const finalScore =
        score + (selectedAnswer === question.answer ? 1 : 0);

      setScore(finalScore);
      setFinished(true);

      localStorage.setItem(`lesson-${params.id}-completed`, "true");
      localStorage.setItem(
        `lesson-${params.id}-score`,
        finalScore.toString()
      );

      setCompleted(true);
    }
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white"
    >
      {/* Header */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link
            href="/lessons"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
          >
            ← الدروس
          </Link>

          <div className="text-center">
            <p className="text-xs text-indigo-300">{lesson.unit}</p>
            <h1 className="font-bold">{lesson.title}</h1>
          </div>

          <div className="rounded-xl bg-yellow-400/10 px-3 py-2 text-sm text-yellow-300">
            ⭐ {score * 10} XP
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-8">

        {!finished ? (
          <>
            {/* Hero */}

            <section className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl">
              <div className="mb-4 text-6xl">👋</div>

              <p className="mb-2 text-sm text-indigo-300">
                {lesson.unit}
              </p>

              <h2 className="text-3xl font-black md:text-4xl">
                {lesson.title}
              </h2>

              <p className="mt-3 text-slate-300">
                {lesson.subtitle}
              </p>
            </section>

            {/* Vocabulary */}

            <section className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-indigo-300">
                    الخطوة 1
                  </p>

                  <h2 className="text-2xl font-bold">
                    تعلّم الكلمات
                  </h2>
                </div>

                <span className="text-sm text-slate-400">
                  {currentWord + 1} / {lesson.words.length}
                </span>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-center">

                  <p className="text-4xl font-black text-white">
                    {word.spanish}
                  </p>

                  <p className="mt-2 text-indigo-300">
                    {word.pronunciation}
                  </p>

                  <p className="mt-5 text-2xl font-bold">
                    {word.arabic}
                  </p>

                  <button
                    onClick={() => speak(word.spanish)}
                    className="mt-6 rounded-2xl bg-indigo-600 px-6 py-3 font-bold transition hover:bg-indigo-500"
                  >
                    🔊 استمع للنطق
                  </button>

                  <div className="mt-6 rounded-2xl bg-black/20 p-4 text-right">
                    <p className="font-semibold">
                      {word.example}
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      {word.exampleArabic}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-between gap-3">

                  <button
                    disabled={currentWord === 0}
                    onClick={() =>
                      setCurrentWord((prev) => Math.max(0, prev - 1))
                    }
                    className="rounded-xl bg-white/10 px-5 py-3 disabled:opacity-30"
                  >
                    السابق
                  </button>

                  <button
                    disabled={currentWord === lesson.words.length - 1}
                    onClick={() =>
                      setCurrentWord((prev) =>
                        Math.min(
                          lesson.words.length - 1,
                          prev + 1
                        )
                      )
                    }
                    className="rounded-xl bg-indigo-600 px-5 py-3 font-bold disabled:opacity-30"
                  >
                    التالي
                  </button>

                </div>
              </div>
            </section>

            {/* Quiz */}

            <section>
              <div className="mb-4">
                <p className="text-sm text-indigo-300">
                  الخطوة 2
                </p>

                <h2 className="text-2xl font-bold">
                  اختبر نفسك 🧠
                </h2>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

                <div className="mb-6">
                  <span className="text-sm text-slate-400">
                    السؤال {currentQuestion + 1} من{" "}
                    {lesson.questions.length}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">
                    {question.question}
                  </h3>
                </div>

                <div className="space-y-3">

                  {question.options.map((option: string) => {

                    const isCorrect =
                      option === question.answer;

                    const isSelected =
                      option === selectedAnswer;

                    let classes =
                      "w-full rounded-2xl border p-4 text-right transition ";

                    if (!selectedAnswer) {
                      classes +=
                        "border-white/10 bg-white/5 hover:bg-white/10";
                    } else if (isCorrect) {
                      classes +=
                        "border-green-400/50 bg-green-400/10 text-green-300";
                    } else if (isSelected) {
                      classes +=
                        "border-red-400/50 bg-red-400/10 text-red-300";
                    } else {
                      classes +=
                        "border-white/5 bg-white/5 opacity-50";
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => checkAnswer(option)}
                        className={classes}
                      >
                        {option}

                        {selectedAnswer && isCorrect && (
                          <span className="float-left">
                            ✓
                          </span>
                        )}

                        {selectedAnswer &&
                          isSelected &&
                          !isCorrect && (
                            <span className="float-left">
                              ✕
                            </span>
                          )}
                      </button>
                    );
                  })}

                </div>

                {selectedAnswer && (
                  <div className="mt-6">

                    <div
                      className={`rounded-2xl p-4 ${
                        selectedAnswer === question.answer
                          ? "bg-green-400/10 text-green-300"
                          : "bg-red-400/10 text-red-300"
                      }`}
                    >
                      {selectedAnswer === question.answer
                        ? "🎉 إجابة صحيحة!"
                        : `الإجابة الصحيحة هي: ${question.answer}`}
                    </div>

                    <button
                      onClick={nextQuestion}
                      className="mt-4 w-full rounded-2xl bg-indigo-600 py-4 font-bold hover:bg-indigo-500"
                    >
                      {currentQuestion ===
                      lesson.questions.length - 1
                        ? "إنهاء الدرس 🎉"
                        : "السؤال التالي →"}
                    </button>

                  </div>
                )}

              </div>
            </section>
          </>
        ) : (
          /* Completion */

          <section className="py-16 text-center">

            <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">

              <div className="text-7xl">🎉</div>

              <h2 className="mt-6 text-4xl font-black">
                أحسنت!
              </h2>

              <p className="mt-3 text-lg text-slate-300">
                لقد أكملت درس {lesson.title}
              </p>

              <div className="my-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="text-3xl font-black text-yellow-300">
                    {score}/{lesson.questions.length}
                  </div>

                  <p className="mt-2 text-sm text-slate-400">
                    الإجابات الصحيحة
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="text-3xl font-black text-indigo-300">
                    +{score * 10} XP
                  </div>

                  <p className="mt-2 text-sm text-slate-400">
                    نقاط الخبرة
                  </p>
                </div>

              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/lessons"
                  className="flex-1 rounded-2xl bg-white/10 px-6 py-4 font-bold hover:bg-white/15"
                >
                  العودة للدروس
                </Link>

                <Link
                  href="/lessons/1-2"
                  className="flex-1 rounded-2xl bg-indigo-600 px-6 py-4 font-bold hover:bg-indigo-500"
                >
                  الدرس التالي →
                </Link>

              </div>

            </div>

          </section>
        )}

      </div>
    </main>
  );
}
