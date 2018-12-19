import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + '/product');
  }

  getProductById(id: number): Observable<Product> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get<Product>( environment.apiUrl + '/product/' + id, httpOptions);
  }

  addProduct(product: Product): Observable<Product> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.post<Product>( environment.apiUrl + '/product/', product, httpOptions);
  }

  updateProduct(product: Product): Observable<Product> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.put<Product>(environment.apiUrl + '/product/' + product.productId, product, httpOptions);
  }

  deleteProduct(id: number): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.delete(environment.apiUrl + '/product/' + id, httpOptions);
  }
}
