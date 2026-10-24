import { translations, type Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

export function PricingView({ locale }: { locale: Locale }) {
  const currentTranslations = translations[locale];

  const pricingTiers = [
    {
      title: locale === "uk" ? "Пробне заняття" : "Trial Class",
      description:
        locale === "uk"
          ? "Ідеальне перше знайомство з практикою гарячої йоги в Одесі."
          : "The ideal first introduction to hot yoga practice in Odesa.",
      highlight: locale === "uk" ? "Спецціна для новачків" : "Special offer for beginners",
      features: [
        locale === "uk" ? "75 хвилин практики при 38–40°C" : "75 minutes of practice at 38–40°C",
        locale === "uk" ? "Персональний інструктаж перед класом" : "Personal briefing before class",
        locale === "uk" ? "Килимок і рушник включені" : "Mat and towel included",
        locale === "uk" ? "Чай після заняття" : "Herbal tea after class",
      ],
      isPopular: false,
    },
    {
      title: locale === "uk" ? "Абонемент на 8 занять" : "8-Class Pass",
      description:
        locale === "uk"
          ? "Оптимальна регулярність (2 рази на тиждень) для стабільної адаптації тіла."
          : "Optimal regularity (twice a week) for sustainable body adaptation.",
      highlight: locale === "uk" ? "Рекомендований вибір" : "Most recommended",
      features: [
        locale === "uk" ? "Діє 35 днів" : "Valid for 35 days",
        locale === "uk" ? "Доступ до всіх класів розкладу" : "Access to all scheduled classes",
        locale === "uk" ? "Можливість заморозки на 7 днів" : "7-day freeze option",
        locale === "uk" ? "Пріоритетна бронь місць у групі" : "Priority group reservation",
      ],
      isPopular: true,
    },
    {
      title: locale === "uk" ? "Індивідуальна практика" : "Private Practice",
      description:
        locale === "uk"
          ? "Персональна робота з Марією Мироновою під ваші цілі та фізичні особливості."
          : "Personal 1-on-1 session with Maria Mironova tailored to your goals.",
      highlight: locale === "uk" ? "1 на 1 із засновницею" : "1-on-1 with founder",
      features: [
        locale === "uk" ? "Індивідуальний температурний режим" : "Customized temperature settings",
        locale === "uk" ? "Глибоке налаштування біомеханіки асан" : "In-depth biomechanics alignment",
        locale === "uk" ? "Гнучкий вибір часу" : "Flexible time slot selection",
        locale === "uk" ? "Повна конфіденційність залу" : "Complete privacy of the studio",
      ],
      isPopular: false,
    },
  ];

  const popularBadgeText = locale === "uk" ? "Популярний" : "Popular";
  const chooseTierButtonText = locale === "uk" ? "Обрати абонемент" : "Select pass";
  const noteTitle = locale === "uk" ? "Усі абонементи включають:" : "All memberships include:";
  const noteOne = locale === "uk" ? "Оренду фірмового несковзкого килимка" : "Use of premium non-slip mat";
  const noteTwo = locale === "uk" ? "Великий махровий рушник для практики" : "Large plush practice towel";
  const noteThree = locale === "uk" ? "Очищену питну воду та трав'яний чай" : "Purified drinking water & herbal tea";
  const noteFour = locale === "uk" ? "Простору душову з натуральною косметикою" : "Spacious showers with natural cosmetics";

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
            {currentTranslations.pricing.title}
          </h1>
          <p className="text-[#293A30] text-lg leading-relaxed">
            {currentTranslations.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {pricingTiers.map((tierItem, tierIndex) => (
            <div
              key={tierIndex}
              className={`bg-white border flex flex-col justify-between p-8 md:p-10 transition-shadow ${
                tierItem.isPopular
                  ? "border-[#B87557] shadow-xl relative"
                  : "border-[#293A30]/10 hover:shadow-lg"
              }`}
            >
              {tierItem.isPopular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-[#B87557] text-[#F5F2E9] text-[10px] uppercase tracking-widest font-semibold">
                  {popularBadgeText}
                </span>
              )}

              <div>
                <span className="text-xs uppercase tracking-widest text-[#828A73] block mb-2 font-medium">
                  {tierItem.highlight}
                </span>
                <h2 className="font-serif italic text-3xl text-[#1A2019] mb-4">
                  {tierItem.title}
                </h2>
                <p className="text-sm text-[#79776E] mb-8 leading-relaxed">
                  {tierItem.description}
                </p>

                <div className="border-t border-[#293A30]/10 pt-6 mb-8">
                  <ul className="space-y-3">
                    {tierItem.features.map((featureItem, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm text-[#293A30]"
                      >
                        <span className="text-[#B87557] font-bold">✓</span>
                        <span>{featureItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <BookingTriggerButton
                  className={`w-full py-4 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer ${
                    tierItem.isPopular
                      ? "bg-[#B87557] hover:bg-[#D4793A] text-white"
                      : "bg-[#293A30] hover:bg-[#1A2019] text-[#F5F2E9]"
                  }`}
                >
                  {chooseTierButtonText}
                </BookingTriggerButton>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#293A30] text-[#F5F2E9] p-8 md:p-12 border-l-4 border-[#B87557]">
          <h2 className="font-serif italic text-2xl md:text-3xl mb-4">
            {noteTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-[#EAE5D9]">
            <div className="flex items-center gap-3">
              <span className="text-[#B87557] text-lg">✦</span>
              <span>{noteOne}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#B87557] text-lg">✦</span>
              <span>{noteTwo}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#B87557] text-lg">✦</span>
              <span>{noteThree}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#B87557] text-lg">✦</span>
              <span>{noteFour}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
