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
import {AgmCoreModule} from "@agm/core";

//AIzaSyD9IRHLtHndx5pW_p1q8LYaBJXWj4ukj_Y

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
        IonicModule.forRoot(MyApp),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD9IRHLtHndx5pW_p1q8LYaBJXWj4ukj_Y'
        })
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
