import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/Models/product';
import {ProductService} from '../../shared/Services/product.service';
import {ActivatedRoute} from '@angular/router';
import {ProductImage} from '../../shared/Models/productImage';

@Component({
  selector: 'app-product-details-component',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  prodImages: ProductImage[];

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(prod => {this.product = prod; this.prodImages = prod.images; });
  }
}
