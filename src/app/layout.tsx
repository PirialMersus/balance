import type { Metadata } from "next";
import { getAssetPath } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://balance-odessa.com"),
  title: "Баланс - Hot Yoga - Одесса",
  description: "Единственная специализированная студия горячей йоги в Одессе.",
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
    <html lang="ru" className="h-full">
      <body className="min-h-full flex flex-col antialiased bg-[#F5F2E9] text-[#222923]">{children}</body>
    </html>
  );
}
