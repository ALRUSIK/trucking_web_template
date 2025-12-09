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
    <section className="py-20 lg:py-24 bg-[#1a2332]" ref={ref}>
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
            By The Numbers
          </h2>
          <div className="w-20 h-1 bg-[#ff4433] mx-auto" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Number */}
              <div className="text-5xl md:text-6xl font-bold text-[#ff4433] mb-2 font-[family-name:var(--font-outfit)]">
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
              </div>

              {/* Label */}
              <div className="text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-white/60">{stat.description}</div>

              {/* Divider (except last) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-[#ff4433]/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
