"use client";

import GlassCard from "@/components/common/glass-card";
import StatusBadge from "@/components/common/status-badge";

export default function RevenueSummary() {
  return (
    <GlassCard className="p-6">
      <h2 className="text-xl font-semibold">
        Revenue Summary
      </h2>

      <div className="mt-8 space-y-8">

        <div>
          <p className="text-sm text-muted-foreground">
            Total Revenue
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            ₹24.5M
          </h3>
        </div>

        <div>
          <StatusBadge
            value="+18.4%"
            positive
          />

          <p className="mt-2 text-sm text-muted-foreground">
            Compared to last month
          </p>
        </div>

        <div className="space-y-4">

          <div className="flex items-center justify-between">
            <span>Subscriptions</span>
            <span className="font-semibold">
              ₹14.2M
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span>Enterprise</span>
            <span className="font-semibold">
              ₹6.1M
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span>AI Services</span>
            <span className="font-semibold">
              ₹4.2M
            </span>
          </div>

        </div>

      </div>
    </GlassCard>
  );
}