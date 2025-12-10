export function urlEncode(params: Record<string, string | number | boolean | null | undefined>): string {
   return Object.keys(params)
      .filter((k) => params[k] != null)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(String(params[k])))
      .join('&');
}
