import { translations, Locale } from "@/lib/translations";

interface BenefitsSectionProps {
  locale: Locale;
}

export default function BenefitsSection({ locale }: BenefitsSectionProps) {
  const sectionTranslations = translations[locale].benefits;
  const sectionBadge = locale === "uk" ? "Ефект практики" : "Practice Benefits";

  return (
    <section className="bg-[#F5F2E9] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 max-w-2xl">
          <div className="w-16 h-px bg-[#B87557] mb-8" />
          <p className="text-[#828A73] text-xs uppercase tracking-widest font-medium mb-3">
            {sectionBadge}
          </p>
          <h2
            className="font-serif italic text-[#1A2019] leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {sectionTranslations.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionTranslations.items.map((benefitItem, benefitIndex) => {
            const benefitNumber = String(benefitIndex + 1).padStart(2, "0");

            return (
              <div
                key={benefitIndex}
                className="p-8 md:p-10 rounded-2xl bg-white border border-[#293A30]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif italic text-3xl md:text-4xl text-[#B87557] block mb-6">
                    {benefitNumber}
                  </span>
                  <h3 className="text-[#1A2019] text-xl font-semibold mb-4 leading-snug">
                    {benefitItem.title}
                  </h3>
                  <p className="text-[#293A30]/80 text-sm md:text-base leading-relaxed font-light">
                    {benefitItem.body}
                  </p>
                </div>
                <div className="w-8 h-0.5 bg-[#B87557]/30 mt-8" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
