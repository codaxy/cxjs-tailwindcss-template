import { Store } from 'cx/data';

export function checkSignedIn(store: Store): boolean {
   if (store.get('user')) return true;

   store.set('signin.visible', true);
   return false;
}
