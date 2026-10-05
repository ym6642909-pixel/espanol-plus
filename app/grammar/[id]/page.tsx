import GrammarLessonClient from "../GrammarLessonClient";

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];
}

export const dynamicParams = false;

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  return <GrammarLessonClient id={params.id} />;
}
