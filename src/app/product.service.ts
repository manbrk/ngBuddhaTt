import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  productList: { id: number, image: string, title: string, description: string, price: number }[] = [
    {id: 1, image: 'http://', title: 'title name', description: 'full description', price: 1},
    {id: 2, image: 'http://', title: 'title name', description: 'full description', price: 2},
    {id: 3, image: 'http://', title: 'title name', description: 'full description', price: 3},
    {id: 4, image: 'http://', title: 'title name', description: 'full description', price: 4},
    {id: 5, image: 'http://', title: 'title name', description: 'full description', price: 5},
    {id: 6, image: 'http://', title: 'title name', description: 'full description', price: 6},
  ];

  constructor() { }

  getProducts() {
    return this.productList;
  }

}
