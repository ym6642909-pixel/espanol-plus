import LessonClient from "./LessonClient";

export function generateStaticParams() {
  return [
    { id: "1-1" },
    { id: "1-2" },
    { id: "1-3" },
    { id: "1-4" },
    { id: "2-1" },
    { id: "2-2" },
    { id: "2-3" },
    { id: "2-4" },
  ];
}

export const dynamicParams = false;

export default function LessonPage({
  params,
}: {
  params: { id: string };
}) {
  return <LessonClient id={params.id} />;
}
