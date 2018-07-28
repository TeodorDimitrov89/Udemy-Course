import { Injectable } from '@angular/core';
import { Ingredient } from "../../models/ingredient";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  // private id:number = 0;

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
}
