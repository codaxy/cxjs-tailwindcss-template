import { HttpResponse, http } from 'msw';
import { getComparer } from 'cx/data';
import { getRandomCustomer, Customer } from './customers';
import { getRandomProduct } from './products';
import { getSearchQueryPredicate } from 'cx/util';

export interface InvoiceItem {
   id: number;
   productId: number;
   productName: string;
   unitPrice: number;
   qty: number;
   discountPct: number;
   regularAmount: number;
   discountAmount: number;
   totalAmount: number;
}

export interface Invoice {
   id: number;
   invoiceNo: number;
   customer: Customer;
   status: 'paid' | 'unpaid';
   items: InvoiceItem[];
   date: number;
   dueDate: number;
   regularAmount: number;
   discountAmount: number;
   totalAmount: number;
}

let lastId = 0;

const invoices: Invoice[] = Array.from({ length: 2000 }, () => {
   const items: InvoiceItem[] = Array.from({ length: 1 + Math.floor(Math.random() * 4) }, (_, index) => {
      const product = getRandomProduct();
      const qty = Math.ceil(Math.random() * 10);
      return {
         id: index + 1,
         productId: product.id,
         productName: product.name,
         unitPrice: product.unitPrice,
         qty,
         discountPct: 0,
         regularAmount: qty * product.unitPrice,
         discountAmount: 0,
         totalAmount: qty * product.unitPrice,
      };
   });

   const date = Date.now() - Math.random() * 90 * 86400 * 1000;
   const dueDate = date + 14 * 86400 * 1000;

   const totalAmount = items.reduce((acc, item) => acc + item.totalAmount, 0);

   return {
      id: ++lastId,
      invoiceNo: 10000 + lastId,
      customer: getRandomCustomer(),
      status: Math.random() > 0.1 ? 'paid' : 'unpaid',
      items,
      date,
      dueDate,
      regularAmount: totalAmount,
      discountAmount: 0,
      totalAmount,
   };
});

export const invoiceEndpoints = [
   http.get('/api/invoices', ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get('page')) || 1;
      const pageSize = Number(url.searchParams.get('pageSize')) || 10;
      const sortField = url.searchParams.get('sortField');
      const sortDir = url.searchParams.get('sortDir') || 'asc';
      const query = url.searchParams.get('query');
      const status = url.searchParams.get('status');

      let results = [...invoices];

      if (query) {
         const predicate = getSearchQueryPredicate(query);
         results = results.filter((x) => predicate(x.customer.name) || x.invoiceNo == Number(query));
      }

      if (status) results = results.filter((x) => x.status == status);

      if (sortField) {
         const compare = getComparer([{ value: { bind: sortField }, direction: sortDir }]);
         results.sort(compare); //simulate database sort
      }

      results = results.slice((page - 1) * pageSize, page * pageSize);
      return HttpResponse.json(results);
   }),

   http.get('/api/invoices/:id', ({ params }) => {
      const { id } = params;
      const invoice = invoices.find((i) => i.id == Number(id));
      return HttpResponse.json(invoice);
   }),

   http.put('/api/invoices/:id', async ({ params, request }) => {
      const { id } = params;
      const body = (await request.json()) as Partial<Invoice>;
      const invoice = invoices.find((i) => i.id == Number(id));
      if (invoice) {
         Object.assign(invoice, body);
      }
      return HttpResponse.json(invoice);
   }),

   http.post('/api/invoices', async ({ request }) => {
      const body = (await request.json()) as Partial<Invoice>;
      const invoice = {
         ...body,
         id: ++lastId,
         invoiceNo: 10000 + lastId,
      } as Invoice;
      invoices.push(invoice);
      return HttpResponse.json(invoice);
   }),
];
