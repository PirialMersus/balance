import type { Metadata } from "next";
import { buildSeoMeta } from "@/lib/seo";
import { StudioView } from "@/views/StudioView";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "Простір студії";
  const pageDescription = "Особливе середовище з інфрачервоним теплом 38–40°C для глибокої та безпечної практики";
  const seoMetadata = buildSeoMeta({
    locale: "uk",
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
      },
    },
    openGraph: {
      title: seoMetadata.title,
      description: seoMetadata.description,
      images: [seoMetadata.ogImage],
    },
  };
}

export default function UkrainianStudioPage() {
  return <StudioView locale="uk" />;
}
