import { LandingHero } from "@/components/sections/landing/landing-hero";
import { LandingBenefits } from "@/components/sections/landing/landing-benefits";
import { LandingProof } from "@/components/sections/landing/landing-proof";
import { LandingForm } from "@/components/sections/landing/landing-form";

export const metadata = {
  title: "Join ATC Family Transport - Start Your CDL Driving Career Today",
  description: "Earn $65,000-$85,000+ annually as a CDL driver with ATC Family Transport. Apply now for competitive pay, modern equipment, and regular home time.",
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <LandingHero />
      <LandingBenefits />
      <LandingProof />
      <LandingForm />
    </main>
  );
}
