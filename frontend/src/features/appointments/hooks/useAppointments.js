"use client";

import { useState, useCallback } from "react";
import { appointmentsService } from "@/features/appointments/services/appointmentsService";

/**
 * Manages the full appointment list for admin pages.
 * Returns data, loading flag, and a reload function.
 */
export function useAppointments(onError) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await appointmentsService.getAll();
      setAppointments(data);
    } catch {
      onError?.({ type: "error", title: "Failed to load appointments" });
    } finally {
      setLoading(false);
    }
  }, [onError]);

  return { appointments, loading, reload: load };
}

/**
 * Manages appointments for a specific doctor (admin detail page).
 */
export function useDoctorAppointments(doctorId, onError) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    if (!doctorId) return;
    setLoading(true);
    try {
      const data = await appointmentsService.getByDoctor(doctorId);
      setAppointments(data);
    } catch {
      onError?.({ type: "error", title: "Failed to load appointments" });
    } finally {
      setLoading(false);
    }
  }, [doctorId, onError]);

  return { appointments, loading, reload: load };
}
