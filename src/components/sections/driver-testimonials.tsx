"use client";

import { motion } from "framer-motion";
import { Star, User, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I've been with ATC for 3 years and couldn't be happier. The equipment is top-notch, dispatch always has my back, and I'm home every weekend.",
    name: "John Martinez",
    title: "Flatbed Driver",
    experience: "5 years experience",
    rating: 5,
  },
  {
    quote:
      "Best decision I ever made. Fair pay, consistent miles, and they treat you like family—not a number.",
    name: "Sarah Johnson",
    title: "Step Deck Driver",
    experience: "8 years experience",
    rating: 5,
  },
  {
    quote:
      "Solid company, reliable equipment, and great support. I'm making more than I did at my last two companies.",
    name: "Mike Rodriguez",
    title: "RGN Driver",
    experience: "10 years experience",
    rating: 5,
  },
];

export function DriverTestimonials() {
  return (
    <section className="py-24 lg:py-28 bg-[#12121a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            Hear From Our <span className="gradient-text">Drivers</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="glass border border-purple-500/20 rounded-2xl p-8 text-center group card-hover relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, borderColor: "rgba(139, 92, 246, 0.4)" }}
            >
              {/* Quote Icon Background */}
              <motion.div
                className="absolute top-4 right-4 opacity-10"
                initial={{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 180, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <Quote className="w-16 h-16 text-purple-400" />
              </motion.div>

              {/* Avatar */}
              <motion.div
                className="relative w-20 h-20 mx-auto mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full animate-pulse" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500/80 to-violet-600/80 rounded-full flex items-center justify-center border-4 border-purple-400/30">
                  <User className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              {/* Quote */}
              <p className="text-white/90 italic leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-4" />

              {/* Name & Title */}
              <h4 className="text-xl font-bold text-white">
                – {testimonial.name}
              </h4>
              <p className="text-purple-400 text-sm font-medium">{testimonial.title}</p>
              <p className="text-white/60 text-xs mb-3">
                {testimonial.experience}
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.15 + i * 0.05 }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                  >
                    <Star
                      className="w-5 h-5 text-orange-400 fill-orange-400"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
