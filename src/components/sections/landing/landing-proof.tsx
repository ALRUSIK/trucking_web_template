"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Best decision I made. I'm making more than ever and actually home with my family every weekend.",
    name: "John M.",
    title: "Flatbed Driver",
    years: "3 years with ATC",
  },
  {
    quote: "The equipment is always top-notch and dispatch actually cares about you. Not just another number here.",
    name: "Sarah J.",
    title: "Step Deck Driver",
    years: "5 years with ATC",
  },
  {
    quote: "Fair pay, consistent miles, great support. Everything they promised during hiring, they delivered.",
    name: "Mike R.",
    title: "RGN Driver",
    years: "4 years with ATC",
  },
];

export function LandingProof() {
  return (
    <section className="py-20 lg:py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            Don't Just Take <span className="gradient-text">Our Word</span>
          </h2>
          <p className="text-xl text-white/70">
            See what our drivers have to say
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="glass border border-purple-500/20 rounded-2xl p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5, borderColor: "rgba(139, 92, 246, 0.4)" }}
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-purple-400/20 mb-4" />

              {/* Quote */}
              <p className="text-white/90 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <div className="font-bold text-white mb-1">{testimonial.name}</div>
                <div className="text-sm text-purple-400">{testimonial.title}</div>
                <div className="text-xs text-white/60 mt-1">{testimonial.years}</div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urgency Banner */}
        <motion.div
          className="max-w-4xl mx-auto glass border-2 border-orange-500/30 rounded-2xl p-8 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
              Limited Positions Available
            </h3>
            <p className="text-lg text-white/80 mb-6">
              We're hiring <span className="text-orange-400 font-bold">5 qualified drivers</span> this month.
              <br className="hidden md:block" />
              Apply now before positions fill up.
            </p>
            <motion.button
              onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-bold rounded-full shadow-xl shadow-orange-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply Before It's Too Late
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
