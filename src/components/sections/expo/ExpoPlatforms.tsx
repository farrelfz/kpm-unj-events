"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Lightbulb, FlaskConical, Cpu, Palette } from "lucide-react";

const platforms = [
  {
    icon: Lightbulb,
    title: "Inovasi & Prototipe",
    desc: "Karya inovatif mahasiswa yang menjawab kebutuhan masyarakat dan industri."
  },
  {
    icon: FlaskConical,
    title: "Penelitian Terapan",
    desc: "Hasil riset siap implementasi dengan dampak nyata di komunitas."
  },
  {
    icon: Cpu,
    title: "Teknologi & IoT",
    desc: "Prototipe berbasis teknologi: AI, IoT, dan otomasi."
  },
  {
    icon: Palette,
    title: "Karya Kreatif",
    desc: "Instalasi interaktif dan karya multimedia yang menggabungkan seni dan sains."
  }
];

export const ExpoPlatforms = () => {
  return (
    <AnimatedSection id="platforms" className="bg-white py-24">
      <div className="container px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold text-slate-900"
        >
          Platforms
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4"
        >
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={fadeInUp}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50">
                  <Icon className="h-7 w-7 text-sky-600" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
