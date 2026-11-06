"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { useLanguage } from "@/i18n/language";

export const About = () => {
  const { language } = useLanguage();
  const copy =
    language === "id"
      ? {
          label: "Tentang CASTLE KPM UNJ",
          title: "Forum Konferensi Riset Mahasiswa Multidisiplin",
          p1: "CASTLE adalah Conference on Social, Science, Technology, Language, and Education Research yang diselenggarakan untuk mempertemukan mahasiswa, pembicara, dan reviewer dalam ekosistem konferensi akademik yang terstruktur.",
          p2: "Fokus konferensi ini adalah mendorong kualitas abstrak dan paper mahasiswa agar siap presentasi, siap review, dan siap dipublikasikan.",
          topicTitle: "Cakupan Topik",
          formatTitle: "Format Konferensi"
        }
      : {
          label: "About CASTLE KPM UNJ",
          title: "A Multidisciplinary Student Research Conference",
          p1: "CASTLE is the Conference on Social, Science, Technology, Language, and Education Research, designed to connect students, speakers, and reviewers in a structured academic conference ecosystem.",
          p2: "The conference focuses on improving abstract and paper quality so students are ready for presentation, peer review, and publication.",
          topicTitle: "Conference Topics",
          formatTitle: "Conference Format"
        };

  return (
    <AnimatedSection id="about" className="bg-white py-24">
      <div className="container px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              {copy.label}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {copy.title}
            </h2>
            <p className="mb-4 text-slate-600">{copy.p1}</p>
            <p className="text-slate-600">{copy.p2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass grid gap-4 p-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{copy.topicTitle}</h3>
              <p className="text-slate-600">
                Social, Science, Technology, Language, and Education Research.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{copy.formatTitle}</h3>
              <p className="text-slate-600">
                Call for Abstract, parallel session, keynote talk, dan peluang publikasi pada kanal
                mitra konferensi.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};
