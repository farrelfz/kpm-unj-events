"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const galleryItems = [
  { id: 1, title: "Sistem Peringatan Dini Banjir IoT", category: "Prototipe", color: "#0284c7" },
  { id: 2, title: "Analisis Sentimen Kebijakan Kampus", category: "Data Science", color: "#0369a1" },
  { id: 3, title: "Aplikasi Aksara Nusantara", category: "Mobile", color: "#7c3aed" },
  { id: 4, title: "Ekonomi Sirkular Kampus", category: "Penelitian", color: "#059669" },
  { id: 5, title: "Optimasi Neural Network", category: "AI", color: "#d97706" },
  { id: 6, title: "Instalasi Seni Interaktif", category: "Kreatif", color: "#dc2626" }
];

export const ExpoGallery = () => {
  return (
    <AnimatedSection id="gallery" className="bg-white py-24">
      <div className="container px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold text-slate-900"
        >
          Gallery
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              style={{ background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span
                  className="mb-3 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: `${item.color}22`, color: item.color }}
                >
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
