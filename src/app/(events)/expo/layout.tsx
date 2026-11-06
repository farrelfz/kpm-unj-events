import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/layout/SiteHeader";
import { getEvent } from "@/content/events";

const expoNav = [
  { name: "Home", href: "#home" },
  { name: "Platforms", href: "#platforms" },
  { name: "Timeline", href: "#timeline" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" }
];

export const metadata: Metadata = {
  title: "KPM EXPO UNJ 2026 — Pameran Karya Mahasiswa",
  description:
    "Pameran apik karya dan inovasi mahasiswa KPM UNJ — dari prototipe, penelitian terapan, hingga instalasi interaktif."
};

export default function ExpoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const event = getEvent("expo");
  return (
    <div style={{ ["--accent" as string]: event.accentColor } as React.CSSProperties}>
      <SiteHeader activeEvent="expo" navLinks={expoNav} />
      <main className="min-h-screen">{children}</main>
      <SiteFooter />
    </div>
  );
}
