import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') signupForm: NgForm;
  product: {id: number, image: string, title: string, description: string, price: number };
  id: number;
  editMode = false;

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
      this.product = {
        id: this.productService.generateId(),
        image: this.signupForm.value.image,
        title: this.signupForm.value.title,
        description: this.signupForm.value.description,
        price: this.signupForm.value.price
      };
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

  ngOnDestroy() {

  }
}
