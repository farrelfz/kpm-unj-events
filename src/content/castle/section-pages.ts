export type SectionSlug =
  | "about"
  | "speakers"
  | "timeline"
  | "publications"
  | "archives"
  | "contact"
  | "testimonials"
  | "stats";

export interface SectionPageInfo {
  slug: SectionSlug;
  title: string;
  homeAnchor: string;
  headline: string;
  description: string;
  detailPoints: string[];
}

export const sectionPages: SectionPageInfo[] = [
  {
    slug: "about",
    title: "About",
    homeAnchor: "#about",
    headline: "Fondasi Gerakan Riset Mahasiswa CASTLE",
    description:
      "Tentang visi, misi, nilai, dan arah strategis CASTLE KPM UNJ dalam membangun budaya akademik yang kolaboratif dan berdampak.",
    detailPoints: [
      "Latar belakang pembentukan komunitas dan konteks kebutuhan mahasiswa.",
      "Arah pengembangan organisasi dari pembinaan hingga publikasi.",
      "Nilai utama: kolaboratif, ilmiah, dan berorientasi solusi."
    ]
  },
  {
    slug: "speakers",
    title: "Speakers",
    homeAnchor: "#speakers",
    headline: "Mentor dan Pembicara Penggerak Ekosistem CASTLE",
    description:
      "Profil pembina, mentor, dan narasumber yang membimbing anggota dari ide riset hingga implementasi dan publikasi.",
    detailPoints: [
      "Fokus keahlian tiap mentor berdasarkan bidangnya.",
      "Peran mentoring untuk proposal, data, dan penulisan akademik.",
      "Skema pendampingan berkala sepanjang program."
    ]
  },
  {
    slug: "timeline",
    title: "Timeline",
    homeAnchor: "#timeline",
    headline: "Roadmap Kegiatan Tahunan CASTLE",
    description:
      "Rangkaian agenda akademik sepanjang tahun mulai dari pelatihan dasar, seminar, kompetisi, hingga batch publikasi.",
    detailPoints: [
      "Urutan kegiatan dari persiapan, eksekusi, hingga output publikasi.",
      "Milestone penting dan target capaian di tiap fase.",
      "Integrasi antara agenda pelatihan dan agenda kompetisi."
    ]
  },
  {
    slug: "publications",
    title: "Publications",
    homeAnchor: "#publications",
    headline: "Kanal Diseminasi Karya Ilmiah CASTLE",
    description:
      "Informasi detail tentang jurnal, prosiding, dan mitra publikasi yang menjadi jalur resmi karya anggota.",
    detailPoints: [
      "Model terbitan, frekuensi, dan ruang lingkup tiap kanal.",
      "Alur seleksi naskah dari kurasi internal ke review akademik.",
      "Strategi menjaga kualitas dan konsistensi publikasi."
    ]
  },
  {
    slug: "archives",
    title: "Archives",
    homeAnchor: "#archives",
    headline: "Dokumentasi Capaian Tahunan CASTLE",
    description:
      "Rekaman perjalanan, data capaian, dan highlight program dari tahun ke tahun sebagai bahan evaluasi dan inspirasi.",
    detailPoints: [
      "Ringkasan performa program pada tiap periode.",
      "Tren partisipasi anggota dan pertumbuhan output.",
      "Dokumentasi kolaborasi dan dampak eksternal."
    ]
  },
  {
    slug: "contact",
    title: "Contact",
    homeAnchor: "#contact",
    headline: "Kanal Komunikasi Resmi CASTLE",
    description:
      "Seluruh jalur komunikasi untuk kolaborasi, pertanyaan program, dukungan publikasi, dan kebutuhan informasi umum.",
    detailPoints: [
      "Kontak formal organisasi dan media sosial.",
      "Jalur komunikasi cepat untuk kebutuhan operasional.",
      "Panduan singkat kapan menggunakan masing-masing kanal."
    ]
  },
  {
    slug: "testimonials",
    title: "Testimonials",
    homeAnchor: "#testimonials",
    headline: "Cerita Dampak dari Anggota dan Alumni",
    description:
      "Pengalaman nyata terkait perubahan kemampuan, jejaring, dan peluang akademik setelah aktif di CASTLE.",
    detailPoints: [
      "Insight dari alumni terkait manfaat jangka panjang.",
      "Pengalaman anggota aktif selama mengikuti pembinaan.",
      "Dampak komunitas terhadap keberanian berkarya."
    ]
  },
  {
    slug: "stats",
    title: "Stats",
    homeAnchor: "#",
    headline: "Indikator Kinerja Komunitas",
    description:
      "Ikhtisar angka capaian yang menunjukkan pertumbuhan kegiatan, karya, dan partisipasi anggota CASTLE.",
    detailPoints: [
      "Metrik kuantitatif sebagai tolok ukur performa program.",
      "Interpretasi tren untuk perencanaan periode berikutnya.",
      "Korelasi antara aktivitas komunitas dan output karya."
    ]
  }
];

export const sectionPageBySlug = sectionPages.reduce<Record<SectionSlug, SectionPageInfo>>(
  (acc, item) => {
    acc[item.slug] = item;
    return acc;
  },
  {} as Record<SectionSlug, SectionPageInfo>
);
