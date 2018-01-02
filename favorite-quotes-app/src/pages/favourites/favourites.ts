import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LibraryPage} from "../library/library";

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  onGoToLibrary() {
    this.navCtrl.push(LibraryPage);
  }
}
