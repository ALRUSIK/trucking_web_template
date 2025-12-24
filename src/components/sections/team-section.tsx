"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const driverBenefits = [
  "Competitive pay ($350K+ paid to drivers annually)",
  "Modern, well-maintained equipment",
  "Consistent freight and routes",
  "Home time priority",
  "Safety bonuses and incentives",
  "24/7 dispatch support",
];

export function TeamSection() {
  return (
    <section className="relative py-24 lg:py-28 bg-[#12121a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/flatbed.jpg"
                alt="ATC Family Transport Driver"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-[#0a0a0f]/20 to-transparent" />

              {/* Animated overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>

            {/* Floating Badge with pulse animation */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-xl border border-purple-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white font-[family-name:var(--font-outfit)]">
                      25+
                    </div>
                    <div className="text-sm text-white/60">Expert Drivers</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
              The People Behind <span className="gradient-text">Your Shipment</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mb-8 rounded-full" />

            <h3 className="text-xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
              Our Drivers
            </h3>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Every driver in our fleet is carefully vetted, extensively trained,
              and committed to safe, professional service. We don&apos;t just hire
              drivers—we build careers.
            </p>

            {/* Benefits List with stagger animation */}
            <ul className="space-y-3 mb-10">
              {driverBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-green-500/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Check className="w-4 h-4 text-green-400" />
                  </motion.div>
                  <span className="text-white/70 group-hover:text-white/90 transition-colors">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                className="btn-gradient btn-shine text-white font-medium shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all group"
                asChild
              >
                <Link href="/careers" className="flex items-center gap-2">
                  Join Our Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
