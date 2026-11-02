import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HomeView } from "@/views/HomeView";
import { BookingProvider } from "@/components/booking/BookingContext";

describe("Accessibility, Semantics, and Markup Integrity", () => {
  it("should have proper semantic landmarks and header structure", () => {
    const { container } = render(
      <BookingProvider>
        <Header locale="uk" />
        <main>
          <HomeView locale="uk" />
        </main>
        <Footer locale="uk" />
      </BookingProvider>
    );

    const headerElement = container.querySelector("header");
    const mainElement = container.querySelector("main");
    const footerElement = container.querySelector("footer");
    const navElements = container.querySelectorAll("nav");

    expect(headerElement).toBeInTheDocument();
    expect(mainElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
    expect(navElements.length).toBeGreaterThanOrEqual(1);
  });

  it("should ensure all images have non-empty alt text and use webp format", () => {
    const { container } = render(
      <BookingProvider>
        <Header locale="uk" />
        <HomeView locale="uk" />
        <Footer locale="uk" />
      </BookingProvider>
    );

    const images = Array.from(container.querySelectorAll("img"));
    expect(images.length).toBeGreaterThan(0);

    images.forEach((img) => {
      const alt = img.getAttribute("alt");
      const src = img.getAttribute("src");

      expect(alt).toBeTruthy();
      expect(alt?.trim().length).toBeGreaterThan(0);

      if (src && !src.includes("data:") && !src.includes(".svg")) {
        expect(src).toMatch(/\.webp$/i);
      }
    });
  });

  it("should have accessible names for all buttons and interactive elements", () => {
    const { container } = render(
      <BookingProvider>
        <Header locale="uk" />
        <HomeView locale="uk" />
        <Footer locale="uk" />
      </BookingProvider>
    );

    const buttons = Array.from(container.querySelectorAll("button"));
    buttons.forEach((button) => {
      const hasAriaLabel = Boolean(button.getAttribute("aria-label"));
      const hasTextContent = Boolean(button.textContent && button.textContent.trim().length > 0);
      const isAccessible = hasAriaLabel || hasTextContent;
      expect(isAccessible).toBe(true);
    });
  });

  it("should have exactly one h1 tag on the homepage", () => {
    const { container } = render(
      <BookingProvider>
        <HomeView locale="uk" />
      </BookingProvider>
    );

    const h1Headings = container.querySelectorAll("h1");
    expect(h1Headings.length).toBe(1);
    expect(h1Headings[0].textContent?.trim().length).toBeGreaterThan(0);
  });
});
