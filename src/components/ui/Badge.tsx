import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

export const Badge = ({
  children,
  className,
  style
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => (
  <span
    className={cn(
      "inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700",
      className
    )}
    style={style}
  >
    {children}
  </span>
);
