"use client";

import React from "react";
import { useBooking } from "@/components/booking/BookingContext";

interface BookingTriggerButtonProps {
  practiceSlug?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function BookingTriggerButton({
  practiceSlug,
  className,
  style,
  children,
}: BookingTriggerButtonProps) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => openBooking(practiceSlug)}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
