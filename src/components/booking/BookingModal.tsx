"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";
import { BookingDetails } from "@/components/booking/BookingContext";
import { sendBookingToTelegram } from "@/lib/telegram";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false);
  const [submissionErrorMessage, setSubmissionErrorMessage] = useState<string | null>(null);
  const animationTimerReference = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startCloseAnimationSequence = useCallback(() => {
    setIsAnimationActive(false);
    if (animationTimerReference.current) {
      clearTimeout(animationTimerReference.current);
    }
    animationTimerReference.current = setTimeout(() => {
      setIsRenderedInDom(false);
      setIsSubmissionSuccess(false);
      setSubmissionErrorMessage(null);
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
      };
    } else {
      setIsAnimationActive(false);
      setIsRenderedInDom(false);
      setIsSubmissionSuccess(false);
      setSubmissionErrorMessage(null);
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
    ? (selectedOptionObject?.labelEn || "Trial Class")
    : (locale === "ru" ? (selectedOptionObject?.labelRu || "Пробное занятие") : (selectedOptionObject?.labelUk || "Пробне заняття"));

  const handleFormSubmission = async (formEvent: React.FormEvent) => {
    formEvent.preventDefault();
    if (!guestName.trim() || !guestContact.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionErrorMessage(null);

    const submissionResult = await sendBookingToTelegram({
      guestName,
      guestContact,
      chosenFormatName,
      selectedTimeSlot,
      locale,
    });

    setIsSubmitting(false);

    if (submissionResult.success) {
      setIsSubmissionSuccess(true);
    } else {
      setSubmissionErrorMessage(
        locale === "en"
          ? "Failed to send request. Please try again or message our Instagram."
          : (locale === "ru"
            ? "Не удалось отправить заявку. Пожалуйста, попробуйте снова."
            : "Не вдалося надіслати заявку. Будь ласка, спробуйте ще раз.")
      );
    }
  };

  const badgeHeader = locale === "en"
    ? "Hot Yoga · Odisey Complex · 38–40°C"
    : (locale === "ru" ? "Hot Yoga · ЖК «Одиссей» · 38–40°C" : "Hot Yoga · ЖК «Одісей» · 38–40°C");

  const modalHeading = locale === "en" ? "Book a Practice" : (locale === "ru" ? "Запись на практику" : "Запис на практику");
  const modalSub = locale === "en"
    ? "Leave your name and phone — we will reserve your mat."
    : (locale === "ru" ? "Оставьте имя и телефон — мы забронируем коврик за вами." : "Залиште ім'я та телефон — ми зарезервуємо килимок за вами.");

  const choiceCategoryLabel = locale === "en" ? "Select Format / Pass" : (locale === "ru" ? "Направление или тариф" : "Напрям або тариф");
  const submitButtonLabel = isSubmitting
    ? (locale === "en" ? "Sending..." : (locale === "ru" ? "Отправка..." : "Надсилання..."))
    : (locale === "en" ? "Submit Booking" : (locale === "ru" ? "Отправить заявку" : "Надіслати заявку"));

  const submitFooterNote = locale === "en"
    ? "Instant notification to studio administrators via Telegram"
    : (locale === "ru" ? "Мгновенное уведомление администраторам студии в Telegram" : "Миттєве сповіщення адміністраторам студії в Telegram");

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

        {isSubmissionSuccess ? (
          <div className="py-4 space-y-6 text-center animate-fade-in-up">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#B87557] to-[#D4793A] flex items-center justify-center text-white shadow-xl shadow-[#B87557]/30">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div className="space-y-2">
              <h3
                id="booking-modal-title"
                className="font-serif italic text-2xl sm:text-3xl text-white font-medium"
              >
                {locale === "en"
                  ? "Booking Received!"
                  : (locale === "ru" ? "Заявка принята!" : "Заявку прийнято!")}
              </h3>
              <p className="text-sm text-[#EAE5D9]/90 leading-relaxed max-w-sm mx-auto">
                {locale === "en"
                  ? `Thank you, ${guestName}! We have received your booking and will contact you shortly to confirm your mat.`
                  : (locale === "ru"
                    ? `Спасибо, ${guestName}! Мы уже получили вашу заявку в Telegram и свяжемся с вами в ближайшее время для подтверждения.`
                    : `Дякуємо, ${guestName}! Ми вже отримали вашу заявку в Telegram та зв'яжемося з вами найближчим часом для підтвердження.`)}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-left text-xs space-y-2 text-[#EAE5D9]">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#828A73]">
                  {locale === "en" ? "Format:" : (locale === "ru" ? "Формат:" : "Формат:")}
                </span>
                <span className="font-medium text-white">{chosenFormatName}</span>
              </div>
              {selectedTimeSlot && (
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#828A73]">
                    {locale === "en" ? "Time slot:" : (locale === "ru" ? "Время:" : "Час:")}
                  </span>
                  <span className="font-medium text-white">{selectedTimeSlot}</span>
                </div>
              )}
              <div className="flex justify-between pt-1">
                <span className="text-[#828A73]">
                  {locale === "en" ? "Contact:" : (locale === "ru" ? "Контакт:" : "Контакт:")}
                </span>
                <span className="font-medium text-white">{guestContact}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={startCloseAnimationSequence}
                className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-gradient-to-r from-[#B87557] to-[#D4793A] hover:brightness-110 active:scale-[0.99] text-white font-medium text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#B87557]/25 cursor-pointer"
              >
                {locale === "en" ? "Close" : (locale === "ru" ? "Понятно" : "Зрозуміло")}
              </button>

              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs text-[#828A73] hover:text-white transition-colors min-h-[44px]"
              >
                <span>Instagram: {BRAND.instagramHandle}</span>
                <span>↗</span>
              </a>
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
                  className="text-[10px] text-[#B87557] hover:underline cursor-pointer"
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
                  placeholder={locale === "en" ? "Phone or @telegram *" : (locale === "ru" ? "Телефон или @telegram *" : "Телефон або @telegram *")}
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-[#B87557] focus:bg-white/[0.07] focus:ring-1 focus:ring-[#B87557] rounded-xl px-4 py-3 text-base text-white placeholder-[#828A73] outline-none transition-all"
                />
              </div>
            </div>

            {submissionErrorMessage && (
              <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200 text-xs">
                {submissionErrorMessage}
              </div>
            )}

            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-gradient-to-r from-[#B87557] to-[#D4793A] hover:brightness-110 active:scale-[0.99] text-white font-medium text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#B87557]/25 cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-50"
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
