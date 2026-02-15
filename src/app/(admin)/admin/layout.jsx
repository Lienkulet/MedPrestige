import "./admin.css";

import AdminShell from "@/components/admin/AdminShell";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminFooter from "@/components/admin/AdminFooter";
import ToastProvider from "@/components/admin/ToastProvider";

export const metadata = {
  title: "Dashboard",
  description: "Admin dashboard for clinic management",
};

export default function AdminLayout({ children }) {
  return (
    <div className="admin-body">
      <ToastProvider>
        <AdminShell
          navbar={<AdminNavbar />}
          sidebar={<AdminSidebar />}
          footer={<AdminFooter />}
        >
          {children}
        </AdminShell>
      </ToastProvider>
    </div>
  );
}
