import Link from "next/link";

const footerLinks = [
  {
    label: "الرئيسية",
    href: "/",
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
    label: "القواعد",
    href: "/grammar/",
  },
  {
    label: "التدريب",
    href: "/practice/",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080c18]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-lg font-bold"
            >
              Español Plus 🇪🇸
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/40">
              تعلم الإسبانية خطوة بخطوة، من الأساسيات إلى المستوى المتقدم.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Español Plus
        </div>
      </div>
    </footer>
  );
}
