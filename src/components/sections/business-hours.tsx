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
    <section className="py-16 lg:py-20 bg-[#12121a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Clock className="w-6 h-6 text-purple-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-outfit)]">
                Hours of Operation
              </h3>
            </div>

            <div className="space-y-4">
              <motion.div
                className="flex justify-between items-center pb-3 border-b border-purple-500/20"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="font-medium text-white">
                  Monday - Friday
                </span>
                <span className="text-white/70">7:00 AM - 5:00 PM CST</span>
              </motion.div>
              <motion.div
                className="flex justify-between items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="font-medium text-white">
                  Saturday - Sunday
                </span>
                <span className="text-white/70">Closed</span>
              </motion.div>
              <p className="text-sm text-orange-400 mt-4 font-medium">
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
            className="glass rounded-2xl p-8 border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CreditCard className="w-6 h-6 text-purple-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-outfit)]">
                Payment Information
              </h3>
            </div>

            <p className="text-white/70 mb-4">We Accept:</p>

            <ul className="space-y-3">
              {paymentMethods.map((method, index) => (
                <motion.li
                  key={method}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Check className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="text-white group-hover:text-white/90 transition-colors">{method}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
