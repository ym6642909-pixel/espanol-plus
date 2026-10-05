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

export default function LessonClient({ id }: { id: string }) {
  const lesson = lessons[id];

  const [currentWord, setCurrentWord] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`lesson-${id}-completed`);

    if (saved === "true") {
      setCompleted(true);
    }
  }, [id]);

  if (!lesson) {
    return (
      <main
        dir="rtl"
        className="min-h-screen flex items-center justify-center bg-slate-950 p-6 text-white"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            الدرس غير موجود
          </h1>

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
      return;
    }

    const finalScore =
      score + (selectedAnswer === question.answer ? 1 : 0);

    setScore(finalScore);
    setFinished(true);
    setCompleted(true);

    localStorage.setItem(
      `lesson-${id}-completed`,
      "true"
    );

    localStorage.setItem(
      `lesson-${id}-score`,
      finalScore.toString()
    );
  }

  function previousWord() {
    if (currentWord > 0) {
      setCurrentWord((prev) => prev - 1);
    }
  }

  function nextWord() {
    if (currentWord < lesson.words.length - 1) {
      setCurrentWord((prev) => prev + 1);
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
            className="rounded-xl bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20"
          >
            ← الدروس
          </Link>

          <div className="text-right">
            <p className="text-xs text-indigo-300">
              {lesson.unit}
            </p>

            <h1 className="font-bold">
              {lesson.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8">

        {/* Hero */}
        <section className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl">
          <div className="mb-3 text-5xl">🇪🇸</div>

          <p className="mb-2 text-sm font-medium text-indigo-300">
            {lesson.unit}
          </p>

          <h2 className="mb-2 text-4xl font-black">
            {lesson.title}
          </h2>

          <p className="text-slate-300">
            {lesson.subtitle}
          </p>

          {completed && (
            <div className="mt-5 inline-flex rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-300">
              ✓ تم إكمال هذا الدرس
            </div>
          )}
        </section>

        {/* Vocabulary */}
        <section className="mb-10">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-indigo-300">
                المفردات
              </p>

              <h2 className="text-2xl font-bold">
                كلمات الدرس
              </h2>
            </div>

            <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
              {currentWord + 1} / {lesson.words.length}
            </span>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
            <div className="text-center">

              <button
                onClick={() => speak(word.spanish)}
                className="mb-5 text-5xl font-black text-indigo-300 transition hover:scale-105"
              >
                {word.spanish}
              </button>

              <p className="mb-2 text-lg text-slate-400">
                {word.pronunciation}
              </p>

              <p className="mb-6 text-2xl font-bold">
                {word.arabic}
              </p>

              <div className="rounded-2xl bg-black/20 p-5">
                <p className="mb-2 text-lg font-semibold">
                  {word.example}
                </p>

                <p className="text-slate-400">
                  {word.exampleArabic}
                </p>

                <button
                  onClick={() => speak(word.example)}
                  className="mt-4 rounded-xl bg-indigo-600 px-5 py-2 text-sm font-bold transition hover:bg-indigo-500"
                >
                  🔊 استمع للنطق
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                onClick={previousWord}
                disabled={currentWord === 0}
                className="rounded-xl bg-white/10 px-5 py-3 disabled:cursor-not-allowed disabled:opacity-30"
              >
                السابق
              </button>

              <div className="flex gap-1">
                {lesson.words.map(
                  (_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentWord(index)}
                      className={`h-2.5 w-2.5 rounded-full ${
                        index === currentWord
                          ? "bg-indigo-400"
                          : "bg-white/20"
                      }`}
                    />
                  )
                )}
              </div>

              <button
                onClick={nextWord}
                disabled={
                  currentWord === lesson.words.length - 1
                }
                className="rounded-xl bg-indigo-600 px-5 py-3 disabled:cursor-not-allowed disabled:opacity-30"
              >
                التالي
              </button>
            </div>
          </div>
        </section>

        {/* Quiz */}
        <section className="mb-10">
          <div className="mb-5">
            <p className="text-sm text-indigo-300">
              اختبر نفسك
            </p>

            <h2 className="text-2xl font-bold">
              اختبار الدرس
            </h2>
          </div>

          {!finished ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">

              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300">
                  السؤال {currentQuestion + 1} من{" "}
                  {lesson.questions.length}
                </span>

                <span className="text-sm text-slate-400">
                  النقاط: {score}
                </span>
              </div>

              <h3 className="mb-6 text-xl font-bold leading-relaxed">
                {question.question}
              </h3>

              <div className="space-y-3">
                {question.options.map(
                  (option: string) => {
                    const isSelected =
                      selectedAnswer === option;

                    const isCorrect =
                      option === question.answer;

                    let className =
                      "w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-right transition";

                    if (selectedAnswer) {
                      if (isCorrect) {
                        className +=
                          " border-green-500/50 bg-green-500/20 text-green-300";
                      } else if (isSelected) {
                        className +=
                          " border-red-500/50 bg-red-500/20 text-red-300";
                      } else {
                        className += " opacity-60";
                      }
                    } else {
                      className +=
                        " hover:bg-white/10 hover:border-indigo-400/50";
                    }

                    return (
                      <button
                        key={option}
                        onClick={() =>
                          checkAnswer(option)
                        }
                        disabled={!!selectedAnswer}
                        className={className}
                      >
                        {option}
                      </button>
                    );
                  }
                )}
              </div>

              {selectedAnswer && (
                <div className="mt-6">
                  <div
                    className={`rounded-2xl p-4 ${
                      selectedAnswer === question.answer
                        ? "bg-green-500/10 text-green-300"
                        : "bg-red-500/10 text-red-300"
                    }`}
                  >
                    {selectedAnswer === question.answer
                      ? "✓ إجابة صحيحة!"
                      : `✗ إجابة غير صحيحة. الإجابة الصحيحة هي: ${question.answer}`}
                  </div>

                  <button
                    onClick={nextQuestion}
                    className="mt-4 w-full rounded-2xl bg-indigo-600 px-6 py-4 font-bold transition hover:bg-indigo-500"
                  >
                    {currentQuestion <
                    lesson.questions.length - 1
                      ? "السؤال التالي →"
                      : "إنهاء الاختبار ✓"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Completion */
            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">

              <div className="mb-4 text-6xl">
                🎉
              </div>

              <h2 className="mb-3 text-3xl font-black">
                أحسنت!
              </h2>

              <p className="mb-6 text-slate-300">
                لقد أكملت درس "{lesson.title}"
              </p>

              <div className="mx-auto mb-6 max-w-xs rounded-2xl bg-black/20 p-5">
                <p className="text-sm text-slate-400">
                  نتيجتك
                </p>

                <p className="mt-2 text-4xl font-black text-green-300">
                  {score} / {lesson.questions.length}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">

                <Link
                  href="/lessons"
                  className="rounded-2xl bg-indigo-600 px-6 py-3 font-bold transition hover:bg-indigo-500"
                >
                  العودة للدروس
                </Link>

                <button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setSelectedAnswer(null);
                    setScore(0);
                    setFinished(false);
                  }}
                  className="rounded-2xl bg-white/10 px-6 py-3 font-bold transition hover:bg-white/20"
                >
                  إعادة الاختبار
                </button>

              </div>
            </div>
          )}
        </section>

      </div>
    </main>
  );
  }
