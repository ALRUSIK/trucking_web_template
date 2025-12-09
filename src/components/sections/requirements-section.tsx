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
    <section className="py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
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
              <div className="w-48 h-48 md:w-64 md:h-64 bg-[#ff4433]/10 rounded-full flex items-center justify-center">
                <div className="w-36 h-36 md:w-48 md:h-48 bg-[#ff4433]/20 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-[#ff4433] rounded-full flex items-center justify-center">
                    <FileCheck className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-[#1a2332] text-white rounded-xl px-4 py-2 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="font-bold">Class A CDL</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
              What We&apos;re Looking For
            </h2>
            <div className="w-16 h-1 bg-[#ff4433] mb-10" />

            <h3 className="text-xl font-bold text-[#1a2332] mb-6 font-[family-name:var(--font-outfit)]">
              Basic Requirements
            </h3>

            {/* Requirements List */}
            <ul className="space-y-4 mb-10">
              {basicRequirements.map((req, index) => (
                <motion.li
                  key={req}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#ff4433] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#1a2332] text-lg">{req}</span>
                </motion.li>
              ))}
            </ul>

            {/* Expandable Sections */}
            <div className="space-y-4 mb-10">
              {expandableSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <button
                    onClick={() =>
                      setOpenSection(openSection === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-[#1a2332]">
                      {section.title}
                    </span>
                    {openSection === index ? (
                      <X className="w-5 h-5 text-[#ff4433]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#ff4433]" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openSection === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="px-4 pb-4 space-y-2 bg-gray-50">
                          {section.content.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-[#1a2332]/70 text-sm"
                            >
                              <span className="text-[#ff4433]">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-[#f8f9fa] rounded-xl p-6">
              <p className="text-[#1a2332] font-medium mb-4">
                Meet the requirements?
              </p>
              <Button
                className="bg-[#ff4433] hover:bg-[#e63d2e] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="#application-form">Apply Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
