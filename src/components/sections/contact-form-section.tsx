"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  ArrowRight,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactCards = [
  {
    icon: Phone,
    title: "Call Our Dispatch Team",
    primary: "(224) 801-1105",
    secondary: "Available: 7 AM - 5 PM CST",
    tertiary: "Monday - Friday",
    action: { label: "Call Now", href: "tel:+12248011105" },
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "dispatch@atc-trans.com",
    secondary: "We respond within 2 hours",
    tertiary: null,
    action: { label: "Send Email", href: "mailto:dispatch@atc-trans.com" },
  },
  {
    icon: MapPin,
    title: "Our Office",
    primary: "225 N. Arlington Heights Rd",
    secondary: "Elk Grove Village, IL 60007",
    tertiary: "Office Hours: 7 AM - 5 PM CST",
    action: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=225+N+Arlington+Heights+Rd+Elk+Grove+Village+IL+60007",
    },
  },
];

const serviceTypes = [
  { value: "", label: "Select Service" },
  { value: "flatbed", label: "Flatbed" },
  { value: "step-deck", label: "Step Deck" },
  { value: "rgn-lowboy", label: "RGN/Lowboy" },
  { value: "not-sure", label: "Not Sure" },
];

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    pickupLocation: "",
    deliveryLocation: "",
    cargoDetails: "",
    pickupDate: "",
    additionalNotes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceType: "",
      pickupLocation: "",
      deliveryLocation: "",
      cargoDetails: "",
      pickupDate: "",
      additionalNotes: "",
    });
    setIsSubmitted(false);
  };

  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column: Contact Information */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
              Let&apos;s Talk About Your Shipment
            </h2>
            <div className="w-16 h-1 bg-[#ff4433] mb-10" />

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#ff4433] hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <card.icon className="w-10 h-10 text-[#ff4433] mb-4" />
                  <h3 className="text-lg font-bold text-[#1a2332] mb-2">
                    {card.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gray-200 mb-3" />
                  <p className="text-[#1a2332] font-medium">{card.primary}</p>
                  <p className="text-[#1a2332]/60 text-sm">{card.secondary}</p>
                  {card.tertiary && (
                    <p className="text-[#1a2332]/60 text-sm">{card.tertiary}</p>
                  )}
                  <a
                    href={card.action.href}
                    target={card.action.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-[#ff4433] font-semibold mt-4 hover:gap-3 transition-all"
                  >
                    {card.action.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#ff4433] rounded-xl flex items-center justify-center text-white hover:bg-[#e63d2e] hover:scale-110 hover:rotate-6 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#ff4433] rounded-xl flex items-center justify-center text-white hover:bg-[#e63d2e] hover:scale-110 hover:rotate-6 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Quote Request Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#f8f9fa] rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-8 font-[family-name:var(--font-outfit)]">
                Request a Quote
              </h3>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-[#1a2332] mb-3">
                    Thank You!
                  </h4>
                  <p className="text-[#1a2332]/70 mb-6">
                    We&apos;ll be in touch within 2 hours.
                  </p>
                  <Button
                    onClick={resetForm}
                    className="bg-[#ff4433] hover:bg-[#e63d2e] text-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name & Email */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#1a2332] font-medium mb-2 text-sm">
                        Your Name <span className="text-[#ff4433]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-[#1a2332] focus:outline-none focus:border-[#ff4433] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1a2332] font-medium mb-2 text-sm">
                        Email Address <span className="text-[#ff4433]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-[#1a2332] focus:outline-none focus:border-[#ff4433] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#1a2332] font-medium mb-2 text-sm">
                        Phone Number <span className="text-[#ff4433]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-[#1a2332] focus:outline-none focus:border-[#ff4433] transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1a2332] font-medium mb-2 text-sm">
                        Company Name{" "}
                        <span className="text-[#1a2332]/50">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-[#1a2332] focus:outline-none focus:border-[#ff4433] transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-[#1a2332] font-medium mb-2 text-sm">
                      Service Type <span className="text-[#ff4433]">*</span>
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-[#1a2332] focus:outline-none focus:border-[#ff4433] transition-colors appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ff4433' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        backgroundSize: "20px",
                      }}
                    >
                      {serviceTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 3: Pickup & Delivery */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#1a2332] font-medium mb-2 text-sm">
                        Pickup Location <span className="text-[#ff4433]">*</span>
                      </label>
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-[#1a2332] focus:outline-none focus:border-[#ff4433] transition-colors"
                        placeholder="City, State"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1a2332] font-medium mb-2 text-sm">
                        Delivery Location{" "}
                        <span className="text-[#ff4433]">*</span>
                      </label>
                      <input
                        type="text"
                        name="deliveryLocation"
                        value={formData.deliveryLocation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-[#1a2332] focus:outline-none focus:border-[#ff4433] transition-colors"
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  {/* Cargo Details */}
                  <div>
                    <label className="block text-[#1a2332] font-medium mb-2 text-sm">
                      Cargo Details <span className="text-[#ff4433]">*</span>
                    </label>
                    <textarea
                      name="cargoDetails"
                      value={formData.cargoDetails}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-[#1a2332] focus:outline-none focus:border-[#ff4433] transition-colors resize-y"
                      placeholder="Please describe: dimensions, weight, type of cargo"
                    />
                  </div>

                  {/* Pickup Date */}
                  <div>
                    <label className="block text-[#1a2332] font-medium mb-2 text-sm">
                      Preferred Pickup Date{" "}
                      <span className="text-[#1a2332]/50">(Optional)</span>
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-[#1a2332] focus:outline-none focus:border-[#ff4433] transition-colors"
                    />
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-[#1a2332] font-medium mb-2 text-sm">
                      Additional Notes{" "}
                      <span className="text-[#1a2332]/50">(Optional)</span>
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-[#1a2332] focus:outline-none focus:border-[#ff4433] transition-colors resize-y"
                      placeholder="Any special requirements or questions?"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ff4433] hover:bg-[#e63d2e] text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Your Quote
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-center text-sm text-[#1a2332]/50 italic">
                    We respect your privacy. Your information will only be used
                    to provide you with a quote.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
