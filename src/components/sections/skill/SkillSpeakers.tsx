"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const speakers = [
  {
    id: 1,
    name: "Dr. Fajar Prasetyo",
    role: "Keynote Speaker",
    topic: "Research Methodology for Undergraduate Publication",
    imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
  },
  {
    id: 2,
    name: "Nadya Aulia, M.Pd.",
    role: "Invited Speaker",
    topic: "Academic Writing Strategies",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    id: 3,
    name: "Rafi Aditya, M.Kom.",
    role: "Panel Speaker",
    topic: "Data-Driven Research for Student Innovation",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  }
];

export const SkillSpeakers = () => {
  return (
    <AnimatedSection id="speakers" className="bg-white py-24">
      <div className="container px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold text-slate-900"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Speakers
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3"
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              variants={fadeInUp}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="mb-1 text-sm font-semibold" style={{ color: "#b45309" }}>
                  {speaker.role}
                </p>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{speaker.name}</h3>
                <p className="text-sm text-slate-600">{speaker.topic}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
