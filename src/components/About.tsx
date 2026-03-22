"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 sm:py-40 bg-navy-light"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section heading */}
        <motion.div {...fadeInUp} className="mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Get to Know Me
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-cream tracking-tight">
            {ABOUT.heading}
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text column */}
          <div className="space-y-6">
            {ABOUT.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="text-text-light leading-relaxed text-base sm:text-lg"
                style={{ lineHeight: "1.75" }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Highlight stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mt-10 pt-8 border-t border-white/10"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-heading text-5xl sm:text-6xl text-gold">
                  {ABOUT.highlightStat.value}
                </span>
                <span className="text-text-muted text-sm sm:text-base tracking-wide">
                  {ABOUT.highlightStat.label}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-full aspect-[4/5] bg-navy-lighter rounded-2xl border border-white/5 flex flex-col items-center justify-center">
              <svg
                className="w-14 h-14 text-text-muted/40 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                />
              </svg>
              <span className="text-text-muted/50 text-sm tracking-wide">
                Photo
              </span>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-gold/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
