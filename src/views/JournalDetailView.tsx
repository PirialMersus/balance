import Link from "next/link";
import { notFound } from "next/navigation";
import { translations, type Locale } from "@/lib/translations";
import { journalArticles } from "@/lib/journal";
import { BRAND } from "@/lib/brand";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

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
  const ctaSubtitleText = locale === "uk"
    ? "Запишіться на пробне заняття у студії Balance в центрі Одеси."
    : "Book your trial class at Balance studio in the heart of Odesa.";

  return (
    <article className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <Link
            href={`${routePrefix}/journal`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B87557] hover:text-[#D4793A] transition-colors mb-8"
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

        <div className="mb-12 border border-[#293A30]/10 overflow-hidden">
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

        <div className="space-y-6 text-[#293A30] text-lg leading-relaxed mb-16">
          {formattedParagraphs.map((paragraphContent, index) => (
            <p key={index}>{paragraphContent}</p>
          ))}
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
            className="text-xs uppercase tracking-widest text-[#B87557] hover:underline"
          >
            {backLinkText} →
          </Link>
        </div>

        <div className="bg-[#293A30] text-[#F5F2E9] p-8 md:p-12 text-center">
          <h2 className="font-serif italic text-2xl md:text-3xl mb-4">
            {ctaTitleText}
          </h2>
          <p className="text-sm text-[#EAE5D9] max-w-xl mx-auto mb-6">
            {ctaSubtitleText}
          </p>
          <BookingTriggerButton className="inline-block px-8 py-3.5 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer">
            {currentTranslations.nav.book}
          </BookingTriggerButton>
        </div>
      </div>
    </article>
  );
}
