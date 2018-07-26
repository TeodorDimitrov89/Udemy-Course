import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActionSheetController, AlertController, NavParams} from 'ionic-angular';


@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})

export class EditRecipePage implements OnInit{
  mode = 'New';
  selectOptions: Array<String> = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;

  constructor(public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController) {}

  ngOnInit() {
    this.navParams.get('mode');
    this.initializeForm();
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onManageIngredient() {
    const actionSheet = this.actionSheetCtrl.create({
        title: 'What do you want to do?',
        buttons: [
            {
              text: 'Add Ingredient',
              handler: () => {
                  console.log('Ingredient clicked');

                  this.createNewIngredientAlert();

              }
            },
            {
                text: 'Remove all Ingredient',
                role: 'destructive',
                handler: () => {
                    console.log('Remove all Ingredient clicked');
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

  private createNewIngredientAlert() {
      const prompt = this.alertCtrl.create({
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


                      if(data.name.trim() == '' || data.name == null) {
                          console.log(data);
                      }

                      console.log('Saved clicked');
                  }
              }
          ]
      });

      prompt.present();
  }

  private initializeForm() {
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null,Validators.required),
      'difficulty': new FormControl('Medium',Validators.required)
    });
  }
}
