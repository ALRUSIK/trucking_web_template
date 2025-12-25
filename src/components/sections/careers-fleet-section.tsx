"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const fleetImages = [
  { src: "/images/flatbed.jpg", title: "Late-Model Trucks", description: "2020+ models" },
  { src: "/images/step-deck.jpg", title: "Flatbed Trailers", description: "48-53 ft" },
  { src: "/images/rgn-lowboy.jpg", title: "Step Deck/RGN", description: "Heavy-duty" },
];

const features = {
  left: [
    "Late-model tractors (2020+)",
    "Automatic transmissions",
    "Comfortable sleeper cabs",
    "Leather interior",
    "Sirius XM radio",
    "Collision avoidance systems",
  ],
  right: [
    "APU units for comfort",
    "Inverters and power outlets",
    "Refrigerators",
    "GPS navigation systems",
    "E-logs (ELD compliant)",
    "Regular maintenance schedule",
  ],
};

export function CareersFleetSection() {
  return (
    <section className="py-24 lg:py-28 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            Our <span className="gradient-text">Fleet & Equipment</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-xl text-white/70">
            Drive the best equipment in the industry
          </p>
        </motion.div>

        {/* Fleet Images Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {fleetImages.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-xl shadow-lg border border-purple-500/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-outfit)]">
                  {item.title}
                </h3>
                <p className="text-purple-400 text-sm font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8 glass rounded-2xl p-8 border border-purple-500/20">
            {/* Left Column */}
            <ul className="space-y-4">
              {features.left.map((feature, index) => (
                <motion.li
                  key={feature}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                  whileHover={{ x: 5 }}
                >
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 group-hover:text-purple-300 transition-colors" />
                  <span className="text-white group-hover:text-white/90 transition-colors">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Right Column */}
            <ul className="space-y-4">
              {features.right.map((feature, index) => (
                <motion.li
                  key={feature}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                  whileHover={{ x: 5 }}
                >
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 group-hover:text-cyan-300 transition-colors" />
                  <span className="text-white group-hover:text-white/90 transition-colors">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
