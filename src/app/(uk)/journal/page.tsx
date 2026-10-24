import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import { buildSeoMeta } from "@/lib/seo";
import { JournalView } from "@/views/JournalView";

export async function generateMetadata(): Promise<Metadata> {
  const journalTranslations = translations.uk.journal;
  const seoMetadata = buildSeoMeta({
    locale: "uk",
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

export default function UkrainianJournalPage() {
  return <JournalView locale="uk" />;
}
