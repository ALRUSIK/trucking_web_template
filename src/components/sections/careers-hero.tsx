"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, DollarSign, Home, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroStats = [
  { icon: DollarSign, value: "$350K+", label: "Paid to Drivers" },
  { icon: Home, value: "Home Time", label: "Priority" },
  { icon: Truck, value: "Modern", label: "Equipment" },
];

export function CareersHero() {
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById("why-atc");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex flex-col bg-[#1a2332] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-truck.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/85 to-[#1a2332]/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex-1 flex items-center py-32 lg:py-40">
        <div className="max-w-[800px]">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm mb-6"
          >
            <Link
              href="/"
              className="text-white/60 hover:text-[#ff4433] transition-colors"
            >
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-[#ff4433]">Careers</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-[family-name:var(--font-outfit)] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Drive With{" "}
            <span className="text-[#ff4433]">Family</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-[650px] leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Join a team that values your time, your safety, and your success.
            At ATC, you&apos;re not just a number—you&apos;re family.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              size="lg"
              className="bg-[#ff4433] hover:bg-[#e63d2e] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <Link href="#application-form" className="flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              onClick={scrollToBenefits}
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#1a2332] px-8 py-6 text-lg font-semibold transition-all shadow-none"
            >
              Why ATC?
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats Bar */}
      <motion.div
        className="relative z-10 pb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-[#1a2332]/80 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-[#ff4433]" />
                <div>
                  <div className="text-xl font-bold text-white font-[family-name:var(--font-outfit)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
