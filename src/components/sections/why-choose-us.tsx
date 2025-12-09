"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, Route, Shield } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Save Money, Save Time",
    description:
      "As shipment volumes grow, our network becomes more efficient. Move your freight with the nation's safest carrier network, with a 16% lower crash rate.",
  },
  {
    icon: Route,
    title: "Logistics Solutions",
    description:
      "Providing independent advice and identifying the right fit for you. Services sourced based on solution specifications.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#1a2332] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content - 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
              Why ATC Family Transport?
            </h2>
            <div className="w-16 h-1 bg-[#ff4433] mb-8" />

            <p className="text-2xl md:text-3xl font-medium text-white/90 mb-12">
              We give you complete control of your shipments
            </p>

            {/* Benefits */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#ff4433]/20 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-7 h-7 text-[#ff4433]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-outfit)]">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Orange accent border */}
              <div className="absolute -inset-4 border-2 border-[#ff4433] rounded-2xl" />

              {/* Image placeholder */}
              <div className="relative aspect-[4/5] bg-[#243044] rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <Shield className="w-20 h-20 text-[#ff4433]/30 mb-4" />
                  <span className="text-white/30 text-xl font-bold font-[family-name:var(--font-outfit)]">
                    Fleet Image
                  </span>
                  <span className="text-white/20 text-sm mt-2">
                    Add your truck/fleet photo here
                  </span>
                </div>
                {/* Replace with actual image */}
                {/* <Image
                  src="/images/fleet.jpg"
                  alt="ATC Fleet"
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
