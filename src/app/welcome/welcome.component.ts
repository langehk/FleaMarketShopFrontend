import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/Services/product.service';
import {Product} from '../shared/Models/product';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.productService.getProducts().subscribe(products => {this.products = products; });
  }
}

