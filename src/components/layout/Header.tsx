"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, translations } from "@/lib/translations";
import { BRAND, getAssetPath } from "@/lib/brand";
import { useBooking } from "@/components/booking/BookingContext";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const currentPathname = usePathname() || "";
  const navigationTranslations = translations[locale].nav;
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const alternateLanguageUrl = (() => {
    if (locale === "en") {
      const strippedPathname = currentPathname.replace(/^\/en(?=\/|$)/, "");
      return strippedPathname || "/";
    }
    const cleanPathname = currentPathname === "/" ? "" : currentPathname;
    return `/en${cleanPathname}`;
  })();

  useEffect(() => {
    const handleScrollActivity = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScrollActivity, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollActivity);
  }, []);

  const routePrefix = locale === "en" ? "/en" : "";

  const headerNavigationLinks = [
    { href: `${routePrefix}/practices`, label: navigationTranslations.practices },
    { href: `${routePrefix}/schedule`, label: navigationTranslations.schedule },
    { href: `${routePrefix}/pricing`, label: navigationTranslations.pricing },
    { href: `${routePrefix}/studio`, label: navigationTranslations.studio },
    { href: `${routePrefix}/teachers`, label: translations[locale].teachers.title },
    { href: `${routePrefix}/journal`, label: translations[locale].journal.title },
    { href: `${routePrefix}/contacts`, label: navigationTranslations.contacts },
  ];

  const homePageUrl = locale === "en" ? "/en" : "/";
  const studioSubtitle = locale === "uk" ? "Hot Yoga · Одеса" : "Hot Yoga · Odesa";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1A2019]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#828A73]/20"
            : "bg-gradient-to-b from-[#1A2019]/80 via-[#1A2019]/40 to-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 lg:gap-8">
            <Link
              href={homePageUrl}
              className="flex items-center gap-3 transition-opacity hover:opacity-90 group flex-shrink-0"
            >
              <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-[#B87557]/60 shadow-md flex-shrink-0 bg-[#293A30]">
                <img
                  src={getAssetPath("/images/brand/logo.jpg")}
                  alt="Balance Hot Yoga"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif italic font-bold text-xl md:text-2xl tracking-wide text-white leading-tight">
                  Баланс
                </span>
                <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-[#B87557] font-medium leading-none mt-1 whitespace-nowrap">
                  {studioSubtitle}
                </span>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 flex-shrink-0">
              {headerNavigationLinks.map((navigationLink) => (
                <Link
                  key={navigationLink.href}
                  href={navigationLink.href}
                  className="text-xs uppercase tracking-wider font-medium text-[#F5F2E9]/90 hover:text-[#B87557] transition-colors whitespace-nowrap py-1"
                >
                  {navigationLink.label}
                </Link>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-3.5 2xl:gap-5 flex-shrink-0">
              <Link
                href={alternateLanguageUrl}
                className="text-xs uppercase tracking-widest font-semibold px-3 py-1.5 border border-[#828A73]/40 rounded-full text-[#F5F2E9] hover:border-[#B87557] hover:text-[#B87557] transition-colors whitespace-nowrap"
              >
                {navigationTranslations.switchLang}
              </Link>
              <button
                type="button"
                onClick={() => openBooking()}
                className="px-5 py-2.5 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                {navigationTranslations.book}
              </button>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 xl:hidden">
              <Link
                href={alternateLanguageUrl}
                className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 border border-[#828A73]/40 rounded-full text-[#F5F2E9] whitespace-nowrap"
              >
                {navigationTranslations.switchLang}
              </Link>
              <button
                type="button"
                onClick={() => openBooking()}
                className="hidden sm:inline-flex px-4 py-1.5 bg-[#B87557] hover:bg-[#D4793A] text-white text-[11px] uppercase tracking-wider font-medium rounded-full transition-colors shadow-sm whitespace-nowrap cursor-pointer"
              >
                {navigationTranslations.book}
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="px-3 py-1.5 rounded-full border border-white/20 hover:border-[#B87557] text-white transition-colors flex items-center gap-2 cursor-pointer bg-white/5 hover:bg-white/10"
                aria-label="Toggle navigation menu"
              >
                <span className="text-[11px] uppercase tracking-wider font-medium hidden xs:inline-block">
                  {isMobileMenuOpen ? (locale === "uk" ? "Закрити" : "Close") : (locale === "uk" ? "Меню" : "Menu")}
                </span>
                <div className="w-4 flex flex-col gap-1">
                  <span
                    className={`block h-0.5 bg-current transition-transform duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-current transition-opacity duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-current transition-transform duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden bg-[#1A2019]/98 backdrop-blur-xl border-t border-[#828A73]/20 px-6 py-8 animate-fade-in-down shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col gap-4 mb-8">
              {headerNavigationLinks.map((navigationLink) => (
                <Link
                  key={navigationLink.href}
                  href={navigationLink.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif italic text-2xl text-[#F5F2E9] hover:text-[#B87557] transition-colors py-1 border-b border-white/5"
                >
                  {navigationLink.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full py-4 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium text-center transition-colors shadow-md rounded-full cursor-pointer"
              >
                {navigationTranslations.book}
              </button>
              <div className="text-center pt-2">
                <span className="text-[11px] uppercase tracking-widest text-[#828A73]">
                  {locale === "uk" ? "Одеса · 38–40°C · Balance Hot Yoga" : "Odesa · 38–40°C · Balance Hot Yoga"}
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
