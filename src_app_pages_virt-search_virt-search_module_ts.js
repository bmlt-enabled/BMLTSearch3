"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_virt-search_virt-search_module_ts"],{

/***/ 43867:
/*!*****************************************************************!*\
  !*** ./src/app/pages/virt-search/virt-search-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtSearchPageRoutingModule": () => (/* binding */ VirtSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _virt_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-search.page */ 82446);




const routes = [
    {
        path: '',
        component: _virt_search_page__WEBPACK_IMPORTED_MODULE_0__.VirtSearchPage
    }
];
let VirtSearchPageRoutingModule = class VirtSearchPageRoutingModule {
};
VirtSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VirtSearchPageRoutingModule);



/***/ }),

/***/ 52146:
/*!*********************************************************!*\
  !*** ./src/app/pages/virt-search/virt-search.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtSearchPageModule": () => (/* binding */ VirtSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _virt_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-search-routing.module */ 43867);
/* harmony import */ var _virt_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virt-search.page */ 82446);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80838);
/* harmony import */ var src_app_providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/meeting-list.service */ 43769);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 49754);
/* harmony import */ var _components_component_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/component/component.module */ 27572);
/* harmony import */ var src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/storage.service */ 35432);













let VirtSearchPageModule = class VirtSearchPageModule {
};
VirtSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
            _virt_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.VirtSearchPageRoutingModule,
            _components_component_component_module__WEBPACK_IMPORTED_MODULE_5__.ComponentModule
        ],
        declarations: [_virt_search_page__WEBPACK_IMPORTED_MODULE_1__.VirtSearchPage],
        providers: [
            _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser,
            src_app_providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_3__.MeetingListProvider,
            _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_4__.HTTP,
            src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
        ]
    })
], VirtSearchPageModule);



/***/ }),

/***/ 82446:
/*!*******************************************************!*\
  !*** ./src/app/pages/virt-search/virt-search.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtSearchPage": () => (/* binding */ VirtSearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_ngtools_webpack_src_loaders_direct_resource_js_virt_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./virt-search.page.html */ 89475);
/* harmony import */ var _virt_search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virt-search.page.scss */ 50080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/loading.service */ 15038);
/* harmony import */ var _providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/meeting-list.service */ 43769);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80838);
/* harmony import */ var _providers_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/storage.service */ 35432);









let VirtSearchPage = class VirtSearchPage {
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
        this.translate.get('FINDING_MTGS').subscribe(value => { this.presentLoader(value); });
        this.meetingListProvider.getAllVirtualMeetings().then((data) => {
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
};
VirtSearchPage.ctorParameters = () => [
    { type: _providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_3__.MeetingListProvider },
    { type: src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser },
    { type: _providers_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService }
];
VirtSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-virt-search',
        template: _home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_ngtools_webpack_src_loaders_direct_resource_js_virt_search_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_virt_search_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VirtSearchPage);



/***/ }),

/***/ 89475:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/virt-search/virt-search.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      virtual-na.org \n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div *ngIf=\"isLoaded\">\n  <app-meeting-list [data]=\"allVirtMeetings\" meetingType='virt'></app-meeting-list>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ 50080:
/*!*********************************************************!*\
  !*** ./src/app/pages/virt-search/virt-search.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXJ0LXNlYXJjaC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_virt-search_virt-search_module_ts.js.map