import { Locale } from "./translations";
import { BRAND } from "./brand";

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  alternateUk: string;
  alternateEn: string;
  ogImage: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://balance-odessa.com";
const OG_IMAGE = `${BASE_URL}/images/og-default.jpg`;

export function getLocalizedPath(locale: Locale, path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const cleanPath = normalizedPath === "/" ? "" : normalizedPath;
  return locale === "uk" ? (cleanPath || "/") : `/en${cleanPath}`;
}

export function buildSeoMeta(params: {
  locale: Locale;
  pageTitle?: string;
  pageDescription?: string;
  path: string;
  ogImage?: string;
}): SeoMeta {
  const { locale, pageTitle, pageDescription, path, ogImage } = params;

  const siteName =
    locale === "uk"
      ? "Баланс — Hot Yoga — Одеса"
      : "Balance — Hot Yoga — Odesa";

  const title = pageTitle ? `${pageTitle} | ${siteName}` : siteName;

  const defaultDescriptions: Record<Locale, string> = {
    uk: "Єдина спеціалізована студія гарячої йоги в Одесі (38–40°C). Запис на практику через Instagram Direct.",
    en: "The premier dedicated hot yoga studio in Odesa, Ukraine (38–40°C). Book your class via Instagram Direct.",
  };
  const description = pageDescription ?? defaultDescriptions[locale];

  const canonicalPath = getLocalizedPath(locale, path);
  const ukPath = getLocalizedPath("uk", path);
  const enPath = getLocalizedPath("en", path);

  const canonical = `${BASE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  const alternateUk = `${BASE_URL}${ukPath === "/" ? "" : ukPath}`;
  const alternateEn = `${BASE_URL}${enPath}`;

  return {
    title,
    description,
    canonical,
    alternateUk,
    alternateEn,
    ogImage: ogImage ?? OG_IMAGE,
  };
}

export function buildJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: locale === "uk" ? "Баланс - Hot Yoga - Одеса" : "Balance - Hot Yoga - Odesa",
    description:
      locale === "uk"
        ? "Єдина спеціалізована студія гарячої йоги в Одесі (38–40°C)"
        : "The dedicated hot yoga studio in Odesa (38–40°C)",
    url: locale === "uk" ? `${BASE_URL}` : `${BASE_URL}/en`,
    sameAs: [BRAND.instagram],
    image: OG_IMAGE,
    priceRange: "$$",
    sport: "Hot Yoga",
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "uk" ? "Одеса" : "Odesa",
      addressCountry: "UA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.4825,
      longitude: 30.7233,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:30",
      },
    ],
  };
}
