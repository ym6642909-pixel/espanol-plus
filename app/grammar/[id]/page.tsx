import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "../../../components/navigation/Navbar";
import MobileNav from "../../../components/navigation/MobileNav";
import Footer from "../../../components/navigation/Footer";
import Badge from "../../../components/ui/Badge";
import Card from "../../../components/ui/Card";
import { grammar } from "../../../data/grammar";

type GrammarPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return grammar.map((item) => ({
    id: item.id,
  }));
}

export default async function GrammarDetailPage({
  params,
}: GrammarPageProps) {
  const { id } = await params;
  const item = grammar.find((entry) => entry.id === id);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href={`/lessons/${item.lessonId}/`}
          className="text-sm text-white/50 hover:text-white"
        >
          ← العودة إلى الدرس المرتبط
        </Link>

        <div className="mt-8">
          <Badge variant="success">قواعد الإسبانية</Badge>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            {item.title}
          </h1>
          <p className="mt-4 text-sm leading-8 text-white/60 sm:text-base">
            {item.explanation}
          </p>
        </div>

        <Card className="mt-8 p-5 sm:p-7">
          <h2 className="text-xl font-bold">أمثلة توضيحية</h2>

          <div className="mt-5 space-y-3">
            {item.examples.map((example, index) => (
              <div
                key={`${item.id}-example-${index}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="text-base font-semibold" dir="ltr">
                  {example.spanish}
                </p>
                <p className="mt-2 text-sm text-white/60" dir="rtl">
                  {example.arabic}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Link
          href={`/lessons/${item.lessonId}/`}
          className="mt-8 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0b1020]"
        >
          متابعة الدرس
        </Link>
      </section>

      <Footer />
      <MobileNav />
    </main>
  );
}