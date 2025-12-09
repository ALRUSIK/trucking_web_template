"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "< 2 Hours", label: "Response Time" },
  { value: "24/7", label: "Dispatch Available" },
  { value: "48", label: "States Covered" },
  { value: "750+", label: "Satisfied Clients" },
];

export function ContactStats() {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-1 font-[family-name:var(--font-outfit)]">
                {stat.value}
              </div>
              <div className="text-sm text-[#1a2332]/60 uppercase tracking-wide">
                {stat.label}
              </div>

              {/* Vertical Divider (except last) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#ff4433]/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
