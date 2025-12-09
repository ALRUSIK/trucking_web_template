"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";
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

const flatbedExpOptions = [
  { value: "", label: "Select Experience" },
  { value: "none", label: "None" },
  { value: "less-1", label: "Less than 1 year" },
  { value: "1-3", label: "1-3 years" },
  { value: "3+", label: "3+ years" },
];

const freightOptions = [
  { value: "", label: "Select Preference" },
  { value: "flatbed", label: "Flatbed" },
  { value: "step-deck", label: "Step Deck" },
  { value: "rgn-lowboy", label: "RGN/Lowboy" },
  { value: "any", label: "Any/All" },
  { value: "not-sure", label: "Not Sure" },
];

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    zipCode: "",
    cdlNumber: "",
    cdlState: "",
    yearsExperience: "",
    cdlObtainedDate: "",
    flatbedExperience: "",
    hasHazmat: false,
    hasTanker: false,
    hasDoubles: false,
    violations: "",
    hasAccidents: "",
    hasSuspensions: "",
    suspensionExplanation: "",
    currentEmployer: "",
    position: "",
    duration: "",
    canContactEmployer: "",
    reasonForLeaving: "",
    freightPreference: "",
    homeTimePreference: "",
    canStartWithin30Days: "",
    additionalComments: "",
    certifyAccurate: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    "w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-[#1a2332] focus:outline-none focus:border-[#ff4433] transition-colors";
  const labelClass = "block text-[#1a2332] font-medium mb-2 text-sm";
  const sectionHeaderClass =
    "bg-[#1a2332] text-white px-5 py-3 font-bold rounded-t-xl";

  if (isSubmitted) {
    return (
      <section id="application-form" className="py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center bg-[#f8f9fa] rounded-2xl p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
              Application Submitted Successfully!
            </h2>
            <p className="text-[#1a2332]/70 mb-6">
              Thank you for your interest in joining ATC Family Transport.
            </p>
            <p className="text-[#1a2332]/70 mb-8">
              Our recruiting team will review your application and contact you
              within <strong>24-48 hours</strong>.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-[#ff4433] hover:bg-[#e63d2e] text-white"
            >
              Return to Careers Page
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="application-form" className="py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
            Ready to Join Our Team?
          </h2>
          <div className="w-20 h-1 bg-[#ff4433] mx-auto" />
        </motion.div>

        {/* Application Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Personal Information */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className={sectionHeaderClass}>Personal Information</div>
            <div className="p-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    First Name <span className="text-[#ff4433]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Last Name <span className="text-[#ff4433]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    Phone Number <span className="text-[#ff4433]">*</span>
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
                  <label className={labelClass}>
                    Email Address <span className="text-[#ff4433]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    City, State <span className="text-[#ff4433]">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    ZIP Code <span className="text-[#ff4433]">*</span>
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CDL & Experience */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className={sectionHeaderClass}>CDL & Experience</div>
            <div className="p-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    CDL License Number <span className="text-[#ff4433]">*</span>
                  </label>
                  <input
                    type="text"
                    name="cdlNumber"
                    value={formData.cdlNumber}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    CDL State <span className="text-[#ff4433]">*</span>
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
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    Years of OTR Experience <span className="text-[#ff4433]">*</span>
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
                <div>
                  <label className={labelClass}>
                    Flatbed/Heavy Haul Experience
                  </label>
                  <select
                    name="flatbedExperience"
                    value={formData.flatbedExperience}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {flatbedExpOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>Endorsements</label>
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasHazmat"
                      checked={formData.hasHazmat}
                      onChange={handleChange}
                      className="w-5 h-5 accent-[#ff4433]"
                    />
                    <span className="text-[#1a2332]">Hazmat</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasTanker"
                      checked={formData.hasTanker}
                      onChange={handleChange}
                      className="w-5 h-5 accent-[#ff4433]"
                    />
                    <span className="text-[#1a2332]">Tanker</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasDoubles"
                      checked={formData.hasDoubles}
                      onChange={handleChange}
                      className="w-5 h-5 accent-[#ff4433]"
                    />
                    <span className="text-[#1a2332]">Doubles/Triples</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Driving Record */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className={sectionHeaderClass}>Driving Record</div>
            <div className="p-6 space-y-5">
              <div>
                <label className={labelClass}>
                  Moving violations in past 3 years <span className="text-[#ff4433]">*</span>
                </label>
                <select
                  name="violations"
                  value={formData.violations}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3+">3+</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    Any accidents in past 3 years? <span className="text-[#ff4433]">*</span>
                  </label>
                  <div className="flex gap-6 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasAccidents"
                        value="yes"
                        checked={formData.hasAccidents === "yes"}
                        onChange={handleChange}
                        className="w-5 h-5 accent-[#ff4433]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasAccidents"
                        value="no"
                        checked={formData.hasAccidents === "no"}
                        onChange={handleChange}
                        className="w-5 h-5 accent-[#ff4433]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>
                    Any license suspensions? <span className="text-[#ff4433]">*</span>
                  </label>
                  <div className="flex gap-6 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasSuspensions"
                        value="yes"
                        checked={formData.hasSuspensions === "yes"}
                        onChange={handleChange}
                        className="w-5 h-5 accent-[#ff4433]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasSuspensions"
                        value="no"
                        checked={formData.hasSuspensions === "no"}
                        onChange={handleChange}
                        className="w-5 h-5 accent-[#ff4433]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
              {formData.hasSuspensions === "yes" && (
                <div>
                  <label className={labelClass}>Please explain:</label>
                  <textarea
                    name="suspensionExplanation"
                    value={formData.suspensionExplanation}
                    onChange={handleChange}
                    rows={2}
                    className={inputClass}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Previous Employment */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className={sectionHeaderClass}>Previous Employment</div>
            <div className="p-6 space-y-5">
              <div>
                <label className={labelClass}>
                  Current/Most Recent Employer <span className="text-[#ff4433]">*</span>
                </label>
                <input
                  type="text"
                  name="currentEmployer"
                  value={formData.currentEmployer}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Position</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Duration</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="MM/YYYY - MM/YYYY"
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>
                  May we contact this employer? <span className="text-[#ff4433]">*</span>
                </label>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="canContactEmployer"
                      value="yes"
                      checked={formData.canContactEmployer === "yes"}
                      onChange={handleChange}
                      className="w-5 h-5 accent-[#ff4433]"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="canContactEmployer"
                      value="no"
                      checked={formData.canContactEmployer === "no"}
                      onChange={handleChange}
                      className="w-5 h-5 accent-[#ff4433]"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
              <div>
                <label className={labelClass}>Reason for leaving</label>
                <textarea
                  name="reasonForLeaving"
                  value={formData.reasonForLeaving}
                  onChange={handleChange}
                  rows={2}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className={sectionHeaderClass}>Additional Information</div>
            <div className="p-6 space-y-5">
              <div>
                <label className={labelClass}>
                  What type of freight interests you most? <span className="text-[#ff4433]">*</span>
                </label>
                <select
                  name="freightPreference"
                  value={formData.freightPreference}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  {freightOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>
                  Home time preference <span className="text-[#ff4433]">*</span>
                </label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="homeTimePreference"
                      value="weekly"
                      checked={formData.homeTimePreference === "weekly"}
                      onChange={handleChange}
                      className="w-5 h-5 accent-[#ff4433]"
                    />
                    <span>Weekly</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="homeTimePreference"
                      value="bi-weekly"
                      checked={formData.homeTimePreference === "bi-weekly"}
                      onChange={handleChange}
                      className="w-5 h-5 accent-[#ff4433]"
                    />
                    <span>Bi-weekly</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="homeTimePreference"
                      value="other"
                      checked={formData.homeTimePreference === "other"}
                      onChange={handleChange}
                      className="w-5 h-5 accent-[#ff4433]"
                    />
                    <span>Other</span>
                  </label>
                </div>
              </div>
              <div>
                <label className={labelClass}>
                  Are you available to start within 30 days? <span className="text-[#ff4433]">*</span>
                </label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="canStartWithin30Days"
                      value="yes"
                      checked={formData.canStartWithin30Days === "yes"}
                      onChange={handleChange}
                      className="w-5 h-5 accent-[#ff4433]"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="canStartWithin30Days"
                      value="no"
                      checked={formData.canStartWithin30Days === "no"}
                      onChange={handleChange}
                      className="w-5 h-5 accent-[#ff4433]"
                    />
                    <span>No</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="canStartWithin30Days"
                      value="discuss"
                      checked={formData.canStartWithin30Days === "discuss"}
                      onChange={handleChange}
                      className="w-5 h-5 accent-[#ff4433]"
                    />
                    <span>Need to discuss</span>
                  </label>
                </div>
              </div>
              <div>
                <label className={labelClass}>Additional comments or questions</label>
                <textarea
                  name="additionalComments"
                  value={formData.additionalComments}
                  onChange={handleChange}
                  rows={3}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="bg-[#f8f9fa] rounded-xl p-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="certifyAccurate"
                checked={formData.certifyAccurate}
                onChange={handleChange}
                required
                className="w-5 h-5 accent-[#ff4433] mt-0.5"
              />
              <span className="text-[#1a2332] text-sm">
                I certify that all information is accurate and complete to the
                best of my knowledge. <span className="text-[#ff4433]">*</span>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || !formData.certifyAccurate}
            className="w-full bg-[#ff4433] hover:bg-[#e63d2e] text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
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
          <p className="text-center text-sm text-[#1a2332]/50 italic">
            Your information is confidential and will only be used for employment
            purposes. We comply with all EEOC and privacy regulations.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
