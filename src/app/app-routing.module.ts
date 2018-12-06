import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { ProductsComponent} from './products/products.component';
import { ProductDetailComponent} from './product-detail/product-detail.component';
import { ShoppingcartComponent} from './shoppingcart/shoppingcart.component';
import { LoginComponent} from './login/login.component';
import { AboutComponent} from './about/about.component';
import { AdminComponent} from './admin/admin.component';
import { SvenProductsComponent} from './sven-products/sven-products.component';
import { SvenDetailsComponent} from './sven-details/sven-details.component';
import { AddProductComponent } from "./add-product/add-product.component";
import { UpdateProductComponent} from "./update-product/update-product.component";
import {AddCategoryComponent} from "./add-category/add-category.component";
import {UpdateCategoryComponent} from "./update-category/update-category.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'shoppingcart', component: ShoppingcartComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'svenproducts', component: SvenProductsComponent},
  { path: 'svendetails/:id', component: SvenDetailsComponent},
  { path: 'addproduct', component: AddProductComponent},
  { path: 'updateproduct', component: UpdateProductComponent},
  { path: 'addcategory', component: AddCategoryComponent},
  {path: 'updatecategory', component: UpdateCategoryComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
