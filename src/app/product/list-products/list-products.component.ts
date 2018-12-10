import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../shared/Services/product.service";
import {Product} from "../../shared/Models/product";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh()
  {
    this.productService.getProducts()
      .subscribe(listOfProducts =>
      {
        this.products = listOfProducts;
      });
  }

  delete(id: number)
  {
    this.productService.deleteProduct(id)
      .subscribe(message => {
        console.log('Deleted product, got message: ' + message);
        this.refresh();
      });
  }
}
