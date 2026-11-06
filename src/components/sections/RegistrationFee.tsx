"use client";

import { registrationFeesData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { useLanguage } from "@/i18n/language";

export const RegistrationFee = () => {
  const { language } = useLanguage();
  return (
    <AnimatedSection id="registration-fee" className="bg-white py-24">
      <div className="container px-6">
        <SectionHeader
          title={
            language === "id" ? "Biaya Registrasi & Publikasi" : "Registration & Publication Fee"
          }
          subtitle={
            language === "id"
              ? "Skema biaya resmi registrasi dan publikasi CASTLE 2026 untuk peserta profesional dan mahasiswa."
              : "Official registration and publication fee scheme for CASTLE 2026 participants."
          }
        />

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  {language === "id" ? "Kategori" : "Category"}
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  {language === "id" ? "Profesional Lokal" : "Local Professional"}
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  {language === "id" ? "Profesional Internasional" : "International Professional"}
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  {language === "id" ? "Mahasiswa Lokal" : "Local Student"}
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  {language === "id" ? "Mahasiswa Internasional" : "International Student"}
                </th>
              </tr>
            </thead>
            <tbody>
              {registrationFeesData.map((row) => (
                <tr key={row.id} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium text-slate-800">{row.publication}</td>
                  <td className="px-4 py-3 text-slate-600">{row.localProfessional}</td>
                  <td className="px-4 py-3 text-slate-600">{row.internationalProfessional}</td>
                  <td className="px-4 py-3 text-slate-600">{row.localStudent}</td>
                  <td className="px-4 py-3 text-slate-600">{row.internationalStudent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          {language === "id"
            ? "Catatan: biaya mengikuti skema resmi CASTLE 2026 dan dapat disesuaikan oleh kebijakan panitia."
            : "Note: fees follow the official CASTLE 2026 scheme and may be updated by committee policy."}
        </p>
      </div>
    </AnimatedSection>
  );
};
