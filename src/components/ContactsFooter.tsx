import { useRef, useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "О компании" },
  { href: "#routes", label: "Маршруты" },
  { href: "#contacts", label: "Контакты" },
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

export default function ContactsFooter() {
  const contactsAnim = useInView();

  return (
    <>
      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-foreground">
        <div ref={contactsAnim.ref} className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div
              style={{
                opacity: contactsAnim.inView ? 1 : 0,
                transform: contactsAnim.inView ? "none" : "translateY(24px)",
                transition: "all 0.6s ease 0.2s",
              }}
            >
              <div className="bg-white/5 border border-white/10 p-8">
                <h3 className="font-display text-xl font-semibold uppercase text-white mb-6">
                  Рассчитать стоимость
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="font-body text-xs text-white/50 uppercase tracking-wider mb-1.5 block">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      placeholder="Иван Петров"
                      className="w-full bg-white/5 border border-white/15 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-white/50 uppercase tracking-wider mb-1.5 block">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-white/5 border border-white/15 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs text-white/50 uppercase tracking-wider mb-1.5 block">
                        Откуда
                      </label>
                      <input
                        type="text"
                        placeholder="Город отправки"
                        className="w-full bg-white/5 border border-white/15 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs text-white/50 uppercase tracking-wider mb-1.5 block">
                        Куда
                      </label>
                      <input
                        type="text"
                        placeholder="Город доставки"
                        className="w-full bg-white/5 border border-white/15 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs text-white/50 uppercase tracking-wider mb-1.5 block">
                      Описание груза
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Вес, габариты, особые условия..."
                      className="w-full bg-white/5 border border-white/15 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>
                  <button
                    className="w-full py-4 font-body text-sm font-semibold text-white uppercase tracking-wider transition-opacity hover:opacity-90"
                    style={{ background: "hsl(var(--accent))" }}
                  >
                    Отправить заявку
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                opacity: contactsAnim.inView ? 1 : 0,
                transform: contactsAnim.inView ? "none" : "translateY(24px)",
                transition: "all 0.6s ease",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: "hsl(var(--accent))" }} />
                <span
                  className="font-body text-xs font-medium uppercase tracking-[0.2em]"
                  style={{ color: "hsl(var(--accent))" }}
                >
                  Связаться с нами
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-6">
                Контакты
              </h2>
              <p className="font-body text-base text-white/60 leading-relaxed mb-10">
                Готовы ответить на любые вопросы и рассчитать стоимость перевозки для вашего груза.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }}>
                    <Icon name="Phone" size={20} />
                  </div>
                  <div>
                    <div className="font-body text-xs text-white/40 uppercase tracking-wider mb-0.5">Телефоны</div>
                    {[
                      "+7 (912) 468-51-41",
                      "+7 (912) 888-43-00",
                      "+7 (912) 888-73-00",
                      "+7 (912) 888-00-43",
                    ].map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\D/g, "")}`} className="block font-body text-base font-medium text-white hover:opacity-80 transition-opacity">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }}>
                    <Icon name="Mail" size={20} />
                  </div>
                  <div>
                    <div className="font-body text-xs text-white/40 uppercase tracking-wider mb-0.5">Email</div>
                    <a href="mailto:yulmitrans@mail.ru" className="font-body text-base font-medium text-white hover:opacity-80 transition-opacity">
                      yulmitrans@mail.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }}>
                    <Icon name="Send" size={20} />
                  </div>
                  <div>
                    <div className="font-body text-xs text-white/40 uppercase tracking-wider mb-0.5">Telegram</div>
                    <a href="https://t.me/Yeezy18" target="_blank" rel="noopener noreferrer" className="font-body text-base font-medium text-white hover:opacity-80 transition-opacity">
                      @Yeezy18
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-semibold tracking-widest uppercase text-white">
            Юлми<span style={{ color: "hsl(var(--accent))" }}>транс</span>
          </span>
          <span className="font-body text-xs text-white/30">
            © 2009–2026 Юлмитранс. Все права защищены.
          </span>
          <div className="flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-xs text-white/40 hover:text-white/70 transition-colors uppercase tracking-wider"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}