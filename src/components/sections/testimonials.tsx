"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Your professionalism has been superb. From the initial quote to final delivery, ATC handled everything with exceptional care and attention to detail.",
    author: "May Sarton",
    company: "Emerge",
    rating: 5,
  },
  {
    quote:
      "Thank you for helping us with our HOME DEPOT account. Your team went above and beyond to ensure our freight arrived on time, every time.",
    author: "Roma Kirsman",
    company: "XPO",
    rating: 5,
  },
  {
    quote:
      "Followed through all weekend to make sure our equipment was delivered safely. This level of dedication is rare in the industry.",
    author: "Ben Shaub",
    company: "SCDR LTD",
    rating: 5,
  },
  {
    quote:
      "ATC has been our go-to carrier for heavy haul needs. Their team understands the unique challenges of oversized loads.",
    author: "Michael Torres",
    company: "Industrial Solutions Inc.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-purple-400" />
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-lg text-white/60">
            Trusted by leading companies nationwide
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="overflow-hidden"
          ref={emblaRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-0 md:pl-4 first:pl-0"
              >
                <div className="testimonial-card rounded-2xl p-8 h-full relative group card-hover">
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-purple-500/30 mb-4" />

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-lg text-white/80 leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Divider */}
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-4" />

                    {/* Author */}
                    <div>
                      <p className="font-bold text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-purple-400 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 w-8"
                  : "bg-white/20 hover:bg-white/40 w-2"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
