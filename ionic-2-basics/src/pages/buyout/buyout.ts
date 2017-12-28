import {Component, OnInit} from '@angular/core'
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage implements OnInit {
  productData: {name: string, quantity: number};
  constructor(
    private navParams: NavParams,
    private navCtrl: NavController
  ) {}
  ngOnInit() {
    this.productData = this.navParams.data;
  }
  onBuyProduct() {
    this.navCtrl.popToRoot();

  }
}
