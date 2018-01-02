import {Component} from '@angular/core';
import {QuotesService} from "../../services/quotes";
import {Quote} from "../../data/quotes.interface";

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  favouriteQuotes: Quote[];

  constructor(private quotesService: QuotesService) {}

  ionViewWillEnter() {
    this.favouriteQuotes = this.quotesService.getFavouriteQuotes();
  }
}
