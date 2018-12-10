import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/Models/product';
import {ProductService} from '../../shared/Services/product.service';

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
