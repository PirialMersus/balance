import { translations, type Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";

export function ContactsView({ locale }: { locale: Locale }) {
  const currentTranslations = translations[locale];

  const heroDescription = locale === "uk"
    ? "Ми на зв'язку щодня. Усі питання, бронювання місць та індивідуальні консультації проходять безпосередньо через наш Instagram."
    : "We are in touch every single day. All inquiries, class reservations, and personalized consultations happen directly via our Instagram.";

  const channelDescription = locale === "uk"
    ? "Основний і найшвидший канал зв'язку. Напишіть нам повідомлення, і ми відповімо протягом декількох хвилин."
    : "The primary and fastest channel of communication. Send us a message, and we will reply within minutes.";

  const hoursLabel = locale === "uk" ? "Години роботи" : "Studio Hours";
  const hoursText = locale === "uk" ? "Щодня: 08:30 – 21:30" : "Daily: 08:30 – 21:30";
  const hoursNote = locale === "uk" ? "За попереднім записом на класи" : "By prior reservation for classes";
  const studioSummary = locale === "uk"
    ? "Єдина спеціалізована студія гарячої йоги в Одесі. Практика при 38–40°C для глибокого розкриття тіла та спокою розуму."
    : "The only dedicated hot yoga studio in Odesa. Practice at 38–40°C for deep somatic release and mental serenity.";

  const openInMapsText = locale === "uk" ? "Відкрити на картах Google" : "Open in Google Maps";
  const mapHintText = locale === "uk"
    ? "Студія гарячої йоги в самому серці Одеси. Зручний під'їзд та піша доступність."
    : "Hot yoga studio in the heart of Odesa. Convenient access and walking distance.";

  const faqTitle = locale === "uk" ? "Часті питання перед візитом" : "Frequently Asked Questions";
  const faqItems = [
    {
      q: locale === "uk" ? "Чи потрібно записуватися заздалегідь?" : "Do I need to book in advance?",
      a:
        locale === "uk"
          ? "Так, кількість місць у нагрітому залі суворо обмежена для забезпечення вашого комфорту та якісної вентиляції. Будь ласка, бронюйте заняття заздалегідь."
          : "Yes, studio capacity in the heated room is strictly limited to ensure personal comfort and proper air exchange. Please book ahead.",
    },
    {
      q: locale === "uk" ? "Що брати з собою?" : "What should I bring?",
      a:
        locale === "uk"
          ? "Легкий одяг для практики, пляшку для води та змінне взуття для пересування студією. Спеціальний килимок і рушник ми надаємо."
          : "Lightweight workout wear, a reusable water bottle, and clean slippers for studio corridors. Premium practice mat and towel are provided.",
    },
    {
      q: locale === "uk" ? "Чи підходить гаряча йога новачкам?" : "Is hot yoga suitable for beginners?",
      a:
        locale === "uk"
          ? "Безумовно. Наші інструктори завжди підкажуть полегшені варіації асан. Ви завжди можете відпочити в позі дитини, якщо відчуєте потребу."
          : "Absolutely. Our instructors always offer accessible modifications for all poses. You are free to rest in child's pose whenever needed.",
    },
  ];

  return (
    <div className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#B87557] mb-4 font-medium">
            Balance Hot Yoga · {BRAND.city}
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
            <div className="p-8 bg-white border border-[#293A30]/10 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#B87557] font-semibold block mb-2">
                Instagram Direct
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
                className="inline-block w-full py-4 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium text-center transition-colors"
              >
                {currentTranslations.contacts.booking}
              </a>
            </div>

            <div className="p-8 bg-white border border-[#293A30]/10 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#828A73] font-semibold block mb-2">
                {currentTranslations.contacts.address}
              </span>
              <p className="font-serif italic text-xl text-[#1A2019] mb-4">
                {BRAND.address}
              </p>
              <p className="text-xs text-[#79776E] mb-6">
                {mapHintText}
              </p>
              <a
                href="https://maps.google.com/?q=Odesa+Balance+Hot+Yoga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B87557] hover:underline"
              >
                <span>{openInMapsText}</span>
                <span>↗</span>
              </a>
            </div>

            <div className="p-8 bg-white border border-[#293A30]/10 shadow-sm">
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

          <div className="lg:col-span-7">
            <div className="bg-[#293A30] text-[#F5F2E9] p-8 md:p-12 mb-8">
              <h2 className="font-serif italic text-2xl md:text-3xl mb-4">
                {BRAND.fullName}
              </h2>
              <p className="text-sm text-[#EAE5D9] leading-relaxed mb-6">
                {studioSummary}
              </p>
              <div className="border-t border-[#F5F2E9]/15 pt-6 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#B87557] block mb-1">
                    {locale === "uk" ? "Місто" : "City"}
                  </span>
                  <span>{BRAND.city}</span>
                </div>
                <div>
                  <span className="text-[#B87557] block mb-1">
                    {locale === "uk" ? "Температура" : "Temperature"}
                  </span>
                  <span>38–40°C</span>
                </div>
              </div>
            </div>

            <div className="border border-[#293A30]/10 bg-white p-8 md:p-12">
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
      </div>
    </div>
  );
}
