/**
 * Formats a datetime string for admin/Romanian locale display.
 * Output: "DD/MM/YYYY HH:MM"
 */
export function fmtAdmin(dt) {
  if (!dt) return "—";
  return new Date(dt).toLocaleString("ro-RO", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

/**
 * Formats a datetime string for patient-facing English locale display.
 * Output: "Mon, 01 Jan 2025, 09:00"
 */
export function fmtPatient(dt) {
  if (!dt) return "—";
  return new Date(dt).toLocaleString("en-GB", {
    weekday: "short", day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}
