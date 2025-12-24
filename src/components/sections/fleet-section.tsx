"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Wrench, Headphones } from "lucide-react";

const fleetItems = [
  {
    image: "/images/flatbed.jpg",
    title: "Flatbed Fleet",
    description: "48-53 ft trailers",
  },
  {
    image: "/images/step-deck.jpg",
    title: "Step Deck Fleet",
    description: "Modern equipment",
  },
  {
    image: "/images/rgn-lowboy.jpg",
    title: "RGN/Lowboy Fleet",
    description: "Heavy-duty hauling",
  },
];

const features = [
  {
    icon: MapPin,
    title: "GPS Tracking",
  },
  {
    icon: Wrench,
    title: "Regular Maintenance",
  },
  {
    icon: Headphones,
    title: "24/7 Roadside Support",
  },
];

export function FleetSection() {
  return (
    <section className="relative py-24 lg:py-28 bg-[#0a0a0f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            Our <span className="gradient-text">Fleet</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-4 rounded-full" />
          <p className="text-xl text-white/60">
            Modern, Well-Maintained Equipment
          </p>
        </motion.div>

        {/* Fleet Images Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {fleetItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-purple-500/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />

                {/* Hover Overlay with gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-violet-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                >
                  <motion.span
                    className="text-white font-bold text-lg border-2 border-white px-6 py-2 rounded-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    View Details
                  </motion.span>
                </motion.div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-outfit)]">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.p
          className="text-white/60 text-center max-w-[700px] mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Every truck in our fleet undergoes regular inspections and maintenance.
          We invest in the latest technology and equipment to ensure your cargo
          arrives safely and on schedule.
        </motion.p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-center justify-center gap-3 glass rounded-xl px-6 py-4 group hover:border-purple-500/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <feature.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <span className="font-medium text-white">{feature.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
