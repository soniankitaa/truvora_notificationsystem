"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">

        <span className="text-xl font-bold">
          T
        </span>

      </div>

      <div className="flex flex-col leading-none">

        <span className="text-lg font-bold">
          Truvora
        </span>

        <span className="text-xs text-muted-foreground">
          Enterprise CRM
        </span>

      </div>

    </Link>
  );
}