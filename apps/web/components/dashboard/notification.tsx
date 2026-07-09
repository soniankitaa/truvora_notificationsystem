import { Bell } from "lucide-react";

const notifications = [
  "AI Agent completed 42 follow-ups.",
  "New customer signed today.",
  "Quarterly report generated.",
  "Automation workflow executed successfully.",
];

export function Notifications() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">
        Notifications
      </h2>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification}
            className="flex gap-3 rounded-xl border p-4"
          >
            <Bell className="mt-1 h-5 w-5 text-primary" />

            <p className="text-sm">
              {notification}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}