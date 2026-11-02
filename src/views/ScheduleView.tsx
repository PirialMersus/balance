import { translations, type Locale } from "@/lib/translations";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

function formatClassCount(count: number, locale: Locale): string {
  if (locale === "uk") {
    if (count === 1) return "1 клас";
    if (count >= 2 && count <= 4) return `${count} класи`;
    return `${count} класів`;
  }
  if (locale === "ru") {
    if (count === 1) return "1 класс";
    if (count >= 2 && count <= 4) return `${count} класса`;
    return `${count} классов`;
  }
  return count === 1 ? "1 class" : `${count} classes`;
}

export function ScheduleView({ locale }: { locale: Locale }) {
  const currentTranslations = translations[locale];

  const instructorName = locale === "en" ? "Maria Mironova" : (locale === "ru" ? "Мария Миронова" : "Марія Миронова");

  const durationText = locale === "en" ? "75 min" : (locale === "ru" ? "75 мин" : "75 хв");
  const durationTextLong = locale === "en" ? "90 min" : (locale === "ru" ? "90 мин" : "90 хв");

  const scheduleDays = [
    {
      dayName: locale === "uk" ? "Понеділок" : (locale === "ru" ? "Понедельник" : "Monday"),
      classes: [
        {
          time: "09:00",
          title: locale === "uk" ? "Гаряча йога: Ранковий баланс" : (locale === "ru" ? "Горячая йога: Утренний баланс" : "Hot Yoga: Morning Balance"),
          instructor: instructorName,
          duration: durationText,
          temp: "38–40°C",
        },
        {
          time: "19:00",
          title: locale === "uk" ? "Гаряча йога: Вечірнє перезавантаження" : (locale === "ru" ? "Горячая йога: Вечерняя перезагрузка" : "Hot Yoga: Evening Reset"),
          instructor: instructorName,
          duration: durationText,
          temp: "38–40°C",
        },
      ],
    },
    {
      dayName: locale === "uk" ? "Вівторок" : (locale === "ru" ? "Вторник" : "Tuesday"),
      classes: [
        {
          time: "18:30",
          title: locale === "uk" ? "Гаряча йога: Сила та детокс" : (locale === "ru" ? "Горячая йога: Сила и детокс" : "Hot Yoga: Strength & Detox"),
          instructor: instructorName,
          duration: durationText,
          temp: "38–40°C",
        },
      ],
    },
    {
      dayName: locale === "uk" ? "Середа" : (locale === "ru" ? "Среда" : "Wednesday"),
      classes: [
        {
          time: "09:00",
          title: locale === "uk" ? "Гаряча йога: Ранковий баланс" : (locale === "ru" ? "Горячая йога: Утренний баланс" : "Hot Yoga: Morning Balance"),
          instructor: instructorName,
          duration: durationText,
          temp: "38–40°C",
        },
        {
          time: "19:00",
          title: locale === "uk" ? "Гаряча йога: Глибоке розкриття" : (locale === "ru" ? "Горячая йога: Глубокое раскрытие" : "Hot Yoga: Deep Opening"),
          instructor: instructorName,
          duration: durationText,
          temp: "38–40°C",
        },
      ],
    },
    {
      dayName: locale === "uk" ? "Четвер" : (locale === "ru" ? "Четверг" : "Thursday"),
      classes: [
        {
          time: "18:30",
          title: locale === "uk" ? "Гаряча йога: Сила та детокс" : (locale === "ru" ? "Горячая йога: Сила и детокс" : "Hot Yoga: Strength & Detox"),
          instructor: instructorName,
          duration: durationText,
          temp: "38–40°C",
        },
      ],
    },
    {
      dayName: locale === "uk" ? "П'ятниця" : (locale === "ru" ? "Пятница" : "Friday"),
      classes: [
        {
          time: "09:00",
          title: locale === "uk" ? "Гаряча йога: Ранковий баланс" : (locale === "ru" ? "Горячая йога: Утренний баланс" : "Hot Yoga: Morning Balance"),
          instructor: instructorName,
          duration: durationText,
          temp: "38–40°C",
        },
        {
          time: "18:30",
          title: locale === "uk" ? "Гаряча йога: Вечірнє розслаблення" : (locale === "ru" ? "Горячая йога: Вечернее расслабление" : "Hot Yoga: Evening Relaxation"),
          instructor: instructorName,
          duration: durationText,
          temp: "38–40°C",
        },
      ],
    },
    {
      dayName: locale === "uk" ? "Субота" : (locale === "ru" ? "Суббота" : "Saturday"),
      classes: [
        {
          time: "11:00",
          title: locale === "uk" ? "Гаряча йога: Вікенд практика" : (locale === "ru" ? "Горячая йога: Уикенд практика" : "Hot Yoga: Weekend Flow"),
          instructor: instructorName,
          duration: durationTextLong,
          temp: "38–40°C",
        },
      ],
    },
    {
      dayName: locale === "uk" ? "Неділя" : (locale === "ru" ? "Воскресенье" : "Sunday"),
      classes: [
        {
          time: "12:00",
          title: locale === "uk" ? "М'яка гаряча йога та медитація" : (locale === "ru" ? "Мягкая горячая йога и медитация" : "Gentle Hot Yoga & Meditation"),
          instructor: instructorName,
          duration: durationText,
          temp: "38°C",
        },
      ],
    },
  ];

  const instructorLabel = locale === "en" ? "Instructor" : (locale === "ru" ? "Инструктор" : "Інструктор");
  const bookSlotText = locale === "en" ? "Book slot" : (locale === "ru" ? "Записаться" : "Записатися");
  const recommendationTitle = locale === "en"
    ? "Important class guidelines"
    : (locale === "ru" ? "Важные рекомендации перед занятием" : "Важливі рекомендації перед заняттям");
  const recommendationWaterTitle = locale === "en" ? "Hydration" : (locale === "ru" ? "Водный баланс" : "Водний баланс");
  const recommendationWaterText = locale === "en"
    ? "Drink water throughout the day. Do not arrive dehydrated, bring a reusable water bottle to the hall."
    : (locale === "ru"
      ? "Пейте воду заранее в течение дня. Не приходите обезвоженными, обязательно возьмите бутылочку воды в зал."
      : "Пийте воду заздалегідь упродовж дня. Не приходьте зневодненими, візьміть із собою пляшку для води в зал.");

  const recommendationFoodTitle = locale === "en" ? "Light digestion" : (locale === "ru" ? "Легкий желудок" : "Легкий шлунок");
  const recommendationFoodText = locale === "en"
    ? "Last hearty meal should be 2–3 hours before practice. A light fruit snack is acceptable 1 hour before."
    : (locale === "ru"
      ? "Плотный прием пищи лучше завершить за 2–3 часа до практики. За час допустим легкий фруктовый перекус."
      : "Останній ситний прийом їжі — за 2–3 години до практики. Дозволено легкий фруктовий перекус за 1 годину.");

  const recommendationWearTitle = locale === "en" ? "Comfortable wear" : (locale === "ru" ? "Удобная одежда" : "Зручний одяг");
  const recommendationWearText = locale === "en"
    ? "Choose lightweight, breathable sportswear that does not restrict your movement range."
    : (locale === "ru"
      ? "Выбирайте легкую дышащую спортивную форму, не сковывающую движения."
      : "Вибирайте легкий спортивний одяг, що дихає та не сковує амплітуду рухів.");

  const locationBadge = locale === "en" ? "Odesa · Odisey Complex" : (locale === "ru" ? "Одесса · ЖК «Одиссей»" : "Одеса · ЖК «Одісей»");

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
            {currentTranslations.schedule.title}
          </h1>
          <p className="text-[#293A30] text-lg leading-relaxed">
            {currentTranslations.schedule.subtitle}
          </p>
        </div>

        <div className="space-y-8 mb-20">
          {scheduleDays.map((singleDay, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-white border border-[#293A30]/10 p-6 md:p-8 transition-shadow hover:shadow-md rounded-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#293A30]/10 pb-4 mb-6">
                <h2 className="font-serif italic text-2xl md:text-3xl text-[#1A2019]">
                  {singleDay.dayName}
                </h2>
                <span className="text-xs uppercase tracking-widest text-[#828A73]">
                  {formatClassCount(singleDay.classes.length, locale)}
                </span>
              </div>

              <div className="divide-y divide-[#293A30]/10">
                {singleDay.classes.map((singleClass, classIndex) => {
                  const classFormattedSlot = `${singleDay.dayName}, ${singleClass.time} (${singleClass.title})`;

                  return (
                    <div
                      key={classIndex}
                      className="py-5 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="flex items-start md:items-center gap-6">
                        <span className="font-mono text-2xl font-light text-[#B87557] w-20">
                          {singleClass.time}
                        </span>
                        <div>
                          <h3 className="text-lg font-medium text-[#1A2019] mb-1">
                            {singleClass.title}
                          </h3>
                          <p className="text-sm text-[#79776E]">
                            {instructorLabel}: {singleClass.instructor}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 self-end md:self-center">
                        <div className="flex items-center gap-2 text-xs text-[#828A73]">
                          <span className="px-2.5 py-1 bg-[#F5F2E9] rounded-md border border-[#293A30]/10">
                            {singleClass.duration}
                          </span>
                          <span className="px-2.5 py-1 bg-[#F5F2E9] rounded-md border border-[#293A30]/10">
                            {singleClass.temp}
                          </span>
                        </div>
                        <BookingTriggerButton
                          timeSlot={classFormattedSlot}
                          className="px-5 py-2.5 bg-[#293A30] hover:bg-[#B87557] text-[#F5F2E9] text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-full min-h-[40px]"
                        >
                          {bookSlotText}
                        </BookingTriggerButton>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="border border-[#293A30]/20 p-8 md:p-12 bg-white rounded-2xl shadow-sm">
          <h2 className="font-serif italic text-2xl md:text-3xl text-[#1A2019] mb-4">
            {recommendationTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#B87557] mb-2">
                01 / {recommendationWaterTitle}
              </div>
              <p className="text-sm text-[#293A30] leading-relaxed">
                {recommendationWaterText}
              </p>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#B87557] mb-2">
                02 / {recommendationFoodTitle}
              </div>
              <p className="text-sm text-[#293A30] leading-relaxed">
                {recommendationFoodText}
              </p>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#B87557] mb-2">
                03 / {recommendationWearTitle}
              </div>
              <p className="text-sm text-[#293A30] leading-relaxed">
                {recommendationWearText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
