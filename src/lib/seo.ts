import { Locale } from "./translations";
import { BRAND } from "./brand";

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  alternateUk: string;
  alternateEn: string;
  alternateRu: string;
  ogImage: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://balance-odessa.com";
const OG_IMAGE = `${BASE_URL}/images/og-default.jpg`;

export function getLocalizedPath(locale: Locale, path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const cleanPath = normalizedPath === "/" ? "" : normalizedPath;
  if (locale === "uk") {
    return cleanPath || "/";
  }
  return `/${locale}${cleanPath}`;
}

export function buildSeoMeta(params: {
  locale: Locale;
  pageTitle?: string;
  pageDescription?: string;
  path: string;
  ogImage?: string;
}): SeoMeta {
  const { locale, pageTitle, pageDescription, path, ogImage } = params;

  const siteNames: Record<Locale, string> = {
    uk: "Баланс — Hot Yoga — Одеса",
    en: "Balance — Hot Yoga — Odesa",
    ru: "Баланс — Hot Yoga — Одесса",
  };

  const siteName = siteNames[locale];
  const title = pageTitle ? `${pageTitle} | ${siteName}` : siteName;

  const defaultDescriptions: Record<Locale, string> = {
    uk: "Єдина спеціалізована студія гарячої йоги в Одесі (ЖК «Одісей», 38–40°C). Запис на практику через Instagram Direct.",
    en: "The premier dedicated hot yoga studio in Odesa (Odisey Complex, 38–40°C). Book your class via Instagram Direct.",
    ru: "Единственная специализированная студия горячей йоги в Одессе (ЖК «Одиссей», 38–40°C). Запись на практику через Instagram Direct.",
  };
  const description = pageDescription ?? defaultDescriptions[locale];

  const canonicalPath = getLocalizedPath(locale, path);
  const ukPath = getLocalizedPath("uk", path);
  const enPath = getLocalizedPath("en", path);
  const ruPath = getLocalizedPath("ru", path);

  const canonical = `${BASE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  const alternateUk = `${BASE_URL}${ukPath === "/" ? "" : ukPath}`;
  const alternateEn = `${BASE_URL}${enPath}`;
  const alternateRu = `${BASE_URL}${ruPath}`;

  return {
    title,
    description,
    canonical,
    alternateUk,
    alternateEn,
    alternateRu,
    ogImage: ogImage ?? OG_IMAGE,
  };
}

export function buildJsonLd(locale: Locale) {
  const titles: Record<Locale, string> = {
    uk: "Баланс - Hot Yoga - Одеса",
    en: "Balance - Hot Yoga - Odesa",
    ru: "Баланс - Hot Yoga - Одесса",
  };

  const descriptions: Record<Locale, string> = {
    uk: "Єдина спеціалізована студія гарячої йоги в Одесі (38–40°C, ЖК «Одісей»)",
    en: "The dedicated hot yoga studio in Odesa (38–40°C, Odisey Complex)",
    ru: "Единственная специализированная студия горячей йоги в Одессе (38–40°C, ЖК «Одиссей»)",
  };

  const streetAddresses: Record<Locale, string> = {
    uk: "Люстдорфська дорога, 55К (ЖК «Одісей»)",
    en: "55K Liustdorfska Road (Odisey Complex)",
    ru: "Люстдорфская дорога, 55К (ЖК «Одиссей»)",
  };

  const localities: Record<Locale, string> = {
    uk: "Одеса",
    en: "Odesa",
    ru: "Одесса",
  };

  const pageUrl = locale === "uk" ? `${BASE_URL}` : `${BASE_URL}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: titles[locale],
    description: descriptions[locale],
    url: pageUrl,
    sameAs: [BRAND.instagram],
    image: OG_IMAGE,
    priceRange: "350 - 3200 UAH",
    sport: "Hot Yoga",
    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddresses[locale],
      addressLocality: localities[locale],
      addressCountry: "UA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.4172,
      longitude: 30.7231,
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
        opens: "08:30",
        closes: "21:30",
      },
    ],
  };
}
