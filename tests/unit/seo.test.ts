import { describe, it, expect } from "vitest";
import { getLocalizedPath, buildSeoMeta, buildJsonLd } from "@/lib/seo";

describe("SEO Helpers and Metadata Generation", () => {
  describe("getLocalizedPath", () => {
    it("should return root for ukrainian root path", () => {
      expect(getLocalizedPath("uk", "")).toBe("/");
      expect(getLocalizedPath("uk", "/")).toBe("/");
    });

    it("should return clean paths without prefix for ukrainian", () => {
      expect(getLocalizedPath("uk", "/practices")).toBe("/practices");
      expect(getLocalizedPath("uk", "schedule")).toBe("/schedule");
    });

    it("should prepend language prefix for english and russian", () => {
      expect(getLocalizedPath("en", "")).toBe("/en");
      expect(getLocalizedPath("en", "/")).toBe("/en");
      expect(getLocalizedPath("en", "/practices")).toBe("/en/practices");

      expect(getLocalizedPath("ru", "")).toBe("/ru");
      expect(getLocalizedPath("ru", "/")).toBe("/ru");
      expect(getLocalizedPath("ru", "/practices")).toBe("/ru/practices");
    });
  });

  describe("buildSeoMeta", () => {
    it("should generate full metadata with canonical and alternates for uk", () => {
      const meta = buildSeoMeta({ locale: "uk", path: "/pricing" });
      expect(meta.canonical).toBe("https://balance-odessa.com/pricing");
      expect(meta.alternateUk).toBe("https://balance-odessa.com/pricing");
      expect(meta.alternateEn).toBe("https://balance-odessa.com/en/pricing");
      expect(meta.alternateRu).toBe("https://balance-odessa.com/ru/pricing");
      expect(meta.ogImage).toMatch(/\.webp$/);
    });

    it("should generate full metadata for en locale", () => {
      const meta = buildSeoMeta({ locale: "en", path: "/pricing" });
      expect(meta.canonical).toBe("https://balance-odessa.com/en/pricing");
      expect(meta.title).toBeTruthy();
      expect(meta.description).toBeTruthy();
    });

    it("should generate full metadata for ru locale", () => {
      const meta = buildSeoMeta({ locale: "ru", path: "/pricing" });
      expect(meta.canonical).toBe("https://balance-odessa.com/ru/pricing");
      expect(meta.title).toBeTruthy();
      expect(meta.description).toBeTruthy();
    });
  });

  describe("buildJsonLd", () => {
    it("should generate schema.org SportsActivityLocation with address and coordinates", () => {
      const structuredData = buildJsonLd("uk");

      expect(structuredData["@context"]).toBe("https://schema.org");
      expect(structuredData["@type"]).toBe("SportsActivityLocation");
      expect(structuredData.name).toContain("Баланс");
      expect(structuredData.address.streetAddress).toContain("Люстдорфська");
      expect(structuredData.geo.latitude).toBeCloseTo(46.4172, 2);
    });

    it("should localize schema address for russian locale", () => {
      const structuredData = buildJsonLd("ru");
      expect(structuredData.address.streetAddress).toContain("Люстдорфская");
    });
  });
});
