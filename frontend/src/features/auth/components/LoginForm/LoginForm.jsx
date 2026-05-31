"use client";

import { useLogin } from "@/features/auth/hooks/useLogin";

export default function LoginForm() {
  const { error, loading, handleSubmit } = useLogin();

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <header className="login-header">
          <h1 id="login-title" className="login-title">Log in</h1>
          <p className="login-subtitle">Welcome back. Please enter your details.</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && (
            <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, padding: "10px 14px", color: "#DC2626", fontSize: 14 }}>
              {error}
            </div>
          )}

          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" required minLength={6} />
          </div>

          <div className="login-row">
            <label className="remember">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>
            <a className="login-link" href="/forgot-password">Forgot password?</a>
          </div>

          <button className="login-button" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </button>

          <p className="login-footer">
            Don&apos;t have an account?{" "}
            <a className="login-link" href="/register">Sign up</a>
          </p>
        </form>
      </section>
    </main>
  );
}
