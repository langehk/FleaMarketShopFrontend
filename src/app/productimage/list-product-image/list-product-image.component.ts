import { Component, OnInit } from '@angular/core';
import {ProductImageService} from '../../shared/Services/product-image.service';
import {ProductImage} from '../../shared/Models/productImage';

@Component({
  selector: 'app-list-product-image',
  templateUrl: './list-product-image.component.html',
  styleUrls: ['./list-product-image.component.css']
})
export class ListProductImageComponent implements OnInit {

  productimages: ProductImage[];

  constructor(private productimageservice: ProductImageService) { }

  ngOnInit() {
    this.productimageservice.getProductImages().subscribe(productimages => {this.productimages = productimages; });
  }

  delete(id: number){
    this.productimageservice.deleteProductImage(id).subscribe();
  }
}
