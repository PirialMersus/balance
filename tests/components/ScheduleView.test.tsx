import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ScheduleView } from "@/views/ScheduleView";
import { BookingProvider } from "@/components/booking/BookingContext";

describe("ScheduleView Component", () => {
  it("should render schedule with days and classes in ukrainian", () => {
    render(
      <BookingProvider>
        <ScheduleView locale="uk" />
      </BookingProvider>
    );

    expect(screen.getByText("Розклад практик")).toBeInTheDocument();
    expect(screen.getByText("Понеділок")).toBeInTheDocument();
    expect(screen.getByText("Вівторок")).toBeInTheDocument();
    expect(screen.getByText("Середа")).toBeInTheDocument();
    expect(screen.getAllByText(/Марія Миронова/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/2 класи/i).length).toBeGreaterThan(0);
  });

  it("should render schedule in english with pluralization", () => {
    render(
      <BookingProvider>
        <ScheduleView locale="en" />
      </BookingProvider>
    );

    expect(screen.getByText("Class Schedule")).toBeInTheDocument();
    expect(screen.getByText("Monday")).toBeInTheDocument();
    expect(screen.getByText("Tuesday")).toBeInTheDocument();
    expect(screen.getAllByText(/2 classes/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Maria Mironova/i).length).toBeGreaterThan(0);
  });

  it("should render schedule in russian with pluralization", () => {
    render(
      <BookingProvider>
        <ScheduleView locale="ru" />
      </BookingProvider>
    );

    expect(screen.getByText("Расписание практик")).toBeInTheDocument();
    expect(screen.getByText("Понедельник")).toBeInTheDocument();
    expect(screen.getByText("Вторник")).toBeInTheDocument();
    expect(screen.getAllByText(/2 класса/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Мария Миронова/i).length).toBeGreaterThan(0);
  });

  it("should display recommendations section for class preparation", () => {
    render(
      <BookingProvider>
        <ScheduleView locale="uk" />
      </BookingProvider>
    );

    expect(screen.getByText(/Важливі рекомендації перед заняттям/i)).toBeInTheDocument();
    expect(screen.getByText(/Водний баланс/i)).toBeInTheDocument();
    expect(screen.getByText(/Легкий шлунок/i)).toBeInTheDocument();
    expect(screen.getByText(/Зручний одяг/i)).toBeInTheDocument();
  });

  it("should trigger booking button for selected time slot", () => {
    render(
      <BookingProvider>
        <ScheduleView locale="uk" />
      </BookingProvider>
    );

    const bookingButtons = screen.getAllByRole("button", { name: "Записатися" });
    expect(bookingButtons.length).toBeGreaterThan(0);
    fireEvent.click(bookingButtons[0]);
  });
});
