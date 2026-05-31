"use client";

import {
  StethoscopeIcon,
  ClipboardListIcon,
  CalendarDaysIcon,
  CalendarCheckIcon,
} from "lucide-react";

import { useAdminDashboard }       from "@/features/admin/hooks/useAdminDashboard";
import KpiCard                     from "@/features/admin/components/KpiCard";
import StatusBreakdown             from "@/features/admin/components/StatusBreakdown";
import TopDoctors                  from "@/features/admin/components/TopDoctors";
import RecentAppointmentsTable     from "@/features/admin/components/RecentAppointmentsTable";

export default function AdminDashboardPage() {
  const {
    loading,
    doctors,
    services,
    now,
    todayAppts,
    upcomingWeek,
    recentAppts,
    topDoctors,
    maxCount,
    statusBreakdown,
  } = useAdminDashboard();

  return (
    <div className="flex flex-col gap-6 font-sans">

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-[#102D47] m-0">Welcome back, Admin 👋</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Here&apos;s what&apos;s happening at your clinic today.
          </p>
        </div>
        <div className="bg-accent text-primary rounded-lg px-4 py-2 text-xs font-semibold whitespace-nowrap self-start sm:self-auto">
          {now.toLocaleDateString("ro-RO", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard icon={StethoscopeIcon}   label="Total Doctors"        value={doctors.length}  loading={loading} />
        <KpiCard icon={ClipboardListIcon} label="Total Services"       value={services.length} loading={loading} />
        <KpiCard icon={CalendarDaysIcon}  label="Today's Appointments" value={todayAppts}      loading={loading} />
        <KpiCard icon={CalendarCheckIcon} label="Confirmed This Week"  value={upcomingWeek}    loading={loading} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatusBreakdown statusBreakdown={statusBreakdown} loading={loading} />
        <TopDoctors      topDoctors={topDoctors}           maxCount={maxCount} loading={loading} />
      </div>

      <RecentAppointmentsTable appointments={recentAppts} loading={loading} />

    </div>
  );
}
