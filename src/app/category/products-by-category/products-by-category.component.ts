import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../shared/Services/category.service';
import {Product} from '../../shared/Models/product';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {
products: Product[];
  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategoryById(id).subscribe(category => {
      this.products = category.products;
    });
  }

}
