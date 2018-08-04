import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddPlacePage} from "../add-place/add-place";

@IonicPage()
@Component({
    selector: 'home',
    templateUrl: 'home.html',
})
export class HomePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad AwesomePlacesPage');
    }


    onAddPlace() {
        this.navCtrl.push(AddPlacePage);
    }
}
