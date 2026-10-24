import { MetadataRoute } from "next";
import { practices } from "@/lib/practices";
import { journalArticles } from "@/lib/journal";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseDomain = "https://balance-odessa.com";
  const supportedLanguageCodes = ["ru", "uk"];

  const staticRoutePaths = [
    "",
    "/practices",
    "/schedule",
    "/pricing",
    "/studio",
    "/teachers",
    "/journal",
    "/contacts",
    "/privacy",
  ];

  const currentDate = new Date().toISOString();

  const staticRouteEntries = supportedLanguageCodes.flatMap((languageCode) =>
    staticRoutePaths.map((routePath) => ({
      url: `${baseDomain}/${languageCode}${routePath}`,
      lastModified: currentDate,
      changeFrequency: (routePath === "" ? "daily" : "weekly") as "daily" | "weekly",
      priority: routePath === "" ? 1.0 : 0.8,
    }))
  );

  const practiceRouteEntries = supportedLanguageCodes.flatMap((languageCode) =>
    practices.map((practiceItem) => ({
      url: `${baseDomain}/${languageCode}/practices/${practiceItem.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }))
  );

  const journalRouteEntries = supportedLanguageCodes.flatMap((languageCode) =>
    journalArticles.map((articleItem) => ({
      url: `${baseDomain}/${languageCode}/journal/${articleItem.slug}`,
      lastModified: articleItem.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticRouteEntries, ...practiceRouteEntries, ...journalRouteEntries];
}
