"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";

export const Testimonials = () => {
  return (
    <AnimatedSection id="testimonials" className="bg-slate-900 py-24 text-white">
      <div className="container px-6">
        <SectionHeader
          title="Cerita Mereka"
          subtitle="Apa kata anggota dan alumni tentang pengalaman berkembang bersama CASTLE KPM UNJ."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonialsData.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-6"
            >
              <p className="mb-4 text-slate-200">"{item.quote}"</p>
              <footer>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
