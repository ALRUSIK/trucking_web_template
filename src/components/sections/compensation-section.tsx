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
    <section className="py-24 lg:py-28 bg-[#1a2332]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left: Pay Structure */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
              What You&apos;ll Earn
            </h2>
            <div className="w-16 h-1 bg-[#ff4433] mb-10" />

            {/* Pay Cards */}
            <div className="space-y-5">
              {payStructure.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <h3 className="text-xl font-bold text-[#ff4433] mb-3">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-white/20 mb-3" />
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="text-white/80 text-sm">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Annual Potential */}
            <motion.div
              className="mt-8 p-6 bg-[#ff4433]/20 rounded-xl border border-[#ff4433]/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-[#ff4433] font-[family-name:var(--font-outfit)]">
                Earn $65,000 - $85,000+ annually
              </p>
              <p className="text-white/70 text-sm mt-2">
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
              Comprehensive Benefits
            </h2>
            <div className="w-16 h-1 bg-[#ff4433] mb-10" />

            {/* Benefits List */}
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#ff4433] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
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
