import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";

type DailyGoalProps = {
  completed: number;
  target: number;
};

export default function DailyGoal({
  completed,
  target,
}: DailyGoalProps) {
  const safeTarget = Math.max(target, 1);
  const safeCompleted = Math.max(0, completed);

  const progress = Math.min(
    100,
    Math.max(0, (safeCompleted / safeTarget) * 100)
  );

  const isComplete = safeCompleted >= safeTarget;

  return (
    <Card className="p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/50">
            الهدف اليومي
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {isComplete
              ? "أحسنت! 🎉"
              : "استمر في التعلم 🚀"}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl">
          🎯
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-white/40">
            التقدم اليوم
          </span>

          <span className="font-semibold text-white/70">
            {safeCompleted} / {safeTarget}
          </span>
        </div>

        <ProgressBar
          value={safeCompleted}
          max={safeTarget}
        />
      </div>

      <p className="mt-4 text-xs leading-6 text-white/40">
        {isComplete
          ? "لقد حققت هدفك اليومي. يمكنك الاستمرار للحصول على مزيد من XP."
          : `أكمل ${safeTarget - safeCompleted} ${
              safeTarget - safeCompleted === 1 ? "مهمة" : "مهام"
            } إضافية لتحقيق هدفك اليوم.`}
      </p>
    </Card>
  );
} 
