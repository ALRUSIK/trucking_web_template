"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle, Shield, Clock, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const states = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const experienceOptions = [
  { value: "", label: "Select Experience" },
  { value: "less-1", label: "Less than 1 year" },
  { value: "1-2", label: "1-2 years" },
  { value: "2-5", label: "2-5 years" },
  { value: "5-10", label: "5-10 years" },
  { value: "10+", label: "10+ years" },
];

const trustSignals = [
  { icon: Shield, text: "Your info is secure" },
  { icon: Clock, text: "Takes only 2 minutes" },
  { icon: Phone, text: "We call within 24hrs" },
];

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    cdlState: "",
    yearsExperience: "",
    certifyAccurate: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-4 input-dark rounded-xl text-white text-base focus-ring";

  if (isSubmitted) {
    return (
      <section id="application-form" className="relative py-24 lg:py-28 bg-[#0a0a0f] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 60%)",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="max-w-xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass rounded-3xl p-10 border border-green-500/20">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
                Application Submitted!
              </h2>
              <p className="text-white/70 mb-6">
                Thank you for your interest in joining ATC Family Transport.
              </p>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-8">
                <p className="text-green-400 font-medium">
                  Our recruiting team will call you within <strong>24 hours</strong>.
                </p>
              </div>
              <Button
                onClick={() => window.location.reload()}
                className="btn-gradient btn-shine text-white px-8 py-3"
              >
                Return to Careers Page
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="application-form" className="relative py-24 lg:py-28 bg-[#12121a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Left side - Benefits */}
            <motion.div
              className="lg:col-span-2 lg:sticky lg:top-32"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Quick Application
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
                Start Your <span className="gradient-text">New Career</span> Today
              </h2>

              <p className="text-white/60 mb-8">
                Fill out this quick form and our recruiting team will contact you within 24 hours to discuss opportunities.
              </p>

              {/* Trust signals */}
              <div className="space-y-4 mb-8">
                {trustSignals.map((signal) => (
                  <div key={signal.text} className="flex items-center gap-3 text-white/70">
                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                      <signal.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span>{signal.text}</span>
                  </div>
                ))}
              </div>

              {/* Call option */}
              <div className="glass rounded-xl p-5 border border-purple-500/20">
                <p className="text-white/60 text-sm mb-2">Prefer to talk?</p>
                <a
                  href="tel:+12248011105"
                  className="text-xl font-bold text-white hover:text-purple-400 transition-colors"
                >
                  (224) 801-1105
                </a>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-purple-500/10">
                <div className="space-y-5">
                  {/* Name */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 font-medium mb-2 text-sm">
                        First Name <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 font-medium mb-2 text-sm">
                        Last Name <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 font-medium mb-2 text-sm">
                        Phone Number <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 font-medium mb-2 text-sm">
                        Email Address <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="john@email.com"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 font-medium mb-2 text-sm">
                        City, State <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Chicago, IL"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 font-medium mb-2 text-sm">
                        CDL State <span className="text-orange-400">*</span>
                      </label>
                      <select
                        name="cdlState"
                        value={formData.cdlState}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-white/80 font-medium mb-2 text-sm">
                      Years of OTR Experience <span className="text-orange-400">*</span>
                    </label>
                    <select
                      name="yearsExperience"
                      value={formData.yearsExperience}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      {experienceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Certification */}
                  <div className="bg-purple-500/5 border border-purple-500/10 rounded-xl p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="certifyAccurate"
                        checked={formData.certifyAccurate}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 accent-purple-500 mt-0.5 rounded"
                      />
                      <span className="text-white/70 text-sm">
                        I certify that all information is accurate and I consent to be contacted about employment opportunities.{" "}
                        <span className="text-orange-400">*</span>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.certifyAccurate}
                    className="w-full btn-gradient btn-shine text-white py-6 text-lg font-bold shadow-xl hover:shadow-orange-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-center text-xs text-white/40">
                    Your information is confidential. We comply with all EEOC and privacy regulations.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
