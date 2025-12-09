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
    <section className="py-20 lg:py-28 bg-[#1a2332]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            Industries We Serve
          </h2>
          <div className="w-16 h-1 bg-[#ff4433] mx-auto" />
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,68,51,0.3)]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#ff4433]/20 rounded-xl mb-4 group-hover:bg-[#ff4433]/30 transition-colors">
                <industry.icon className="w-7 h-7 text-[#ff4433]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-outfit)]">
                {industry.title}
              </h3>
              <p className="text-sm text-white/70">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
