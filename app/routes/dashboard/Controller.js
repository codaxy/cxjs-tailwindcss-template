export default {
   onInit() {
      this.store.set('$page.chart', [
         { month: 'Dec', sales: 37235, expenses: 45135, balance: 20000 },
         { month: 'Jan', sales: 35235, expenses: 46135, balance: 13000 },
         { month: 'Feb', sales: 45235, expenses: 44135, balance: 12500 },
         { month: 'Mar', sales: 50235, expenses: 43135, balance: 17000 },
         { month: 'Apr', sales: 48235, expenses: 46135, balance: 17500 },
         { month: 'May', sales: 52235, expenses: 48135, balance: 18000 },
         { month: 'Jun', sales: 53235, expenses: 49135, balance: 22000 },
         { month: 'Jul', sales: 51235, expenses: 48135, balance: 26500 },
         { month: 'Aug', sales: 47235, expenses: 44135, balance: 28000 },
         { month: 'Sep', sales: 53235, expenses: 47135, balance: 29000 },
         { month: 'Oct', sales: 55235, expenses: 54135, balance: 29100 },
         { month: 'Nov', sales: 65235, expenses: 55135, balance: 39000 },
      ]);
   },
};
