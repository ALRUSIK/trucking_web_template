"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What is the hiring process timeline?",
    answer:
      "Most applications are reviewed within 24 hours. The complete hiring process typically takes 1-2 weeks from application to start date.",
  },
  {
    question: "Do I need flatbed/heavy haul experience?",
    answer:
      "While preferred, it's not required. We provide training for qualified CDL-A drivers who are willing to learn.",
  },
  {
    question: "What is the pay structure?",
    answer:
      "We offer competitive mileage rates plus bonuses for safety, on-time delivery, and fuel efficiency. Contact us for specific current rates.",
  },
  {
    question: "How often will I be home?",
    answer:
      "Most routes allow for weekly or bi-weekly home time. We work with you to find a schedule that fits your needs.",
  },
  {
    question: "What if I don't meet all the requirements?",
    answer:
      "Contact us anyway! We review each application individually and may have opportunities for drivers with less experience.",
  },
  {
    question: "Do you hire recent CDL school graduates?",
    answer:
      "We require 2+ years of OTR experience. However, we can provide referrals to partner companies that train new drivers.",
  },
  {
    question: "What equipment will I be driving?",
    answer:
      "Late-model trucks (2020+) with automatic transmissions, APUs, and all modern amenities. Well-maintained flatbed, step-deck, and RGN trailers.",
  },
  {
    question: "Is there a rider/pet policy?",
    answer:
      "Yes, we allow riders and pets with approval. Contact our recruiting team to discuss our rider policy and requirements.",
  },
];

export function CareersFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-[900px] mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-l-4 border-l-[#ff4433] border-gray-200"
                  : "border-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                  openIndex === index ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <span className="text-lg font-bold text-[#1a2332] pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {openIndex === index ? (
                    <X className="w-6 h-6 text-[#ff4433]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#ff4433]" />
                  )}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-[#1a2332]/70 leading-relaxed">
                        {faq.answer}
                      </p>
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
