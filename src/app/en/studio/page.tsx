import type { Metadata } from "next";
import { buildSeoMeta } from "@/lib/seo";
import { StudioView } from "@/views/StudioView";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "Studio Space";
  const pageDescription = "Dedicated hot yoga sanctuary with gentle infrared heat at 38–40°C for deep and safe practice";
  const seoMetadata = buildSeoMeta({
    locale: "en",
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

export default function EnglishStudioPage() {
  return <StudioView locale="en" />;
}
