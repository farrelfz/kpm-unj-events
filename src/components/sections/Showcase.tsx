"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { showcaseData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";

const categories = ["Semua", "Karya Ilmiah", "Proyek Inovasi", "Artikel", "Penelitian"];

export const Showcase = () => {
  const [filter, setFilter] = useState("Semua");
  const filteredData =
    filter === "Semua" ? showcaseData : showcaseData.filter((item) => item.category === filter);

  return (
    <AnimatedSection id="showcase" className="bg-slate-50 py-24">
      <div className="container px-6">
        <SectionHeader
          title="Showcase Karya"
          subtitle="Eksplorasi inovasi terbaik dari anggota komunitas CASTLE KPM UNJ."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                filter === cat
                  ? "bg-primary text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                className={`glass group relative overflow-hidden rounded-2xl ${
                  item.featured ? "md:col-span-2" : ""
                }`}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="mb-2 text-sm font-semibold text-primary-light">{item.category}</span>
                  <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                  <p className="line-clamp-2 text-sm text-slate-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="outline">Lihat Semua Karya</Button>
        </div>
      </div>
    </AnimatedSection>
  );
};
