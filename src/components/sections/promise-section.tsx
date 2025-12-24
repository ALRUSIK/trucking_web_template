"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, Headphones } from "lucide-react";

const promises = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Your deadlines are our priority",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Real updates, honest pricing",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always available when you need us",
  },
];

export function PromiseSection() {
  return (
    <section className="relative py-24 lg:py-28 bg-[#12121a] overflow-hidden">
      {/* Decorative Quote Marks with animation */}
      <motion.div
        className="absolute top-20 left-10 text-[200px] font-serif text-purple-500/5 leading-none select-none"
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        &ldquo;
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-[200px] font-serif text-cyan-500/5 leading-none select-none"
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        &rdquo;
      </motion.div>

      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            Our Promise <span className="gradient-text">to You</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Quote with special animation */}
        <motion.div
          className="max-w-[800px] mx-auto text-center mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="glass rounded-2xl p-8 md:p-10"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xl md:text-2xl text-white/80 italic leading-relaxed">
              &ldquo;We don&apos;t just move freight—we build relationships. Every
              shipment is an opportunity to prove our commitment to excellence,
              safety, and reliability. When you choose ATC Family Transport,
              you&apos;re choosing a partner who treats your business like
              family.&rdquo;
            </p>
          </motion.div>
        </motion.div>

        {/* Promise Pillars */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              className="glass rounded-xl p-6 text-center group hover:border-purple-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/20 rounded-xl mb-4 group-hover:border-purple-500/40 transition-colors"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                <promise.icon className="w-7 h-7 text-purple-400" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-outfit)]">
                {promise.title}
              </h3>
              <p className="text-white/50 text-sm">{promise.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
