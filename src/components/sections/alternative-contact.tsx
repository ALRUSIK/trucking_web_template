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
    <section className="py-20 lg:py-24 bg-[#12121a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

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
            Other Ways to <span className="gradient-text">Reach Us</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="glass border border-purple-500/20 rounded-xl p-8 text-center card-hover group"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <method.icon className="w-12 h-12 text-purple-400 group-hover:text-purple-300 mx-auto mb-5 transition-colors" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-outfit)]">
                {method.title}
              </h3>
              <div className="w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-3" />
              <p className="text-white/70 mb-5">{method.description}</p>

              {method.isLink ? (
                <Link
                  href={method.action.href}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold hover:gap-3 transition-all"
                >
                  {method.action.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <a
                  href={method.action.href}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold hover:gap-3 transition-all"
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
