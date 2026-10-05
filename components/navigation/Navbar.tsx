import Link from "next/link";

const navItems = [
  {
    label: "الرئيسية",
    href: "/",
  },
  {
    label: "لوحة التحكم",
    href: "/dashboard/",
  },
  {
    label: "الدروس",
    href: "/lessons/",
  },
  {
    label: "المفردات",
    href: "/vocabulary/",
  },
  {
    label: "التدريب",
    href: "/practice/",
  },
];

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-[#0b1020]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-lg font-bold tracking-tight"
        >
          Español Plus 🇪🇸
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/dashboard/"
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0b1020] transition hover:bg-white/90"
        >
          ابدأ
        </Link>
      </div>
    </header>
  );
} 
