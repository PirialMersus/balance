"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

export interface BookingDetails {
  practiceSlug?: string;
  timeSlot?: string;
  tariffTitle?: string;
}

interface BookingContextType {
  isBookingOpen: boolean;
  selectedPractice: string;
  bookingDetails: BookingDetails;
  openBooking: (identifierOrDetails?: string | BookingDetails) => void;
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
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({});

  const openBooking = useCallback((identifierOrDetails?: string | BookingDetails) => {
    if (typeof identifierOrDetails === "string") {
      setSelectedPractice(identifierOrDetails);
      setBookingDetails({ practiceSlug: identifierOrDetails });
    } else if (identifierOrDetails && typeof identifierOrDetails === "object") {
      setBookingDetails(identifierOrDetails);
      if (identifierOrDetails.practiceSlug) {
        setSelectedPractice(identifierOrDetails.practiceSlug);
      }
    } else {
      setBookingDetails({});
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
      bookingDetails,
      openBooking,
      closeBooking,
    }),
    [isBookingOpen, selectedPractice, bookingDetails, openBooking, closeBooking]
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
