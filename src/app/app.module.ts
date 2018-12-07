import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthenticationService} from './Services/authentication.service';
import { ProductService} from './Services/product.service';
import { CategoryService} from './Services/category.service';
import { AuthGuard} from './guards/auth.guard';
import { ButtonsModule, CarouselModule} from 'ngx-bootstrap';
import { SvenProductsComponent } from './sven-products/sven-products.component';
import { SvenDetailsComponent } from './sven-details/sven-details.component';
import { ProductImageService} from "./Services/product-image.service";
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    AboutComponent,
    ShoppingcartComponent,
    NavbarComponent,
    AdminComponent,
    SvenProductsComponent,
    SvenDetailsComponent,
    AddProductComponent,
    UpdateProductComponent,
    AddCategoryComponent,
    UpdateCategoryComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    CarouselModule, FormsModule
  ],
  providers: [AuthGuard,
    AuthenticationService,
  ProductService,
  CategoryService, ProductImageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
