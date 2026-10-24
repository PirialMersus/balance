import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { translations, type Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";
import { buildSeoMeta } from "@/lib/seo";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

const supportedLocales: Locale[] = ["ru", "uk"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) return {};
  const typedLocale = locale as Locale;
  const pricingTranslations = translations[typedLocale].pricing;
  const seoMetadata = buildSeoMeta({
    locale: typedLocale,
    pageTitle: pricingTranslations.title,
    pageDescription: pricingTranslations.subtitle,
    path: "/pricing",
    ogImage: "/images/og-default.webp",
  });
  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    alternates: {
      canonical: seoMetadata.canonical,
      languages: {
        ru: seoMetadata.alternateRu,
        uk: seoMetadata.alternateUk,
      },
    },
    openGraph: {
      title: seoMetadata.title,
      description: seoMetadata.description,
      images: [seoMetadata.ogImage],
    },
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) notFound();
  const typedLocale = locale as Locale;
  const pageTranslations = translations[typedLocale];

  const pricingTiers = [
    {
      title: typedLocale === "ru" ? "Пробное занятие" : "Пробне заняття",
      description:
        typedLocale === "ru"
          ? "Идеальное первое знакомство с практикой горячей йоги в Одессе."
          : "Ідеальне перше знайомство з практикою гарячої йоги в Одесі.",
      highlight: typedLocale === "ru" ? "Спеццена для новичков" : "Спецціна для новачків",
      features: [
        typedLocale === "ru" ? "75 минут практики при 38–40°C" : "75 хвилин практики при 38–40°C",
        typedLocale === "ru" ? "Персональный инструктаж перед классом" : "Персональний інструктаж перед класом",
        typedLocale === "ru" ? "Коврик и полотенце включены" : "Килимок і рушник включені",
        typedLocale === "ru" ? "Чай после занятия" : "Чай після заняття",
      ],
      isPopular: false,
    },
    {
      title: typedLocale === "ru" ? "Абонемент на 8 занятий" : "Абонемент на 8 занять",
      description:
        typedLocale === "ru"
          ? "Оптимальная регулярность (2 раза в неделю) для стабильной адаптации тела."
          : "Оптимальна регулярність (2 рази на тиждень) для стабільної адаптації тіла.",
      highlight: typedLocale === "ru" ? "Рекомендованный выбор" : "Рекомендований вибір",
      features: [
        typedLocale === "ru" ? "Действует 35 дней" : "Діє 35 днів",
        typedLocale === "ru" ? "Доступ ко всем классам расписания" : "Доступ до всіх класів розкладу",
        typedLocale === "ru" ? "Возможность заморозки на 7 дней" : "Можливість заморозки на 7 днів",
        typedLocale === "ru" ? "Приоритетная бронь мест в группе" : "Пріоритетна бронь місць у групі",
      ],
      isPopular: true,
    },
    {
      title: typedLocale === "ru" ? "Индивидуальная практика" : "Індивідуальна практика",
      description:
        typedLocale === "ru"
          ? "Персональная работа с Марией Мироновой под ваши цели и физические особенности."
          : "Персональна робота з Марією Мироновою під ваші цілі та фізичні особливості.",
      highlight: typedLocale === "ru" ? "1 на 1 с основательницей" : "1 на 1 із засновницею",
      features: [
        typedLocale === "ru" ? "Индивидуальный температурный режим" : "Індивідуальний температурний режим",
        typedLocale === "ru" ? "Глубокая отстройка биомеханики асан" : "Глибоке налаштування біомеханіки асан",
        typedLocale === "ru" ? "Гибкий выбор времени" : "Гнучкий вибір часу",
        typedLocale === "ru" ? "Полная конфиденциальность зала" : "Повна конфіденційність залу",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#B87557] mb-4 font-medium">
            Balance Hot Yoga · {typedLocale === "ru" ? "Условия и абонементы" : "Умови та абонементи"}
          </p>
          <h1
            className="font-serif italic text-[#1A2019] leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
          >
            {pageTranslations.pricing.title}
          </h1>
          <p className="text-[#293A30] text-lg leading-relaxed mb-8">
            {pageTranslations.pricing.subtitle}
          </p>
          <div className="p-6 bg-[#293A30] text-[#F5F2E9] border-l-4 border-[#B87557]">
            <p className="text-sm leading-relaxed">
              {typedLocale === "ru"
                ? "Поскольку студия Balance является новым проектом в Одессе, мы предлагаем специальные льготные условия для первых постоянных резидентов. Чтобы закрепить за собой место и получить актуальный прайс-лист, напишите нам в Instagram Direct."
                : "Оскільки студія Balance є новим проєктом в Одесі, ми пропонуємо спеціальні пільгові умови для перших постійних резидентів. Щоб закріпити за собою місце та отримати актуальний прайс-лист, напишіть нам в Instagram Direct."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {pricingTiers.map((tier, tierIndex) => (
            <div
              key={tierIndex}
              className={`p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
                tier.isPopular
                  ? "bg-[#222923] text-[#F5F2E9] border-2 border-[#B87557] shadow-xl"
                  : "bg-white text-[#222923] border border-[#293A30]/10 shadow-sm"
              }`}
            >
              <div>
                <span
                  className={`inline-block text-xs uppercase tracking-widest font-medium px-3 py-1 mb-6 ${
                    tier.isPopular
                      ? "bg-[#B87557] text-white"
                      : "bg-[#293A30]/10 text-[#293A30]"
                  }`}
                >
                  {tier.highlight}
                </span>

                <h2
                  className={`font-serif italic text-2xl md:text-3xl mb-4 ${
                    tier.isPopular ? "text-white" : "text-[#1A2019]"
                  }`}
                >
                  {tier.title}
                </h2>

                <p
                  className={`text-sm leading-relaxed mb-8 ${
                    tier.isPopular ? "text-[#828A73]" : "text-[#79776E]"
                  }`}
                >
                  {tier.description}
                </p>

                <div className="space-y-3 mb-10 border-t pt-6 border-current/15">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3 text-sm">
                      <span className="text-[#B87557] mt-0.5">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <BookingTriggerButton
                practiceSlug={tier.isPopular ? "hot-yoga-base" : "first-trial"}
                className={`w-full py-4 text-center text-xs uppercase tracking-widest font-medium transition-all duration-300 cursor-pointer rounded-full ${
                  tier.isPopular
                    ? "bg-[#B87557] hover:bg-[#D4793A] text-white shadow-md"
                    : "bg-[#293A30] hover:bg-[#B87557] text-[#F5F2E9]"
                }`}
              >
                {pageTranslations.pricing.askPrice}
              </BookingTriggerButton>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#293A30]/10 p-8 md:p-12">
          <h2 className="font-serif italic text-2xl md:text-3xl text-[#1A2019] mb-6">
            {typedLocale === "ru" ? "Что всегда входит в любое посещение" : "Що завжди входить у будь-яке відвідування"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-[#293A30]">
            <div className="p-4 bg-[#F5F2E9]/60">
              <p className="font-semibold mb-1">{typedLocale === "ru" ? "Коврики и пропсы" : "Килимки та пропси"}</p>
              <p className="text-xs text-[#79776E]">
                {typedLocale === "ru" ? "Профессиональное нескользящее покрытие для горячих условий." : "Професійне нековзне покриття для гарячих умов."}
              </p>
            </div>
            <div className="p-4 bg-[#F5F2E9]/60">
              <p className="font-semibold mb-1">{typedLocale === "ru" ? "Душевые и уход" : "Душові та догляд"}</p>
              <p className="text-xs text-[#79776E]">
                {typedLocale === "ru" ? "Комфортные душевые со средствами ухода после интенсивного детокса." : "Комфортні душові із засобами догляду після детоксу."}
              </p>
            </div>
            <div className="p-4 bg-[#F5F2E9]/60">
              <p className="font-semibold mb-1">{typedLocale === "ru" ? "Травяной чай" : "Трав'яний чай"}</p>
              <p className="text-xs text-[#79776E]">
                {typedLocale === "ru" ? "Теплый травяной сбор для восстановления минерального баланса." : "Теплий трав'яний збір для відновлення балансу."}
              </p>
            </div>
            <div className="p-4 bg-[#F5F2E9]/60">
              <p className="font-semibold mb-1">{typedLocale === "ru" ? "Поддержка мастера" : "Підтримка майстра"}</p>
              <p className="text-xs text-[#79776E]">
                {typedLocale === "ru" ? "Бережный контроль самочувствия и давления во время всей практики." : "Дбайливий контроль самопочуття під час усієї практики."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
