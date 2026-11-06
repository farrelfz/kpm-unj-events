"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, fadeInUp } from "@/lib/variants";
import { useLanguage } from "@/i18n/language";

export const SkillHero = () => {
  const { language } = useLanguage();
  const copy =
    language === "id"
      ? {
          badge: "SKILL 2026 · Seminar Keilmuan",
          title: "Seminar Keilmuan dan Hasil Penelitian",
          subtitle:
            "Ajang presentasi hasil penelitian terbaik mahasiswa KPM UNJ, menghadirkan diskusi akademik lintas bidang dan peluang publikasi.",
          cta: "Daftar Sekarang"
        }
      : {
          badge: "SKILL 2026 · Academic Seminar",
          title: "Scientific Seminar & Research Showcase",
          subtitle:
            "A platform for the best student research from KPM UNJ, featuring cross-disciplinary academic discussion and publication opportunities.",
          cta: "Register Now"
        };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 30%, #ffffff 100%)" }}
    >
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-amber-300 opacity-20 mix-blend-multiply blur-3xl" />
      <div
        className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-float rounded-full bg-orange-300 opacity-20 mix-blend-multiply blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="mb-6" style={{ backgroundColor: "#fde68a", color: "#92400e" }}>
              {copy.badge}
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {copy.title}
          </motion.h1>

          <motion.p variants={fadeInUp} className="mb-10 max-w-2xl text-lg text-slate-600 md:text-xl">
            {copy.subtitle}
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href="#registration"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-colors"
            style={{ backgroundColor: "#b45309" }}
          >
            {copy.cta}
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
};
