import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import { BRAND } from "@/lib/brand";
import { buildSeoMeta } from "@/lib/seo";
import { ContactsView } from "@/views/ContactsView";

export async function generateMetadata(): Promise<Metadata> {
  const contactTranslations = translations.uk.contacts;
  const seoMetadata = buildSeoMeta({
    locale: "uk",
    pageTitle: contactTranslations.title,
    pageDescription: `${BRAND.fullName} — ${BRAND.city}. ${contactTranslations.subtitle}`,
    path: "/contacts",
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

export default function UkrainianContactsPage() {
  return <ContactsView locale="uk" />;
}
