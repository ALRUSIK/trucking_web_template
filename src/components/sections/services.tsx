"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Box, Container } from "lucide-react";

const services = [
  {
    title: "Flatbed",
    icon: Truck,
    image: "/images/flatbed.jpg",
    description: "Open deck hauling for oversized and heavy loads",
    features: ["Machinery", "Steel Products", "Building Materials"],
    color: "purple",
  },
  {
    title: "Step Deck",
    icon: Box,
    image: "/images/step-deck.jpg",
    description: "Lower deck height for taller cargo requirements",
    features: ["Tall Machinery", "Crates & Containers", "Industrial Equipment"],
    color: "violet",
  },
  {
    title: "RGN / Lowboy",
    icon: Container,
    image: "/images/rgn-lowboy.jpg",
    description: "Heavy-duty hauling for your largest equipment",
    features: ["Construction Equipment", "Agricultural Machinery", "Oversized Industrial Loads"],
    color: "cyan",
  },
];

const colorClasses = {
  purple: {
    gradient: "from-purple-500 to-purple-600",
    glow: "group-hover:shadow-purple-500/20",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    dot: "bg-purple-500",
  },
  violet: {
    gradient: "from-violet-500 to-violet-600",
    glow: "group-hover:shadow-violet-500/20",
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    dot: "bg-violet-500",
  },
  cyan: {
    gradient: "from-cyan-500 to-cyan-600",
    glow: "group-hover:shadow-cyan-500/20",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    dot: "bg-cyan-500",
  },
};

export function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            What We Haul
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            Our <span className="gradient-text">Specialized</span> Services
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Heavy haul solutions for every load type
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={service.title}
                className={`group relative bg-[#16161f] rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 card-hover ${colors.glow}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${service.color}-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16161f] via-[#16161f]/50 to-transparent z-10" />

                  {/* Icon badge */}
                  <div className={`absolute bottom-4 left-6 z-20 p-3 rounded-xl bg-gradient-to-br ${colors.gradient} shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-outfit)] group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-white/70"
                      >
                        <div className={`w-1.5 h-1.5 ${colors.dot} rounded-full`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`inline-flex items-center gap-2 ${colors.text} font-semibold group/link`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
