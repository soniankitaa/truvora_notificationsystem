"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border",
        "border-white/10",
        "bg-white/70 dark:bg-neutral-900/60",
        "backdrop-blur-xl",
        "shadow-xl",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}