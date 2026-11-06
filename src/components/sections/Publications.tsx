"use client";

import { motion } from "framer-motion";
import { publicationsData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { useLanguage } from "@/i18n/language";

export const Publications = () => {
  const { language } = useLanguage();
  return (
    <AnimatedSection id="publications" className="bg-slate-100 py-24">
      <div className="container px-6">
        <SectionHeader
          title={language === "id" ? "Publikasi" : "Publications"}
          subtitle={
            language === "id"
              ? "Abstrak dan paper terpilih diarahkan ke prosiding konferensi dan jurnal mitra. Output CASTLE tidak berhenti pada presentasi."
              : "Selected abstracts and papers are directed to conference proceedings and partner journals beyond presentation sessions."
          }
        />

        <div className="mb-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Tahap 1</p>
            <p className="mt-2 text-sm text-slate-600">
              Submit abstrak sesuai template, kemudian melalui proses desk review.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Tahap 2</p>
            <p className="mt-2 text-sm text-slate-600">
              Presentasi pada sesi konferensi untuk mendapatkan masukan reviewer dan panel.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Tahap 3</p>
            <p className="mt-2 text-sm text-slate-600">
              Naskah terbaik masuk kurasi lanjutan menuju prosiding dan kanal jurnal mitra.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {publicationsData.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold text-slate-900">{item.name}</h3>
              <p className="mb-4 text-slate-600">{item.description}</p>
              <div className="space-y-2 text-sm text-slate-500">
                <p>
                  <span className="font-semibold text-slate-700">
                    {language === "id" ? "Frekuensi:" : "Frequency:"}
                  </span>{" "}
                  {item.frequency}
                </p>
                <p>
                  <span className="font-semibold text-slate-700">
                    {language === "id" ? "Ruang lingkup:" : "Scope:"}
                  </span>{" "}
                  {item.scope}
                </p>
              </div>
              <span className="mt-5 inline-block text-sm font-semibold text-primary">
                {language === "id" ? "Lihat Detail" : "See Details"}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
