import {Component} from '@angular/core';
import { ModalController } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {SetLocationPage} from "../set-location/set-location";
import {Location} from "../../models/location";

@Component({
    selector: 'page-add-place',
    templateUrl: 'add-place.html',
})
export class AddPlacePage {
    location: Location = {
        lat: 42.682087,
        lng: 23.324592
    };
    locationIsSet:boolean = false;

    constructor(private modalCtrl: ModalController) {}

    onSubmit(form: NgForm) {
        console.log(form.value)
    }


    onOpenMap() {
        const modal = this.modalCtrl.create(SetLocationPage,
            {
                location: this.location,
                isSet:this.locationIsSet
            });

        modal.present();
        modal.onDidDismiss(data => {
            if(data) {
                this.locationIsSet = true;
                this.location = data.location;
            }
        });
    }

}
