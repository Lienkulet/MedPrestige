"use client";

import React, { useEffect, useState } from "react";
import "./admin-shell.css";

export default function AdminShell({ navbar, sidebar, footer, children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const enhancedNavbar = React.cloneElement(navbar, {
    onToggleSidebar: () => setSidebarCollapsed((v) => !v),
    onOpenMobileSidebar: () => setMobileSidebarOpen(true),
  });

  const enhancedSidebar = React.cloneElement(sidebar, {
    collapsed: sidebarCollapsed,
    mobileOpen: mobileSidebarOpen,
    onCloseMobile: () => setMobileSidebarOpen(false),
  });

  // optional: prevent background scrolling when sidebar open
  useEffect(() => {
    document.body.style.overflow = mobileSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileSidebarOpen]);

  return (
    <div className={`admin-shell ${sidebarCollapsed ? "is-collapsed" : ""}`}>
      {/* Sidebar overlay wrapper (click outside closes on mobile) */}
      <div
        className={`admin-shell__sidebar ${mobileSidebarOpen ? "is-mobile-open" : ""}`}
        onClick={() => setMobileSidebarOpen(false)}
      >
        {/* prevent closing when clicking inside sidebar */}
        <div onClick={(e) => e.stopPropagation()}>
          {enhancedSidebar}
        </div>
      </div>

      <div className="admin-shell__main">
        <header className="admin-shell__navbar">{enhancedNavbar}</header>
        <main className="admin-shell__content">{children}</main>
        <footer className="admin-shell__footer">{footer}</footer>
      </div>
    </div>
  );
}
