"use client";

import { motion } from "framer-motion";
import { timelineData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";

export const Timeline = () => {
  return (
    <AnimatedSection id="timeline" className="bg-white py-24">
      <div className="container px-6">
        <SectionHeader
          title="Timeline Kegiatan"
          subtitle="Rangkaian agenda CASTLE sepanjang tahun untuk membangun budaya riset yang konsisten."
        />

        <div className="mx-auto max-w-4xl">
          {timelineData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative border-l-2 border-blue-200 pl-8"
            >
              <span className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-primary" />
              <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="text-sm font-semibold text-primary">{item.date}</span>
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                    {item.type}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
