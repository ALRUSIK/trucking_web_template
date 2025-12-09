"use client";

import { motion } from "framer-motion";
import { Clock, CreditCard, Check } from "lucide-react";

const paymentMethods = [
  "Check",
  "ACH/Wire Transfer",
  "Major Credit Cards",
  "NET 30 Terms (approved clients)",
];

export function BusinessHours() {
  return (
    <section className="py-16 lg:py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-[#ff4433]" />
              <h3 className="text-2xl font-bold text-[#1a2332] font-[family-name:var(--font-outfit)]">
                Hours of Operation
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="font-medium text-[#1a2332]">
                  Monday - Friday
                </span>
                <span className="text-[#1a2332]/70">7:00 AM - 5:00 PM CST</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#1a2332]">
                  Saturday - Sunday
                </span>
                <span className="text-[#1a2332]/70">Closed</span>
              </div>
              <p className="text-sm text-[#ff4433] mt-4">
                * 24/7 Emergency Line Available
              </p>
            </div>
          </motion.div>

          {/* Payment Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6 text-[#ff4433]" />
              <h3 className="text-2xl font-bold text-[#1a2332] font-[family-name:var(--font-outfit)]">
                Payment Information
              </h3>
            </div>

            <p className="text-[#1a2332]/70 mb-4">We Accept:</p>

            <ul className="space-y-3">
              {paymentMethods.map((method, index) => (
                <motion.li
                  key={method}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <Check className="w-5 h-5 text-[#ff4433]" />
                  <span className="text-[#1a2332]">{method}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
