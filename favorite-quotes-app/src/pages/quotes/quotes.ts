import {Component, OnInit} from '@angular/core';
import {Quote} from "../../data/quotes.interface";
import {AlertController, NavParams} from "ionic-angular";
import {QuotesService} from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})

export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(private navParams: NavParams,
              private alertCtrl: AlertController,
              private quotesService: QuotesService) {
  }

  // ionViewDidLoad() {
  //  this.quoteGroup = this.navParams.data;
  //  Add elvis operator (?) in template to use this approach
  // }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddFavourites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Ok go ahead',
          handler: () => {
            this.quotesService.addQuoteFavourites(selectedQuote);
            // this.navCtrl.push(FavouritesPage);
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        }
      ]
    });
    alert.present();
  }
  onRemoveFavourites(quote:Quote) {
    this.quotesService.removeQuoteFavourite(quote)
  }

  isFavourite(quote: Quote) {
    return this.quotesService.isFavourite(quote);
  }
}
