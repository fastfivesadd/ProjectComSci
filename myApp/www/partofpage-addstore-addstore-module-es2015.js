(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-addstore-addstore-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/addstore/addstore.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/addstore/addstore.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>addstore</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/partofpage/addstore/addstore-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/partofpage/addstore/addstore-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: AddstorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddstorePageRoutingModule", function() { return AddstorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addstore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addstore.page */ "./src/app/partofpage/addstore/addstore.page.ts");




const routes = [
    {
        path: '',
        component: _addstore_page__WEBPACK_IMPORTED_MODULE_3__["AddstorePage"]
    }
];
let AddstorePageRoutingModule = class AddstorePageRoutingModule {
};
AddstorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddstorePageRoutingModule);



/***/ }),

/***/ "./src/app/partofpage/addstore/addstore.module.ts":
/*!********************************************************!*\
  !*** ./src/app/partofpage/addstore/addstore.module.ts ***!
  \********************************************************/
/*! exports provided: AddstorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddstorePageModule", function() { return AddstorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addstore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addstore-routing.module */ "./src/app/partofpage/addstore/addstore-routing.module.ts");
/* harmony import */ var _addstore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addstore.page */ "./src/app/partofpage/addstore/addstore.page.ts");







let AddstorePageModule = class AddstorePageModule {
};
AddstorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addstore_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddstorePageRoutingModule"]
        ],
        declarations: [_addstore_page__WEBPACK_IMPORTED_MODULE_6__["AddstorePage"]]
    })
], AddstorePageModule);



/***/ }),

/***/ "./src/app/partofpage/addstore/addstore.page.scss":
/*!********************************************************!*\
  !*** ./src/app/partofpage/addstore/addstore.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRvZnBhZ2UvYWRkc3RvcmUvYWRkc3RvcmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/partofpage/addstore/addstore.page.ts":
/*!******************************************************!*\
  !*** ./src/app/partofpage/addstore/addstore.page.ts ***!
  \******************************************************/
/*! exports provided: AddstorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddstorePage", function() { return AddstorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AddstorePage = class AddstorePage {
    constructor() { }
    ngOnInit() {
    }
};
AddstorePage.ctorParameters = () => [];
AddstorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addstore',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addstore.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/addstore/addstore.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addstore.page.scss */ "./src/app/partofpage/addstore/addstore.page.scss")).default]
    })
], AddstorePage);



/***/ })

}]);
//# sourceMappingURL=partofpage-addstore-addstore-module-es2015.js.map