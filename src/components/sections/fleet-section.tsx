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
    <section className="py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
            Our Fleet
          </h2>
          <div className="w-20 h-1 bg-[#ff4433] mx-auto mb-4" />
          <p className="text-xl text-[#1a2332]/70">
            Modern, Well-Maintained Equipment
          </p>
        </motion.div>

        {/* Fleet Images Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {fleetItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/80 via-[#1a2332]/20 to-transparent" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#ff4433]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    View Details
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-outfit)]">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.p
          className="text-[#1a2332]/70 text-center max-w-[700px] mx-auto mb-12"
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
              className="flex items-center justify-center gap-3 bg-[#f8f9fa] rounded-xl px-6 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <feature.icon className="w-5 h-5 text-[#ff4433]" />
              <span className="font-medium text-[#1a2332]">{feature.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
