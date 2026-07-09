"use client";

import * as React from "react";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Navbar } from "./navbar";
import { AppSidebar } from "./app-sidebar";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({
  children,
}: AppShellProps) {
  return (
    <SidebarProvider
      defaultOpen={true}
    >
      <AppSidebar />

      <SidebarInset>

        <div className="flex min-h-screen flex-col bg-background">

          {/* Top Navigation */}

          <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">

            <div className="flex h-16 items-center gap-4 px-6">

              <SidebarTrigger />

              <div className="flex-1">
                <Navbar />
              </div>

            </div>

          </header>

          {/* Page */}

          <main className="flex-1 overflow-y-auto overflow-x-hidden">
           <div className="mx-auto w-full max-w-[1600px] p-6">

              {children}

            </div>

          </main>

        </div>

      </SidebarInset>

    </SidebarProvider>
  );
}