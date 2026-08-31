import { LogoMark } from "./LogoMark";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-9">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-white"
          aria-label="Back to top"
        >
          <LogoMark className="h-8 w-8" />
          <span className="font-display text-lg font-bold uppercase tracking-[0.08em]">
            Kirmary
          </span>
        </a>

        <nav className="flex items-center gap-7" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="max-w-xs text-xs leading-relaxed text-steel-500 md:max-w-none">
          © {new Date().getFullYear()} KIRMARY International L.L.C. All rights
          reserved. · 91 Linden Ave, Irvington Township, NJ 07111
        </p>
      </div>
    </footer>
  );
}
