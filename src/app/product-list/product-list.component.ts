import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: { id: number, image: string, title: string, description: string, price: number }[] = [];

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onDetail(id) {
    this.router.navigate(['/list', id], {relativeTo: this.route});
  }

  onEdit() {
    console.log('-->', 'on edit click');
  }

  onDelete(product) {
    this.productService.deleteProduct(product);
  }
}
