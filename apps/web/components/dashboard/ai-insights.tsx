"use client";

import { Brain, TrendingUp, AlertTriangle, Sparkles } from "lucide-react";

import GlassCard from "@/components/common/glass-card";
import SectionTitle from "@/components/common/section-title";

const insights = [
  {
    icon: TrendingUp,
    title: "Revenue Forecast",
    text: "Revenue is projected to grow by 18% next month.",
    color: "text-emerald-500",
  },
  {
    icon: AlertTriangle,
    title: "Risk Alert",
    text: "12 enterprise clients haven't been contacted in 14 days.",
    color: "text-amber-500",
  },
  {
    icon: Brain,
    title: "AI Recommendation",
    text: "Prioritize Healthcare leads. Conversion probability is 91%.",
    color: "text-indigo-500",
  },
];
export default function AIInsights() {
  return (
    <GlassCard className="p-6">

      <SectionTitle
        title="AI Copilot"
        subtitle="Business intelligence powered by AI"
      />

      <div className="mt-6 space-y-4">

        {insights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border p-4 transition hover:bg-muted/40"
          >

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-primary/10 p-3">
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>

              <div>

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {item.text}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

      <div className="mt-6 rounded-2xl bg-primary p-4 text-primary-foreground">

        <div className="flex items-center gap-3">

          <Sparkles className="h-5 w-5" />

          <div>

            <p className="font-semibold">
              AI Confidence Score
            </p>

            <p className="text-sm opacity-80">
              97.8% prediction accuracy
            </p>

          </div>

        </div>

      </div>

    </GlassCard>
  );
}