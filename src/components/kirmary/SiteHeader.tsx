import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { LogoMark } from "./LogoMark";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-950/95 shadow-lg shadow-navy-950/20 backdrop-blur"
          : "bg-navy-950/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          onClick={close}
          className="flex items-center gap-3 text-white"
          aria-label="KIRMARY International L.L.C. home"
        >
          {/* تم مسح النص وتم إبقاء اللوجو فقط */}
          <LogoMark className="h-10 w-10" />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-200 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-navy-950 md:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 lg:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-sm px-3 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-steel-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            
          </div>
        </nav>
      )}
    </header>
  );
}