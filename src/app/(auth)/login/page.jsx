"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./Login.css";

export default function LoginPage() {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    // UI-only: later you’ll validate credentials + set auth/session
    router.push("/admin");
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <header className="login-header">
          <h1 id="login-title" className="login-title">Log in</h1>
          <p className="login-subtitle">
            Welcome back. Please enter your details.
          </p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
              minLength={6}
            />
          </div>

          <div className="login-row">
            <label className="remember">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>

            <a className="login-link" href="/forgot-password">
              Forgot password?
            </a>
          </div>

          <button className="login-button" type="submit">
            Log in
          </button>

          <p className="login-footer">
            Don’t have an account?{" "}
            <a className="login-link" href="/register">
              Sign up
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}
