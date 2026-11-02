"use client";

import React from "react";
import { useBooking, BookingDetails } from "@/components/booking/BookingContext";

interface BookingTriggerButtonProps {
  practiceSlug?: string;
  timeSlot?: string;
  tariffTitle?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function BookingTriggerButton({
  practiceSlug,
  timeSlot,
  tariffTitle,
  className,
  style,
  children,
}: BookingTriggerButtonProps) {
  const { openBooking } = useBooking();

  const handleButtonClick = () => {
    const details: BookingDetails = {
      practiceSlug,
      timeSlot,
      tariffTitle,
    };
    openBooking(details);
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
