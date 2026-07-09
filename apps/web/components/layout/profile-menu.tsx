"use client";

import { User, Settings, LogOut, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ProfileMenu() {
  return (
    <DropdownMenu>

      <DropdownMenuTrigger
        className="flex items-center gap-3 rounded-xl border bg-background px-3 py-2 hover:bg-muted transition"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
          A
        </div>

        <div className="hidden text-left md:block">
          <p className="text-sm font-semibold">
            Ankita
          </p>

          <p className="text-xs text-muted-foreground">
            Enterprise Admin
          </p>
        </div>

        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>

     <DropdownMenuContent>

    <DropdownMenuGroup>

        <DropdownMenuLabel>
            My Account
        </DropdownMenuLabel>

        <DropdownMenuItem>
            Profile
        </DropdownMenuItem>

        <DropdownMenuItem>
            Settings
        </DropdownMenuItem>

    </DropdownMenuGroup>

    <DropdownMenuSeparator />

    <DropdownMenuItem>
        Logout
    </DropdownMenuItem>

</DropdownMenuContent>

    </DropdownMenu>
  );
}