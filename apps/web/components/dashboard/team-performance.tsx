import { Progress } from "@/components/ui/progress";

const members = [
  {
    name: "Sarah Johnson",
    role: "Sales",
    score: 92,
  },
  {
    name: "David Smith",
    role: "Marketing",
    score: 84,
  },
  {
    name: "Emily Brown",
    role: "Support",
    score: 77,
  },
  {
    name: "Michael Lee",
    role: "Success",
    score: 69,
  },
];

export function TeamPerformance() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <h2 className="mb-1 text-xl font-semibold">
        Team Performance
      </h2>

      <p className="mb-6 text-sm text-muted-foreground">
        Productivity overview
      </p>

      <div className="space-y-6">
        {members.map((member) => (
          <div key={member.name}>
            <div className="mb-2 flex justify-between">
              <div>
                <p className="font-medium">
                  {member.name}
                </p>

                <p className="text-xs text-muted-foreground">
                  {member.role}
                </p>
              </div>

              <span className="font-semibold">
                {member.score}%
              </span>
            </div>

            <Progress value={member.score} />
          </div>
        ))}
      </div>
    </div>
  );
}