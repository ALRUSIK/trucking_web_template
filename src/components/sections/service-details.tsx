"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, Scale, Move, Package, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "flatbed",
    title: "Flatbed Transportation",
    subtitle: "Open deck hauling for versatile cargo solutions",
    description:
      "Our flatbed trailers provide maximum flexibility for loading and unloading. Perfect for oversized, wide, or irregularly shaped cargo that requires top or side loading access.",
    image: "/images/flatbed.jpg",
    specs: [
      { icon: Ruler, label: "Length", value: "48-53 ft" },
      { icon: Scale, label: "Max Weight", value: "48,000 lbs" },
      { icon: Move, label: "Width", value: "8.5 ft" },
      { icon: Package, label: "Height", value: "8.5 ft max" },
    ],
    hauling: [
      "Steel products and metal beams",
      "Construction materials and lumber",
      "Heavy machinery and equipment",
      "Building supplies and prefab structures",
      "Industrial components",
      "Agricultural equipment",
    ],
    imagePosition: "left",
  },
  {
    id: "step-deck",
    title: "Step Deck Transportation",
    subtitle: "Lower deck height for taller cargo",
    description:
      "Step deck trailers feature two deck levels, allowing you to haul taller freight while staying within legal height limits. Ideal for equipment that exceeds flatbed height restrictions.",
    image: "/images/step-deck.jpg",
    specs: [
      { icon: Ruler, label: "Length", value: "48-53 ft" },
      { icon: Scale, label: "Max Weight", value: "48,000 lbs" },
      { icon: Move, label: "Upper Deck", value: "11 ft height" },
      { icon: Package, label: "Lower Deck", value: "10 ft height" },
    ],
    hauling: [
      "Tall machinery and industrial equipment",
      "Shipping containers and crates",
      "HVAC systems and large tanks",
      "Military vehicles and equipment",
      "Construction equipment",
      "Oversized manufacturing components",
    ],
    imagePosition: "right",
  },
  {
    id: "rgn-lowboy",
    title: "RGN / Lowboy Transportation",
    subtitle: "Heavy-duty hauling for extreme loads",
    description:
      "Removable gooseneck (RGN) and lowboy trailers offer the lowest deck height available, perfect for hauling oversized, tall, and exceptionally heavy equipment that exceeds standard trailer specifications.",
    image: "/images/rgn-lowboy.jpg",
    specs: [
      { icon: Ruler, label: "Length", value: "29-53 ft" },
      { icon: Scale, label: "Max Weight", value: "40,000-80,000 lb" },
      { icon: Move, label: "Deck Height", value: "18-24 inches" },
      { icon: Package, label: "Well Depth", value: "11-12 ft" },
    ],
    hauling: [
      "Heavy construction equipment (excavators, bulldozers)",
      "Large agricultural machinery (combines, tractors)",
      "Industrial equipment and generators",
      "Mining equipment and cranes",
      "Transformers and large tanks",
      "Military and aerospace equipment",
    ],
    imagePosition: "left",
  },
];

export function ServiceDetails() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#12121a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="space-y-32">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  service.imagePosition === "right" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  className={`${service.imagePosition === "right" ? "lg:order-2" : ""}`}
                  initial={{
                    opacity: 0,
                    x: service.imagePosition === "left" ? -50 : 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group border border-purple-500/20">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`${service.imagePosition === "right" ? "lg:order-1" : ""}`}
                  initial={{
                    opacity: 0,
                    x: service.imagePosition === "left" ? 50 : -50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
                    {service.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 rounded-full" />
                  <p className="text-lg text-purple-400 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-white/60 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.specs.map((spec, index) => (
                      <motion.div
                        key={spec.label}
                        className="bg-[#1f1f2e] rounded-xl p-4 border border-purple-500/10 group hover:border-purple-500/30 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      >
                        <spec.icon className="w-5 h-5 text-purple-400 mb-2" />
                        <div className="text-xs text-white/50 uppercase tracking-wider">
                          {spec.label}
                        </div>
                        <div className="text-lg font-bold text-white">
                          {spec.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* What We Haul */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                      What We Haul
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.hauling.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2 text-white/60 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                        >
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="btn-gradient btn-shine text-white font-medium shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all group"
                    asChild
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Request {service.title.split(" ")[0]} Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
