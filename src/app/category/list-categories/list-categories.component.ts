import { Component, OnInit } from '@angular/core';
import {Category} from "../../shared/Models/category";
import {CategoryService} from "../../shared/Services/category.service";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.refresh()
  }

  refresh()
  {
    this.categoryService.getCategories()
      .subscribe(listOfCategories =>
      {
        this.categories = listOfCategories;
      });
  }

  delete(id: number)
  {
    this.categoryService.deleteCategory(id)
      .subscribe(message =>
      {
        console.log('Deleted category, got message: ' + message);
        this.refresh();
      });
  }
}
