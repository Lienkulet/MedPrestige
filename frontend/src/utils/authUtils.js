/**
 * Decodes the JWT payload from localStorage without verifying the signature.
 * Used client-side only to read role/userId for routing decisions.
 * Returns null if no token exists or decoding fails.
 */
export function getAuthPayload() {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
}

/** Builds the Authorization header object from the stored token. */
export function authHeaders() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

/** Clears the auth token from localStorage and the cookie. */
export function clearAuthToken() {
  localStorage.removeItem("token");
  document.cookie = "token=; path=/; max-age=0";
}
