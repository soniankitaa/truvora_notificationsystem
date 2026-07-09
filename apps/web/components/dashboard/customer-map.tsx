"use client";

const regions = [
  { name: "North America", customers: 4580, percentage: 42 },
  { name: "Europe", customers: 3210, percentage: 30 },
  { name: "Asia", customers: 2150, percentage: 20 },
  { name: "Australia", customers: 640, percentage: 6 },
  { name: "Africa", customers: 180, percentage: 2 },
];

export default function CustomerMap() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <h2 className="mb-1 text-xl font-bold">
        Customer Distribution
      </h2>

      <p className="mb-6 text-sm text-muted-foreground">
        Active customers by region
      </p>

      <div className="space-y-5">

        {regions.map((region) => (

          <div key={region.name}>

            <div className="mb-2 flex justify-between">

              <span>{region.name}</span>

              <span className="font-semibold">
                {region.customers.toLocaleString()}
              </span>

            </div>

            <div className="h-3 rounded-full bg-muted">

              <div
                className="h-full rounded-full bg-primary"
                style={{
                  width: `${region.percentage}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}