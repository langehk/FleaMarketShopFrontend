import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../shared/Services/category.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm = new FormGroup( {
    categoryName: new FormControl(''),
  });

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
  }

  save(){
    const category = this.categoryForm.value;
    this.categoryService.addCategory(category)
      .subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
  }

}
