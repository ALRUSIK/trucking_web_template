"use client";

import { motion } from "framer-motion";

export function ServiceOverview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6 font-[family-name:var(--font-outfit)]">
            Comprehensive Heavy Haul Transportation
          </h2>
          <div className="w-20 h-1 bg-[#ff4433] mx-auto mb-8" />
          <p className="text-lg md:text-xl text-[#1a2332]/70 leading-relaxed max-w-3xl mx-auto">
            At ATC Family Transport, we specialize in flatbed, step deck, and RGN
            transportation across 48 states. Our experienced team and modern fleet
            ensure your cargo arrives safely and on time, every time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
