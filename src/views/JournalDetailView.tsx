import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { translations, type Locale } from "@/lib/translations";
import { journalArticles } from "@/lib/journal";
import { BRAND } from "@/lib/brand";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

function renderFormattedParagraph(content: string, index: number) {
  const trimmed = content.trim();

  if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.slice(2, -2).includes("**")) {
    return (
      <h2
        key={index}
        className="font-serif italic text-2xl md:text-3xl text-[#1A2019] pt-6 mb-2 leading-snug"
      >
        {trimmed.slice(2, -2)}
      </h2>
    );
  }

  const segments = trimmed.split(/(\*\*.*?\*\*)/g);

  return (
    <p key={index} className="text-[#293A30] text-lg leading-relaxed">
      {segments.map((segment, segmentIndex) => {
        if (segment.startsWith("**") && segment.endsWith("**")) {
          return (
            <strong key={segmentIndex} className="font-semibold text-[#1A2019]">
              {segment.slice(2, -2)}
            </strong>
          );
        }
        return segment;
      })}
    </p>
  );
}

export function JournalDetailView({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const currentTranslations = translations[locale];
  const routePrefix = locale === "uk" ? "" : "/en";
  const currentArticle = journalArticles.find((article) => article.slug === slug);
  if (!currentArticle) {
    notFound();
  }

  const formattedParagraphs = currentArticle.body[locale]
    .split("\n\n")
    .map((paragraphText) => paragraphText.trim())
    .filter((paragraphText) => paragraphText.length > 0);

  const backLinkText = locale === "uk" ? "Назад до журналу" : "Back to journal";
  const authorRoleText = locale === "uk" ? "Засновниця Balance Hot Yoga" : "Founder of Balance Hot Yoga";
  const ctaTitleText = locale === "uk" ? "Відчуйте силу гарячої йоги особисто" : "Experience the power of hot yoga firsthand";
  const ctaSubtitlePrefix = locale === "uk"
    ? "Запишіться на пробне заняття у студії Balance ("
    : "Book your trial class at Balance studio (";
  const ctaLocationText = locale === "uk"
    ? "ЖК «Одісей», Одеса"
    : "Odisey Complex, Odesa";

  return (
    <article className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <Link
            href={`${routePrefix}/journal`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B87557] hover:text-[#D4793A] transition-colors mb-8 min-h-[44px]"
          >
            <span>←</span>
            <span>{backLinkText}</span>
          </Link>
          <div className="flex items-center gap-3 text-xs text-[#828A73] mb-4">
            <span>{currentArticle.publishedAt}</span>
            <span>•</span>
            <span>{currentArticle.readingTime}</span>
          </div>
          <h1
            className="font-serif italic text-[#1A2019] leading-tight mb-8"
            style={{ fontSize: "clamp(34px, 5vw, 56px)" }}
          >
            {currentArticle.title[locale]}
          </h1>
          <p className="text-[#293A30] text-lg md:text-xl leading-relaxed italic border-l-2 border-[#B87557] pl-6 py-1">
            {currentArticle.excerpt[locale]}
          </p>
        </div>

        <div className="mb-12 border border-[#293A30]/10 overflow-hidden rounded-2xl shadow-md">
          <img
            src={currentArticle.image}
            alt={currentArticle.title[locale]}
            width={1200}
            height={700}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="space-y-6 mb-16">
          {formattedParagraphs.map((paragraphContent, index) =>
            renderFormattedParagraph(paragraphContent, index)
          )}
        </div>

        <div className="border-t border-b border-[#293A30]/15 py-8 my-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#828A73] block mb-1">
              {BRAND.founderName}
            </span>
            <span className="text-sm text-[#79776E]">
              {authorRoleText}
            </span>
          </div>
          <Link
            href={`${routePrefix}/journal`}
            className="text-xs uppercase tracking-widest text-[#B87557] hover:underline min-h-[44px] inline-flex items-center"
          >
            {backLinkText} →
          </Link>
        </div>

        <div className="bg-[#293A30] text-[#F5F2E9] p-8 md:p-12 text-center rounded-2xl shadow-lg border-l-4 border-[#B87557]">
          <h2 className="font-serif italic text-2xl md:text-3xl mb-4">
            {ctaTitleText}
          </h2>
          <p className="text-sm text-[#EAE5D9] max-w-xl mx-auto mb-6">
            {ctaSubtitlePrefix}
            <a
              href={BRAND.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B87557] hover:text-[#D4793A] transition-colors underline decoration-[#B87557]/40 underline-offset-2"
            >
              {ctaLocationText} ↗
            </a>
            ).
          </p>
          <BookingTriggerButton
            tariffTitle="Пробне заняття (350 ₴)"
            className="inline-block px-8 py-3.5 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer rounded-full min-h-[44px]"
          >
            {currentTranslations.nav.book}
          </BookingTriggerButton>
        </div>
      </div>
    </article>
  );
}
