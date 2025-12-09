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
    <section className="py-20 lg:py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
            Licensed, Insured, & Compliant
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-[#1a2332]/70 text-center max-w-[900px] mx-auto mb-14"
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
              className="bg-white rounded-xl p-6 text-center border-2 border-gray-100 hover:border-[#ff4433] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1a2332] rounded-xl mb-4 group-hover:bg-[#ff4433] transition-colors duration-300">
                <cert.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#1a2332] mb-1 font-[family-name:var(--font-outfit)]">
                {cert.title}
              </h3>

              {/* Detail */}
              <p className="text-sm text-[#1a2332]/60">{cert.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
