"use client";

import { motion } from "framer-motion";
import { Phone, AlertCircle } from "lucide-react";

export function EmergencyContact() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="max-w-[800px] mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-5"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <AlertCircle className="w-8 h-8 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-outfit)]">
              Need Help After Hours?
            </h2>
          </motion.div>

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
              className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255, 255, 255, 0.5)",
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
            <span className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-outfit)] drop-shadow-lg">
              (224) 801-1105
            </span>
          </motion.a>

          <motion.p
            className="text-sm text-white/90 mt-6 font-medium"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Available for emergencies 24/7
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
