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
    <section className="py-20 lg:py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-outfit)]">
            Have Questions? Talk to Our <span className="gradient-text">Recruiting Team</span>
          </h2>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              className="glass border border-purple-500/20 rounded-xl p-8 text-center group card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, borderColor: "rgba(139, 92, 246, 0.4)" }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/10 rounded-2xl mb-5 group-hover:from-purple-500 group-hover:to-violet-600 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <option.icon className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-outfit)]">
                {option.title}
              </h3>
              <div className="w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-4" />
              <p className="text-white font-medium text-lg mb-1">
                {option.primary}
              </p>
              <p className="text-white/70 text-sm">{option.secondary}</p>
              <p className="text-white/70 text-sm mb-5">{option.tertiary}</p>
              <Button
                className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold group/btn shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30"
                asChild
              >
                <a href={option.action.href} className="flex items-center gap-2">
                  {option.action.label}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
