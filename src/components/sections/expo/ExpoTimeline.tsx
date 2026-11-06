"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const timeline = [
  { date: "1 Maret 2026", title: "Open Registration", desc: "Pendaftaran peserta EXPO dibuka." },
  { date: "15 April 2026", title: "Deadline Submit Karya", desc: "Batas akhir pengiriman proposal karya." },
  { date: "1 Mei 2026", title: "Announcement", desc: "Pengumuman karya terpilih untuk pameran." },
  { date: "20-21 Mei 2026", title: "EXPO Day", desc: "Pelaksanaan pameran di Kampus A UNJ." }
];

export const ExpoTimeline = () => {
  return (
    <AnimatedSection id="timeline" className="bg-section py-24">
      <div className="container px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold text-slate-900"
        >
          Timeline
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          {timeline.map((item, i) => (
            <motion.div key={item.title} variants={fadeInUp} className="relative flex gap-8 pb-12 last:pb-0">
              {/* Line */}
              {i < timeline.length - 1 && (
                <div className="absolute left-[19px] top-12 h-full w-px bg-slate-200" />
              )}
              {/* Dot */}
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-sky-200 bg-white">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#0284c7" }} />
              </div>
              {/* Content */}
              <div className="flex-1 pt-1">
                <p className="mb-1 text-sm font-medium text-sky-600">{item.date}</p>
                <h3 className="mb-1 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
