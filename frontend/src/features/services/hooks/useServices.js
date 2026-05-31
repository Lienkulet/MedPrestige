"use client";

import { useState, useCallback } from "react";
import { medicalServicesService } from "@/features/services/services/medicalServicesService";

/**
 * Manages the admin medical services list.
 * Returns data, loading flag, and a reload function.
 */
export function useServices(onError) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await medicalServicesService.getAll();
      setServices(data);
    } catch {
      onError?.({ type: "error", title: "Failed to load services" });
    } finally {
      setLoading(false);
    }
  }, [onError]);

  return { services, loading, reload: load };
}
