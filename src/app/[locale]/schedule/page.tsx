import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { translations, type Locale } from "@/lib/translations";
import { BRAND, COLORS } from "@/lib/brand";
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
  const scheduleTranslations = translations[typedLocale].schedule;
  const seoMetadata = buildSeoMeta({
    locale: typedLocale,
    pageTitle: scheduleTranslations.title,
    pageDescription: scheduleTranslations.subtitle,
    path: "/schedule",
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

export default async function SchedulePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) notFound();
  const typedLocale = locale as Locale;
  const pageTranslations = translations[typedLocale];

  const scheduleDays = [
    {
      dayName: typedLocale === "ru" ? "Понедельник" : "Понеділок",
      classes: [
        { time: "09:00", title: typedLocale === "ru" ? "Горячая йога: Утренний баланс" : "Гаряча йога: Ранковий баланс", instructor: "Мария Миронова", duration: "75 мин", temp: "38–40°C" },
        { time: "19:00", title: typedLocale === "ru" ? "Горячая йога: Вечерняя перезагрузка" : "Гаряча йога: Вечірнє перезавантаження", instructor: "Мария Миронова", duration: "75 мин", temp: "38–40°C" },
      ],
    },
    {
      dayName: typedLocale === "ru" ? "Вторник" : "Вівторок",
      classes: [
        { time: "18:30", title: typedLocale === "ru" ? "Горячая йога: Сила и детокс" : "Гаряча йога: Сила та детокс", instructor: "Мария Миронова", duration: "75 мин", temp: "38–40°C" },
      ],
    },
    {
      dayName: typedLocale === "ru" ? "Среда" : "Середа",
      classes: [
        { time: "09:00", title: typedLocale === "ru" ? "Горячая йога: Утренний баланс" : "Гаряча йога: Ранковий баланс", instructor: "Мария Миронова", duration: "75 мин", temp: "38–40°C" },
        { time: "19:00", title: typedLocale === "ru" ? "Горячая йога: Глубокое раскрытие" : "Гаряча йога: Глибоке розкриття", instructor: "Мария Миронова", duration: "75 мин", temp: "38–40°C" },
      ],
    },
    {
      dayName: typedLocale === "ru" ? "Четверг" : "Четвер",
      classes: [
        { time: "18:30", title: typedLocale === "ru" ? "Горячая йога: Сила и детокс" : "Гаряча йога: Сила та детокс", instructor: "Мария Миронова", duration: "75 мин", temp: "38–40°C" },
      ],
    },
    {
      dayName: typedLocale === "ru" ? "Пятница" : "П'ятниця",
      classes: [
        { time: "09:00", title: typedLocale === "ru" ? "Горячая йога: Утренний баланс" : "Гаряча йога: Ранковий баланс", instructor: "Мария Миронова", duration: "75 мин", temp: "38–40°C" },
        { time: "18:30", title: typedLocale === "ru" ? "Горячая йога: Вечернее расслабление" : "Гаряча йога: Вечірнє розслаблення", instructor: "Мария Миронова", duration: "75 мин", temp: "38–40°C" },
      ],
    },
    {
      dayName: typedLocale === "ru" ? "Суббота" : "Субота",
      classes: [
        { time: "11:00", title: typedLocale === "ru" ? "Горячая йога: Уикенд практика" : "Гаряча йога: Вікенд практика", instructor: "Мария Миронова", duration: "90 мин", temp: "38–40°C" },
      ],
    },
    {
      dayName: typedLocale === "ru" ? "Воскресенье" : "Неділя",
      classes: [
        { time: "12:00", title: typedLocale === "ru" ? "Мягкая горячая йога и медитация" : "М'яка гаряча йога та медитація", instructor: "Мария Миронова", duration: "75 мин", temp: "38°C" },
      ],
    },
  ];

  return (
    <div className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#B87557] mb-4 font-medium">
            Balance Hot Yoga · {typedLocale === "ru" ? "Одесса" : "Одеса"}
          </p>
          <h1
            className="font-serif italic text-[#1A2019] leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
          >
            {pageTranslations.schedule.title}
          </h1>
          <p className="text-[#293A30] text-lg leading-relaxed mb-6">
            {pageTranslations.schedule.subtitle}
          </p>
          <div className="p-6 bg-[#293A30] text-[#F5F2E9] border-l-4 border-[#B87557]">
            <p className="text-sm leading-relaxed">
              {typedLocale === "ru"
                ? "Внимание: студия открылась недавно, и группы комплектуются индивидуально. Количество мест в нагретом зале строго ограничено (до 10–12 человек), чтобы каждому хватало воздуха и персонального внимания инструктора. Запись подтверждается в Direct."
                : "Увага: студія відкрилася нещодавно, і групи комплектуються індивідуально. Кількість місць у нагрітому залі суворо обмежена (до 10–12 осіб), щоб кожному вистачало простору та уваги інструктора. Запис підтверджується в Direct."}
            </p>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs font-semibold uppercase tracking-widest text-[#D4793A] hover:text-[#F5F2E9] transition-colors"
            >
              {pageTranslations.schedule.toInstagram} →
            </a>
          </div>
        </div>

        <div className="space-y-6 mb-20">
          {scheduleDays.map((daySchedule, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-white border border-[#293A30]/10 p-6 md:p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-6 border-b border-[#293A30]/10 gap-2">
                <h2 className="font-serif text-2xl md:text-3xl text-[#1A2019]">
                  {daySchedule.dayName}
                </h2>
                <span className="text-xs uppercase tracking-widest text-[#828A73]">
                  {daySchedule.classes.length}{" "}
                  {typedLocale === "ru" ? "класса(ов)" : "класи(ів)"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {daySchedule.classes.map((singleClass, classIndex) => (
                  <div
                    key={classIndex}
                    className="p-5 bg-[#F5F2E9]/70 border border-[#293A30]/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-serif text-xl font-bold text-[#B87557]">
                          {singleClass.time}
                        </span>
                        <span className="text-xs bg-[#293A30] text-[#F5F2E9] px-2.5 py-1 rounded-full">
                          {singleClass.temp}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-[#1A2019] mb-1">
                        {singleClass.title}
                      </h3>
                      <p className="text-xs text-[#828A73] mb-4">
                        {singleClass.instructor} · {singleClass.duration}
                      </p>
                    </div>

                    <BookingTriggerButton
                      practiceSlug="hot-yoga-base"
                      className="self-start text-xs font-medium uppercase tracking-wider text-[#B87557] hover:text-[#D4793A] transition-colors cursor-pointer"
                    >
                      {typedLocale === "ru" ? "Записаться на этот класс →" : "Записатися на цей клас →"}
                    </BookingTriggerButton>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 md:p-12 bg-[#222923] text-[#F5F2E9]">
          <h2 className="font-serif italic text-2xl md:text-3xl text-white mb-6">
            {typedLocale === "ru" ? "Рекомендации перед занятием" : "Рекомендації перед заняттям"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#828A73]">
            <div>
              <p className="text-[#F5F2E9] font-medium mb-2">
                {typedLocale === "ru" ? "01. Водный баланс" : "01. Водний баланс"}
              </p>
              <p>
                {typedLocale === "ru"
                  ? "Пейте достаточно воды в течение дня перед практикой. Возьмите бутылку негазированной воды с собой в зал."
                  : "Пийте достатньо води протягом дня перед практикою. Візьміть пляшку негазованої води з собою в зал."}
              </p>
            </div>
            <div>
              <p className="text-[#F5F2E9] font-medium mb-2">
                {typedLocale === "ru" ? "02. Прием пищи" : "02. Прийом їжі"}
              </p>
              <p>
                {typedLocale === "ru"
                  ? "Рекомендуется не есть тяжелую пищу за 2–3 часа до тренировки, чтобы телу было комфортно двигаться в жаре."
                  : "Рекомендується не вживати важку їжу за 2–3 години до тренування, щоб тілу було комфортно рухатися в жарі."}
              </p>
            </div>
            <div>
              <p className="text-[#F5F2E9] font-medium mb-2">
                {typedLocale === "ru" ? "03. Приходите заранее" : "03. Приходьте заздалегідь"}
              </p>
              <p>
                {typedLocale === "ru"
                  ? "Приезжайте за 15 минут до начала, чтобы спокойно переодеться и привыкнуть к атмосфере зала."
                  : "Приїжджайте за 15 хвилин до початку, щоб спокійно переодягнутися та звикнути до атмосфери залу."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
