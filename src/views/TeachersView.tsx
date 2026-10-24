import { translations, type Locale } from "@/lib/translations";
import { BRAND, getAssetPath } from "@/lib/brand";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

export function TeachersView({ locale }: { locale: Locale }) {
  const currentTranslations = translations[locale];

  const categoryLabel = locale === "uk" ? "Команда" : "Team";
  const cityLabel = locale === "uk" ? "Одеса" : "Odesa";
  const heroDescription = locale === "uk"
    ? "Люди, які дбайливо ведуть вас крізь тепло, дихання та внутрішній діалог."
    : "The mentors who gently guide you through radiant heat, breathwork, and mindful self-discovery.";

  const biographyTitle = locale === "uk" ? "Біографія та шлях у практиці" : "Biography & Journey in Yoga";
  const credentialsTitle = locale === "uk" ? "Кваліфікація та стандарти:" : "Qualifications & Standards:";
  const principlesHeading = locale === "uk" ? "Принципи викладання в Balance" : "Teaching Principles at Balance";

  const credentials = [
    locale === "uk"
      ? "Сертифікований викладач напрямів Hot Yoga, Vinyasa Flow та Yin Yoga"
      : "Certified instructor in Hot Yoga, Vinyasa Flow, and Yin Yoga",
    locale === "uk"
      ? "Понад 7 років особистої практики та 4 роки викладання"
      : "Over 7 years of dedicated personal practice and 4 years of teaching",
    locale === "uk"
      ? "Поглиблене вивчення анатомії руху та безпечної біомеханіки асан"
      : "In-depth study of movement anatomy and injury-free asana biomechanics",
    locale === "uk"
      ? "Досвід адаптації практик під індивідуальні особливості тіла"
      : "Proven methodology for adjusting practices to individual physiology",
  ];

  const teacherQuotes = [
    {
      quote: locale === "uk"
        ? "«Йога в нагрітому залі вчить не боротися з дискомфортом, а слухати його і відпускати через глибокий видих»"
        : "“Hot yoga teaches you not to fight discomfort, but to listen to it and let it go through a calm, sustained exhale”",
      principle: locale === "uk" ? "Принцип усвідомленості" : "Principle of Mindfulness",
    },
    {
      quote: locale === "uk"
        ? "«У кожному класі немає змагання. Є тільки ваше тіло сьогодні і ваша увага до нього»"
        : "“There is zero competition in our room. Only your body today and your respectful attention to it”",
      principle: locale === "uk" ? "Принцип ненасильства" : "Principle of Non-Violence (Ahimsa)",
    },
    {
      quote: locale === "uk"
        ? "«Тепло — це інструмент безпеки. Воно дає змогу рухатися глибше без надриву й травм»"
        : "“Heat is a tool of safety. It unlocks deeper mobility without strain or risk of injury”",
      principle: locale === "uk" ? "Принцип біомеханіки" : "Principle of Biomechanics",
    },
  ];

  return (
    <div className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#B87557] mb-4 font-medium">
            Balance Hot Yoga · {categoryLabel}
          </p>
          <h1
            className="font-serif italic text-[#1A2019] leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
          >
            {currentTranslations.teachers.title}
          </h1>
          <p className="text-[#293A30] text-lg leading-relaxed">
            {heroDescription}
          </p>
        </div>

        <div className="bg-white border border-[#293A30]/10 p-8 md:p-14 mb-20 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <img
                src={getAssetPath("/images/teacher-maria.webp")}
                alt={BRAND.founderName}
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover border border-[#293A30]/15"
              />
              <div className="mt-4 flex items-center justify-between text-xs text-[#828A73]">
                <span>{cityLabel}</span>
                {BRAND.founderInstagram && (
                  <a
                    href={BRAND.founderInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B87557] hover:underline"
                  >
                    @m8mironova
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#293A30] leading-relaxed">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B87557] font-semibold block mb-2">
                  {currentTranslations.teachers.founder}
                </span>
                <h2 className="font-serif italic text-3xl md:text-5xl text-[#1A2019] mb-4">
                  {BRAND.founderName}
                </h2>
                <p className="text-lg text-[#1A2019] font-medium">
                  {currentTranslations.teachers.bio}
                </p>
              </div>

              <div className="border-t border-[#293A30]/10 pt-6 space-y-4">
                <h3 className="font-serif italic text-2xl text-[#1A2019]">
                  {biographyTitle}
                </h3>
                <p>{currentTranslations.teachers.credo}</p>
                <div className="space-y-2 pt-2">
                  <p className="text-xs uppercase tracking-widest text-[#828A73] font-semibold">
                    {credentialsTitle}
                  </p>
                  <ul className="space-y-2 text-sm text-[#79776E]">
                    {credentials.map((singleCredential, credentialIndex) => (
                      <li key={credentialIndex} className="flex items-start gap-2">
                        <span className="text-[#B87557]">✦</span>
                        <span>{singleCredential}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <BookingTriggerButton className="inline-block px-8 py-3.5 bg-[#293A30] hover:bg-[#B87557] text-[#F5F2E9] text-xs uppercase tracking-widest transition-colors cursor-pointer">
                  {currentTranslations.nav.book}
                </BookingTriggerButton>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif italic text-3xl text-[#1A2019] mb-8 text-center">
            {principlesHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teacherQuotes.map((quoteItem, quoteIndex) => (
              <div
                key={quoteIndex}
                className="bg-white border border-[#293A30]/10 p-8 flex flex-col justify-between"
              >
                <p className="font-serif italic text-lg text-[#1A2019] mb-6 leading-relaxed">
                  {quoteItem.quote}
                </p>
                <span className="text-xs uppercase tracking-widest text-[#B87557] font-mono">
                  {quoteItem.principle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
