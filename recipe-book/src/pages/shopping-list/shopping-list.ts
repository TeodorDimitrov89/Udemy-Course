import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})

export class ShoppingListPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onAddItem(form:NgForm) {
    console.log(form)
  }


}
