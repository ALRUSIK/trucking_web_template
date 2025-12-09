"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2015",
    title: "Founded",
    description:
      "Started with 3 trucks and a vision to provide reliable heavy haul services",
  },
  {
    year: "2018",
    title: "Expansion",
    description:
      "Grew fleet to 25+ trucks, expanded to nationwide coverage across 48 states",
  },
  {
    year: "2021",
    title: "Milestone",
    description:
      "Reached 2M miles driven, 500+ satisfied clients, industry-leading safety record",
  },
  {
    year: "2024",
    title: "Today",
    description:
      "Leading heavy haul provider with modern fleet and expert team",
  },
];

export function CompanyStory() {
  return (
    <section id="company-story" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Left: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#ff4433]/10 text-[#ff4433] rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Since 2015
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 font-[family-name:var(--font-outfit)]">
              Our Journey
            </h2>
            <div className="w-20 h-1 bg-[#ff4433] mb-12" />

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[#ff4433]/20" />

              {/* Milestones */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    className="relative pl-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {/* Dot */}
                    <motion.div
                      className="absolute left-0 top-1 w-4 h-4 bg-[#ff4433] rounded-full border-4 border-white shadow-md"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.15 + 0.2,
                        type: "spring",
                      }}
                    />

                    {/* Content Card */}
                    <div className="bg-[#f8f9fa] rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#ff4433] font-bold text-lg">
                          {milestone.year}
                        </span>
                        <span className="text-[#1a2332] font-bold uppercase text-sm tracking-wide">
                          {milestone.title}
                        </span>
                      </div>
                      <p className="text-[#1a2332]/70 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-8 font-[family-name:var(--font-outfit)]">
              Who We Are
            </h3>

            <div className="space-y-6 text-lg text-[#1a2332]/70 leading-relaxed">
              <p>
                ATC Family Transport isn&apos;t just a name—it&apos;s how we operate.
                Founded on the principle that every shipment matters, we&apos;ve
                built our business on trust, transparency, and dedication to
                excellence.
              </p>

              <p>
                What started as a small operation has grown into a nationwide
                heavy haul specialist, but we&apos;ve never forgotten our roots.
                Every member of our team, from dispatchers to drivers, treats
                your cargo with the same care we&apos;d give our own family&apos;s
                freight.
              </p>

              <p>
                We understand that when you trust us with your equipment and
                materials, you&apos;re trusting us with your livelihood. That&apos;s why
                we&apos;ve invested in the best equipment, hired experienced
                professionals, and built a reputation for delivering on our
                promises—every single time.
              </p>
            </div>

            {/* Signature/Badge */}
            <motion.div
              className="mt-10 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-[#ff4433] italic text-lg font-medium">
                &ldquo;Committed to excellence in heavy haul&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
