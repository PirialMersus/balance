import type { Metadata } from "next";
import { getAssetPath } from "@/lib/brand";
import { BookingProvider } from "@/components/booking/BookingContext";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://balance-odessa.com"),
  title: "Balance - Hot Yoga Studio - Одеса",
  description: "Єдина спеціалізована студія гарячої йоги в Одесі. Практика при 38–40°C.",
  icons: {
    icon: [
      { url: getAssetPath("/favicon.png"), type: "image/png" },
      { url: getAssetPath("/favicon.ico") },
    ],
    shortcut: getAssetPath("/favicon.png"),
    apple: getAssetPath("/apple-touch-icon.png"),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="h-full">
      <body className="min-h-full flex flex-col antialiased bg-[#F5F2E9] text-[#222923]">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
