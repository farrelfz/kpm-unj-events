import {
  ArchiveItem,
  CastleEdition,
  CommitteeMember,
  ConferenceScopeItem,
  ContactChannel,
  Event,
  Feature,
  FaqItem,
  FeeRow,
  ImportantDateItem,
  PartnerItem,
  PublicationItem,
  SpeakerMember,
  ShowcaseItem,
  Testimonial,
  TimelineItem
} from "@/types";

export const featuresData: Feature[] = [
  {
    id: "1",
    icon: "FileText",
    title: "Submit Karya",
    description: "Kirim karya inovatifmu untuk dipublikasikan.",
    href: "#",
    color: "text-blue-500",
    badge: "Hot"
  },
  {
    id: "2",
    icon: "BookOpen",
    title: "Artikel Ilmiah",
    description: "Akses ratusan artikel penelitian mahasiswa.",
    href: "#showcase",
    color: "text-indigo-500"
  },
  {
    id: "3",
    icon: "Calendar",
    title: "Event Akademik",
    description: "Ikuti berbagai kegiatan akademik seru.",
    href: "#events",
    color: "text-amber-500"
  },
  {
    id: "4",
    icon: "Users",
    title: "Komunitas",
    description: "Jejaring luas bersama peneliti muda lainnya.",
    href: "#",
    color: "text-emerald-500"
  }
];

export const statsData = [
  { value: 120, label: "Karya Submitted", suffix: "+" },
  { value: 30, label: "Event Diselenggarakan", suffix: "+" },
  { value: 5, label: "Divisi Aktif", suffix: "" },
  { value: 200, label: "Anggota Terdaftar", suffix: "+" }
];

export const eventsData: Event[] = [
  {
    id: "e1",
    title: "Workshop Penulisan PKM",
    date: "15 Agustus 2025",
    time: "09.00 - 12.00 WIB",
    location: "Aula UNJ",
    category: "Workshop",
    description: "Pelatihan intensif penyusunan proposal PKM tembus didanai.",
    status: "upcoming",
    registrationUrl: "#"
  },
  {
    id: "e2",
    title: "Seminar Nasional Inovasi",
    date: "20 September 2025",
    time: "13.00 - 16.00 WIB",
    location: "Zoom Meeting",
    category: "Seminar",
    description: "Diskusi panel bersama pakar inovasi teknologi dan sains.",
    status: "upcoming"
  },
  {
    id: "e3",
    title: "Debat Akademik Mahasiswa",
    date: "5 Oktober 2025",
    time: "08.00 - Selesai",
    location: "Gedung Sertifikasi UNJ",
    category: "Kompetisi",
    description: "Ajang debat tingkat universitas untuk mahasiswa.",
    status: "upcoming",
    registrationUrl: "#"
  },
  {
    id: "e4",
    title: "Research Methodology 101",
    date: "10 Juli 2025",
    time: "19.00 - 21.00 WIB",
    location: "Zoom Meeting",
    category: "Webinar",
    description: "Dasar-dasar metodologi penelitian kualitatif dan kuantitatif.",
    status: "completed"
  }
];

export const showcaseData: ShowcaseItem[] = [
  {
    id: "s1",
    title: "Sistem Peringatan Dini Banjir Berbasis IoT",
    author: "Budi Santoso",
    category: "Proyek Inovasi",
    description: "Prototipe sistem deteksi banjir murah menggunakan sensor ultrasonik.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    year: 2024,
    tags: ["IoT", "Lingkungan"],
    featured: true
  },
  {
    id: "s2",
    title: "Analisis Sentimen Kebijakan Kampus",
    author: "Siti Aminah",
    category: "Karya Ilmiah",
    description: "Penerapan NLP untuk menganalisis opini mahasiswa di Twitter.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    year: 2024,
    tags: ["AI", "Data Science"]
  },
  {
    id: "s3",
    title: "Dampak Perubahan Iklim pada Pertanian Lokal",
    author: "Andi Saputra",
    category: "Penelitian",
    description: "Studi kasus pada petani di wilayah Jawa Barat.",
    imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    year: 2023,
    tags: ["Pertanian", "Iklim"]
  },
  {
    id: "s4",
    title: "Aplikasi Belajar Aksara Nusantara",
    author: "Dina Fitri",
    category: "Proyek Inovasi",
    description: "Aplikasi mobile gamifikasi untuk melestarikan aksara daerah.",
    imageUrl: "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
    year: 2025,
    tags: ["Mobile", "Edukasi"]
  },
  {
    id: "s5",
    title: "Menggagas Ekonomi Sirkular di Kampus",
    author: "Rudi Hartono",
    category: "Artikel",
    description: "Opini mengenai penerapan zero-waste management.",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
    year: 2024,
    tags: ["Ekonomi", "Lingkungan"]
  },
  {
    id: "s6",
    title: "Optimasi Jaringan Syaraf Tiruan",
    author: "Bagas Kara",
    category: "Karya Ilmiah",
    description: "Pendekatan baru dalam optimasi training model AI.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    year: 2024,
    tags: ["AI", "Komputasi"],
    featured: true
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmad Fauzi",
    role: "Ketua Divisi Riset 2024",
    quote: "CASTLE memberikan ruang yang luar biasa untuk berkembang sebagai peneliti muda."
  },
  {
    id: "t2",
    name: "Rina Melati",
    role: "Alumni KPM UNJ",
    quote: "Pengalaman publikasi karya pertama kali saya berawal dari bimbingan di organisasi ini."
  },
  {
    id: "t3",
    name: "Kevin Sanjaya",
    role: "Pemenang PIMNAS 36",
    quote: "Dukungan penuh dari komunitas membantu mewujudkan ide menjadi inovasi nyata."
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "tl-1",
    date: "18 Januari 2026",
    title: "Kickoff CASTLE Research Sprint",
    type: "Pelatihan",
    description:
      "Pembekalan metodologi riset, penulisan proposal, dan penyusunan roadmap riset mahasiswa lintas prodi."
  },
  {
    id: "tl-2",
    date: "9 Februari 2026",
    title: "Workshop Data Analysis for Student Research",
    type: "Workshop",
    description:
      "Sesi praktik analisis data kuantitatif dan visualisasi hasil untuk mendukung publikasi ilmiah."
  },
  {
    id: "tl-3",
    date: "23 Maret 2026",
    title: "Seminar Nasional Riset Mahasiswa",
    type: "Seminar",
    description:
      "Forum presentasi hasil penelitian mahasiswa bersama reviewer akademik dan praktisi industri."
  },
  {
    id: "tl-4",
    date: "12 Mei 2026",
    title: "Castle Innovation Challenge",
    type: "Kompetisi",
    description:
      "Kompetisi ide dan prototipe inovasi berbasis riset dengan fokus solusi berdampak untuk masyarakat."
  },
  {
    id: "tl-5",
    date: "30 Juni 2026",
    title: "Batch Publikasi Semester Genap",
    type: "Publikasi",
    description:
      "Kurasi dan rilis karya terbaik anggota CASTLE ke kanal jurnal internal dan prosiding mitra."
  }
];

export const publicationsData: PublicationItem[] = [
  {
    id: "pub-1",
    name: "Journal of Castle",
    description:
      "Jurnal internal CASTLE yang memuat artikel ilmiah mahasiswa dari beragam rumpun ilmu dengan proses editorial terstruktur.",
    frequency: "Terbit 2 kali per tahun",
    scope: "Riset mahasiswa, studi kasus, dan artikel konseptual",
    href: "#"
  },
  {
    id: "pub-2",
    name: "Prosiding Castle",
    description:
      "Kompilasi paper terpilih dari seminar, konferensi mini, dan forum presentasi karya riset anggota CASTLE.",
    frequency: "Terbit setiap agenda konferensi",
    scope: "Paper seminar, extended abstract, dan best paper collection",
    href: "#"
  },
  {
    id: "pub-3",
    name: "Jurnal Risenologi",
    description:
      "Kanal publikasi mitra untuk diseminasi karya unggulan yang telah lolos tahapan seleksi dan review akademik.",
    frequency: "Mengikuti jadwal terbit jurnal mitra",
    scope: "Artikel riset terapan, inovasi pendidikan, dan pengembangan teknologi",
    href: "#"
  }
];

export const archivesData: ArchiveItem[] = [
  {
    id: "ar-2025",
    year: 2025,
    title: "Castle Annual Highlights 2025",
    summary:
      "Fokus pada penguatan budaya riset dan peningkatan partisipasi publikasi mahasiswa di level nasional.",
    highlights: ["31 event akademik", "146 karya masuk kurasi", "12 kolaborasi eksternal"]
  },
  {
    id: "ar-2024",
    year: 2024,
    title: "Castle Annual Highlights 2024",
    summary:
      "Tahun ekspansi komunitas dengan program mentoring intensif untuk proposal PKM dan karya inovasi.",
    highlights: ["24 event akademik", "108 karya masuk kurasi", "7 tim lolos pendanaan"]
  },
  {
    id: "ar-2023",
    year: 2023,
    title: "Castle Annual Highlights 2023",
    summary:
      "Peletakan fondasi ekosistem CASTLE melalui kelas riset dasar dan serial workshop publikasi ilmiah.",
    highlights: ["17 event akademik", "74 karya masuk kurasi", "Peluncuran batch prosiding pertama"]
  }
];

export const contactChannelsData: ContactChannel[] = [
  {
    id: "contact-email",
    label: "Email",
    value: "castle.kpm@unj.ac.id",
    href: "mailto:castle.kpm@unj.ac.id"
  },
  {
    id: "contact-instagram",
    label: "Instagram",
    value: "@castle.kpmunj",
    href: "https://instagram.com/castle.kpmunj"
  },
  {
    id: "contact-whatsapp",
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890"
  },
  {
    id: "contact-location",
    label: "Sekretariat",
    value: "Kampus A UNJ, Jakarta",
    href: "https://maps.google.com"
  }
];

export const speakersData: SpeakerMember[] = [
  {
    id: "sp-1",
    name: "Dr. Fajar Prasetyo",
    role: "Pembina CASTLE KPM UNJ",
    expertise: ["Metodologi Riset", "Publikasi Ilmiah"],
    bio: "Mendampingi penguatan budaya riset mahasiswa melalui coaching proposal dan strategi publikasi.",
    imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
  },
  {
    id: "sp-2",
    name: "Nadya Aulia",
    role: "Koordinator Program Akademik",
    expertise: ["Manajemen Program", "Penulisan Akademik"],
    bio: "Mengelola kurikulum kegiatan CASTLE dari bootcamp riset dasar hingga klinik artikel jurnal.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    id: "sp-3",
    name: "Rafi Aditya",
    role: "Mentor Data & AI",
    expertise: ["Data Analysis", "Machine Learning"],
    bio: "Fokus pada pendampingan analisis data penelitian mahasiswa dan penerapan AI untuk riset terapan.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    id: "sp-4",
    name: "Salsa Maharani",
    role: "Editor Publikasi CASTLE",
    expertise: ["Editorial Review", "Academic Writing"],
    bio: "Memimpin proses editorial Journal of Castle dan kurasi naskah untuk prosiding serta jurnal mitra.",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
  }
];

export const castleEditionsData: CastleEdition[] = [
  {
    id: "castle-6",
    year: 2026,
    edition: 6,
    theme: "From Research Insight to Social Impact",
    tagline: "Menghubungkan hasil riset mahasiswa dengan solusi nyata untuk masyarakat.",
    date: "23-24 Oktober 2026",
    venue: "Universitas Negeri Jakarta & Hybrid Conference Hall",
    overview:
      "CASTLE ke-6 menekankan transformasi hasil riset menjadi implementasi yang terukur melalui kolaborasi kampus, komunitas, dan mitra industri.",
    focusAreas: [
      "Social Innovation and Community Empowerment",
      "Applied Educational Technology",
      "Language, Culture, and Digital Literacy"
    ],
    speakers: [
      {
        id: "c6-sp1",
        name: "Dr. Fajar Prasetyo",
        role: "Keynote Speaker",
        topic: "Designing Student-Led Research for Social Change"
      },
      {
        id: "c6-sp2",
        name: "Prof. Sinta Rahmawati",
        role: "Invited Speaker",
        topic: "AI for Inclusive Learning Ecosystems"
      },
      {
        id: "c6-sp3",
        name: "Nadya Aulia",
        role: "Panel Speaker",
        topic: "Building Conference-to-Publication Student Pipelines"
      }
    ]
  },
  {
    id: "castle-5",
    year: 2025,
    edition: 5,
    theme: "Collaborative Research for Sustainable Future",
    tagline: "Kolaborasi lintas disiplin untuk masa depan berkelanjutan.",
    date: "18 Oktober 2025",
    venue: "Aula UNJ",
    overview:
      "Fokus CASTLE ke-5 adalah memperkuat jejaring antarpeneliti muda dengan topik riset berorientasi keberlanjutan sosial dan lingkungan.",
    focusAreas: [
      "Sustainable Campus Innovation",
      "Data-Driven Social Policy",
      "Education for Green Society"
    ],
    speakers: [
      {
        id: "c5-sp1",
        name: "Dr. Rafi Aditya",
        role: "Keynote Speaker",
        topic: "Evidence-Based Innovation in Higher Education"
      },
      {
        id: "c5-sp2",
        name: "Salsa Maharani",
        role: "Invited Speaker",
        topic: "Editorial Strategy for Student Publications"
      }
    ]
  },
  {
    id: "castle-4",
    year: 2024,
    edition: 4,
    theme: "Research Literacy and Digital Transformation",
    tagline: "Literasi riset di era transformasi digital.",
    date: "26 Oktober 2024",
    venue: "Gedung Sertifikasi UNJ",
    overview:
      "CASTLE ke-4 mendorong peningkatan literasi riset mahasiswa dengan pendekatan digital tools dan praktik open science.",
    focusAreas: [
      "Digital Research Methods",
      "Open Science Practices",
      "Academic Communication"
    ],
    speakers: [
      {
        id: "c4-sp1",
        name: "Prof. Laila Muchtar",
        role: "Keynote Speaker",
        topic: "Digital Fluency for Young Researchers"
      },
      {
        id: "c4-sp2",
        name: "Ahmad Fauzi",
        role: "Session Speaker",
        topic: "Student Research Showcase and Peer Review"
      }
    ]
  },
  {
    id: "castle-3",
    year: 2023,
    edition: 3,
    theme: "Interdisciplinary Perspectives in Student Research",
    tagline: "Membuka perspektif lintas disiplin untuk riset mahasiswa.",
    date: "21 Oktober 2023",
    venue: "UNJ Convention Center",
    overview:
      "Edisi ketiga menekankan kolaborasi lintas bidang untuk meningkatkan kualitas desain riset dan relevansi dampak hasilnya.",
    focusAreas: [
      "Cross-Disciplinary Methodology",
      "Language and Education Research",
      "Technology for Social Inclusion"
    ],
    speakers: [
      {
        id: "c3-sp1",
        name: "Dr. Kevin Sanjaya",
        role: "Keynote Speaker",
        topic: "From Ideas to Validated Academic Prototypes"
      }
    ]
  },
  {
    id: "castle-2",
    year: 2022,
    edition: 2,
    theme: "Strengthening Student Research Culture",
    tagline: "Memperkuat budaya riset berkelanjutan di kalangan mahasiswa.",
    date: "15 Oktober 2022",
    venue: "Hybrid Session UNJ",
    overview:
      "CASTLE ke-2 berfokus pada penguatan fondasi riset melalui pendampingan penulisan akademik dan presentasi ilmiah.",
    focusAreas: [
      "Academic Writing Skills",
      "Research Proposal Development",
      "Public Speaking for Scholars"
    ],
    speakers: [
      {
        id: "c2-sp1",
        name: "Rina Melati",
        role: "Keynote Speaker",
        topic: "Navigating First Student Publication"
      },
      {
        id: "c2-sp2",
        name: "Ahmad Fauzi",
        role: "Speaker",
        topic: "Effective Academic Presentation for Undergraduate Research"
      }
    ]
  },
  {
    id: "castle-1",
    year: 2021,
    edition: 1,
    theme: "Initiating Academic Innovation for Students",
    tagline: "Langkah awal konferensi riset mahasiswa CASTLE.",
    date: "9 Oktober 2021",
    venue: "Virtual Conference",
    overview:
      "Edisi perdana CASTLE menjadi titik awal gerakan konferensi mahasiswa berbasis riset sosial, sains, teknologi, bahasa, dan pendidikan.",
    focusAreas: [
      "Research Mindset Development",
      "Basic Scientific Communication",
      "Student Innovation Networking"
    ],
    speakers: [
      {
        id: "c1-sp1",
        name: "Dr. Dina Fitri",
        role: "Keynote Speaker",
        topic: "Why Student Conferences Matter"
      },
      {
        id: "c1-sp2",
        name: "Bagas Kara",
        role: "Speaker",
        topic: "Building Research Confidence in First-Time Presenters"
      }
    ]
  }
];

export const conferenceScopeData: ConferenceScopeItem[] = [
  {
    id: "scope-1",
    title: "Social Research",
    description:
      "Kajian isu sosial kontemporer berbasis data dan solusi kebijakan yang berdampak langsung ke masyarakat."
  },
  {
    id: "scope-2",
    title: "Science and Applied Technology",
    description:
      "Inovasi sains dan teknologi terapan untuk pendidikan, lingkungan, kesehatan, dan pengembangan komunitas."
  },
  {
    id: "scope-3",
    title: "Language and Education",
    description:
      "Riset bahasa, literasi, pedagogi, dan transformasi pembelajaran di ekosistem pendidikan abad ke-21."
  }
];

export const importantDatesData: ImportantDateItem[] = [
  { id: "id-1", date: "18 May 2026", label: "Deadline Abstract Submission" },
  { id: "id-2", date: "25 May 2026", label: "Announcement of Abstract Acceptance" },
  { id: "id-3", date: "05 June 2026", label: "Deadline Registration Payment" },
  { id: "id-4", date: "21 June 2026", label: "Conference Day" },
  { id: "id-5", date: "30 June 2026", label: "Deadline Full Paper Submission" }
];

export const registrationFeesData: FeeRow[] = [
  {
    id: "fee-1",
    publication: "CASTLE Proceedings (International Indexed Target)",
    localProfessional: "Rp 4.000.000",
    internationalProfessional: "USD 245",
    localStudent: "Rp 3.500.000",
    internationalStudent: "USD 215"
  },
  {
    id: "fee-2",
    publication: "Partner Journal Publication (National Accredited)",
    localProfessional: "Rp 2.000.000",
    internationalProfessional: "USD 130",
    localStudent: "Rp 1.800.000",
    internationalStudent: "USD 110"
  },
  {
    id: "fee-3",
    publication: "Presenter Only (No Publication)",
    localProfessional: "Rp 900.000",
    internationalProfessional: "USD 60",
    localStudent: "Rp 800.000",
    internationalStudent: "USD 55"
  },
  {
    id: "fee-4",
    publication: "Participant Only",
    localProfessional: "Rp 650.000",
    internationalProfessional: "USD 40",
    localStudent: "Rp 650.000",
    internationalStudent: "USD 40"
  }
];

export const officialPartnersData: PartnerItem[] = [
  { id: "p-1", name: "Universitas Negeri Jakarta", category: "Organizer" },
  { id: "p-2", name: "KPM UNJ", category: "Co-Host" },
  { id: "p-3", name: "Physical Society of Indonesia (PSI)", category: "Association" },
  { id: "p-4", name: "Journal of CASTLE Proceedings", category: "Publisher" },
  { id: "p-5", name: "Jurnal Risenologi", category: "Publisher" },
  { id: "p-6", name: "UNJ Media Center", category: "Media" }
];

export const committeeData2026: CommitteeMember[] = [
  {
    id: "cm-1",
    role: "Ketua Konferensi",
    roleEn: "Conference Chair",
    name: "Dr. Fajar Prasetyo, M.Pd.",
    affiliation: "Universitas Negeri Jakarta"
  },
  {
    id: "cm-2",
    role: "Wakil Ketua",
    roleEn: "Co-Chair",
    name: "Nadya Aulia, M.Pd.",
    affiliation: "Universitas Negeri Jakarta"
  },
  {
    id: "cm-3",
    role: "Koordinator Komite Ilmiah",
    roleEn: "Scientific Committee Lead",
    name: "Prof. Sinta Rahmawati, Ph.D.",
    affiliation: "Universitas Negeri Jakarta"
  },
  {
    id: "cm-4",
    role: "Koordinator Komite Publikasi",
    roleEn: "Publication Committee Lead",
    name: "Salsa Maharani, M.Hum.",
    affiliation: "CASTLE Publication Unit"
  },
  {
    id: "cm-5",
    role: "Koordinator Program",
    roleEn: "Program Committee Lead",
    name: "Rafi Aditya, M.Kom.",
    affiliation: "CASTLE Program Unit"
  },
  {
    id: "cm-6",
    role: "Registrasi dan Sekretariat",
    roleEn: "Registration and Secretariat",
    name: "CASTLE Secretariat Team",
    affiliation: "KPM UNJ"
  }
];

export const faqData2026: FaqItem[] = [
  {
    id: "faq-1",
    question: "Apakah peserta wajib submit abstrak terlebih dahulu?",
    questionEn: "Is abstract submission mandatory before full paper submission?",
    answer:
      "Ya. Seluruh presenter wajib mengirim abstrak sesuai template resmi sebelum batas waktu call for abstract.",
    answerEn:
      "Yes. All presenters must submit an abstract using the official template before the abstract deadline."
  },
  {
    id: "faq-2",
    question: "Apakah CASTLE 2026 diselenggarakan secara hybrid?",
    questionEn: "Is CASTLE 2026 conducted in hybrid mode?",
    answer:
      "Ya. CASTLE 2026 menyediakan jalur partisipasi onsite dan online untuk peserta nasional maupun internasional.",
    answerEn:
      "Yes. CASTLE 2026 provides onsite and online participation tracks for national and international delegates."
  },
  {
    id: "faq-3",
    question: "Bagaimana skema publikasi setelah konferensi?",
    questionEn: "What is the publication pathway after the conference?",
    answer:
      "Naskah terpilih akan melalui editorial screening dan peer review lanjutan untuk diarahkan ke prosiding atau jurnal mitra.",
    answerEn:
      "Selected manuscripts will go through editorial screening and extended peer review for proceedings or partner journal submission."
  },
  {
    id: "faq-4",
    question: "Di mana saya bisa mendapatkan guide book dan template resmi?",
    questionEn: "Where can I get the official guide book and templates?",
    answer:
      "Guide book, abstract template, dan paper template tersedia pada bagian Registrasi & Panduan di homepage.",
    answerEn:
      "Guide book, abstract template, and paper template are available in the Registration and Guide Book section on the homepage."
  }
];
