"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { statsData } from "@/content/castle/data";

const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

export const Stats = () => (
  <section className="bg-slate-900 py-20 text-white">
    <div className="container px-6">
      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {statsData.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="mb-2 flex text-4xl font-bold text-primary-light md:text-5xl">
              <Counter from={0} to={stat.value} />
              {stat.suffix}
            </div>
            <p className="text-sm text-slate-400 md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
