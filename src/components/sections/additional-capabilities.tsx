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
    <section className="relative py-20 lg:py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            Additional <span className="gradient-text">Capabilities</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="glass rounded-2xl p-8 text-center group card-hover border-t-2 border-transparent hover:border-purple-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/20 rounded-2xl mb-6 group-hover:border-purple-500/40 group-hover:shadow-lg group-hover:shadow-purple-500/10 transition-all">
                <capability.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-outfit)]">
                {capability.title}
              </h3>
              <p className="text-white/60">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
