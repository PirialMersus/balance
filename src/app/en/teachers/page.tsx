import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import { BRAND } from "@/lib/brand";
import { buildSeoMeta } from "@/lib/seo";
import { TeachersView } from "@/views/TeachersView";

export async function generateMetadata(): Promise<Metadata> {
  const teacherTranslations = translations.en.teachers;
  const seoMetadata = buildSeoMeta({
    locale: "en",
    pageTitle: teacherTranslations.title,
    pageDescription: `${BRAND.founderName} — ${teacherTranslations.founder}`,
    path: "/teachers",
    ogImage: "/images/teacher-maria.webp",
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

export default function EnglishTeachersPage() {
  return <TeachersView locale="en" />;
}
