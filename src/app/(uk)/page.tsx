import type { Metadata } from "next";
import { buildSeoMeta } from "@/lib/seo";
import { HomeView } from "@/views/HomeView";

export async function generateMetadata(): Promise<Metadata> {
  const seoMetadata = buildSeoMeta({ locale: "uk", path: "" });
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

export default function UkrainianHomePage() {
  return <HomeView locale="uk" />;
}
