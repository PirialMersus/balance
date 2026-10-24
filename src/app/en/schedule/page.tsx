import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import { buildSeoMeta } from "@/lib/seo";
import { ScheduleView } from "@/views/ScheduleView";

export async function generateMetadata(): Promise<Metadata> {
  const scheduleTranslations = translations.en.schedule;
  const seoMetadata = buildSeoMeta({
    locale: "en",
    pageTitle: scheduleTranslations.title,
    pageDescription: scheduleTranslations.subtitle,
    path: "/schedule",
    ogImage: "/images/og-default.webp",
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

export default function EnglishSchedulePage() {
  return <ScheduleView locale="en" />;
}
