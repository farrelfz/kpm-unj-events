"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { staggerContainer, fadeInUp } from "@/lib/variants";
import { useLanguage } from "@/i18n/language";

export const Hero = () => {
  const { language } = useLanguage();
  const copy =
    language === "id"
      ? {
          title: "Submit Abstrak CASTLE 2026",
          subtitle:
            "Conference on Social, Science, Technology, Language, and Education Research. Tema CASTLE 2026: From Research Insight to Social Impact.",
          description:
            "Presentasikan riset terbaikmu, perluas jejaring ilmiah, dan siapkan naskah untuk publikasi melalui forum CASTLE ke-6.",
          ctaPrimary: "Submit Abstrak",
          ctaSecondary: "Panduan Konferensi"
        }
      : {
          title: "Submit Abstract for CASTLE 2026",
          subtitle:
            "Conference on Social, Science, Technology, Language, and Education Research. CASTLE 2026 Theme: From Research Insight to Social Impact.",
          description:
            "Present your best research, expand your academic network, and prepare your manuscript for publication at the 6th CASTLE conference.",
          ctaPrimary: "Submit Abstract",
          ctaSecondary: "Conference Guide"
        };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-blue-300 opacity-30 mix-blend-multiply blur-3xl" />
      <div
        className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-float rounded-full bg-indigo-300 opacity-30 mix-blend-multiply blur-3xl"
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
            <Badge className="mb-6">CASTLE 6th Conference - 2026</Badge>
          </motion.div>

          <motion.h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
            {copy.title.split(" ").map((word, i) => (
              <motion.span key={i} variants={fadeInUp} className="mr-3 inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={fadeInUp} className="mb-10 max-w-2xl text-lg text-slate-600 md:text-xl">
            {copy.subtitle}
          </motion.p>

          <motion.p variants={fadeInUp} className="mb-10 max-w-3xl text-base text-slate-600 md:text-lg">
            {copy.description}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row">
            <Button variant="primary">{copy.ctaPrimary}</Button>
            <Button variant="outline">{copy.ctaSecondary}</Button>
          </motion.div>
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
