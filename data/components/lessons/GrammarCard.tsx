import type { GrammarItem } from "../../data/grammar";

type GrammarCardProps = {
  item: GrammarItem;
};

export default function GrammarCard({
  item,
}: GrammarCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl">
          📖
        </div>

        <div className="min-w-0">
          <p className="text-xs text-white/40">
            القاعدة
          </p>

          <h3 className="mt-1 text-lg font-bold">
            {item.title}
          </h3>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-white/[0.03] p-4">
        <p className="text-sm leading-8 text-white/60">
          {item.explanation}
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {item.examples.map((example, index) => (
          <div
            key={`${item.id}-example-${index}`}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
          >
            <p
              className="text-sm font-semibold leading-7"
              dir="ltr"
            >
              {example.spanish}
            </p>

            <p className="mt-1 text-sm leading-7 text-white/40">
              {example.arabic}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
