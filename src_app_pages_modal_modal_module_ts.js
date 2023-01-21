"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_modal_modal_module_ts"],{

/***/ 9378:
/*!*****************************************************!*\
  !*** ./src/app/pages/modal/modal-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageRoutingModule": () => (/* binding */ ModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.page */ 8167);




const routes = [{
  path: '',
  component: _modal_page__WEBPACK_IMPORTED_MODULE_0__.ModalPage
}];
let ModalPageRoutingModule = class ModalPageRoutingModule {};
ModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ModalPageRoutingModule);


/***/ }),

/***/ 9399:
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageModule": () => (/* binding */ ModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-routing.module */ 9378);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _components_component_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/component/component.module */ 8671);
/* harmony import */ var src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/storage.service */ 7852);









let ModalPageModule = class ModalPageModule {};
ModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _components_component_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule],
  providers: [src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService]
})], ModalPageModule);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_modal_modal_module_ts.js.map