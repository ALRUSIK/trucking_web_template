import {
  ServicesHero,
  ServiceOverview,
  ServiceDetails,
  AdditionalCapabilities,
  IndustriesSection,
  ProcessSection,
  SafetySection,
  FAQSection,
  CTASection,
} from "@/components/sections";

export const metadata = {
  title: "Our Services | ATC Family Transport",
  description:
    "Specialized flatbed, step deck, and RGN/lowboy transportation services across 48 states. Heavy haul solutions for construction, manufacturing, agriculture, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceOverview />
      <ServiceDetails />
      <AdditionalCapabilities />
      <IndustriesSection />
      <ProcessSection />
      <SafetySection />
      <FAQSection />
      <CTASection />
    </>
  );
}
