"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, Shield, Truck } from "lucide-react";

const badges = [
  { icon: MapPin, label: "48 States" },
  { icon: Clock, label: "24/7 Dispatch" },
  { icon: Shield, label: "Certified & Insured" },
];

export function ServicesHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0a0a0f]">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Spotlight effect */}
      <div className="absolute inset-0 spotlight" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 pt-32">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <Link
              href="/"
              className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <span className="text-white/50 mx-2">/</span>
            <span className="text-white/70 text-sm">Services</span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6"
          >
            <Truck className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Heavy Haul Specialists</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-[family-name:var(--font-outfit)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Specialized heavy haul solutions for every cargo type
          </motion.p>

          {/* Stat Pills */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <badge.icon className="w-4 h-4 text-purple-400" />
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  );
}
