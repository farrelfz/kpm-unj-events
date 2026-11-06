"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { events } from "@/content/events";

const iconClass = "h-4 w-4";

export function SiteHeader({
  activeEvent,
  navLinks = []
}: {
  activeEvent?: string;
  navLinks?: { name: string; href: string }[];
}) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 py-3 shadow-sm backdrop-blur">
      <div className="container flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold text-slate-900">
          <span className="rounded-lg bg-slate-900 px-2 py-0.5 text-xs font-bold text-white">KPM</span>
          <span className="hidden sm:inline">UNJ Events</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {/* Events Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            <button className="flex items-center gap-1 font-medium text-slate-600 transition-colors hover:text-primary">
              Events
              <ChevronDown className={iconClass} />
            </button>
            <AnimatePresence>
              {eventsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full z-20 mt-3 min-w-[260px] rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
                >
                  {events.map((event) => (
                    <Link
                      key={event.id}
                      href={`/${event.id}`}
                      className={`block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-slate-100 ${
                        activeEvent === event.id ? "bg-slate-50 font-semibold" : ""
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        <span style={{ color: event.accentColor }} className="font-bold">
                          {event.name}
                        </span>
                        <span className="text-xs text-slate-400">{event.edition}</span>
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-500">{event.tagline}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Event-specific nav links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-slate-600 transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}

          {/* Language Toggle */}
          <div className="ml-1 flex items-center gap-1 rounded-full border border-slate-200 bg-white px-1 py-0.5">
            <button
              type="button"
              onClick={() => setLanguage("id")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                language === "id" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                language === "en" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-slate-800 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full flex w-full flex-col gap-3 border-t bg-white py-4 shadow-xl md:hidden"
          >
            <div className="px-6">
              <p className="mb-2 text-xs font-semibold uppercase text-slate-400">Events</p>
              {events.map((event) => (
                <Link
                  key={event.id}
                  href={`/${event.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 font-medium text-slate-700"
                  style={{ color: activeEvent === event.id ? event.accentColor : undefined }}
                >
                  {event.name} — {event.tagline}
                </Link>
              ))}
            </div>
            {navLinks.length > 0 && (
              <div className="border-t border-slate-100 px-6 pt-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-center font-medium text-slate-600"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
            <div className="mt-1 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  language === "id" ? "bg-slate-900 text-white" : "border border-slate-300 text-slate-600"
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  language === "en" ? "bg-slate-900 text-white" : "border border-slate-300 text-slate-600"
                }`}
              >
                EN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 KPM UNJ Events · Kelompok Peminat UNJ
          </p>
          <div className="flex gap-4 text-sm text-slate-600">
            <Link href="/" className="hover:text-primary">Beranda</Link>
            <Link href="/castle" className="hover:text-primary">CASTLE</Link>
            <Link href="/skill" className="hover:text-primary">SKILL</Link>
            <Link href="/expo" className="hover:text-primary">EXPO</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
