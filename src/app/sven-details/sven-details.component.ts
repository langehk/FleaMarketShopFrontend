import { Component, OnInit } from '@angular/core';
import {Product} from '../Models/product';
import {ProductService} from '../Services/product.service';
import {ActivatedRoute} from '@angular/router';
import {ProductImage} from '../Models/productImage';

@Component({
  selector: 'app-sven-details',
  templateUrl: './sven-details.component.html',
  styleUrls: ['./sven-details.component.css']
})
export class SvenDetailsComponent implements OnInit {
  private product: Product;
  private prodImages: ProductImage[];

  slides = [
    {image: 'http://funkyimg.com/i/2NUez.jpg'},
    {image: 'http://funkyimg.com/i/2NUjW.jpg'},
    {image: 'http://funkyimg.com/i/2NUk3.jpg'},
    {image: 'http://funkyimg.com/i/2NUk1.jpg'},
    {image: 'http://funkyimg.com/i/2NUk2.jpg'},
    {image: 'http://funkyimg.com/i/2NUk4.jpg'}
  ];

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(prod => {this.product = prod; this.prodImages = prod.images; });
  }
}
