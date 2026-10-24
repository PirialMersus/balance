import { translations, Locale } from "@/lib/translations";
import AtmosphericCanvas from "@/components/ambient/AtmosphericCanvas";

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const heroTranslations = translations[locale].hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1A2019]">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.webp"
          alt="Студия горячей йоги Balance Одесса"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1A2019]/80 via-[#1A2019]/60 to-[#1A2019]/95"
        />
      </div>

      <AtmosphericCanvas />

      <svg
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 opacity-30 hidden lg:block pointer-events-none"
        width="60"
        height="400"
        viewBox="0 0 60 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M30 10 C 50 60, 10 120, 30 180 C 50 240, 10 300, 30 390"
          stroke="#F5F2E9"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M30 10 C 50 60, 10 120, 30 180 C 50 240, 10 300, 30 390;
              M30 10 C 10 60, 50 120, 30 180 C 10 240, 50 300, 30 390;
              M30 10 C 50 60, 10 120, 30 180 C 50 240, 10 300, 30 390
            "
          />
        </path>
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-28 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#D4793A] animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-[#F5F2E9] font-medium">
            {locale === "ru" ? "Единственная студия горячей йоги в Одессе" : "Єдина студія гарячої йоги в Одесі"}
          </span>
        </div>

        <h1
          className="font-serif italic text-white leading-[1.08] mb-8 drop-shadow-md"
          style={{ fontSize: "clamp(48px, 8vw, 92px)" }}
        >
          {heroTranslations.headline.split("\n").map((headlineRow, headlineRowIndex) => (
            <span key={headlineRowIndex} className="block">
              {headlineRow}
            </span>
          ))}
        </h1>

        <p
          className="text-[#F5F2E9]/90 text-lg md:text-xl leading-relaxed mb-12 max-w-xl font-light"
          style={{ whiteSpace: "pre-line" }}
        >
          {heroTranslations.sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <a
            href={`/${locale}/practices`}
            className="w-full sm:w-auto px-9 py-4 bg-[#B87557] hover:bg-[#D4793A] text-white font-medium tracking-widest transition-all duration-300 text-xs uppercase shadow-xl hover:shadow-2xl text-center rounded-full"
          >
            {heroTranslations.ctaPractice}
          </a>
          <a
            href={`/${locale}/schedule`}
            className="w-full sm:w-auto px-9 py-4 border border-white/80 hover:bg-white/10 text-white font-medium tracking-widest transition-all duration-300 text-xs uppercase text-center rounded-full backdrop-blur-sm"
          >
            {heroTranslations.ctaSchedule}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-white/60 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
