import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { type Locale } from "@/lib/translations";
import { buildSeoMeta } from "@/lib/seo";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PracticesSection from "@/components/sections/PracticesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import StudioGallerySection from "@/components/sections/StudioGallerySection";
import TeachersSection from "@/components/sections/TeachersSection";
import InstagramFeedSection from "@/components/sections/InstagramFeedSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

const supportedLocales: Locale[] = ["ru", "uk"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) return {};

  const typedLocale = locale as Locale;
  const seo = buildSeoMeta({
    locale: typedLocale,
    path: "",
  });

  return {
    title: "Баланс - Hot Yoga - Одесса",
    description: seo.description,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    alternates: {
      canonical: seo.canonical,
      languages: {
        ru: seo.alternateRu,
        uk: seo.alternateUk,
      },
    },
    openGraph: {
      title: "Баланс - Hot Yoga - Одесса",
      description: seo.description,
      images: [seo.ogImage],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale as Locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;

  return (
    <>
      <HeroSection locale={typedLocale} />
      <AboutSection locale={typedLocale} />
      <PracticesSection locale={typedLocale} />
      <BenefitsSection locale={typedLocale} />
      <StudioGallerySection locale={typedLocale} />
      <TeachersSection locale={typedLocale} />
      <InstagramFeedSection locale={typedLocale} />
      <FaqSection locale={typedLocale} />
      <CtaSection locale={typedLocale} />
    </>
  );
}
