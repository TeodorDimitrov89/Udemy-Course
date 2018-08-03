import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, PopoverController} from "ionic-angular";
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {RecipeService} from "../../services/recipe-service/recipe";
import {Recipe} from "../../models/recipe";
import {RecipePage} from "../recipe/recipe";
import {DatabaseOptionsPage} from "../database-options/database-options";
import {Ingredient} from "../../models/ingredient";
import {AuthService} from "../../services/auth/auth";


@Component({
    selector: 'page-recipes',
    templateUrl: 'recipes.html',
})

export class RecipesPage {
    recipes: Recipe[];

    constructor(
            private navCtrl: NavController,
            private recipeService: RecipeService,
            private popoverCtrl: PopoverController,
            private authService: AuthService,
            private alertCtrl: AlertController,
            private loadingCtrl: LoadingController,
    ){}

    onNewRecipe() {
        this.navCtrl.push(EditRecipePage, {mode: 'New'});
    }

    ionViewWillEnter() {
        this.recipes = this.recipeService.getRecipes();


    }

    onLoadRecipe(recipe:Recipe, index: number) {
        this.navCtrl.push(RecipePage, { recipe:recipe, index:index });
    }


    onShowOptions(event: MouseEvent) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        let popover = this.popoverCtrl.create(DatabaseOptionsPage);
        popover.present({ ev: event });

        popover.onDidDismiss(data => {
            if(!data) {
                return;
            }
            if(data.action == 'load') {
                loading.present();

                this.authService.getActiveUser().getIdToken()
                    .then((token) => {
                        this.recipeService
                            .fetchList(token)
                            .subscribe(
                                (list: Recipe[]) => {
                                    loading.dismiss();
                                    if(list) {

                                        this.recipes = list;
                                    } else {
                                        this.recipes = [];
                                    }
                                },
                                error => {
                                    loading.dismiss();
                                    this.handleError(error.json().error);
                                }
                            );

                    });
            } else if(data.action == 'store') {
                loading.present();
                this.authService.getActiveUser().getIdToken()
                    .then((token) => {
                        this.recipeService
                            .storeList(token)
                            .subscribe(
                                () => {
                                    loading.dismiss();
                                    console.log('List Saved!!')
                                },
                                error => {
                                    loading.dismiss();
                                    this.handleError(error.json().error);
                                }
                            );
                    });
            }
        });
    }



    private handleError(errorMessage: string) {
        const alert = this.alertCtrl.create({
            title: 'An error occurred!',
            message: errorMessage,
            buttons: ['Ok']
        });
        alert.present();
    }
}
