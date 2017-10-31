import {Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

export const appRoutes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'list/:id', component: ProductDetailComponent },
  { path: 'add', component: ProductEditComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
