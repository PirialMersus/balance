import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  formatTelegramNotificationMessage,
  sendBookingToTelegram,
  BookingSubmissionPayload,
} from "@/lib/telegram";

describe("Telegram Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const testPayload: BookingSubmissionPayload = {
    guestName: "Олена Шевченко",
    guestContact: "+380 98 123 45 67",
    chosenFormatName: "Пробне заняття (350 ₴)",
    selectedTimeSlot: "Понеділок 09:00",
    locale: "uk",
  };

  it("should format notification message in HTML with all required fields", () => {
    const formatted = formatTelegramNotificationMessage(testPayload);

    expect(formatted).toContain("🔥 <b>Нова заявка на гарячу йогу | Balance</b>");
    expect(formatted).toContain("👤 <b>Клієнт:</b> Олена Шевченко");
    expect(formatted).toContain("📱 <b>Контакт:</b> +380 98 123 45 67");
    expect(formatted).toContain("🧘 <b>Формат / Тариф:</b> Пробне заняття (350 ₴)");
    expect(formatted).toContain("⏰ <b>Бажаний час:</b> Понеділок 09:00");
    expect(formatted).toContain("🌐 <b>Мова заявки:</b> Українська");
    expect(formatted).toContain("📅 <b>Дата:</b>");
  });

  it("should escape HTML special characters to prevent HTML injection", () => {
    const dangerousPayload: BookingSubmissionPayload = {
      guestName: "Иван <script>alert(1)</script> & Co",
      guestContact: "telegram @user > admin",
      chosenFormatName: "Test <b>bold</b>",
      selectedTimeSlot: null,
      locale: "ru",
    };

    const formatted = formatTelegramNotificationMessage(dangerousPayload);

    expect(formatted).toContain("&lt;script&gt;alert(1)&lt;/script&gt; &amp; Co");
    expect(formatted).toContain("telegram @user &gt; admin");
    expect(formatted).toContain("Test &lt;b&gt;bold&lt;/b&gt;");
    expect(formatted).not.toContain("<script>");
  });

  it("should successfully send booking via fetch to Telegram Bot API", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ ok: true }),
    } as Response);

    const result = await sendBookingToTelegram(testPayload);

    expect(result.success).toBe(true);
    expect(fetchSpy).toHaveBeenCalledWith(
      expect.stringContaining("https://api.telegram.org/bot"),
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: expect.stringContaining("Олена Шевченко"),
      })
    );
  });

  it("should handle Telegram API error response gracefully", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: false,
      text: () => Promise.resolve("Bad Request: chat not found"),
    } as Response);

    const result = await sendBookingToTelegram(testPayload);

    expect(result.success).toBe(false);
    expect(result.error).toContain("Bad Request");
  });
});
