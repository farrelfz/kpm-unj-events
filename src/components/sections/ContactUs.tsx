"use client";

import { motion } from "framer-motion";
import { contactChannelsData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";

export const ContactUs = () => {
  return (
    <AnimatedSection id="contact" className="bg-slate-900 py-24 text-white">
      <div className="container px-6">
        <SectionHeader
          title="Contact Us"
          subtitle="Terhubung langsung dengan tim CASTLE untuk kolaborasi, pertanyaan program, atau informasi publikasi."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {contactChannelsData.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="block rounded-xl border border-slate-700 bg-slate-800 p-4 hover:border-blue-300"
              >
                <p className="text-xs uppercase tracking-widest text-blue-300">{item.label}</p>
                <p className="mt-1 text-lg text-white">{item.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-slate-700 bg-slate-800 p-6"
          >
            <h3 className="mb-4 text-2xl font-bold">Kirim Pesan</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-300"
              />
              <textarea
                placeholder="Pesan"
                rows={5}
                className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-300"
              />
              <button
                type="button"
                className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white transition hover:bg-primary-light"
              >
                Kirim
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
};
