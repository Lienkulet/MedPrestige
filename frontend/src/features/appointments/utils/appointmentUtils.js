export const STATUS_OPTIONS = ["Confirmed", "Completed", "Cancelled", "No-show"];

export const STATUS_OPTIONS_ALL = ["All", ...STATUS_OPTIONS];

/** CSS classes for admin table pill badges (BEM style). */
export const STATUS_PILL_CLASS = {
  Confirmed: "pill--ok",
  Completed: "pill--ok",
  Cancelled: "pill--muted",
  "No-show":  "pill--muted",
};

/** Background/text colors for inline-style badges (patient & doctor dashboards). */
export const STATUS_COLORS = {
  Confirmed: { bg: "#ECFDF5", color: "#059669" },
  Completed: { bg: "#EFF6FF", color: "#2563EB" },
  Cancelled: { bg: "#FEF2F2", color: "#DC2626" },
  "No-show":  { bg: "#FFF7ED", color: "#D97706" },
};

/** Tailwind classes for the admin dashboard status badge (bg + text). */
export const STATUS_CLS = {
  Confirmed: "bg-accent  text-primary",
  Pending:   "bg-[#fff8e6] text-[#b45309]",
  Cancelled: "bg-[#fef2f2] text-[#b91c1c]",
  Completed: "bg-[#f0fdf4] text-[#15803d]",
  "No-show": "bg-[#f4f4f5] text-[#52525b]",
};

/** Tailwind classes for the status dot inside the admin dashboard badge. */
export const STATUS_DOT = {
  Confirmed: "bg-primary",
  Pending:   "bg-[#f59e0b]",
  Cancelled: "bg-[#ef4444]",
  Completed: "bg-[#22c55e]",
  "No-show": "bg-[#a1a1aa]",
};

/**
 * Extracts the date portion (YYYY-MM-DD) from an ISO datetime string.
 * Returns empty string when the value is falsy.
 */
export function extractDate(iso) {
  return iso ? iso.slice(0, 10) : "";
}

/**
 * Extracts the time portion (HH:MM) from an ISO datetime string.
 * Returns empty string when the value is falsy.
 */
export function extractTime(iso) {
  return iso ? iso.slice(11, 16) : "";
}
