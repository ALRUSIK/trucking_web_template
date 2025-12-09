"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactOptions = [
  {
    icon: Phone,
    title: "Call Recruiting",
    primary: "(224) 801-1105",
    secondary: "Monday - Friday",
    tertiary: "7 AM - 5 PM CST",
    action: { label: "Call Now", href: "tel:+12248011105" },
  },
  {
    icon: Mail,
    title: "Email Recruiting",
    primary: "careers@atc-trans.com",
    secondary: "We respond within",
    tertiary: "24 hours",
    action: { label: "Send Email", href: "mailto:careers@atc-trans.com" },
  },
];

export function ContactRecruiting() {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] font-[family-name:var(--font-outfit)]">
            Have Questions? Talk to Our Recruiting Team
          </h2>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              className="bg-[#f8f9fa] rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <option.icon className="w-12 h-12 text-[#ff4433] mx-auto mb-5" />
              <h3 className="text-xl font-bold text-[#1a2332] mb-2 font-[family-name:var(--font-outfit)]">
                {option.title}
              </h3>
              <div className="w-10 h-0.5 bg-gray-300 mx-auto mb-4" />
              <p className="text-[#1a2332] font-medium text-lg mb-1">
                {option.primary}
              </p>
              <p className="text-[#1a2332]/60 text-sm">{option.secondary}</p>
              <p className="text-[#1a2332]/60 text-sm mb-5">{option.tertiary}</p>
              <Button
                className="bg-[#ff4433] hover:bg-[#e63d2e] text-white font-semibold group"
                asChild
              >
                <a href={option.action.href} className="flex items-center gap-2">
                  {option.action.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
