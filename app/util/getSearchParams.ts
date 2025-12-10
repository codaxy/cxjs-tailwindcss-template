export function getSearchParams(url: string): URLSearchParams {
   const index = url.indexOf('?');
   if (index > 0) url = url.substring(index);
   return new URLSearchParams(url);
}
