"use client";

import { motion } from "framer-motion";

export function ServiceOverview() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0a0f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)]">
            Comprehensive <span className="gradient-text">Heavy Haul</span> Transportation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
            At ATC Family Transport, we specialize in flatbed, step deck, and RGN
            transportation across 48 states. Our experienced team and modern fleet
            ensure your cargo arrives safely and on time, every time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
