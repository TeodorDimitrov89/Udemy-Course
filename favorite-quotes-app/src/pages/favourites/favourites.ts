import {Component} from '@angular/core';
import {QuotesService} from "../../services/quotes";
import {Quote} from "../../data/quotes.interface";
import {ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  favouriteQuotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter() {
    this.favouriteQuotes = this.quotesService.getFavouriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove) {
        this.quotesService.removeQuoteFavourite(quote);
      }
    });
  }
}
