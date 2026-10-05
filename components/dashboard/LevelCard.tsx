import Link from "next/link";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";

type LevelCardProps = {
  level: string;
  title: string;
  description: string;
  progress: number;
  lessonsCompleted: number;
  totalLessons: number;
  href: string;
  locked?: boolean;
};

export default function LevelCard({
  level,
  title,
  description,
  progress,
  lessonsCompleted,
  totalLessons,
  href,
  locked = false,
}: LevelCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge variant={locked ? "default" : "success"}>
              المستوى {level}
            </Badge>

            <h3 className="mt-4 text-xl font-bold">{title}</h3>

            <p className="mt-2 text-sm leading-7 text-white/50">
              {description}
            </p>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold">
            {locked ? "🔒" : level}
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="text-white/50">التقدم</span>
            <span className="font-semibold text-white/70">
              {progress}%
            </span>
          </div>

          <ProgressBar value={progress} />
        </div>

        <div className="mt-4 text-xs text-white/40">
          {lessonsCompleted} من {totalLessons} درس مكتمل
        </div>

        <div className="mt-6">
          {locked ? (
            <div className="rounded-2xl bg-white/5 px-4 py-3 text-center text-sm text-white/30">
              أكمل المستوى السابق لفتح هذا المستوى
            </div>
          ) : (
            <Link
              href={href}
              className="block rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#0b1020] transition hover:bg-white/90"
            >
              متابعة التعلم
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
