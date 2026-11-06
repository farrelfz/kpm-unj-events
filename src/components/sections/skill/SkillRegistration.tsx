"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/i18n/language";

export const SkillRegistration = () => {
  const { language } = useLanguage();
  const copy =
    language === "id"
      ? { title: "Pendaftaran", desc: "Daftar sebagai peserta atau presenter SKILL 2026.", cta: "Daftar via Google Form" }
      : { title: "Registration", desc: "Register as participant or presenter for SKILL 2026.", cta: "Register via Google Form" };

  return (
    <AnimatedSection id="registration" className="bg-section py-24">
      <div className="container px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="mb-6 text-4xl font-bold text-slate-900"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {copy.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-8 text-lg text-slate-600">
            {copy.desc}
          </motion.p>
          <motion.a
            variants={fadeInUp}
            href="https://docs.google.com/forms/d/e/1FAIpQLScqRiktt5jsENc5pPTQ9DQu8Id-3bq5mSCtQRD8NSwom6I1XQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-colors"
            style={{ backgroundColor: "#b45309" }}
          >
            {copy.cta}
          </motion.a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
