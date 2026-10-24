import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://balance-odessa.com"),
  title: "Баланс - Hot Yoga - Одесса",
  description: "Единственная специализированная студия горячей йоги в Одессе.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
