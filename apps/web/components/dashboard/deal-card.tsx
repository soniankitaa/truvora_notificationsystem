"use client";

import GlassCard from "@/components/common/glass-card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface DealCardProps {
  company: string;
  value: string;
  owner: string;
  priority: string;
}

export default function DealCard({
  company,
  value,
  owner,
  priority,
}: DealCardProps) {
  return (
    <GlassCard className="w-full rounded-xl p-4 transition hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <h3 className="font-semibold">
          {company}
        </h3>

        <Badge className="capitalize">
          {priority}
        </Badge>

      </div>

      <p className="mt-3 text-xl font-bold"> 
        {value}
      </p>

      <div className="mt-4 flex items-center gap-3">

        <Avatar className="h-8 w-8">

          <AvatarFallback>
            {owner[0]}
          </AvatarFallback>

        </Avatar>

        <span className="text-sm">
          {owner}
        </span>

      </div>

    </GlassCard>
  );
}