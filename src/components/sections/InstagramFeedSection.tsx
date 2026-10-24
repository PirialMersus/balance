import { Locale } from "@/lib/translations";
import { BRAND } from "@/lib/brand";

interface InstagramFeedSectionProps {
  locale: Locale;
}

export default function InstagramFeedSection({ locale }: InstagramFeedSectionProps) {
  const instagramPhotos = [
    {
      src: "/images/instagram/2026-10-06_13-22-14_UTC_9.jpg",
      alt: "Практика горячей йоги Balance Одесса",
    },
    {
      src: "/images/instagram/2026-10-06_13-22-14_UTC_2.jpg",
      alt: "Атмосфера в зале Balance",
    },
    {
      src: "/images/instagram/2026-10-06_13-22-14_UTC_3.jpg",
      alt: "Интерьер студии горячей йоги",
    },
    {
      src: "/images/instagram/2026-10-06_13-22-14_UTC_4.jpg",
      alt: "Дыхание и концентрация на коврике",
    },
    {
      src: "/images/instagram/2026-10-06_13-22-14_UTC_5.jpg",
      alt: "Моменты теплой практики",
    },
    {
      src: "/images/instagram/2026-10-06_13-22-14_UTC_6.jpg",
      alt: "Люди и комьюнити студии Balance",
    },
    {
      src: "/images/instagram/2026-10-06_13-22-14_UTC_7.jpg",
      alt: "Раскрытие тела в нагретом пространстве",
    },
    {
      src: "/images/instagram/2026-10-06_13-22-14_UTC_8.jpg",
      alt: "Баланс и спокойствие после занятия",
    },
  ];

  return (
    <section className="bg-[#1A2019] py-24 md:py-32 text-[#F5F2E9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="w-16 h-px bg-[#B87557] mb-8" />
            <p className="text-xs uppercase tracking-widest text-[#B87557] font-semibold mb-2">
              Instagram Stories & Feed
            </p>
            <h2
              className="font-serif italic text-white leading-tight"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              {BRAND.instagramHandle}
            </h2>
          </div>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-white/30 hover:border-[#B87557] hover:text-[#B87557] rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300"
          >
            <span>{locale === "ru" ? "Смотреть в Instagram" : "Дивитися в Instagram"}</span>
            <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {instagramPhotos.map((photoItem, photoIndex) => (
            <a
              key={photoIndex}
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-[#222923] shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={photoItem.src}
                alt={photoItem.alt}
                width={600}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2019]/90 via-[#1A2019]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-xs text-[#F5F2E9] font-medium flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>@yoga_balance_odessa</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
