import { Component, OnInit } from '@angular/core';
import {Product} from '../Models/product';
import {ProductService} from '../Services/product.service';

@Component({
  selector: 'app-sven-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.productService.getProducts().subscribe(products => {this.products = products; });
  }
}
