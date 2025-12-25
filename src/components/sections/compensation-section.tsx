"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const payStructure = [
  {
    title: "Base Pay",
    items: ["Competitive per-mile rates", "Based on experience and route"],
  },
  {
    title: "Performance Bonuses",
    items: [
      "Safety bonus: Monthly incentives",
      "On-time bonus per load",
      "Fuel efficiency incentives",
    ],
  },
  {
    title: "Additional Earnings",
    items: [
      "Detention pay",
      "Layover pay",
      "Breakdown pay",
      "Tarp/securement pay",
    ],
  },
];

const benefits = [
  { title: "Health Insurance", description: "Medical, dental, and vision coverage" },
  { title: "401(k) Retirement Plan", description: "Company match available" },
  { title: "Paid Time Off", description: "Vacation and sick leave" },
  { title: "Fuel Card Program", description: "Company fuel card with nationwide network" },
  { title: "Direct Deposit", description: "Weekly pay via direct deposit" },
  { title: "Rider Program", description: "Bring a passenger with approval" },
  { title: "Referral Bonuses", description: "Earn bonuses for driver referrals" },
  { title: "Continuous Training", description: "Safety courses and skill development" },
];

export function CompensationSection() {
  return (
    <section className="py-24 lg:py-28 bg-[#12121a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left: Pay Structure */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
              What You&apos;ll <span className="gradient-text">Earn</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-10" />

            {/* Pay Cards */}
            <div className="space-y-5">
              {payStructure.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass rounded-xl p-6 border border-orange-500/20 group card-hover"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ x: 5, borderColor: "rgba(249, 115, 22, 0.4)" }}
                >
                  <h3 className="text-xl font-bold text-orange-400 mb-3">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 mb-3" />
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="text-white/80 text-sm flex items-start gap-2">
                        <span className="text-orange-400 mt-1">•</span>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Annual Potential */}
            <motion.div
              className="mt-8 p-6 glass rounded-xl border border-orange-500/30 relative overflow-hidden group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-2xl md:text-3xl font-bold text-orange-400 font-[family-name:var(--font-outfit)] relative z-10">
                Earn $65,000 - $85,000+ annually
              </p>
              <p className="text-white/70 text-sm mt-2 relative z-10">
                Based on experience and miles
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Benefits Package */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
              Comprehensive <span className="gradient-text">Benefits</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mb-10" />

            {/* Benefits List */}
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit.title}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {benefit.title}
                    </h4>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
