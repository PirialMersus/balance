"use client";

import { translations, Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";
import { useBooking } from "@/components/booking/BookingContext";

interface TeachersSectionProps {
  locale: Locale;
}

export default function TeachersSection({ locale }: TeachersSectionProps) {
  const sectionTranslations = translations[locale].teachers;
  const { openBooking } = useBooking();

  return (
    <section className="bg-[#222923] py-28 md:py-36 text-[#F5F2E9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-[#828A73] text-xs tracking-widest uppercase mb-4 font-medium">
            {sectionTranslations.title}
          </p>
          <div className="w-16 h-px bg-[#B87557]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] bg-[#1A2019]">
              <img
                src="/images/teacher-maria.jpg"
                alt={BRAND.founderName}
                width={800}
                height={1067}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div
              className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#B87557]/30 rounded-2xl hidden lg:block -z-10"
              aria-hidden="true"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#B87557] font-semibold">
              {sectionTranslations.founder}
            </span>

            <h2
              className="font-serif italic text-white leading-tight"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              {BRAND.founderName}
            </h2>

            <div className="w-12 h-px bg-[#B87557]" />

            <p className="text-[#F5F2E9]/80 text-base md:text-lg leading-relaxed font-light">
              {locale === "ru"
                ? "Основательница и ведущий инструктор Balance Hot Yoga в Одессе. Мария создала первое специализированное пространство горячей йоги в городе, объединив методику глубокого теплового прогрева, анатомически безопасную отстройку асан и внимательное отношение к дыханию."
                : "Засновниця та провідний інструктор Balance Hot Yoga в Одесі. Марія створила перший спеціалізований простір гарячої йоги в місті, поєднавши методику глибокого теплового прогріву, анатомічно безпечне вибудовування асан і уважне ставлення до дихання."}
            </p>

            <div className="p-6 rounded-xl bg-[#1A2019] border-l-4 border-[#B87557] text-sm md:text-base italic font-serif text-[#F5F2E9]/90">
              {locale === "ru"
                ? "«Жарко. Влажно. Местами очень непросто. Но какое же после этого состояние... Регулярность важнее интенсивности — тело обязательно ответит благодарностью»."
                : "«Жарко. Волого. Місцями дуже непросто. Але яке ж після цього відчуття... Регулярність важливіша за інтенсивність — тіло обов'язково відповість вдячністю»."}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={() => openBooking("first-trial")}
                className="px-8 py-3.5 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium rounded-full transition-colors shadow-lg cursor-pointer"
              >
                {locale === "ru" ? "Записаться на занятие" : "Записатися на заняття"}
              </button>
              {BRAND.founderInstagram && (
                <a
                  href={BRAND.founderInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 hover:border-white text-white text-xs uppercase tracking-widest font-medium rounded-full transition-colors"
                >
                  <span>Instagram @m8mironova</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
