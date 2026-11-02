import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { BRAND, getAssetPath } from "@/lib/brand";

describe("Brand Configuration and getAssetPath", () => {
  const originalEnvironment = process.env;

  beforeEach(() => {
    process.env = { ...originalEnvironment };
  });

  afterEach(() => {
    process.env = originalEnvironment;
  });

  it("should contain studio identity and name", () => {
    expect(BRAND.name).toBe("Balance");
    expect(BRAND.fullName).toContain("Balance");
    expect(BRAND.instagramHandle).toBe("@yoga_balance_odessa");
    expect(BRAND.instagram).toContain("instagram.com/yoga_balance_odessa");
  });

  it("should contain address details in uk, en, and ru", () => {
    expect(BRAND.address).toContain("Люстдорфська");
    expect(BRAND.addressRu).toContain("Люстдорфская");
    expect(BRAND.addressEn).toContain("Liustdorfska");
    expect(BRAND.address).toContain("ЖК «Одісей»");
    expect(BRAND.addressRu).toContain("ЖК «Одиссей»");
  });

  it("should contain map search link", () => {
    expect(BRAND.mapUrl).toContain("google.com/maps");
  });

  it("should return unchanged path when base path is empty", () => {
    delete process.env.NEXT_PUBLIC_BASE_PATH;
    const testImagePath = "/images/hero-bg.webp";
    expect(getAssetPath(testImagePath)).toBe(testImagePath);
  });

  it("should prefix asset path with NEXT_PUBLIC_BASE_PATH when set", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "/balance";
    const testImagePath = "/images/hero-bg.webp";
    expect(getAssetPath(testImagePath)).toBe("/balance/images/hero-bg.webp");
  });

  it("should handle paths without leading slash gracefully", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "/balance";
    const testImagePath = "images/hero-bg.webp";
    expect(getAssetPath(testImagePath)).toBe("/balance/images/hero-bg.webp");
  });
});
