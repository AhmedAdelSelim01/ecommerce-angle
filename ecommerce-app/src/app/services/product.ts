import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1200,
      description: 'Powerful laptop for developers',
      image: 'assets/laptop.jpg',
      category: 'Electronics',
      quantity: 10,
    },
    {
      id: 2,
      name: 'Phone',
      price: 800,
      description: 'Latest smartphone',
      image: 'assets/phone.jpg',
      category: 'Electronics',
      quantity: 15,
    },
    {
      id: 3,
      name: 'Headphones',
      price: 150,
      description: 'Noise cancelling headphones',
      image: 'assets/headphones.jpg',
      category: 'Accessories',
      quantity: 20,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
