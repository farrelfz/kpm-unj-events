"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-150"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  );
};
