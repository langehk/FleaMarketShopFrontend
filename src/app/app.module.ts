import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthenticationService} from './shared/Services/authentication.service';
import { ProductService} from './shared/Services/product.service';
import { CategoryService} from './shared/Services/category.service';
import { AuthGuard} from './shared/guards/auth.guard';
import { ButtonsModule, CarouselModule} from 'ngx-bootstrap';
import { ProductsComponent } from './product/products/products.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductImageService} from './shared/Services/product-image.service';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { ListProductsComponent } from './product/list-products/list-products.component';
import { ListCategoriesComponent } from './category/list-categories/list-categories.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { CategoryComponent } from './category/category/category.component';
import { ProductsByCategoryComponent } from './category/products-by-category/products-by-category.component';
import { AddProductImageComponent } from './productimage/add-product-image/add-product-image.component';
import { ListProductImageComponent } from './productimage/list-product-image/list-product-image.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    AboutComponent,
    NavbarComponent,
    AdminComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UpdateProductComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ListProductsComponent,
    ListCategoriesComponent,
    CategoryComponent,
    ProductsByCategoryComponent,
    AddProductImageComponent,
    ListProductImageComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    CarouselModule, FormsModule,
    SelectDropDownModule
  ],
  providers: [AuthGuard,
    AuthenticationService,
  ProductService,
  CategoryService, ProductImageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
