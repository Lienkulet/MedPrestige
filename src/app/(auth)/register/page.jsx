"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";
import "../login/Login.css";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);

  function handleField(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.password !== form.confirm) {
      toast.error("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Name: form.name, Email: form.email, Phone: form.phone, Password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Registration failed.");
        return;
      }
      login(data.token, data.user);
      toast.success("Account created! Welcome.");
      router.push("/");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="register-title">
        <header className="login-header">
          <h1 id="register-title" className="login-title">Create account</h1>
          <p className="login-subtitle">Sign up to book and manage your appointments.</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" placeholder="John Smith"
              value={form.name} onChange={handleField} required />
          </div>

          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com"
              value={form.email} onChange={handleField} required />
          </div>

          <div className="login-field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="+1 555 0100"
              value={form.phone} onChange={handleField} />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••"
              value={form.password} onChange={handleField} required minLength={6} />
          </div>

          <div className="login-field">
            <label htmlFor="confirm">Confirm password</label>
            <input id="confirm" name="confirm" type="password" placeholder="••••••••"
              value={form.confirm} onChange={handleField} required minLength={6} />
          </div>

          <button className="login-button" type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </button>

          <p className="login-footer">
            Already have an account?{" "}
            <a className="login-link" href="/login">Log in</a>
          </p>
        </form>
      </section>
    </main>
  );
}
