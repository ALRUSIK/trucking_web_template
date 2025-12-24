"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Truck, Handshake, DollarSign, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TruckingAnimation } from "@/components/ui/trucking-animation";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { icon: Truck, value: 2, suffix: "M+", label: "Miles Driven" },
  { icon: MapPin, value: 48, suffix: "", label: "States Covered" },
  { icon: Handshake, value: 750, suffix: "+", label: "Deliveries" },
  { icon: DollarSign, value: 350, suffix: "K", label: "Paid to Drivers" },
];

const trustBadges = [
  { icon: Shield, text: "Fully Insured" },
  { icon: Clock, text: "24/7 Support" },
];

export function HeroSection() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0f]">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />

        {/* Purple gradient orb - top right */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cyan gradient orb - bottom left */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Violet accent orb - center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-overlay opacity-30" />

      {/* Spotlight effect from top */}
      <div className="absolute inset-0 spotlight" />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex items-center container mx-auto px-4 lg:px-8 pt-24 pb-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-purple-400 text-sm font-medium">Trusted by 500+ Businesses Nationwide</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-[family-name:var(--font-outfit)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Heavy Loads,
            <br />
            <span className="gradient-text">Family Roots</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Specialists in <span className="text-purple-400">Flatbed</span>, <span className="text-violet-400">Step Deck</span>, and <span className="text-cyan-400">RGN Transportation</span> across all 48 states.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-white/60"
              >
                <badge.icon className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              size="lg"
              className="btn-gradient btn-shine text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-orange-500/25 transition-all group"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="border border-purple-500/50 text-white bg-transparent hover:bg-purple-500/10 hover:border-purple-400 px-8 py-6 text-lg font-medium transition-all shadow-none"
              asChild
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>
        </div>

        {/* Trucking Operations Animation */}
        <motion.div
          className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <TruckingAnimation />
        </motion.div>
      </div>

      {/* Bottom Section: Stats Bar + Scroll Indicator */}
      <div className="relative z-10 pb-8">
        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mb-6"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 border border-purple-500/30 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-3 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          ref={statsRef}
          className="container mx-auto px-4 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group glass rounded-xl p-4 md:p-6 text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              >
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-purple-400 group-hover:text-purple-300 mx-auto mb-2 transition-colors" />
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-[family-name:var(--font-outfit)] counter-value">
                  {isInView && (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none z-10" />
    </section>
  );
}
