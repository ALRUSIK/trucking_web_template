"use client";

import { motion } from "framer-motion";
import { Handshake, Heart, Shield, Clock } from "lucide-react";

const values = [
  {
    icon: Handshake,
    title: "Trust & Reliability",
    description:
      "We deliver on our promises, every time. Your cargo is safe with us.",
  },
  {
    icon: Heart,
    title: "Family Values",
    description:
      "We treat every client and driver like family, building lasting relationships.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Industry-leading safety standards and practices protect your shipments.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We understand deadlines matter. Your freight arrives when promised.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 lg:py-28 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-[#ff4433] mx-auto" />
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white rounded-2xl p-10 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#ff4433]/10 rounded-2xl mb-6 group-hover:bg-[#ff4433] transition-colors duration-300">
                <value.icon className="w-7 h-7 text-[#ff4433] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1a2332] mb-3 font-[family-name:var(--font-outfit)]">
                {value.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-0.5 bg-[#ff4433] mx-auto mb-4" />

              {/* Description */}
              <p className="text-[#1a2332]/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
