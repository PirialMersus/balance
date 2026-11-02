import { describe, it, expect } from "vitest";
import { journalArticles } from "@/lib/journal";

describe("Journal Articles Data Model", () => {
  it("should have published articles", () => {
    expect(journalArticles.length).toBeGreaterThanOrEqual(2);
  });

  it("should have unique slugs across all articles", () => {
    const slugSet = new Set<string>();
    journalArticles.forEach((article) => {
      expect(slugSet.has(article.slug)).toBe(false);
      slugSet.add(article.slug);
    });
  });

  it("should provide trilingual titles, excerpts, and contents", () => {
    journalArticles.forEach((article) => {
      expect(article.title.uk).toBeTruthy();
      expect(article.title.en).toBeTruthy();
      expect(article.title.ru).toBeTruthy();

      expect(article.excerpt.uk).toBeTruthy();
      expect(article.excerpt.en).toBeTruthy();
      expect(article.excerpt.ru).toBeTruthy();

      expect(article.body.uk.length).toBeGreaterThan(50);
      expect(article.body.en.length).toBeGreaterThan(50);
      expect(article.body.ru.length).toBeGreaterThan(50);

      expect(article.tags.uk.length).toBeGreaterThan(0);
      expect(article.tags.en.length).toBeGreaterThan(0);
      expect(article.tags.ru.length).toBeGreaterThan(0);
    });
  });

  it("should reference webp images for articles", () => {
    journalArticles.forEach((article) => {
      expect(article.image).toMatch(/\.webp$/);
    });
  });
});
