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
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
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
            Numbers Speak For Themselves
          </h2>
          <div className="w-16 h-1 bg-[#ff4433] mx-auto" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f8f9fa] rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-[#ff4433]" />
              </div>

              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#ff4433] mb-2 font-[family-name:var(--font-outfit)]">
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

              <div className="text-sm font-bold text-[#1a2332] uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-sm font-bold text-[#1a2332] uppercase tracking-wider -mt-1">
                {stat.sublabel}
              </div>

              <p className="text-sm text-[#1a2332]/60 mt-2">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
