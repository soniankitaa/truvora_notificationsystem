"use client";

const activity = [
  "Sarah Wilson closed a $45K deal",
  "AI generated 15 new leads",
  "Marketing campaign reached 12K users",
  "Customer support resolved 43 tickets",
  "Revenue crossed $845K",
];

export default function ActivityFeed() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activity.map((item, index) => (

          <div
            key={index}
            className="flex items-start gap-4"
          >

            <div className="mt-2 h-3 w-3 rounded-full bg-primary" />

            <p className="text-sm">
              {item}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}