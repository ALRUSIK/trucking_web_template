"use client";

import { motion } from "framer-motion";
import { FileText, Calculator, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Request Quote",
    description: "Tell us about your cargo and shipping requirements",
  },
  {
    icon: Calculator,
    number: "02",
    title: "Quote & Plan",
    description: "Receive detailed pricing and route planning",
  },
  {
    icon: Truck,
    number: "03",
    title: "Schedule Pickup",
    description: "We pick up your freight at your convenience",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Delivery",
    description: "On-time, safe delivery to your destination",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa]">
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
            How It Works
          </h2>
          <p className="text-lg text-[#1a2332]/70">
            Simple, transparent shipping process
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line - Desktop */}
          <motion.div
            className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-[#ff4433]/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              >
                {/* Step Circle */}
                <div className="relative inline-flex items-center justify-center w-32 h-32 mx-auto mb-6">
                  <motion.div
                    className="absolute inset-0 bg-white rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <step.icon className="w-8 h-8 text-[#1a2332] mb-2" />
                    <motion.span
                      className="text-2xl font-bold text-[#ff4433] font-[family-name:var(--font-outfit)]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + index * 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {step.number}
                    </motion.span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#1a2332] mb-2 font-[family-name:var(--font-outfit)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#1a2332]/70 max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
