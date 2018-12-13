import { Component, OnInit } from '@angular/core';
import { ProductService} from "../../shared/Services/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {CategoryService} from "../../shared/Services/category.service";
import {Category} from "../../shared/Models/category";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categories: Category[];

  productForm = new FormGroup( {
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    productDescription: new FormControl(''),
    mainPictureString: new FormControl(''),
    category: new FormGroup({
      categoryId: new FormControl('')})
  });

  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(next => {this.categories = next})
  }

  save(){
    const product = this.productForm.value;
    this.productService.addProduct(product)
      .subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
  }
}
