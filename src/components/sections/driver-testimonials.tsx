"use client";

import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

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
    <section className="py-24 lg:py-28 bg-[#1a2332]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            Hear From Our Drivers
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/30">
                <User className="w-10 h-10 text-white" />
              </div>

              {/* Quote */}
              <p className="text-white/90 italic leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-white/30 mx-auto mb-4" />

              {/* Name & Title */}
              <h4 className="text-xl font-bold text-white">
                – {testimonial.name}
              </h4>
              <p className="text-white/70 text-sm">{testimonial.title}</p>
              <p className="text-white/60 text-xs mb-3">
                {testimonial.experience}
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#ff4433] fill-[#ff4433]"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
