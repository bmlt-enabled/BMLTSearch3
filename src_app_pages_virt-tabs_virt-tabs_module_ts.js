(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_virt-tabs_virt-tabs_module_ts"],{

/***/ 767:
/*!*************************************************************!*\
  !*** ./src/app/pages/virt-tabs/virt-tabs-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VirtTabsPageRoutingModule: () => (/* binding */ VirtTabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _virt_tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-tabs.page */ 227);




const routes = [{
  path: 'virt-tabs',
  component: _virt_tabs_page__WEBPACK_IMPORTED_MODULE_0__.VirtTabsPage,
  children: [{
    path: 'list',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_component_component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_virt-meetings_virt-meetings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../virt-meetings/virt-meetings.module */ 8541)).then(m => m.VirtMeetingsPageModule)
  }, {
    path: 'search',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_component_component_module_ts"), __webpack_require__.e("src_app_pages_virt-search_virt-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../virt-search/virt-search.module */ 2080)).then(m => m.VirtSearchPageModule)
  }, {
    path: '',
    redirectTo: 'virt-tabs/list',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: 'virt-tabs/list',
  pathMatch: 'full'
}];
let VirtTabsPageRoutingModule = class VirtTabsPageRoutingModule {};
VirtTabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], VirtTabsPageRoutingModule);


/***/ }),

/***/ 6899:
/*!*****************************************************!*\
  !*** ./src/app/pages/virt-tabs/virt-tabs.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VirtTabsPageModule: () => (/* binding */ VirtTabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _virt_tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-tabs-routing.module */ 767);
/* harmony import */ var _virt_tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virt-tabs.page */ 227);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 8418);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 5939);









let VirtTabsPageModule = class VirtTabsPageModule {};
VirtTabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _virt_tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.VirtTabsPageRoutingModule],
  declarations: [_virt_tabs_page__WEBPACK_IMPORTED_MODULE_1__.VirtTabsPage],
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser]
})], VirtTabsPageModule);


/***/ }),

/***/ 227:
/*!***************************************************!*\
  !*** ./src/app/pages/virt-tabs/virt-tabs.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VirtTabsPage: () => (/* binding */ VirtTabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _virt_tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-tabs.page.html?ngResource */ 3599);
/* harmony import */ var _virt_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virt-tabs.page.scss?ngResource */ 8427);
/* harmony import */ var _virt_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_virt_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 8418);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
var _class;






let VirtTabsPage = (_class = class VirtTabsPage {
  constructor(iab, translate) {
    this.iab = iab;
    this.translate = translate;
  }
  ngOnInit() {}
  visit() {
    const browser = this.iab.create('https://virtual-na.org', '_system');
  }
}, _class.ctorParameters = () => [{
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService
}], _class);
VirtTabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-virt-tabs',
  template: _virt_tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_virt_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], VirtTabsPage);


/***/ }),

/***/ 8427:
/*!****************************************************************!*\
  !*** ./src/app/pages/virt-tabs/virt-tabs.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3599:
/*!****************************************************************!*\
  !*** ./src/app/pages/virt-tabs/virt-tabs.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    \n    <ion-tab-button tab=\"list\">\n      <ion-icon name=\"list\"></ion-icon>\n      <ion-label>{{'LIST' | translate}} virtual-na.org</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"search\">\n      <ion-icon name=\"search\"></ion-icon>\n      <ion-label>{{'SEARCH' | translate}} virtual-na.org </ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"visit()\">\n      <ion-icon name=\"cloud\"></ion-icon>\n      <ion-label>{{'VISIT' | translate}} virtual-na.org</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_virt-tabs_virt-tabs_module_ts.js.map