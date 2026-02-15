"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import "./toast.css";

const ToastContext = createContext(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function pushToast({ type = "info", title, message }) {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  }

  const value = useMemo(() => ({ pushToast }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-stack" aria-live="polite" aria-relevant="additions">
        {toasts.map((t) => (
          <div key={t.id} className={`toast toast--${t.type}`}>
            <div className="toast__title">{t.title}</div>
            {t.message && <div className="toast__msg">{t.message}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
