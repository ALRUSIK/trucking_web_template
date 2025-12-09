"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Shield } from "lucide-react";

const capabilities = [
  {
    icon: Clock,
    title: "Express Delivery",
    description:
      "Time-critical shipments with expedited service and priority routing",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description:
      "48 states, extensive network, flexible pickup and delivery locations",
  },
  {
    icon: Shield,
    title: "Permitted & Insured",
    description:
      "All necessary permits, full insurance coverage, DOT compliant operations",
  },
];

export function AdditionalCapabilities() {
  return (
    <section className="py-20 lg:py-24 bg-white">
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
            Additional Capabilities
          </h2>
          <div className="w-16 h-1 bg-[#ff4433] mx-auto" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="bg-[#f8f9fa] rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-transparent hover:border-[#ff4433]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-6 group-hover:shadow-md transition-shadow">
                <capability.icon className="w-8 h-8 text-[#ff4433]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3 font-[family-name:var(--font-outfit)]">
                {capability.title}
              </h3>
              <p className="text-[#1a2332]/70">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
