import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {TabsPage} from "../pages/tabs/tabs";
import {ShoppingListPage} from "../pages/shopping-list/shopping-list";
import {RecipesPage} from "../pages/recipes/recipes";
import {RecipePage} from "../pages/recipe/recipe";
import {EditRecipePage} from "../pages/edit-recipe/edit-recipe";
import {ShoppingListService} from '../services/shopping-service/shopping';
import { RecipeService } from '../services/recipe-service/recipe';


@NgModule({
    declarations: [
        MyApp,
        TabsPage,
        ShoppingListPage,
        RecipesPage,
        RecipePage,
        EditRecipePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage,
        ShoppingListPage,
        RecipesPage,
        RecipePage,
        EditRecipePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ShoppingListService,
        RecipeService,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
    ]
})
export class AppModule {
}
