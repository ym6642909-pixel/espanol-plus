import { notFound } from "next/navigation";

import { lessons } from "../../../data/lessons";
import LessonClient from "./LessonClient";

type LessonPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return lessons.map((lesson) => ({
    id: lesson.id,
  }));
}

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const { id } = await params;

  const lesson = lessons.find(
    (item) => item.id === id
  );

  if (!lesson) {
    notFound();
  }

  return <LessonClient lesson={lesson} />;
}
