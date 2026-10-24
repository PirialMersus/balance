import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { buildSeoMeta } from "@/lib/seo";
import { PrivacyView } from "@/views/PrivacyView";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "Privacy Policy";
  const seoMetadata = buildSeoMeta({
    locale: "en",
    pageTitle,
    pageDescription: `${BRAND.fullName} — ${pageTitle}`,
    path: "/privacy",
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

export default function EnglishPrivacyPage() {
  return <PrivacyView locale="en" />;
}
