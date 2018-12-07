import { Component, OnInit } from '@angular/core';
import {Product} from '../Models/product';
import {ProductService} from '../Services/product.service';
import {ActivatedRoute} from '@angular/router';
import {ProductImage} from "../Models/productImage";

@Component({
  selector: 'productDetailsComponent',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.css']
})
export class productDetailsComponent implements OnInit {
  private product: Product;
  private prodImages: ProductImage[];

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(prod => {this.product = prod; this.prodImages = prod.images;});
  }
}
