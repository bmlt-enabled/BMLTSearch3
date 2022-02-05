"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_virt-tabs_virt-tabs_module_ts"],{

/***/ 28107:
/*!*************************************************************!*\
  !*** ./src/app/pages/virt-tabs/virt-tabs-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtTabsPageRoutingModule": () => (/* binding */ VirtTabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _virt_tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-tabs.page */ 65103);




const routes = [
    {
        path: 'virt-tabs',
        component: _virt_tabs_page__WEBPACK_IMPORTED_MODULE_0__.VirtTabsPage,
        children: [
            {
                path: 'list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_component_component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_virt-meetings_virt-meetings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../virt-meetings/virt-meetings.module */ 5726)).then(m => m.VirtMeetingsPageModule)
            },
            {
                path: 'search',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_component_component_module_ts"), __webpack_require__.e("src_app_pages_virt-search_virt-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../virt-search/virt-search.module */ 52146)).then(m => m.VirtSearchPageModule)
            },
            {
                path: '',
                redirectTo: 'virt-tabs/list',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'virt-tabs/list',
        pathMatch: 'full'
    }
];
let VirtTabsPageRoutingModule = class VirtTabsPageRoutingModule {
};
VirtTabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VirtTabsPageRoutingModule);



/***/ }),

/***/ 96980:
/*!*****************************************************!*\
  !*** ./src/app/pages/virt-tabs/virt-tabs.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtTabsPageModule": () => (/* binding */ VirtTabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _virt_tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-tabs-routing.module */ 28107);
/* harmony import */ var _virt_tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virt-tabs.page */ 65103);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80838);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);









let VirtTabsPageModule = class VirtTabsPageModule {
};
VirtTabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _virt_tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.VirtTabsPageRoutingModule
        ],
        declarations: [_virt_tabs_page__WEBPACK_IMPORTED_MODULE_1__.VirtTabsPage],
        providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser]
    })
], VirtTabsPageModule);



/***/ }),

/***/ 65103:
/*!***************************************************!*\
  !*** ./src/app/pages/virt-tabs/virt-tabs.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtTabsPage": () => (/* binding */ VirtTabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_ngtools_webpack_src_loaders_direct_resource_js_virt_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./virt-tabs.page.html */ 24583);
/* harmony import */ var _virt_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virt-tabs.page.scss */ 89405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80838);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 90466);






let VirtTabsPage = class VirtTabsPage {
    constructor(iab, translate) {
        this.iab = iab;
        this.translate = translate;
    }
    ngOnInit() {
    }
    visit() {
        const browser = this.iab.create('https://virtual-na.org', '_system');
    }
};
VirtTabsPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService }
];
VirtTabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-virt-tabs',
        template: _home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_ngtools_webpack_src_loaders_direct_resource_js_virt_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_virt_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VirtTabsPage);



/***/ }),

/***/ 24583:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/virt-tabs/virt-tabs.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    \n    <ion-tab-button tab=\"list\">\n      <ion-icon name=\"list\"></ion-icon>\n      <ion-label>{{'LIST' | translate}} virtual-na.org</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"search\">\n      <ion-icon name=\"search\"></ion-icon>\n      <ion-label>{{'SEARCH' | translate}} virtual-na.org </ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"visit()\">\n      <ion-icon name=\"cloud\"></ion-icon>\n      <ion-label>{{'VISIT' | translate}} virtual-na.org</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ 89405:
/*!*****************************************************!*\
  !*** ./src/app/pages/virt-tabs/virt-tabs.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXJ0LXRhYnMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_virt-tabs_virt-tabs_module_ts.js.map