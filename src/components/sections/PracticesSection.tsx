import Link from "next/link";
import { translations, Locale } from "@/lib/translations";
import { practices } from "@/lib/practices";

interface PracticesSectionProps {
  locale: Locale;
}

export default function PracticesSection({ locale }: PracticesSectionProps) {
  const sectionTranslations = translations[locale].practices;
  const routePrefix = locale === "uk" ? "" : "/en";
  const hotYogaPractice = practices.find((practice) => practice.slug === "hot-yoga");
  const sectionBadge = locale === "uk" ? "Головний напрямок" : "Core Direction";

  return (
    <section className="bg-[#293A30] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-[#828A73] text-xs tracking-widest uppercase mb-4 font-medium">
            {sectionBadge}
          </p>
          <h2
            className="font-serif italic text-white leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {sectionTranslations.title}
          </h2>
        </div>

        {hotYogaPractice && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-[#222923]">
            <div className="lg:col-span-6 xl:col-span-7 relative overflow-hidden min-h-[340px] lg:min-h-full bg-[#1A2019]">
              <img
                src={hotYogaPractice.image}
                alt={hotYogaPractice.name[locale]}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2019]/80 via-transparent to-transparent lg:hidden" />
            </div>

            <div className="lg:col-span-6 xl:col-span-5 bg-[#222923] p-6 sm:p-8 lg:p-9 xl:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#293A30] text-[#D4793A] text-xs tracking-widest uppercase font-semibold mb-4 sm:mb-6">
                  {hotYogaPractice.level[locale]} · {hotYogaPractice.duration}
                </div>

                <h3
                  className="font-serif italic text-white mb-4 sm:mb-6 leading-tight"
                  style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
                >
                  {hotYogaPractice.name[locale]}
                </h3>

                <p className="text-[#F5F2E9]/90 leading-relaxed mb-4 sm:mb-6 font-light text-base md:text-lg">
                  {hotYogaPractice.shortDescription[locale]}
                </p>

                <p className="text-[#828A73] text-sm leading-relaxed mb-6 sm:mb-8">
                  {sectionTranslations.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 border-t border-white/10 mt-auto">
                <Link
                  href={`${routePrefix}/practices/${hotYogaPractice.slug}`}
                  className="whitespace-nowrap px-7 py-3.5 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs font-medium tracking-widest transition-all duration-300 uppercase text-center rounded-full shadow-lg"
                >
                  {sectionTranslations.learnMore}
                </Link>
                <Link
                  href={`${routePrefix}/practices`}
                  className="whitespace-nowrap px-7 py-3.5 border border-white/30 hover:border-white text-[#F5F2E9] text-xs font-medium tracking-widest transition-all duration-300 uppercase text-center rounded-full"
                >
                  {sectionTranslations.viewAll}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
