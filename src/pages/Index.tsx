import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/19ebe227-2f43-438f-9d5e-19de3e97c4b4/files/cf74ac5c-7ab8-48b0-9f33-2fca7efdd3eb.jpg";
const ABOUT_IMG = "https://cdn.poehali.dev/projects/19ebe227-2f43-438f-9d5e-19de3e97c4b4/files/b5ac3c88-01ca-46b2-9089-dbc90495d0d6.jpg";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "О компании" },
  { href: "#routes", label: "Маршруты" },
  { href: "#contacts", label: "Контакты" },
];

const services = [
  {
    icon: "Truck",
    title: "Автомобильные перевозки",
    desc: "Доставка грузов по России и СНГ. Собственный автопарк — более 200 единиц техники различной грузоподъёмности.",
  },
  {
    icon: "Package",
    title: "Сборные грузы",
    desc: "Экономичная доставка небольших партий. Ваш груз едет вместе с другими — платите только за занятый объём.",
  },
  {
    icon: "Warehouse",
    title: "Складская логистика",
    desc: "Ответственное хранение на наших складах площадью более 12 000 м². Круглосуточная охрана и видеонаблюдение.",
  },
  {
    icon: "Shield",
    title: "Страхование грузов",
    desc: "Полное страховое покрытие на весь период перевозки. Ваш груз защищён от любых рисков.",
  },
  {
    icon: "Clock",
    title: "Срочная доставка",
    desc: "Экспресс-доставка в течение 24–48 часов по ключевым направлениям. Гарантируем соблюдение сроков.",
  },
  {
    icon: "BarChart2",
    title: "Онлайн-отслеживание",
    desc: "Следите за местоположением груза в реальном времени через личный кабинет или мобильное приложение.",
  },
];

const routes = [
  { from: "Москва", to: "Санкт-Петербург", days: "1 день", km: "700 км" },
  { from: "Москва", to: "Новосибирск", days: "4–5 дней", km: "3 300 км" },
  { from: "Москва", to: "Екатеринбург", days: "2 дня", km: "1 800 км" },
  { from: "Москва", to: "Краснодар", days: "2 дня", km: "1 350 км" },
  { from: "Санкт-Петербург", to: "Калининград", days: "1–2 дня", km: "1 260 км" },
  { from: "Новосибирск", to: "Владивосток", days: "6–7 дней", km: "5 800 км" },
];

const stats = [
  { value: "15+", label: "лет на рынке" },
  { value: "200+", label: "единиц техники" },
  { value: "50 000+", label: "доставок в год" },
  { value: "99%", label: "грузов в срок" },
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

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const servicesAnim = useInView();
  const statsAnim = useInView();
  const routesAnim = useInView();
  const aboutAnim = useInView();
  const contactsAnim = useInView();

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
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

      {/* SERVICES */}
      <section id="services" className="py-24 bg-background">
        <div ref={servicesAnim.ref} className="max-w-7xl mx-auto px-6">
          <div
            className="mb-14"
            style={{
              opacity: servicesAnim.inView ? 1 : 0,
              transform: servicesAnim.inView ? "none" : "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: "hsl(var(--accent))" }} />
              <span
                className="font-body text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: "hsl(var(--accent))" }}
              >
                Что мы делаем
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground">
              Наши услуги
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="bg-background p-8 group hover:bg-secondary transition-colors duration-200"
                style={{
                  opacity: servicesAnim.inView ? 1 : 0,
                  transform: servicesAnim.inView ? "none" : "translateY(24px)",
                  transition: `all 0.6s ease ${0.1 + i * 0.08}s`,
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-5"
                  style={{ color: "hsl(var(--accent))" }}
                >
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold uppercase mb-3 text-foreground">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-secondary overflow-hidden">
        <div ref={aboutAnim.ref} className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              style={{
                opacity: aboutAnim.inView ? 1 : 0,
                transform: aboutAnim.inView ? "none" : "translateX(-32px)",
                transition: "all 0.7s ease",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: "hsl(var(--accent))" }} />
                <span
                  className="font-body text-xs font-medium uppercase tracking-[0.2em]"
                  style={{ color: "hsl(var(--accent))" }}
                >
                  Кто мы
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground mb-6">
                О компании
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
                ТрансЛогистик — федеральный оператор грузоперевозок с 2009 года. Мы работаем на рынке транспортной логистики уже более 15 лет и за это время выстроили репутацию надёжного партнёра для сотен компаний по всей стране.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                Наш собственный автопарк включает более 200 единиц современной техники: от малотоннажных фургонов до большегрузных тягачей с рефрижераторами. Мы доставляем грузы точно в срок — и это не просто слова.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "MapPin", text: "Представительства в 28 городах" },
                  { icon: "Users", text: "Более 800 сотрудников" },
                  { icon: "Award", text: "ISO 9001 сертифицированы" },
                  { icon: "Headphones", text: "Поддержка 24/7" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div style={{ color: "hsl(var(--accent))", marginTop: 2 }}>
                      <Icon name={item.icon} size={16} />
                    </div>
                    <span className="font-body text-sm text-foreground leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative"
              style={{
                opacity: aboutAnim.inView ? 1 : 0,
                transform: aboutAnim.inView ? "none" : "translateX(32px)",
                transition: "all 0.7s ease 0.2s",
              }}
            >
              <img
                src={ABOUT_IMG}
                alt="О компании"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-4 -left-4 px-6 py-4 bg-foreground">
                <div className="font-display text-3xl font-bold text-white">15+</div>
                <div className="font-body text-xs text-white/60 uppercase tracking-wider">лет надёжной работы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section id="routes" className="py-24 bg-background">
        <div ref={routesAnim.ref} className="max-w-7xl mx-auto px-6">
          <div
            className="mb-14"
            style={{
              opacity: routesAnim.inView ? 1 : 0,
              transform: routesAnim.inView ? "none" : "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: "hsl(var(--accent))" }} />
              <span
                className="font-body text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: "hsl(var(--accent))" }}
              >
                Куда везём
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground">
              Популярные маршруты
            </h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {routes.map((r, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-5 group hover:bg-secondary px-4 -mx-4 transition-colors duration-150 cursor-pointer"
                style={{
                  opacity: routesAnim.inView ? 1 : 0,
                  transform: routesAnim.inView ? "none" : "translateX(-20px)",
                  transition: `all 0.5s ease ${i * 0.07}s`,
                }}
              >
                <div className="flex items-center gap-4 md:gap-10 flex-1">
                  <span className="font-display text-lg md:text-2xl font-semibold uppercase text-foreground min-w-[130px]">
                    {r.from}
                  </span>
                  <div className="flex-1 flex items-center gap-2 text-muted-foreground">
                    <div className="h-px flex-1 bg-border" />
                    <Icon name="ArrowRight" size={14} />
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <span className="font-display text-lg md:text-2xl font-semibold uppercase text-foreground min-w-[130px] text-right">
                    {r.to}
                  </span>
                </div>
                <div className="hidden md:flex items-center gap-10 ml-10">
                  <div className="text-right">
                    <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Расстояние</div>
                    <div className="font-display text-base font-semibold">{r.km}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Срок</div>
                    <div className="font-display text-base font-semibold" style={{ color: "hsl(var(--accent))" }}>
                      {r.days}
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "hsl(var(--accent))" }}>
                    <Icon name="ArrowUpRight" size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-sm text-muted-foreground mt-6">
            Работаем по всем направлениям России и СНГ — уточните маршрут у нашего менеджера.
          </p>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-foreground">
        <div ref={contactsAnim.ref} className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (800) 123-45-67", sub: "Бесплатно по России" },
                  { icon: "Mail", label: "Email", value: "info@translogistic.ru", sub: "Ответим в течение часа" },
                  { icon: "MapPin", label: "Главный офис", value: "Москва, ул. Транспортная, 1", sub: "Пн–Пт 9:00–18:00" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ color: "hsl(var(--accent))" }}
                    >
                      <Icon name={c.icon} size={20} />
                    </div>
                    <div>
                      <div className="font-body text-xs text-white/40 uppercase tracking-wider mb-0.5">{c.label}</div>
                      <div className="font-body text-base font-medium text-white">{c.value}</div>
                      <div className="font-body text-xs text-white/40">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-semibold tracking-widest uppercase text-white">
            Транс<span style={{ color: "hsl(var(--accent))" }}>Логистик</span>
          </span>
          <span className="font-body text-xs text-white/30">
            © 2009–2026 ТрансЛогистик. Все права защищены.
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
    </div>
  );
}