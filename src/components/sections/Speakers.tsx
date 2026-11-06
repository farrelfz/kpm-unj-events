"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { speakersData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";

export const Speakers = () => {
  return (
    <AnimatedSection id="speakers" className="bg-slate-100 py-24">
      <div className="container px-6">
        <SectionHeader
          title="Speakers & Mentors"
          subtitle="Pembicara CASTLE 2026 menghadirkan perspektif metodologi, strategi publikasi, dan praktik riset terapan lintas disiplin."
        />

        <div className="mb-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Peran Utama</p>
            <p className="mt-2 text-sm text-slate-600">
              Keynote speaker membahas tren riset mutakhir yang relevan bagi mahasiswa.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Sesi Panel</p>
            <p className="mt-2 text-sm text-slate-600">
              Panel speaker mengulas studi kasus implementasi riset di bidang sosial hingga pendidikan.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Klinik Naskah</p>
            <p className="mt-2 text-sm text-slate-600">
              Mentor memberikan arahan konkret untuk meningkatkan kualitas abstrak dan artikel.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {speakersData.map((speaker, index) => (
            <motion.article
              key={speaker.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="relative h-64 w-full">
                <Image src={speaker.imageUrl} alt={speaker.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">{speaker.name}</h3>
                <p className="mb-3 text-sm font-medium text-primary">{speaker.role}</p>
                <p className="mb-4 text-sm text-slate-600">{speaker.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {speaker.expertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
