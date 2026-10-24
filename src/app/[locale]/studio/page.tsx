import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { translations, type Locale } from "@/lib/translations";
import { BRAND, getAssetPath } from "@/lib/brand";
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
  const studioTranslations = translations[typedLocale].studio;
  const seoMetadata = buildSeoMeta({
    locale: typedLocale,
    pageTitle: studioTranslations.title,
    pageDescription: studioTranslations.subtitle,
    path: "/studio",
    ogImage: "/images/studio-atmosphere.webp",
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

export default async function StudioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) notFound();
  const typedLocale = locale as Locale;
  const pageTranslations = translations[typedLocale];

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
            {pageTranslations.studio.title}
          </h1>
          <p className="text-[#293A30] text-lg leading-relaxed">
            {pageTranslations.studio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="space-y-6 text-[#293A30] text-lg leading-relaxed">
            <h2 className="font-serif italic text-3xl md:text-4xl text-[#1A2019]">
              {pageTranslations.studio.philosophy}
            </h2>
            <p>{pageTranslations.studio.philosophyText}</p>
            <p>
              {typedLocale === "ru"
                ? "В Одессе многие искали пространство, где йога перестает быть рутинным фитнесом и возвращает человеку контакт с собственным телом. Жара снимает мышечные зажимы быстрее любых традиционных разминок, а необходимость дышать осознанно освобождает голову от повседневной суеты."
                : "В Одесі багато хто шукав простір, де йога перестає бути рутинним фітнесом і повертає людині контакт із власним тілом. Спека знімає м'язові затиски швидше за будь-які традиційні розминки, а необхідність дихати усвідомлено звільняє голову від повсякденної метушні."}
            </p>
            <p className="text-base text-[#79776E]">
              {typedLocale === "ru"
                ? "Основательница студии — Мария Миронова — создавала Balance как место силы, заботы и теплого комьюнити единомышленников."
                : "Засновниця студії — Марія Миронова — створювала Balance як місце сили, турботи та теплої спільноти однодумців."}
            </p>
          </div>

          <div className="relative">
            <img
              src={getAssetPath("/images/studio-atmosphere.webp")}
              alt="Атмосфера Balance Hot Yoga"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover border border-[#293A30]/10 shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 p-6 bg-[#293A30] text-[#F5F2E9] hidden sm:block border-l-4 border-[#B87557]">
              <span className="font-serif italic text-2xl block mb-1">
                38–40°C
              </span>
              <span className="text-xs uppercase tracking-widest text-[#828A73]">
                {typedLocale === "ru" ? "Климатический баланс" : "Кліматичний баланс"}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#222923] text-[#F5F2E9] p-8 md:p-16 mb-24">
          <div className="max-w-3xl mb-12">
            <div className="w-16 h-px bg-[#B87557] mb-6" />
            <h2 className="font-serif italic text-3xl md:text-5xl text-white mb-4">
              {typedLocale === "ru" ? "Технологии нашего климата" : "Технології нашого клімату"}
            </h2>
            <p className="text-[#828A73] text-base leading-relaxed">
              {typedLocale === "ru"
                ? "Горячая йога — это не просто батарея в углу. Это высокоточная инженерная система, созданная для безопасности сердца и легких."
                : "Гаряча йога — це не просто батарея в кутку. Це високоточна інженерна система, створена для безпеки серця та легень."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="p-6 bg-[#1A2019] border border-[#828A73]/20">
              <span className="text-xl font-serif text-[#D4793A] block mb-3">01</span>
              <h3 className="font-medium text-base text-white mb-2">
                {typedLocale === "ru" ? "Мягкое лучистое тепло" : "М'яке променисте тепло"}
              </h3>
              <p className="text-[#828A73] leading-relaxed">
                {typedLocale === "ru"
                  ? "Инфракрасные панели мягко прогревают тело изнутри, не сжигая кислород и не создавая духоты."
                  : "Інфрачервоні панелі м'яко прогрівають тіло зсередини, не спалюючи кисень і не створюючи задухи."}
              </p>
            </div>

            <div className="p-6 bg-[#1A2019] border border-[#828A73]/20">
              <span className="text-xl font-serif text-[#D4793A] block mb-3">02</span>
              <h3 className="font-medium text-base text-white mb-2">
                {typedLocale === "ru" ? "Приточно-вытяжная вентиляция" : "Припливно-витяжна вентиляція"}
              </h3>
              <p className="text-[#828A73] leading-relaxed">
                {typedLocale === "ru"
                  ? "Постоянный приток свежего фильтрованного воздуха обеспечивает непрерывный кислородный обмен."
                  : "Постійний приплив свіжого фільтрованого повітря забезпечує безперервний кисневий обмін."}
              </p>
            </div>

            <div className="p-6 bg-[#1A2019] border border-[#828A73]/20">
              <span className="text-xl font-serif text-[#D4793A] block mb-3">03</span>
              <h3 className="font-medium text-base text-white mb-2">
                {typedLocale === "ru" ? "Контролируемая влажность" : "Контрольована вологість"}
              </h3>
              <p className="text-[#828A73] leading-relaxed">
                {typedLocale === "ru"
                  ? "Специальные парогенераторы поддерживают оптимальные 40–50% влажности для легкого дыхания."
                  : "Спеціальні парогенератори підтримують оптимальні 40–50% вологості для легкого дихання."}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif italic text-3xl md:text-4xl text-[#1A2019] mb-6">
            {typedLocale === "ru" ? "Хотите почувствовать атмосферу?" : "Хочете відчути атмосферу?"}
          </h2>
          <p className="text-[#293A30] mb-8 leading-relaxed">
            {typedLocale === "ru"
              ? "Запишитесь на вводное занятие через Direct. Мы ответим на любые вопросы и поможем подготовиться к первой практике."
              : "Запишіться на вступне заняття через Direct. Ми відповімо на будь-які запитання та допоможемо підготуватися до першої практики."}
          </p>
          <BookingTriggerButton
            practiceSlug="first-trial"
            className="inline-block px-10 py-5 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium transition-colors shadow-lg cursor-pointer rounded-full"
          >
            {pageTranslations.contacts.booking}
          </BookingTriggerButton>
        </div>
      </div>
    </div>
  );
}
