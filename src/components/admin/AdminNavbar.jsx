"use client";

import Link from "next/link";
import "./admin-navbar.css";
import { useToast } from "./ToastProvider";

export default function AdminNavbar({ onToggleSidebar, onOpenMobileSidebar }) {
  const { pushToast } = useToast();

  function handleLogout() {
    // UI-only: later you’ll clear auth cookies/session here
    pushToast({ type: "success", title: "Logged out", message: "Redirecting to website..." });
    window.location.href = "/";
  }

  return (
    <div className="admin-navbar">
      <button className="admin-navbar__burger" onClick={onOpenMobileSidebar} aria-label="Open menu">
        ☰
      </button>

      <button className="admin-navbar__collapse" onClick={onToggleSidebar} aria-label="Toggle sidebar">
        ⫶
      </button>

      <div className="admin-navbar__title">
        <span className="admin-navbar__badge">Admin</span>
        <span>Clinic Dashboard</span>
      </div>

      <div className="admin-navbar__actions">
        <Link className="admin-navbar__link" href="/">
          Back to website
        </Link>

        <button className="admin-navbar__btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
