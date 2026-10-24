import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import { buildSeoMeta } from "@/lib/seo";
import { PracticesView } from "@/views/PracticesView";

export async function generateMetadata(): Promise<Metadata> {
  const practiceTranslations = translations.uk.practices;
  const seoMetadata = buildSeoMeta({
    locale: "uk",
    pageTitle: practiceTranslations.title,
    pageDescription: practiceTranslations.subtitle,
    path: "/practices",
    ogImage: "/images/practice-hot-classic.webp",
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

export default function UkrainianPracticesPage() {
  return <PracticesView locale="uk" />;
}
