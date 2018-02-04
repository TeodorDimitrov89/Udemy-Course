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
        // this.quotesService.removeQuoteFavourite(quote);
        const position = this.favouriteQuotes.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id
        })
        this.favouriteQuotes.splice(position, 1);
      }
      // this.favouriteQuotes =this.quotesService.getFavouriteQuotes();
      // const position = this.favouriteQuotes.findIndex((quoteEl: Quote) => {
      //   return quoteEl.id == quote.id
      // })
      // this.favouriteQuotes.splice(position, 1);
    });
  }
  onRemoveFromFavourites(quote:Quote) {

  }
}
