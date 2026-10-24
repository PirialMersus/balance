import Link from "next/link";
import { type Locale, translations } from "@/lib/translations";
import { BRAND } from "@/lib/brand";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const pageTranslations = translations[locale];
  const routePrefix = locale === "en" ? "/en" : "";

  const primaryNavigationLinks = [
    { href: `${routePrefix}/practices`, label: pageTranslations.nav.practices },
    { href: `${routePrefix}/schedule`, label: pageTranslations.nav.schedule },
    { href: `${routePrefix}/pricing`, label: pageTranslations.nav.pricing },
    { href: `${routePrefix}/studio`, label: pageTranslations.nav.studio },
    { href: `${routePrefix}/teachers`, label: pageTranslations.teachers.title },
    { href: `${routePrefix}/journal`, label: pageTranslations.journal.title },
    { href: `${routePrefix}/contacts`, label: pageTranslations.nav.contacts },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2019] text-[#F5F2E9] border-t border-[#828A73]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif italic font-bold text-3xl tracking-wide text-white block">
              {BRAND.name}
            </span>
            <p className="text-[#828A73] text-sm leading-relaxed max-w-sm">
              {locale === "uk"
                ? "Єдина спеціалізована студія гарячої йоги в Одесі. Простір, де через тепло, практику та спільноту народжується внутрішній баланс."
                : "The dedicated hot yoga studio in Odesa. A mindful space where warmth, intentional practice, and community nurture inner balance."}
            </p>
            <p className="text-xs text-[#B87557] font-medium tracking-wider uppercase pt-2">
              {locale === "uk" ? "Одеса, Україна" : "Odesa, Ukraine"}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-[#B87557] font-semibold mb-6">
              {locale === "uk" ? "Навігація" : "Navigation"}
            </p>
            <nav className="grid grid-cols-2 gap-y-3 gap-x-6">
              {primaryNavigationLinks.map((navigationLink) => (
                <Link
                  key={navigationLink.href}
                  href={navigationLink.href}
                  className="text-xs uppercase tracking-wider text-[#F5F2E9]/80 hover:text-[#B87557] transition-colors"
                >
                  {navigationLink.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#B87557] font-semibold mb-6">
              {locale === "uk" ? "Контакти" : "Connect"}
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#F5F2E9]/80 hover:text-[#B87557] transition-colors group"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#B87557] group-hover:scale-110 transition-transform"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>{BRAND.instagramHandle}</span>
              </a>
              <div className="text-xs text-[#828A73] pt-2">
                {locale === "uk"
                  ? "Практики щодня за попереднім записом"
                  : "Daily practices by prior appointment"}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#828A73] gap-4">
          <p>© {currentYear} Balance Hot Yoga Odesa. {locale === "uk" ? "Усі права захищені." : "All rights reserved."}</p>
          <Link
            href={`${routePrefix}/privacy`}
            className="hover:text-[#F5F2E9] transition-colors underline-offset-4 hover:underline"
          >
            {locale === "uk" ? "Політика конфіденційності" : "Privacy Policy"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
