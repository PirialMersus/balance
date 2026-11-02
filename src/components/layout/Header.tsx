"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations, Locale } from "@/lib/translations";
import { useBooking } from "@/components/booking/BookingContext";
import { getAssetPath } from "@/lib/brand";

interface HeaderProps {
  locale: Locale;
}

const SUPPORTED_LOCALES: Locale[] = ["uk", "en", "ru"];

export function Header({ locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const { openBooking } = useBooking();

  const navigationTranslations = translations[locale].nav;

  useEffect(() => {
    const handleWindowScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  useEffect(() => {
    const handleEscapeKey = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [isMobileMenuOpen]);

  const routePrefix = locale === "uk" ? "" : `/${locale}`;

  const headerNavigationLinks = useMemo(
    () => [
      { href: `${routePrefix}/practices`, label: navigationTranslations.practices },
      { href: `${routePrefix}/schedule`, label: navigationTranslations.schedule },
      { href: `${routePrefix}/pricing`, label: navigationTranslations.pricing },
      { href: `${routePrefix}/studio`, label: navigationTranslations.studio },
      { href: `${routePrefix}/teachers`, label: locale === "en" ? "Team" : "Команда" },
      { href: `${routePrefix}/journal`, label: locale === "en" ? "Journal" : "Журнал" },
      { href: `${routePrefix}/contacts`, label: navigationTranslations.contacts },
    ],
    [routePrefix, navigationTranslations, locale]
  );

  const getTargetUrlForLocale = (targetLocale: Locale) => {
    let cleanPath = pathname;
    if (cleanPath.startsWith("/en")) {
      cleanPath = cleanPath.slice(3);
    } else if (cleanPath.startsWith("/ru")) {
      cleanPath = cleanPath.slice(3);
    }
    if (!cleanPath.startsWith("/")) {
      cleanPath = `/${cleanPath}`;
    }
    if (cleanPath === "/") {
      cleanPath = "";
    }
    if (targetLocale === "uk") {
      return cleanPath || "/";
    }
    return `/${targetLocale}${cleanPath}`;
  };

  const homePageUrl = locale === "uk" ? "/" : `/${locale}`;
  const studioSubtitle = locale === "en"
    ? "Hot Yoga · Odisey Complex"
    : (locale === "ru" ? "Hot Yoga · ЖК «Одиссей»" : "Hot Yoga · ЖК «Одісей»");

  const [hoveredNavigationHref, setHoveredNavigationHref] = useState<string | null>(null);
  const [indicatorGeometry, setIndicatorGeometry] = useState<{
    left: number;
    width: number;
    opacity: number;
    isReady: boolean;
  }>({
    left: 0,
    width: 0,
    opacity: 0,
    isReady: false,
  });

  const navigationContainerReference = useRef<HTMLElement | null>(null);
  const navigationItemElementsReference = useRef<Map<string, HTMLAnchorElement>>(new Map());

  const isNavigationItemActive = useCallback(
    (linkHref: string): boolean => {
      const sanitizedCurrentPath = pathname.replace(/\/+$/, "") || "/";
      const sanitizedTargetHref = linkHref.replace(/\/+$/, "") || "/";

      if (sanitizedTargetHref === "/" || sanitizedTargetHref === "/en" || sanitizedTargetHref === "/ru") {
        return sanitizedCurrentPath === sanitizedTargetHref;
      }

      return sanitizedCurrentPath === sanitizedTargetHref || sanitizedCurrentPath.startsWith(`${sanitizedTargetHref}/`);
    },
    [pathname]
  );

  const updateIndicatorGeometry = useCallback(() => {
    const navContainerElement = navigationContainerReference.current;
    if (!navContainerElement) {
      return;
    }

    const activeNavigationLink = headerNavigationLinks.find((navigationLink) =>
      isNavigationItemActive(navigationLink.href)
    );
    const targetNavigationHref = hoveredNavigationHref ?? (activeNavigationLink ? activeNavigationLink.href : null);

    if (!targetNavigationHref) {
      setIndicatorGeometry((previousGeometry) => {
        if (previousGeometry.opacity === 0) {
          return previousGeometry;
        }
        return {
          ...previousGeometry,
          opacity: 0,
        };
      });
      return;
    }

    const targetElement = navigationItemElementsReference.current.get(targetNavigationHref);
    if (!targetElement) {
      setIndicatorGeometry((previousGeometry) => {
        if (previousGeometry.opacity === 0) {
          return previousGeometry;
        }
        return {
          ...previousGeometry,
          opacity: 0,
        };
      });
      return;
    }

    const containerRect = navContainerElement.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();
    const calculatedLeft = targetRect.left - containerRect.left;
    const calculatedWidth = targetRect.width;

    setIndicatorGeometry((previousGeometry) => {
      const isPositionUnchanged =
        previousGeometry.isReady &&
        previousGeometry.opacity === 1 &&
        Math.abs(previousGeometry.left - calculatedLeft) < 0.5 &&
        Math.abs(previousGeometry.width - calculatedWidth) < 0.5;

      if (isPositionUnchanged) {
        return previousGeometry;
      }

      return {
        left: calculatedLeft,
        width: calculatedWidth,
        opacity: 1,
        isReady: true,
      };
    });
  }, [hoveredNavigationHref, headerNavigationLinks, isNavigationItemActive]);

  useEffect(() => {
    updateIndicatorGeometry();
  }, [updateIndicatorGeometry]);

  useEffect(() => {
    const handleWindowResize = () => {
      updateIndicatorGeometry();
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [updateIndicatorGeometry]);

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
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            <Link
              href={homePageUrl}
              className="flex items-center gap-3 transition-opacity hover:opacity-90 group flex-shrink-0"
            >
              <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-[#B87557]/60 shadow-md flex-shrink-0 bg-[#293A30]">
                <img
                  src={getAssetPath("/images/brand/logo.webp")}
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

            <nav
              ref={navigationContainerReference}
              onMouseLeave={() => setHoveredNavigationHref(null)}
              className="hidden xl:flex items-center gap-5 2xl:gap-7 flex-shrink-0 relative py-1"
            >
              {headerNavigationLinks.map((navigationLink) => {
                const isCurrentActive = isNavigationItemActive(navigationLink.href);
                const isCurrentHovered = hoveredNavigationHref === navigationLink.href;
                const isTargetHighlighted = hoveredNavigationHref
                  ? isCurrentHovered
                  : isCurrentActive;

                return (
                  <Link
                    key={navigationLink.href}
                    href={navigationLink.href}
                    ref={(anchorElement) => {
                      if (anchorElement) {
                        navigationItemElementsReference.current.set(navigationLink.href, anchorElement);
                      } else {
                        navigationItemElementsReference.current.delete(navigationLink.href);
                      }
                    }}
                    onMouseEnter={() => setHoveredNavigationHref(navigationLink.href)}
                    aria-current={isCurrentActive ? "page" : undefined}
                    className={`text-xs uppercase tracking-wider transition-colors duration-200 whitespace-nowrap py-1 relative ${
                      isTargetHighlighted
                        ? "text-[#B87557] font-semibold"
                        : isCurrentActive
                        ? "text-[#B87557]/90 font-medium"
                        : "text-[#F5F2E9]/80 hover:text-[#B87557] font-medium"
                    }`}
                  >
                    <span>{navigationLink.label}</span>
                  </Link>
                );
              })}

              <span
                aria-hidden="true"
                className={`absolute bottom-0 h-0.5 bg-[#B87557] rounded-full shadow-[0_0_8px_rgba(184,117,87,0.8)] pointer-events-none ${
                  indicatorGeometry.isReady
                    ? "transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    : "transition-opacity duration-200"
                }`}
                style={{
                  left: `${indicatorGeometry.left}px`,
                  width: `${indicatorGeometry.width}px`,
                  opacity: indicatorGeometry.opacity,
                }}
              />
            </nav>

            <div className="hidden xl:flex items-center gap-3.5 2xl:gap-5 flex-shrink-0">
              <div className="flex items-center rounded-full border border-[#828A73]/40 p-1 bg-black/20 text-xs font-semibold">
                {SUPPORTED_LOCALES.map((targetLoc) => {
                  const isActive = targetLoc === locale;
                  return (
                    <Link
                      key={targetLoc}
                      href={getTargetUrlForLocale(targetLoc)}
                      className={`px-2.5 py-1 rounded-full uppercase transition-all ${
                        isActive
                          ? "bg-[#B87557] text-white shadow-sm"
                          : "text-[#F5F2E9]/70 hover:text-white"
                      }`}
                    >
                      {targetLoc}
                    </Link>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => openBooking("first-trial")}
                className="px-5 py-2.5 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap min-h-[40px]"
              >
                {navigationTranslations.book}
              </button>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 xl:hidden">
              <div className="flex items-center rounded-full border border-[#828A73]/40 p-0.5 bg-black/20 text-[11px] font-semibold">
                {SUPPORTED_LOCALES.map((targetLoc) => {
                  const isActive = targetLoc === locale;
                  return (
                    <Link
                      key={targetLoc}
                      href={getTargetUrlForLocale(targetLoc)}
                      className={`px-2 py-1 rounded-full uppercase transition-all min-h-[36px] flex items-center justify-center ${
                        isActive
                          ? "bg-[#B87557] text-white"
                          : "text-[#F5F2E9]/70 hover:text-white"
                      }`}
                    >
                      {targetLoc}
                    </Link>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => openBooking("first-trial")}
                className="hidden sm:inline-flex px-4 py-1.5 bg-[#B87557] hover:bg-[#D4793A] text-white text-[11px] uppercase tracking-wider font-medium rounded-full transition-colors shadow-sm whitespace-nowrap cursor-pointer min-h-[40px] items-center"
              >
                {navigationTranslations.book}
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="min-h-[44px] min-w-[44px] px-3 py-1.5 rounded-full border border-white/20 hover:border-[#B87557] text-white transition-colors flex items-center justify-center gap-2 cursor-pointer bg-white/5 hover:bg-white/10"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="text-[11px] uppercase tracking-wider font-medium hidden xs:inline-block">
                  {isMobileMenuOpen
                    ? (locale === "en" ? "Close" : (locale === "ru" ? "Закрыть" : "Закрити"))
                    : (locale === "en" ? "Menu" : (locale === "ru" ? "Меню" : "Меню"))}
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
            <nav className="flex flex-col gap-2 mb-8">
              {headerNavigationLinks.map((navigationLink) => {
                const isCurrentActive = isNavigationItemActive(navigationLink.href);
                return (
                  <Link
                    key={navigationLink.href}
                    href={navigationLink.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isCurrentActive ? "page" : undefined}
                    className={`font-serif italic text-2xl transition-all py-2.5 px-3 border-b min-h-[48px] flex items-center justify-between rounded-lg ${
                      isCurrentActive
                        ? "text-[#B87557] font-semibold border-[#B87557]/30 bg-[#B87557]/10"
                        : "text-[#F5F2E9] hover:text-[#B87557] border-white/5"
                    }`}
                  >
                    <span>{navigationLink.label}</span>
                    {isCurrentActive && (
                      <span className="w-2 h-2 rounded-full bg-[#B87557] shadow-[0_0_6px_rgba(184,117,87,0.9)]" />
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBooking("first-trial");
                }}
                className="w-full min-h-[48px] py-4 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium text-center transition-colors shadow-md rounded-full cursor-pointer"
              >
                {navigationTranslations.book}
              </button>
              <div className="text-center pt-2">
                <span className="text-[11px] uppercase tracking-widest text-[#828A73]">
                  {locale === "en"
                    ? "Odesa · Odisey Complex · 38–40°C · Balance"
                    : (locale === "ru" ? "Одесса · ЖК «Одиссей» · 38–40°C · Balance" : "Одеса · ЖК «Одісей» · 38–40°C · Balance")}
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
