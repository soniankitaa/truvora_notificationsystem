"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  LayoutDashboard,
  Users,
  Bell,
  Settings,
  Bot,
} from "lucide-react";

export function SearchCommand() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function down(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    }

    document.addEventListener("keydown", down);

    return () =>
      document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-10 w-80 items-center justify-between rounded-xl border bg-background px-4 text-sm text-muted-foreground"
      >
        <span>Search anything…</span>

        <kbd className="rounded border px-2 py-0.5 text-xs">
          Ctrl K
        </kbd>
      </button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Search in Truvora..." />

        <CommandList>

          <CommandEmpty>
            No results found.
          </CommandEmpty>

          <CommandGroup heading="Navigation">

            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </CommandItem>

            <CommandItem>
              <Users className="mr-2 h-4 w-4" />
              CRM
            </CommandItem>

            <CommandItem>
              <Bot className="mr-2 h-4 w-4" />
              AI Agents
            </CommandItem>

            <CommandItem>
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </CommandItem>

            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </CommandItem>

          </CommandGroup>

        </CommandList>

      </CommandDialog>
    </>
  );
}