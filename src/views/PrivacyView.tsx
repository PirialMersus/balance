import { type Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";

export function PrivacyView({ locale }: { locale: Locale }) {
  const pageTitle = locale === "en" ? "Privacy Policy" : (locale === "ru" ? "Политика конфиденциальности" : "Політика конфіденційності");
  const editionDate = locale === "en" ? "Effective October 24, 2026" : (locale === "ru" ? "Редакция от 24 октября 2026 г." : "Редакція від 24 жовтня 2026 р.");
  const city = locale === "en" ? BRAND.cityEn : (locale === "ru" ? BRAND.cityRu : BRAND.city);

  const sectionOneTitle = locale === "en" ? "1. General Provisions" : (locale === "ru" ? "1. Общие положения" : "1. Загальні положення");
  const sectionOneText = locale === "en"
    ? `This Privacy Policy governs the processing and protection of personal information provided by visitors to the website of «${BRAND.fullName}» studio (${BRAND.instagramHandle}), located in ${city}.`
    : (locale === "ru"
      ? `Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта студии «${BRAND.fullName}» (${BRAND.instagramHandle}), расположенной в г. ${city}.`
      : `Ця Політика конфіденційності визначає порядок обробки та захисту персональних даних користувачів сайту студії «${BRAND.fullName}» (${BRAND.instagramHandle}), розташованої в м. ${city}.`);

  const sectionTwoTitle = locale === "en" ? "2. Information We Process" : (locale === "ru" ? "2. Какие данные мы обрабатываем" : "2. Які дані ми обробляємо");
  const sectionTwoIntro = locale === "en"
    ? "When interacting with this website and requesting class bookings, the following information may be handled:"
    : (locale === "ru"
      ? "При взаимодействии с сайтом и отправке запроса на бронирование могут собираться следующие данные:"
      : "При взаємодії із сайтом та надсиланні запиту на бронювання можуть оброблятися такі дані:");

  const sectionTwoItems = locale === "en"
    ? [
        "User name;",
        "Contact telephone number or Instagram handle;",
        "Preferred time slot and selected practice type;",
        "Technical browser metrics (cookies, IP address, screen resolution for responsive rendering).",
      ]
    : (locale === "ru"
      ? [
          "Имя пользователя;",
          "Контактный телефон или никнейм в Instagram / Telegram;",
          "Выбранное время и направление практики;",
          "Технические данные браузера (cookies, IP-адрес для корректного отображения).",
        ]
      : [
          "Ім'я користувача;",
          "Контактний телефон або нікнейм в Instagram;",
          "Обраний час та напрям практики;",
          "Технічні дані браузера (cookies, IP-адреса, роздільна здатність екрана для коректного відображення сторінок).",
        ]);

  const sectionThreeTitle = locale === "en" ? "3. Purpose of Processing" : (locale === "ru" ? "3. Цели обработки данных" : "3. Мета обробки даних");
  const sectionThreeIntro = locale === "en"
    ? "We process your data exclusively for:"
    : (locale === "ru"
      ? "Мы используем ваши данные исключительно в целях:"
      : "Ми використовуємо ваші дані виключно з метою:");

  const sectionThreeItems = locale === "en"
    ? [
        "Scheduling and reserving class slots in the heated studio;",
        "Communicating via Instagram Direct regarding available spaces;",
        "Providing up-to-date schedule information and tariff adjustments;",
        "Improving overall website usability and page load performance.",
      ]
    : (locale === "ru"
      ? [
          "Организации записи на занятия в нагретом зале;",
          "Обратной связи через Instagram Direct о наличии свободных мест;",
          "Предоставления актуальной информации о расписании и тарифах;",
          "Улучшения быстродействия и удобства сайта.",
        ]
      : [
          "Організації запису на заняття в нагрітому залі;",
          "Зворотного зв'язку через Instagram Direct щодо наявності вільних місць;",
          "Надання актуальної інформації про розклад та зміни в тарифах;",
          "Поліпшення швидкодії та зручності користування сайтом.",
        ]);

  const sectionFourTitle = locale === "en" ? "4. Data Security and Third Parties" : (locale === "ru" ? "4. Защита и передача третьим лицам" : "4. Захист та передача третім особам");
  const sectionFourText = locale === "en"
    ? "The studio does not transfer or sell your personal details to third-party marketing entities or advertisers. Communication through Instagram Direct adheres to Meta platform security standards and privacy protocols."
    : (locale === "ru"
      ? "Студия не передает ваши персональные данные сторонним коммерческим организациям или рекламодателям. Все коммуникации через Instagram Direct регулируются стандартами безопасности платформы Meta."
      : "Студія не передає ваші персональні дані стороннім комерційним організаціям або рекламодавцям. Усі канали зв'язку через Instagram Direct регулюються стандартами безпеки та політикою конфіденційності платформи Meta.");

  const sectionFiveTitle = locale === "en" ? "5. Privacy Inquiries" : (locale === "ru" ? "5. Контакты по вопросам конфиденциальности" : "5. Контакти з питань конфіденційності");
  const sectionFiveText = locale === "en"
    ? `For any requests regarding review, modification, or erasure of your personal information, please message us in Instagram Direct: ${BRAND.instagramHandle}.`
    : (locale === "ru"
      ? `По любым вопросам изменения, удаления или уточнения ваших данных вы всегда можете написать нам в Instagram Direct: ${BRAND.instagramHandle}.`
      : `З будь-яких питань щодо зміни, видалення або уточнення ваших даних ви завжди можете написати нам в Instagram Direct: ${BRAND.instagramHandle}.`);

  return (
    <div className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#B87557] mb-3 font-medium">
            Balance Hot Yoga · {city}
          </p>
          <h1
            className="font-serif italic text-[#1A2019] leading-tight mb-4"
            style={{ fontSize: "clamp(34px, 5vw, 54px)" }}
          >
            {pageTitle}
          </h1>
          <p className="text-xs text-[#828A73]">
            {editionDate}
          </p>
        </div>

        <div className="bg-white border border-[#293A30]/10 p-8 md:p-12 space-y-8 text-sm md:text-base leading-relaxed text-[#293A30] rounded-2xl shadow-sm">
          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#1A2019] mb-3">
              {sectionOneTitle}
            </h2>
            <p>{sectionOneText}</p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#1A2019] mb-3">
              {sectionTwoTitle}
            </h2>
            <p className="mb-2">{sectionTwoIntro}</p>
            <ul className="list-disc pl-6 space-y-1">
              {sectionTwoItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#1A2019] mb-3">
              {sectionThreeTitle}
            </h2>
            <p className="mb-2">{sectionThreeIntro}</p>
            <ul className="list-disc pl-6 space-y-1">
              {sectionThreeItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#1A2019] mb-3">
              {sectionFourTitle}
            </h2>
            <p>{sectionFourText}</p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#1A2019] mb-3">
              {sectionFiveTitle}
            </h2>
            <p>{sectionFiveText}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
