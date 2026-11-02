"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";
import { BookingDetails } from "@/components/booking/BookingContext";

interface BookingModalProps {
  locale: Locale;
  isOpen: boolean;
  onClose: () => void;
  initialPracticeSlug?: string;
  bookingDetails?: BookingDetails;
}

type PracticeChoice = "trial" | "pass-8" | "hot-yoga" | "private" | "question";

export default function BookingModal({
  locale,
  isOpen,
  onClose,
  initialPracticeSlug,
  bookingDetails,
}: BookingModalProps) {
  const [isRenderedInDom, setIsRenderedInDom] = useState(false);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<PracticeChoice>("trial");
  const [guestName, setGuestName] = useState("");
  const [guestContact, setGuestContact] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [isReadyToSendMessage, setIsReadyToSendMessage] = useState(false);
  const [hasCopiedMessageToClipboard, setHasCopiedMessageToClipboard] = useState(false);
  const animationTimerReference = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyResetTimerReference = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startCloseAnimationSequence = useCallback(() => {
    setIsAnimationActive(false);
    if (animationTimerReference.current) {
      clearTimeout(animationTimerReference.current);
    }
    animationTimerReference.current = setTimeout(() => {
      setIsRenderedInDom(false);
      setIsReadyToSendMessage(false);
      setHasCopiedMessageToClipboard(false);
      onClose();
    }, 280);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      if (bookingDetails?.tariffTitle) {
        const lowerTariff = bookingDetails.tariffTitle.toLowerCase();
        if (bookingDetails.tariffTitle.includes("8") || lowerTariff.includes("абонемент")) {
          setSelectedChoice("pass-8");
        } else if (lowerTariff.includes("індивіду") || lowerTariff.includes("индивиду") || lowerTariff.includes("private")) {
          setSelectedChoice("private");
        } else {
          setSelectedChoice("trial");
        }
      } else if (bookingDetails?.timeSlot) {
        setSelectedChoice("hot-yoga");
        setSelectedTimeSlot(bookingDetails.timeSlot);
      } else if (initialPracticeSlug === "first-trial") {
        setSelectedChoice("trial");
        setSelectedTimeSlot(null);
      } else if (initialPracticeSlug === "hot-yoga-base" || initialPracticeSlug === "hot-yoga") {
        setSelectedChoice("hot-yoga");
        setSelectedTimeSlot(null);
      } else {
        setSelectedTimeSlot(null);
      }

      setIsRenderedInDom(true);
      const openAnimationFrame = requestAnimationFrame(() => {
        setIsAnimationActive(true);
      });
      const previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleEscapeKeyPress = (keyboardEvent: KeyboardEvent) => {
        if (keyboardEvent.key === "Escape") {
          startCloseAnimationSequence();
        }
      };

      window.addEventListener("keydown", handleEscapeKeyPress);

      return () => {
        cancelAnimationFrame(openAnimationFrame);
        document.body.style.overflow = previousBodyOverflow;
        window.removeEventListener("keydown", handleEscapeKeyPress);
        if (animationTimerReference.current) {
          clearTimeout(animationTimerReference.current);
        }
        if (copyResetTimerReference.current) {
          clearTimeout(copyResetTimerReference.current);
        }
      };
    } else {
      setIsAnimationActive(false);
      setIsRenderedInDom(false);
      setIsReadyToSendMessage(false);
      setHasCopiedMessageToClipboard(false);
    }
  }, [isOpen, initialPracticeSlug, bookingDetails, startCloseAnimationSequence]);

  if (!isRenderedInDom) return null;

  const choiceOptions = [
    {
      id: "trial" as PracticeChoice,
      labelUk: "Пробне заняття (350 ₴)",
      labelEn: "Trial Class (350 ₴)",
      labelRu: "Пробное занятие (350 ₴)",
    },
    {
      id: "pass-8" as PracticeChoice,
      labelUk: "Абонемент на 8 занять (3 200 ₴)",
      labelEn: "8-Class Pass (3 200 ₴)",
      labelRu: "Абонемент на 8 занятий (3 200 ₴)",
    },
    {
      id: "hot-yoga" as PracticeChoice,
      labelUk: "Гаряча йога за розкладом",
      labelEn: "Hot Yoga Scheduled Class",
      labelRu: "Горячая йога по расписанию",
    },
    {
      id: "private" as PracticeChoice,
      labelUk: "Індивідуальна практика (1 400 ₴)",
      labelEn: "Private 1-on-1 Practice (1 400 ₴)",
      labelRu: "Индивидуальная практика (1 400 ₴)",
    },
    {
      id: "question" as PracticeChoice,
      labelUk: "Консультація та розклад",
      labelEn: "Schedule & Consultation",
      labelRu: "Консультация и расписание",
    },
  ];

  const selectedOptionObject = choiceOptions.find((item) => item.id === selectedChoice);
  const chosenFormatName = locale === "en"
    ? selectedOptionObject?.labelEn
    : (locale === "ru" ? selectedOptionObject?.labelRu : selectedOptionObject?.labelUk);

  const preparedMessageText = locale === "en"
    ? `Hello! I would like to book a session at Balance Hot Yoga (Odesa).\n\n• Option: ${chosenFormatName}${
        selectedTimeSlot ? `\n• Preferred Time: ${selectedTimeSlot}` : ""
      }\n• Name: ${guestName}\n• Contact: ${guestContact}\n\nPlease confirm availability for this slot.`
    : (locale === "ru"
      ? `Здравствуйте! Хочу записаться в студию Balance Hot Yoga (Одесса).\n\n• Направление / Тариф: ${chosenFormatName}${
          selectedTimeSlot ? `\n• Желаемое время: ${selectedTimeSlot}` : ""
        }\n• Имя: ${guestName}\n• Контактный телефон: ${guestContact}\n\nПодскажите, пожалуйста, наличие свободного места?`
      : `Вітаю! Хочу записатися до студії Balance Hot Yoga (Одеса).\n\n• Напрям / Тариф: ${chosenFormatName}${
          selectedTimeSlot ? `\n• Бажаний час: ${selectedTimeSlot}` : ""
        }\n• Ім'я: ${guestName}\n• Контактний телефон: ${guestContact}\n\nПідкажіть, будь ласка, наявність вільного місця?`);

  const handleFormSubmission = (formEvent: React.FormEvent) => {
    formEvent.preventDefault();
    setIsReadyToSendMessage(true);
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(preparedMessageText);
      setHasCopiedMessageToClipboard(true);
      if (copyResetTimerReference.current) {
        clearTimeout(copyResetTimerReference.current);
      }
      copyResetTimerReference.current = setTimeout(() => {
        setHasCopiedMessageToClipboard(false);
      }, 3000);
    } catch {
      setHasCopiedMessageToClipboard(false);
    }
  };

  const handleOpenInstagramDirect = () => {
    const encodedPayload = encodeURIComponent(preparedMessageText);
    const directUrl = `${BRAND.instagram}?text=${encodedPayload}`;
    window.open(directUrl, "_blank", "noopener,noreferrer");
  };

  const copyButtonLabel = hasCopiedMessageToClipboard
    ? (locale === "en" ? "✓ Copied to clipboard" : (locale === "ru" ? "✓ Текст скопирован" : "✓ Текст скопійовано"))
    : (locale === "en" ? "Copy Message Text" : (locale === "ru" ? "Скопировать текст заявки" : "Скопіювати текст заявки"));

  const directButtonLabel = locale === "en" ? "Open Instagram Direct" : (locale === "ru" ? "Перейти в Instagram Direct" : "Перейти в Instagram Direct");
  const changeDataLabel = locale === "en" ? "← Change information" : (locale === "ru" ? "← Изменить данные или время" : "← Змінити дані або час");

  const badgeHeader = locale === "en"
    ? "Hot Yoga · Odisey Complex · 38–40°C"
    : (locale === "ru" ? "Hot Yoga · ЖК «Одиссей» · 38–40°C" : "Hot Yoga · ЖК «Одісей» · 38–40°C");

  const modalHeading = locale === "en" ? "Book a Practice" : (locale === "ru" ? "Запись на практику" : "Запис на практику");
  const modalSub = locale === "en"
    ? "Leave your name and phone — we will reserve your mat."
    : (locale === "ru" ? "Оставьте имя и телефон — мы забронируем коврик за вами." : "Залиште ім'я та телефон — ми зарезервуємо килимок за вами.");

  const choiceCategoryLabel = locale === "en" ? "Select Format / Pass" : (locale === "ru" ? "Направление или тариф" : "Напрям або тариф");
  const submitButtonLabel = locale === "en" ? "Continue Booking" : (locale === "ru" ? "Продолжить запись" : "Продовжити запис");

  const submitFooterNote = locale === "en"
    ? "No upfront payment · Direct confirmation in 10–15 mins"
    : (locale === "ru" ? "Без предоплаты на сайте · Подтверждение за 10–15 минут" : "Без передплати на сайті · Підтвердження за 10–15 хвилин");

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        isAnimationActive
          ? "bg-black/75 backdrop-blur-md opacity-100"
          : "bg-black/0 backdrop-blur-none opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={startCloseAnimationSequence}
    >
      <div
        className={`relative w-full max-w-md bg-[#1F2620] border border-[#B87557]/30 rounded-3xl p-6 sm:p-8 text-[#F5F2E9] shadow-2xl transition-all duration-300 ease-out transform max-h-[92vh] overflow-y-auto ${
          isAnimationActive
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        onClick={(clickEvent) => clickEvent.stopPropagation()}
      >
        <button
          type="button"
          onClick={startCloseAnimationSequence}
          className="absolute top-4 right-4 min-w-[44px] min-h-[44px] rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#E8DFD1] hover:text-white transition-all cursor-pointer"
          aria-label={locale === "en" ? "Close" : (locale === "ru" ? "Закрыть" : "Закрити")}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="1" y1="1" x2="13" y2="13" />
            <line x1="1" y1="1" x2="13" y2="13" />
          </svg>
        </button>

        {isReadyToSendMessage ? (
          <div className="py-2 space-y-5 animate-fade-in-up">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#B87557] to-[#D4793A] flex items-center justify-center text-white shadow-lg shadow-[#B87557]/30">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>

              <h3
                id="booking-modal-title"
                className="font-serif italic text-2xl sm:text-3xl text-white font-medium"
              >
                {locale === "en"
                  ? "Send Request in Direct"
                  : (locale === "ru" ? "Завершите запись в Direct" : "Завершіть запис у Direct")}
              </h3>
              <p className="text-xs text-[#828A73] leading-relaxed max-w-sm mx-auto">
                {locale === "en"
                  ? "Your reservation request is prepared. Tap below to open Direct or copy the message text:"
                  : (locale === "ru"
                    ? "Мы сформировали текст вашей заявки. Нажмите кнопку для перехода в Direct или скопируйте текст:"
                    : "Ми сформували текст вашої заявки. Натисніть кнопку, щоб перейти в Direct, або скопіюйте текст для повідомлення:")}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
              <pre className="text-xs text-[#EAE5D9] whitespace-pre-wrap font-sans leading-relaxed select-all">
                {preparedMessageText}
              </pre>

              <button
                type="button"
                onClick={handleCopyToClipboard}
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-white font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer min-h-[44px]"
              >
                <span>{copyButtonLabel}</span>
              </button>
            </div>

            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={handleOpenInstagramDirect}
                className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-gradient-to-r from-[#B87557] to-[#D4793A] hover:brightness-110 active:scale-[0.99] text-white font-medium text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#B87557]/25 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{directButtonLabel}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => setIsReadyToSendMessage(false)}
                className="w-full py-2.5 text-xs text-[#828A73] hover:text-white transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                {changeDataLabel}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmission} className="space-y-4">
            <div className="space-y-1 pr-8">
              <span className="text-[10px] uppercase tracking-widest text-[#B87557] font-semibold block">
                {badgeHeader}
              </span>
              <h3
                id="booking-modal-title"
                className="font-serif italic text-2xl sm:text-3xl text-white font-medium"
              >
                {modalHeading}
              </h3>
              <p className="text-xs text-[#828A73] font-light">
                {modalSub}
              </p>
            </div>

            {selectedTimeSlot && (
              <div className="px-3.5 py-2 rounded-xl bg-[#B87557]/15 border border-[#B87557]/30 flex items-center justify-between text-xs text-[#EAE5D9]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B87557]" />
                  <span>{selectedTimeSlot}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedTimeSlot(null)}
                  className="text-[10px] text-[#B87557] hover:underline"
                >
                  {locale === "en" ? "Clear" : (locale === "ru" ? "Изменить" : "Змінити")}
                </button>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="block text-[11px] uppercase tracking-wider text-[#828A73] font-medium">
                {choiceCategoryLabel}
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {choiceOptions.map((choiceOption) => {
                  const isChoiceSelected = selectedChoice === choiceOption.id;
                  const itemLabel = locale === "en"
                    ? choiceOption.labelEn
                    : (locale === "ru" ? choiceOption.labelRu : choiceOption.labelUk);

                  return (
                    <button
                      key={choiceOption.id}
                      type="button"
                      onClick={() => setSelectedChoice(choiceOption.id)}
                      className={`min-h-[44px] py-2.5 px-3.5 rounded-xl text-left text-xs transition-all cursor-pointer border flex items-center justify-between ${
                        isChoiceSelected
                          ? "bg-[#B87557]/20 border-[#B87557] text-white ring-1 ring-[#B87557]/40"
                          : "bg-white/[0.03] border-white/10 text-[#828A73] hover:text-white hover:border-white/20"
                      }`}
                    >
                      <span className="font-medium">{itemLabel}</span>
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isChoiceSelected ? "border-[#B87557] bg-[#B87557]" : "border-white/20"
                        }`}
                      >
                        {isChoiceSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2.5">
              <div>
                <label className="sr-only">
                  {locale === "en" ? "Your Name" : (locale === "ru" ? "Ваше имя" : "Ваше ім'я")}
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(inputChangeEvent) => setGuestName(inputChangeEvent.target.value)}
                  placeholder={locale === "en" ? "Your Name *" : (locale === "ru" ? "Ваше имя *" : "Ваше ім'я *")}
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-[#B87557] focus:bg-white/[0.07] focus:ring-1 focus:ring-[#B87557] rounded-xl px-4 py-3 text-base text-white placeholder-[#828A73] outline-none transition-all"
                />
              </div>

              <div>
                <label className="sr-only">
                  {locale === "en" ? "Phone or @instagram / telegram" : (locale === "ru" ? "Телефон или @instagram / telegram" : "Телефон або @instagram / telegram")}
                </label>
                <input
                  type="text"
                  required
                  value={guestContact}
                  onChange={(inputChangeEvent) => setGuestContact(inputChangeEvent.target.value)}
                  placeholder={locale === "en" ? "Phone or @instagram *" : (locale === "ru" ? "Телефон или @instagram *" : "Телефон або @instagram *")}
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-[#B87557] focus:bg-white/[0.07] focus:ring-1 focus:ring-[#B87557] rounded-xl px-4 py-3 text-base text-white placeholder-[#828A73] outline-none transition-all"
                />
              </div>
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-gradient-to-r from-[#B87557] to-[#D4793A] hover:brightness-110 active:scale-[0.99] text-white font-medium text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#B87557]/25 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>{submitButtonLabel}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <p className="text-center text-[10px] text-[#828A73] mt-2 font-light">
                {submitFooterNote}
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
