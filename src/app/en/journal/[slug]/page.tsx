import type { Metadata } from "next";
import { journalArticles } from "@/lib/journal";
import { buildSeoMeta } from "@/lib/seo";
import { JournalDetailView } from "@/views/JournalDetailView";

export async function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const currentArticle = journalArticles.find((article) => article.slug === slug);
  if (!currentArticle) {
    return {};
  }
  const seoMetadata = buildSeoMeta({
    locale: "en",
    pageTitle: currentArticle.title.en,
    pageDescription: currentArticle.excerpt.en,
    path: `/journal/${slug}`,
    ogImage: currentArticle.image,
  });
  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    alternates: {
      canonical: seoMetadata.canonical,
      languages: {
        uk: seoMetadata.alternateUk,
        en: seoMetadata.alternateEn,
      },
    },
    openGraph: {
      title: seoMetadata.title,
      description: seoMetadata.description,
      images: [seoMetadata.ogImage],
    },
  };
}

export default async function EnglishJournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <JournalDetailView locale="en" slug={slug} />;
}
