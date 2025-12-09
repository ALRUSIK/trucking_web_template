"use client";

import { motion } from "framer-motion";
import { Shield, Award, FileCheck, Star, Check } from "lucide-react";

const certifications = [
  { icon: Shield, label: "DOT", sublabel: "Certified" },
  { icon: Award, label: "MC", sublabel: "Licensed" },
  { icon: FileCheck, label: "Insured", sublabel: "& Bonded" },
  { icon: Star, label: "Safety", sublabel: "Rated" },
];

const features = [
  "16% lower crash rate than industry average",
  "Regular equipment inspections and maintenance",
  "Experienced, vetted drivers",
  "Real-time GPS tracking",
  "Comprehensive cargo insurance",
  "DOT compliant operations",
  "Proper permits for all oversized loads",
];

export function SafetySection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content - 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
              Safety & Compliance
            </h2>
            <div className="w-16 h-1 bg-[#ff4433] mb-6" />
            <p className="text-[#1a2332]/70 leading-relaxed mb-8">
              Your cargo&apos;s safety is our top priority. We maintain the highest
              standards of safety and compliance in the industry.
            </p>

            {/* Certification Badges */}
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.label}
                  className="bg-[#f8f9fa] rounded-xl p-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <cert.icon className="w-8 h-8 text-[#ff4433] mx-auto mb-2" />
                  <div className="font-bold text-[#1a2332]">{cert.label}</div>
                  <div className="text-xs text-[#1a2332]/60">{cert.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#f8f9fa] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#1a2332] mb-6 font-[family-name:var(--font-outfit)]">
                Our Safety Commitment
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-[#1a2332]/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
