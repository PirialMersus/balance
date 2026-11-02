import { translations, type Locale } from "@/lib/translations";
import { BRAND, getAssetPath } from "@/lib/brand";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

export function TeachersView({ locale }: { locale: Locale }) {
  const currentTranslations = translations[locale];

  const categoryLabel = locale === "en" ? "Team" : (locale === "ru" ? "Команда" : "Команда");
  const cityLabel = locale === "en" ? "Odesa" : (locale === "ru" ? "Одесса" : "Одеса");
  const founderName = locale === "en" ? BRAND.founderNameEn : (locale === "ru" ? BRAND.founderNameRu : BRAND.founderName);

  const heroDescription = locale === "en"
    ? "The mentors who gently guide you through radiant heat, breathwork, and mindful self-discovery."
    : (locale === "ru"
      ? "Люди, которые бережно ведут вас через тепло, дыхание и внутренний диалог."
      : "Люди, які дбайливо ведуть вас крізь тепло, дихання та внутрішній діалог.");

  const biographyTitle = locale === "en" ? "Biography & Journey in Yoga" : (locale === "ru" ? "Биография и путь в практике" : "Біографія та шлях у практиці");
  const credentialsTitle = locale === "en" ? "Qualifications & Standards:" : (locale === "ru" ? "Квалификация и стандарты:" : "Кваліфікація та стандарти:");
  const principlesHeading = locale === "en" ? "Teaching Principles at Balance" : (locale === "ru" ? "Принципы преподавания в Balance" : "Принципи викладання в Balance");

  const credentials = [
    locale === "en"
      ? "Certified instructor in Hot Yoga, Vinyasa Flow, and Yin Yoga"
      : (locale === "ru"
        ? "Сертифицированный преподаватель направлений Hot Yoga, Vinyasa Flow и Yin Yoga"
        : "Сертифікований викладач напрямів Hot Yoga, Vinyasa Flow та Yin Yoga"),
    locale === "en"
      ? "Over 7 years of dedicated personal practice and 4 years of teaching"
      : (locale === "ru"
        ? "Более 7 лет личной практики и 4 года преподавания"
        : "Понад 7 років особистої практики та 4 роки викладання"),
    locale === "en"
      ? "In-depth study of movement anatomy and injury-free asana biomechanics"
      : (locale === "ru"
        ? "Углубленное изучение анатомии движения и безопасной биомеханики асан"
        : "Поглиблене вивчення анатомії руху та безпечної біомеханіки асан"),
    locale === "en"
      ? "Proven methodology for adjusting practices to individual physiology"
      : (locale === "ru"
        ? "Опыт бережной адаптации практик под физиологические особенности каждого ученика"
        : "Досвід адаптації практик під індивідуальні особливості тіла"),
  ];

  const teacherQuotes = [
    {
      quote: locale === "en"
        ? "“Hot yoga teaches you not to fight discomfort, but to listen to it and let it go through a calm, sustained exhale”"
        : (locale === "ru"
          ? "«Йога в нагретом зале учит не бороться с дискомфортом, а слушать его и отпускать через глубокий выдох»"
          : "«Йога в нагрітому залі вчить не боротися з дискомфортом, а слухати його і відпускати через глибокий видих»"),
      principle: locale === "en" ? "Principle of Mindfulness" : (locale === "ru" ? "Принцип осознанности" : "Принцип усвідомленості"),
    },
    {
      quote: locale === "en"
        ? "“There is zero competition in our room. Only your body today and your respectful attention to it”"
        : (locale === "ru"
          ? "«В зале нет соревнования. Есть только ваше тело сегодня и ваше бережное внимание к нему»"
          : "«У кожному класі немає змагання. Є тільки ваше тіло сьогодні і ваша увага до нього»"),
      principle: locale === "en" ? "Principle of Non-Violence (Ahimsa)" : (locale === "ru" ? "Принцип ненасилия (Ахимса)" : "Принцип ненасильства"),
    },
    {
      quote: locale === "en"
        ? "“Heat is a tool of safety. It unlocks deeper mobility without strain or risk of injury”"
        : (locale === "ru"
          ? "«Тепло — это инструмент безопасности. Оно позволяет двигаться глубже без надрыва и риска травм»"
          : "«Тепло — це інструмент безпеки. Воно дає змогу рухатися глибше без надриву й травм»"),
      principle: locale === "en" ? "Principle of Biomechanics" : (locale === "ru" ? "Принцип биомеханики" : "Принцип біомеханіки"),
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

        <div className="bg-white border border-[#293A30]/10 p-8 md:p-14 mb-20 shadow-sm rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <img
                src={getAssetPath("/images/teacher-maria.webp")}
                alt={founderName}
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover border border-[#293A30]/15 rounded-xl"
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
                  {founderName}
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
                <BookingTriggerButton
                  tariffTitle="Пробне заняття (350 ₴)"
                  className="inline-block px-8 py-3.5 bg-[#293A30] hover:bg-[#B87557] text-[#F5F2E9] text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-full min-h-[44px]"
                >
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
                className="bg-white border border-[#293A30]/10 p-8 flex flex-col justify-between rounded-2xl"
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
