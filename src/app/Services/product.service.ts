import { Injectable } from '@angular/core';
import { Product } from "../Models/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(environment.apiUrl + '/product');
  }
}
