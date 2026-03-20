import { useRef, useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const ABOUT_IMG = "https://cdn.poehali.dev/projects/19ebe227-2f43-438f-9d5e-19de3e97c4b4/files/b5ac3c88-01ca-46b2-9089-dbc90495d0d6.jpg";

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

export default function ServicesAboutRoutes() {
  const servicesAnim = useInView();
  const aboutAnim = useInView();
  const routesAnim = useInView();

  return (
    <>
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
                Юлмитранс — федеральный оператор грузоперевозок с 2009 года. Мы работаем на рынке транспортной логистики уже более 15 лет и за это время выстроили репутацию надёжного партнёра для сотен компаний по всей стране.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
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
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground mb-6">
              Работаем по всей России
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-2xl leading-relaxed">
              Осуществляем грузоперевозки во все регионы страны — от Калининграда до Владивостока. Уточните маршрут и стоимость у нашего менеджера.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}