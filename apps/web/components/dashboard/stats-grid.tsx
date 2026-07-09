"use client";

import {
  DollarSign,
  Users,
  Target,
  Brain,
} from "lucide-react";

import KPICard from "./kpi-card";

export function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <KPICard
        title="Revenue"
        value={2450000}
        prefix="₹"
        change="+18%"
        icon={<DollarSign className="h-7 w-7 text-primary" />}
      />

      <KPICard
        title="Customers"
        value={1342}
        change="+7%"
        icon={<Users className="h-7 w-7 text-primary" />}
      />

      <KPICard
        title="Leads"
        value={421}
        change="+31%"
        icon={<Target className="h-7 w-7 text-primary" />}
      />

      <KPICard
        title="AI Health"
        value={97}
        suffix="%"
        change="Excellent"
        icon={<Brain className="h-7 w-7 text-primary" />}
      />

    </div>
  );
}