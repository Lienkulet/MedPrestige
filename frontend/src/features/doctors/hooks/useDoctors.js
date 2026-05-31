"use client";

import { useState, useCallback } from "react";
import { doctorsService } from "@/features/doctors/services/doctorsService";

/**
 * Manages the full doctor list for admin pages.
 * Returns data, loading flag, and a reload function.
 */
export function useDoctors(onError) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await doctorsService.getAll();
      setDoctors(data);
    } catch {
      onError?.({ type: "error", title: "Failed to load doctors" });
    } finally {
      setLoading(false);
    }
  }, [onError]);

  return { doctors, loading, reload: load };
}

/**
 * Fetches a single doctor by ID (admin detail page).
 */
export function useDoctor(doctorId, onError) {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    if (!doctorId) return;
    setLoading(true);
    try {
      const data = await doctorsService.getById(doctorId);
      setDoctor(data);
    } catch {
      onError?.({ type: "error", title: "Failed to load doctor" });
    } finally {
      setLoading(false);
    }
  }, [doctorId, onError]);

  return { doctor, loading, reload: load, setDoctor };
}
