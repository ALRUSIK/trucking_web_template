"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Your professionalism has been superb. From the initial quote to final delivery, ATC handled everything with exceptional care and attention to detail.",
    author: "May Sarton",
    company: "Emerge",
  },
  {
    quote:
      "Thank you for helping us with our HOME DEPOT account. Your team went above and beyond to ensure our freight arrived on time, every time.",
    author: "Roma Kirsman",
    company: "XPO",
  },
  {
    quote:
      "Followed through all weekend to make sure our equipment was delivered safely. This level of dedication is rare in the industry.",
    author: "Ben Shaub",
    company: "SCDR LTD",
  },
  {
    quote:
      "ATC has been our go-to carrier for heavy haul needs. Their team understands the unique challenges of oversized loads.",
    author: "Michael Torres",
    company: "Industrial Solutions Inc.",
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
    <section className="py-24 lg:py-32 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#1a2332]/70">
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
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full relative">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-[#ff4433]/20 absolute top-6 right-6" />

                  {/* Quote Text */}
                  <blockquote className="text-lg md:text-xl text-[#1a2332] italic leading-relaxed mb-6 relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-[#ff4433] mb-4" />

                  {/* Author */}
                  <div>
                    <p className="font-bold text-[#1a2332]">
                      – {testimonial.author}
                    </p>
                    <p className="text-[#1a2332]/60 text-sm">
                      {testimonial.company}
                    </p>
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-[#ff4433] w-8"
                  : "bg-[#1a2332]/20 hover:bg-[#1a2332]/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
