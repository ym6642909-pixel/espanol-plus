import Card from "../ui/Card";

type XPCardProps = {
  xp: number;
  nextLevelXP: number;
};

export default function XPCard({
  xp,
  nextLevelXP,
}: XPCardProps) {
  const safeNextLevelXP = Math.max(nextLevelXP, 1);
  const progress = Math.min(
    100,
    Math.max(0, (xp / safeNextLevelXP) * 100)
  );

  return (
    <Card className="p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/50">نقاط الخبرة</p>

          <p className="mt-2 text-3xl font-bold">
            {xp.toLocaleString()}
            <span className="ml-1 text-sm font-medium text-white/40">
              XP
            </span>
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl">
          ⚡
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-white/40">
            المستوى التالي
          </span>

          <span className="text-white/50">
            {nextLevelXP.toLocaleString()} XP
          </span>
        </div>

        <div
          className="h-2 overflow-hidden rounded-full bg-white/10"
          aria-label={`التقدم نحو المستوى التالي ${Math.round(
            progress
          )}%`}
        >
          <div
            className="h-full rounded-full bg-white transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Card>
  );
              } 
