"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Navbar from "../../../components/navigation/Navbar";
import MobileNav from "../../../components/navigation/MobileNav";
import Footer from "../../../components/navigation/Footer";

import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";
import VocabularyCard from "../../../components/lessons/VocabularyCard";

import type { Lesson } from "../../../data/lessons";
import { vocabulary } from "../../../data/vocabulary";

type LessonClientProps = {
  lesson: Lesson;
};

export default function LessonClient({
  lesson,
}: LessonClientProps) {
  const [completed, setCompleted] = useState(false);

  const lessonVocabulary = useMemo(
    () =>
      vocabulary.filter(
        (item) => item.lessonId === lesson.id
      ),
    [lesson.id]
  );

  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Back */}
        <Link
          href="/lessons/"
          className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
        >
          <span>→</span>
          العودة إلى الدروس
        </Link>

        {/* Header */}
        <div className="mt-8">
          <Badge variant={completed ? "success" : "default"}>
            {completed ? "تم إكمال الدرس ✓" : "درس جديد"}
          </Badge>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {lesson.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-white/50">
            {lesson.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/40">
            <span className="rounded-full bg-white/5 px-3 py-2">
              📚 الدرس {lesson.number}
            </span>

            <span className="rounded-full bg-white/5 px-3 py-2">
              ⏱️ {lesson.durationMinutes} دقيقة
            </span>

            <span className="rounded-full bg-white/5 px-3 py-2">
              🇪🇸 A1
            </span>

            <span className="rounded-full bg-white/5 px-3 py-2">
              🧠 {lessonVocabulary.length} مفردات
            </span>
          </div>
        </div>

        {/* Progress */}
        <Card className="mt-8 p-5 sm:p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-white/40">
              تقدم الدرس
            </span>

            <span className="text-sm font-semibold">
              {completed ? "100%" : "0%"}
            </span>
          </div>

          <ProgressBar value={completed ? 100 : 0} />
        </Card>

        {/* Introduction */}
        <Card className="mt-6 p-6 sm:p-8">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 text-4xl">
              🇪🇸
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              {lesson.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/50">
              ابدأ بتعلم الكلمات والتعبيرات الأساسية في هذا الدرس.
              يمكنك الضغط على زر الصوت لسماع النطق الإسباني.
            </p>
          </div>
        </Card>

        {/* Vocabulary */}
        <section className="mt-8">
          <div className="mb-5">
            <p className="text-sm text-white/40">
              مفردات الدرس
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              الكلمات الأساسية
            </h2>
          </div>

          {lessonVocabulary.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {lessonVocabulary.map((item) => (
                <VocabularyCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          ) : (
            <Card className="p-6 text-center">
              <p className="text-sm text-white/40">
                لا توجد مفردات مضافة لهذا الدرس حتى الآن.
              </p>
            </Card>
          )}
        </section>

        {/* Complete */}
        <Card className="mt-8 p-6 sm:p-8">
          <div className="text-center">
            <h2 className="text-xl font-bold">
              هل انتهيت من الدرس؟
            </h2>

            <p className="mt-2 text-sm leading-7 text-white/40">
              بعد دراسة المفردات ومراجعة الأمثلة، يمكنك تسجيل
              الدرس كمكتمل.
            </p>

            <div className="mt-6">
              <Button
                onClick={() => setCompleted(true)}
                disabled={completed}
                className="w-full sm:w-auto"
              >
                {completed
                  ? "تم إكمال الدرس ✓"
                  : "إكمال الدرس"}
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <Footer />

      <MobileNav />
    </main>
  );
}
