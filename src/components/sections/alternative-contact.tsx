"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Truck, FileText, Headphones, ArrowRight } from "lucide-react";

const contactMethods = [
  {
    icon: Truck,
    title: "Driver Inquiries",
    description: "Interested in joining our team?",
    action: { label: "Apply to Drive", href: "/careers" },
    isLink: true,
  },
  {
    icon: FileText,
    title: "Billing & Accounting",
    description: "Questions about invoices or payments?",
    action: { label: "accounting@atc-trans.com", href: "mailto:accounting@atc-trans.com" },
    isLink: false,
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Need help with an existing shipment?",
    action: { label: "Call Support", href: "tel:+12248011105" },
    isLink: false,
  },
];

export function AlternativeContact() {
  return (
    <section className="py-20 lg:py-24 bg-[#1a2332]">
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
            Other Ways to Reach Us
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/15 hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <method.icon className="w-12 h-12 text-[#ff4433] mx-auto mb-5" />
              <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-outfit)]">
                {method.title}
              </h3>
              <div className="w-10 h-0.5 bg-white/30 mx-auto mb-3" />
              <p className="text-white/70 mb-5">{method.description}</p>

              {method.isLink ? (
                <Link
                  href={method.action.href}
                  className="inline-flex items-center gap-2 text-[#ff4433] font-semibold hover:gap-3 transition-all"
                >
                  {method.action.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <a
                  href={method.action.href}
                  className="inline-flex items-center gap-2 text-[#ff4433] font-semibold hover:gap-3 transition-all"
                >
                  {method.action.label}
                  {method.action.label === "Call Support" && (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
