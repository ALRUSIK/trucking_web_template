"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutHero() {
  const scrollToStory = () => {
    const storySection = document.getElementById("company-story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[60vh] flex items-center bg-[#1a2332] overflow-hidden">
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
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32 lg:py-40">
        <div className="max-w-[900px]">
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
            <span className="text-[#ff4433]">About Us</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-[68px] font-bold text-white mb-8 font-[family-name:var(--font-outfit)] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Heavy Loads,{" "}
            <span className="text-[#ff4433]">Family Roots</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-[700px] leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Since our founding, ATC Family Transport has been built on trust,
            reliability, and a commitment to treating every client like family.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              onClick={scrollToStory}
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#1a2332] px-8 py-6 text-lg font-medium transition-all shadow-none group"
            >
              Our Story
              <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
