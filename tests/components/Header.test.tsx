import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@/components/layout/Header";
import { BookingProvider } from "@/components/booking/BookingContext";

vi.mock("next/navigation", () => ({
  usePathname: () => "/practices",
}));

describe("Header Component", () => {
  it("should render studio name and navigation links in ukrainian", () => {
    render(
      <BookingProvider>
        <Header locale="uk" />
      </BookingProvider>
    );

    expect(screen.getByText("Баланс")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Практика" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Розклад" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Ціни" })).toBeInTheDocument();
  });

  it("should render navigation links in english", () => {
    render(
      <BookingProvider>
        <Header locale="en" />
      </BookingProvider>
    );

    expect(screen.getByRole("link", { name: "Practices" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Schedule" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pricing" })).toBeInTheDocument();
  });

  it("should render navigation links in russian", () => {
    render(
      <BookingProvider>
        <Header locale="ru" />
      </BookingProvider>
    );

    expect(screen.getByRole("link", { name: "Практики" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Расписание" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Цены" })).toBeInTheDocument();
  });

  it("should display language switcher buttons with active state", () => {
    render(
      <BookingProvider>
        <Header locale="uk" />
      </BookingProvider>
    );

    const ukraineButtons = screen.getAllByRole("link", { name: "uk" });
    const englishButtons = screen.getAllByRole("link", { name: "en" });
    const russianButtons = screen.getAllByRole("link", { name: "ru" });

    expect(ukraineButtons.length).toBeGreaterThan(0);
    expect(englishButtons.length).toBeGreaterThan(0);
    expect(russianButtons.length).toBeGreaterThan(0);
  });

  it("should toggle mobile menu when hamburger button is clicked", () => {
    render(
      <BookingProvider>
        <Header locale="uk" />
      </BookingProvider>
    );

    const mobileMenuButton = screen.getByRole("button", {
      name: "Toggle navigation menu",
    });
    expect(mobileMenuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(mobileMenuButton);
    expect(mobileMenuButton).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(window, { key: "Escape" });
    expect(mobileMenuButton).toHaveAttribute("aria-expanded", "false");
  });
});
