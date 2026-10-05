import Navbar from "../../components/navigation/Navbar";
import MobileNav from "../../components/navigation/MobileNav";
import Footer from "../../components/navigation/Footer";

import LevelCard from "../../components/dashboard/LevelCard";
import XPCard from "../../components/dashboard/XPCard";
import StreakCard from "../../components/dashboard/StreakCard";
import DailyGoal from "../../components/dashboard/DailyGoal";

import { levels } from "../../data/levels";
import { units } from "../../data/units";
import { lessons } from "../../data/lessons";

export default function DashboardPage() {
  const completedLessons = 0;

  const currentLevel = "A1";

  const currentLevelData = levels.find(
    (level) => level.id === currentLevel
  );

  const currentLevelUnits = units.filter(
    (unit) => unit.levelId === currentLevel
  );

  const currentLevelLessons = lessons.filter((lesson) =>
    currentLevelUnits.some((unit) => unit.id === lesson.unitId)
  );

  const progress =
    currentLevelLessons.length > 0
      ? Math.round(
          (completedLessons / currentLevelLessons.length) * 100
        )
      : 0;

  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-white/40">
            ¡Hola! 👋
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            لوحة التحكم
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            تابع رحلتك في تعلم الإسبانية وواصل التقدم خطوة بخطوة.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <XPCard xp={0} nextLevelXP={1000} />

          <StreakCard
            days={0}
            bestStreak={0}
          />

          <DailyGoal
            completed={0}
            target={3}
          />
        </div>

        {/* Current Level */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-white/40">
                مستواك الحالي
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                {currentLevelData?.name ?? currentLevel}
              </h2>
            </div>

            <span className="text-sm text-white/40">
              {completedLessons} / {currentLevelLessons.length} درس
            </span>
          </div>

          {currentLevelData && (
            <LevelCard
              level={currentLevelData.name}
              title={currentLevelData.title}
              description={currentLevelData.description}
              progress={progress}
              lessonsCompleted={completedLessons}
              totalLessons={currentLevelLessons.length}
              href="/lessons/"
            />
          )}
        </section>

        {/* Units */}
        <section className="mt-10">
          <div className="mb-5">
            <p className="text-sm text-white/40">
              محتوى المستوى
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              وحدات A1
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {currentLevelUnits.map((unit) => {
              const unitLessons = lessons.filter(
                (lesson) => lesson.unitId === unit.id
              );

              return (
                <div
                  key={unit.id}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-medium text-white/40">
                        الوحدة {unit.number}
                      </span>

                      <h3 className="mt-2 text-lg font-bold">
                        {unit.title}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sm font-bold">
                      {unit.number}
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {unit.description}
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <span className="text-xs text-white/40">
                      {unitLessons.length} دروس
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>

      <Footer />

      <MobileNav />
    </main>
  );
          }
