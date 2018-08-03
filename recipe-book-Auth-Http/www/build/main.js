webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipe_service_recipe__ = __webpack_require__(62);
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
        this.mode = this.navParams.get('mode');
        if (this.mode == 'Edit') {
            this.recipe = this.navParams.get('recipe');
            this.index = this.navParams.get('index');
        }
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
        if (this.mode == 'Edit') {
            this.recipeService.updateRecipe(this.index, value.title, value.description, value.difficulty, ingredients);
        }
        else {
            this.recipeService.addRecipe(value.title, value.description, value.difficulty, ingredients);
        }
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
        var title = null;
        var description = null;
        var difficulty = 'Medium';
        var ingredients = [];
        if (this.mode == 'Edit') {
            title = this.recipe.title;
            description = this.recipe.description;
            difficulty = this.recipe.difficulty;
            for (var _i = 0, _a = this.recipe.ingredients; _i < _a.length; _i++) {
                var ingredient = _a[_i];
                ingredients.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](ingredient.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required));
            }
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](title, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](description, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'difficulty': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](difficulty, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'ingredients': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */](ingredients)
        });
    };
    EditRecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-recipe',template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/edit-recipe/edit-recipe.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n      <button navPop ion-button icon-only>\n        <ion-icon color="light" name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>{{mode}} Recipe</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="recipeForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Title</ion-label>\n        <ion-input\n            type="text"\n            formControlName="title"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Description</ion-label>\n        <ion-textarea formControlName="description"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Difficulty</ion-label>\n        <ion-select formControlName="difficulty">\n          <ion-option *ngFor="let option of selectOptions"\n                      [value]="option">\n            {{option}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-list>\n\n    <button type="button"\n            clear\n            ion-button\n            block\n            (click)="onManageIngredient()">Manage Ingredient</button>\n\n    <ion-list formArrayName="ingredients">\n      <ion-item *ngFor="let igControl of recipeForm.get(\'ingredients\').controls; let i = index">\n        <ion-label floating>Name</ion-label>\n        <ion-input\n            type="text"\n            [formControlName]="i"\n        ></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button\n            type="submit"\n            ion-button\n            block\n            [disabled]="!recipeForm.valid">{{ mode }} Recipe</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/edit-recipe/edit-recipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__services_recipe_service_recipe__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]])
    ], EditRecipePage);
    return EditRecipePage;
}());

//# sourceMappingURL=edit-recipe.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_ingredient__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingListService = /** @class */ (function () {
    // private id:number = 0;
    function ShoppingListService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.ingredients = [];
    }
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
    ShoppingListService.prototype.storeList = function (token) {
        var userId = this.authService.getActiveUser().uid;
        return this.http.put('https://ionic3-app-deb80.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token, this.ingredients);
    };
    ShoppingListService.prototype.fetchList = function (token) {
        var _this = this;
        var userId = this.authService.getActiveUser().uid;
        return this.http.get('https://ionic3-app-deb80.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (ingredients) {
            if (ingredients) {
                _this.ingredients = ingredients;
                return ingredients;
            }
        }));
    };
    ShoppingListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthService */]) === "function" && _b || Object])
    ], ShoppingListService);
    return ShoppingListService;
    var _a, _b;
}());

//# sourceMappingURL=shopping.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_recipe_service_recipe__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_recipe_edit_recipe__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shopping_service_shopping__ = __webpack_require__(101);
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
    function RecipePage(navCtrl, navParams, alertCtrl, recipeService, shoppingListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.recipeService = recipeService;
        this.shoppingListService = shoppingListService;
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
    RecipePage.prototype.onAddIngredients = function () {
        this.shoppingListService.addItems(this.recipe.ingredients);
        this.navCtrl.popToRoot();
    };
    RecipePage.prototype.onEditRecipe = function () {
        console.log('edit');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_recipe_edit_recipe__["a" /* EditRecipePage */], { mode: 'Edit', recipe: this.recipe, index: this.index });
    };
    RecipePage.prototype.onRemoveRecipe = function () {
        this.showConfirm();
    };
    RecipePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete Recipe?',
            message: 'Do you want to delete recipe?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.recipeService.removeRecipe(_this.index);
                        _this.navCtrl.popToRoot();
                    }
                }
            ]
        });
        confirm.present();
    };
    RecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipe',template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/recipe/recipe.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{ recipe.title }}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <!--<ion-list>-->\n    <!--<ion-item text-center>-->\n    <!--<h2>Spaghetti</h2>-->\n    <!--<ion-note>Easy</ion-note>-->\n    <!--</ion-item>-->\n    <!--</ion-list>-->\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n                <h2>{{ recipe.title }}</h2>\n                <ion-note>{{ recipe.difficulty | uppercase }}</ion-note>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-center>\n                <p>{{ recipe.description }}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-list>\n                    <ion-item *ngFor="let ingredient of recipe.ingredients">\n                        {{ ingredient.name }}\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="recipe.ingredients.length > 0">\n            <ion-col text-center>\n                <button type="button"\n                        clear\n                        ion-button\n                        (click)="onAddIngredients()">Add Ingredient to Shopping List\n                </button>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <button\n                        ion-button\n                        outline\n                        block\n                        (click)="onEditRecipe()">Edit Recipe</button>\n            </ion-col>\n            <ion-col>\n                <button\n                        ion-button\n                        outline\n                        block\n                        (click)="onRemoveRecipe()"\n                        color="danger">Remove Recipe</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/recipe/recipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_recipe_service_recipe__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_4__services_shopping_service_shopping__["a" /* ShoppingListService */]])
    ], RecipePage);
    return RecipePage;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_service_shopping__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_options_database_options__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth__ = __webpack_require__(46);
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
    function ShoppingListPage(shoppingService, popoverCtrl, authService, loadingCtrl, alertCtrl) {
        this.shoppingService = shoppingService;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
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
    ShoppingListPage.prototype.onShowOptions = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__database_options_database_options__["a" /* DatabaseOptionsPage */]);
        popover.present({ ev: event });
        popover.onDidDismiss(function (data) {
            if (data == null) {
                return;
            }
            if (data.action == 'load') {
                loading.present();
                _this.authService.getActiveUser().getIdToken()
                    .then(function (token) {
                    _this.shoppingService
                        .fetchList(token)
                        .subscribe(function (list) {
                        loading.dismiss();
                        if (list) {
                            _this.listItems = list;
                        }
                        else {
                            _this.listItems = [];
                        }
                    }, function (error) {
                        loading.dismiss();
                        _this.handleError(error.json().error);
                    });
                });
            }
            else if (data.action == 'store') {
                loading.present();
                _this.authService.getActiveUser().getIdToken()
                    .then(function (token) {
                    _this.shoppingService
                        .storeList(token)
                        .subscribe(function () {
                        loading.dismiss();
                        console.log('List Saved!!');
                    }, function (error) {
                        loading.dismiss();
                        _this.handleError(error.json().error);
                    });
                });
            }
        });
    };
    ShoppingListPage.prototype.loadItems = function () {
        this.listItems = this.shoppingService.getItems();
    };
    ShoppingListPage.prototype.handleError = function (errorMessage) {
        var alert = this.alertCtrl.create({
            title: 'An error occurred!',
            message: errorMessage,
            buttons: ['Ok']
        });
        alert.present();
    };
    ShoppingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopping-list',template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/shopping-list/shopping-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onShowOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Shopping List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form #f="ngForm" (ngSubmit)="onAddItem(f)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>Name</ion-label>\n        <ion-input\n                type="text"\n                name="ingredientName"\n                placeholder="Milk"\n                id="ingredientName"\n                required\n                ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Amount</ion-label>\n        <ion-input\n                type="number"\n                name="amount"\n                placeholder="2"\n                min="1"\n                required\n                ngModel></ion-input>\n      </ion-item>\n\n    </ion-list>\n    <button\n            ion-button\n            type="submit"\n            block\n            [disabled]="!f.valid">Add Item</button>\n  </form>\n  <ion-list >\n    <ion-item *ngFor="let item of listItems; let i = index" (click)="onRemoveItem(i)">\n      <h2>{{ item.name }} ({{ item.amount }})</h2>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/shopping-list/shopping-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_shopping_service_shopping__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shopping_service_shopping__["a" /* ShoppingListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_auth__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object])
    ], ShoppingListPage);
    return ShoppingListPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 143:
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
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/recipe/recipe.module": [
		424,
		1
	],
	"../pages/shopping-list/shopping-list.module": [
		425,
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
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_shopping_list__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipes__ = __webpack_require__(253);
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
            selector: 'page-tabs',template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="slPage" tabIcon="list-box" tabTitle="Shopping List" ></ion-tab>\n  <ion-tab [root]="recipesPage" tabIcon="book" tabTitle="Recipes"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/tabs/tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipe_service_recipe__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_recipe__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_options_database_options__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_auth__ = __webpack_require__(46);
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
    function RecipesPage(navCtrl, recipeService, popoverCtrl, authService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.recipeService = recipeService;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
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
    RecipesPage.prototype.onShowOptions = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__database_options_database_options__["a" /* DatabaseOptionsPage */]);
        popover.present({ ev: event });
        popover.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            if (data.action == 'load') {
                loading.present();
                _this.authService.getActiveUser().getIdToken()
                    .then(function (token) {
                    _this.recipeService
                        .fetchList(token)
                        .subscribe(function (list) {
                        loading.dismiss();
                        if (list) {
                            _this.recipes = list;
                        }
                        else {
                            _this.recipes = [];
                        }
                    }, function (error) {
                        loading.dismiss();
                        _this.handleError(error.json().error);
                    });
                });
            }
            else if (data.action == 'store') {
                loading.present();
                _this.authService.getActiveUser().getIdToken()
                    .then(function (token) {
                    _this.recipeService
                        .storeList(token)
                        .subscribe(function () {
                        loading.dismiss();
                        console.log('List Saved!!');
                    }, function (error) {
                        loading.dismiss();
                        _this.handleError(error.json().error);
                    });
                });
            }
        });
    };
    RecipesPage.prototype.handleError = function (errorMessage) {
        var alert = this.alertCtrl.create({
            title: 'An error occurred!',
            message: errorMessage,
            buttons: ['Ok']
        });
        alert.present();
    };
    RecipesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipes',template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/recipes/recipes.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button icon-only menuToggle>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="onNewRecipe()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n\n            <button ion-button icon-only (click)="onShowOptions($event)">\n                <ion-icon name="more"></ion-icon>\n            </button>\n\n        </ion-buttons>\n        <ion-title text-center>Recipes</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <button ion-item\n                detail-push\n                *ngFor="let recipe of recipes; let i = index"\n                (click)="onLoadRecipe(recipe, i)">\n            <h2>{{recipe.title}}</h2>\n            <ion-note>{{recipe.difficulty}}</ion-note>\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/recipes/recipes.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_recipe_service_recipe__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_recipe_service_recipe__["a" /* RecipeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_auth__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _f || Object])
    ], RecipesPage);
    return RecipesPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninPage = /** @class */ (function () {
    function SigninPage(authService, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SigninPage.prototype.onSignin = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you in...'
        });
        loading.present();
        this.authService.signin(form.value.email, form.value.password)
            .then(function (response) {
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signin failed!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/signin/signin.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Signin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSignin(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input\n            type="email"\n            name="email"\n            ngModel\n            required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input\n            type="password"\n            name="password"\n            ngModel\n            required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">Signin</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = /** @class */ (function () {
    function SignupPage(authService, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you up...'
        });
        loading.present();
        this.authService
            .signup(form.value.email, form.value.password)
            .then(function (response) {
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signup failed!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSignup(f)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input\n            type="email"\n            name="email"\n            ngModel\n            required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input\n            type="password"\n            name="password"\n            ngModel\n            [minlength]="6"\n            required></ion-input>\n      </ion-item>\n\n      <!--<ion-item>-->\n        <!--<ion-label floating>Confirm Password</ion-label>-->\n        <!--<ion-input-->\n            <!--type="password"-->\n            <!--name="confirm-password"-->\n            <!--ngModel-->\n            <!--required></ion-input>-->\n      <!--</ion-item>-->\n\n    </ion-list>\n    <button\n        ion-button\n        block\n        [disabled]="!f.valid"\n        type="submit">Signup\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(264);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shopping_list_shopping_list__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_recipe_recipe__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_recipe_edit_recipe__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_shopping_service_shopping__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_recipe_service_recipe__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_database_options_database_options__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(190);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_database_options_database_options__["a" /* DatabaseOptionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
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
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_database_options_database_options__["a" /* DatabaseOptionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__services_shopping_service_shopping__["a" /* ShoppingListService */],
                __WEBPACK_IMPORTED_MODULE_12__services_recipe_service_recipe__["a" /* RecipeService */],
                __WEBPACK_IMPORTED_MODULE_15__services_auth_auth__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
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

/***/ 287:
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

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_auth__ = __webpack_require__(46);
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
    function MyApp(platform, statusBar, splashScreen, authService, menuCtrl) {
        var _this = this;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.signinPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        this.signupPage = __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */];
        this.isAuthenticated = false;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp({
            apiKey: "AIzaSyAA-b33O-WP_Yu2-bmsNx9h67aZl40C1CA",
            authDomain: "ionic3-app-deb80.firebaseapp.com"
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuthenticated = true;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.isAuthenticated = false;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.onLogout = function () {
        this.authService.logout();
        this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/app/app.html"*/'<ion-menu [content]="nav">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title text-center>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item\n              icon-left\n              detail-push\n              (click)="onLoad(rootPage)"\n              *ngIf="isAuthenticated">\n        <ion-icon name="book"></ion-icon>\n        Recipe Book\n      </button>\n      <button ion-item\n              icon-left\n              detail-push\n              (click)="onLoad(signinPage)"\n              *ngIf="!isAuthenticated">\n        <ion-icon name="log-in"></ion-icon>\n        Signin\n      </button>\n\n      <button ion-item\n              icon-left\n              detail-push\n              (click)="onLoad(signupPage)"\n              *ngIf="!isAuthenticated">\n        <ion-icon name="person"></ion-icon>\n        Signup\n      </button>\n\n      <button ion-item\n              icon-left\n              detail-push\n              (click)="onLogout()"\n              *ngIf="isAuthenticated">\n        <ion-icon name="log-out"></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<ion-nav [root]="rootPage" #nav></ion-nav>\n'/*ion-inline-end:"/home/teo/projects/projects/Udemy-Course/recipe-book-Auth-Http/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseOptionsPage = /** @class */ (function () {
    function DatabaseOptionsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    DatabaseOptionsPage.prototype.onAction = function (action) {
        this.viewCtrl.dismiss({ action: action });
    };
    DatabaseOptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-sl-options',
            template: "\n      <ion-grid text-center>\n        <ion-row>\n          <ion-col>\n            <h3>Store & Share</h3>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button outline (click)=\"onAction('load')\">Load List</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button outline (click)=\"onAction('store')\">Save List</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    ",
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ViewController */]) === "function" && _a || Object])
    ], DatabaseOptionsPage);
    return DatabaseOptionsPage;
    var _a;
}());

//# sourceMappingURL=database-options.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signup = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signin = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    AuthService.prototype.getActiveUser = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser;
    };
    return AuthService;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_recipe__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeService = /** @class */ (function () {
    function RecipeService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.recipes = [];
    }
    RecipeService.prototype.addRecipe = function (title, description, difficulty, ingredient) {
        this.recipes.push(new __WEBPACK_IMPORTED_MODULE_1__models_recipe__["a" /* Recipe */](title, description, difficulty, ingredient));
    };
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    // updateRecipe(index: number,
    //              title:string,
    //              description:string,
    //              difficulty:string,
    //              ingredient:Ingredient[]) {
    //
    //   this.recipes[index] = new Recipe(title,description,difficulty,ingredient);
    // }
    RecipeService.prototype.removeRecipe = function (index) {
        this.recipes.splice(index, 1);
    };
    RecipeService.prototype.storeList = function (token) {
        var userId = this.authService.getActiveUser().uid;
        console.log(this.recipes);
        return this.http.put('https://ionic3-app-deb80.firebaseio.com/' + userId + '/recipes.json?auth=' + token, this.recipes);
    };
    RecipeService.prototype.updateRecipe = function (index, title, description, difficulty, ingredient) {
        this.recipes[index] = new __WEBPACK_IMPORTED_MODULE_1__models_recipe__["a" /* Recipe */](title, description, difficulty, ingredient);
    };
    RecipeService.prototype.fetchList = function (token) {
        var _this = this;
        var userId = this.authService.getActiveUser().uid;
        return this.http.get('https://ionic3-app-deb80.firebaseio.com/' + userId + '/recipes.json?auth=' + token)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (recipes) {
            if (recipes) {
                for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                    var recipe = recipes_1[_i];
                    if (!recipe.hasOwnProperty('ingredients')) {
                        recipe.ingredients = [];
                    }
                }
                _this.recipes = recipes;
                return recipes;
            }
        }));
    };
    RecipeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthService */]) === "function" && _b || Object])
    ], RecipeService);
    return RecipeService;
    var _a, _b;
}());

//# sourceMappingURL=recipe.js.map

/***/ })

},[256]);
//# sourceMappingURL=main.js.map