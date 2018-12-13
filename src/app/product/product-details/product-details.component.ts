import {Component, Inject, inject, OnInit} from '@angular/core';
import {Product} from '../../shared/Models/product';
import {ProductService} from '../../shared/Services/product.service';
import {ActivatedRoute} from '@angular/router';
import {ProductImage} from '../../shared/Models/productImage';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Category} from "../../shared/Models/category";

@Component({
  selector: 'app-product-details-component',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  prodImages: ProductImage[];
  public cart: Product[];

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }
  @Inject(LOCAL_STORAGE) private storage: WebStorageService

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(prod => {this.product = prod; this.prodImages = prod.images;});
  }

  saveInLocal(key, val){
    console.log('received= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.cart[key]= this.storage.get(key);
  }

  getFromLocal(key): void {
    console.log('received= key:' + key);
    this.cart[key]= this.storage.get(key);
    console.log(this.cart);
  }
}
