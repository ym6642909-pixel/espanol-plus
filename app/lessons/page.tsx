import Link from "next/link";

import Navbar from "../../components/navigation/Navbar";
import MobileNav from "../../components/navigation/MobileNav";
import Footer from "../../components/navigation/Footer";

import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

import { units } from "../../data/units";
import { lessons } from "../../data/lessons";

export default function LessonsPage() {
  const currentLevel = "A1";

  const levelUnits = units.filter(
    (unit) => unit.levelId === currentLevel
  );

  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Page Header */}
        <div className="mb-10">
          <Badge variant="success">المستوى A1</Badge>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            دروس الإسبانية
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            ابدأ من الوحدة الأولى وتقدم خطوة بخطوة حتى إكمال مستوى A1.
          </p>
        </div>

        {/* Units */}
        <div className="space-y-6">
          {levelUnits.map((unit) => {
            const unitLessons = lessons.filter(
              (lesson) => lesson.unitId === unit.id
            );

            return (
              <Card key={unit.id} className="overflow-hidden">
                {/* Unit Header */}
                <div className="border-b border-white/10 p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold">
                      {unit.number}
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium text-white/40">
                        الوحدة {unit.number}
                      </p>

                      <h2 className="mt-1 text-xl font-bold">
                        {unit.title}
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-white/40">
                        {unit.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lessons */}
                <div className="divide-y divide-white/10">
                  {unitLessons.map((lesson, index) => (
                    <Link
                      key={lesson.id}
                      href={`/lessons/${lesson.id}/`}
                      className="group flex items-center gap-4 p-4 transition hover:bg-white/[0.04] sm:p-5"
                    >
                      {/* Lesson Number */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-sm font-semibold text-white/60 transition group-hover:bg-white/10 group-hover:text-white">
                        {index + 1}
                      </div>

                      {/* Lesson Info */}
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-semibold sm:text-base">
                          {lesson.title}
                        </h3>

                        <p className="mt-1 truncate text-xs text-white/40 sm:text-sm">
                          {lesson.description}
                        </p>
                      </div>

                      {/* Duration */}
                      <div className="hidden shrink-0 text-xs text-white/30 sm:block">
                        {lesson.durationMinutes} دقيقة
                      </div>

                      {/* Arrow */}
                      <div className="shrink-0 text-white/30 transition group-hover:translate-x-[-2px] group-hover:text-white">
                        ←
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <Footer />

      <MobileNav />
    </main>
  );
}
