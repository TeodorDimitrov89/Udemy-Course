import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {UserPage} from "./user/user";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor(private navCtrl: NavController) {}

  onLoadUser(name:string) {
    this.navCtrl.push(UserPage, { username: name });
  }

  ionViewCanEnter(): boolean | Promise<void> {
    // console.log('ionViewCanEnter')
    const rdm = Math.random();
    return rdm > 0.5;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }


  ionViewWillLeave() {
    console.log('ionViewWillLeave')
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
  ionViewCanLeave(): boolean | Promise<void> {
    console.log('ionViewCanLeave');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000)
    })
  }
  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }
}
