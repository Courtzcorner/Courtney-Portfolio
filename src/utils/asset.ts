/**
 * Prepends the Vite base URL to any public asset path.
 * With base '/' (custom domain), paths resolve from https://courtneystokes.dev/
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL
  return base + path.replace(/^\//, '')
}
