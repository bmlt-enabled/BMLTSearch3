(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_virt-search_virt-search_module_ts"],{

/***/ 8024:
/*!*****************************************************************!*\
  !*** ./src/app/pages/virt-search/virt-search-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VirtSearchPageRoutingModule: () => (/* binding */ VirtSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _virt_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-search.page */ 3911);




const routes = [{
  path: '',
  component: _virt_search_page__WEBPACK_IMPORTED_MODULE_0__.VirtSearchPage
}];
let VirtSearchPageRoutingModule = class VirtSearchPageRoutingModule {};
VirtSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], VirtSearchPageRoutingModule);


/***/ }),

/***/ 2080:
/*!*********************************************************!*\
  !*** ./src/app/pages/virt-search/virt-search.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VirtSearchPageModule: () => (/* binding */ VirtSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _virt_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-search-routing.module */ 8024);
/* harmony import */ var _virt_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virt-search.page */ 3911);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 8418);
/* harmony import */ var src_app_providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/meeting-list.service */ 4073);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 142);
/* harmony import */ var _components_component_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/component/component.module */ 6394);
/* harmony import */ var src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/storage.service */ 9031);













let VirtSearchPageModule = class VirtSearchPageModule {};
VirtSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _virt_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.VirtSearchPageRoutingModule, _components_component_component_module__WEBPACK_IMPORTED_MODULE_5__.ComponentModule],
  declarations: [_virt_search_page__WEBPACK_IMPORTED_MODULE_1__.VirtSearchPage],
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser, src_app_providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_3__.MeetingListProvider, _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_4__.HTTP, src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService]
})], VirtSearchPageModule);


/***/ }),

/***/ 3911:
/*!*******************************************************!*\
  !*** ./src/app/pages/virt-search/virt-search.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VirtSearchPage: () => (/* binding */ VirtSearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _virt_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-search.page.html?ngResource */ 9580);
/* harmony import */ var _virt_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virt-search.page.scss?ngResource */ 8536);
/* harmony import */ var _virt_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_virt_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/loading.service */ 2521);
/* harmony import */ var _providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/meeting-list.service */ 4073);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 8418);
/* harmony import */ var _providers_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/storage.service */ 9031);
var _class;









let VirtSearchPage = (_class = class VirtSearchPage {
  constructor(meetingListProvider, loaderCtrl, translate, iab, storage) {
    this.meetingListProvider = meetingListProvider;
    this.loaderCtrl = loaderCtrl;
    this.translate = translate;
    this.iab = iab;
    this.storage = storage;
    this.loader = null;
    this.allVirtMeetings = [];
    this.isLoaded = false;
  }
  ngOnInit() {
    this.getAllVirtMeetings();
  }
  getAllVirtMeetings() {
    this.translate.get('FINDING_MTGS').subscribe(value => {
      this.presentLoader(value);
    });
    this.meetingListProvider.getAllVirtualMeetings().then(data => {
      this.allVirtMeetings = data;
      this.isLoaded = true;
      this.dismissLoader();
    });
  }
  presentLoader(loaderText) {
    if (!this.loader) {
      this.loader = this.loaderCtrl.present(loaderText);
    }
  }
  dismissLoader() {
    if (this.loader) {
      this.loader = this.loaderCtrl.dismiss();
      this.loader = null;
    }
  }
}, _class.ctorParameters = () => [{
  type: _providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_3__.MeetingListProvider
}, {
  type: src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser
}, {
  type: _providers_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService
}], _class);
VirtSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-virt-search',
  template: _virt_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_virt_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], VirtSearchPage);


/***/ }),

/***/ 8536:
/*!********************************************************************!*\
  !*** ./src/app/pages/virt-search/virt-search.page.scss?ngResource ***!
  \********************************************************************/
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

/***/ 9580:
/*!********************************************************************!*\
  !*** ./src/app/pages/virt-search/virt-search.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      virtual-na.org \n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div *ngIf=\"isLoaded\">\n  <app-meeting-list [data]=\"allVirtMeetings\" meetingType='virt' expandAll='false'></app-meeting-list>\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_virt-search_virt-search_module_ts.js.map