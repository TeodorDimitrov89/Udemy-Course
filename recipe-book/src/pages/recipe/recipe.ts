import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Recipe} from "../../models/recipe";
import {RecipeService} from "../../services/recipe-service/recipe";
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {ShoppingListService} from "../../services/shopping-service/shopping";


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
      public navParams: NavParams,
      public alertCtrl: AlertController,
      public recipeService: RecipeService,
      public shoppingListService: ShoppingListService) {}

  // ionViewWillLoad() {
  //     this.recipe = this.navParams.get('recipe');
  //     // console.log(this.recipe);
  //     // console.log(this.navParams.get('recipe'));
  // }

    ngOnInit() {
        this.recipe = this.navParams.get('recipe');
        this.index = this.navParams.get('index');
    }

    onAddIngredients() {
        this.shoppingListService.addItems(this.recipe.ingredients);
        this.navCtrl.popToRoot();
    }

    onEditRecipe() {
        console.log('edit');
        this.navCtrl.push(EditRecipePage,{ mode:'Edit', recipe: this.recipe, index: this.index});
    }

    onRemoveRecipe() {
        this.showConfirm();
    }

    private showConfirm() {
        const confirm = this.alertCtrl.create({
            title: 'Delete Recipe?',
            message: 'Do you want to delete recipe?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        this.recipeService.removeRecipe(this.index);
                        this.navCtrl.popToRoot();
                    }
                }
            ]
        });
        confirm.present();
    }

}
