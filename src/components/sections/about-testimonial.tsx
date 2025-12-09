"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutTestimonial() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] font-[family-name:var(--font-outfit)]">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Large Testimonial Card */}
        <motion.div
          className="max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-lg border border-gray-100 relative">
            {/* Large Quote Mark */}
            <div className="absolute top-6 left-8 text-8xl font-serif text-[#ff4433]/10 leading-none select-none">
              &ldquo;
            </div>

            {/* Quote */}
            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl text-[#1a2332] italic leading-relaxed mb-8">
                &ldquo;You made every effort to find an option to have the freight
                in Washington Monday morning 6/12 and followed through all
                weekend to keep us updated with progress.&rdquo;
              </p>

              {/* Divider */}
              <div className="w-16 h-0.5 bg-[#ff4433] mb-6" />

              {/* Attribution */}
              <footer className="flex items-center gap-4">
                <div>
                  <cite className="not-italic font-bold text-[#1a2332]">
                    – Ben Shaub
                  </cite>
                  <p className="text-[#1a2332]/60 text-sm">SCDR LTD</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </motion.div>

        {/* Link to More Testimonials */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/#testimonials"
            className="inline-flex items-center gap-2 text-[#ff4433] font-semibold hover:gap-3 transition-all group"
          >
            Read more testimonials
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
