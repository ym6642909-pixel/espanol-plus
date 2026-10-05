type ProgressBarProps = {
  value: number;
  max?: number;
  className?: string;
};

export default function ProgressBar({
  value,
  max = 100,
  className = "",
}: ProgressBarProps) {
  const safeMax = max > 0 ? max : 100;
  const percentage = Math.min(
    100,
    Math.max(0, (value / safeMax) * 100)
  );

  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-white/10 ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={safeMax}
    >
      <div
        className="h-full rounded-full bg-white transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
