"use client";

import { faqData2026 } from "@/content/castle/data";
import { useLanguage } from "@/i18n/language";

export const FaqPageContent = () => {
  const { language } = useLanguage();

  const copy =
    language === "id"
      ? {
          title: "Tanya Jawab",
          description:
            "Jawaban resmi untuk pertanyaan umum peserta terkait registrasi, submit abstrak, dan publikasi CASTLE 2026."
        }
      : {
          title: "Frequently Asked Questions",
          description:
            "Official answers to common participant questions regarding registration, abstract submission, and publication at CASTLE 2026."
        };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container px-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">CASTLE 2026</p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900">{copy.title}</h1>
        <p className="mb-10 max-w-3xl text-slate-600">{copy.description}</p>

        <div className="space-y-4">
          {faqData2026.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold text-slate-900">
                {language === "id" ? item.question : item.questionEn ?? item.question}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {language === "id" ? item.answer : item.answerEn ?? item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};
