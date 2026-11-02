import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingModal from "@/components/booking/BookingModal";
import * as telegramService from "@/lib/telegram";

describe("BookingModal Component", () => {
  const defaultCloseHandler = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should not render modal in DOM when isOpen is false", () => {
    render(
      <BookingModal
        locale="uk"
        isOpen={false}
        onClose={defaultCloseHandler}
      />
    );

    expect(screen.queryByText("Запис на практику")).not.toBeInTheDocument();
  });

  it("should render modal form when isOpen is true in ukrainian", () => {
    render(
      <BookingModal
        locale="uk"
        isOpen={true}
        onClose={defaultCloseHandler}
      />
    );

    expect(screen.getByText("Запис на практику")).toBeInTheDocument();
    expect(screen.getByText(/ЖК «Одісей»/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Надіслати заявку" })).toBeInTheDocument();
  });

  it("should render modal form in english", () => {
    render(
      <BookingModal
        locale="en"
        isOpen={true}
        onClose={defaultCloseHandler}
      />
    );

    expect(screen.getByText("Book a Practice")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit Booking" })).toBeInTheDocument();
  });

  it("should render modal form in russian", () => {
    render(
      <BookingModal
        locale="ru"
        isOpen={true}
        onClose={defaultCloseHandler}
      />
    );

    expect(screen.getByText("Запись на практику")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Отправить заявку" })).toBeInTheDocument();
  });

  it("should preselect pass-8 choice when bookingDetails tariff is provided", () => {
    render(
      <BookingModal
        locale="uk"
        isOpen={true}
        onClose={defaultCloseHandler}
        bookingDetails={{ tariffTitle: "Абонемент на 8 занять" }}
      />
    );

    const passButton = screen.getByRole("button", {
      name: /Абонемент на 8 занять/i,
    });
    expect(passButton.className).toContain("border-[#B87557]");
  });

  it("should send booking directly to Telegram and show success screen", async () => {
    const sendBookingSpy = vi
      .spyOn(telegramService, "sendBookingToTelegram")
      .mockResolvedValueOnce({ success: true });

    render(
      <BookingModal
        locale="uk"
        isOpen={true}
        onClose={defaultCloseHandler}
      />
    );

    const nameInput = screen.getByPlaceholderText(/Ваше ім'я/i);
    const contactInput = screen.getByPlaceholderText(/Телефон або @telegram/i);

    fireEvent.change(nameInput, { target: { value: "Оксана" } });
    fireEvent.change(contactInput, { target: { value: "+380501112233" } });

    const submitButton = screen.getByRole("button", { name: "Надіслати заявку" });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(sendBookingSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          guestName: "Оксана",
          guestContact: "+380501112233",
          locale: "uk",
        })
      );
    });

    expect(await screen.findByText("Заявку прийнято!")).toBeInTheDocument();
    expect(
      screen.getByText(/Ми вже отримали вашу заявку в Telegram/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Зрозуміло" })).toBeInTheDocument();
  });

  it("should display error message when Telegram submission fails", async () => {
    vi.spyOn(telegramService, "sendBookingToTelegram").mockResolvedValueOnce({
      success: false,
      error: "Network error",
    });

    render(
      <BookingModal
        locale="uk"
        isOpen={true}
        onClose={defaultCloseHandler}
      />
    );

    fireEvent.change(screen.getByPlaceholderText(/Ваше ім'я/i), {
      target: { value: "Оксана" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Телефон або @telegram/i), {
      target: { value: "+380501112233" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Надіслати заявку" }));

    expect(
      await screen.findByText(/Не вдалося надіслати заявку/i)
    ).toBeInTheDocument();
  });

  it("should trigger onClose after close button click", async () => {
    render(
      <BookingModal
        locale="uk"
        isOpen={true}
        onClose={defaultCloseHandler}
      />
    );

    const closeButton = screen.getByRole("button", {
      name: "Закрити",
    });
    fireEvent.click(closeButton);

    await waitFor(
      () => {
        expect(defaultCloseHandler).toHaveBeenCalled();
      },
      { timeout: 500 }
    );
  });
});
