"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const schedule = [
  { time: "08:00 - 09:00", title: "Registrasi & Coffee Morning", type: "Registrasi" },
  { time: "09:00 - 09:30", title: "Opening Ceremony", type: "Ceremony" },
  { time: "09:30 - 10:30", title: "Keynote Session — Dr. Fajar Prasetyo", type: "Keynote" },
  { time: "10:30 - 12:00", title: "Panel Discussion — Cross-Disciplinary Research", type: "Panel" },
  { time: "12:00 - 13:00", title: "Ishoma (Istirahat, Sholat, Makan)", type: "Break" },
  { time: "13:00 - 15:00", title: "Student Research Presentations (Parallel)", type: "Presentation" },
  { time: "15:00 - 16:00", title: "Awarding & Closing", type: "Ceremony" }
];

const typeColors: Record<string, string> = {
  Keynote: "#b45309",
  Panel: "#d97706",
  Presentation: "#92400e",
  Ceremony: "#6b7280",
  Break: "#a8a29e",
  Registrasi: "#78716c"
};

export const SkillSchedule = () => {
  return (
    <AnimatedSection id="schedule" className="bg-section py-24">
      <div className="container px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold text-slate-900"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Agenda
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-4"
        >
          {schedule.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="flex items-center gap-6 rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="w-32 shrink-0 text-sm font-medium text-slate-500">{item.time}</div>
              <div className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: typeColors[item.type] }} />
              <div className="flex-1">
                <p className="font-medium text-slate-900">{item.title}</p>
              </div>
              <span className="hidden text-xs font-medium text-slate-400 sm:block">{item.type}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
