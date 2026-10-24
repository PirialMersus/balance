"use client";

import { useBooking } from "@/components/booking/BookingContext";
import BookingModal from "@/components/booking/BookingModal";
import { Locale } from "@/lib/translations";

export default function BookingModalWrapper({ locale }: { locale: Locale }) {
  const { isBookingOpen, closeBooking, selectedPractice } = useBooking();

  return (
    <BookingModal
      locale={locale}
      isOpen={isBookingOpen}
      onClose={closeBooking}
      initialPracticeSlug={selectedPractice}
    />
  );
}
