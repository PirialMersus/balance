import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PracticesSection from "@/components/sections/PracticesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TeachersSection from "@/components/sections/TeachersSection";
import StudioGallerySection from "@/components/sections/StudioGallerySection";
import InstagramFeedSection from "@/components/sections/InstagramFeedSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import { Locale } from "@/lib/translations";

export function HomeView({ locale }: { locale: Locale }) {
  return (
    <>
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <PracticesSection locale={locale} />
      <BenefitsSection locale={locale} />
      <TeachersSection locale={locale} />
      <StudioGallerySection locale={locale} />
      <InstagramFeedSection locale={locale} />
      <FaqSection locale={locale} />
      <CtaSection locale={locale} />
    </>
  );
}

export default HomeView;
