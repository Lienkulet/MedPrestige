"use client";

import { useState, useEffect, useMemo } from "react";
import { doctorsService } from "@/features/doctors/services/doctorsService";
import { medicalServicesService } from "@/features/services/services/medicalServicesService";
import { appointmentsService } from "@/features/appointments/services/appointmentsService";

/**
 * Loads and derives all data needed by the admin overview dashboard.
 */
export function useAdminDashboard() {
  const [doctors, setDoctors]           = useState([]);
  const [services, setServices]         = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading]           = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [d, s, a] = await Promise.all([
          doctorsService.getAll(),
          medicalServicesService.getAll(),
          appointmentsService.getAll(),
        ]);
        setDoctors(d);
        setServices(s);
        setAppointments(a);
      } catch { /* silently fail — each section shows its own empty state */ }
      finally { setLoading(false); }
    }
    load();
  }, []);

  const now        = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayEnd   = new Date(todayStart.getTime() + 86_400_000);
  const weekEnd    = new Date(todayStart.getTime() + 7 * 86_400_000);

  const derived = useMemo(() => {
    const todayAppts = appointments.filter(a => {
      const d = new Date(a.StartAt);
      return d >= todayStart && d < todayEnd;
    }).length;

    const upcomingWeek = appointments.filter(a => {
      const d = new Date(a.StartAt);
      return d >= now && d < weekEnd && a.Status === "Confirmed";
    }).length;

    const recentAppts = [...appointments]
      .sort((a, b) => new Date(b.StartAt) - new Date(a.StartAt))
      .slice(0, 10);

    const topDoctors = doctors
      .map(d => ({
        name:  d.Name,
        count: appointments.filter(a => a.DoctorId === d.DoctorId).length,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    const maxCount = topDoctors[0]?.count ?? 1;

    const statusBreakdown = ["Confirmed", "Pending", "Completed", "Cancelled"].map(s => ({
      status: s,
      count:  appointments.filter(a => a.Status === s).length,
    }));

    return { todayAppts, upcomingWeek, recentAppts, topDoctors, maxCount, statusBreakdown };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointments, doctors]);

  return {
    loading,
    doctors,
    services,
    appointments,
    now,
    ...derived,
  };
}
