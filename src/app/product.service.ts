import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  localStorageProductsName = 'products';
  productList: { id: number, image: string, title: string, description: string, price: number }[] = [
    {id: 1, image: 'http://', title: 'shugaring stick', description: 'full description', price: 1},
    {id: 2, image: 'http://', title: 'bobbin bobbins', description: 'full description', price: 2},
    {id: 3, image: 'http://', title: 'glue for eyelashes', description: 'full description', price: 3},
    {id: 4, image: 'http://', title: 'vaporizer', description: 'full description', price: 4},
    {id: 5, image: 'http://', title: 'ultrasonic scrubber', description: 'full description', price: 5},
    {id: 6, image: 'http://', title: 'cavitation apparatus', description: 'full description', price: 6},
  ];

  updateLocalStorage() {
    localStorage.setItem(this.localStorageProductsName, JSON.stringify(this.productList));
  }

  getFromLocalStorage() {
    this.productList = JSON.parse(localStorage.getItem(this.localStorageProductsName));
  }

  generateId() {
    if (this.productList.length === 0) {
      return 0;
    }
    return Math.max.apply(Math, this.productList.map(list => list.id)) + 1;
  }

  addProduct(product) {
    this.productList.push(product);
    this.updateLocalStorage();
  }

  getProducts() {
    // console.log('-->', localStorage.key(0) === this.localStorageProductsName);
    if (localStorage.length > 0 ) {
      this.getFromLocalStorage();
    }
    return this.productList;
  }

  getProduct(id: number) {
    return this.productList.find( product => product.id === id);
  }

  deleteProduct(product) {
    this.productList.splice(this.productList.indexOf(product), 1);
    this.updateLocalStorage();
  }

}
