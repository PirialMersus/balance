import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { HomeView } from "@/views/HomeView";
import { BookingProvider } from "@/components/booking/BookingContext";

describe("HomeView Component and Sections", () => {
  it("should render all homepage sections in ukrainian", () => {
    render(
      <BookingProvider>
        <HomeView locale="uk" />
      </BookingProvider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByText(/38–40°C/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Гаряча йога/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Марія Миронова/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Часті запитання/i)).toBeInTheDocument();
  });

  it("should render all homepage sections in english", () => {
    render(
      <BookingProvider>
        <HomeView locale="en" />
      </BookingProvider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByText(/Hot Yoga/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Миронова/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
  });

  it("should render all homepage sections in russian", () => {
    render(
      <BookingProvider>
        <HomeView locale="ru" />
      </BookingProvider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByText(/Горячая йога/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Миронова/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Частые вопросы/i)).toBeInTheDocument();
  });

  it("should toggle FAQ accordion answers when question buttons are clicked", () => {
    render(
      <BookingProvider>
        <HomeView locale="uk" />
      </BookingProvider>
    );

    const faqButtons = screen.getAllByRole("button", {
      name: /\?/i,
    });
    expect(faqButtons.length).toBeGreaterThanOrEqual(4);

    const firstFaqButton = faqButtons[0];
    expect(firstFaqButton).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(firstFaqButton);
    expect(firstFaqButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(firstFaqButton);
    expect(firstFaqButton).toHaveAttribute("aria-expanded", "true");
  });
});
