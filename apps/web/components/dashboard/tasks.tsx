import { CalendarClock, CheckCircle2, Clock3 } from "lucide-react";

const tasks = [
  {
    title: "Follow up with Acme Technologies",
    priority: "High",
    due: "Today",
    icon: CalendarClock,
  },
  {
    title: "Review AI Lead Suggestions",
    priority: "Medium",
    due: "Tomorrow",
    icon: Clock3,
  },
  {
    title: "Monthly Revenue Meeting",
    priority: "Completed",
    due: "Yesterday",
    icon: CheckCircle2,
  },
];

export function Tasks() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <h2 className="mb-1 text-xl font-semibold">
        Upcoming Tasks
      </h2>

      <p className="mb-6 text-sm text-muted-foreground">
        Your highest priority work.
      </p>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-start gap-4 rounded-2xl border p-4 transition hover:bg-muted/30"
          >
            <div className="rounded-xl bg-primary/10 p-2">
              <task.icon className="h-5 w-5 text-primary" />
            </div>

            <div className="flex-1">
              <h3 className="font-medium">
                {task.title}
              </h3>

              <div className="mt-2 flex gap-2 text-xs">
                <span className="rounded-full bg-primary/10 px-3 py-1">
                  {task.priority}
                </span>

                <span className="rounded-full bg-muted px-3 py-1">
                  {task.due}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}