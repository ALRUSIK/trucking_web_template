"use client";

import { motion } from "framer-motion";
import { Building2, Factory, Wheat, Zap, Wrench, Landmark } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Construction",
    description: "Heavy equipment and building materials",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial machinery and components",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description: "Farming equipment and harvesting machinery",
  },
  {
    icon: Zap,
    title: "Energy",
    description: "Generators, transformers, and power equipment",
  },
  {
    icon: Wrench,
    title: "Industrial",
    description: "Large-scale industrial equipment",
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Military and public sector hauling",
  },
];

export function IndustriesSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#12121a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
            Industries <span className="gradient-text">We Serve</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="glass rounded-2xl p-6 text-center group card-hover hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/20 rounded-xl mb-4 group-hover:border-purple-500/40 transition-colors">
                <industry.icon className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-outfit)]">
                {industry.title}
              </h3>
              <p className="text-sm text-white/60">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
