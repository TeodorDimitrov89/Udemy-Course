import { Injectable } from '@angular/core';
import {Recipe} from "../../models/recipe";
import {Ingredient} from "../../models/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];

  addRecipe(title:string,
            description:string,
            difficulty:string,
            ingredient:Ingredient[]) {
    this.recipes.push(new Recipe(title,description, difficulty, ingredient));
  }

  getRecipes() {
    return this.recipes.slice();
  }

  updateRecipe(index: number,
               title:string,
               description:string,
               difficulty:string,
               ingredient:Ingredient[]) {

    this.recipes[index] = new Recipe(title,description,difficulty,ingredient);
  }

  removeRecipe(index: number) {
    this.recipes.splice(index,1);
  }

}
