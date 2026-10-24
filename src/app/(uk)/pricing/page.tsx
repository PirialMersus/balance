import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import { buildSeoMeta } from "@/lib/seo";
import { PricingView } from "@/views/PricingView";

export async function generateMetadata(): Promise<Metadata> {
  const pricingTranslations = translations.uk.pricing;
  const seoMetadata = buildSeoMeta({
    locale: "uk",
    pageTitle: pricingTranslations.title,
    pageDescription: pricingTranslations.subtitle,
    path: "/pricing",
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

export default function UkrainianPricingPage() {
  return <PricingView locale="uk" />;
}
