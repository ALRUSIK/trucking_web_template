"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Truck, Handshake, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { icon: Truck, value: 2, suffix: "M+", label: "Miles Driven" },
  { icon: MapPin, value: 48, suffix: "", label: "States Covered" },
  { icon: Handshake, value: 750, suffix: "+", label: "Deliveries" },
  { icon: DollarSign, value: 350, suffix: "K", label: "Paid to Drivers" },
];

export function HeroSection() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-truck.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332]/90 via-[#1a2332]/80 to-[#1a2332]/70" />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-[family-name:var(--font-outfit)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Heavy Loads,
            <br />
            <span className="text-[#ff4433]">Family Roots</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Specialists in Flatbed, Step Deck, and RGN Transportation
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              size="lg"
              className="bg-[#ff4433] hover:bg-[#e63d2e] text-white px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all group"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1a2332] px-8 py-6 text-lg font-medium transition-all"
              asChild
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          ref={statsRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-[#1a2332]/80 backdrop-blur-md rounded-xl p-4 md:p-6 text-center border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              >
                <stat.icon className="w-6 h-6 text-[#ff4433] mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-outfit)]">
                  {isInView && (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-32 md:bottom-36 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
