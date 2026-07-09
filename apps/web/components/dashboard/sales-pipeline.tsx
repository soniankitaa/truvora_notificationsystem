"use client";

import GlassCard from "@/components/common/glass-card";
import SectionTitle from "@/components/common/section-title";
import DealCard from "./deal-card";

import { pipeline } from "@/lib/data/pipeline-data";

export default function SalesPipeline() {
  return (
    <GlassCard className="p-6 overflow-hidden"> 
      <SectionTitle
        title="Sales Pipeline"
        subtitle="Live enterprise opportunities"
      />

      {/* Horizontal Scroll */}
      <div className="mt-6 w-full overflow-x-auto">
        <div className="flex gap-6 min-w-max">
          {pipeline.map((column) => (
            <div
              key={column.stage}
              className="w-[280px] flex-shrink-0"
            >
              <h3 className="mb-4 rounded-lg bg-muted py-3 text-center text-sm font-bold uppercase tracking-wide">
                {column.stage}
              </h3>

              <div className="space-y-4">
                {column.deals.map((deal) => (
                  <DealCard
                    key={deal.company}
                    company={deal.company}
                    value={deal.value}
                    owner={deal.owner}
                    priority={deal.priority}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}