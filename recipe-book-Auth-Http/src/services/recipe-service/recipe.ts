import {Injectable} from '@angular/core';
import {Recipe} from "../../models/recipe";
import {Ingredient} from "../../models/ingredient";
import {AuthService} from "../auth/auth";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];

    constructor(private http: HttpClient,
                private authService: AuthService) {}

    addRecipe(title: string,
              description: string,
              difficulty: string,
              ingredient: Ingredient[]) {
        this.recipes.push(new Recipe(title, description, difficulty, ingredient));
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
        this.recipes.splice(index, 1);
    }

    storeList(token: string) {
        const userId = this.authService.getActiveUser().uid;
        console.log(this.recipes);
        return this.http.put('https://ionic3-app-deb80.firebaseio.com/' + userId + '/recipes.json?auth=' + token, this.recipes);
    }

    updateRecipe(index: number,
                 title:string,
                 description:string,
                 difficulty:string,
                 ingredient:Ingredient[]) {

        this.recipes[index] = new Recipe(title,description,difficulty,ingredient);
    }

    fetchList(token: string): Observable<Recipe[]> {
        const userId = this.authService.getActiveUser().uid;
        return this.http.get<Recipe[]>('https://ionic3-app-deb80.firebaseio.com/' + userId + '/recipes.json?auth=' + token)
            .pipe(map(recipes => {
                    if (recipes) {
                        for(let recipe of recipes) {
                            if(!recipe.hasOwnProperty('ingredients')) {
                                recipe.ingredients = [];
                            }
                        }
                        this.recipes = recipes;
                        return recipes;
                    }
                })
            );
    }


}
