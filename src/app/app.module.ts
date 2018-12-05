import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './Services/authentication.service';
import {ProductService} from './Services/product.service';
import {CategoryService} from './Services/category.service';
import {AuthGuard} from './guards/auth.guard';
import {ButtonsModule, CarouselModule} from 'ngx-bootstrap';
import { SvenProductsComponent } from './sven-products/sven-products.component';
import { SvenDetailsComponent } from './sven-details/sven-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    LoginComponent,
    AboutComponent,
    ShoppingcartComponent,
    NavbarComponent,
    AdminComponent,
    SvenProductsComponent,
    SvenDetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    CarouselModule
  ],
  providers: [AuthGuard,
    AuthenticationService,
  ProductService,
  CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule { }
