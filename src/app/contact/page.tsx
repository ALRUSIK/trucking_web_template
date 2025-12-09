import {
  ContactHero,
  ContactFormSection,
  MapSection,
  ContactStats,
  ContactFAQ,
  AlternativeContact,
  EmergencyContact,
  BusinessHours,
  ContactCTA,
} from "@/components/sections";

export const metadata = {
  title: "Contact Us | ATC Family Transport",
  description:
    "Get in touch with ATC Family Transport. Request a quote for flatbed, step-deck, and RGN transportation services. Call (224) 801-1105 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <MapSection />
      <ContactStats />
      <ContactFAQ />
      <AlternativeContact />
      <EmergencyContact />
      <BusinessHours />
      <ContactCTA />
    </>
  );
}
