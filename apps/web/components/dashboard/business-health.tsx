"use client";

export default function BusinessHealth() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Business Health
      </h2>

      <p className="mt-1 text-sm text-muted-foreground">
        AI calculated organization score
      </p>

      <div className="mt-8 flex items-center justify-center">

        <div className="flex h-52 w-52 items-center justify-center rounded-full border-8 border-green-500">

          <div className="text-center">

            <h1 className="text-6xl font-bold">

              96

            </h1>

            <p className="text-muted-foreground">

              Excellent

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}