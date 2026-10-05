"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const units = [
  {
    number: 1,
    title: "¡Hola!",
    description: "التحيات والتعارف",
    lessons: [
      "التحيات الأساسية",
      "التعارف وتقديم النفس",
      "السؤال عن الحال",
      "المراجعة والتطبيق",
    ],
  },
  {
    number: 2,
    title: "Mi mundo",
    description: "العائلة والأصدقاء",
    lessons: [
      "أفراد العائلة",
      "وصف الأشخاص",
      "الملكية",
      "المراجعة والتطبيق",
    ],
  },
  {
    number: 3,
    title: "Mi día",
    description: "الحياة اليومية",
    lessons: [
      "روتيني اليومي",
      "الوقت والمواعيد",
      "أفعال الحياة اليومية",
      "المراجعة والتطبيق",
    ],
  },
];

export default function LessonsPage() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("completedLessons");

      if (saved) {
        setCompletedLessons(JSON.parse(saved));
      }
    } catch {
      setCompletedLessons([]);
    }
  }, []);

  const isLessonCompleted = (unitNumber: number, lessonIndex: number) => {
    const lessonId = `${unitNumber}-${lessonIndex + 1}`;
    return completedLessons.includes(lessonId);
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#0b1020] px-4 py-8 text-white"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <Link
            href="/espanol-plus/"
            className="mb-6 inline-block text-sm text-white/60 transition hover:text-white"
          >
            ← العودة إلى الرئيسية
          </Link>

          <h1 className="mb-3 text-4xl font-bold">
            دروس الإسبانية 🇪🇸
          </h1>

          <p className="text-white/60">
            تعلم الإسبانية خطوة بخطوة بطريقة سهلة وممتعة
          </p>
        </div>

        {/* Units */}
        <div className="space-y-6">
          {units.map((unit, unitIndex) => {
            /*
             * الوحدة الأولى مفتوحة.
             * الوحدات التالية يمكن فتحها لاحقًا حسب تقدم المستخدم.
             */
            const isLocked = unitIndex > 0;

            return (
              <section
                key={unit.number}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl"
              >
                {/* Unit Header */}
                <div className="border-b border-white/10 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="mb-2 text-sm font-medium text-white/50">
                        الوحدة {unit.number}
                      </div>

                      <h2 className="text-2xl font-bold">
                        {unit.title}
                      </h2>

                      <p className="mt-2 text-sm text-white/60">
                        {unit.description}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl">
                      {isLocked ? "🔒" : "📚"}
                    </div>
                  </div>
                </div>

                {/* Lessons */}
                <div className="divide-y divide-white/10">
                  {unit.lessons.map((lesson, index) => {
                    /*
                     * في الوحدة الحالية:
                     * أول 3 دروس مفتوحة.
                     * الدرس الرابع مقفول حتى إكمال التقدم المطلوب.
                     */
                    const lessonLocked =
                      isLocked || (unitIndex === 0 && index > 2);

                    const lessonId = `${unit.number}-${index + 1}`;
                    const completed = isLessonCompleted(
                      unit.number,
                      index
                    );

                    return (
                      <Link
                        key={lessonId}
                        href={
                          lessonLocked
                            ? "#"
                            : `/espanol-plus/lessons/${lessonId}/`
                        }
                        onClick={(event) => {
                          if (lessonLocked) {
                            event.preventDefault();
                          }
                        }}
                        className={`flex items-center gap-4 p-5 transition ${
                          lessonLocked
                            ? "cursor-not-allowed opacity-40"
                            : "hover:bg-white/[0.05]"
                        }`}
                      >
                        {/* Lesson Number */}
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                            completed
                              ? "bg-green-500/20 text-green-400"
                              : lessonLocked
                              ? "bg-white/5 text-white/30"
                              : "bg-white/10 text-white"
                          }`}
                        >
                          {completed ? "✓" : index + 1}
                        </div>

                        {/* Lesson Info */}
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold">
                            {lesson}
                          </h3>

                          <p className="mt-1 text-xs text-white/40">
                            الدرس {index + 1}
                          </p>
                        </div>

                        {/* Status */}
                        <div className="text-lg">
                          {completed
                            ? "✓"
                            : lessonLocked
                            ? "🔒"
                            : "→"}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
          <p className="text-sm text-white/50">
            أكمل الدروس بالترتيب لفتح المزيد من المحتوى 🚀
          </p>
        </div>
      </div>
    </main>
  );
}
