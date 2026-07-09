"use client";

import {
  Plus,
  Users,
  Brain,
  Mail,
} from "lucide-react";

const actions = [
  {
    title: "New Lead",
    icon: Plus,
  },
  {
    title: "Customers",
    icon: Users,
  },
  {
    title: "AI Copilot",
    icon: Brain,
  },
  {
    title: "Campaign",
    icon: Mail,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <button
              key={action.title}
              className="rounded-2xl border p-5 transition hover:bg-primary hover:text-primary-foreground"
            >

              <Icon className="mx-auto mb-3 h-6 w-6" />

              <p className="text-sm font-medium">
                {action.title}
              </p>

            </button>

          );

        })}

      </div>

    </div>
  );
}