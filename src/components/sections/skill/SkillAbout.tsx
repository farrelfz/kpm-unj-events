"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { useLanguage } from "@/i18n/language";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const SkillAbout = () => {
  const { language } = useLanguage();
  const copy =
    language === "id"
      ? {
          title: "Tentang SKILL 2026",
          body: "SKILL (Seminar Keilmuan dan Hasil Penelitian) adalah forum akademik tahunan KPM UNJ yang memberikan ruang bagi mahasiswa untuk mempresentasikan hasil riset, berdiskusi dengan pembina ahli, dan mempersiapkan naskah untuk publikasi ilmiah. Seminar ini menghubungkan peneliti muda lintas prodi untuk memperkaya perspektif dan meningkatkan kualitas riset.",
          points: [
            "Presentasi hasil penelitian mahasiswa terkurasi",
            "Diskusi panel lintas bidang keilmuan",
            "Mentoring publikasi ilmiah"
          ]
        }
      : {
          title: "About SKILL 2026",
          body: "SKILL is the annual academic seminar of KPM UNJ, providing a platform for students to present research findings, engage with expert mentors, and prepare manuscripts for scientific publication.",
          points: [
            "Curated student research presentations",
            "Cross-disciplinary panel discussions",
            "Scientific publication mentoring"
          ]
        };

  return (
    <AnimatedSection id="about" className="bg-section py-24">
      <div className="container px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="mb-6 text-4xl font-bold text-slate-900"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {copy.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-8 text-lg leading-relaxed text-slate-600">
            {copy.body}
          </motion.p>
          <motion.ul variants={fadeInUp} className="space-y-3">
            {copy.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-slate-700">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#b45309" }} />
                {point}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
