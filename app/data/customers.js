import { randomElement } from './randomElement';
import { rest } from 'msw';

const customers = Array.from({ length: 20 }, (_, index) => ({
   id: index + 1,
   name: `Customer ${String.fromCharCode(65 + index)}`,
}));

export function getRandomCustomer() {
   return randomElement(customers);
}

export const customerEndpoints = [
   rest.get('/api/customers', (req, res, ctx) => {
      return res(ctx.json(customers));
   }),
];
