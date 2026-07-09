import { Sparkles } from "lucide-react";

export function DashboardHeader() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <div className="flex flex-col gap-4 rounded-3xl border bg-card p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-4 w-4" />
          AI Powered CRM
        </div>

        <h1 className="text-4xl font-bold tracking-tight">
          {greeting}, Ankita 👋
        </h1>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          Welcome back to Truvora. Your business overview, customer
          engagement and AI insights are ready.
        </p>
      </div>

      <div className="rounded-2xl border bg-muted/40 px-6 py-5">
        <p className="text-sm text-muted-foreground">
          Business Health
        </p>

        <h2 className="mt-2 text-3xl font-bold text-green-600">
          96%
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Excellent Performance
        </p>
      </div>
    </div>
  );
}