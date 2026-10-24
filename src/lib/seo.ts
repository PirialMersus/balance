import { Locale } from "./translations";
import { BRAND } from "./brand";

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  alternateRu: string;
  alternateUk: string;
  ogImage: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://balance-odessa.com";
const OG_IMAGE = `${BASE_URL}/images/og-default.jpg`;

export function buildSeoMeta(params: {
  locale: Locale;
  pageTitle?: string;
  pageDescription?: string;
  path: string;
  ogImage?: string;
}): SeoMeta {
  const { locale, pageTitle, pageDescription, path, ogImage } = params;

  const siteName = BRAND.fullName;
  const title = pageTitle ? `${pageTitle} | ${siteName}` : siteName;

  const defaultDescriptions: Record<Locale, string> = {
    ru: "Единственная специализированная студия горячей йоги в Одессе. Запись через Instagram.",
    uk: "Єдина спеціалізована студія гарячої йоги в Одесі. Запис через Instagram.",
  };
  const description = pageDescription ?? defaultDescriptions[locale];

  const canonical = `${BASE_URL}/${locale}${path}`;
  const alternateRu = `${BASE_URL}/ru${path}`;
  const alternateUk = `${BASE_URL}/uk${path}`;

  return {
    title,
    description,
    canonical,
    alternateRu,
    alternateUk,
    ogImage: ogImage ?? OG_IMAGE,
  };
}

export function buildJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: BRAND.fullName,
    description:
      locale === "ru"
        ? "Единственная специализированная студия горячей йоги в Одессе (38–40°C)"
        : "Єдина спеціалізована студія гарячої йоги в Одесі (38–40°C)",
    url: `${BASE_URL}/${locale}`,
    sameAs: [BRAND.instagram],
    image: OG_IMAGE,
    priceRange: "$$",
    sport: "Hot Yoga",
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "ru" ? "Одесса" : "Одеса",
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
