"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickOptions = [
  { icon: Phone, label: "Call Us", href: "tel:+12248011105" },
  { icon: Mail, label: "Email Us", href: "mailto:dispatch@atc-trans.com" },
  { icon: MapPin, label: "Visit Us", href: "#map" },
];

export function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-[#0a0a0f] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />

        {/* Purple gradient orb - left */}
        <motion.div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cyan gradient orb - right */}
        <motion.div
          className="absolute top-10 -right-20 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Violet accent orb - center bottom */}
        <motion.div
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-overlay opacity-20" />

      {/* Spotlight effect from top */}
      <div className="absolute inset-0 spotlight" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-28 lg:py-36">
        <div className="max-w-[800px] mx-auto text-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm mb-6"
          >
            <Link
              href="/"
              className="text-white/60 hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-purple-400">Contact</span>
          </motion.div>

          {/* Main Heading with gradient */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-[64px] font-bold mb-8 font-[family-name:var(--font-outfit)] leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Get In </span>
            <span className="gradient-text">Touch</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-[22px] text-white/70 max-w-[600px] mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to ship? Need a quote? Have questions? We&apos;re here to help.
          </motion.p>

          {/* Quick Contact Options with enhanced animations */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {quickOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.href}
                className="group flex items-center gap-2 px-6 py-3 glass rounded-full text-white hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <option.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="font-medium">{option.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none z-10" />
    </section>
  );
}
