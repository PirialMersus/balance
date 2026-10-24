import { Locale } from "@/lib/translations";

interface StudioGallerySectionProps {
  locale: Locale;
}

export default function StudioGallerySection({ locale }: StudioGallerySectionProps) {
  const sectionTitle =
    locale === "ru" ? "Пространство студии" : "Простір студії";
  const sectionSubtitle =
    locale === "ru"
      ? "Особая среда, где мягкое инфракрасное тепло и контролируемая влажность создают условия для глубокой практики"
      : "Особливе середовище, де м'яке інфрачервоне тепло та контрольована вологість створюють умови для глибокої практики";

  return (
    <section className="bg-[#222923] py-28 md:py-36 text-[#F5F2E9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="w-16 h-px bg-[#B87557] mb-8" />
            <h2
              className="font-serif italic leading-tight"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              {sectionTitle}
            </h2>
          </div>
          <p className="text-[#828A73] max-w-md text-base leading-relaxed font-light">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-7 relative overflow-hidden rounded-2xl shadow-2xl bg-[#1A2019] min-h-[420px] md:min-h-[520px] group">
            <img
              src="/images/studio-interior-01.webp"
              alt="Зал горячей йоги Balance"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2019]/90 via-[#1A2019]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#1A2019]/80 backdrop-blur-md rounded-xl border-l-4 border-[#B87557]">
              <p className="text-xs uppercase tracking-widest text-[#B87557] font-semibold mb-1">
                {locale === "ru" ? "Зал практик" : "Зал практик"}
              </p>
              <p className="text-sm md:text-base text-[#F5F2E9] font-light">
                {locale === "ru"
                  ? "Специальная система климат-контроля: 38–40°C и оптимальная влажность 40–50%"
                  : "Спеціальна система клімат-контролю: 38–40°C та оптимальна вологість 40–50%"}
              </p>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-[#1A2019] min-h-[260px] flex-1 group">
              <img
                src="/images/studio-atmosphere.webp"
                alt="Атмосфера студии"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2019]/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs uppercase tracking-widest text-[#F5F2E9] font-medium bg-[#1A2019]/60 px-3 py-1 rounded-full backdrop-blur-sm">
                  {locale === "ru" ? "Зона отдыха и восстановления" : "Зона відпочинку та відновлення"}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-10 bg-[#293A30] rounded-2xl border border-white/10 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[#D4793A] font-serif italic text-4xl block mb-3">
                  38–40°C
                </span>
                <p className="text-sm md:text-base text-[#F5F2E9]/90 leading-relaxed mb-6 font-light">
                  {locale === "ru"
                    ? "Идеальный микроклимат для мягкого раскрытия связок и бережной работы с телом без риска растяжений."
                    : "Ідеальний мікроклімат для м'якого розкриття зв'язок і дбайливої роботи з тілом без ризику розтягнень."}
                </p>
              </div>
              <a
                href={`/${locale}/studio`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B87557] hover:text-[#D4793A] transition-colors"
              >
                <span>{locale === "ru" ? "Подробнее о пространстве" : "Детальніше про простір"}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
