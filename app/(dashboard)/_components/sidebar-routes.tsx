"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const educatorRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/educator/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/educator/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const isEducatorPage = pathname?.includes("/educator");

  const routes = isEducatorPage ? educatorRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
