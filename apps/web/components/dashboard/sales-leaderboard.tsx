"use client";

const sales = [
  {
    name: "Sarah Wilson",
    revenue: "$245K",
  },
  {
    name: "James Miller",
    revenue: "$210K",
  },
  {
    name: "Sophia Brown",
    revenue: "$198K",
  },
  {
    name: "David Clark",
    revenue: "$174K",
  },
];

export default function SalesLeaderboard() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Top Sales Team
      </h2>

      <div className="space-y-4">

        {sales.map((person, index) => (

          <div
            key={person.name}
            className="flex items-center justify-between rounded-xl border p-4"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">

                {index + 1}

              </div>

              <span className="font-medium">

                {person.name}

              </span>

            </div>

            <span className="font-bold">

              {person.revenue}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}