"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";

interface BookingModalProps {
  locale: Locale;
  isOpen: boolean;
  onClose: () => void;
  initialPracticeSlug?: string;
}

type PracticeChoice = "trial" | "hot-yoga" | "question";

export default function BookingModal({
  locale,
  isOpen,
  onClose,
  initialPracticeSlug,
}: BookingModalProps) {
  const [isRenderedInDom, setIsRenderedInDom] = useState(false);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<PracticeChoice>("trial");
  const [guestName, setGuestName] = useState("");
  const [guestContact, setGuestContact] = useState("");
  const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);
  const animationTimerReference = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startCloseAnimationSequence = useCallback(() => {
    setIsAnimationActive(false);
    if (animationTimerReference.current) {
      clearTimeout(animationTimerReference.current);
    }
    animationTimerReference.current = setTimeout(() => {
      setIsRenderedInDom(false);
      setIsRequestSubmitted(false);
      onClose();
    }, 280);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      if (initialPracticeSlug === "first-trial") {
        setSelectedChoice("trial");
      } else if (initialPracticeSlug === "hot-yoga-base") {
        setSelectedChoice("hot-yoga");
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
      setIsRequestSubmitted(false);
    }
  }, [isOpen, initialPracticeSlug, startCloseAnimationSequence]);

  if (!isRenderedInDom) return null;

  const choiceOptions = [
    {
      id: "trial" as PracticeChoice,
      labelRu: "Пробное занятие",
      labelUk: "Пробне заняття",
    },
    {
      id: "hot-yoga" as PracticeChoice,
      labelRu: "Hot Yoga (38–40°C)",
      labelUk: "Hot Yoga (38–40°C)",
    },
    {
      id: "question" as PracticeChoice,
      labelRu: "Узнать расписание",
      labelUk: "Дізнатися розклад",
    },
  ];

  const handleFormSubmission = (formEvent: React.FormEvent) => {
    formEvent.preventDefault();

    const selectedOption = choiceOptions.find((item) => item.id === selectedChoice);
    const chosenFormatName = locale === "ru" ? selectedOption?.labelRu : selectedOption?.labelUk;

    const directMessagePayload =
      locale === "ru"
        ? `Здравствуйте! Хочу записаться в студию Баланс.\n\n• Формат: ${chosenFormatName}\n• Имя: ${guestName}\n• Контакт: ${guestContact}\n\nПодскажите, пожалуйста, свободное время?`
        : `Вітаю! Хочу записатися до студії Баланс.\n\n• Формат: ${chosenFormatName}\n• Ім'я: ${guestName}\n• Контакт: ${guestContact}\n\nПідкажіть, будь ласка, вільний час?`;

    const encodedInstagramPayload = encodeURIComponent(directMessagePayload);
    window.open(`${BRAND.instagram}?text=${encodedInstagramPayload}`, "_blank", "noopener,noreferrer");

    setIsRequestSubmitted(true);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        isAnimationActive
          ? "bg-black/70 backdrop-blur-md opacity-100"
          : "bg-black/0 backdrop-blur-none opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      onClick={startCloseAnimationSequence}
    >
      <div
        className={`relative w-full max-w-md bg-[#1F2620] border border-[#B87557]/30 rounded-3xl p-6 sm:p-8 text-[#F5F2E9] shadow-2xl transition-all duration-300 ease-out transform ${
          isAnimationActive
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        onClick={(clickEvent) => clickEvent.stopPropagation()}
      >
        <button
          type="button"
          onClick={startCloseAnimationSequence}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#E8DFD1] hover:text-white transition-all cursor-pointer"
          aria-label={locale === "ru" ? "Закрыть" : "Закрити"}
        >
          <svg
            width="12"
            height="12"
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

        {isRequestSubmitted ? (
          <div className="py-6 text-center space-y-5 animate-fade-in-up">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#B87557] to-[#D4793A] flex items-center justify-center text-white shadow-lg shadow-[#B87557]/30">
              <svg
                width="28"
                height="28"
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

            <div className="space-y-1.5">
              <h3 className="font-serif italic text-2xl sm:text-3xl text-white">
                {locale === "ru" ? "Заявка отправлена" : "Заявку надіслано"}
              </h3>
              <p className="text-xs sm:text-sm text-[#828A73] leading-relaxed max-w-xs mx-auto">
                {locale === "ru"
                  ? "Мы открыли диалог со студией в Instagram Direct. Напишите нам, и мы забронируем за вами коврик."
                  : "Ми відкрили діалог зі студією в Instagram Direct. Напишіть нам, і ми забронюємо за вами килимок."}
              </p>
            </div>

            <button
              type="button"
              onClick={startCloseAnimationSequence}
              className="w-full py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-medium transition-all cursor-pointer"
            >
              {locale === "ru" ? "Понятно" : "Зрозуміло"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmission} className="space-y-5">
            <div className="space-y-1 pr-6">
              <span className="text-[10px] uppercase tracking-widest text-[#B87557] font-semibold block">
                Hot Yoga · Одесса · 38–40°C
              </span>
              <h3 className="font-serif italic text-2xl sm:text-3xl text-white font-medium">
                {locale === "ru" ? "Запись на практику" : "Запис на практику"}
              </h3>
              <p className="text-xs text-[#828A73] font-light">
                {locale === "ru"
                  ? "Оставьте контакты — администратор свяжется с вами и подтвердит удобное время."
                  : "Залиште контакти — адміністратор зв'яжеться з вами та підтвердить зручний час."}
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] uppercase tracking-wider text-[#828A73] font-medium">
                {locale === "ru" ? "Что вас интересует" : "Що вас цікавить"}
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {choiceOptions.map((choiceOption) => {
                  const isChoiceSelected = selectedChoice === choiceOption.id;
                  return (
                    <button
                      key={choiceOption.id}
                      type="button"
                      onClick={() => setSelectedChoice(choiceOption.id)}
                      className={`py-2 px-3.5 rounded-xl text-left text-xs transition-all cursor-pointer border flex items-center justify-between ${
                        isChoiceSelected
                          ? "bg-[#B87557]/20 border-[#B87557] text-white ring-1 ring-[#B87557]/40"
                          : "bg-white/[0.03] border-white/10 text-[#828A73] hover:text-white hover:border-white/20"
                      }`}
                    >
                      <span className="font-medium">
                        {locale === "ru" ? choiceOption.labelRu : choiceOption.labelUk}
                      </span>
                      <span
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
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
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(inputChangeEvent) => setGuestName(inputChangeEvent.target.value)}
                  placeholder={locale === "ru" ? "Ваше имя" : "Ваше ім'я"}
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-[#B87557] focus:bg-white/[0.07] focus:ring-1 focus:ring-[#B87557] rounded-xl px-4 py-3 text-sm text-white placeholder-[#828A73] outline-none transition-all"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  value={guestContact}
                  onChange={(inputChangeEvent) => setGuestContact(inputChangeEvent.target.value)}
                  placeholder={locale === "ru" ? "Телефон или @instagram / telegram" : "Телефон або @instagram / telegram"}
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-[#B87557] focus:bg-white/[0.07] focus:ring-1 focus:ring-[#B87557] rounded-xl px-4 py-3 text-sm text-white placeholder-[#828A73] outline-none transition-all"
                />
              </div>
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#B87557] to-[#D4793A] hover:brightness-110 active:scale-[0.99] text-white font-medium text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#B87557]/25 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>{locale === "ru" ? "Записаться на занятие" : "Записатися на заняття"}</span>
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
                {locale === "ru"
                  ? "Без онлайн-оплаты · Ответим в течение 15 минут"
                  : "Без онлайн-оплати · Відповімо протягом 15 хвилин"}
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
