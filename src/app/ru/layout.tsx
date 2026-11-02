import { buildJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import BookingModalWrapper from "@/components/booking/BookingModalWrapper";

export default function RussianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = buildJsonLd("ru");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale="ru" />
      <main className="flex-1">{children}</main>
      <Footer locale="ru" />
      <BookingModalWrapper locale="ru" />
    </>
  );
}
