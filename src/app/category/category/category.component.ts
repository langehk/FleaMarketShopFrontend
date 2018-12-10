import { Component, OnInit } from '@angular/core';
import {Category} from '../../shared/Models/category';
import {CategoryService} from '../../shared/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }


  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.categoryService.getCategories().subscribe(categories => {this.categories = categories; });
  }

}
