"use client";

import { useState } from "react";
import Link from "next/link";

import Navbar from "../../../components/navigation/Navbar";
import MobileNav from "../../../components/navigation/MobileNav";
import Footer from "../../../components/navigation/Footer";

import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";

import type { Lesson } from "../../../data/lessons";

type LessonClientProps = {
  lesson: Lesson;
};

export default function LessonClient({
  lesson,
}: LessonClientProps) {
  const [completed, setCompleted] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Back */}
        <Link
          href="/lessons/"
          className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
        >
          <span>→</span>
          العودة إلى الدروس
        </Link>

        {/* Lesson Header */}
        <div className="mt-8">
          <Badge variant={completed ? "success" : "default"}>
            {completed ? "تم إكمال الدرس ✓" : "درس جديد"}
          </Badge>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {lesson.title}
          </h1>

          <p className="mt-4 text-base leading-8 text-white/50">
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
          </div>
        </div>

        {/* Lesson Progress */}
        <Card className="mt-8 p-5 sm:p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-white/40">
              تقدم الدرس
            </span>

            <span className="text-sm font-semibold">
              {completed ? "100%" : "0%"}
            </span>
          </div>

          <ProgressBar
            value={completed ? 100 : 0}
          />
        </Card>

        {/* Lesson Content */}
        <Card className="mt-6 p-6 sm:p-8">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 text-4xl">
              🇪🇸
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              {lesson.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/50">
              هذا هو محتوى الدرس الأساسي. في الخطوات القادمة
              سنضيف المفردات والشرح والأمثلة والتمارين التفاعلية
              لكل درس.
            </p>
          </div>

          {/* Temporary Lesson Structure */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <div className="text-2xl">📖</div>
              <h3 className="mt-3 font-semibold">
                الشرح
              </h3>
              <p className="mt-2 text-xs leading-6 text-white/40">
                شرح مبسط للدرس.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <div className="text-2xl">🧠</div>
              <h3 className="mt-3 font-semibold">
                المفردات
              </h3>
              <p className="mt-2 text-xs leading-6 text-white/40">
                أهم الكلمات والتعبيرات.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <div className="text-2xl">✏️</div>
              <h3 className="mt-3 font-semibold">
                التدريب
              </h3>
              <p className="mt-2 text-xs leading-6 text-white/40">
                اختبر فهمك من خلال التمارين.
              </p>
            </div>
          </div>

          {/* Complete Button */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <Button
              onClick={() => setCompleted(true)}
              className="w-full"
            >
              {completed
                ? "تم إكمال الدرس ✓"
                : "إكمال الدرس"}
            </Button>
          </div>
        </Card>
      </section>

      <Footer />

      <MobileNav />
    </main>
  );
}
