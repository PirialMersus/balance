import { describe, it, expect } from "vitest";
import { translations, Locale } from "@/lib/translations";

describe("Translations Integrity", () => {
  const supportedLocales: Locale[] = ["uk", "en", "ru"];

  it("should contain all supported locales", () => {
    supportedLocales.forEach((locale) => {
      expect(translations[locale]).toBeDefined();
    });
  });

  it("should have complete navigation links in all languages", () => {
    supportedLocales.forEach((locale) => {
      const navigation = translations[locale].nav;
      expect(navigation.practices).toBeTruthy();
      expect(navigation.schedule).toBeTruthy();
      expect(navigation.pricing).toBeTruthy();
      expect(navigation.studio).toBeTruthy();
      expect(navigation.contacts).toBeTruthy();
      expect(navigation.book).toBeTruthy();
      expect(navigation.switchLang).toBeTruthy();
    });
  });

  it("should have hero translations in all languages", () => {
    supportedLocales.forEach((locale) => {
      const hero = translations[locale].hero;
      expect(hero.headline).toBeTruthy();
      expect(hero.sub).toBeTruthy();
      expect(hero.ctaPractice).toBeTruthy();
      expect(hero.ctaSchedule).toBeTruthy();
    });
  });

  it("should have booking field keys across all locales", () => {
    supportedLocales.forEach((locale) => {
      const booking = translations[locale].booking;
      expect(booking.title).toBeTruthy();
      expect(booking.subtitle).toBeTruthy();
      expect(booking.name).toBeTruthy();
      expect(booking.contact).toBeTruthy();
      expect(booking.practice).toBeTruthy();
      expect(booking.time).toBeTruthy();
      expect(booking.message).toBeTruthy();
      expect(booking.submit).toBeTruthy();
      expect(booking.success).toBeTruthy();
    });
  });

  it("should have faq entries in all languages with questions and answers", () => {
    supportedLocales.forEach((locale) => {
      const faq = translations[locale].faq;
      expect(faq.title).toBeTruthy();
      expect(faq.items.length).toBeGreaterThanOrEqual(4);
      faq.items.forEach((item) => {
        expect(item.q.trim().length).toBeGreaterThan(0);
        expect(item.a.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it("should have pricing titles in all languages", () => {
    supportedLocales.forEach((locale) => {
      const pricing = translations[locale].pricing;
      expect(pricing.title).toBeTruthy();
      expect(pricing.subtitle).toBeTruthy();
      expect(pricing.askPrice).toBeTruthy();
    });
  });
});
