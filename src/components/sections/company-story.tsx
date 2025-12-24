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
    <section id="company-story" className="relative py-24 lg:py-32 bg-[#12121a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Left: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Since 2015
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mb-12 rounded-full" />

            {/* Timeline */}
            <div className="relative">
              {/* Animated Vertical Line */}
              <motion.div
                className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ originY: 0 }}
              />

              {/* Milestones */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    className="relative pl-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {/* Glowing Dot */}
                    <motion.div
                      className="absolute left-0 top-1 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#12121a] shadow-lg shadow-purple-500/50"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    />

                    {/* Content Card */}
                    <motion.div
                      className="glass rounded-xl p-5 hover:border-purple-500/30 transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-purple-400 font-bold text-lg">
                          {milestone.year}
                        </span>
                        <span className="text-white font-bold uppercase text-sm tracking-wide">
                          {milestone.title}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-[family-name:var(--font-outfit)]">
              Who We <span className="gradient-text">Are</span>
            </h3>

            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                ATC Family Transport isn&apos;t just a name—it&apos;s how we operate.
                Founded on the principle that every shipment matters, we&apos;ve
                built our business on trust, transparency, and dedication to
                excellence.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                What started as a small operation has grown into a nationwide
                heavy haul specialist, but we&apos;ve never forgotten our roots.
                Every member of our team, from dispatchers to drivers, treats
                your cargo with the same care we&apos;d give our own family&apos;s
                freight.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                We understand that when you trust us with your equipment and
                materials, you&apos;re trusting us with your livelihood. That&apos;s why
                we&apos;ve invested in the best equipment, hired experienced
                professionals, and built a reputation for delivering on our
                promises—every single time.
              </motion.p>
            </div>

            {/* Signature/Badge */}
            <motion.div
              className="mt-10 pt-8 border-t border-purple-500/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="gradient-text italic text-lg font-medium">
                &ldquo;Committed to excellence in heavy haul&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
