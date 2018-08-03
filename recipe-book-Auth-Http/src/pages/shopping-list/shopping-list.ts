import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, PopoverController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-service/shopping";
import {Ingredient} from "../../models/ingredient";
import {SLOptionsPage} from "./sl-options/sl-options";
import {AuthService} from "../../services/auth/auth";

@IonicPage()
@Component({
    selector: 'page-shopping-list',
    templateUrl: 'shopping-list.html',
})

export class ShoppingListPage {
    listItems: Ingredient[] = [];

    constructor(private shoppingService: ShoppingListService,
                private popoverCtrl: PopoverController,
                private authService: AuthService,
                private loadingCtrl: LoadingController,
                private alertCtrl: AlertController) {
    }

    ionViewWillEnter() {
        this.loadItems();
    }

    onAddItem(form: NgForm) {
        let values = form.form.value;
        let name = values.ingredientName;
        let amount = values.amount;

        this.shoppingService.addItem(name, amount);
        form.reset();
        this.loadItems();
    }

    onRemoveItem(index: number) {
        this.shoppingService.removeItem(index);
        this.loadItems();
    }

    onShowOptions(event: MouseEvent) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        let popover = this.popoverCtrl.create(SLOptionsPage);
        popover.present({ ev: event });

        popover.onDidDismiss(data => {
           if(data == null) {
               return;
           }
           if(data.action == 'load') {
               loading.present();

               this.authService.getActiveUser().getIdToken()
                   .then((token) => {
                       this.shoppingService
                           .fetchList(token)
                           .subscribe(
                               (list: Ingredient[]) => {
                                   loading.dismiss();
                                   if(list) {
                                       this.listItems = list;
                                   } else {
                                       this.listItems = [];
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
                       this.shoppingService
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

    private loadItems() {
        this.listItems = this.shoppingService.getItems();
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
