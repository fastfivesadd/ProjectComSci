(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-managestore-managestore-module"], {
    /***/
    "3q6T":
    /*!**********************************************************************!*\
      !*** ./src/app/partofpage/managestore/managestore-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ManagestorePageRoutingModule */

    /***/
    function q6T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagestorePageRoutingModule", function () {
        return ManagestorePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _managestore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./managestore.page */
      "fSdC");

      var routes = [{
        path: '',
        component: _managestore_page__WEBPACK_IMPORTED_MODULE_3__["ManagestorePage"]
      }, {
        path: 'addstore',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | partofpage-addstore-addstore-module */
          "partofpage-addstore-addstore-module").then(__webpack_require__.bind(null,
          /*! ../../partofpage/addstore/addstore.module */
          "u/bj")).then(function (m) {
            return m.AddstorePageModule;
          });
        }
      }, {
        path: 'editstore',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | partofpage-editstore-editstore-module */
          "partofpage-editstore-editstore-module").then(__webpack_require__.bind(null,
          /*! ../../partofpage/editstore/editstore.module */
          "UiBP")).then(function (m) {
            return m.EditstorePageModule;
          });
        }
      }, {
        path: 'managefield',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | partofpage-managefield-managefield-module */
          "partofpage-managefield-managefield-module").then(__webpack_require__.bind(null,
          /*! ../../partofpage/managefield/managefield.module */
          "WpsQ")).then(function (m) {
            return m.ManagefieldPageModule;
          });
        }
      }];

      var ManagestorePageRoutingModule = function ManagestorePageRoutingModule() {
        _classCallCheck(this, ManagestorePageRoutingModule);
      };

      ManagestorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ManagestorePageRoutingModule);
      /***/
    },

    /***/
    "Two8":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/managestore/managestore.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Two8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>managestore</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p-table [value]=\"products\">\r\n    <ng-template pTemplate=\"caption\">\r\n      <div class=\"p-d-flex p-ai-center p-jc-between\">\r\n        Products\r\n      </div>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Image</th>\r\n        <th>Name</th>\r\n        <th>#</th>\r\n<!--        <th>Telephone</th>-->\r\n<!--        <th>Address</th>-->\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-product>\r\n      <tr>\r\n        <td><img src=\"data:image/png;base64,{{product.picture_store}}\" [alt]=\"product.name_store\" width=\"100\" class=\"p-shadow-4\"  /></td>\r\n        <td>{{product.name_store}}</td>\r\n<!--        <td>{{product.telephone_store}}</td>-->\r\n<!--        <td>{{product.address_store}}</td>-->\r\n\r\n        <td>\r\n            <ion-icon name=\"search-outline\" style=\"width: 25px;height: 25px;\" (click)=\"gotomanagefiled(product.id_store)\"></ion-icon>\r\n            <ion-icon name=\"construct-outline\" style=\"width: 25px;height: 25px;\" (click)=\"gotoEdit()\"></ion-icon>\r\n        </td>\r\n<!--        <td><p-rating [ngModel]=\"product.rating\" [readonly]=\"true\" [cancel]=\"false\"></p-rating></td>-->\r\n<!--        <td><span [class]=\"'product-badge status-' + product.inventoryStatus.toLowerCase()\">{{product.inventoryStatus}}</span></td>-->\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"summary\">\r\n      <div class=\"p-d-flex p-ai-center p-jc-between\">\r\n        In total there are {{products ? products.length : 0 }} products.\r\n      </div>\r\n    </ng-template>\r\n  </p-table>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon (click)=\"goToAddstore()\" name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "fSdC":
    /*!************************************************************!*\
      !*** ./src/app/partofpage/managestore/managestore.page.ts ***!
      \************************************************************/

    /*! exports provided: ManagestorePage */

    /***/
    function fSdC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagestorePage", function () {
        return ManagestorePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_managestore_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./managestore.page.html */
      "Two8");
      /* harmony import */


      var _managestore_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./managestore.page.scss */
      "hFVc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datapass_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../datapass.service */
      "woWk");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ManagestorePage = /*#__PURE__*/function () {
        function ManagestorePage(datapassService, Http, router) {
          _classCallCheck(this, ManagestorePage);

          this.datapassService = datapassService;
          this.Http = Http;
          this.router = router;
        }

        _createClass(ManagestorePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataUsername = this.datapassService.userIDLogin;
            var ownerid;

            var _iterator = _createForOfIteratorHelper(this.dataUsername),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                ownerid = _step.value;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var dataJSON = {
              owner_store: ownerid.id_member
            };
            this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/getOwnerstore', JSON.stringify(dataJSON)).subscribe(function (datastore) {
              _this.datapassService.datastoreowner = datastore;
              _this.products = datastore;
              _this.datapassService.managedatastore = _this.products;
              console.log(datastore);
            });
          }
        }, {
          key: "goToAddstore",
          value: function goToAddstore() {
            var navigate = this.router.navigate(['/home/tabs/account/managestore/addstore']);
          }
        }, {
          key: "gotoEdit",
          value: function gotoEdit() {
            var navigate = this.router.navigate(['/home/tabs/account/managestore/editstore']);
          }
        }, {
          key: "gotomanagefiled",
          value: function gotomanagefiled(idstore) {
            this.datapassService.idstoreformmanagestore = idstore;
            console.log(this.datapassService.idstoreformmanagestore);
            var navigate = this.router.navigate(['/home/tabs/account/managestore/managefield']);
          }
        }]);

        return ManagestorePage;
      }();

      ManagestorePage.ctorParameters = function () {
        return [{
          type: _datapass_service__WEBPACK_IMPORTED_MODULE_4__["DatapassService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      ManagestorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-managestore',
        template: _raw_loader_managestore_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_managestore_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ManagestorePage);
      /***/
    },

    /***/
    "hFVc":
    /*!**************************************************************!*\
      !*** ./src/app/partofpage/managestore/managestore.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function hFVc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* DOES NOT WORK - not specific enough */\n.popover-content {\n  background: #222;\n}\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class .popover-content {\n  background: #222;\n}\n.my-custom-class {\n  --background: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG9mcGFnZS9tYW5hZ2VzdG9yZS9tYW5hZ2VzdG9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQUE7QUFDQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQSx1RUFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNBO0VBQ0Usa0JBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhcnRvZnBhZ2UvbWFuYWdlc3RvcmUvbWFuYWdlc3RvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cclxuLnBvcG92ZXItY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogIzIyMjtcclxufVxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzcyAucG9wb3Zlci1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG59XHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gIC0tYmFja2dyb3VuZDogIzIyMjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "lype":
    /*!**************************************************************!*\
      !*** ./src/app/partofpage/managestore/managestore.module.ts ***!
      \**************************************************************/

    /*! exports provided: ManagestorePageModule */

    /***/
    function lype(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagestorePageModule", function () {
        return ManagestorePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _managestore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./managestore-routing.module */
      "3q6T");
      /* harmony import */


      var _managestore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./managestore.page */
      "fSdC");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/table */
      "rEr+");

      var ManagestorePageModule = function ManagestorePageModule() {
        _classCallCheck(this, ManagestorePageModule);
      };

      ManagestorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _managestore_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManagestorePageRoutingModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"]],
        declarations: [_managestore_page__WEBPACK_IMPORTED_MODULE_6__["ManagestorePage"]]
      })], ManagestorePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=partofpage-managestore-managestore-module-es5.js.map