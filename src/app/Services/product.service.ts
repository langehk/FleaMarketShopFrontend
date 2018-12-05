import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
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

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + '/product');
  }

  getProductById(id: number): Observable<Product> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get<Product>( environment.apiUrl + '/product/' + id, httpOptions);
  }
}
