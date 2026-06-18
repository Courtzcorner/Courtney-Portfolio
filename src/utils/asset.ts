/**
 * Prepends the Vite base URL to any public asset path.
 * Handles both local dev (base = '/') and GitHub Pages (base = '/Courtney-Portfolio/').
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL // e.g. '/Courtney-Portfolio/'
  return base + path.replace(/^\//, '')
}
