"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutCTA() {
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [-100, 0, -100],
          y: [-100, 0, -100],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [100, 0, 100],
          y: [100, 0, 100],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Sparkle particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          <Sparkles className="w-4 h-4 text-white/30" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Experience the{" "}
            <span className="relative">
              ATC Difference
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-white/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
            ?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Let&apos;s discuss your heavy haul needs and show you why hundreds of
            clients trust us with their most important shipments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-purple-600 px-8 py-6 text-lg font-semibold transition-all shadow-none"
              asChild
            >
              <a href="tel:+12248011105" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>

            <Button
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-purple-600 px-8 py-6 text-lg font-semibold transition-all shadow-none"
              asChild
            >
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
