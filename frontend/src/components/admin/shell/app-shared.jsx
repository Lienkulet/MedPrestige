import {
  LayoutGridIcon,
  StethoscopeIcon,
  ClipboardListIcon,
  CalendarDaysIcon,
  SettingsIcon,
  HelpCircleIcon,
  ActivityIcon,
} from "lucide-react";

export function getNavGroups(pathname) {
  return [
    {
      items: [
        {
          title: "Dashboard",
          path: "/admin",
          icon: <LayoutGridIcon />,
          isActive: pathname === "/admin",
        },
      ],
    },
    {
      label: "Clinic",
      items: [
        {
          title: "Doctors",
          path: "/admin/doctors",
          icon: <StethoscopeIcon />,
          isActive: pathname?.startsWith("/admin/doctors"),
        },
        {
          title: "Services",
          path: "/admin/services",
          icon: <ClipboardListIcon />,
          isActive: pathname?.startsWith("/admin/services"),
        },
        {
          title: "Appointments",
          path: "/admin/appointments",
          icon: <CalendarDaysIcon />,
          isActive: pathname?.startsWith("/admin/appointments"),
        },
      ],
    },
    {
      label: "System",
      items: [
        {
          title: "Settings",
          path: "/admin/settings",
          icon: <SettingsIcon />,
          isActive: pathname?.startsWith("/admin/settings"),
        },
      ],
    },
  ];
}

export function getFooterNavLinks() {
  return [
    {
      title: "Help Center",
      path: "#/help",
      icon: <HelpCircleIcon />,
    },
    {
      title: "System Status",
      path: "#/status",
      icon: <ActivityIcon />,
    },
  ];
}

export function getNavLinks(pathname) {
  return [
    ...getNavGroups(pathname).flatMap((group) =>
      group.items.flatMap((item) =>
        item.subItems?.length ? [item, ...item.subItems] : [item]
      )
    ),
    ...getFooterNavLinks(),
  ];
}
