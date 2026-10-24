import Link from "next/link";
import { type Locale, translations } from "@/lib/translations";
import { BRAND } from "@/lib/brand";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const pageTranslations = translations[locale];

  const primaryNavigationLinks = [
    { href: `/${locale}/practices`, label: pageTranslations.nav.practices },
    { href: `/${locale}/schedule`, label: pageTranslations.nav.schedule },
    { href: `/${locale}/pricing`, label: pageTranslations.nav.pricing },
    { href: `/${locale}/studio`, label: pageTranslations.nav.studio },
    { href: `/${locale}/teachers`, label: pageTranslations.teachers.title },
    { href: `/${locale}/journal`, label: pageTranslations.journal.title },
    { href: `/${locale}/contacts`, label: pageTranslations.nav.contacts },
  ];

  return (
    <footer className="bg-[#1A2019] text-[#F5F2E9] border-t border-[#828A73]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif italic font-bold text-3xl tracking-wide text-white block">
              {BRAND.name}
            </span>
            <p className="text-[#828A73] text-sm leading-relaxed max-w-sm">
              {BRAND.description}
            </p>
            <p className="text-xs text-[#B87557] font-medium tracking-wider uppercase pt-2">
              {BRAND.city}, {BRAND.country}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-[#B87557] font-semibold mb-6">
              {locale === "ru" ? "Навигация" : "Навігація"}
            </p>
            <nav className="grid grid-cols-2 gap-y-3 gap-x-6">
              {primaryNavigationLinks.map((navigationLink) => (
                <Link
                  key={navigationLink.href}
                  href={navigationLink.href}
                  className="text-sm text-[#828A73] hover:text-[#F5F2E9] transition-colors"
                >
                  {navigationLink.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#B87557] font-semibold mb-4">
              {locale === "ru" ? "Связь и запись" : "Зв'язок та запис"}
            </p>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm text-[#F5F2E9] hover:text-[#B87557] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>{BRAND.instagramHandle}</span>
            </a>
            <p className="text-xs text-[#828A73] leading-relaxed pt-2">
              {locale === "ru"
                ? "Запись на практики и консультации проводятся в Instagram Direct."
                : "Запис на практики та консультації проводяться в Instagram Direct."}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#828A73]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#828A73]">
          <p>{pageTranslations.footer.rights}</p>
          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/privacy`}
              className="hover:text-[#F5F2E9] transition-colors"
            >
              {pageTranslations.footer.privacy}
            </Link>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F2E9] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
