"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoIcon from "../Icons/LogoIcon";
import "../admin/admin-sidebar.css";

const nav = [
  { href: "/doctor", label: "Dashboard", icon: "🏠" },
  { href: "/doctor/appointments", label: "My Appointments", icon: "📅" },
  { href: "/doctor/profile", label: "My Profile", icon: "👤" },
];

export default function DoctorSidebar({ collapsed, mobileOpen, onCloseMobile }) {
  const pathname = usePathname();

  return (
    <aside className={`admin-sidebar ${mobileOpen ? "is-mobile-open" : ""} ${collapsed ? "is-collapsed" : ""}`}>
      <div className="admin-sidebar__top">
        <div className="admin-sidebar__brand">
          <LogoIcon />
          {!collapsed && <div className="admin-sidebar__name">MedPrestige Doctor</div>}
        </div>
        <button className="admin-sidebar__close" onClick={onCloseMobile} aria-label="Close menu">✕</button>
      </div>

      <nav className="admin-sidebar__nav">
        {nav.map((item) => {
          const active = pathname === item.href || (item.href !== "/doctor" && pathname?.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href}
              className={`admin-sidebar__link ${active ? "is-active" : ""}`}
              onClick={onCloseMobile}>
              <span className="admin-sidebar__icon" aria-hidden="true">{item.icon}</span>
              {!collapsed && <span className="admin-sidebar__label">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
