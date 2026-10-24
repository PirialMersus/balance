import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { translations, type Locale } from "@/lib/translations";
import { journalArticles } from "@/lib/journal";
import { BRAND } from "@/lib/brand";
import { buildSeoMeta } from "@/lib/seo";
import BookingTriggerButton from "@/components/booking/BookingTriggerButton";

const supportedLocales: Locale[] = ["ru", "uk"];

export async function generateStaticParams() {
  return supportedLocales.flatMap((locale) =>
    journalArticles.map((article) => ({
      locale,
      slug: article.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!supportedLocales.includes(locale as Locale)) return {};
  const typedLocale = locale as Locale;
  const currentArticle = journalArticles.find((article) => article.slug === slug);
  if (!currentArticle) return {};

  const seoMetadata = buildSeoMeta({
    locale: typedLocale,
    pageTitle: currentArticle.title[typedLocale],
    pageDescription: currentArticle.excerpt[typedLocale],
    path: `/journal/${slug}`,
    ogImage: currentArticle.image,
  });

  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    alternates: {
      canonical: seoMetadata.canonical,
      languages: {
        ru: seoMetadata.alternateRu,
        uk: seoMetadata.alternateUk,
      },
    },
    openGraph: {
      title: seoMetadata.title,
      description: seoMetadata.description,
      images: [seoMetadata.ogImage],
    },
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!supportedLocales.includes(locale as Locale)) notFound();
  const typedLocale = locale as Locale;
  const currentArticle = journalArticles.find((article) => article.slug === slug);
  if (!currentArticle) notFound();

  const formattedParagraphs = currentArticle.body[typedLocale]
    .split("\n\n")
    .map((paragraphText) => paragraphText.trim())
    .filter((paragraphText) => paragraphText.length > 0);

  return (
    <article className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <Link
            href={`/${typedLocale}/journal`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B87557] hover:text-[#D4793A] transition-colors mb-8"
          >
            <span>←</span>
            <span>{typedLocale === "ru" ? "Назад в журнал" : "Назад до журналу"}</span>
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
            {currentArticle.title[typedLocale]}
          </h1>
          <p className="text-[#293A30] text-lg md:text-xl leading-relaxed italic border-l-2 border-[#B87557] pl-6 py-1">
            {currentArticle.excerpt[typedLocale]}
          </p>
        </div>

        <div className="relative overflow-hidden aspect-[16/9] bg-[#1A2019] mb-12 border border-[#293A30]/10 shadow-md">
          <img
            src={currentArticle.image}
            alt={currentArticle.title[typedLocale]}
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6 text-[#293A30] text-base md:text-lg leading-relaxed mb-16">
          {formattedParagraphs.map((paragraphContent, paragraphIndex) => {
            if (paragraphContent.startsWith("**") && paragraphContent.endsWith("**")) {
              const headerCleanText = paragraphContent.replace(/\*\*/g, "");
              return (
                <h2
                  key={paragraphIndex}
                  className="font-serif italic text-2xl md:text-3xl text-[#1A2019] pt-6 pb-2"
                >
                  {headerCleanText}
                </h2>
              );
            }
            if (paragraphContent.startsWith("- ")) {
              const listItems = paragraphContent
                .split("\n")
                .map((rawListItem) => rawListItem.replace(/^- /, "").trim());
              return (
                <ul key={paragraphIndex} className="list-disc pl-6 space-y-2 text-sm md:text-base">
                  {listItems.map((singleItem, itemIndex) => (
                    <li key={itemIndex}>{singleItem}</li>
                  ))}
                </ul>
              );
            }
            return <p key={paragraphIndex}>{paragraphContent}</p>;
          })}
        </div>

        <div className="flex flex-wrap gap-2 pt-6 pb-12 border-t border-[#293A30]/15 mb-16">
          {currentArticle.tags[typedLocale].map((tagValue, tagIndex) => (
            <span
              key={tagIndex}
              className="text-xs uppercase tracking-wider bg-white border border-[#293A30]/10 px-3 py-1.5 text-[#293A30]"
            >
              #{tagValue}
            </span>
          ))}
        </div>

        <div className="p-8 md:p-12 bg-[#222923] text-[#F5F2E9] text-center">
          <h3 className="font-serif italic text-2xl md:text-3xl text-white mb-4">
            {typedLocale === "ru" ? "Готовы почувствовать это на практике?" : "Готові відчути це на практиці?"}
          </h3>
          <p className="text-[#828A73] text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            {typedLocale === "ru"
              ? "Первое занятие горячей йогой в Одессе доступно по специальной цене для новичков. Напишите нам в Instagram Direct для выбора времени."
              : "Перше заняття гарячою йогою в Одесі доступне за спеціальною ціною для новачків. Напишіть нам в Instagram Direct для вибору часу."}
          </p>
          <BookingTriggerButton
            practiceSlug="first-trial"
            className="inline-block px-10 py-5 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium transition-colors shadow-lg cursor-pointer rounded-full"
          >
            {typedLocale === "ru" ? "Записаться на занятие" : "Записатися на заняття"}
          </BookingTriggerButton>
        </div>
      </div>
    </article>
  );
}
