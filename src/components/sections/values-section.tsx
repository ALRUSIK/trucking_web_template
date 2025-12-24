"use client";

import { motion } from "framer-motion";
import { Handshake, Heart, Shield, Clock } from "lucide-react";

const values = [
  {
    icon: Handshake,
    title: "Trust & Reliability",
    description:
      "We deliver on our promises, every time. Your cargo is safe with us.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Heart,
    title: "Family Values",
    description:
      "We treat every client and driver like family, building lasting relationships.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Industry-leading safety standards and practices protect your shipments.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We understand deadlines matter. Your freight arrives when promised.",
    gradient: "from-amber-500 to-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function ValuesSection() {
  return (
    <section className="relative py-24 lg:py-28 bg-[#0a0a0f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
            Our Core <span className="gradient-text">Values</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Values Grid with 3D effect */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="glass rounded-2xl p-8 text-center group hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              {/* Hover glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon with animated ring */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradient} opacity-20`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
                <div className={`relative z-10 w-full h-full rounded-2xl bg-gradient-to-br ${value.gradient} bg-opacity-20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-outfit)]">
                {value.title}
              </h3>

              {/* Divider */}
              <motion.div
                className={`w-10 h-0.5 bg-gradient-to-r ${value.gradient} mx-auto mb-4 rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              />

              {/* Description */}
              <p className="text-white/60 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
