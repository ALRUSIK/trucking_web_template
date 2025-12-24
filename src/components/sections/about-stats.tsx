"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 2,
    suffix: "M+",
    label: "Miles Driven",
    description: "Delivering across the nation",
  },
  {
    value: 48,
    suffix: "",
    label: "States Covered",
    description: "Nationwide coverage guaranteed",
  },
  {
    value: 750,
    suffix: "+",
    label: "Shipments Delivered",
    description: "Excellence and safety record",
  },
  {
    value: 25,
    suffix: "+",
    label: "Trucks in Fleet",
    description: "Modern, maintained equipment",
  },
];

export function AboutStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0a0f] overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            By The <span className="gradient-text">Numbers</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              />

              <motion.div
                className="glass rounded-2xl p-6 lg:p-8 relative"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Number with animated gradient */}
                <motion.div
                  className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 font-[family-name:var(--font-outfit)]"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </motion.div>

                {/* Label */}
                <div className="text-base md:text-lg font-bold text-white uppercase tracking-wide mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-sm text-white/50">{stat.description}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
