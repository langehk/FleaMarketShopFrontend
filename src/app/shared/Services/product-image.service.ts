import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from './authentication.service';
import {ProductImage} from "../Models/productImage";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {

  productImages: ProductImage[];

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getProductImages(): Observable<ProductImage[]> {
    return this.http.get<ProductImage[]>(environment.apiUrl + '/ProductImage');
  }

  getProductImageById(id: number): Observable<ProductImage> {

    return this.http.get<ProductImage>( environment.apiUrl + '/ProductImage/' + id, httpOptions);
  }

  addProductImage(productImage: ProductImage): Observable<ProductImage>
  {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.post<ProductImage>( environment.apiUrl, productImage, httpOptions);
  }

  updateProductImage(productImage: ProductImage): Observable<ProductImage>
  {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.put<ProductImage>(environment.apiUrl + '/ProductImage/' + productImage.productImageId, httpOptions);
  }

  deleteProductImage(id: number): Observable<any>
  {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.delete(environment.apiUrl + '/ProductImage/' + id, httpOptions);
  }
}
