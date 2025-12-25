"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Home, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-8 shadow-2xl shadow-green-500/50"
          >
            <CheckCircle className="w-14 h-14 text-white" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Application <span className="gradient-text">Submitted!</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Thank you for your interest in joining ATC Family Transport!
          </motion.p>

          {/* What's Next Section */}
          <motion.div
            className="glass border border-purple-500/20 rounded-2xl p-8 md:p-10 mb-10 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)]">
              What Happens Next?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">We'll Review Your Application</h3>
                  <p className="text-white/70 text-sm">Our recruiting team will carefully review your application within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">You'll Get a Call</h3>
                  <p className="text-white/70 text-sm">A recruiter will contact you to discuss the position and answer your questions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Quick Interview Process</h3>
                  <p className="text-white/70 text-sm">We'll schedule a phone or in-person interview at your convenience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Start Driving!</h3>
                  <p className="text-white/70 text-sm">Complete onboarding and hit the road with ATC.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-white/70 mb-4">Have questions in the meantime?</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:+12248011105"
                className="flex items-center gap-2 glass border border-purple-500/20 px-6 py-3 rounded-lg hover:border-purple-500/40 transition-all group"
              >
                <Phone className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-white font-semibold">(224) 801-1105</span>
              </a>
              <a
                href="mailto:careers@atc-trans.com"
                className="flex items-center gap-2 glass border border-purple-500/20 px-6 py-3 rounded-lg hover:border-purple-500/40 transition-all group"
              >
                <Mail className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-white font-semibold">careers@atc-trans.com</span>
              </a>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white px-8 py-6 text-lg font-semibold shadow-xl shadow-purple-500/30 transition-all duration-300 group"
              asChild
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Explore Our Website
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            className="text-white/50 text-sm mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            We look forward to having you join the ATC family!
          </motion.p>
        </div>
      </div>
    </main>
  );
}
