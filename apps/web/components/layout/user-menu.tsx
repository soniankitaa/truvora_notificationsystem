"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

import {
  LogOut,
  Settings,
  User,
} from "lucide-react";

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>

        <button className="rounded-full outline-none ring-offset-background transition focus:ring-2 focus:ring-ring">
          <Avatar>

            <AvatarFallback>
              A
            </AvatarFallback>

          </Avatar>
        </button>

      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56"
      >
        <div className="px-3 py-2">

          <p className="font-semibold">
            Ankita
          </p>

          <p className="text-sm text-muted-foreground">
            Administrator
          </p>

        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem>

          <User className="mr-2 h-4 w-4" />

          Profile

        </DropdownMenuItem>

        <DropdownMenuItem>

          <Settings className="mr-2 h-4 w-4" />

          Settings

        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>

          <LogOut className="mr-2 h-4 w-4" />

          Logout

        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}