import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../shared/Services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;

  updateProductForm = new FormGroup( {
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    productDescription: new FormControl(''),
    mainPictureString: new FormControl('')
  });

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id).
    subscribe(product => {
      this.updateProductForm.patchValue({
        productName: product.productName,
        productPrice: product.productPrice,
        productDescription: product.productDescription,
        mainPictureString: product.mainPictureString
      });
    });
  }

  save() {
    const product = this.updateProductForm.value;
    product.productId = this.id;
    this.productService.updateProduct(product)
      .subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
  }
}
