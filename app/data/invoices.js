import { rest } from 'msw';
import { getRandomCustomer } from './customers';
import { randomElement } from './randomElement';

const invoices = Array.from({ length: 2000 }, (_, index) => ({
   id: index + 1,
   invoiceNo: 10001 + index,
   customer: getRandomCustomer(),
   status: randomElement(['Paid', 'Unpaid']),
   items: Array.from({ length: 1 + Math.random() * 4 }, (_, index) => ({})),
   date: Date.now() - Math.random() * 90 * 86400,
}));

export const invoiceEndpoints = [
   rest.get('/api/invoices', (req, res, ctx) => {
      let { page, pageSize } = req.url.searchParams;
      return res(ctx.json(invoices));
   }),
];
