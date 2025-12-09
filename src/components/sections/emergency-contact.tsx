"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function EmergencyContact() {
  return (
    <section className="py-16 lg:py-20 bg-[#ff4433]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-[800px] mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 font-[family-name:var(--font-outfit)]">
            Need Help After Hours?
          </h2>

          <p className="text-lg text-white/95 mb-8">
            For urgent dispatch needs or shipment emergencies outside business
            hours, contact our after-hours line:
          </p>

          {/* Phone Number */}
          <motion.a
            href="tel:+12248011105"
            className="inline-flex items-center gap-4 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255, 255, 255, 0.4)",
                  "0 0 0 20px rgba(255, 255, 255, 0)",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              <Phone className="w-7 h-7 text-white" />
            </motion.div>
            <span className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-outfit)]">
              (224) 801-1105
            </span>
          </motion.a>

          <p className="text-sm text-white/80 mt-6">
            Available for emergencies 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
}
