"use client";

import { translations, Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";
import { useBooking } from "@/components/booking/BookingContext";

interface CtaSectionProps {
  locale: Locale;
}

export default function CtaSection({ locale }: CtaSectionProps) {
  const ctaTranslations = translations[locale].cta;
  const { openBooking } = useBooking();

  return (
    <section className="relative bg-[#1A2019] text-[#F5F2E9] py-32 md:py-44 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(184, 117, 87, 0.45) 0%, rgba(41, 58, 48, 0.25) 45%, rgba(26, 32, 25, 0.98) 80%)",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="w-16 h-px bg-[#B87557] mx-auto mb-10" />
        <h2
          className="font-serif italic leading-tight mb-8 text-white drop-shadow-md"
          style={{
            fontSize: "clamp(42px, 6vw, 80px)",
            whiteSpace: "pre-line",
          }}
        >
          {ctaTranslations.title}
        </h2>
        <p className="text-[#F5F2E9]/80 text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto font-light">
          {ctaTranslations.sub}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => openBooking()}
            className="w-full sm:w-auto px-10 py-4 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs font-medium tracking-widest uppercase transition-all duration-300 shadow-2xl hover:shadow-amber-500/20 text-center rounded-full cursor-pointer"
          >
            {ctaTranslations.book}
          </button>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 border border-white/60 hover:bg-white/10 text-[#F5F2E9] text-xs font-medium tracking-widest uppercase transition-all duration-300 text-center rounded-full backdrop-blur-sm"
          >
            {ctaTranslations.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}
