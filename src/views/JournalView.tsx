import Link from "next/link";
import { translations, type Locale } from "@/lib/translations";
import { journalArticles } from "@/lib/journal";

export function JournalView({ locale }: { locale: Locale }) {
  const currentTranslations = translations[locale];
  const routePrefix = locale === "uk" ? "" : "/en";

  const categoryLabel = locale === "uk" ? "Статті та матеріали" : "Articles & Resources";
  const readMoreLabel = locale === "uk" ? "Читати статтю" : "Read article";

  return (
    <div className="bg-[#F5F2E9] text-[#222923] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#B87557] mb-4 font-medium">
            Balance Hot Yoga · {categoryLabel}
          </p>
          <h1
            className="font-serif italic text-[#1A2019] leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
          >
            {currentTranslations.journal.title}
          </h1>
          <p className="text-[#293A30] text-lg leading-relaxed">
            {currentTranslations.journal.subtitle}
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
                    alt={singleArticle.title[locale]}
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
                      href={`${routePrefix}/journal/${singleArticle.slug}`}
                      className="hover:text-[#B87557] transition-colors"
                    >
                      {singleArticle.title[locale]}
                    </Link>
                  </h2>
                  <p className="text-sm text-[#79776E] leading-relaxed mb-6">
                    {singleArticle.excerpt[locale]}
                  </p>
                </div>
              </div>

              <div className="p-8 md:p-10 pt-0">
                <Link
                  href={`${routePrefix}/journal/${singleArticle.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B87557] hover:text-[#D4793A] transition-colors"
                >
                  <span>{readMoreLabel}</span>
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
