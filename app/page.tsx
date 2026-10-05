import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16">
        <div className="w-full text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
            🇪🇸 Español Plus
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            تعلّم الإسبانية
            <span className="mt-2 block text-white/50">
              بطريقة أسهل وأمتع
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            منصة بسيطة وتفاعلية تساعدك على تعلم الإسبانية من خلال
            الدروس والمفردات والقواعد والتمارين.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard/"
              className="rounded-2xl bg-white px-7 py-4 font-semibold text-[#0b1020] transition hover:scale-[1.02]"
            >
              ابدأ التعلم
            </Link>

            <Link
              href="/lessons/"
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10"
            >
              استكشف الدروس
            </Link>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            <Feature
              icon="📚"
              title="دروس منظمة"
              description="تعلم خطوة بخطوة من المستوى المناسب لك."
            />

            <Feature
              icon="🧠"
              title="تدريب تفاعلي"
              description="اختبر فهمك من خلال تمارين قصيرة ومتنوعة."
            />

            <Feature
              icon="📈"
              title="تابع تقدمك"
              description="راقب تقدمك وواصل من حيث توقفت."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-right">
      <div className="mb-4 text-3xl">{icon}</div>

      <h2 className="text-lg font-bold">{title}</h2>

      <p className="mt-2 text-sm leading-7 text-white/50">
        {description}
      </p>
    </div>
  );
}
