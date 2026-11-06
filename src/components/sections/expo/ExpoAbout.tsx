"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const ExpoAbout = () => {
  return (
    <AnimatedSection id="about" className="bg-section py-24">
      <div className="container px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="mb-6 text-4xl font-bold text-slate-900"
          >
            About EXPO
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-8 text-lg leading-relaxed text-slate-600">
            KPM EXPO UNJ adalah pameran tahunan karya dan inovasi mahasiswa Kelompok Peminat UNJ.
            Acara ini menjadi panggung bagi mahasiswa untuk menunjukkan hasil penelitian, prototipe,
            dan karya kreatif mereka kepada publik kampus dan masyarakat luas.
          </motion.p>
          <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-sky-600">120+</p>
              <p className="text-sm text-slate-500">Karya Dipamerkan</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-sky-600">26.0</p>
              <p className="text-sm text-slate-500">Edisi EXPO</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-sky-600">5</p>
              <p className="text-sm text-slate-500">Divisi Partisipan</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
