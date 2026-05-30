"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./admin-sidebar.css";
import LogoIcon from "../Icons/LogoIcon";

const nav = [
  { href: "/admin", label: "Dashboard", icon: "🏠" },
  { href: "/admin/doctors", label: "Doctors", icon: "🩺" },
  { href: "/admin/services", label: "Services", icon: "🧾" },
  { href: "/admin/appointments", label: "Appointments", icon: "📅" },
  { href: "/admin/settings", label: "Settings", icon: "⚙️" },
];

export default function AdminSidebar({ collapsed, mobileOpen, onCloseMobile }) {
  const pathname = usePathname();

  return (
    <aside className={`admin-sidebar ${mobileOpen ? "is-mobile-open" : ""} ${collapsed ? "is-collapsed" : ""}`}>
      <div className="admin-sidebar__top">
        <div className="admin-sidebar__brand">
          <LogoIcon />
          {!collapsed && <div className="admin-sidebar__name">MedPrestige Admin</div>}
        </div>

        <button className="admin-sidebar__close" onClick={onCloseMobile} aria-label="Close menu">
          ✕
        </button>
      </div>

      <nav className="admin-sidebar__nav">
        {nav.map((item) => {
          const active = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`admin-sidebar__link ${active ? "is-active" : ""}`}
              onClick={onCloseMobile}
            >
              <span className="admin-sidebar__icon" aria-hidden="true">{item.icon}</span>
              {!collapsed && <span className="admin-sidebar__label">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="admin-sidebar__hint">
          <div className="admin-sidebar__hintTitle">Tip</div>
          <div className="admin-sidebar__hintText">
            Use Doctors & Services to keep your public site updated.
          </div>
        </div>
      )}
    </aside>
  );
}
