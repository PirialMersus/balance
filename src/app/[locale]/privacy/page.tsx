import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { translations, type Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";
import { buildSeoMeta } from "@/lib/seo";

const supportedLocales: Locale[] = ["ru", "uk"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) return {};
  const typedLocale = locale as Locale;
  const privacyTranslations = translations[typedLocale].privacy;
  const seoMetadata = buildSeoMeta({
    locale: typedLocale,
    pageTitle: privacyTranslations.title,
    pageDescription: `${BRAND.fullName} — ${privacyTranslations.title}`,
    path: "/privacy",
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

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) notFound();
  const typedLocale = locale as Locale;

  return (
    <div className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#B87557] mb-3 font-medium">
            Balance Hot Yoga · {BRAND.city}
          </p>
          <h1
            className="font-serif italic text-[#1A2019] leading-tight mb-4"
            style={{ fontSize: "clamp(34px, 5vw, 54px)" }}
          >
            {typedLocale === "ru"
              ? "Политика конфиденциальности"
              : "Політика конфіденційності"}
          </h1>
          <p className="text-xs text-[#828A73]">
            {typedLocale === "ru"
              ? "Редакция от 24 октября 2026 г."
              : "Редакція від 24 жовтня 2026 р."}
          </p>
        </div>

        <div className="bg-white border border-[#293A30]/10 p-8 md:p-12 space-y-8 text-sm md:text-base leading-relaxed text-[#293A30]">
          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#1A2019] mb-3">
              {typedLocale === "ru" ? "1. Общие положения" : "1. Загальні положення"}
            </h2>
            <p>
              {typedLocale === "ru"
                ? `Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта студии «${BRAND.fullName}» (${BRAND.instagramHandle}), расположенной в г. Одесса.`
                : `Ця Політика конфіденційності визначає порядок обробки та захисту персональних даних користувачів сайту студії «${BRAND.fullName}» (${BRAND.instagramHandle}), розташованої в м. Одеса.`}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#1A2019] mb-3">
              {typedLocale === "ru"
                ? "2. Какие данные мы обрабатываем"
                : "2. Які дані ми обробляємо"}
            </h2>
            <p className="mb-2">
              {typedLocale === "ru"
                ? "При взаимодействии с сайтом и отправке запроса на бронирование могут собираться следующие данные:"
                : "При взаємодії із сайтом та надсиланні запиту на бронювання можуть збиратися такі дані:"}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{typedLocale === "ru" ? "Имя пользователя;" : "Ім'я користувача;"}</li>
              <li>{typedLocale === "ru" ? "Контактный телефон или никнейм в Instagram;" : "Контактний телефон або нікнейм в Instagram;"}</li>
              <li>{typedLocale === "ru" ? "Выбранное время и направление практики;" : "Обраний час та напрям практики;"}</li>
              <li>{typedLocale === "ru" ? "Технические обезличенные файлы cookie для обеспечения корректной работы сайта." : "Технічні знеособлені файли cookie для забезпечення коректної роботи сайту."}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#1A2019] mb-3">
              {typedLocale === "ru"
                ? "3. Цели использования данных"
                : "3. Цілі використання даних"}
            </h2>
            <p>
              {typedLocale === "ru"
                ? "Персональные данные используются исключительно для подтверждения записи на тренировку, консультации по подготовке к занятиям в нагретом зале и информирования об изменениях в расписании."
                : "Персональні дані використовуються виключно для підтвердження запису на тренування, консультації щодо підготовки до занять у нагрітому залі та інформування про зміни в розкладі."}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#1A2019] mb-3">
              {typedLocale === "ru"
                ? "4. Защита и передача третьим лицам"
                : "4. Захист та передача третім особам"}
            </h2>
            <p>
              {typedLocale === "ru"
                ? "Мы гарантируем конфиденциальность предоставленной информации. Данные не передаются третьим лицам, за исключением случаев, прямо предусмотренных действующим законодательством Украины."
                : "Ми гарантуємо конфіденційність наданої інформації. Дані не передаються третім особам, за винятком випадків, прямо передбачених чинним законодавством України."}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#1A2019] mb-3">
              {typedLocale === "ru" ? "5. Контакты по вопросам данных" : "5. Контакти з питань даних"}
            </h2>
            <p>
              {typedLocale === "ru"
                ? `По любым вопросам относительно обновления или удаления ваших данных вы можете обратиться напрямую через официальный профиль студии в Instagram: ${BRAND.instagramHandle}.`
                : `З будь-яких питань щодо оновлення або видалення ваших даних ви можете звернутися безпосередньо через офіційний профіль студії в Instagram: ${BRAND.instagramHandle}.`}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
