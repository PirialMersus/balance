import { translations, type Locale } from "@/lib/translations";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

export function PricingView({ locale }: { locale: Locale }) {
  const currentTranslations = translations[locale];

  const pricingTiers = [
    {
      title: locale === "uk" ? "Пробне заняття" : (locale === "ru" ? "Пробное занятие" : "Trial Class"),
      price: "350 ₴",
      pricePerClass: locale === "uk" ? "для нових гостей студії" : (locale === "ru" ? "для новых гостей студии" : "for new guests"),
      description:
        locale === "uk"
          ? "Ідеальне перше знайомство з практикою гарячої йоги в Одесі."
          : (locale === "ru"
            ? "Идеальное первое знакомство с практикой горячей йоги в Одессе."
            : "The ideal first introduction to hot yoga practice in Odesa."),
      highlight: locale === "uk" ? "Спецціна для новачків" : (locale === "ru" ? "Спеццена для новичков" : "Special offer for beginners"),
      buttonLabel: locale === "uk" ? "Записатися на пробне" : (locale === "ru" ? "Записаться на пробное" : "Book Trial Class"),
      features: [
        locale === "uk" ? "75 хвилин практики при 38–40°C" : (locale === "ru" ? "75 минут практики при 38–40°C" : "75 minutes of practice at 38–40°C"),
        locale === "uk" ? "Персональний інструктаж перед класом" : (locale === "ru" ? "Персональный инструктаж перед классом" : "Personal briefing before class"),
        locale === "uk" ? "Килимок і рушник включені" : (locale === "ru" ? "Коврик и полотенце включены" : "Mat and towel included"),
        locale === "uk" ? "Чай після заняття" : (locale === "ru" ? "Чай после занятия" : "Herbal tea after class"),
      ],
      isPopular: false,
    },
    {
      title: locale === "uk" ? "Абонемент на 8 занять" : (locale === "ru" ? "Абонемент на 8 занятий" : "8-Class Pass"),
      price: "3 200 ₴",
      pricePerClass: locale === "uk" ? "400 ₴ за одне заняття" : (locale === "ru" ? "400 ₴ за одно занятие" : "400 ₴ per class"),
      description:
        locale === "uk"
          ? "Оптимальна регулярність (2 рази на тиждень) для стабільної адаптації тіла."
          : (locale === "ru"
            ? "Оптимальная регулярность (2 раза в неделю) для стабильной адаптации тела."
            : "Optimal regularity (twice a week) for sustainable body adaptation."),
      highlight: locale === "uk" ? "Рекомендований вибір" : (locale === "ru" ? "Рекомендованный выбор" : "Most recommended"),
      buttonLabel: locale === "uk" ? "Придбати абонемент" : (locale === "ru" ? "Купить абонемент" : "Select 8-Class Pass"),
      features: [
        locale === "uk" ? "Діє 35 днів" : (locale === "ru" ? "Действует 35 дней" : "Valid for 35 days"),
        locale === "uk" ? "Доступ до всіх класів розкладу" : (locale === "ru" ? "Доступ ко всем классам расписания" : "Access to all scheduled classes"),
        locale === "uk" ? "Можливість заморозки на 7 днів" : (locale === "ru" ? "Возможность заморозки на 7 дней" : "7-day freeze option"),
        locale === "uk" ? "Пріоритетна бронь місць у групі" : (locale === "ru" ? "Приоритетная бронь мест в группе" : "Priority group reservation"),
      ],
      isPopular: true,
    },
    {
      title: locale === "uk" ? "Індивідуальна практика" : (locale === "ru" ? "Индивидуальная практика" : "Private Practice"),
      price: "1 400 ₴",
      pricePerClass: locale === "uk" ? "персональний сеанс 75 хв" : (locale === "ru" ? "персональный сеанс 75 мин" : "75 min personal session"),
      description:
        locale === "uk"
          ? "Персональна робота з Марією Мироновою під ваші цілі та фізичні особливості."
          : (locale === "ru"
            ? "Персональная работа с Марией Мироновой под ваши цели и особенности тела."
            : "Personal 1-on-1 session with Maria Mironova tailored to your goals."),
      highlight: locale === "uk" ? "1 на 1 із засновницею" : (locale === "ru" ? "1 на 1 с основательницей" : "1-on-1 with founder"),
      buttonLabel: locale === "uk" ? "Замовити індивідуальну" : (locale === "ru" ? "Заказать индивидуальную" : "Book Private Session"),
      features: [
        locale === "uk" ? "Індивідуальний температурний режим" : (locale === "ru" ? "Индивидуальный температурный режим" : "Customized temperature settings"),
        locale === "uk" ? "Глибоке налаштування біомеханіки асан" : (locale === "ru" ? "Глубокая отстройка биомеханики асан" : "In-depth biomechanics alignment"),
        locale === "uk" ? "Гнучкий вибір часу" : (locale === "ru" ? "Гибкий выбор времени" : "Flexible time slot selection"),
        locale === "uk" ? "Повна конфіденційність залу" : (locale === "ru" ? "Полная конфиденциальность зала" : "Complete privacy of the studio"),
      ],
      isPopular: false,
    },
  ];

  const popularBadgeText = locale === "uk" ? "Популярний" : (locale === "ru" ? "Популярный" : "Popular");
  const dropInText = locale === "uk"
    ? "Також доступне разове відвідування будь-якого групового заняття без абонемента — 500 ₴."
    : (locale === "ru"
      ? "Также доступно разовое посещение любого группового занятия без абонемента — 500 ₴."
      : "Single drop-in class without a membership pass is also available — 500 ₴.");
  const locationBadge = locale === "en" ? "Odesa · Odisey Complex" : (locale === "ru" ? "Одесса · ЖК «Одиссей»" : "Одеса · ЖК «Одісей»");

  const noteTitle = locale === "en" ? "All memberships include:" : (locale === "ru" ? "Все абонементы включают:" : "Усі абонементи включають:");
  const noteOne = locale === "en" ? "Use of premium non-slip mat" : (locale === "ru" ? "Аренду фирменного нескользящего коврика" : "Оренду фірмового несковзкого килимка");
  const noteTwo = locale === "en" ? "Large plush practice towel" : (locale === "ru" ? "Большое махровое полотенце для практики" : "Великий махровий рушник для практики");
  const noteThree = locale === "en" ? "Purified drinking water & herbal tea" : (locale === "ru" ? "Очищенную питьевую воду и травяной чай" : "Очищену питну воду та трав'яний чай");
  const noteFour = locale === "en" ? "Spacious showers with natural cosmetics" : (locale === "ru" ? "Просторную душевую с натуральной косметикой" : "Простору душову з натуральною косметикою");

  return (
    <div className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#B87557] mb-4 font-medium">
            Balance Hot Yoga · {locationBadge}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch">
          {pricingTiers.map((tierItem, tierIndex) => (
            <div
              key={tierIndex}
              className={`bg-white border flex flex-col justify-between p-8 md:p-10 transition-shadow rounded-2xl ${
                tierItem.isPopular
                  ? "border-[#B87557] shadow-xl relative"
                  : "border-[#293A30]/10 hover:shadow-lg"
              }`}
            >
              {tierItem.isPopular && (
                <span className="absolute -top-3 left-8 px-3.5 py-1 bg-[#B87557] text-[#F5F2E9] text-[10px] uppercase tracking-widest font-semibold rounded-full shadow-sm">
                  {popularBadgeText}
                </span>
              )}

              <div>
                <span className="text-xs uppercase tracking-widest text-[#828A73] block mb-2 font-medium">
                  {tierItem.highlight}
                </span>
                <h2 className="font-serif italic text-3xl text-[#1A2019] mb-3">
                  {tierItem.title}
                </h2>

                <div className="mb-4">
                  <div className="font-serif italic text-4xl text-[#B87557] font-semibold">
                    {tierItem.price}
                  </div>
                  <span className="text-xs text-[#79776E] block mt-0.5">
                    {tierItem.pricePerClass}
                  </span>
                </div>

                <p className="text-sm text-[#79776E] mb-6 leading-relaxed">
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
                  tariffTitle={`${tierItem.title} (${tierItem.price})`}
                  className={`w-full py-4 px-6 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer shadow-md ${
                    tierItem.isPopular
                      ? "bg-[#B87557] hover:bg-[#D4793A] text-white shadow-[#B87557]/20"
                      : "bg-[#293A30] hover:bg-[#1A2019] text-[#F5F2E9]"
                  }`}
                >
                  {tierItem.buttonLabel}
                </BookingTriggerButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16 p-4 rounded-xl bg-white/70 border border-[#293A30]/10 text-center text-sm text-[#293A30]">
          {dropInText}
        </div>

        <div className="bg-[#293A30] text-[#F5F2E9] p-8 md:p-12 border-l-4 border-[#B87557] rounded-2xl shadow-lg">
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
