"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/variants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Mail, Instagram, MapPin } from "lucide-react";

export const SkillContact = () => {
  return (
    <AnimatedSection id="contact" className="bg-slate-900 py-24">
      <div className="container px-6 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Hubungi Kami
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-slate-400"
        >
          Ada pertanyaan tentang SKILL 2026? Jangan ragu untuk menghubungi panitia.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto flex max-w-md flex-col gap-4"
        >
          <a
            href="mailto:castle.kpm@unj.ac.id"
            className="flex items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-6 py-4 text-white transition-colors hover:bg-slate-700"
          >
            <Mail className="h-5 w-5" /> castle.kpm@unj.ac.id
          </a>
          <a
            href="https://instagram.com/castle.kpmunj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-6 py-4 text-white transition-colors hover:bg-slate-700"
          >
            <Instagram className="h-5 w-5" /> @castle.kpmunj
          </a>
          <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-6 py-4 text-white">
            <MapPin className="h-5 w-5" /> Kampus A UNJ, Jakarta
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
