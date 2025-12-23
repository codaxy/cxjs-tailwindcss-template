import { randomElement } from './randomElement';
import { HttpResponse, http } from 'msw';

export interface Product {
   id: number;
   name: string;
   unitPrice: number;
}

const products: Product[] = Array.from({ length: 20 }, (_, index) => ({
   id: index + 1,
   name: `Product ${String.fromCharCode(65 + index)}`,
   unitPrice: 100 + Math.round(Math.random() * 20000) / 100,
}));

export function getRandomProduct(): Product {
   return randomElement(products);
}

export const productEndpoints = [
   http.get('/api/products', () => {
      return HttpResponse.json(products);
   }),
];
