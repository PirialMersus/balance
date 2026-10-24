import { notFound } from "next/navigation";
import { translations, Locale } from "@/lib/translations";
import { COLORS, getAssetPath } from "@/lib/brand";
import { practices } from "@/lib/practices";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

export function PracticesView({ locale }: { locale: Locale }) {
  const dictionary = translations[locale];
  const hotYoga = practices.find((practiceItem) => practiceItem.slug === "hot-yoga");
  if (!hotYoga) notFound();

  return (
    <main style={{ background: COLORS.warmCream, minHeight: "100vh" }}>
      <section
        style={{ background: COLORS.deepOlive }}
        className="relative overflow-hidden"
      >
        <div className="relative h-[70vh] min-h-[480px]">
          <img
            src={getAssetPath("/images/hot-yoga-class.jpg")}
            alt={hotYoga.name[locale]}
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, rgba(41,58,48,0.3) 0%, rgba(26,32,25,0.85) 100%)`,
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-4xl mx-auto">
            <h1
              className="text-5xl md:text-7xl font-bold mb-4 leading-tight font-serif italic"
              style={{ color: COLORS.warmCream }}
            >
              {dictionary.practices.title}
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl font-light"
              style={{ color: COLORS.mutedGreen }}
            >
              {dictionary.practices.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <p
          className="text-lg md:text-xl leading-relaxed mb-10 font-light"
          style={{ color: COLORS.darkGraphite }}
        >
          {hotYoga.fullDescription[locale]}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div
            className="rounded-2xl p-5"
            style={{ background: COLORS.deepOlive }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: COLORS.mutedGreen }}
            >
              {locale === "uk" ? "Рівень" : "Level"}
            </p>
            <p className="font-semibold text-lg" style={{ color: COLORS.warmCream }}>
              {hotYoga.level[locale]}
            </p>
          </div>
          <div
            className="rounded-2xl p-5"
            style={{ background: COLORS.deepOlive }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: COLORS.mutedGreen }}
            >
              {locale === "uk" ? "Тривалість" : "Duration"}
            </p>
            <p className="font-semibold text-lg" style={{ color: COLORS.warmCream }}>
              {hotYoga.duration}
            </p>
          </div>
          <div
            className="rounded-2xl p-5"
            style={{ background: COLORS.deepOlive }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: COLORS.mutedGreen }}
            >
              {locale === "uk" ? "Температура" : "Temperature"}
            </p>
            <p className="font-semibold text-lg" style={{ color: COLORS.warmCream }}>
              38–40°C
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl p-6 mb-10"
          style={{ background: `${COLORS.deepOlive}15`, border: `1px solid ${COLORS.deepOlive}30` }}
        >
          <p
            className="text-sm uppercase tracking-widest mb-2 font-medium"
            style={{ color: COLORS.terracotta }}
          >
            {locale === "uk" ? "Для кого" : "For Whom"}
          </p>
          <p style={{ color: COLORS.darkGraphite }}>{hotYoga.forWhom[locale]}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2
          className="text-3xl font-bold mb-8 font-serif italic"
          style={{ color: COLORS.deepOlive }}
        >
          {dictionary.benefits.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {dictionary.benefits.items.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl p-6"
              style={{ background: COLORS.deepOlive }}
            >
              <h3
                className="font-semibold text-base mb-2"
                style={{ color: COLORS.warmCream }}
              >
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: COLORS.mutedGreen }}>
                {benefit.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <BookingTriggerButton
            practiceSlug="hot-yoga-base"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer shadow-xl"
            style={{ background: COLORS.terracotta, color: COLORS.warmCream }}
          >
            {dictionary.nav.book}
          </BookingTriggerButton>
        </div>
      </section>
    </main>
  );
}
