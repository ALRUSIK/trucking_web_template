"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    cdlType: "",
    yearsExperience: "",
    homeZip: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to thank you page
    router.push("/landing/thank-you");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="apply-form" className="py-20 lg:py-24 bg-[#12121a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
              Apply Now - <span className="gradient-text">Takes 3 Minutes</span>
            </h2>
            <p className="text-xl text-white/70 mb-6">
              Fill out the form below and we'll contact you within 24 hours
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">No application fee</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Quick approval</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Your info is secure</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="glass border border-purple-500/20 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-white font-semibold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#16161f] border-2 border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-white/40"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white font-semibold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#16161f] border-2 border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-white/40"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#16161f] border-2 border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-white/40"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#16161f] border-2 border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-white/40"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* CDL & Experience */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cdlType" className="block text-white font-semibold mb-2">
                    CDL Class *
                  </label>
                  <select
                    id="cdlType"
                    name="cdlType"
                    required
                    value={formData.cdlType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#16161f] border-2 border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  >
                    <option value="">Select CDL Class</option>
                    <option value="A">Class A</option>
                    <option value="B">Class B</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="yearsExperience" className="block text-white font-semibold mb-2">
                    Years of OTR Experience *
                  </label>
                  <select
                    id="yearsExperience"
                    name="yearsExperience"
                    required
                    value={formData.yearsExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#16161f] border-2 border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              </div>

              {/* Home ZIP */}
              <div>
                <label htmlFor="homeZip" className="block text-white font-semibold mb-2">
                  Home ZIP Code *
                </label>
                <input
                  type="text"
                  id="homeZip"
                  name="homeZip"
                  required
                  value={formData.homeZip}
                  onChange={handleChange}
                  maxLength={5}
                  className="w-full px-4 py-3 bg-[#16161f] border-2 border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-white/40"
                  placeholder="60601"
                />
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl font-bold rounded-xl shadow-2xl shadow-orange-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application Now"}
                </Button>
              </motion.div>

              <p className="text-center text-white/60 text-sm">
                By submitting, you agree to be contacted by ATC Family Transport regarding employment opportunities.
              </p>
            </form>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-white/70 mb-4">Prefer to talk? Contact our recruiting team:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+12248011105" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(224) 801-1105</span>
              </a>
              <a href="mailto:careers@atc-trans.com" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">careers@atc-trans.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
