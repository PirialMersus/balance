import { buildJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import BookingModalWrapper from "@/components/booking/BookingModalWrapper";

export default function UkrainianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = buildJsonLd("uk");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale="uk" />
      <main className="flex-1">{children}</main>
      <Footer locale="uk" />
      <BookingModalWrapper locale="uk" />
    </>
  );
}
