"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutCTA() {
  return (
    <section className="py-24 lg:py-28 bg-[#ff4433] relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)]">
            Ready to Experience the ATC Difference?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed">
            Let&apos;s discuss your heavy haul needs and show you why hundreds of
            clients trust us with their most important shipments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#ff4433] hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>

            <Button
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#ff4433] px-8 py-6 text-lg font-semibold transition-all shadow-none"
              asChild
            >
              <a href="tel:+12248011105" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>

            <Button
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#ff4433] px-8 py-6 text-lg font-semibold transition-all shadow-none"
              asChild
            >
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
