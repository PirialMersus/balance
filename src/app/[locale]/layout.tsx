import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { translations, type Locale } from "@/lib/translations";
import { buildJsonLd, buildSeoMeta } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingProvider } from "@/components/booking/BookingContext";
import BookingModalWrapper from "@/components/booking/BookingModalWrapper";

const supportedLocales: Locale[] = ["ru", "uk"];

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!supportedLocales.includes(locale as Locale)) {
    return {};
  }

  const typedLocale = locale as Locale;
  const seo = buildSeoMeta({ locale: typedLocale, path: "" });

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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale as Locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const jsonLd = buildJsonLd(typedLocale);

  return (
    <BookingProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={typedLocale} />
      <main className="flex-1">{children}</main>
      <Footer locale={typedLocale} />
      <BookingModalWrapper locale={typedLocale} />
    </BookingProvider>
  );
}
