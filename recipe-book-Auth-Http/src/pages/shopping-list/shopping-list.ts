import {Component} from '@angular/core';
import {IonicPage,  PopoverController} from 'ionic-angular';
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
                private authService: AuthService) {
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
        let popover = this.popoverCtrl.create(SLOptionsPage);
        popover.present({ ev: event });

        popover.onDidDismiss(data => {
           if(data.action == 'load') {
               this.authService.getActiveUser().getIdToken()
                   .then((token) => {
                       this.shoppingService
                           .fetchList(token)
                           .subscribe(
                               (list: Ingredient[]) => {
                                   if(list) {
                                       this.listItems = list;
                                   } else {
                                       this.listItems = [];
                                   }
                               },
                               error => {console.log(error)}
                           );
                   });


           } else {
               this.authService.getActiveUser().getIdToken()
                   .then((token) => {
                       this.shoppingService
                           .storeList(token)
                           .subscribe(
                               () => {console.log('success!')},
                               error => {console.log(error)}
                           );
                   });
           }
        });
    }

    private loadItems() {
        this.listItems = this.shoppingService.getItems();
    }
}
