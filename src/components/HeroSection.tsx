import { useRef, useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/19ebe227-2f43-438f-9d5e-19de3e97c4b4/files/cf74ac5c-7ab8-48b0-9f33-2fca7efdd3eb.jpg";

const stats = [
  { value: "15+", label: "лет на рынке" },
  { value: "50 000+", label: "доставок в год" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function HeroSection() {
  const statsAnim = useInView();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Грузоперевозки"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "hsl(var(--accent))" }} />
              <span
                className="font-body text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: "hsl(var(--accent))" }}
              >
                Грузоперевозки по России
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-none uppercase mb-6 max-w-3xl">
              Доставляем<br />
              <span style={{ color: "hsl(var(--accent))" }}>точно в срок</span>
            </h1>
            <p className="font-body text-lg text-white/70 max-w-xl leading-relaxed mb-10">
              Надёжные грузоперевозки по всей России и СНГ. Более 15 лет опыта, собственный автопарк и гарантия сохранности вашего груза.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-body text-sm font-semibold text-white uppercase tracking-wider transition-opacity hover:opacity-90"
                style={{ background: "hsl(var(--accent))" }}
              >
                Отправить заявку
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-body text-sm font-semibold text-white uppercase tracking-wider border border-white/40 hover:border-white/80 transition-colors"
              >
                Наши услуги
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-white/30 animate-pulse" />
          <span className="font-body text-xs text-white/50 tracking-widest">SCROLL</span>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsAnim.ref} className="border-b border-border bg-foreground py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="text-center"
                style={{
                  opacity: statsAnim.inView ? 1 : 0,
                  transform: statsAnim.inView ? "none" : "translateY(20px)",
                  transition: `all 0.6s ease ${i * 0.1}s`,
                }}
              >
                <div
                  className="font-display text-4xl md:text-5xl font-bold mb-1"
                  style={{ color: "hsl(var(--accent))" }}
                >
                  {s.value}
                </div>
                <div className="font-body text-sm text-white/60 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}