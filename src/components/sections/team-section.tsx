"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const driverBenefits = [
  "Competitive pay ($350K+ paid to drivers annually)",
  "Modern, well-maintained equipment",
  "Consistent freight and routes",
  "Home time priority",
  "Safety bonuses and incentives",
  "24/7 dispatch support",
];

export function TeamSection() {
  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/flatbed.jpg"
                alt="ATC Family Transport Driver"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/40 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-[#ff4433] text-white rounded-2xl p-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-3xl font-bold font-[family-name:var(--font-outfit)]">
                25+
              </div>
              <div className="text-sm text-white/90">Expert Drivers</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
              The People Behind Your Shipment
            </h2>
            <div className="w-20 h-1 bg-[#ff4433] mb-8" />

            <h3 className="text-xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
              Our Drivers
            </h3>

            <p className="text-[#1a2332]/70 text-lg leading-relaxed mb-8">
              Every driver in our fleet is carefully vetted, extensively trained,
              and committed to safe, professional service. We don&apos;t just hire
              drivers—we build careers.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-10">
              {driverBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-[#1a2332]/80">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              className="bg-[#ff4433] hover:bg-[#e63d2e] text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <Link href="/careers" className="flex items-center gap-2">
                Join Our Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
