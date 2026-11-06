"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { useLanguage } from "@/i18n/language";

export const RegistrationGuide = () => {
  const { language } = useLanguage();
  return (
    <AnimatedSection id="registration" className="bg-white py-24">
      <div className="container px-6">
        <SectionHeader
          title={language === "id" ? "Registrasi & Panduan" : "Registration & Guide Book"}
          subtitle={
            language === "id"
              ? "Lengkapi pendaftaran CASTLE 2026 dan unduh panduan resmi agar proses submit abstrak sesuai ketentuan konferensi."
              : "Complete your CASTLE 2026 registration and download the official guide book to ensure submission compliance."
          }
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              {language === "id" ? "Informasi Registrasi" : "Registration Information"}
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {language === "id" ? (
                <>
                  <li>• Pendaftaran peserta dan submit abstrak dilakukan secara online.</li>
                  <li>• Satu akun dapat mengelola beberapa submission.</li>
                  <li>• Pastikan topik sesuai ruang lingkup CASTLE 2026 sebelum submit.</li>
                </>
              ) : (
                <>
                  <li>• Participant registration and abstract submission are completed online.</li>
                  <li>• One account can manage multiple submissions.</li>
                  <li>• Ensure your topic matches CASTLE 2026 conference scope before submitting.</li>
                </>
              )}
            </ul>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                {language === "id" ? "Daftar & Submit Abstrak" : "Register & Submit Abstract"}
              </a>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              {language === "id" ? "Buku Panduan CASTLE 2026" : "CASTLE 2026 Guide Book"}
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {language === "id" ? (
                <>
                  <li>• Template abstrak dan paper.</li>
                  <li>• Ketentuan presentasi, jadwal penting, dan alur review.</li>
                  <li>• Panduan publikasi lanjutan untuk naskah terpilih.</li>
                </>
              ) : (
                <>
                  <li>• Abstract and full-paper templates.</li>
                  <li>• Presentation rules, key deadlines, and review flow.</li>
                  <li>• Extended publication pathway for selected manuscripts.</li>
                </>
              )}
            </ul>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
              >
                {language === "id" ? "Unduh Panduan" : "Download Guide Book"}
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </AnimatedSection>
  );
};
