import { Format } from 'cx/ui';

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export function relativeTimeStr(time: string): string {
   const diff = Date.parse(time) - Date.now();
   const minutes = diff / 60000;
   const abs = Math.abs(minutes);
   if (abs >= 24 * 60) return rtf.format(Math.round(minutes / 60 / 24), 'day');
   if (abs >= 60) return rtf.format(Math.round(minutes / 60), 'hour');
   if (abs > 1) return rtf.format(Math.round(minutes), 'minute');
   return 'now';
}

Format.register('relativetime', relativeTimeStr);
