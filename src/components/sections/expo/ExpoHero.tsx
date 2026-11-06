"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, fadeInUp } from "@/lib/variants";

export const ExpoHero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 30%, #ffffff 100%)" }}
    >
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-sky-300 opacity-20 mix-blend-multiply blur-3xl" />
      <div
        className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-float rounded-full bg-blue-300 opacity-20 mix-blend-multiply blur-3xl"
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
            <Badge className="mb-6" style={{ backgroundColor: "#bae6fd", color: "#0369a1" }}>
              KPM EXPO 26.0 · Pameran Karya Mahasiswa
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-7xl"
          >
            KPM EXPO UNJ 2026
          </motion.h1>

          <motion.p variants={fadeInUp} className="mb-10 max-w-2xl text-lg text-slate-600 md:text-xl">
            Pameran apik karya dan inovasi mahasiswa KPM UNJ — dari prototipe, penelitian terapan,
            hingga instalasi interaktif.
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href="#platforms"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-colors"
            style={{ backgroundColor: "#0284c7" }}
          >
            Daftar Sekarang
          </motion.a>
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
