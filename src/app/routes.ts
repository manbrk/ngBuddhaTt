import {Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

export const appRoutes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'detail', component: ProductDetailComponent },
  { path: 'add', component: ProductEditComponent },
  { path: 'edit', component: ProductEditComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
