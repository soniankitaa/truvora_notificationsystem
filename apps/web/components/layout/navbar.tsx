"use client";

import { SearchCommand } from "./search-command";
import { ThemeToggle } from "./theme-toggle";
import { NotificationMenu } from "./notification-menu";
import { ProfileMenu } from "./profile-menu";

export function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">

      <SearchCommand />

      <div className="flex items-center gap-2">

        <ThemeToggle />

        <NotificationMenu />

        <ProfileMenu />

      </div>



    </header>
  );
}