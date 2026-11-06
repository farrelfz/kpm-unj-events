"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const faqs = [
  {
    q: "Siapa yang bisa ikut SKILL 2026?",
    a: "Seluruh mahasiswa KPM UNJ aktif maupun umum yang tertarik dengan kegiatan akademik."
  },
  {
    q: "Apakah ada biaya pendaftaran?",
    a: "Pendaftaran gratis untuk anggota KPM UNJ. Peserta eksternal dikenakan biaya administratif sesuai ketentuan panitia."
  },
  {
    q: "Bagaimana cara submit paper?",
    a: "Submit abstrak melalui Google Form yang tersedia di section pendaftaran. Naskah lengkap dikirim setelah abstrak diterima."
  },
  {
    q: "Apakah ada sertifikat?",
    a: "Ya, seluruh peserta dan presenter akan mendapatkan sertifikat partisipasi elektronik."
  }
];

export const SkillFAQ = () => {
  return (
    <AnimatedSection id="faq" className="bg-white py-24">
      <div className="container px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold text-slate-900"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          FAQ
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl space-y-4"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.q}
              variants={fadeInUp}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6"
            >
              <p className="mb-2 font-semibold text-slate-900">{faq.q}</p>
              <p className="text-sm leading-relaxed text-slate-600">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
