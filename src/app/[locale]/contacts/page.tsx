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
  const contactsTranslations = translations[typedLocale].contacts;
  const seoMetadata = buildSeoMeta({
    locale: typedLocale,
    pageTitle: contactsTranslations.title,
    pageDescription: `${BRAND.fullName} — ${BRAND.city}. ${contactsTranslations.phoneNote}`,
    path: "/contacts",
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

export default async function ContactsPage({
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
            Balance Hot Yoga · {BRAND.city}
          </p>
          <h1
            className="font-serif italic text-[#1A2019] leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
          >
            {pageTranslations.contacts.title}
          </h1>
          <p className="text-[#293A30] text-lg leading-relaxed">
            {typedLocale === "ru"
              ? "Мы на связи каждый день. Все вопросы, бронирование мест и индивидуальные консультации проходят напрямую через наш Instagram."
              : "Ми на зв'язку щодня. Усі питання, бронювання місць та індивідуальні консультації проходять безпосередньо через наш Instagram."}
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
                {typedLocale === "ru"
                  ? "Основной и самый быстрый канал связи. Напишите нам сообщение, и мы ответим в течение нескольких минут."
                  : "Основний і найшвидший канал зв'язку. Напишіть нам повідомлення, і ми відповімо протягом декількох хвилин."}
              </p>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-4 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium text-center transition-colors"
              >
                {pageTranslations.contacts.booking}
              </a>
            </div>

            <div className="p-8 bg-white border border-[#293A30]/10 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#828A73] font-semibold block mb-2">
                {pageTranslations.contacts.address}
              </span>
              <h3 className="font-serif text-xl text-[#1A2019] mb-2">
                {BRAND.city}, {BRAND.country}
              </h3>
              <p className="text-sm text-[#79776E] leading-relaxed">
                {typedLocale === "ru"
                  ? "Точный адрес студии направляется индивидуально при записи в Direct, чтобы сохранять камерность пространства и комфорт практикующих."
                  : "Точна адреса студії надсилається індивідуально при записі в Direct, щоб зберігати камерність простору та комфорт практикуючих."}
              </p>
            </div>

            {BRAND.founderInstagram && (
              <div className="p-8 bg-[#293A30] text-[#F5F2E9]">
                <span className="text-xs uppercase tracking-widest text-[#D4793A] font-semibold block mb-2">
                  {pageTranslations.teachers.founder}
                </span>
                <h3 className="font-serif text-xl text-white mb-2">
                  {BRAND.founderName}
                </h3>
                <p className="text-xs text-[#828A73] mb-4 leading-relaxed">
                  {typedLocale === "ru"
                    ? "По вопросам сотрудничества и персональных тренировок вы можете написать напрямую основательнице."
                    : "З питань співпраці та персональних тренувань ви можете написати безпосередньо засновниці."}
                </p>
                <a
                  href={BRAND.founderInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F5F2E9] hover:text-[#D4793A] transition-colors underline"
                >
                  Instagram @m8mironova →
                </a>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 bg-[#222923] p-8 md:p-12 text-[#F5F2E9] flex flex-col justify-between">
            <div>
              <div className="w-12 h-px bg-[#B87557] mb-6" />
              <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-4">
                {typedLocale === "ru" ? "Формат связи и записи" : "Формат зв'язку та запису"}
              </h2>
              <p className="text-sm text-[#828A73] leading-relaxed mb-8">
                {typedLocale === "ru"
                  ? "Студия Balance открылась осенью 2026 года. Мы ценим личный контакт с каждым гостем, поэтому не используем безликие автоматические боты. Все диалоги ведет лично команда студии."
                  : "Студія Balance відкрилася восени 2026 року. Ми цінуємо особистий контакт із кожним гостем, тому не використовуємо безликих автоматичних ботів. Усі діалоги веде особисто команда студії."}
              </p>

              <div className="space-y-6 border-t border-[#828A73]/20 pt-6 text-sm">
                <div className="flex items-start gap-4">
                  <span className="text-[#B87557] text-lg font-serif">01</span>
                  <div>
                    <p className="font-medium text-white mb-1">
                      {typedLocale === "ru" ? "Часы ответов" : "Години відповідей"}
                    </p>
                    <p className="text-[#828A73] text-xs">
                      {typedLocale === "ru"
                        ? "Ежедневно с 08:00 до 21:00. В нерабочее время отвечаем утром следующего дня."
                        : "Щодня з 08:00 до 21:00. У неробочий час відповідаємо вранці наступного дня."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-[#B87557] text-lg font-serif">02</span>
                  <div>
                    <p className="font-medium text-white mb-1">
                      {typedLocale === "ru" ? "Подтверждение мест" : "Підтвердження місць"}
                    </p>
                    <p className="text-[#828A73] text-xs">
                      {typedLocale === "ru"
                        ? "За 2 часа до начала занятия мы уточняем ваш приход, чтобы подготовить температурный режим зала."
                        : "За 2 години до початку заняття ми уточнюємо ваш прихід, щоб підготувати температурний режим залу."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-[#B87557] text-lg font-serif">03</span>
                  <div>
                    <p className="font-medium text-white mb-1">
                      {typedLocale === "ru" ? "Локация в Одессе" : "Локація в Одесі"}
                    </p>
                    <p className="text-[#828A73] text-xs">
                      {typedLocale === "ru"
                        ? "Удобная транспортная доступность, парковка рядом со студией."
                        : "Зручна транспортна доступність, парковка поруч зі студією."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium transition-colors"
              >
                <span>{typedLocale === "ru" ? "Написать в Instagram Direct" : "Написати в Instagram Direct"}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
