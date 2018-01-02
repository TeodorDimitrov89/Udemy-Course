import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavouritesPage } from './favourites';
import { LibraryPage } from "../library/library";

@NgModule({
  declarations: [
    FavouritesPage,
    LibraryPage
  ],
  imports: [
    IonicPageModule.forChild(FavouritesPage),
  ],
})
export class FavouritesPageModule {}
