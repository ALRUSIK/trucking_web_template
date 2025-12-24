"use client";

import { motion } from "framer-motion";
import { Shield, Award, FileCheck, Star, Truck, BadgeCheck } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "DOT Certified",
    detail: "DOT# 3492067",
  },
  {
    icon: Award,
    title: "MC Licensed",
    detail: "MC# 1149655",
  },
  {
    icon: FileCheck,
    title: "Fully Insured",
    detail: "$1M+ Coverage",
  },
  {
    icon: Star,
    title: "Safety Rated",
    detail: "16% Below Industry Avg",
  },
  {
    icon: Truck,
    title: "Permit Ready",
    detail: "All oversized permits",
  },
  {
    icon: BadgeCheck,
    title: "Bonded & Verified",
    detail: "Trusted carrier",
  },
];

export function CertificationsSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-[#12121a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            Licensed, Insured, & <span className="gradient-text">Compliant</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-white/60 text-center max-w-[900px] mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We maintain all necessary certifications and insurance to operate
          safely and legally across all 48 states. Your peace of mind is our
          priority.
        </motion.p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="glass rounded-xl p-6 text-center group hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Animated glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Icon */}
              <motion.div
                className="relative inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <cert.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-outfit)]">
                {cert.title}
              </h3>

              {/* Detail */}
              <p className="text-sm text-white/50">{cert.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
