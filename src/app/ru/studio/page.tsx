import type { Metadata } from "next";
import { buildSeoMeta } from "@/lib/seo";
import { StudioView } from "@/views/StudioView";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "Пространство студии";
  const pageDescription = "Специализированная студия горячей йоги с инфракрасным прогревом 38–40°C в Одессе";
  const seoMetadata = buildSeoMeta({
    locale: "ru",
    pageTitle,
    pageDescription,
    path: "/studio",
    ogImage: "/images/studio-atmosphere.webp",
  });
  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    alternates: {
      canonical: seoMetadata.canonical,
      languages: {
        uk: seoMetadata.alternateUk,
        en: seoMetadata.alternateEn,
        ru: seoMetadata.alternateRu,
      },
    },
    openGraph: {
      title: seoMetadata.title,
      description: seoMetadata.description,
      images: [seoMetadata.ogImage],
    },
  };
}

export default function RussianStudioPage() {
  return <StudioView locale="ru" />;
}
