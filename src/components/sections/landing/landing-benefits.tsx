"use client";

import { motion } from "framer-motion";
import { DollarSign, Truck, Shield, Clock, Award, Users } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "$65,000 - $85,000+ per year with performance bonuses",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Truck,
    title: "Modern Equipment",
    description: "2020+ model trucks with automatic transmission & APU",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Full Benefits",
    description: "Medical, dental, vision & 401(k) with company match",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Clock,
    title: "Weekly Home Time",
    description: "Predictable schedules so you can spend time with family",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Award,
    title: "Safety Bonuses",
    description: "Monthly safety incentives & fuel efficiency rewards",
    color: "from-yellow-500 to-amber-600",
  },
  {
    icon: Users,
    title: "Family Culture",
    description: "24/7 dispatch support & you're never just a number",
    color: "from-cyan-500 to-cyan-600",
  },
];

export function LandingBenefits() {
  return (
    <section className="py-20 lg:py-24 bg-[#12121a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            Why Drivers <span className="gradient-text">Choose ATC</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            More than just a paycheck—it's a career you can count on
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="glass border border-purple-500/20 rounded-2xl p-8 group card-hover relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, borderColor: "rgba(139, 92, 246, 0.4)" }}
            >
              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl mb-5 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <benefit.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-outfit)]">
                {benefit.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white text-lg font-bold rounded-full shadow-xl shadow-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Application Below
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
