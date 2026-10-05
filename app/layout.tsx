import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Español Plus",
  description: "تعلم اللغة الإسبانية بطريقة سهلة وممتعة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
