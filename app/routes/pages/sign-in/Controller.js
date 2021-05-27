export default {
   onSubmit(e, { store }) {
      e.preventDefault();
      MsgBox.alert(`Welcome ${store.get('login.username')}!`);
      store.set('login', null);
   },
};
