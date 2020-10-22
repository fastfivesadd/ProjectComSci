(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/account/account.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/account/account.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>account</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\" *ngFor=\"let data of dataAccount\">\r\n    <div class=\"row profile\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"profile-sidebar\">\r\n          <div class=\"profile-userpic\">\r\n            <img src=\"assets/img/default-avatar.png\">\r\n          </div>\r\n          <div>\r\n            <div>\r\n              ชื่อ :{{data.firstname_member}} {{data.lasname_member}}\r\n            </div>\r\n            <div>\r\n              ที่อยู่ :{{data.address_member}}\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"underline\">\r\n              <li class=\"active\">\r\n                <a>\r\n                  <ion-icon name=\"home-outline\"></ion-icon>\r\n                  Overview </a>\r\n              </li>\r\n\r\n              <li  (click)=\"goTosettingprofile()\" >\r\n                <a>\r\n                  <ion-icon name=\"settings-outline\"></ion-icon>\r\n                    Account Settings </a>\r\n              </li>\r\n\r\n              <li *ngIf=\" data.status_member == '2'\" (click)=\"goTomanageStore()\">\r\n                <a>\r\n                  <ion-icon name=\"business-outline\"></ion-icon>\r\n                  Manage Store </a>\r\n              </li>\r\n\r\n              <li>\r\n                <a>\r\n                  <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n                  Help </a>\r\n              </li>\r\n\r\n          </div>\r\n          <br>\r\n          <div>\r\n            <ion-button  (click)=\"presentAlertConfirm()\" color=\"danger\"  style=\"height: 40px\">Logout</ion-button>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-9\">\r\n        <div class=\"profile-content\">\r\n          Some user related content goes here...\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/tabs/account/account-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tabs/account/account-routing.module.ts ***!
  \********************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "./src/app/tabs/account/account.page.ts");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    },
    {
        path: 'managestore',
        loadChildren: () => __webpack_require__.e(/*! import() | partofpage-managestore-managestore-module */ "partofpage-managestore-managestore-module").then(__webpack_require__.bind(null, /*! ../../partofpage/managestore/managestore.module */ "./src/app/partofpage/managestore/managestore.module.ts")).then(m => m.ManagestorePageModule)
    },
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/account/account.module.ts":
/*!************************************************!*\
  !*** ./src/app/tabs/account/account.module.ts ***!
  \************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/tabs/account/account-routing.module.ts");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/tabs/account/account.page.ts");







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "./src/app/tabs/account/account.page.scss":
/*!************************************************!*\
  !*** ./src/app/tabs/account/account.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".underline {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/account/account.page.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/account/account.page.ts ***!
  \**********************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _datapass_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../datapass.service */ "./src/app/datapass.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let AccountPage = class AccountPage {
    constructor(datapass, alertController, router) {
        this.datapass = datapass;
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
        this.dataAccount = this.datapass.userIDLogin;
    }
    // ทำที่อยู่สนามและร้านค้า
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'คุณต้องการออกจากระบบใช่ไหม ?',
                buttons: [
                    {
                        text: 'ใช่',
                        handler: () => {
                            const navigate = this.router.navigate(['/login']);
                            console.log('Confirm Okay');
                        }
                    }, {
                        text: 'ไม่',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    goTosettingprofile() {
        const navigate = this.router.navigate(['/home/tabs/account/editprofile']);
    }
    goTomanageStore() {
        const navigate = this.router.navigate(['/home/tabs/account/managestore']);
    }
};
AccountPage.ctorParameters = () => [
    { type: _datapass_service__WEBPACK_IMPORTED_MODULE_2__["DatapassService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/account/account.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account.page.scss */ "./src/app/tabs/account/account.page.scss")).default]
    })
], AccountPage);



/***/ })

}]);
//# sourceMappingURL=tabs-account-account-module-es2015.js.map