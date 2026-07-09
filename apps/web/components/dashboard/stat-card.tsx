import { ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="group rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
          <ArrowUpRight className="h-3 w-3" />
          {change}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold tracking-tight">
        {value}
      </h2>
    </div>
  );
}