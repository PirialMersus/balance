import { notFound } from "next/navigation";
import { translations, type Locale } from "@/lib/translations";
import { COLORS } from "@/lib/brand";
import { practices } from "@/lib/practices";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

export function PracticeDetailView({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const currentTranslations = translations[locale];
  const practice = practices.find((item) => item.slug === slug);
  if (!practice) {
    notFound();
  }

  const levelLabel = locale === "uk" ? "Рівень" : "Level";
  const durationLabel = locale === "uk" ? "Тривалість" : "Duration";
  const temperatureLabel = locale === "uk" ? "Температура" : "Temperature";
  const audienceLabel = locale === "uk" ? "Для кого" : "For whom";

  return (
    <main style={{ background: COLORS.warmCream, minHeight: "100vh" }}>
      <section className="relative overflow-hidden" style={{ background: COLORS.deepNight }}>
        <div className="relative h-[60vh] min-h-[400px]">
          <img
            src={practice.image}
            alt={practice.name[locale]}
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
              background: "linear-gradient(to bottom, rgba(26,32,25,0.2) 0%, rgba(26,32,25,0.88) 100%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-4xl mx-auto">
            <h1
              className="text-5xl md:text-6xl font-bold mb-3 leading-tight"
              style={{ color: COLORS.warmCream }}
            >
              {practice.name[locale]}
            </h1>
            <p className="text-lg" style={{ color: COLORS.mutedGreen }}>
              {practice.shortDescription[locale]}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl p-5" style={{ background: COLORS.deepOlive }}>
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: COLORS.mutedGreen }}
            >
              {levelLabel}
            </p>
            <p className="font-semibold text-lg" style={{ color: COLORS.warmCream }}>
              {practice.level[locale]}
            </p>
          </div>
          <div className="rounded-2xl p-5" style={{ background: COLORS.deepOlive }}>
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: COLORS.mutedGreen }}
            >
              {durationLabel}
            </p>
            <p className="font-semibold text-lg" style={{ color: COLORS.warmCream }}>
              {practice.duration}
            </p>
          </div>
          <div className="rounded-2xl p-5" style={{ background: COLORS.deepOlive }}>
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: COLORS.mutedGreen }}
            >
              {temperatureLabel}
            </p>
            <p className="font-semibold text-lg" style={{ color: COLORS.warmCream }}>
              38–40°C
            </p>
          </div>
        </div>

        <p
          className="text-lg leading-relaxed mb-10"
          style={{ color: COLORS.darkGraphite }}
        >
          {practice.fullDescription[locale]}
        </p>

        <div
          className="rounded-2xl p-6 mb-10"
          style={{ background: `${COLORS.deepOlive}15`, border: `1px solid ${COLORS.deepOlive}30` }}
        >
          <p
            className="text-sm uppercase tracking-widest mb-2 font-medium"
            style={{ color: COLORS.terracotta }}
          >
            {audienceLabel}
          </p>
          <p style={{ color: COLORS.darkGraphite }}>{practice.forWhom[locale]}</p>
        </div>

        <h2 className="text-2xl font-bold mb-6" style={{ color: COLORS.deepOlive }}>
          {currentTranslations.benefits.title}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
          {practice.benefits[locale].map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-3 rounded-xl px-5 py-3"
              style={{ background: COLORS.deepOlive }}
            >
              <span style={{ color: COLORS.terracotta }}>✦</span>
              <span style={{ color: COLORS.warmCream }}>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <BookingTriggerButton
            practiceSlug={practice.slug}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer shadow-xl"
            style={{ background: COLORS.terracotta, color: COLORS.warmCream }}
          >
            {currentTranslations.nav.book}
          </BookingTriggerButton>
        </div>
      </section>
    </main>
  );
}
