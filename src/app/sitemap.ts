import { MetadataRoute } from "next";
import { practices } from "@/lib/practices";
import { journalArticles } from "@/lib/journal";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseDomain = "https://balance-odessa.com";

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

  const ukrainianStaticEntries = staticRoutePaths.map((routePath) => ({
    url: `${baseDomain}${routePath === "" ? "" : routePath}`,
    lastModified: currentDate,
    changeFrequency: (routePath === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: routePath === "" ? 1.0 : 0.8,
  }));

  const englishStaticEntries = staticRoutePaths.map((routePath) => ({
    url: `${baseDomain}/en${routePath}`,
    lastModified: currentDate,
    changeFrequency: (routePath === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: routePath === "" ? 1.0 : 0.8,
  }));

  const ukrainianPracticeEntries = practices.map((practiceItem) => ({
    url: `${baseDomain}/practices/${practiceItem.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const englishPracticeEntries = practices.map((practiceItem) => ({
    url: `${baseDomain}/en/practices/${practiceItem.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const ukrainianJournalEntries = journalArticles.map((articleItem) => ({
    url: `${baseDomain}/journal/${articleItem.slug}`,
    lastModified: articleItem.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const englishJournalEntries = journalArticles.map((articleItem) => ({
    url: `${baseDomain}/en/journal/${articleItem.slug}`,
    lastModified: articleItem.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...ukrainianStaticEntries,
    ...englishStaticEntries,
    ...ukrainianPracticeEntries,
    ...englishPracticeEntries,
    ...ukrainianJournalEntries,
    ...englishJournalEntries,
  ];
}
