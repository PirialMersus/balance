export const BRAND = {
  name: "Balance",
  fullName: "Balance - Hot Yoga Studio - Одеса",
  tagline: "Hot Yoga · Одеса",
  description:
    "Єдина спеціалізована студія гарячої йоги в Одесі. Простір усвідомленої практики при 38–40°C для глибокого розкриття тіла та спокою розуму.",
  instagram: "https://www.instagram.com/yoga_balance_odessa/",
  instagramHandle: "@yoga_balance_odessa",
  founderInstagram: "https://www.instagram.com/m8mironova/",
  founderName: "Марія Миронова",
  founderNameEn: "Maria Mironova",
  city: "Одеса",
  cityEn: "Odesa",
  country: "Україна",
  countryEn: "Ukraine",
  bookingUrl: "https://www.instagram.com/yoga_balance_odessa/",
  bookingLabel: "Написати в Instagram",
  email: null as string | null,
  phone: null as string | null,
  address: "Одеса, Люстдорфська дорога, 55К (ЖК «Одісей»)",
  addressEn: "Odesa, 55K Liustdorfska Road (Odisey Complex)",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Одеса+Люстдорфська+дорога+55К+ЖК+Одісей",
} as const;

export const COLORS = {
  warmCream: "#F5F2E9",
  deepOlive: "#293A30",
  mutedGreen: "#828A73",
  terracotta: "#B87557",
  darkGraphite: "#222923",
  warmGray: "#79776E",
  hotAmber: "#D4793A",
  deepNight: "#1A2019",
} as const;

export function getAssetPath(filePath: string): string {
  const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalizedFilePath = filePath.startsWith("/") ? filePath : `/${filePath}`;
  return `${publicBasePath}${normalizedFilePath}`;
}
