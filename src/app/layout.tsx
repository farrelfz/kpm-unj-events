import type { Metadata } from "next";
import { Sora, DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/language";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "KPM UNJ Events — CASTLE · SKILL · EXPO",
    template: "%s | KPM UNJ Events"
  },
  description:
    "Portal event akademik KPM UNJ: CASTLE Conference, SKILL Seminar Keilmuan, dan EXPO Pameran Karya Mahasiswa.",
  keywords: [
    "KPM UNJ",
    "CASTLE",
    "SKILL",
    "EXPO",
    "Universitas Negeri Jakarta",
    "konferensi mahasiswa",
    "seminar penelitian"
  ],
  openGraph: {
    title: "KPM UNJ Events",
    description: "CASTLE · SKILL · EXPO — Portal event akademik KPM UNJ",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${sora.variable} ${dmSans.variable} ${fraunces.variable} font-body antialiased selection:bg-primary selection:text-white`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
