"use client";

import { motion } from "framer-motion";
import { officialPartnersData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { useLanguage } from "@/i18n/language";

export const Sponsorship = () => {
  const { language } = useLanguage();
  return (
    <AnimatedSection id="sponsorship" className="bg-slate-50 py-24">
      <div className="container px-6">
        <SectionHeader
          title={language === "id" ? "Sponsorship & Mitra Resmi" : "Sponsorship & Official Partners"}
          subtitle={
            language === "id"
              ? "Mitra resmi pendukung penyelenggaraan konferensi, publikasi, dan penguatan jejaring riset CASTLE 2026."
              : "Official collaborators supporting CASTLE 2026 conference delivery, publication pathways, and research networking."
          }
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {officialPartnersData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex min-h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-center text-sm font-semibold text-slate-700"
            >
              <div>
                <p>{item.name}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
