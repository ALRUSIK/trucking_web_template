"use client";

import { motion } from "framer-motion";
import { Clock, Radio, Globe, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: "< 2 Hours", label: "Response Time" },
  { icon: Radio, value: "24/7", label: "Dispatch Available" },
  { icon: Globe, value: "48", label: "States Covered" },
  { icon: Users, value: "750+", label: "Satisfied Clients" },
];

export function ContactStats() {
  return (
    <section className="py-16 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center relative group"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="glass rounded-xl p-6 border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300"
                whileHover={{ boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)" }}
              >
                <stat.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 mx-auto mb-3 transition-colors" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-[family-name:var(--font-outfit)]">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/60 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
