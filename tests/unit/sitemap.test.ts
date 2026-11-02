import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";

describe("Sitemap Generator", () => {
  it("should generate a complete list of routes", () => {
    const sitemapEntries = sitemap();
    expect(sitemapEntries.length).toBe(36);
  });

  it("should cover uk, en, and ru routes equally", () => {
    const sitemapEntries = sitemap();
    const ukrainianEntries = sitemapEntries.filter(
      (entry) => !entry.url.includes("/en") && !entry.url.includes("/ru")
    );
    const englishEntries = sitemapEntries.filter((entry) =>
      entry.url.includes("/en")
    );
    const russianEntries = sitemapEntries.filter((entry) =>
      entry.url.includes("/ru")
    );

    expect(ukrainianEntries.length).toBe(12);
    expect(englishEntries.length).toBe(12);
    expect(russianEntries.length).toBe(12);
  });

  it("should assign highest priority to homepages", () => {
    const sitemapEntries = sitemap();
    const homeUk = sitemapEntries.find((entry) => entry.url === "https://balance-odessa.com");
    const homeEn = sitemapEntries.find((entry) => entry.url === "https://balance-odessa.com/en");
    const homeRu = sitemapEntries.find((entry) => entry.url === "https://balance-odessa.com/ru");

    expect(homeUk?.priority).toBe(1.0);
    expect(homeEn?.priority).toBe(1.0);
    expect(homeRu?.priority).toBe(1.0);
  });
});
