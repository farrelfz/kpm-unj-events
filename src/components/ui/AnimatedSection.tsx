"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/variants";

export const AnimatedSection = ({
  children,
  className,
  id
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  );
};
