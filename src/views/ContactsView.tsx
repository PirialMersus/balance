import { translations, type Locale } from "@/lib/translations";
import { BRAND, getAssetPath } from "@/lib/brand";

export function ContactsView({ locale }: { locale: Locale }) {
  const currentTranslations = translations[locale];

  const heroDescription = locale === "en"
    ? "We are in touch every single day. Reserve your mat through our online booking or follow us on Instagram."
    : (locale === "ru"
      ? "Мы на связи каждый день. Забронируйте коврик онлайн на сайте или подписывайтесь на наш Instagram."
      : "Ми на зв'язку щодня. Забронюйте килимок онлайн на сайті або підписуйтесь на наш Instagram.");

  const channelDescription = locale === "en"
    ? "Follow our daily schedule, updates, and studio atmosphere on Instagram."
    : (locale === "ru"
      ? "Следите за ежедневным расписанием, новостями и атмосферой студии в Instagram."
      : "Слідкуйте за щоденним розкладом, новинами та атмосферою студії в Instagram.");

  const openInstagramButtonLabel = locale === "en" ? "Open Instagram" : (locale === "ru" ? "Открыть Instagram" : "Відкрити Instagram");

  const hoursLabel = locale === "en" ? "Studio Hours" : (locale === "ru" ? "Часы работы" : "Години роботи");
  const hoursText = locale === "en" ? "Daily: 08:30 – 21:30" : (locale === "ru" ? "Ежедневно: 08:30 – 21:30" : "Щодня: 08:30 – 21:30");
  const hoursNote = locale === "en"
    ? "By prior reservation for classes"
    : (locale === "ru" ? "По предварительной записи на классы" : "За попереднім записом на класи");
  const studioSummary = locale === "en"
    ? "The only dedicated hot yoga studio in Odesa. Practice at 38–40°C for deep somatic release and mental serenity."
    : (locale === "ru"
      ? "Единственная специализированная студия горячей йоги в Одессе. Практика при 38–40°C для глубокого раскрытия тела и покоя ума."
      : "Єдина спеціалізована студія гарячої йоги в Одесі. Практика при 38–40°C для глибокого розкриття тіла та спокою розуму.");

  const addressText = locale === "en" ? BRAND.addressEn : (locale === "ru" ? BRAND.addressRu : BRAND.address);
  const openInMapsText = locale === "en" ? "Open in Google Maps" : (locale === "ru" ? "Открыть на картах Google" : "Відкрити на картах Google");
  const directionsText = locale === "en" ? "Get Directions" : (locale === "ru" ? "Проложить маршрут" : "Прокласти маршрут");
  const mapSectionBadge = locale === "en" ? "Interactive Map" : (locale === "ru" ? "Интерактивная карта" : "Інтерактивна карта");
  const mapSectionTitle = locale === "en" ? "How to Find Us" : (locale === "ru" ? "Как нас найти" : "Як нас знайти");
  const mapHintText = locale === "en"
    ? "Odisey Complex, convenient entrance from Liustdorfska Road, guest parking available."
    : (locale === "ru"
      ? "ЖК «Одиссей», удобный подъезд с Люстдорфской дороги, гостевой паркинг возле комплекса."
      : "ЖК «Одісей», зручний під'їзд з Люстдорфської дороги, гостьовий паркінг біля комплексу.");

  const mapIframeSourceUrl = `https://maps.google.com/maps?q=${encodeURIComponent("Одеса, Люстдорфська дорога, 55К")}&hl=${locale}&z=16&output=embed`;

  const city = locale === "en" ? BRAND.cityEn : (locale === "ru" ? BRAND.cityRu : BRAND.city);

  const faqTitle = locale === "en" ? "Frequently Asked Questions" : (locale === "ru" ? "Частые вопросы перед визитом" : "Часті питання перед візитом");
  const faqItems = [
    {
      q: locale === "en"
        ? "Do I need to book in advance?"
        : (locale === "ru" ? "Нужно ли записываться заранее?" : "Чи потрібно записуватися заздалегідь?"),
      a: locale === "en"
        ? "Yes, studio capacity in the heated room is strictly limited to ensure personal comfort and proper air exchange. Please book ahead."
        : (locale === "ru"
          ? "Да, количество мест в нагретом зале строго ограничено ради вашего комфорта и качественной вентиляции. Пожалуйста, бронируйте занятие заранее."
          : "Так, кількість місць у нагрітому залі суворо обмежена для забезпечення вашого комфорту та якісної вентиляції. Будь ласка, бронюйте заняття заздалегідь."),
    },
    {
      q: locale === "en"
        ? "What should I bring?"
        : (locale === "ru" ? "Что брать с собой?" : "Що брати з собою?"),
      a: locale === "en"
        ? "Lightweight workout wear, a reusable water bottle, and clean slippers for studio corridors. Premium practice mat and towel are provided."
        : (locale === "ru"
          ? "Легкую одежду для практики, бутылочку воды и сменную обувь для студии. Специальный коврик и полотенце мы предоставляем."
          : "Легкий одяг для практики, пляшку для води та змінне взуття для пересування студією. Спеціальний килимок і рушник ми надаємо."),
    },
    {
      q: locale === "en"
        ? "Is hot yoga suitable for beginners?"
        : (locale === "ru" ? "Подходит ли горячая йога новичкам?" : "Чи підходить гаряча йога новачкам?"),
      a: locale === "en"
        ? "Absolutely. Our instructors always offer accessible modifications for all poses. You are free to rest in child's pose whenever needed."
        : (locale === "ru"
          ? "Безусловно. Инструкторы всегда подскажут облегченные вариации асан. Вы всегда можете отдохнуть в позе ребенка, когда это нужно."
          : "Безумовно. Наші інструктори завжди підкажуть полегшені варіації асан. Ви завжди можете відпочити в позі дитини, якщо відчуєте потребу."),
    },
  ];

  return (
    <div className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#B87557] mb-4 font-medium">
            Balance Hot Yoga · {city}
          </p>
          <h1
            className="font-serif italic text-[#1A2019] leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
          >
            {currentTranslations.contacts.title}
          </h1>
          <p className="text-[#293A30] text-lg leading-relaxed">
            {heroDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-white border border-[#293A30]/10 shadow-sm rounded-2xl">
              <span className="text-xs uppercase tracking-widest text-[#B87557] font-semibold block mb-2">
                Instagram
              </span>
              <h2 className="font-serif text-2xl text-[#1A2019] mb-3">
                {BRAND.instagramHandle}
              </h2>
              <p className="text-sm text-[#79776E] mb-6 leading-relaxed">
                {channelDescription}
              </p>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] w-full py-4 px-6 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium text-center transition-colors rounded-full shadow-md"
              >
                {openInstagramButtonLabel}
              </a>
            </div>

            <div className="p-8 bg-white border border-[#293A30]/10 shadow-sm rounded-2xl">
              <span className="text-xs uppercase tracking-widest text-[#828A73] font-semibold block mb-2">
                {currentTranslations.contacts.address}
              </span>
              <p className="font-serif italic text-xl text-[#1A2019] mb-4 leading-snug">
                {addressText}
              </p>
              <p className="text-xs text-[#79776E] mb-6 leading-relaxed">
                {mapHintText}
              </p>
              <a
                href={BRAND.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B87557] hover:text-[#D4793A] font-semibold transition-colors min-h-[44px]"
              >
                <span>{openInMapsText}</span>
                <span>↗</span>
              </a>
            </div>

            <div className="p-8 bg-white border border-[#293A30]/10 shadow-sm rounded-2xl">
              <span className="text-xs uppercase tracking-widest text-[#828A73] font-semibold block mb-2">
                {hoursLabel}
              </span>
              <p className="font-serif italic text-xl text-[#1A2019] mb-2">
                {hoursText}
              </p>
              <p className="text-xs text-[#79776E]">
                {hoursNote}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="relative overflow-hidden rounded-2xl border border-[#293A30]/10 shadow-lg bg-[#1A2019] aspect-[16/10] sm:aspect-[16/9]">
              <img
                src={getAssetPath("/images/balance-exterior.webp")}
                alt={locale === "en" ? "Balance Hot Yoga Studio Entrance" : (locale === "ru" ? "Вход в студию Balance Hot Yoga" : "Вхід до студії Balance Hot Yoga")}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#1A2019]/85 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-between text-xs text-[#F5F2E9]">
                <div>
                  <span className="text-[#B87557] font-semibold block uppercase tracking-wider text-[10px]">
                    {locale === "en" ? "Studio Entrance" : (locale === "ru" ? "Фасад и вход" : "Фасад та вхід")}
                  </span>
                  <span className="font-medium text-sm font-serif italic">
                    {locale === "en" ? "55K Liustdorfska Road" : (locale === "ru" ? "Люстдорфская дорога, 55К" : "Люстдорфська дорога, 55К")}
                  </span>
                </div>
                <span className="text-[11px] text-[#EAE5D9]/80 hidden sm:inline-block">
                  {locale === "en" ? "Odisey Complex" : (locale === "ru" ? "ЖК «Одиссей»" : "ЖК «Одісей»")}
                </span>
              </div>
            </div>

            <div className="bg-[#293A30] text-[#F5F2E9] p-8 md:p-12 rounded-2xl shadow-lg border-l-4 border-[#B87557]">
              <h2 className="font-serif italic text-2xl md:text-3xl mb-4">
                {BRAND.fullName}
              </h2>
              <p className="text-sm text-[#EAE5D9] leading-relaxed mb-6">
                {studioSummary}
              </p>
              <div className="border-t border-[#F5F2E9]/15 pt-6 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#B87557] block mb-1">
                    {locale === "en" ? "Location" : (locale === "ru" ? "Локация" : "Локація")}
                  </span>
                  <span>{locale === "en" ? "Odisey Complex" : (locale === "ru" ? "ЖК «Одиссей»" : "ЖК «Одісей»")}</span>
                </div>
                <div>
                  <span className="text-[#B87557] block mb-1">
                    {locale === "en" ? "Temperature" : (locale === "ru" ? "Температура" : "Температура")}
                  </span>
                  <span>38–40°C</span>
                </div>
              </div>
            </div>

            <div className="border border-[#293A30]/10 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
              <h2 className="font-serif italic text-2xl text-[#1A2019] mb-6">
                {faqTitle}
              </h2>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b border-[#293A30]/10 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="font-medium text-[#1A2019] mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm text-[#79776E] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#293A30]/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B87557] font-semibold block mb-2">
                {mapSectionBadge}
              </span>
              <h2 className="font-serif italic text-2xl sm:text-3xl text-[#1A2019]">
                {mapSectionTitle}
              </h2>
            </div>
            <a
              href={BRAND.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-auto px-6 py-3 rounded-full bg-[#293A30] hover:bg-[#1A2019] text-white text-xs uppercase tracking-wider font-medium transition-colors shadow-sm"
            >
              <span>{directionsText}</span>
              <span>↗</span>
            </a>
          </div>
          <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden border border-[#293A30]/10 shadow-inner bg-[#EAE5D9]">
            <iframe
              title="Google Maps Location"
              src={mapIframeSourceUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
