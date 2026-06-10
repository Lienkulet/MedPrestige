"use client";

import { useEffect, useRef, useState } from "react";
import "./AdminSelect.css";

export default function AdminSelect({ name, value, onChange, options, defaultValue }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value ?? defaultValue ?? options[0]);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function select(opt) {
    setSelected(opt);
    onChange?.(opt);
    setOpen(false);
  }

  return (
    <div className="adm-select" ref={ref}>
      <input type="hidden" name={name} value={selected} />
      <button
        type="button"
        className={`adm-select__trigger${open ? " adm-select__trigger--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected}</span>
        <svg className="adm-select__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul className="adm-select__menu" role="listbox">
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={selected === opt}
              className={`adm-select__option${selected === opt ? " adm-select__option--active" : ""}`}
              onClick={() => select(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
