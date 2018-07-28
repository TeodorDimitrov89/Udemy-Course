import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActionSheetController, AlertController, NavController, NavParams, ToastController} from 'ionic-angular';
import {RecipeService} from "../../services/recipe-service/recipe";
import {Recipe} from "../../models/recipe";


@Component({
    selector: 'page-edit-recipe',
    templateUrl: 'edit-recipe.html',
})

export class EditRecipePage implements OnInit {
    mode:string = 'New';
    selectOptions: Array<String> = ['Easy', 'Medium', 'Hard'];
    recipeForm: FormGroup;
    recipe: Recipe;
    index: number;

    constructor(private navParams: NavParams,
                private actionSheetCtrl: ActionSheetController,
                private alertCtrl: AlertController,
                private toastCtrl: ToastController,
                private recipeService: RecipeService,
                private navCtrl: NavController) {
    }

    ngOnInit() {
        this.mode = this.navParams.get('mode');
        if (this.mode == 'Edit') {
            this.recipe = this.navParams.get('recipe');
            this.index = this.navParams.get('index');
        }

        this.initializeForm();
    }

    onSubmit() {
        const value = this.recipeForm.value;
        let ingredients = [];

        if (value.ingredients.length > 0) {
            ingredients = value.ingredients.map(name => {
                return {name: name, amount: 1};
            });
        }
        if(this.mode == 'Edit') {
            this.recipeService.updateRecipe(this.index,value.title, value.description, value.difficulty, ingredients)
        } else {
            this.recipeService.addRecipe(value.title, value.description, value.difficulty, ingredients);
        }


        this.recipeForm.reset();
        this.navCtrl.popToRoot();
    }

    onManageIngredient() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'Add Ingredient',
                    handler: () => {
                        this.createNewIngredientAlert().present();
                    }
                },

                {
                    text: 'Remove all Ingredient',
                    role: 'destructive',
                    handler: () => {
                        this.removeAllIngredientItems();

                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]

        });
        actionSheet.present();
    }

    private presentToast(toastOptions: Object) {
        let toast = this.toastCtrl.create(toastOptions);
        toast.present();
    }

    private createNewIngredientAlert() {
        return this.alertCtrl.create({
            title: 'Add Ingredient',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Add',
                    handler: data => {
                        let toastOptions = {
                            message: 'Ingredient was added successfully',
                            duration: 2000,
                            // showCloseButton:true,
                            // closeButtonText: 'Ok'
                        };
                        if (data.name.trim() == '' || data.name == null) {
                            toastOptions.message = 'Name should not be empty!';
                            this.presentToast(toastOptions);
                            return;
                        }

                        (this.recipeForm.get('ingredients') as FormArray)
                            .push(new FormControl(data.name, Validators.required));
                        this.presentToast(toastOptions);
                    }
                }
            ]
        });
    }

    private removeAllIngredientItems() {
        const fArray: FormArray = this.recipeForm.get('ingredients') as FormArray;
        const len = fArray.length;
        if (len > 0) {
            for (let i = len - 1; i >= 0; i--) {
                fArray.removeAt(i);
            }
            const toastOptions = {
                message: 'All ingredients was removed successfully',
                duration: 2000,
            };
            this.presentToast(toastOptions);
        }
    }

    private initializeForm() {
        let title = null;
        let description = null;
        let difficulty = 'Medium';
        let ingredients = [];

        if(this.mode == 'Edit') {
            title = this.recipe.title;
            description = this.recipe.description;
            difficulty = this.recipe.difficulty;
            for(let ingredient of this.recipe.ingredients) {
                ingredients.push(new FormControl(ingredient.name, Validators.required))
            }
        }
        this.recipeForm = new FormGroup({
            'title': new FormControl(title, Validators.required),
            'description': new FormControl(description, Validators.required),
            'difficulty': new FormControl(difficulty, Validators.required),
            'ingredients': new FormArray(ingredients)
        });
    }

}
