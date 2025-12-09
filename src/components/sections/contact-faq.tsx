"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you provide a quote?",
    answer:
      "We typically respond to quote requests within 2 hours during business hours (7 AM - 5 PM CST). For urgent requests, call us directly at (224) 801-1105.",
  },
  {
    question: "What information do you need for a quote?",
    answer:
      "We need pickup and delivery locations, cargo dimensions and weight, type of equipment needed, and preferred dates. The more details you provide, the more accurate your quote will be.",
  },
  {
    question: "Do you offer expedited shipping?",
    answer:
      "Yes! We offer express delivery services for time-critical shipments. Contact us to discuss your timeline requirements and we'll work to accommodate your needs.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We provide transportation services across all 48 contiguous United States, with extensive coverage in the Midwest and beyond. No destination is too far.",
  },
  {
    question: "How do I track my shipment?",
    answer:
      "Our dispatch team provides regular updates throughout transit. You can also call us anytime at (224) 801-1105 for real-time status updates on your shipment.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-white">
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
            Common Questions
          </h2>
          <div className="w-16 h-1 bg-[#ff4433] mx-auto" />
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-[900px] mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-l-4 border-l-[#ff4433] border-gray-200"
                  : "border-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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
