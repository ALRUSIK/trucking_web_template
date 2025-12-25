"use client";

import { motion } from "framer-motion";
import { FileText, Search, UserCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Submit Online App",
    description: "Fill out the form below in 5 minutes",
  },
  {
    icon: Search,
    number: "02",
    title: "Quick Review",
    description: "We review within 24 hours and contact qualified candidates",
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Interview & Verify",
    description: "Phone or in-person interview plus DOT physical",
  },
  {
    icon: Truck,
    number: "04",
    title: "Start Driving",
    description: "Complete onboarding and hit the road",
  },
];

export function ApplicationProcess() {
  return (
    <section className="py-24 lg:py-28 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            How to <span className="gradient-text">Apply</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-xl text-white/70">
            Simple, fast, and straightforward
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto mt-16">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block">
            {/* Connecting Line */}
            <div className="relative">
              <motion.div
                className="absolute top-12 left-[12%] right-[12%] h-1 bg-purple-500/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
              <motion.div
                className="absolute top-12 left-[12%] right-[12%] h-1 bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Icon Circle */}
                  <div className="relative inline-block mb-6">
                    <motion.div
                      className="w-24 h-24 glass border border-purple-500/20 rounded-full shadow-lg shadow-purple-500/10 flex items-center justify-center group-hover:border-purple-500/40 transition-colors"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + index * 0.2,
                        type: "spring",
                      }}
                      whileHover={{ rotate: 360 }}
                    >
                      <step.icon className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    </motion.div>
                    {/* Number Badge */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/50"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.7 + index * 0.2,
                        type: "spring",
                      }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-outfit)]">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex gap-6 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ x: 10 }}
              >
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 glass border border-purple-500/20 rounded-full shadow-lg shadow-purple-500/10 flex items-center justify-center group-hover:border-purple-500/40 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <step.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </motion.div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-purple-500/50">
                    {step.number}
                  </div>
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-purple-500/30"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                      style={{ transformOrigin: "top" }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-outfit)]">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
