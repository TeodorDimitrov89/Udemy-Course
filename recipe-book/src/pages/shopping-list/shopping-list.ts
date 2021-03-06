import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-service/shopping";
import {Ingredient} from "../../models/ingredient";

@IonicPage()
@Component({
    selector: 'page-shopping-list',
    templateUrl: 'shopping-list.html',
})

export class ShoppingListPage {
    listItems: Ingredient[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public shoppingService: ShoppingListService) {
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

    private loadItems() {
        this.listItems = this.shoppingService.getItems();
    }


}
