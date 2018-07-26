import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})

export class EditRecipePage implements OnInit{
  mode = 'New';
  selectOptions: Array<String> = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;

  constructor(public navParams: NavParams) {}

  ngOnInit() {
    this.navParams.get('mode');
    this.initializeForm();
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  private initializeForm() {
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null,Validators.required),
      'difficulty': new FormControl('Medium',Validators.required)
    });
  }
}
