"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { navigation } from "@/constants/navigation";
import { Logo } from "./logo";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>

      <SidebarHeader className="border-b p-4">
        <Logo />
      </SidebarHeader>

      <SidebarContent>

        <SidebarMenu>

          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <SidebarMenuItem key={item.href}>

                <SidebarMenuButton
                  isActive={active}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3"
                  >
                    <item.icon className="h-5 w-5" />

                    <span>{item.title}</span>

                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className="ml-auto"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Link>

                </SidebarMenuButton>

              </SidebarMenuItem>
            );
          })}

        </SidebarMenu>

      </SidebarContent>

      <SidebarFooter className="border-t p-4">

        <div className="flex items-center gap-3">

          <Avatar>
            <AvatarFallback>A</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">

            <span className="font-medium">
              Ankita
            </span>

            <span className="text-xs text-muted-foreground">
              Enterprise Admin
            </span>

          </div>

        </div>

      </SidebarFooter>

    </Sidebar>
  );
}