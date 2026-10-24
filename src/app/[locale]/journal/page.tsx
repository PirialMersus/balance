import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { translations, type Locale } from "@/lib/translations";
import { journalArticles } from "@/lib/journal";
import { buildSeoMeta } from "@/lib/seo";

const supportedLocales: Locale[] = ["ru", "uk"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) return {};
  const typedLocale = locale as Locale;
  const journalTranslations = translations[typedLocale].journal;
  const seoMetadata = buildSeoMeta({
    locale: typedLocale,
    pageTitle: journalTranslations.title,
    pageDescription: journalTranslations.subtitle,
    path: "/journal",
    ogImage: "/images/journal-hot-yoga-intro.webp",
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

export default async function JournalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) notFound();
  const typedLocale = locale as Locale;
  const pageTranslations = translations[typedLocale];

  return (
    <div className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#B87557] mb-4 font-medium">
            Balance Hot Yoga · {typedLocale === "ru" ? "Статьи и материалы" : "Статті та матеріали"}
          </p>
          <h1
            className="font-serif italic text-[#1A2019] leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
          >
            {pageTranslations.journal.title}
          </h1>
          <p className="text-[#293A30] text-lg leading-relaxed">
            {pageTranslations.journal.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {journalArticles.map((singleArticle, articleIndex) => (
            <article
              key={articleIndex}
              className="bg-white border border-[#293A30]/10 flex flex-col justify-between transition-shadow hover:shadow-lg"
            >
              <div>
                <div className="relative overflow-hidden aspect-[16/10] bg-[#1A2019]">
                  <img
                    src={singleArticle.image}
                    alt={singleArticle.title[typedLocale]}
                    width={800}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 text-xs text-[#828A73] mb-4">
                    <span>{singleArticle.publishedAt}</span>
                    <span>•</span>
                    <span>{singleArticle.readingTime}</span>
                  </div>
                  <h2 className="font-serif italic text-2xl md:text-3xl text-[#1A2019] mb-4 leading-tight">
                    <Link
                      href={`/${typedLocale}/journal/${singleArticle.slug}`}
                      className="hover:text-[#B87557] transition-colors"
                    >
                      {singleArticle.title[typedLocale]}
                    </Link>
                  </h2>
                  <p className="text-[#293A30]/80 text-sm leading-relaxed mb-6">
                    {singleArticle.excerpt[typedLocale]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {singleArticle.tags[typedLocale].map((tagItem, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[11px] uppercase tracking-wider bg-[#F5F2E9] px-2.5 py-1 text-[#293A30]"
                      >
                        #{tagItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 md:px-10 md:pb-10 pt-0">
                <Link
                  href={`/${typedLocale}/journal/${singleArticle.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B87557] hover:text-[#D4793A] transition-colors"
                >
                  <span>{pageTranslations.journal.readMore}</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
