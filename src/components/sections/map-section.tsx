"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export function MapSection() {
  const address = "225 N Arlington Heights Rd, Elk Grove Village, IL 60007";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.8!2d-87.9884!3d42.0456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDAyJzQ0LjIiTiA4N8KwNTknMTguMiJX!5e0!3m2!1sen!2sus!4v1234567890`;

  return (
    <section id="map" className="relative h-[500px] bg-[#1a2332]">
      {/* Map Embed */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ATC Family Transport Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </motion.div>

      {/* Overlay Card */}
      <motion.div
        className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-2xl max-w-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-xl font-bold text-[#1a2332] mb-3 font-[family-name:var(--font-outfit)]">
          ATC Family Transport
        </h3>
        <div className="flex items-start gap-3 text-[#1a2332]/70 mb-4">
          <MapPin className="w-5 h-5 text-[#ff4433] flex-shrink-0 mt-0.5" />
          <div>
            <p>225 N. Arlington Heights Rd</p>
            <p>Elk Grove Village, IL 60007</p>
          </div>
        </div>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#ff4433] font-semibold hover:gap-3 transition-all"
        >
          Get Directions
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
