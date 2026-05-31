"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { authService } from "@/features/auth/services/authService";

/**
 * Encapsulates the login form state and submission logic.
 * Returns form handlers and UI state for the LoginForm component.
 */
export function useLogin() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.target);

    setLoading(true);
    try {
      const { token, user } = await authService.login({
        email: fd.get("email"),
        password: fd.get("password"),
      });
      login(token, user);
      router.push("/admin");
    } catch (err) {
      setError(err.message || "Could not connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return { error, loading, handleSubmit };
}
