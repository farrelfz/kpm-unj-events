"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Castle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { castleEditionsData } from "@/content/castle/data";
import { useLanguage } from "@/i18n/language";

type NavChild = { name: string; href: string };
type NavLink = { name: string; href: string; children?: NavChild[] };

const archiveSubLinks = [
  { name: "All Archives", href: "/archives" },
  ...[...castleEditionsData]
    .sort((a, b) => b.year - a.year)
    .map((edition) => ({
      name: `CASTLE ${edition.edition} (${edition.year})`,
      href: `/archives/${edition.year}`
    }))
];

const eventInfoSubLinks = [
  { name: "Registration", href: "/#registration" },
  { name: "Registration Fee", href: "/#registration-fee" },
  { name: "Committee", href: "/committee" },
  { name: "FAQ", href: "/faq" }
];

const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Speakers", href: "#speakers" },
  { name: "Scope", href: "#scope" },
  { name: "Important Dates", href: "#important-dates" },
  { name: "Publications", href: "#publications" },
  { name: "Event Information", href: "#registration", children: eventInfoSubLinks },
  { name: "Archives", href: "#archives", children: archiveSubLinks },
  { name: "Sponsorship", href: "#sponsorship" },
  { name: "Contact", href: "#contact" }
];

export const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  return (
    <header
      className={cn("fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 py-3 shadow-sm backdrop-blur")}
    >
      <div className="container flex items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-heading text-xl font-bold text-primary">
          <Castle className="h-6 w-6" /> CASTLE KPM
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name} className="group relative">
                <button className="flex items-center gap-1 font-medium text-slate-600 transition-colors hover:text-primary">
                  {link.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible absolute left-0 top-full z-20 mt-3 min-w-[220px] rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  <a
                    href={`/${link.href}`}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Go to Section
                  </a>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.name}
                href={`/${link.href}`}
                className="font-medium text-slate-600 transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            )
          )}
          <a href="/#registration">
            <Button variant="primary" className="py-2 text-sm">
              {language === "id" ? "Submit Abstrak" : "Submit Abstract"}
            </Button>
          </a>

          <div className="ml-1 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1">
            <button
              type="button"
              onClick={() => setLanguage("id")}
              className={`rounded-full px-2 py-1 text-xs font-semibold transition-colors ${
                language === "id" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
              aria-label="Switch language to Indonesian"
            >
              🇮🇩
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2 py-1 text-xs font-semibold transition-colors ${
                language === "en" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
              aria-label="Switch language to English"
            >
              🇬🇧
            </button>
          </div>
        </nav>

        <button className="text-slate-800 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full flex w-full flex-col items-center gap-4 border-t bg-white py-4 shadow-xl md:hidden"
          >
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="w-full">
                  <button
                    type="button"
                    onClick={() => setOpenMobileMenu((prev) => (prev === link.name ? null : link.name))}
                    className="flex w-full items-center justify-center gap-2 py-2 text-center font-medium text-slate-600"
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openMobileMenu === link.name ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openMobileMenu === link.name ? (
                    <div className="mx-auto mt-1 w-11/12 rounded-lg border border-slate-200 bg-slate-50 p-2">
                      <a
                        href={`/${link.href}`}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-md px-3 py-2 text-center text-sm font-medium text-slate-700 hover:bg-white"
                      >
                        Go to Section
                      </a>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block rounded-md px-3 py-2 text-center text-sm font-medium text-slate-700 hover:bg-white"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={`/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 text-center font-medium text-slate-600"
                >
                  {link.name}
                </a>
              )
            )}
            <a href="/#registration" className="w-3/4" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full">
                {language === "id" ? "Submit Abstrak" : "Submit Abstract"}
              </Button>
            </a>
            <div className="mt-1 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  language === "id" ? "bg-slate-900 text-white" : "border border-slate-300 text-slate-600"
                }`}
              >
                🇮🇩
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  language === "en" ? "bg-slate-900 text-white" : "border border-slate-300 text-slate-600"
                }`}
              >
                🇬🇧
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
