"use client";

import React, { useState } from "react";
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

  return (
    <div className={`admin-shell ${sidebarCollapsed ? "is-collapsed" : ""}`}>
      <div className="admin-shell__sidebar">{enhancedSidebar}</div>

      <div className="admin-shell__main">
        <header className="admin-shell__navbar">{enhancedNavbar}</header>
        <main className="admin-shell__content">{children}</main>
        <footer className="admin-shell__footer">{footer}</footer>
      </div>
    </div>
  );
}
