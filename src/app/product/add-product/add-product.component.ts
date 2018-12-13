import { Component, OnInit } from '@angular/core';
import { ProductService} from "../../shared/Services/product.service";
import {FormBuilder, FormControl, FormControlName, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";
import {CategoryService} from '../../shared/Services/category.service';
import {Category} from '../../shared/Models/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  id: number;

  productForm = new FormGroup( {
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    productDescription: new FormControl(''),
    mainPictureString: new FormControl(''),
    category: new FormGroup({
      categoryId: new FormControl('')})
  });

  categoryForm: FormGroup;

  categories: Category[];

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      categoryControl: ['Category']
    });
    this.categoryService.getCategories().subscribe(catego => {this.categories = catego; });
  }

  save() {
    const product = this.productForm.value;
    product.productId = this.id;
    this.productService.addProduct(product)
      .subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
  }
}
