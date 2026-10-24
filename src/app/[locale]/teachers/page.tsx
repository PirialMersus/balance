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
  const teachersTranslations = translations[typedLocale].teachers;
  const seoMetadata = buildSeoMeta({
    locale: typedLocale,
    pageTitle: teachersTranslations.title,
    pageDescription: `${BRAND.founderName} — ${teachersTranslations.founder}`,
    path: "/teachers",
    ogImage: "/images/teacher-maria.webp",
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

export default async function TeachersPage({
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
            Balance Hot Yoga · {typedLocale === "ru" ? "Команда" : "Команда"}
          </p>
          <h1
            className="font-serif italic text-[#1A2019] leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
          >
            {pageTranslations.teachers.title}
          </h1>
          <p className="text-[#293A30] text-lg leading-relaxed">
            {typedLocale === "ru"
              ? "Люди, которые бережно ведут вас через тепло, дыхание и внутренний диалог."
              : "Люди, які дбайливо ведуть вас крізь тепло, дихання та внутрішній діалог."}
          </p>
        </div>

        <div className="bg-white border border-[#293A30]/10 p-8 md:p-14 mb-20 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <img
                src="/images/teacher-maria.webp"
                alt={BRAND.founderName}
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover border border-[#293A30]/15"
              />
              <div className="mt-4 flex items-center justify-between text-xs text-[#828A73]">
                <span>{typedLocale === "ru" ? "Одесса" : "Одеса"}</span>
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

            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs uppercase tracking-widest text-[#B87557] font-semibold">
                {pageTranslations.teachers.founder}
              </span>
              <h2 className="font-serif italic text-3xl md:text-5xl text-[#1A2019]">
                {BRAND.founderName}
              </h2>
              <div className="w-12 h-px bg-[#B87557]" />
              <p className="text-[#293A30] text-base md:text-lg leading-relaxed">
                {typedLocale === "ru"
                  ? "Мария Миронова — основательница студии Balance, идейный вдохновитель первой в Одессе площадки горячей йоги. Ее подход объединяет уважение к физиологии человека, безопасную выстройку асан и понимание того, как тепло трансформирует ментальное состояние."
                  : "Марія Миронова — засновниця студії Balance, ідейна натхненниця першого в Одесі простору гарячої йоги. Її підхід поєднує повагу до фізіології людини, безпечне вибудовування асан та розуміння того, як тепло трансформує ментальний стан."}
              </p>
              <div className="p-6 bg-[#F5F2E9] border-l-2 border-[#B87557] text-sm text-[#293A30] italic font-serif">
                {typedLocale === "ru"
                  ? "«Жарко. Влажно. Местами очень непросто. Но какое же после этого состояние... Моя цель — чтобы каждый человек выходил из зала обновленным, полным сил и в согласии с самим собой»."
                  : "«Жарко. Волого. Місцями дуже непросто. Але яке ж після цього відчуття... Моя мета — щоб кожна людина виходила із залу оновленою, сповненою сил і в злагоді з самою собою»."}
              </div>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <BookingTriggerButton
                  practiceSlug="first-trial"
                  className="px-8 py-4 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer rounded-full"
                >
                  {typedLocale === "ru" ? "Записаться к Марии" : "Записатися до Марії"}
                </BookingTriggerButton>
                {BRAND.founderInstagram && (
                  <a
                    href={BRAND.founderInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-[#293A30]/30 hover:border-[#293A30] text-[#293A30] text-xs uppercase tracking-widest font-medium transition-colors"
                  >
                    Instagram @m8mironova
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 bg-[#293A30] text-[#F5F2E9]">
          <h3 className="font-serif italic text-2xl md:text-3xl text-white mb-4">
            {typedLocale === "ru" ? "Развитие команды Balance" : "Розвиток команди Balance"}
          </h3>
          <p className="text-[#828A73] text-sm md:text-base leading-relaxed max-w-3xl">
            {typedLocale === "ru"
              ? "Мы очень бережно относимся к квалификации преподавателей в нагретом зале. Каждый инструктор проходит обязательную стажировку по технике безопасности, работе с дыханием при высоких температурах и биомеханике мягких правок. Информация о новых тренерах публикуется по мере расширения расписания в нашем Instagram."
              : "Ми дуже дбайливо ставимося до кваліфікації викладачів у нагрітому залі. Кожен інструктор проходить обов'язкове стажування з техніки безпеки, роботи з диханням при високих температурах та біомеханіки м'яких правок. Інформація про нових тренерів публікується в міру розширення розкладу в нашому Instagram."}
          </p>
        </div>
      </div>
    </div>
  );
}
