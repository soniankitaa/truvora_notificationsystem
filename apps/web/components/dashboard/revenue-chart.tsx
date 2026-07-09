"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import GlassCard from "@/components/common/glass-card";
import SectionTitle from "@/components/common/section-title";

const data = [
  { month: "Jan", revenue: 180000 },
  { month: "Feb", revenue: 220000 },
  { month: "Mar", revenue: 260000 },
  { month: "Apr", revenue: 300000 },
  { month: "May", revenue: 350000 },
  { month: "Jun", revenue: 420000 },
  { month: "Jul", revenue: 460000 },
  { month: "Aug", revenue: 520000 },
  { month: "Sep", revenue: 610000 },
  { month: "Oct", revenue: 720000 },
  { month: "Nov", revenue: 810000 },
  { month: "Dec", revenue: 920000 },
];

export default function RevenueChart() {
  return (
    <GlassCard className="p-6">

      <SectionTitle
        title="Revenue Analytics"
        subtitle="Monthly revenue performance"
      />

      <div className="mt-6 h-[360px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="revenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#6366F1"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#6366F1"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#6366F1"
              strokeWidth={3}
              fill="url(#revenue)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </GlassCard>
  );
}