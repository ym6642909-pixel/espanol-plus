"use client";

import { useState } from "react";

import type { VocabularyItem } from "../../data/vocabulary";

type VocabularyCardProps = {
  item: VocabularyItem;
};

export default function VocabularyCard({
  item,
}: VocabularyCardProps) {
  const [showExample, setShowExample] = useState(false);

  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.06] sm:p-6">
      {/* Word */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p
            className="text-2xl font-bold tracking-tight"
            dir="ltr"
          >
            {item.spanish}
          </p>

          <p className="mt-2 text-base font-medium text-white/70">
            {item.arabic}
          </p>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-lg transition hover:bg-white/10"
          aria-label={`نطق كلمة ${item.spanish}`}
          title="استمع للنطق"
          onClick={() => {
            if (
              typeof window === "undefined" ||
              !("speechSynthesis" in window)
            ) {
              return;
            }

            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(
              item.spanish
            );

            utterance.lang = "es-ES";
            utterance.rate = 0.85;
            utterance.pitch = 1;

            window.speechSynthesis.speak(utterance);
          }}
        >
          🔊
        </button>
      </div>

      {/* Pronunciation */}
      <div className="mt-5 rounded-2xl bg-white/[0.03] p-4">
        <p className="text-xs text-white/30">
          النطق التقريبي
        </p>

        <p
          className="mt-1 text-sm font-medium text-white/70"
          dir="rtl"
        >
          {item.pronunciation}
        </p>
      </div>

      {/* Example Toggle */}
      <button
        type="button"
        onClick={() => setShowExample((current) => !current)}
        className="mt-4 w-full rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
        aria-expanded={showExample}
      >
        {showExample ? "إخفاء المثال ↑" : "عرض مثال ↓"}
      </button>

      {/* Example */}
      {showExample && (
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p
            className="text-sm font-semibold leading-7"
            dir="ltr"
          >
            {item.exampleSpanish}
          </p>

          <p className="mt-2 text-sm leading-7 text-white/50">
            {item.exampleArabic}
          </p>
        </div>
      )}
    </article>
  );
            }
