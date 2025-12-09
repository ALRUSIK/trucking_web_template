"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Flatbed",
    image: "/images/flatbed.jpg",
    description: "Open deck hauling for oversized and heavy loads",
    features: ["Machinery", "Steel Products", "Building Materials"],
  },
  {
    title: "Step Deck",
    image: "/images/step-deck.jpg",
    description: "Lower deck height for taller cargo requirements",
    features: ["Tall Machinery", "Crates & Containers", "Industrial Equipment"],
  },
  {
    title: "RGN / Lowboy",
    image: "/images/rgn-lowboy.jpg",
    description: "Heavy-duty hauling for your largest equipment",
    features: ["Construction Equipment", "Agricultural Machinery", "Oversized Industrial Loads"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[#ff4433]/10 text-[#ff4433] rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            What We Haul
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
            Our Specialized Services
          </h2>
          <p className="text-lg text-[#1a2332]/70 max-w-2xl mx-auto">
            Heavy haul solutions for every load type
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-transparent hover:border-[#ff4433]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-[#1a2332]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-6xl font-bold font-[family-name:var(--font-outfit)]">
                    {service.title}
                  </span>
                </div>
                {/* Placeholder - replace with actual images */}
                {/* <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1a2332] mb-3 font-[family-name:var(--font-outfit)]">
                  {service.title}
                </h3>
                <p className="text-[#1a2332]/70 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-[#1a2332]/80"
                    >
                      <div className="w-1.5 h-1.5 bg-[#ff4433] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-2 text-[#ff4433] font-semibold hover:gap-3 transition-all group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
