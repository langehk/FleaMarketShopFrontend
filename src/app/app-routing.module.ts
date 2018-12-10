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

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent},
  { path: 'shoppingcart', component: ShoppingcartComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'productdetails/:id', component: ProductDetailsComponent},
  { path: 'addproduct', component: AddProductComponent},
  { path: 'updateproduct', component: UpdateProductComponent},
  { path: 'addcategory', component: AddCategoryComponent},
  {path: 'updatecategory', component: UpdateCategoryComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category/:id', component: ProductsByCategoryComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
