import { Injectable } from '@angular/core';
import {Product} from './product.model';

@Injectable()
export class ProductService {
  localStorageProductsName = 'products';

  private productList: Product[] = [
    new Product ( 1, 'http://sportum.ru/img/300/big1_1626.jpg', 'shugaring stick', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores fuga iure, nam quod reprehenderit.', 10),
    new Product ( 2, 'http://pack-vm.com.ua/uploads/pages/ikik.jpg', 'bobbin bobbins', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores fuga iure, nam quod reprehenderit.', 20),
    new Product ( 3, 'http://www.tools4flooring.com/media/catalog/product/cache/4/image/300x300/9df78eab33525d08d6e5fb8d27136e95/c/r/crain-204_3.jpg', 'glue for eyelashes', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores fuga iure, nam quod reprehenderit.', 30),
    new Product ( 4, 'http://kidy-kid.com.ua/img/uploads/presm/BCX71_1TDY1H_sm.jpg.pagespeed.ce.e4LlVqXwwa.jpg', 'vaporizer', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores fuga iure, nam quod reprehenderit.', 40),
    new Product ( 5, 'http://img.directindustry.com/images_di/photo-m2/181371-10312561.jpg', 'ultrasonic scrubber', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores fuga iure, nam quod reprehenderit.', 50),
    new Product ( 6, 'https://images-na.ssl-images-amazon.com/images/I/514AOgwKPZL._SY300_QL70_.jpg', 'cavitation apparatus', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores fuga iure, nam quod reprehenderit.', 60)
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

  addProduct(product: Product) {
    this.productList.push(product);
    this.updateLocalStorage();
  }

  getProducts() {
    if (localStorage.length > 0 ) {
      this.getFromLocalStorage();
    }
    return this.productList;
  }

  getProduct(id: number) {
    return this.productList.find( product => product.id === id);
  }

  deleteProduct(product) {
    if (confirm('Are you sure you want to delete ' + product.title.toUpperCase())) {
      this.productList.splice(this.productList.indexOf(product), 1);
      this.updateLocalStorage();
    }
  }

}
