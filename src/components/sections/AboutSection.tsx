import { translations, Locale } from "@/lib/translations";
import { getAssetPath } from "@/lib/brand";

interface AboutSectionProps {
  locale: Locale;
}

export default function AboutSection({ locale }: AboutSectionProps) {
  const sectionTranslations = translations[locale].about;

  return (
    <section className="bg-[#F5F2E9] py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="w-16 h-px bg-[#B87557] mb-10" />
            <h2
              className="font-serif italic text-[#1A2019] leading-[1.15] mb-8"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", whiteSpace: "pre-line" }}
            >
              {sectionTranslations.title}
            </h2>

            <p className="text-[#293A30] text-lg md:text-xl leading-relaxed mb-6 font-light">
              {sectionTranslations.body}
            </p>

            <p className="text-[#293A30]/80 text-base md:text-lg leading-relaxed mb-10 font-light">
              {sectionTranslations.body2}
            </p>

            <div className="flex items-center gap-6 pt-4 border-t border-[#293A30]/15">
              <div>
                <span className="font-serif italic text-3xl text-[#B87557] block">
                  38–40°C
                </span>
                <span className="text-xs uppercase tracking-widest text-[#828A73]">
                  {locale === "ru" ? "Температура зала" : "Температура залу"}
                </span>
              </div>
              <div className="w-px h-10 bg-[#293A30]/15" />
              <div>
                <span className="font-serif italic text-3xl text-[#B87557] block">
                  2–3 раза
                </span>
                <span className="text-xs uppercase tracking-widest text-[#828A73]">
                  {locale === "ru" ? "В неделю для баланса" : "На тиждень для балансу"}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/5] bg-[#1A2019]">
              <img
                src={getAssetPath("/images/studio-atmosphere.jpg")}
                alt="Атмосфера студии Balance"
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-[#B87557]/40 rounded-2xl hidden lg:block -z-10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
