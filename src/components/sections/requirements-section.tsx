"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, Plus, X, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const basicRequirements = [
  "Valid Class A CDL",
  "Minimum 2 years verifiable OTR experience",
  "Clean driving record",
  "21+ years of age",
  "Pass DOT physical and drug screening",
  "Legal authorization to work in the USA",
];

const expandableSections = [
  {
    title: "Driving Record Requirements",
    content: [
      "No more than 3 moving violations in past 3 years",
      "No DUI/DWI in past 5 years",
      "No serious preventable accidents in past 3 years",
      "No suspended license in past 3 years",
    ],
  },
  {
    title: "Experience Requirements",
    content: [
      "2+ years Class A CDL experience required",
      "Flatbed, step-deck, or RGN experience preferred",
      "Heavy haul experience a plus",
      "Securement and tarping knowledge",
    ],
  },
];

export function RequirementsSection() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-28 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Visual Element */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-48 h-48 md:w-64 md:h-64 bg-purple-500/10 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-36 h-36 md:w-48 md:h-48 bg-purple-500/20 rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FileCheck className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass border border-purple-500/30 text-white rounded-xl px-4 py-2 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="font-bold gradient-text">Class A CDL</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Requirements Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
              What We&apos;re Looking For
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mb-10" />

            <h3 className="text-xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)]">
              Basic Requirements
            </h3>

            {/* Requirements List */}
            <ul className="space-y-4 mb-10">
              {basicRequirements.map((req, index) => (
                <motion.li
                  key={req}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mt-0.5"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-white text-lg group-hover:text-white/90 transition-colors">{req}</span>
                </motion.li>
              ))}
            </ul>

            {/* Expandable Sections */}
            <div className="space-y-4 mb-10">
              {expandableSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  className="glass border border-purple-500/20 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ borderColor: "rgba(139, 92, 246, 0.4)" }}
                >
                  <button
                    onClick={() =>
                      setOpenSection(openSection === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-purple-500/10 transition-colors"
                  >
                    <span className="font-bold text-white">
                      {section.title}
                    </span>
                    <motion.div
                      animate={{ rotate: openSection === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openSection === index ? (
                        <X className="w-5 h-5 text-purple-400" />
                      ) : (
                        <Plus className="w-5 h-5 text-purple-400" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openSection === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="px-4 pb-4 space-y-2 bg-[#16161f]/50">
                          {section.content.map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-2 text-white/70 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <span className="text-purple-400">•</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="glass border border-purple-500/30 rounded-xl p-6 group"
              whileHover={{ scale: 1.02, borderColor: "rgba(139, 92, 246, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white font-medium mb-4">
                Meet the requirements?
              </p>
              <Button
                className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="#application-form">Apply Now</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
