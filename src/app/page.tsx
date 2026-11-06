"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Castle, GraduationCap, Trophy, ArrowRight } from "lucide-react";
import { events } from "@/content/events";
import { staggerContainer, fadeInUp } from "@/lib/variants";

const iconMap = { Castle, GraduationCap, Trophy };

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-violet-300 opacity-20 mix-blend-multiply blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-float rounded-full bg-blue-300 opacity-20 mix-blend-multiply blur-3xl"
          style={{ animationDelay: "2s" }}
        />

        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto flex max-w-4xl flex-col items-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="mb-6 inline-block rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-600 backdrop-blur">
                Kelompok Peminat UNJ · Event Akademik 2026
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-7xl"
            >
              KPM UNJ Events
            </motion.h1>

            <motion.p variants={fadeInUp} className="mb-10 max-w-2xl text-lg text-slate-600 md:text-xl">
              Tiga event akademik unggulan: konferensi internasional, seminar keilmuan, dan pameran
              karya mahasiswa — satu portal, satu komunitas.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#events"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-800"
              >
                Jelajahi Event
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/castle.kpmunj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                Instagram
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
        >
          <ArrowRight className="h-6 w-6 rotate-90" />
        </motion.div>
      </section>

      {/* Event Cards */}
      <section id="events" className="bg-section py-24">
        <div className="container px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">Tiga Event, Satu Komunitas</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Setiap event punya karakter dan tujuan sendiri, namun dibingkai oleh semangat yang
              sama: memajukan budaya akademik mahasiswa UNJ.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {events.map((event, i) => {
              const Icon = iconMap[event.icon as keyof typeof iconMap] ?? Castle;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <Link
                    href={`/${event.id}`}
                    className="group block rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl"
                    style={{ borderTopColor: event.accentColor, borderTopWidth: "4px" }}
                  >
                    <div
                      className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${event.accentColor}15` }}
                    >
                      <Icon
                        className="h-7 w-7"
                        style={{ color: event.accentColor }}
                      />
                    </div>

                    <h3 className="mb-1 text-2xl font-bold text-slate-900">{event.name}</h3>
                    <p className="mb-3 text-sm font-medium" style={{ color: event.accentColor }}>
                      {event.edition} · {event.date}
                    </p>
                    <p className="mb-4 text-sm text-slate-600">{event.tagline}</p>
                    <p className="mb-6 text-sm leading-relaxed text-slate-500">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-slate-900 transition-transform group-hover:translate-x-1">
                      Kunjungi Event
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="container px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">
              © 2026 KPM UNJ Events · Kelompok Peminat UNJ
            </p>
            <div className="flex gap-4 text-sm text-slate-600">
              <Link href="/castle" className="hover:text-primary">CASTLE</Link>
              <Link href="/skill" className="hover:text-primary">SKILL</Link>
              <Link href="/expo" className="hover:text-primary">EXPO</Link>
              <a
                href="https://instagram.com/castle.kpmunj"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
