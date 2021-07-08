import { rest } from 'msw';
import { getComparer } from 'cx/data';
import { getRandomCustomer } from './customers';
import { getRandomProduct } from './products';
import { randomElement } from './randomElement';

const invoices = Array.from({ length: 2000 }, (_, index) => {
   const items = Array.from({ length: 1 + Math.random() * 4 }, (_, index) => {
      let product = getRandomProduct();
      let qty = Math.ceil(Math.random() * 10);
      return {
         id: index + 1,
         productId: product.id,
         productName: product.name,
         unitPrice: product.unitPrice,
         qty,
         regularAmount: qty * product.unitPrice,
         totalAmount: qty * product.unitPrice,
      };
   });
   return {
      id: index + 1,
      invoiceNo: 10001 + index,
      customer: getRandomCustomer(),
      status: randomElement(['paid', 'unpaid']),
      items,
      date: Date.now() - Math.random() * 90 * 86400,
      totalAmount: items.reduce((acc, item) => acc + item.totalAmount, 0),
   };
});

export const invoiceEndpoints = [
   rest.get('/api/invoices', (req, res, ctx) => {
      let page = req.url.searchParams.get('page') || 1;
      let pageSize = req.url.searchParams.get('pageSize') || 10;
      let sortField = req.url.searchParams.get('sortField');
      let sortDir = req.url.searchParams.get('sortDir') || 'asc';

      let results = [...invoices];

      if (sortField) {
         var compare = getComparer([{ value: { bind: sortField }, direction: sortDir }]);
         results.sort(compare); //simulate database sort
      }

      //return one element more than asked for paging purposes
      results = results.slice((page - 1) * pageSize, page * pageSize + 1);

      return res(ctx.json(results));
   }),
];
