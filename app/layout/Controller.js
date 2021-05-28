import { History } from 'cx/ui';

export default {
   onInit() {
      this.addTrigger('scroll-reset', ['url'], () => {
         document.scrollingElement.scrollTop = 0;
      });
   },

   async onSignOut() {
      //window.location = "/sign-out";
      this.store.set('user', null);
      History.pushState({}, null, '~/');
   },
};
