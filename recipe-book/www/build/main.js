webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipePage = /** @class */ (function () {
    function RecipePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // ionViewWillLoad() {
    //     this.recipe = this.navParams.get('recipe');
    //     // console.log(this.recipe);
    //     // console.log(this.navParams.get('recipe'));
    // }
    RecipePage.prototype.ngOnInit = function () {
        this.recipe = this.navParams.get('recipe');
        this.index = this.navParams.get('index');
    };
    RecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipe',template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book/src/pages/recipe/recipe.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{ recipe.title }}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <!--<ion-list>-->\n    <!--<ion-item text-center>-->\n    <!--<h2>Spaghetti</h2>-->\n    <!--<ion-note>Easy</ion-note>-->\n    <!--</ion-item>-->\n    <!--</ion-list>-->\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n                <h2>{{ recipe.title }}</h2>\n                <ion-note>{{ recipe.difficulty | uppercase }}</ion-note>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-center>\n                <p>{{ recipe.description }}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-list>\n                    <ion-item *ngFor="let ingredient of recipe.ingredients">\n                        {{ ingredient.name }}\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="recipe.ingredients.length > 0">\n            <ion-col text-center>\n                <button type="button"\n                        clear\n                        ion-button\n                        (click)="onAddIngredients()">Add Ingredient to Shopping List\n                </button>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <button\n                        ion-button\n                        outline\n                        block\n                        (click)="onEditRecipe()">Edit Recipe</button>\n            </ion-col>\n            <ion-col>\n                <button\n                        ion-button\n                        outline\n                        block\n                        (click)="onRemoveRecipe()"\n                        color="danger">Remove Recipe</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book/src/pages/recipe/recipe.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], RecipePage);
    return RecipePage;
    var _a, _b;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_service_shopping__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingListPage = /** @class */ (function () {
    function ShoppingListPage(navCtrl, navParams, shoppingService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shoppingService = shoppingService;
        this.listItems = [];
    }
    ShoppingListPage.prototype.ionViewWillEnter = function () {
        this.loadItems();
    };
    ShoppingListPage.prototype.onAddItem = function (form) {
        var values = form.form.value;
        var name = values.ingredientName;
        var amount = values.amount;
        this.shoppingService.addItem(name, amount);
        form.reset();
        this.loadItems();
    };
    ShoppingListPage.prototype.onRemoveItem = function (index) {
        this.shoppingService.removeItem(index);
        this.loadItems();
    };
    ShoppingListPage.prototype.loadItems = function () {
        this.listItems = this.shoppingService.getItems();
    };
    ShoppingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopping-list',template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book/src/pages/shopping-list/shopping-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Shopping List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onAddItem(f)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>Name</ion-label>\n        <ion-input\n                type="text"\n                name="ingredientName"\n                placeholder="Milk"\n                id="ingredientName"\n                required\n                ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Amount</ion-label>\n        <ion-input\n                type="number"\n                name="amount"\n                placeholder="2"\n                min="1"\n                required\n                ngModel></ion-input>\n      </ion-item>\n\n    </ion-list>\n    <button\n            ion-button\n            type="submit"\n            block\n            [disabled]="!f.valid">Add Item</button>\n  </form>\n  <ion-list >\n    <ion-item *ngFor="let item of listItems; let i = index" (click)="onRemoveItem(i)">\n      <h2>{{ item.name }} ({{ item.amount }})</h2>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book/src/pages/shopping-list/shopping-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_service_shopping__["a" /* ShoppingListService */]])
    ], ShoppingListPage);
    return ShoppingListPage;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/recipe/recipe.module": [
		276,
		1
	],
	"../pages/shopping-list/shopping-list.module": [
		277,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_ingredient__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredients = [];
    }
    // private id:number = 0;
    ShoppingListService.prototype.addItem = function (name, amount) {
        // this.ingredients.push(new Ingredient(this.id,name,amount));
        this.ingredients.push(new __WEBPACK_IMPORTED_MODULE_1__models_ingredient__["a" /* Ingredient */](name, amount));
        // this.id++;
    };
    ShoppingListService.prototype.addItems = function (items) {
        (_a = this.ingredients).push.apply(_a, items);
        var _a;
    };
    ShoppingListService.prototype.getItems = function () {
        return this.ingredients.slice(0);
    };
    ShoppingListService.prototype.removeItem = function (index) {
        // const position = this.ingredients.findIndex((i) => {
        //     return i.id === item.id;
        // });
        this.ingredients.splice(index, 1);
    };
    ShoppingListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ShoppingListService);
    return ShoppingListService;
}());

//# sourceMappingURL=shopping.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_shopping_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipes__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.recipesPage = __WEBPACK_IMPORTED_MODULE_2__recipes_recipes__["a" /* RecipesPage */];
        this.slPage = __WEBPACK_IMPORTED_MODULE_1__shopping_list_shopping_list__["a" /* ShoppingListPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="slPage" tabIcon="list-box" tabTitle="Shopping List" ></ion-tab>\n  <ion-tab [root]="recipesPage" tabIcon="book" tabTitle="Recipes"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book/src/pages/tabs/tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipe_service_recipe__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_recipe__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipesPage = /** @class */ (function () {
    function RecipesPage(navCtrl, recipeService) {
        this.navCtrl = navCtrl;
        this.recipeService = recipeService;
    }
    RecipesPage.prototype.onNewRecipe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__["a" /* EditRecipePage */], { mode: 'New' });
    };
    RecipesPage.prototype.ionViewWillEnter = function () {
        this.recipes = this.recipeService.getRecipes();
    };
    RecipesPage.prototype.onLoadRecipe = function (recipe, index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recipe_recipe__["a" /* RecipePage */], { recipe: recipe, index: index });
    };
    RecipesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipes',template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book/src/pages/recipes/recipes.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="onNewRecipe()">\n                <ion-icon name="add" ></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title text-center>Recipes</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <button ion-item\n                detail-push\n                *ngFor="let recipe of recipes; let i = index"\n                (click)="onLoadRecipe(recipe, i)">\n            <h2>{{recipe.title}}</h2>\n            <ion-note>{{recipe.difficulty}}</ion-note>\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book/src/pages/recipes/recipes.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_recipe_service_recipe__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_recipe_service_recipe__["a" /* RecipeService */]) === "function" && _b || Object])
    ], RecipesPage);
    return RecipesPage;
    var _a, _b;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipe_service_recipe__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditRecipePage = /** @class */ (function () {
    function EditRecipePage(navParams, actionSheetCtrl, alertCtrl, toastCtrl, recipeService, navCtrl) {
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.recipeService = recipeService;
        this.navCtrl = navCtrl;
        this.mode = 'New';
        this.selectOptions = ['Easy', 'Medium', 'Hard'];
    }
    EditRecipePage.prototype.ngOnInit = function () {
        this.navParams.get('mode');
        this.initializeForm();
    };
    EditRecipePage.prototype.onSubmit = function () {
        var value = this.recipeForm.value;
        var ingredients = [];
        if (value.ingredients.length > 0) {
            ingredients = value.ingredients.map(function (name) {
                return { name: name, amount: 1 };
            });
        }
        this.recipeService.addRecipe(value.title, value.description, value.difficulty, ingredients);
        this.recipeForm.reset();
        this.navCtrl.popToRoot();
    };
    EditRecipePage.prototype.onManageIngredient = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'Add Ingredient',
                    handler: function () {
                        _this.createNewIngredientAlert().present();
                    }
                },
                {
                    text: 'Remove all Ingredient',
                    role: 'destructive',
                    handler: function () {
                        _this.removeAllIngredientItems();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditRecipePage.prototype.presentToast = function (toastOptions) {
        var toast = this.toastCtrl.create(toastOptions);
        toast.present();
    };
    EditRecipePage.prototype.createNewIngredientAlert = function () {
        var _this = this;
        return this.alertCtrl.create({
            title: 'Add Ingredient',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        var toastOptions = {
                            message: 'Ingredient was added successfully',
                            duration: 2000,
                        };
                        if (data.name.trim() == '' || data.name == null) {
                            toastOptions.message = 'Name should not be empty!';
                            _this.presentToast(toastOptions);
                            return;
                        }
                        _this.recipeForm.get('ingredients')
                            .push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](data.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required));
                        _this.presentToast(toastOptions);
                    }
                }
            ]
        });
    };
    EditRecipePage.prototype.removeAllIngredientItems = function () {
        var fArray = this.recipeForm.get('ingredients');
        var len = fArray.length;
        if (len > 0) {
            for (var i = len - 1; i >= 0; i--) {
                fArray.removeAt(i);
            }
            var toastOptions = {
                message: 'All ingredients was removed successfully',
                duration: 2000,
            };
            this.presentToast(toastOptions);
        }
    };
    EditRecipePage.prototype.initializeForm = function () {
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'difficulty': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('Medium', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'ingredients': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([])
        });
    };
    EditRecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-recipe',template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book/src/pages/edit-recipe/edit-recipe.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n      <button navPop ion-button icon-only>\n        <ion-icon color="light" name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>{{mode}} Recipe</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="recipeForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Title</ion-label>\n        <ion-input\n            type="text"\n            formControlName="title"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Description</ion-label>\n        <ion-textarea formControlName="description"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Difficulty</ion-label>\n        <ion-select formControlName="difficulty">\n          <ion-option *ngFor="let option of selectOptions"\n                      [value]="option">\n            {{option}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-list>\n\n    <button type="button"\n            clear\n            ion-button\n            block\n            (click)="onManageIngredient()">Manage Ingredient</button>\n\n    <ion-list formArrayName="ingredients">\n      <ion-item *ngFor="let igControl of recipeForm.get(\'ingredients\').controls; let i = index">\n        <ion-label floating>Name</ion-label>\n        <ion-input\n            type="text"\n            [formControlName]="i"\n        ></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button\n            type="submit"\n            ion-button\n            block\n            [disabled]="!recipeForm.valid">{{ mode }} Recipe</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book/src/pages/edit-recipe/edit-recipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__services_recipe_service_recipe__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], EditRecipePage);
    return EditRecipePage;
}());

//# sourceMappingURL=edit-recipe.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shopping_list_shopping_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_recipe_recipe__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_recipe_edit_recipe__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_shopping_service_shopping__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_recipe_service_recipe__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/recipe/recipe.module#RecipePageModule', name: 'RecipePage', segment: 'recipe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopping-list/shopping-list.module#ShoppingListPageModule', name: 'ShoppingListPage', segment: 'shopping-list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__services_shopping_service_shopping__["a" /* ShoppingListService */],
                __WEBPACK_IMPORTED_MODULE_12__services_recipe_service_recipe__["a" /* RecipeService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(
        // public id:number,
        name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());

//# sourceMappingURL=ingredient.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(title, description, difficulty, ingredients) {
        this.title = title;
        this.description = description;
        this.difficulty = difficulty;
        this.ingredients = ingredients;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_recipe__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RecipeService = /** @class */ (function () {
    function RecipeService() {
        this.recipes = [];
    }
    RecipeService.prototype.addRecipe = function (title, description, difficulty, ingredient) {
        this.recipes.push(new __WEBPACK_IMPORTED_MODULE_1__models_recipe__["a" /* Recipe */](title, description, difficulty, ingredient));
    };
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.updateRecipe = function (index, title, description, difficulty, ingredient) {
        this.recipes[index] = new __WEBPACK_IMPORTED_MODULE_1__models_recipe__["a" /* Recipe */](title, description, difficulty, ingredient);
    };
    RecipeService.prototype.removeRecipe = function (index) {
        this.recipes.splice(index, 1);
    };
    RecipeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], RecipeService);
    return RecipeService;
}());

//# sourceMappingURL=recipe.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map