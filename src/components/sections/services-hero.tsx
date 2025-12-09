"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, Shield } from "lucide-react";

const badges = [
  { icon: MapPin, label: "48 States" },
  { icon: Clock, label: "24/7 Dispatch" },
  { icon: Shield, label: "Certified & Insured" },
];

export function ServicesHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#1a2332]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )`,
          }}
        />
      </div>

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
              className="text-[#ff4433] hover:text-[#ff6655] transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <span className="text-white/50 mx-2">/</span>
            <span className="text-white/70 text-sm">Services</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-[family-name:var(--font-outfit)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/85 max-w-xl mb-10"
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
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <badge.icon className="w-4 h-4 text-[#ff4433]" />
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
