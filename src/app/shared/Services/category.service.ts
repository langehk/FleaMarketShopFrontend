import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Category} from "../Models/category";
import {Observable} from "rxjs";
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  categories: Category[];

  getCategories(): Observable<Category[]>
  {
    return this.http.get<Category[]>(environment.apiUrl + '/category');
  }

  getCategoryById(id: number): Observable<Category>
  {
    return this.http.get<Category>(environment.apiUrl + '/category/' + id);
  }

  addCategory(category: Category): Observable<Category>
  {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.post<Category>( environment.apiUrl + /category/, category, httpOptions);
  }

  updateCategory(category: Category): Observable<Category>
  {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.put<Category>(environment.apiUrl + '/category/' + category.categoryId, httpOptions);
  }

  deleteCategory(id: number): Observable<any>
  {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.delete(environment.apiUrl + '/category' + id, httpOptions);
  }
}
