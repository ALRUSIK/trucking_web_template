"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Truck, MapPin, Handshake, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Truck,
    value: 2,
    suffix: "M",
    label: "MILES",
    sublabel: "DRIVEN",
    description: "Across highways nationwide",
  },
  {
    icon: MapPin,
    value: 48,
    suffix: "",
    label: "STATES",
    sublabel: "COVERED",
    description: "Coast to coast coverage",
  },
  {
    icon: Handshake,
    value: 784,
    suffix: "",
    label: "SATISFIED",
    sublabel: "DEALS",
    description: "Happy customers served",
  },
  {
    icon: DollarSign,
    value: 350,
    suffix: "K",
    label: "PAID TO",
    sublabel: "DRIVERS",
    description: "Supporting our team",
  },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0a0f] overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            Numbers Speak <span className="gradient-text">For Themselves</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/20 rounded-2xl mb-4 group-hover:border-purple-500/40 group-hover:shadow-lg group-hover:shadow-purple-500/10 transition-all">
                <stat.icon className="w-8 h-8 text-purple-400" />
              </div>

              <div className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-2 font-[family-name:var(--font-outfit)]">
                {isInView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                ) : (
                  "0"
                )}
              </div>

              <div className="text-sm font-bold text-white uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider -mt-1">
                {stat.sublabel}
              </div>

              <p className="text-sm text-white/50 mt-2">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
