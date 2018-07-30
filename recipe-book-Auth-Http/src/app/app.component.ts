import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import firebase from 'firebase';

import {TabsPage} from "../pages/tabs/tabs";
import {SigninPage} from "../pages/signin/signin";
import {SignupPage} from "../pages/signup/signup";
import {AuthService} from "../services/auth/auth";

@Component({
    templateUrl: 'app.html'
})

export class MyApp {
    rootPage: any = TabsPage;
    signinPage = SigninPage;
    signupPage = SignupPage;
    isAuthenticated = false;

    @ViewChild('nav') nav: NavController;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private authService: AuthService,
                private menuCtrl: MenuController) {
        firebase.initializeApp({
            apiKey: "AIzaSyAA-b33O-WP_Yu2-bmsNx9h67aZl40C1CA",
            authDomain: "ionic3-app-deb80.firebaseapp.com"
        });

        firebase.auth().onAuthStateChanged(user => {
           if(user) {
               this.isAuthenticated = true;
               this.rootPage = TabsPage;
           } else {
               this.isAuthenticated = false;
               this.rootPage = SigninPage;
           }


        });
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    onLoad(page: any) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    }

    onLogout() {
        this.authService.logout();
        this.menuCtrl.close();
        this.nav.setRoot(SigninPage);
    }

}

