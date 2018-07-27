import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {RecipeService} from "../../services/recipe-service/recipe";
import {Recipe} from "../../models/recipe";
import {RecipePage} from "../recipe/recipe";


@Component({
    selector: 'page-recipes',
    templateUrl: 'recipes.html',
})

export class RecipesPage {
    recipes: Recipe[];

    constructor(
            private navCtrl: NavController,
            private recipeService: RecipeService
    ){}

    onNewRecipe() {
        this.navCtrl.push(EditRecipePage, {mode: 'New'});
    }

    ionViewWillEnter() {
        this.recipes = this.recipeService.getRecipes();
    }

    onLoadRecipe(recipe:Recipe, index: number) {
        this.navCtrl.push(RecipePage, {recipe:recipe});
    }
}
