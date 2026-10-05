"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "الرئيسية",
    href: "/",
    icon: "🏠",
  },
  {
    label: "لوحة التحكم",
    href: "/dashboard/",
    icon: "📊",
  },
  {
    label: "الدروس",
    href: "/lessons/",
    icon: "📚",
  },
  {
    label: "المفردات",
    href: "/vocabulary/",
    icon: "🧠",
  },
  {
    label: "التدريب",
    href: "/practice/",
    icon: "✏️",
  },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl text-[#0b1020] shadow-2xl"
        aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
        aria-expanded={isOpen}
      >
        {isOpen ? "×" : "☰"}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            aria-label="إغلاق القائمة"
          />

          <nav className="fixed bottom-20 left-4 right-4 z-50 overflow-hidden rounded-3xl border border-white/10 bg-[#111827] p-2 shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 rounded-2xl px-4 py-4 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                <span className="text-xl">{item.icon}</span>

                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
