"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { authService } from "@/features/auth/services/authService";

/**
 * Encapsulates the registration form state and submission logic.
 */
export function useRegister() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.target);

    if (fd.get("password") !== fd.get("confirmPassword")) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const { token, user } = await authService.register({
        name:     fd.get("name"),
        email:    fd.get("email"),
        phone:    fd.get("phone"),
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
