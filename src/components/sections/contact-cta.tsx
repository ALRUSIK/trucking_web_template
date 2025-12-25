"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  "48 States",
  "2M Miles",
  "750+ Deliveries",
  "Family Owned",
];

export function ContactCTA() {
  return (
    <section className="py-24 lg:py-28 bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="max-w-[900px] mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-outfit)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">Let&apos;s Move Your </span>
            <span className="gradient-text">Freight Together</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you need a one-time haul or a long-term logistics partner,
            ATC Family Transport is ready to deliver. Get in touch today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="btn-gradient btn-shine text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 group"
              asChild
            >
              <Link href="#quote-form" className="flex items-center gap-2">
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              className="border-2 border-purple-500/50 text-white bg-transparent hover:bg-purple-500/10 hover:border-purple-400 px-8 py-6 text-lg font-semibold transition-all shadow-none"
              asChild
            >
              <a href="tel:+12248011105" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call: (224) 801-1105
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {trustBadges.map((badge, index) => (
              <motion.span
                key={badge}
                className="flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                {badge}
                {index < trustBadges.length - 1 && (
                  <span className="text-purple-400">|</span>
                )}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
