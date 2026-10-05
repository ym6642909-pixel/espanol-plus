import Card from "../ui/Card";

type StreakCardProps = {
  days: number;
  bestStreak: number;
};

export default function StreakCard({
  days,
  bestStreak,
}: StreakCardProps) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/50">
            سلسلة التعلم
          </p>

          <p className="mt-2 text-3xl font-bold">
            {days}
            <span className="mr-2 text-sm font-medium text-white/40">
              {days === 1 ? "يوم" : "أيام"}
            </span>
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl">
          🔥
        </div>
      </div>

      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-xs text-white/40">
          أفضل سلسلة
        </p>

        <p className="mt-1 text-sm font-semibold text-white/70">
          {bestStreak} {bestStreak === 1 ? "يوم" : "أيام"}
        </p>
      </div>
    </Card>
  );
}
