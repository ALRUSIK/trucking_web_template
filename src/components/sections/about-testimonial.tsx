"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export function AboutTestimonial() {
  return (
    <section className="relative py-20 lg:py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-outfit)]">
            What Our <span className="gradient-text">Clients Say</span>
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
          <motion.div
            className="glass rounded-2xl p-10 md:p-12 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated gradient border effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Large Quote Icon */}
            <motion.div
              className="absolute top-6 left-8"
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Quote className="w-16 h-16 text-purple-500" />
            </motion.div>

            {/* Quote */}
            <blockquote className="relative z-10">
              <motion.p
                className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-8 pl-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                &ldquo;You made every effort to find an option to have the freight
                in Washington Monday morning 6/12 and followed through all
                weekend to keep us updated with progress.&rdquo;
              </motion.p>

              {/* Divider */}
              <motion.div
                className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />

              {/* Attribution */}
              <footer className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-white font-bold text-lg">BS</span>
                </motion.div>
                <div>
                  <cite className="not-italic font-bold text-white">
                    Ben Shaub
                  </cite>
                  <p className="text-white/50 text-sm">SCDR LTD</p>
                </div>
              </footer>
            </blockquote>
          </motion.div>
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
            className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 hover:gap-3 transition-all group"
          >
            Read more testimonials
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
