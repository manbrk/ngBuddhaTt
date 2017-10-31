import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  product: {id: number, image: string, title: string, description: string, price: number };
  // newProduct: {id: number, image: string, title: string, description: string, price: number };
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
    this.product = {
      id: this.productService.generateId(),
      image: this.signupForm.value.image,
      title: this.signupForm.value.title,
      description: this.signupForm.value.description,
      price: this.signupForm.value.price
    };
    this.productService.addProduct(this.product);
    this.router.navigate(['/list']);
    console.log('-->', this.product);
  }

  onGoBack() {
    this.router.navigate(['/list']);
  }

}
