import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PricingView } from "@/views/PricingView";
import { BookingProvider } from "@/components/booking/BookingContext";

describe("PricingView Component", () => {
  it("should render pricing tiers and actual costs in ukrainian", () => {
    render(
      <BookingProvider>
        <PricingView locale="uk" />
      </BookingProvider>
    );

    expect(screen.getByText("Абонементи та ціни")).toBeInTheDocument();
    expect(screen.getByText("350 ₴")).toBeInTheDocument();
    expect(screen.getByText("3 200 ₴")).toBeInTheDocument();
    expect(screen.getByText("1 400 ₴")).toBeInTheDocument();
    expect(screen.getByText("Пробне заняття")).toBeInTheDocument();
    expect(screen.getByText("Абонемент на 8 занять")).toBeInTheDocument();
    expect(screen.getByText("Індивідуальна практика")).toBeInTheDocument();
  });

  it("should render pricing in english", () => {
    render(
      <BookingProvider>
        <PricingView locale="en" />
      </BookingProvider>
    );

    expect(screen.getByText("Memberships & Passes")).toBeInTheDocument();
    expect(screen.getByText("Trial Class")).toBeInTheDocument();
    expect(screen.getByText("8-Class Pass")).toBeInTheDocument();
    expect(screen.getByText("Private Practice")).toBeInTheDocument();
  });

  it("should render pricing in russian", () => {
    render(
      <BookingProvider>
        <PricingView locale="ru" />
      </BookingProvider>
    );

    expect(screen.getByText("Абонементы и цены")).toBeInTheDocument();
    expect(screen.getByText("Пробное занятие")).toBeInTheDocument();
    expect(screen.getByText("Абонемент на 8 занятий")).toBeInTheDocument();
    expect(screen.getByText("Индивидуальная практика")).toBeInTheDocument();
  });

  it("should trigger booking action when clicking tariff buttons", () => {
    render(
      <BookingProvider>
        <PricingView locale="uk" />
      </BookingProvider>
    );

    const trialButton = screen.getByRole("button", { name: "Записатися на пробне" });
    const passButton = screen.getByRole("button", { name: "Придбати абонемент" });
    const privateButton = screen.getByRole("button", { name: "Замовити індивідуальну" });

    expect(trialButton).toBeInTheDocument();
    expect(passButton).toBeInTheDocument();
    expect(privateButton).toBeInTheDocument();

    fireEvent.click(passButton);
  });
});
