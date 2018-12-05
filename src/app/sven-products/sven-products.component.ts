import { Component, OnInit } from '@angular/core';
import {Product} from '../Models/product';
import {ProductService} from '../Services/product.service';

@Component({
  selector: 'app-sven-products',
  templateUrl: './sven-products.component.html',
  styleUrls: ['./sven-products.component.css']
})
export class SvenProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.productService.getProducts().subscribe(products => {this.products = products; });
  }
}
