"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import GlassCard from "@/components/common/glass-card";
import AnimatedNumber from "@/components/common/animated-number";
import StatusBadge from "@/components/common/status-badge";

interface KPICardProps {
  title: string;
  value: number;
  icon: ReactNode;
  prefix?: string;
  suffix?: string;
  change: string;
  positive?: boolean;
}

export default function KPICard({
  title,
  value,
  icon,
  prefix = "",
  suffix = "",
  change,
  positive = true,
}: KPICardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
    >
      <GlassCard className="p-6">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm text-muted-foreground">
              {title}
            </p>

            <h2 className="mt-3 text-3xl font-bold">

              <AnimatedNumber
                value={value}
                prefix={prefix}
                suffix={suffix}
              />

            </h2>

            <div className="mt-4">

              <StatusBadge
                value={change}
                positive={positive}
              />

            </div>

          </div>

          <div className="rounded-2xl bg-primary/10 p-4">

            {icon}

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}