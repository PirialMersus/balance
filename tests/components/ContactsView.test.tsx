import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContactsView } from "@/views/ContactsView";

describe("ContactsView Component", () => {
  it("should render studio contact details in ukrainian", () => {
    render(<ContactsView locale="uk" />);

    expect(screen.getByText("Локація та контакти")).toBeInTheDocument();
    expect(screen.getAllByText(/Люстдорфська дорога, 55К/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ЖК «Одісей»/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Щодня: 08:30 – 21:30/i)).toBeInTheDocument();

    const mapsLink = screen.getByRole("link", { name: /Відкрити на картах Google/i });
    expect(mapsLink).toHaveAttribute("href", expect.stringContaining("google.com/maps"));
  });

  it("should render studio contact details in english", () => {
    render(<ContactsView locale="en" />);

    expect(screen.getByText("Location & Contacts")).toBeInTheDocument();
    expect(screen.getAllByText(/Liustdorfska/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Odisey/i).length).toBeGreaterThan(0);

    const mapsLink = screen.getByRole("link", { name: /Open in Google Maps/i });
    expect(mapsLink).toHaveAttribute("href", expect.stringContaining("google.com/maps"));
  });

  it("should render studio contact details in russian", () => {
    render(<ContactsView locale="ru" />);

    expect(screen.getByText("Локация и контакты")).toBeInTheDocument();
    expect(screen.getAllByText(/Люстдорфская дорога, 55К/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ЖК «Одиссей»/i).length).toBeGreaterThan(0);

    const mapsLink = screen.getByRole("link", { name: /Открыть на картах Google/i });
    expect(mapsLink).toHaveAttribute("href", expect.stringContaining("google.com/maps"));
  });

  it("should display direct instagram link with correct profile url", () => {
    render(<ContactsView locale="uk" />);

    const instagramButton = screen.getByRole("link", {
      name: /Відкрити Instagram/i,
    });
    expect(instagramButton).toHaveAttribute(
      "href",
      "https://www.instagram.com/yoga_balance_odessa/"
    );
  });

  it("should render embedded google maps iframe and directions link", () => {
    render(<ContactsView locale="uk" />);

    const iframeElement = screen.getByTitle("Google Maps Location");
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute("src", expect.stringContaining("maps.google.com/maps"));
    expect(iframeElement).toHaveAttribute("loading", "lazy");

    const directionsLink = screen.getByRole("link", { name: /Прокласти маршрут/i });
    expect(directionsLink).toBeInTheDocument();
    expect(directionsLink).toHaveAttribute("href", expect.stringContaining("google.com/maps"));
  });
});
