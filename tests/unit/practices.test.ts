import { describe, it, expect } from "vitest";
import { practices } from "@/lib/practices";

describe("Practices Data Model", () => {
  it("should have at least one practice defined", () => {
    expect(practices.length).toBeGreaterThan(0);
  });

  it("should define practice slugs correctly", () => {
    practices.forEach((practice) => {
      expect(practice.slug).toBeTruthy();
      expect(practice.slug).toMatch(/^[a-z0-9-]+$/);
    });
  });

  it("should have trilingual content for names and descriptions", () => {
    practices.forEach((practice) => {
      expect(practice.name.uk).toBeTruthy();
      expect(practice.name.en).toBeTruthy();
      expect(practice.name.ru).toBeTruthy();

      expect(practice.shortDescription.uk).toBeTruthy();
      expect(practice.shortDescription.en).toBeTruthy();
      expect(practice.shortDescription.ru).toBeTruthy();

      expect(practice.fullDescription.uk).toBeTruthy();
      expect(practice.fullDescription.en).toBeTruthy();
      expect(practice.fullDescription.ru).toBeTruthy();
    });
  });

  it("should define benefits in uk, en, and ru", () => {
    practices.forEach((practice) => {
      expect(practice.benefits.uk.length).toBeGreaterThanOrEqual(3);
      expect(practice.benefits.en.length).toBeGreaterThanOrEqual(3);
      expect(practice.benefits.ru.length).toBeGreaterThanOrEqual(3);
    });
  });

  it("should use webp image format for all practices", () => {
    practices.forEach((practice) => {
      expect(practice.image).toMatch(/\.webp$/);
    });
  });
});
