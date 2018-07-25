import { Injectable } from '@angular/core';
import { Ingredient } from "../../models/ingredient";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  addItem(name:string, amount:number) {
      this.ingredients.push(new Ingredient(name,amount));
      console.log(this.ingredients);
  }

  addItems(items:Ingredient[]) {
    this.ingredients.push(...items);
  }

  getItems() {
    return this.ingredients.slice(0);
  }

  removeItem(index: number) {
    this.ingredients.splice(index,1);
  }

}
