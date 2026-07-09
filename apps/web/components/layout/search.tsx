"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <div className="relative hidden w-full max-w-md lg:flex">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        placeholder="Search contacts, deals, companies..."
        className="pl-10"
      />

      <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border bg-muted px-2 py-0.5 text-[10px]">
        Ctrl K
      </kbd>
    </div>
  );
}