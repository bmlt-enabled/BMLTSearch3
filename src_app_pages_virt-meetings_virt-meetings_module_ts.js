(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_virt-meetings_virt-meetings_module_ts"],{

/***/ 1707:
/*!*********************************************************************!*\
  !*** ./src/app/pages/virt-meetings/virt-meetings-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VirtMeetingsPageRoutingModule: () => (/* binding */ VirtMeetingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _virt_meetings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-meetings.page */ 5897);




const routes = [{
  path: '',
  component: _virt_meetings_page__WEBPACK_IMPORTED_MODULE_0__.VirtMeetingsPage
}];
let VirtMeetingsPageRoutingModule = class VirtMeetingsPageRoutingModule {};
VirtMeetingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], VirtMeetingsPageRoutingModule);


/***/ }),

/***/ 8541:
/*!*************************************************************!*\
  !*** ./src/app/pages/virt-meetings/virt-meetings.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VirtMeetingsPageModule: () => (/* binding */ VirtMeetingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _virt_meetings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-meetings-routing.module */ 1707);
/* harmony import */ var _virt_meetings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virt-meetings.page */ 5897);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 2898);
/* harmony import */ var _components_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/component/component.module */ 6394);
/* harmony import */ var src_app_providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/meeting-list.service */ 4073);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 8418);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 142);
/* harmony import */ var src_app_providers_service_groups_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/service-groups.service */ 425);
/* harmony import */ var src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/storage.service */ 9031);















let VirtMeetingsPageModule = class VirtMeetingsPageModule {};
VirtMeetingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _virt_meetings_routing_module__WEBPACK_IMPORTED_MODULE_0__.VirtMeetingsPageRoutingModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _components_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule],
  declarations: [_virt_meetings_page__WEBPACK_IMPORTED_MODULE_1__.VirtMeetingsPage],
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser, src_app_providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_4__.MeetingListProvider, _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_6__.HTTP, src_app_providers_service_groups_service__WEBPACK_IMPORTED_MODULE_7__.ServiceGroupsProvider, src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService]
})], VirtMeetingsPageModule);


/***/ }),

/***/ 5897:
/*!***********************************************************!*\
  !*** ./src/app/pages/virt-meetings/virt-meetings.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VirtMeetingsPage: () => (/* binding */ VirtMeetingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _virt_meetings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virt-meetings.page.html?ngResource */ 8516);
/* harmony import */ var _virt_meetings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virt-meetings.page.scss?ngResource */ 9678);
/* harmony import */ var _virt_meetings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_virt_meetings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _providers_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/storage.service */ 9031);
/* harmony import */ var _providers_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/loading.service */ 2521);
/* harmony import */ var _providers_service_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/service-groups.service */ 425);
/* harmony import */ var _providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/meeting-list.service */ 4073);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 8418);
/* harmony import */ var thenby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! thenby */ 6747);
/* harmony import */ var thenby__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(thenby__WEBPACK_IMPORTED_MODULE_7__);
var _class;











let VirtMeetingsPage = (_class = class VirtMeetingsPage {
  constructor(meetingListProvider, serviceGroupsProvider, loaderCtrl, translate, storage, iab) {
    this.meetingListProvider = meetingListProvider;
    this.serviceGroupsProvider = serviceGroupsProvider;
    this.loaderCtrl = loaderCtrl;
    this.translate = translate;
    this.storage = storage;
    this.iab = iab;
    this.serviceGroupHierarchy = [];
    this.shownDay = null;
    this.shownGroupL1 = null;
    this.shownGroupL2 = null;
    this.shownGroupL3 = null;
    this.shownGroupL4 = null;
    this.HTMLGrouping = 'areas';
    this.loader = null;
    this.meetingListArea = [];
    this.areaName = '';
    this.isLoaded = false;
    this.virtualNaLink = 'https://virtual-na.org/';
    this.translate.get('FINDING_MTGS').subscribe(value => {
      this.presentLoader(value);
    });
    this.serviceGroupsProvider.getAllVirtServiceGroups().then(serviceGroupData => {
      this.serviceGroups = serviceGroupData;
      this.serviceGroups.sort((0,thenby__WEBPACK_IMPORTED_MODULE_7__.firstBy)('parent_id').thenBy('name').thenBy('id'));
      this.serviceGroupHierarchy = this.getServiceHierarchy(this.serviceGroups, 0);
      this.showServiceStructure();
      this.dismissLoader();
    });
  }
  getServiceHierarchy(flatServiceGroups, parent) {
    const serviceGroupHierarchy = [];
    for (const i in flatServiceGroups) {
      if (flatServiceGroups[i].parent_id == parent) {
        const childServiceGroup = this.getServiceHierarchy(flatServiceGroups, flatServiceGroups[i].id);
        if (childServiceGroup.length) {
          flatServiceGroups[i].childServiceGroup = childServiceGroup;
        }
        serviceGroupHierarchy.push(flatServiceGroups[i]);
      }
    }
    return serviceGroupHierarchy;
  }
  toggleDay(day) {
    if (this.isDayShown(day)) {
      this.shownDay = null;
    } else {
      this.shownDay = day;
    }
  }
  toggleL1Group(L1group) {
    if (this.isL1GroupShown(L1group)) {
      this.shownGroupL1 = null;
    } else {
      this.shownGroupL1 = L1group;
      this.shownGroupL2 = null;
      this.shownGroupL3 = null;
      this.shownGroupL4 = null;
    }
  }
  toggleL2Group(L2group) {
    if (this.isL2GroupShown(L2group)) {
      this.shownGroupL2 = null;
    } else {
      this.shownGroupL2 = L2group;
      this.shownGroupL3 = null;
      this.shownGroupL4 = null;
    }
  }
  toggleL3Group(L3group) {
    if (this.isL3GroupShown(L3group)) {
      this.shownGroupL3 = null;
    } else {
      this.shownGroupL3 = L3group;
      this.shownGroupL4 = null;
    }
  }
  toggleL4Group(L4group) {
    if (this.isL4GroupShown(L4group)) {
      this.shownGroupL4 = null;
    } else {
      this.shownGroupL4 = L4group;
    }
  }
  isDayShown(day) {
    return this.shownDay === day;
  }
  isL1GroupShown(L1group) {
    return this.shownGroupL1 === L1group;
  }
  isL2GroupShown(L2group) {
    return this.shownGroupL2 === L2group;
  }
  isL3GroupShown(L3group) {
    return this.shownGroupL3 === L3group;
  }
  isL4GroupShown(L4group) {
    return this.shownGroupL4 === L4group;
  }
  getMeetingsByVirtArea(areaID, areaName) {
    this.translate.get('FINDING_MTGS').subscribe(value => {
      this.presentLoader(value);
    });
    this.HTMLGrouping = 'meetings';
    this.areaName = areaName;
    this.meetingListProvider.getMeetingsByVirtArea(areaID).then(data => {
      if (JSON.stringify(data) === '{}') {
        // empty result set!
        this.meetingListArea = JSON.parse('[]');
      } else {
        this.meetingListArea = data;
        this.isLoaded = true;
      }
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
  showServiceStructure() {
    this.HTMLGrouping = 'areas';
    this.areaName = '';
    this.shownDay = null;
  }
  openLink(url) {
    const browser = this.iab.create(url, '_system');
  }
}, _class.ctorParameters = () => [{
  type: _providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_5__.MeetingListProvider
}, {
  type: _providers_service_groups_service__WEBPACK_IMPORTED_MODULE_4__.ServiceGroupsProvider
}, {
  type: _providers_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
}, {
  type: _providers_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser
}], _class);
VirtMeetingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-virt-meetings',
  template: _virt_meetings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_virt_meetings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], VirtMeetingsPage);


/***/ }),

/***/ 9678:
/*!************************************************************************!*\
  !*** ./src/app/pages/virt-meetings/virt-meetings.page.scss?ngResource ***!
  \************************************************************************/
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

/***/ 8516:
/*!************************************************************************!*\
  !*** ./src/app/pages/virt-meetings/virt-meetings.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <div *ngIf=\"areaName != '' ; else BMLT_List\">\n      <ion-title>{{ areaName }}</ion-title>\n      <ion-button color=\"primary\" slot=\"end\" size=\"small\" (click)=\"showServiceStructure()\">Back</ion-button>\n    </div>\n\n    <ng-template #BMLT_List>\n    <ion-title>\n      virtual-na.org\n    </ion-title>\n  </ng-template>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <div *ngIf=\"HTMLGrouping == 'areas'\">\n\n    <div *ngFor=\"let L1 of serviceGroupHierarchy; let i = index\">\n      <div *ngIf=\"L1.childServiceGroup;else L1_no_children\">\n        <ion-item-divider  sticky=\"true\" (click)=\"toggleL1Group(i)\" [ngClass]=\"{active: isL1GroupShown(i)}\" [color]=\"isL1GroupShown(i) ? 'secondary' : 'primary'\" >\n          <h3>{{ L1.name }}</h3>\n          <ion-icon size=\"large\" [color]=\"isL1GroupShown(i) ? 'primary' : 'secondary'\" slot=\"end\" [name]=\"isL1GroupShown(i) ? 'close-circle' : 'add-circle'\"></ion-icon>\n        </ion-item-divider>\n      </div>\n      <ng-template #L1_no_children>\n        <ion-item-divider sticky=\"true\" (click)=\"getMeetingsByVirtArea(L1.id, L1.name)\" color=\"primary\">\n          <h3>{{ L1.name }} </h3>\n          <ion-icon size=\"large\" color=\"secondary\" slot=\"end\" name=\"play\"></ion-icon>\n        </ion-item-divider>\n      </ng-template>\n\n      <div *ngIf=\"isL1GroupShown(i)\">\n        <div *ngFor=\"let L2 of L1.childServiceGroup; let j = index\">\n          <div *ngIf=\"L2.childServiceGroup;else L2_no_children\">\n            <ion-item-divider sticky=\"true\" (click)=\"toggleL2Group(j)\" [ngClass]=\"{active: isL2GroupShown(j)}\" [color]=\"isL2GroupShown(j) ? 'tertiary' : 'secondary'\">\n              <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n              <h3>{{ L2.name }}</h3>\n              <ion-icon size=\"large\" [color]=\"isL2GroupShown(j) ? 'secondary' : 'tertiary'\" slot=\"end\" [name]=\"isL2GroupShown(j) ? 'close-circle' : 'add-circle'\"></ion-icon>\n            </ion-item-divider>\n          </div>\n          <ng-template #L2_no_children>\n            <ion-item-divider sticky=\"true\" (click)=\"getMeetingsByVirtArea(L2.id, L2.name)\" [color]=\"isL2GroupShown(j) ? 'tertiary' : 'secondary'\">\n              <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n              <h3>{{ L2.name }}</h3>\n              <ion-icon size=\"large\" [color]=\"isL2GroupShown(j) ? 'secondary' : 'tertiary'\" slot=\"end\" name=\"play\"></ion-icon>\n            </ion-item-divider>\n          </ng-template>\n\n\n          <div *ngIf=\"isL2GroupShown(j)\">\n            <div *ngFor=\"let L3 of L2.childServiceGroup; let k = index\" [ngClass]=\"{active: isL3GroupShown(k)}\">\n              <div *ngIf=\"L3.childServiceGroup;else L3_no_children\">\n                <ion-item-divider sticky=\"true\" (click)=\"toggleL3Group(k)\" [ngClass]=\"{active: isL3GroupShown(k)}\" [color]=\"isL3GroupShown(k) ? 'four' : 'tertiary'\">\n                  <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                  <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>     \n                  <h3>{{ L3.name }}</h3>\n                  <ion-icon size=\"large\" [color]=\"isL3GroupShown(k) ? 'tertiary' : 'warning'\" slot=\"end\" [name]=\"isL3GroupShown(k) ? 'close-circle' : 'add-circle'\"></ion-icon>\n                </ion-item-divider>\n              </div>\n              <ng-template #L3_no_children>\n                <ion-item-divider sticky=\"true\" (click)=\"getMeetingsByVirtArea(L3.id, L3.name)\" [color]=\"isL3GroupShown(k) ? 'four' : 'tertiary'\">\n                  <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                  <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                  <h3>{{ L3.name }}</h3>\n                  <ion-icon size=\"large\" [color]=\"isL3GroupShown(k) ? 'tertiary' : 'warning'\" slot=\"end\" name=\"play\"></ion-icon>\n                </ion-item-divider>\n              </ng-template>\n\n\n              <div *ngIf=\"isL3GroupShown(k)\">\n                <div *ngFor=\"let L4 of L3.childServiceGroup; let l = index\" [ngClass]=\"{active: isL4GroupShown(k)}\">\n                  <div *ngIf=\"L4.childServiceGroup;else L4_no_children\">\n                    <ion-item-divider sticky=\"true\">\n                      <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                      <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                      <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                      <h3>{{ L4.name }}</h3>\n                      <ion-icon size=\"large\" color=\"icon\" slot=\"end\" [name]=\"isL1GroupShown(i) ? 'close-circle' : 'add-circle'\"></ion-icon>\n                    </ion-item-divider>\n                  </div>\n                  <ng-template #L4_no_children>\n                    <ion-item-divider sticky=\"true\" (click)=\"getMeetingsByVirtArea(L4.id, L4.name)\">\n                      <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                      <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                      <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                      <h3>{{ L4.name }}</h3>\n                      <ion-icon size=\"large\" color=\"icon\" slot=\"end\" name=\"play\"></ion-icon>\n                    </ion-item-divider>\n                  </ng-template>\n\n\n                  <div *ngFor=\"let L5 of L4.childServiceGroup; let m = index\">\n                    <div *ngIf=\"L5.childServiceGroup;else L5_no_children\">\n                      <ion-item-divider sticky=\"true\">\n                        <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                        <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                        <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                        <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                        <h3>{{ L5.name }}</h3>\n                        <ion-icon size=\"large\" color=\"icon\" slot=\"end\" [name]=\"isL1GroupShown(i) ? 'close-circle' : 'add-circle'\"></ion-icon>\n                      </ion-item-divider>\n                    </div>\n                    <ng-template #L5_no_children>\n                      <ion-item-divider sticky=\"true\" (click)=\"getMeetingsByVirtArea(L5.id, L5.name)\">\n                        <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                        <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                        <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                        <ion-icon name=\"chevron-forward-outline\" slot=\"start\" size=\"large\"></ion-icon>\n                        <h3>{{ L5.name }}</h3>\n                        <ion-icon size=\"large\" color=\"icon\" slot=\"end\" name=\"play\"></ion-icon>\n                      </ion-item-divider>\n                    </ng-template>\n\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div>\n      <ion-card text-wrap>\n  \n        <ion-card-header>{{'VIRTUAL_MEETINGS' | translate }}</ion-card-header>\n        <ion-card-content>\n          <p>{{ 'VIRTUAL_NA' | translate }} </p>\n        </ion-card-content>\n  \n      </ion-card>\n    </div>\n\n  </div>\n\n\n  <div *ngIf=\"HTMLGrouping == 'meetings'\">\n    <div *ngIf=\"isLoaded\">\n      <app-meeting-list [data]=\"meetingListArea\" meetingType='virt' expandAll='false'></app-meeting-list>\n    </div>\n  </div>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_virt-meetings_virt-meetings_module_ts.js.map