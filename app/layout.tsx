import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Español+ | تعلم الإسبانية",
  description:
    "منصة تفاعلية لتعلم اللغة الإسبانية من الصفر حتى المستوى المتقدم.",
  keywords: [
    "تعلم الإسبانية",
    "الإسبانية",
    "Spanish",
    "Español",
    "تعلم اللغة الإسبانية"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
