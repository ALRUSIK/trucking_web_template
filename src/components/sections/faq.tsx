"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We provide transportation services across all 48 continental United States. Our extensive network allows us to pick up and deliver freight from coast to coast, with flexible scheduling to meet your needs.",
  },
  {
    question: "What types of cargo can you haul?",
    answer:
      "We specialize in flatbed, step deck, and RGN/lowboy transportation. This includes construction equipment, heavy machinery, steel products, agricultural equipment, industrial components, and oversized loads requiring specialized handling.",
  },
  {
    question: "How quickly can you pick up my freight?",
    answer:
      "With our 24/7 dispatch team, we can often arrange same-day or next-day pickup depending on equipment availability and location. For time-critical shipments, we offer expedited service with priority routing.",
  },
  {
    question: "Do you handle oversized loads?",
    answer:
      "Yes, we specialize in oversized and overweight loads. Our team handles all necessary permitting, route planning, and pilot car coordination for loads that exceed standard dimensions or weight limits.",
  },
  {
    question: "What permits are required?",
    answer:
      "Permit requirements vary by state and load specifications. Our experienced team handles all permit acquisition, including oversize/overweight permits, trip permits, and any special routing requirements.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Getting a quote is easy! Contact us through our website, call our dispatch team at (224) 801-1105, or email us with your shipment details. We'll provide a competitive quote within hours.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0a0f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
          }}
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <X className="w-5 h-5 text-purple-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-purple-400" />
                  )}
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
