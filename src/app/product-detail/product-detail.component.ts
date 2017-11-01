import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: {id: number, image: string, title: string, description: string, price: number };
  id: number;
  imageLoaded: boolean;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.product = this.productService.getProduct(this.id);
      }
    );
  }

  onGoBack() {
    this.router.navigate(['/list']);
  }

  onDelete() {
    this.productService.deleteProduct(this.product);
    this.router.navigate(['/list']);
  }

  onEdit(id) {
    this.router.navigate(['/edit', id], {relativeTo: this.route});
  }

  onImageLoad(event: any) {
    this.imageLoaded = true;
  }

  onImageLoadError(event: any) {
    this.imageLoaded = false;
  }
}
