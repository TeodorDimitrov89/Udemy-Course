import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit{
  name: string;
  constructor(
    private navParams: NavParams,
    private navCtrl: NavController
  ) {}
  ngOnInit() {
    this.name = this.navParams.get('username');
  }
  onGoBack() {
    this.navCtrl.popToRoot(); //This method take us back to the bottom most page on the stack which is the root page.
  }
}
