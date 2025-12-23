import { randomElement } from './randomElement';
import { HttpResponse, http } from 'msw';
import { getSearchQueryPredicate } from 'cx/util';

import customersData from './customers.json';

export interface Customer {
   id: number;
   name: string;
   address: string;
}

const customers: Customer[] = customersData as Customer[];

let lastId = 0;
customers.forEach((customer) => {
   customer.id = ++lastId;
});

export function getRandomCustomer(): Customer {
   return randomElement(customers);
}

export const customerEndpoints = [
   http.get('/api/customers', ({ request }) => {
      console.log(request.url);
      const url = new URL(request.url);
      const query = url.searchParams.get('query');
      const pageSize = Number(url.searchParams.get('pageSize')) || 100;
      const page = Number(url.searchParams.get('page')) || 1;
      let results = [...customers];
      if (query) {
         const predicate = getSearchQueryPredicate(query);
         results = results.filter((x) => predicate(x.name) || predicate(x.address));
      }
      results = results.slice((page - 1) * pageSize, page * pageSize);
      return HttpResponse.json(results);
   }),
];
