"use client";

import {
  DollarSign,
  Users,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

import KPICard from "./kpi-card";

export default function KPIGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <KPICard
        title="Revenue"
        value={845000}
        change="+18.2%"
        icon={<DollarSign className="h-7 w-7" />}
      />

      <KPICard
        title="Customers"
        value={12486}
        change="+6.1%"
        icon={<Users className="h-7 w-7" />}
      />

      <KPICard
        title="Pipeline"
        value={2400000}
        change="+12.9%"
        icon={<BriefcaseBusiness className="h-7 w-7" />}
      />

      <KPICard
        title="AI Score"
        value={98}
        change="+3%"
        icon={<Sparkles className="h-7 w-7" />}
      />

    </div>
  );
}