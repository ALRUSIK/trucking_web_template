"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, Headphones } from "lucide-react";

const promises = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Your deadlines are our priority",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Real updates, honest pricing",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always available when you need us",
  },
];

export function PromiseSection() {
  return (
    <section className="py-24 lg:py-28 bg-[#f8f9fa] relative overflow-hidden">
      {/* Decorative Quote Marks */}
      <div className="absolute top-20 left-10 text-[200px] font-serif text-[#ff4433]/5 leading-none select-none">
        &ldquo;
      </div>
      <div className="absolute bottom-20 right-10 text-[200px] font-serif text-[#ff4433]/5 leading-none select-none">
        &rdquo;
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
            Our Promise to You
          </h2>
          <div className="w-20 h-1 bg-[#ff4433] mx-auto" />
        </motion.div>

        {/* Quote */}
        <motion.div
          className="max-w-[800px] mx-auto text-center mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-[#1a2332]/80 italic leading-relaxed">
            &ldquo;We don&apos;t just move freight—we build relationships. Every
            shipment is an opportunity to prove our commitment to excellence,
            safety, and reliability. When you choose ATC Family Transport,
            you&apos;re choosing a partner who treats your business like
            family.&rdquo;
          </p>
        </motion.div>

        {/* Promise Pillars */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ff4433]/10 rounded-xl mb-4">
                <promise.icon className="w-6 h-6 text-[#ff4433]" />
              </div>
              <h3 className="text-lg font-bold text-[#1a2332] mb-2 font-[family-name:var(--font-outfit)]">
                {promise.title}
              </h3>
              <p className="text-[#1a2332]/60 text-sm">{promise.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
