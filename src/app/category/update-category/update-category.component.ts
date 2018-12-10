import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../shared/Services/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id: number;

  updateCategoryForm = new FormGroup( {
    categoryName: new FormControl(''),
  });

  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('categoryId');
    this.categoryService.getCategoryById(this.id).
      subscribe(cat => {
        this.updateCategoryForm.patchValue({
          categoryName: cat.categoryName
        });
    });
  }

  save(){
    const category = this.updateCategoryForm.value;
    this.categoryService.updateCategory(category)
      .subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
  }
}


