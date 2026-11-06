export type EventId = "castle" | "skill" | "expo";

export interface EventMeta {
  id: EventId;
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  edition?: string;
  date: string;
  venue: string;
  registrationUrl: string;
  accentColor: string;
  accentHover: string;
  fontDisplay: string;
  icon: string;
  status: "upcoming" | "ongoing" | "completed";
}

export const events: EventMeta[] = [
  {
    id: "castle",
    name: "CASTLE",
    fullName: "CASTLE Conference 2026",
    tagline: "From Research Insight to Social Impact",
    description:
      "Konferensi akademik internasional ke-6 yang mempertemukan peneliti muda lintas disiplin: sosial, sains, teknologi, bahasa, dan pendidikan.",
    edition: "6th Edition",
    date: "23-24 Oktober 2026",
    venue: "Universitas Negeri Jakarta & Hybrid",
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScqRiktt5jsENc5pPTQ9DQu8Id-3bq5mSCtQRD8NSwom6I1XQ/viewform",
    accentColor: "#6d28d9",
    accentHover: "#5b21b6",
    fontDisplay: "var(--font-sora)",
    icon: "Castle",
    status: "upcoming"
  },
  {
    id: "skill",
    name: "SKILL",
    fullName: "SKILL 2026",
    tagline: "Seminar Keilmuan dan Hasil Penelitian",
    description:
      "Seminar keilmuan tahunan yang menampilkan hasil penelitian terbaik mahasiswa dengan fokus pada inovasi metodologi dan dampak akademik.",
    edition: "2026",
    date: "Februari 2026",
    venue: "Universitas Negeri Jakarta",
    registrationUrl: "#registration",
    accentColor: "#b45309",
    accentHover: "#92400e",
    fontDisplay: "var(--font-fraunces)",
    icon: "GraduationCap",
    status: "upcoming"
  },
  {
    id: "expo",
    name: "EXPO",
    fullName: "KPM EXPO UNJ 2026",
    tagline: "Pameran Karya Mahasiswa",
    description:
      "Pameran apik karya dan inovasi mahasiswa KPM UNJ — dari prototipe, penelitian terapan, hingga instalasi interaktif.",
    edition: "26.0",
    date: "Mei 2026",
    venue: "Kampus A UNJ, Jakarta",
    registrationUrl: "#events",
    accentColor: "#0284c7",
    accentHover: "#0369a1",
    fontDisplay: "var(--font-sora)",
    icon: "Trophy",
    status: "upcoming"
  }
];

export const getEvent = (id: EventId): EventMeta =>
  events.find((e) => e.id === id)!;
