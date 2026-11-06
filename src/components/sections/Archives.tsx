"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { castleEditionsData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";

export const Archives = () => {
  const selectedEdition = [...castleEditionsData].sort((a, b) => b.year - a.year)[0];

  if (!selectedEdition) {
    return null;
  }

  return (
    <AnimatedSection id="archives" className="bg-white py-24">
      <div className="container px-6">
        <SectionHeader
          title="Archives"
          subtitle="CASTLE kini telah memasuki edisi ke-6. Section ini menampilkan sorotan edisi terbaru, sementara arsip lengkap per tahun tersedia di halaman khusus."
        />

        <motion.article
          key={selectedEdition.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-6"
        >
          <p className="mb-2 text-sm font-semibold text-primary">
            CASTLE {selectedEdition.edition} - {selectedEdition.year}
          </p>
          <p className="mb-2 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            Saat ini: CASTLE ke-{selectedEdition.edition}
          </p>
          <h3 className="mb-2 text-2xl font-bold text-slate-900">{selectedEdition.theme}</h3>
          <p className="mb-4 text-slate-600">{selectedEdition.tagline}</p>
          <p className="mb-1 text-sm text-slate-600">
            <span className="font-semibold text-slate-800">Tanggal:</span> {selectedEdition.date}
          </p>
          <p className="mb-5 text-sm text-slate-600">
            <span className="font-semibold text-slate-800">Lokasi:</span> {selectedEdition.venue}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/archives/${selectedEdition.year}`}
              className="inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Lihat Detail CASTLE {selectedEdition.year}
            </Link>
            <Link
              href="/archives"
              className="inline-flex rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            >
              Buka Arsip Per Tahun
            </Link>
          </div>
        </motion.article>

        <div className="mt-6 text-center text-xs uppercase tracking-[0.15em] text-slate-500">
          Tidak ada timeline pada halaman archives, fokus pada konteks konferensi dan speakers.
        </div>
      </div>
    </AnimatedSection>
  );
};
