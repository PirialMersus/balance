import { translations, type Locale } from "@/lib/translations";
import { BRAND, getAssetPath } from "@/lib/brand";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

export function StudioView({ locale }: { locale: Locale }) {
  const currentTranslations = translations[locale];

  const pageTitle = locale === "uk" ? "Простір студії" : "Studio Space";
  const pageSubtitle = locale === "uk"
    ? "Особливе середовище, де м'яке інфрачервоне тепло та контрольована вологість створюють умови для глибокої практики"
    : "A dedicated sanctuary where gentle infrared warmth and optimal humidity create ideal conditions for transformative practice";

  const philosophyHeading = locale === "uk" ? "Філософія Balance" : "The Balance Philosophy";
  const philosophyText = locale === "uk"
    ? "Ми віримо, що йога повинна зцілювати та розкривати природні ресурси тіла, а не виснажувати його. Завдяки нагріванню до 38–40°C ми знижуємо ризик побутових травм та дозволяємо кожному учаснику безпечно відчути амплітуду свого тіла."
    : "We believe yoga should heal and unlock your body's intrinsic energy rather than deplete it. Practicing in ambient heat of 38–40°C minimizes strain, accelerates circulation, and lets you access your fullest range of motion in safe alignment.";

  const comfortHeading = locale === "uk" ? "Продумано до дрібниць" : "Mindful details for your comfort";

  const cityLabel = locale === "uk" ? "Одеса" : "Odesa";
  const quoteAuthor = locale === "uk" ? "Марія Миронова, засновниця" : "Maria Mironova, founder";
  const quoteText = locale === "uk"
    ? "«Простір створений для того, щоб ви залишили за дверима міський шум і зосередилися на головному — контакті із собою»"
    : "“This space was created so that you leave city noise behind the door and focus on what truly matters — contact with yourself”";

  const storyParagraphOne = locale === "uk"
    ? "В Одесі багато хто шукав простір, де йога перестає бути рутинним фітнесом і повертає людині контакт із власним тілом. Спека знімає м'язові затиски швидше за будь-які традиційні розминки, а необхідність дихати усвідомлено звільняє голову від повсякденної метушні."
    : "In Odesa, many were looking for a sanctuary where yoga ceases to be routine fitness and restores a person's genuine connection with their body. The heat dissolves muscle tension faster than any traditional warm-up, and the necessity to breathe consciously clears the mind of daily bustle.";

  const storyParagraphTwo = locale === "uk"
    ? "Засновниця студії — Марія Миронова — створювала Balance як місце сили, турботи та теплої спільноти однодумців."
    : "The founder of the studio — Maria Mironova — created Balance as a sanctuary of strength, mindful care, and a warm community of like-minded souls.";

  const comfortFeatures = [
    {
      title: locale === "uk" ? "Кліматична система 38–40°C" : "Climate System 38–40°C",
      text:
        locale === "uk"
          ? "Спеціальні інфрачервоні панелі рівномірно прогрівають простір та м'які тканини без відчуття духоти й сухості повітря."
          : "Specialized infrared panels gently and evenly warm the room and deep tissues without stifling air or dryness.",
    },
    {
      title: locale === "uk" ? "Потужна вентиляція" : "High-Performance Air Exchange",
      text:
        locale === "uk"
          ? "Безперервний приплив свіжого очищеного кисню забезпечує легке та глибоке дихання впродовж усього заняття."
          : "Continuous inflow of freshly filtered oxygen ensures easy, deep, and revitalizing breathing throughout class.",
    },
    {
      title: locale === "uk" ? "Камерні групи" : "Intimate Groups",
      text:
        locale === "uk"
          ? "Обмежена кількість місць у залі гарантує особистий простір та персональну увагу викладача до кожного руху."
          : "Strictly limited class capacity guarantees personal space and undivided attention from the teacher to every movement.",
    },
    {
      title: locale === "uk" ? "Зона відпочинку та чай" : "Lounge & Tea Ceremony",
      text:
        locale === "uk"
          ? "Після практики можна неспішно охолонути, відновити водний баланс натуральним трав'яним чаєм та поспілкуватися."
          : "After practice you can cool down unhurriedly, restore hydration with natural herbal tea, and connect with peers.",
    },
  ];

  return (
    <div className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#B87557] mb-4 font-medium">
            Balance Hot Yoga · {cityLabel}
          </p>
          <h1
            className="font-serif italic text-[#1A2019] leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
          >
            {pageTitle}
          </h1>
          <p className="text-[#293A30] text-lg leading-relaxed">
            {pageSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="space-y-6 text-[#293A30] text-lg leading-relaxed">
            <h2 className="font-serif italic text-3xl md:text-4xl text-[#1A2019]">
              {philosophyHeading}
            </h2>
            <p>{philosophyText}</p>
            <p>{storyParagraphOne}</p>
            <p className="text-base text-[#79776E]">{storyParagraphTwo}</p>
          </div>

          <div className="relative">
            <img
              src={getAssetPath("/images/studio-atmosphere.webp")}
              alt="Balance Hot Yoga Atmosphere"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover border border-[#293A30]/10 shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 p-6 bg-[#293A30] text-[#F5F2E9] hidden sm:block border-l-4 border-[#B87557] max-w-sm">
              <p className="font-serif italic text-sm mb-1">{quoteText}</p>
              <span className="text-[10px] uppercase tracking-widest text-[#B87557]">
                {quoteAuthor}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif italic text-3xl md:text-4xl text-[#1A2019] mb-12 text-center">
            {comfortHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comfortFeatures.map((comfortItem, featureIndex) => (
              <div
                key={featureIndex}
                className="bg-white border border-[#293A30]/10 p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#B87557] block mb-4">
                    0{featureIndex + 1}
                  </span>
                  <h3 className="font-serif italic text-xl text-[#1A2019] mb-3">
                    {comfortItem.title}
                  </h3>
                  <p className="text-sm text-[#79776E] leading-relaxed">
                    {comfortItem.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#293A30] text-[#F5F2E9] p-10 md:p-16 text-center">
          <h2 className="font-serif italic text-3xl md:text-5xl mb-6">
            {currentTranslations.hero.headline.replace("\n", " ")}
          </h2>
          <p className="text-[#EAE5D9] text-lg max-w-2xl mx-auto mb-8">
            {currentTranslations.hero.sub}
          </p>
          <BookingTriggerButton className="inline-block px-10 py-4 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer">
            {currentTranslations.nav.book}
          </BookingTriggerButton>
        </div>
      </div>
    </div>
  );
}
