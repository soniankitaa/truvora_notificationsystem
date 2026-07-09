import Link from "next/link";

import PageTitle from "@/components/common/page-title";

import { StatsGrid } from "@/components/dashboard/stats-grid";
import RevenueChart from "@/components/dashboard/revenue-chart";
import RevenueSummary from "@/components/dashboard/revenue-summary";
import AIInsights from "@/components/dashboard/ai-insights";
import SalesPipeline from "@/components/dashboard/sales-pipeline";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <PageTitle
        title="Enterprise Dashboard"
        description="Welcome back, User."
      />

      {/* Demo Banner */}

      <Link href="/demo">

        <div className="group cursor-pointer overflow-hidden rounded-2xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                Live Demo
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Test the Complete Notification Pipeline
              </h2>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                Simulate real CRM events, automatically generate
                notifications, verify tenant isolation and watch the
                notification bell update exactly as described in the
                challenge.
              </p>

            </div>

            <div>

              <div className="rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white transition group-hover:scale-105 dark:bg-white dark:text-black">

                Launch Demo →

              </div>

            </div>

          </div>

        </div>

      </Link>

      <StatsGrid />

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="space-y-6 xl:col-span-2">

          <RevenueChart />

          <RevenueSummary />

        </div>

        <AIInsights />

      </div>

      <SalesPipeline />

    </div>
  );
}