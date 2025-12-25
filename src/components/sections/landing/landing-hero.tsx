"use client";

import { motion } from "framer-motion";
import { ArrowDown, DollarSign, Home, TrendingUp } from "lucide-react";

const highlights = [
  { icon: DollarSign, text: "$65K-$85K+ Annually" },
  { icon: Home, text: "Weekly Home Time" },
  { icon: TrendingUp, text: "Performance Bonuses" },
];

export function LandingHero() {
  const scrollToForm = () => {
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-purple-950/20 to-[#0a0a0f]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgent Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 glass border border-orange-500/30 rounded-full mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-2 h-2 bg-orange-500 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-orange-400 font-semibold text-sm">NOW HIRING - Limited Positions Available</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-outfit)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Drive for ATC & Earn{" "}
            <span className="gradient-text">$65K-$85K+</span> This Year
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join a family-owned trucking company that treats you right.
            <br className="hidden md:block" />
            Late-model equipment • Weekly home time • Full benefits
          </motion.p>

          {/* Highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-2 glass border border-purple-500/20 px-4 py-3 rounded-lg"
                whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.4)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <item.icon className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={scrollToForm}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl font-bold rounded-full shadow-2xl shadow-orange-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply Now - It Takes 3 Minutes
              <ArrowDown className="w-6 h-6" />
            </motion.button>
            <p className="text-white/60 text-sm mt-4">No application fee • Quick approval process</p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-wrap justify-center gap-8 text-white/70">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2M+</div>
                <div className="text-sm">Miles Driven</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">48</div>
                <div className="text-sm">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm">Family Owned</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-white/40" />
      </motion.div>
    </section>
  );
}
