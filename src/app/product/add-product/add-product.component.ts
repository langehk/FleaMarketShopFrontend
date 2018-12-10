import { Component, OnInit } from '@angular/core';
import { ProductService} from "../../shared/Services/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm = new FormGroup( {
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    productDescription: new FormControl(''),
    mainPictureString: new FormControl(''),
    category: new FormGroup({
      categoryId: new FormControl('')})
  });

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  save(){
    const product = this.productForm.value;
    this.productService.addProduct(product)
      .subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
  }
}
