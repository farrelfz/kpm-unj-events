# KPM UNJ Events

Portal terpadu tiga event akademik **KPM UNJ** (Kelompok Peminat, Universitas Negeri Jakarta):

- **CASTLE** — Conference on Social, Science, Technology, Language, and Education Research (konferensi internasional)
- **SKILL** — Seminar Keilmuan dan Hasil Penelitian
- **EXPO** — Pameran Karya Mahasiswa

Repo ini adalah **merge** dari 5 repo lama (`Skill`, `EXPO-2026`, `castle`, `castle-main`, `CASTLE-1`) yang sebelumnya terpisah dan duplikatif. Semua riwayat commit dari repo lama tetap tersimpan sebagai merge commit.

## Stack

| Aspek | Teknologi | Sumber |
|---|---|---|
| Framework | Next.js 16 App Router + TypeScript | castle-main |
| Styling | Tailwind CSS + CSS variables per-event | castle-main |
| Animasi | framer-motion (pengganti AOS) | castle-main |
| 3D | @react-three/fiber + drei (Hero CASTLE) | castle-main |
| Icons | lucide-react | castle-main |
| Fonts | next/font: Sora, DM Sans, Fraunces | castle-main + Skill |
| i18n | Dictionary TS + Context (ID/EN) | CASTLE-1 → castle-main |

## Struktur

```
src/
├── app/
│   ├── layout.tsx              # root: KPM UNJ branding, fonts, LanguageProvider
│   ├── page.tsx                # landing portal (3 event cards)
│   ├── not-found.tsx           # 404 dengan link ke event
│   └── (events)/               # route group (tidak memengaruhi URL)
│       ├── castle/
│       │   ├── layout.tsx      # SiteHeader + SiteFooter + accent color
│       │   └── page.tsx        # semua section CASTLE
│       ├── skill/
│       │   ├── layout.tsx
│       │   └── page.tsx
│       └── expo/
│           ├── layout.tsx
│           └── page.tsx
├── components/
│   ├── layout/
│   │   └── SiteHeader.tsx      # navbar global + dropdown Events + lang toggle
│   ├── ui/                     # Button, Badge, AnimatedSection, SectionHeader
│   └── sections/
│       ├── (castle sections)   # Hero, About, Speakers, Scope, Dates, ...
│       ├── skill/              # SkillHero, SkillAbout, ...
│       └── expo/               # ExpoHero, ExpoPlatforms, ...
├── content/
│   ├── events.ts               # registry 3 event (meta, warna, font, ikon)
│   └── castle/                 # data CASTLE (editions, speakers, fees, ...)
├── i18n/
│   └── language.tsx            # Context ID/EN + localStorage
├── lib/
│   ├── utils.ts                # cn() helper
│   └── variants.ts             # framer-motion variants
└── types/
    └── index.ts                # TypeScript interfaces
```

## Pengembangan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Branding

| Event | Warna aksen | Font display | Karakter |
|---|---|---|---|
| CASTLE | `#6d28d9` (ungu) | Sora | Akademik, prestisius |
| SKILL | `#b45309` (amber) | Fraunces | Keilmuan, earth-tone |
| EXPO | `#0284c7` (sky) | Sora | Energik, showcase |

Root layout menggunakan `KPM UNJ Events` sebagai payung brand. Tiap event layout override `--accent` CSS variable dan menampilkan nav sendiri.

## Migrasi dari repo lama

| Repo lama | Nasib |
|---|---|
| `castle-main` | **Basis repo ini** (Next.js + komponen modular) |
| `CASTLE-1` | Konten statis dipindah ke `content/castle/data.ts`; komponen Next.js menggantikan HTML |
| `castle` (v1) | Guidelines & Contact tercampur ke section CASTLE |
| `Skill` | Section dipindah ke `components/sections/skill/` |
| `EXPO-2026` | Section dipindah ke `components/sections/expo/` |

Semua repo lama akan diarsipkan setelah repo ini live.