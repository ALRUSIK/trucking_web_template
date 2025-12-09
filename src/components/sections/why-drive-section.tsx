"use client";

import { motion } from "framer-motion";
import { DollarSign, Home, Truck, Shield, Headphones, Route } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description:
      "Top industry rates with performance bonuses. Weekly settlements and consistent miles mean consistent pay.",
  },
  {
    icon: Home,
    title: "Home Time Priority",
    description:
      "Regular home time and predictable schedules. We value your family time as much as you do.",
  },
  {
    icon: Truck,
    title: "Modern Equipment",
    description:
      "Late-model trucks with all the features. Well-maintained and reliable fleet you can trust on every haul.",
  },
  {
    icon: Shield,
    title: "Safety First Culture",
    description:
      "16% lower crash rate than industry average. Safety bonuses and continuous training programs.",
  },
  {
    icon: Headphones,
    title: "24/7 Dispatch Support",
    description:
      "Our team is always available to help. Real support when you need it, not excuses.",
  },
  {
    icon: Route,
    title: "Consistent Freight",
    description:
      "No sitting around waiting. Steady freight means steady miles and consistent income.",
  },
];

export function WhyDriveSection() {
  return (
    <section id="why-atc" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
            Why Choose ATC Family Transport?
          </h2>
          <div className="w-20 h-1 bg-[#ff4433] mx-auto mb-6" />
          <p className="text-xl text-[#1a2332]/70 max-w-[700px] mx-auto">
            More than just a job—a career you can count on.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white border-2 border-gray-100 rounded-2xl p-10 text-center group hover:border-[#ff4433] hover:-translate-y-3 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#ff4433]/10 rounded-2xl mb-6 group-hover:bg-[#ff4433] transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-[#ff4433] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#1a2332] mb-3 font-[family-name:var(--font-outfit)]">
                {benefit.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-[#ff4433] mx-auto mb-4" />

              {/* Description */}
              <p className="text-[#1a2332]/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
