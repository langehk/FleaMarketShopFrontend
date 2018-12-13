import { Component, OnInit } from '@angular/core';
import { ProductService} from "../../shared/Services/product.service";
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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

  categoryForm: FormGroup;

  categories = ['USA', 'Canada', 'Uk']
  constructor(private productService: ProductService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      categoryControl: ['Category']
    });
  }

  save() {
    const product = this.productForm.value;
    this.productService.addProduct(product)
      .subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
  }
}
