"use client";

import { motion } from "framer-motion";
import { importantDatesData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { useLanguage } from "@/i18n/language";

export const ImportantDates = () => {
  const { language } = useLanguage();
  return (
    <AnimatedSection id="important-dates" className="bg-slate-900 py-24 text-white">
      <div className="container px-6">
        <SectionHeader
          title={language === "id" ? "Jadwal Penting" : "Important Dates"}
          subtitle={
            language === "id"
              ? "Jadwal penting CASTLE 2026 dari call for abstract hingga pengumpulan full paper."
              : "Key milestones of CASTLE 2026, from abstract submission to full paper deadline."
          }
        />

        <div className="grid gap-4 md:grid-cols-5">
          {importantDatesData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-4"
            >
              <p className="mb-1 text-xs uppercase tracking-widest text-cyan-300">
                {language === "id" ? "Tahapan" : "Milestone"}
              </p>
              <h3 className="mb-2 text-lg font-bold text-white">{item.date}</h3>
              <p className="text-sm text-slate-300">{item.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
