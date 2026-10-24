import { type Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";

export function PrivacyView({ locale }: { locale: Locale }) {
  const pageTitle = locale === "uk" ? "Політика конфіденційності" : "Privacy Policy";
  const editionDate = locale === "uk" ? "Редакція від 24 жовтня 2026 р." : "Effective October 24, 2026";

  const sectionOneTitle = locale === "uk" ? "1. Загальні положення" : "1. General Provisions";
  const sectionOneText = locale === "uk"
    ? `Ця Політика конфіденційності визначає порядок обробки та захисту персональних даних користувачів сайту студії «${BRAND.fullName}» (${BRAND.instagramHandle}), розташованої в м. Одеса.`
    : `This Privacy Policy governs the processing and protection of personal information provided by visitors to the website of «${BRAND.fullName}» studio (${BRAND.instagramHandle}), located in Odesa.`;

  const sectionTwoTitle = locale === "uk" ? "2. Які дані ми обробляємо" : "2. Information We Process";
  const sectionTwoIntro = locale === "uk"
    ? "При взаємодії із сайтом та надсиланні запиту на бронювання можуть оброблятися такі дані:"
    : "When interacting with this website and requesting class bookings, the following information may be handled:";
  const sectionTwoItems = locale === "uk"
    ? [
        "Ім'я користувача;",
        "Контактний телефон або нікнейм в Instagram;",
        "Обраний час та напрям практики;",
        "Технічні дані браузера (cookies, IP-адреса, роздільна здатність екрана для коректного відображення сторінок).",
      ]
    : [
        "User name;",
        "Contact telephone number or Instagram handle;",
        "Preferred time slot and selected practice type;",
        "Technical browser metrics (cookies, IP address, screen resolution for responsive rendering).",
      ];

  const sectionThreeTitle = locale === "uk" ? "3. Мета обробки даних" : "3. Purpose of Processing";
  const sectionThreeIntro = locale === "uk"
    ? "Ми використовуємо ваші дані виключно з метою:"
    : "We process your data exclusively for:";
  const sectionThreeItems = locale === "uk"
    ? [
        "Організації запису на заняття в нагрітому залі;",
        "Зворотного зв'язку через Instagram Direct щодо наявності вільних місць;",
        "Надання актуальної інформації про розклад та зміни в тарифах;",
        "Поліпшення швидкодії та зручності користування сайтом.",
      ]
    : [
        "Scheduling and reserving class slots in the heated studio;",
        "Communicating via Instagram Direct regarding available spaces;",
        "Providing up-to-date schedule information and tariff adjustments;",
        "Improving overall website usability and page load performance.",
      ];

  const sectionFourTitle = locale === "uk" ? "4. Захист та передача третім особам" : "4. Data Security and Third Parties";
  const sectionFourText = locale === "uk"
    ? "Студія не передає ваші персональні дані стороннім комерційним організаціям або рекламодавцям. Усі канали зв'язку через Instagram Direct регулюються стандартами безпеки та політикою конфіденційності платформи Meta."
    : "The studio does not transfer or sell your personal details to third-party marketing entities or advertisers. Communication through Instagram Direct adheres to Meta platform security standards and privacy protocols.";

  const sectionFiveTitle = locale === "uk" ? "5. Контакти з питань конфіденційності" : "5. Privacy Inquiries";
  const sectionFiveText = locale === "uk"
    ? `З будь-яких питань щодо зміни, видалення або уточнення ваших даних ви завжди можете написати нам в Instagram Direct: ${BRAND.instagramHandle}.`
    : `For any requests regarding review, modification, or erasure of your personal information, please message us in Instagram Direct: ${BRAND.instagramHandle}.`;

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
            {pageTitle}
          </h1>
          <p className="text-xs text-[#828A73]">
            {editionDate}
          </p>
        </div>

        <div className="bg-white border border-[#293A30]/10 p-8 md:p-12 space-y-8 text-sm md:text-base leading-relaxed text-[#293A30]">
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
