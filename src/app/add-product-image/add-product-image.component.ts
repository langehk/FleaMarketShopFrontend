import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import {ProductImageService} from '../shared/Services/product-image.service';

@Component({
  selector: 'app-add-product-image',
  templateUrl: './add-product-image.component.html',
  styleUrls: ['./add-product-image.component.css']
})
export class AddProductImageComponent implements OnInit {

  productImageForm = new FormGroup({
    image: new FormControl(''),
    product: new FormGroup({
      ProductId: new FormControl('')
    })
  })

  constructor(private productImageService: ProductImageService) { }

  ngOnInit() {
  }
  save() {
    const productImage = this.productImageForm.value;
    this.productImageService.addProductImage(productImage)
      .subscribe(() => this.productImageForm.reset());
  }
}
