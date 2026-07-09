import {
  LayoutDashboard,
  Users,
  Briefcase,
  Bot,
  Bell,
  BarChart3,
  CalendarDays,
  MessageSquare,
  Shield,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "CRM",
    href: "/crm",
    icon: Users,
  },
  {
    title: "Deals",
    href: "/deals",
    icon: Briefcase,
  },
  {
    title: "AI Agents",
    href: "/ai",
    icon: Bot,
    badge: "AI",
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: CalendarDays,
  },
  {
    title: "Messages",
    href: "/messages",
    icon: MessageSquare,
  },
  {
    title: "Admin",
    href: "/admin",
    icon: Shield,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "CRM",
    href: "/dashboard/crm",
    icon: Users,
},
];
