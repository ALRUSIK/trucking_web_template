"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, DollarSign, Home, Truck, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroStats = [
  { icon: DollarSign, value: "$350K+", label: "Paid to Drivers" },
  { icon: Home, value: "Home Time", label: "Priority" },
  { icon: Truck, value: "Modern", label: "Equipment" },
];

const urgencyPoints = [
  "Immediate positions available",
  "Weekly pay guaranteed",
  "No forced dispatch",
];

export function CareersHero() {
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById("why-atc");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-[#0a0a0f] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />

        {/* Purple gradient orb - top right */}
        <motion.div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orange/warm gradient for urgency - bottom */}
        <motion.div
          className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Spotlight effect */}
      <div className="absolute inset-0 spotlight" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex-1 flex items-center py-32 lg:py-40">
        <div className="max-w-[850px]">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            <span className="text-orange-400 text-sm font-semibold">Now Hiring CDL-A Drivers</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Drive With{" "}
            <span className="gradient-text">Family</span>
          </motion.h1>

          {/* Value proposition */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-[700px] leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Join a team that values your time, your safety, and your success.
            At ATC, you&apos;re not just a number—<span className="text-purple-400 font-semibold">you&apos;re family</span>.
          </motion.p>

          {/* Quick benefits list */}
          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {urgencyPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/70"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{point}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons - High conversion focus */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              size="lg"
              className="btn-gradient btn-shine text-white px-10 py-7 text-xl font-bold shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 group animate-pulse-glow"
              asChild
            >
              <Link href="#application-form" className="flex items-center gap-3">
                Apply Now - Takes 2 Minutes
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              onClick={scrollToBenefits}
              className="border border-purple-500/50 text-white bg-transparent hover:bg-purple-500/10 hover:border-purple-400 px-8 py-7 text-lg font-semibold transition-all shadow-none"
            >
              Why ATC?
            </Button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center gap-6 mt-8 text-white/50 text-sm"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-400" />
              <span>DOT Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>Quick Application</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>500+ Happy Drivers</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats Bar */}
      <motion.div
        className="relative z-10 pb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-xl px-6 py-4 flex items-center gap-4 card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-500/10">
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-[family-name:var(--font-outfit)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none z-10" />
    </section>
  );
}
