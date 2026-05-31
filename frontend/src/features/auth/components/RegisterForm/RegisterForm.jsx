"use client";

import { useRegister } from "@/features/auth/hooks/useRegister";

export default function RegisterForm() {
  const { error, loading, handleSubmit } = useRegister();

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="register-title">
        <header className="login-header">
          <h1 id="register-title" className="login-title">Create account</h1>
          <p className="login-subtitle">Fill in your details to get started.</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && (
            <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, padding: "10px 14px", color: "#DC2626", fontSize: 14 }}>
              {error}
            </div>
          )}

          <div className="login-field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" placeholder="John Doe" autoComplete="name" required />
          </div>

          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </div>

          <div className="login-field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="+40 700 000 000" autoComplete="tel" />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" required minLength={6} />
          </div>

          <div className="login-field">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" placeholder="••••••••" autoComplete="new-password" required minLength={6} />
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
