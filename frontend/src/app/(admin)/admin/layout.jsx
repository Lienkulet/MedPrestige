import { AppShell } from "@/components/admin/shell/app-shell";
import ToastProvider from "@/components/admin/ToastProvider";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Admin — MedPrestige",
  description: "Admin dashboard for clinic management",
};

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      <ToastProvider>
        <AppShell>{children}</AppShell>
      </ToastProvider>
    </AuthProvider>
  );
}
