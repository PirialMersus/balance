"use client";

import React from "react";
import { useBooking } from "@/components/booking/BookingContext";

interface BookingTriggerButtonProps {
  practiceSlug?: string;
  timeSlot?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function BookingTriggerButton({
  practiceSlug,
  timeSlot,
  className,
  style,
  children,
}: BookingTriggerButtonProps) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => openBooking(practiceSlug || timeSlot)}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
