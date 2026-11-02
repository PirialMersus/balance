import { Locale } from "./translations";

export interface BookingSubmissionPayload {
  guestName: string;
  guestContact: string;
  chosenFormatName: string;
  selectedTimeSlot?: string | null;
  locale: Locale;
}

const DEFAULT_TELEGRAM_BOT_TOKEN =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ||
  process.env.TELEGRAM_BOT_TOKEN ||
  "9079631967:AAG1eO_Wmb5Khk3NoTov2VJYYjPO3wvg4NQ";

const DEFAULT_TELEGRAM_CHAT_ID =
  process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID ||
  process.env.TELEGRAM_CHAT_ID ||
  "-5431798705";

function escapeHtmlSpecialCharacters(rawText: string): string {
  return rawText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function formatTelegramNotificationMessage(
  payload: BookingSubmissionPayload
): string {
  const languageNames: Record<Locale, string> = {
    uk: "Українська",
    en: "English",
    ru: "Русский",
  };

  const safeGuestName = escapeHtmlSpecialCharacters(payload.guestName.trim());
  const safeGuestContact = escapeHtmlSpecialCharacters(payload.guestContact.trim());
  const safeFormatName = escapeHtmlSpecialCharacters(payload.chosenFormatName);
  const safeTimeSlot = payload.selectedTimeSlot
    ? escapeHtmlSpecialCharacters(payload.selectedTimeSlot)
    : null;

  const currentDateTimeString = new Date().toLocaleString("uk-UA", {
    timeZone: "Europe/Kyiv",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const messageLines = [
    "🔥 <b>Нова заявка на гарячу йогу | Balance</b>",
    "",
    `👤 <b>Клієнт:</b> ${safeGuestName}`,
    `📱 <b>Контакт:</b> ${safeGuestContact}`,
    `🧘 <b>Формат / Тариф:</b> ${safeFormatName}`,
    safeTimeSlot ? `⏰ <b>Бажаний час:</b> ${safeTimeSlot}` : null,
    `🌐 <b>Мова заявки:</b> ${languageNames[payload.locale]}`,
    `📅 <b>Дата:</b> ${currentDateTimeString} (Kyiv)`,
  ].filter(Boolean);

  return messageLines.join("\n");
}

export async function sendBookingToTelegram(
  payload: BookingSubmissionPayload
): Promise<{ success: boolean; error?: string }> {
  try {
    const formattedMessage = formatTelegramNotificationMessage(payload);

    const telegramEndpointUrl = `https://api.telegram.org/bot${DEFAULT_TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramEndpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: DEFAULT_TELEGRAM_CHAT_ID,
        text: formattedMessage,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.text();
      return { success: false, error: errorResponse };
    }

    return { success: true };
  } catch (caughtError) {
    const errorMessage =
      caughtError instanceof Error ? caughtError.message : "Network error";
    return { success: false, error: errorMessage };
  }
}
