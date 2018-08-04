import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {AddPlacePage} from "../pages/add-place/add-place";
import {HomePage} from "../pages/home/home";
import {SetLocationPage} from "../pages/set-location/set-location";
import {PlacePage} from "../pages/place/place";


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AddPlacePage,
        SetLocationPage,
        PlacePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        AddPlacePage,
        SetLocationPage,
        PlacePage

    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
