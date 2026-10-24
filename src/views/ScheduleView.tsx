import { translations, type Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

export function ScheduleView({ locale }: { locale: Locale }) {
  const currentTranslations = translations[locale];

  const scheduleDays = [
    {
      dayName: locale === "uk" ? "Понеділок" : "Monday",
      classes: [
        {
          time: "09:00",
          title: locale === "uk" ? "Гаряча йога: Ранковий баланс" : "Hot Yoga: Morning Balance",
          instructor: "Марія Миронова",
          duration: locale === "uk" ? "75 хв" : "75 min",
          temp: "38–40°C",
        },
        {
          time: "19:00",
          title: locale === "uk" ? "Гаряча йога: Вечірнє перезавантаження" : "Hot Yoga: Evening Reset",
          instructor: "Марія Миронова",
          duration: locale === "uk" ? "75 хв" : "75 min",
          temp: "38–40°C",
        },
      ],
    },
    {
      dayName: locale === "uk" ? "Вівторок" : "Tuesday",
      classes: [
        {
          time: "18:30",
          title: locale === "uk" ? "Гаряча йога: Сила та детокс" : "Hot Yoga: Strength & Detox",
          instructor: "Марія Миронова",
          duration: locale === "uk" ? "75 хв" : "75 min",
          temp: "38–40°C",
        },
      ],
    },
    {
      dayName: locale === "uk" ? "Середа" : "Wednesday",
      classes: [
        {
          time: "09:00",
          title: locale === "uk" ? "Гаряча йога: Ранковий баланс" : "Hot Yoga: Morning Balance",
          instructor: "Марія Миронова",
          duration: locale === "uk" ? "75 хв" : "75 min",
          temp: "38–40°C",
        },
        {
          time: "19:00",
          title: locale === "uk" ? "Гаряча йога: Глибоке розкриття" : "Hot Yoga: Deep Opening",
          instructor: "Марія Миронова",
          duration: locale === "uk" ? "75 хв" : "75 min",
          temp: "38–40°C",
        },
      ],
    },
    {
      dayName: locale === "uk" ? "Четвер" : "Thursday",
      classes: [
        {
          time: "18:30",
          title: locale === "uk" ? "Гаряча йога: Сила та детокс" : "Hot Yoga: Strength & Detox",
          instructor: "Марія Миронова",
          duration: locale === "uk" ? "75 хв" : "75 min",
          temp: "38–40°C",
        },
      ],
    },
    {
      dayName: locale === "uk" ? "П'ятниця" : "Friday",
      classes: [
        {
          time: "09:00",
          title: locale === "uk" ? "Гаряча йога: Ранковий баланс" : "Hot Yoga: Morning Balance",
          instructor: "Марія Миронова",
          duration: locale === "uk" ? "75 хв" : "75 min",
          temp: "38–40°C",
        },
        {
          time: "18:30",
          title: locale === "uk" ? "Гаряча йога: Вечірнє розслаблення" : "Hot Yoga: Evening Relaxation",
          instructor: "Марія Миронова",
          duration: locale === "uk" ? "75 хв" : "75 min",
          temp: "38–40°C",
        },
      ],
    },
    {
      dayName: locale === "uk" ? "Субота" : "Saturday",
      classes: [
        {
          time: "11:00",
          title: locale === "uk" ? "Гаряча йога: Вікенд практика" : "Hot Yoga: Weekend Flow",
          instructor: "Марія Миронова",
          duration: locale === "uk" ? "90 хв" : "90 min",
          temp: "38–40°C",
        },
      ],
    },
    {
      dayName: locale === "uk" ? "Неділя" : "Sunday",
      classes: [
        {
          time: "12:00",
          title: locale === "uk" ? "М'яка гаряча йога та медитація" : "Gentle Hot Yoga & Meditation",
          instructor: "Марія Миронова",
          duration: locale === "uk" ? "75 хв" : "75 min",
          temp: "38°C",
        },
      ],
    },
  ];

  const instructorLabel = locale === "uk" ? "Інструктор" : "Instructor";
  const bookSlotText = locale === "uk" ? "Записатися" : "Book slot";
  const recommendationTitle = locale === "uk" ? "Важливі рекомендації перед заняттям" : "Important class guidelines";
  const recommendationWaterTitle = locale === "uk" ? "Водний баланс" : "Hydration";
  const recommendationWaterText = locale === "uk"
    ? "Пийте воду заздалегідь упродовж дня. Не приходьте зневодненими, візьміть із собою пляшку для води в зал."
    : "Drink water throughout the day. Do not arrive dehydrated, bring a reusable water bottle to the hall.";
  const recommendationFoodTitle = locale === "uk" ? "Легкий шлунок" : "Light digestion";
  const recommendationFoodText = locale === "uk"
    ? "Останній ситний прийом їжі — за 2–3 години до практики. Дозволено легкий фруктовий перекус за 1 годину."
    : "Last hearty meal should be 2–3 hours before practice. A light fruit snack is acceptable 1 hour before.";
  const recommendationWearTitle = locale === "uk" ? "Зручний одяг" : "Comfortable wear";
  const recommendationWearText = locale === "uk"
    ? "Вибирайте легкий спортивний одяг, що дихає та не сковує амплітуду рухів."
    : "Choose lightweight, breathable sportswear that does not restrict your movement range.";

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
              className="bg-white border border-[#293A30]/10 p-6 md:p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between border-b border-[#293A30]/10 pb-4 mb-6">
                <h2 className="font-serif italic text-2xl md:text-3xl text-[#1A2019]">
                  {singleDay.dayName}
                </h2>
                <span className="text-xs uppercase tracking-widest text-[#828A73]">
                  {singleDay.classes.length} {locale === "uk" ? "класи" : "classes"}
                </span>
              </div>

              <div className="divide-y divide-[#293A30]/10">
                {singleDay.classes.map((singleClass, classIndex) => (
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
                        <span className="px-2.5 py-1 bg-[#F5F2E9] rounded-none border border-[#293A30]/10">
                          {singleClass.duration}
                        </span>
                        <span className="px-2.5 py-1 bg-[#F5F2E9] rounded-none border border-[#293A30]/10">
                          {singleClass.temp}
                        </span>
                      </div>
                      <BookingTriggerButton
                        timeSlot={`${singleDay.dayName} ${singleClass.time}`}
                        className="px-5 py-2.5 bg-[#293A30] hover:bg-[#B87557] text-[#F5F2E9] text-xs uppercase tracking-widest transition-colors cursor-pointer"
                      >
                        {bookSlotText}
                      </BookingTriggerButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border border-[#293A30]/20 p-8 md:p-12 bg-white">
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
