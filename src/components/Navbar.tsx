import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "О компании" },
  { href: "#routes", label: "Маршруты" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-semibold tracking-widest uppercase">
          <span className="text-foreground">Транс</span>
          <span style={{ color: "hsl(var(--accent))" }}>Логистик</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium font-body text-white transition-opacity hover:opacity-90"
          style={{ background: "hsl(var(--accent))" }}
        >
          Рассчитать стоимость
        </a>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm font-medium text-foreground tracking-wide py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium font-body text-white mt-2"
            style={{ background: "hsl(var(--accent))" }}
          >
            Рассчитать стоимость
          </a>
        </div>
      )}
    </header>
  );
}
