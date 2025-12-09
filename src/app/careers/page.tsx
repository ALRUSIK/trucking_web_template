import {
  CareersHero,
  WhyDriveSection,
  CompensationSection,
  CareersFleetSection,
  RequirementsSection,
  DriverTestimonials,
  ApplicationProcess,
  ApplicationForm,
  CareersFAQ,
  ContactRecruiting,
  CareersCTA,
} from "@/components/sections";

export const metadata = {
  title: "Careers - Drive With Us | ATC Family Transport",
  description:
    "Join ATC Family Transport. Competitive pay, modern equipment, home time priority. Apply now for flatbed, step-deck, and RGN driver positions across 48 states.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <WhyDriveSection />
      <CompensationSection />
      <CareersFleetSection />
      <RequirementsSection />
      <DriverTestimonials />
      <ApplicationProcess />
      <ApplicationForm />
      <CareersFAQ />
      <ContactRecruiting />
      <CareersCTA />
    </>
  );
}
