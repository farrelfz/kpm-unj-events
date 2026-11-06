"use client";

import { motion } from "framer-motion";
import { FileText, BookOpen, Calendar, Users } from "lucide-react";
import { featuresData } from "@/content/castle/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";

const iconMap = {
  FileText,
  BookOpen,
  Calendar,
  Users
};

export const Features = () => {
  return (
    <AnimatedSection id="features" className="bg-white py-24">
      <div className="container px-6">
        <SectionHeader
          title="Fitur Unggulan"
          subtitle="Ekosistem lengkap untuk publikasi karya, jejaring akademik, dan pengembangan riset."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? FileText;
            return (
              <motion.a
                href={feature.href}
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass group block p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Icon className={`h-6 w-6 ${feature.color}`} />
                  {feature.badge ? <Badge>{feature.badge}</Badge> : null}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};
