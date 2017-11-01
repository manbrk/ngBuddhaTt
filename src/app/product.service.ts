import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  localStorageProductsName = 'products';
  productList: { id: number, image: string, title: string, description: string, price: number }[] = [
    {id: 1, image: 'http://sportum.ru/img/300/big1_1626.jpg', title: 'shugaring stick', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores fuga iure, nam quod reprehenderit.', price: 1},
    {id: 2, image: 'http://', title: 'bobbin bobbins', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores fuga iure, nam quod reprehenderit.', price: 2},
    {id: 3, image: 'http://www.tools4flooring.com/media/catalog/product/cache/4/image/300x300/9df78eab33525d08d6e5fb8d27136e95/c/r/crain-204_3.jpg', title: 'glue for eyelashes', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores fuga iure, nam quod reprehenderit.', price: 3},
    {id: 4, image: 'http://', title: 'vaporizer', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores fuga iure, nam quod reprehenderit.', price: 4},
    {id: 5, image: 'http://', title: 'ultrasonic scrubber', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores fuga iure, nam quod reprehenderit.', price: 5},
    {id: 6, image: 'http://', title: 'cavitation apparatus', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores fuga iure, nam quod reprehenderit.', price: 6},
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
