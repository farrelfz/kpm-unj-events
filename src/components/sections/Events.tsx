"use client";

import { motion } from "framer-motion";
import { MapPin, Clock3 } from "lucide-react";
import { eventsData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";

export const Events = () => {
  return (
    <AnimatedSection id="events" className="bg-slate-100 py-24">
      <div className="container px-6">
        <SectionHeader
          title="Agenda Event"
          subtitle="Ikuti workshop, seminar, kompetisi, dan webinar yang mendorong kapasitas riset mahasiswa."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {eventsData.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {event.category}
                </span>
                <span className="text-xs uppercase tracking-wide text-slate-500">{event.status}</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{event.title}</h3>
              <p className="mb-4 text-sm text-slate-600">{event.description}</p>
              <div className="mb-5 space-y-2 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {event.date} | {event.time}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </p>
              </div>
              <Button variant="outline" className="w-full" disabled={!event.registrationUrl}>
                {event.registrationUrl ? "Daftar Sekarang" : "Informasi Segera Hadir"}
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
