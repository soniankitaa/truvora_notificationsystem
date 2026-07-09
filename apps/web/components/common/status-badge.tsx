"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatusBadgeProps {
  value: string;
  positive?: boolean;
}

export default function StatusBadge({
  value,
  positive = true,
}: StatusBadgeProps) {
  return (
    <Badge
      className={
        positive
          ? "bg-emerald-500 hover:bg-emerald-500"
          : "bg-red-500 hover:bg-red-500"
      }
    >
      {positive ? (
        <ArrowUpRight className="mr-1 h-3 w-3" />
      ) : (
        <ArrowDownRight className="mr-1 h-3 w-3" />
      )}

      {value}
    </Badge>
  );
}