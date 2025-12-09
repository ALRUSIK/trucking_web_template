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
    <section className="relative min-h-[50vh] flex items-center bg-[#1a2332] overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

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
              className="text-white/60 hover:text-[#ff4433] transition-colors"
            >
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-[#ff4433]">Contact</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-[64px] font-bold text-white mb-8 font-[family-name:var(--font-outfit)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-[22px] text-white/90 max-w-[600px] mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to ship? Need a quote? Have questions? We&apos;re here to help.
          </motion.p>

          {/* Quick Contact Options */}
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
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#ff4433] hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <option.icon className="w-5 h-5" />
                <span className="font-medium">{option.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
