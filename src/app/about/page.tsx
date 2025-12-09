import {
  AboutHero,
  CompanyStory,
  ValuesSection,
  TeamSection,
  AboutStats,
  CertificationsSection,
  FleetSection,
  PromiseSection,
  AboutTestimonial,
  AboutCTA,
} from "@/components/sections";

export const metadata = {
  title: "About Us | ATC Family Transport",
  description:
    "Heavy Loads, Family Roots. Learn about ATC Family Transport - your trusted partner in flatbed, step-deck, and RGN transportation across 48 states.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <ValuesSection />
      <TeamSection />
      <AboutStats />
      <CertificationsSection />
      <FleetSection />
      <PromiseSection />
      <AboutTestimonial />
      <AboutCTA />
    </>
  );
}
