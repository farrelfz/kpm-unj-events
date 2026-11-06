"use client";

import { committeeData2026 } from "@/content/castle/data";
import { useLanguage } from "@/i18n/language";

export const CommitteePageContent = () => {
  const { language } = useLanguage();

  const copy =
    language === "id"
      ? {
          title: "Panitia Konferensi",
          description:
            "Struktur panitia resmi CASTLE 2026 untuk memastikan kualitas proses ilmiah, operasional konferensi, dan layanan peserta berjalan optimal."
        }
      : {
          title: "Conference Committee",
          description:
            "Official CASTLE 2026 committee structure to ensure scientific quality, smooth operations, and participant services."
        };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container px-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">CASTLE 2026</p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900">{copy.title}</h1>
        <p className="mb-10 max-w-3xl text-slate-600">{copy.description}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {committeeData2026.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-widest text-primary">
                {language === "id" ? item.role : item.roleEn ?? item.role}
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">{item.name}</h2>
              <p className="mt-1 text-sm text-slate-600">{item.affiliation}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};
