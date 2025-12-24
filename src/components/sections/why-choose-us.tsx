"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, Route, Shield, Zap, Users } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
  {
    icon: Users,
    title: "Family-First Culture",
    description:
      "We treat every driver and customer like family. Our commitment to relationships sets us apart in the industry.",
  },
];

const stats = [
  { value: "99.8%", label: "On-Time Delivery" },
  { value: "24/7", label: "Support Available" },
  { value: "48", label: "States Covered" },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#12121a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Purple glow on left */}
        <div
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full -translate-y-1/2 opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          }}
        />
        {/* Cyan glow on right */}
        <div
          className="absolute top-1/4 -right-20 w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content - 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
              Why <span className="gradient-text">ATC Family</span> Transport?
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-8" />

            <p className="text-xl md:text-2xl font-medium text-white/80 mb-12">
              We give you <span className="text-purple-400">complete control</span> of your shipments
            </p>

            {/* Benefits */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex gap-6 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/20 flex items-center justify-center group-hover:border-purple-500/40 group-hover:shadow-lg group-hover:shadow-purple-500/10 transition-all">
                      <benefit.icon className="w-7 h-7 text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-outfit)] group-hover:text-purple-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
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
              {/* Gradient border effect */}
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-purple-500 via-violet-500 to-cyan-500 opacity-50" />

              {/* Card content */}
              <div className="relative bg-[#16161f] rounded-2xl p-8 space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <div className="text-2xl md:text-3xl font-bold gradient-text font-[family-name:var(--font-outfit)]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Truck Animation */}
                <div className="relative aspect-[4/3] bg-[#1f1f2e] rounded-xl overflow-hidden flex items-center justify-center">
                  <DotLottieReact
                    src="https://lottie.host/6f789fae-d4dd-4e62-a1aa-cc6a3a73a1f6/TNsLwKMYyw.lottie"
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>

                {/* Trust badge */}
                <div className="flex items-center justify-center gap-2 pt-4 border-t border-purple-500/10">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <span className="text-white/60 text-sm">Fully Licensed & Insured</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
