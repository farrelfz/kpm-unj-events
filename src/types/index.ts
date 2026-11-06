export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  color: string;
  badge?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: "Workshop" | "Seminar" | "Kompetisi" | "Webinar";
  description: string;
  imageUrl?: string;
  registrationUrl?: string;
  status: "upcoming" | "ongoing" | "completed";
}

export interface ShowcaseItem {
  id: string;
  title: string;
  author: string;
  authorAvatar?: string;
  category: "Karya Ilmiah" | "Proyek Inovasi" | "Artikel" | "Penelitian";
  description: string;
  imageUrl: string;
  year: number;
  tags: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl?: string;
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  type: "Workshop" | "Pelatihan" | "Kompetisi" | "Seminar" | "Publikasi";
  description: string;
}

export interface PublicationItem {
  id: string;
  name: "Journal of Castle" | "Prosiding Castle" | "Jurnal Risenologi";
  description: string;
  frequency: string;
  scope: string;
  href: string;
}

export interface ArchiveItem {
  id: string;
  year: number;
  title: string;
  summary: string;
  highlights: string[];
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
}

export interface SpeakerMember {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  imageUrl: string;
}

export interface ArchiveSpeaker {
  id: string;
  name: string;
  role: string;
  topic: string;
}

export interface CastleEdition {
  id: string;
  year: number;
  edition: number;
  theme: string;
  tagline: string;
  date: string;
  venue: string;
  overview: string;
  focusAreas: string[];
  speakers: ArchiveSpeaker[];
}

export interface ConferenceScopeItem {
  id: string;
  title: string;
  description: string;
}

export interface ImportantDateItem {
  id: string;
  date: string;
  label: string;
}

export interface FeeRow {
  id: string;
  publication: string;
  localProfessional: string;
  internationalProfessional: string;
  localStudent: string;
  internationalStudent: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  category: "Organizer" | "Co-Host" | "Publisher" | "Association" | "Media";
}

export interface CommitteeMember {
  id: string;
  role: string;
  name: string;
  affiliation: string;
  roleEn?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  questionEn?: string;
  answerEn?: string;
}
