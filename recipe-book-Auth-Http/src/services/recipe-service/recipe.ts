import { Injectable } from '@angular/core';
import {Recipe} from "../../models/recipe";
import {Ingredient} from "../../models/ingredient";
import {AuthService} from "../auth/auth";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];


  constructor(
      private http: HttpClient,
      private authService: AuthService
  ) {

  }

  addRecipe(title:string,
            description:string,
            difficulty:string,
            ingredient:Ingredient[]) {
    this.recipes.push(new Recipe(title,description, difficulty, ingredient));
  }

  getRecipes() {
    return this.recipes.slice();
  }

  // updateRecipe(index: number,
  //              title:string,
  //              description:string,
  //              difficulty:string,
  //              ingredient:Ingredient[]) {
  //
  //   this.recipes[index] = new Recipe(title,description,difficulty,ingredient);
  // }

  removeRecipe(index: number) {
    this.recipes.splice(index,1);
  }

  storeRecipe(token: string) {
      const userId = this.authService.getActiveUser().uid;
      return this.http.post('https://ionic3-app-deb80.firebaseio.com/' + userId + '/recipes.json?auth=' + token, this.recipes);
  }
    updateRecipe(index: number,
                 title:string,
                 description:string,
                 difficulty:string,
                 ingredient:Ingredient[]) {

        this.recipes[index] = new Recipe(title,description,difficulty,ingredient);
    }

  fetchRecipe(token: string) {

  }


}
