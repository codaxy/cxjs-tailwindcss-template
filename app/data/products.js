import { randomElement } from './randomElement';
import { HttpResponse, http } from 'msw';

const products = Array.from({ length: 20 }, (_, index) => ({
   id: index + 1,
   name: `Product ${String.fromCharCode(65 + index)}`,
   unitPrice: 100 + Math.round(Math.random(1) * 20000) / 100,
}));

export function getRandomProduct() {
   return randomElement(products);
}

export const productEndpoints = [
   http.get('/api/products', () => {
      return HttpResponse.json(products);
   }),
];
