import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { ShoppingcartComponent} from './shoppingcart/shoppingcart.component';
import { LoginComponent} from './login/login.component';
import { AboutComponent} from './about/about.component';
import { AdminComponent} from './admin/admin.component';
import { ProductsComponent} from './product/products/products.component';
import { ProductDetailsComponent} from './product/product-details/product-details.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent} from './product/update-product/update-product.component';
import { AddCategoryComponent} from './category/add-category/add-category.component';
import { UpdateCategoryComponent} from './category/update-category/update-category.component';
import { CategoryComponent} from './category/category/category.component';
import { ProductsByCategoryComponent} from './category/products-by-category/products-by-category.component';
import {ListCategoriesComponent} from './category/list-categories/list-categories.component';
import {ListProductsComponent} from './product/list-products/list-products.component';
import {AddProductImageComponent} from './productimage/add-product-image/add-product-image.component';
import {ListProductImageComponent} from './productimage/list-product-image/list-product-image.component';
import {BsDropdownModule} from "ngx-bootstrap";

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent},
  { path: 'shoppingcart', component: ShoppingcartComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'productdetails/:id', component: ProductDetailsComponent},
  { path: 'addproduct', component: AddProductComponent},
  { path: 'updateproduct/:id', component: UpdateProductComponent},
  { path: 'addcategory', component: AddCategoryComponent},
  { path: 'updatecategory/:id', component: UpdateCategoryComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'category/:id', component: ProductsByCategoryComponent},
  { path: 'categorylist', component: ListCategoriesComponent},
  { path: 'productlist', component: ListProductsComponent},
  { path: 'addproductimage', component: AddProductImageComponent},
  { path: 'productimagelist', component: ListProductImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BsDropdownModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule { }
