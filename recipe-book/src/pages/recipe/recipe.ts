import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Recipe} from "../../models/recipe";


@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})

export class RecipePage implements OnInit{
  recipe: Recipe;
  index: number;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams) {}

  // ionViewWillLoad() {
  //     this.recipe = this.navParams.get('recipe');
  //     // console.log(this.recipe);
  //     // console.log(this.navParams.get('recipe'));
  // }
    ngOnInit() {
        this.recipe = this.navParams.get('recipe');
        this.index = this.navParams.get('index');
    }
}
