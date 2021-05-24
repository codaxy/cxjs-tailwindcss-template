export default {
   onInit() {
      this.store.init('user', {
         firstName: 'Test',
         lastName: 'User',
         initials: 'TU',
         pictureUrl: 'https://source.unsplash.com/d-MfHM-jHwc/100x100/?face',
      });

      this.addTrigger('scroll-reset', ['url'], () => {
         document.scrollingElement.scrollTop = 0;
      });
   },
};
