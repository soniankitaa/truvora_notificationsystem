"use client";

const stages = [
  {
    stage: "Leads",
    value: 580,
    width: "100%",
  },
  {
    stage: "Qualified",
    value: 420,
    width: "78%",
  },
  {
    stage: "Proposal",
    value: 250,
    width: "58%",
  },
  {
    stage: "Negotiation",
    value: 120,
    width: "36%",
  },
  {
    stage: "Won",
    value: 74,
    width: "22%",
  },
];

export default function SalesFunnel() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Sales Funnel
      </h2>

      <div className="space-y-5">

        {stages.map((stage) => (

          <div key={stage.stage}>

            <div className="mb-2 flex justify-between">

              <span className="font-medium">
                {stage.stage}
              </span>

              <span className="text-muted-foreground">
                {stage.value}
              </span>

            </div>

            <div className="h-3 rounded-full bg-muted">

              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{
                  width: stage.width,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}