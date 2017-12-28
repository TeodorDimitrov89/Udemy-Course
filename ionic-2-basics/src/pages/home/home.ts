import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsersPage} from "../users/users";
import {ShopPage} from "../shop/shop";
import {BuyoutPage} from "../buyout/buyout";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  private navigateToPage(page) {
    return this.navCtrl.push(page);
  }
  onGoToUsers() {
    this.navigateToPage(UsersPage);
  }
  onGoToShop() {
    this.navigateToPage(ShopPage);
  }
}
