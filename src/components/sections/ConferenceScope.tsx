"use client";

import { motion } from "framer-motion";
import { conferenceScopeData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { useLanguage } from "@/i18n/language";

export const ConferenceScope = () => {
  const { language } = useLanguage();
  return (
    <AnimatedSection id="scope" className="bg-slate-50 py-24">
      <div className="container px-6">
        <SectionHeader
          title={language === "id" ? "Cakupan Konferensi" : "Conference Scope"}
          subtitle={
            language === "id"
              ? "Lingkup CASTLE 2026 mencakup riset sosial, sains, teknologi, bahasa, dan pendidikan dengan orientasi dampak nyata."
              : "CASTLE 2026 covers social, science, technology, language, and education research with practical impact orientation."
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          {conferenceScopeData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
