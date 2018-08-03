import { Injectable } from '@angular/core';
import { Ingredient } from "../../models/ingredient";
import {AuthService} from "../auth/auth";
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import {Observable} from "rxjs/Observable";
@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  // private id:number = 0;
    constructor(private http: HttpClient,
                private authService: AuthService){}
  addItem(name:string, amount:number) {
      // this.ingredients.push(new Ingredient(this.id,name,amount));
      this.ingredients.push(new Ingredient(name,amount));
      // this.id++;
  }

  addItems(items:Ingredient[]) {
    this.ingredients.push(...items);
  }

  getItems() {
    return this.ingredients.slice(0);
  }

  removeItem(index: number) {
      // const position = this.ingredients.findIndex((i) => {
      //     return i.id === item.id;
      // });
      this.ingredients.splice(index,1);
  }

  storeList(token: string) {
     const userId = this.authService.getActiveUser().uid;
     return this.http.put('https://ionic3-app-deb80.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token, this.ingredients);
  }

  fetchList(token: string): Observable<Ingredient[]> {
      const userId = this.authService.getActiveUser().uid;
      return this.http.get<Ingredient[]>('https://ionic3-app-deb80.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token)
          .pipe(map(ingredients => {
                 if(ingredients) {
                     this.ingredients = ingredients;
                     return ingredients;
                 }
              })
          );
  }
}
