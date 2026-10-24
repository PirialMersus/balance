"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

interface BookingContextType {
  isBookingOpen: boolean;
  selectedPractice: string;
  openBooking: (practiceSlug?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState("hot-yoga");

  const openBooking = useCallback((practiceSlug?: string) => {
    if (practiceSlug) {
      setSelectedPractice(practiceSlug);
    }
    setIsBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsBookingOpen(false);
  }, []);

  const contextValue = useMemo(
    () => ({
      isBookingOpen,
      selectedPractice,
      openBooking,
      closeBooking,
    }),
    [isBookingOpen, selectedPractice, openBooking, closeBooking]
  );

  return (
    <BookingContext.Provider value={contextValue}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const currentContext = useContext(BookingContext);
  if (!currentContext) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return currentContext;
}
