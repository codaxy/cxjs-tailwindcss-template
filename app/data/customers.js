import { randomElement } from './randomElement';
import { HttpResponse, http } from 'msw';
import { getSearchQueryPredicate } from 'cx/util';

import customers from './customers.json';

let lastId = 0;
customers.forEach((customer) => {
   customer.id = ++lastId;
});

export function getRandomCustomer() {
   return randomElement(customers);
}

export const customerEndpoints = [
   http.get('/api/customers', ({ request }) => {
      console.log(request.url);
      const url = new URL(request.url);
      let query = url.searchParams.get('query');
      let pageSize = url.searchParams.get('pageSize') || 100;
      let page = url.searchParams.get('page') || 1;
      let results = [...customers];
      if (query) {
         const predicate = getSearchQueryPredicate(query);
         results = results.filter((x) => predicate(x.name) || predicate(x.address));
      }
      results = results.slice((page - 1) * pageSize, page * pageSize);
      return HttpResponse.json(results);
   }),
];
