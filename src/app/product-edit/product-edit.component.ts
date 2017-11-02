import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {NgForm} from '@angular/forms';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  product: Product;
  id: number;
  editMode = false;
  image: string;
  imageLoaded: boolean;
  wrongImageLink = 'http://b-smart.co.th/wp-content/uploads/2014/07/not-found-150x150.png';


  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.product = this.productService.getProduct(this.id);
      }
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.product.image = this.signupForm.value.image;
      this.product.title = this.signupForm.value.title;
      this.product.description = this.signupForm.value.description;
      this.product.price = this.signupForm.value.price;

      this.productService.updateLocalStorage();
      this.router.navigate(['/list']);
    }

    if (!this.editMode) {
      this.product = new Product (
        this.productService.generateId(),
        this.signupForm.value.image,
        this.signupForm.value.title,
        this.signupForm.value.description,
        this.signupForm.value.price
      );

      this.productService.addProduct(this.product);
      this.router.navigate(['/list']);
    }
    console.log('-->', this.product);
  }

  onGoBack() {
    this.router.navigate(['/list']);
  }

  onDelete() {
    this.productService.deleteProduct(this.product);
    this.router.navigate(['/list']);
  }

  onImageLoad(event: any) {
    this.imageLoaded = true;
  }

  onImageLoadError(event: any) {
    this.imageLoaded = false;
  }
}
