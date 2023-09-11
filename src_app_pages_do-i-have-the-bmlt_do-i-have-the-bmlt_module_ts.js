(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_do-i-have-the-bmlt_do-i-have-the-bmlt_module_ts"],{

/***/ 3572:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/do-i-have-the-bmlt/do-i-have-the-bmlt-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoIHaveTheBmltPageRoutingModule: () => (/* binding */ DoIHaveTheBmltPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _do_i_have_the_bmlt_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./do-i-have-the-bmlt.page */ 9165);




const routes = [{
  path: '',
  component: _do_i_have_the_bmlt_page__WEBPACK_IMPORTED_MODULE_0__.DoIHaveTheBmltPage
}];
let DoIHaveTheBmltPageRoutingModule = class DoIHaveTheBmltPageRoutingModule {};
DoIHaveTheBmltPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DoIHaveTheBmltPageRoutingModule);


/***/ }),

/***/ 1402:
/*!***********************************************************************!*\
  !*** ./src/app/pages/do-i-have-the-bmlt/do-i-have-the-bmlt.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoIHaveTheBmltPageModule: () => (/* binding */ DoIHaveTheBmltPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _do_i_have_the_bmlt_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./do-i-have-the-bmlt-routing.module */ 3572);
/* harmony import */ var _do_i_have_the_bmlt_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./do-i-have-the-bmlt.page */ 9165);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 8418);
/* harmony import */ var src_app_providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/meeting-list.service */ 4073);
/* harmony import */ var src_app_providers_service_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/service-groups.service */ 425);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 2140);
/* harmony import */ var src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/storage.service */ 9031);













let DoIHaveTheBmltPageModule = class DoIHaveTheBmltPageModule {};
DoIHaveTheBmltPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _do_i_have_the_bmlt_routing_module__WEBPACK_IMPORTED_MODULE_0__.DoIHaveTheBmltPageRoutingModule],
  declarations: [_do_i_have_the_bmlt_page__WEBPACK_IMPORTED_MODULE_1__.DoIHaveTheBmltPage],
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser, src_app_providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_3__.MeetingListProvider, src_app_providers_service_groups_service__WEBPACK_IMPORTED_MODULE_4__.ServiceGroupsProvider, _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation, src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService]
})], DoIHaveTheBmltPageModule);


/***/ }),

/***/ 9165:
/*!*********************************************************************!*\
  !*** ./src/app/pages/do-i-have-the-bmlt/do-i-have-the-bmlt.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoIHaveTheBmltPage: () => (/* binding */ DoIHaveTheBmltPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _do_i_have_the_bmlt_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./do-i-have-the-bmlt.page.html?ngResource */ 4120);
/* harmony import */ var _do_i_have_the_bmlt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./do-i-have-the-bmlt.page.scss?ngResource */ 6029);
/* harmony import */ var _do_i_have_the_bmlt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_do_i_have_the_bmlt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/meeting-list.service */ 4073);
/* harmony import */ var _providers_service_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/service-groups.service */ 425);
/* harmony import */ var _providers_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/storage.service */ 9031);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 2140);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 8418);
/* harmony import */ var _providers_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/loading.service */ 2521);
var _class;











let DoIHaveTheBmltPage = (_class = class DoIHaveTheBmltPage {
  constructor(MeetingLists, ServiceGroups, loaderCtrl, translate, storage, geolocation, iab) {
    this.MeetingLists = MeetingLists;
    this.ServiceGroups = ServiceGroups;
    this.loaderCtrl = loaderCtrl;
    this.translate = translate;
    this.storage = storage;
    this.geolocation = geolocation;
    this.iab = iab;
    this.currentAddress = '';
    this.addressLatitude = 0;
    this.addressLongitude = 0;
    this.nearestMeeting = '';
    this.bmltEnabled = 'maybe';
    this.loader = null;
    this.ServiceGroups.getAllServiceGroups().subscribe(serviceGroupData => {
      this.serviceGroupNames = serviceGroupData;
      this.storage.get('savedAddressLat').then(value => {
        if (value) {
          this.addressLatitude = value;
          this.storage.get('savedAddressLng').then(value => {
            if (value) {
              this.addressLongitude = value;
              this.findNearestMeeting();
            } else {
              this.locatePhone();
            }
          });
        } else {
          this.locatePhone();
        }
      });
    });
  }
  getServiceNameFromID(id) {
    const obj = this.serviceGroupNames.find(function (obj) {
      return obj.id === id;
    });
    return obj.name;
  }
  findNearestMeeting() {
    this.translate.get('LOCATING').subscribe(value => {
      this.presentLoader(value);
    });
    this.MeetingLists.getNearestMeeting(this.addressLatitude, this.addressLongitude).subscribe(data => {
      this.nearestMeeting = data;
      this.nearestMeeting = this.nearestMeeting.filter(meeting => meeting.service_body_bigint = this.getServiceNameFromID(meeting.service_body_bigint));
      this.dismissLoader();
      if (this.nearestMeeting[0].distance_in_miles < 100) {
        this.bmltEnabled = 'true';
      } else {
        this.bmltEnabled = 'false';
      }
    });
  }
  presentLoader(loaderText) {
    if (!this.loader) {
      this.loader = this.loaderCtrl.present(loaderText);
    }
  }
  dismissLoader() {
    if (this.loader) {
      console.log('Dismissing loader..');
      this.loader = this.loaderCtrl.dismiss();
      this.loader = null;
    }
  }
  locatePhone() {
    this.translate.get('LOCATING').subscribe(value => {
      this.presentLoader(value);
    });
    this.geolocation.getCurrentPosition({
      timeout: 10000
    }).then(resp => {
      this.addressLatitude = resp.coords.latitude;
      this.addressLongitude = resp.coords.longitude;
      this.storage.set('savedAddressLat', this.addressLatitude);
      this.storage.set('savedAddressLng', this.addressLongitude);
      this.findNearestMeeting();
    }).catch(error => {
      this.currentAddress = 'Location not found';
      this.dismissLoader();
    });
  }
  openLink(url) {
    const browser = this.iab.create(url, '_system');
  }
}, _class.ctorParameters = () => [{
  type: _providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_2__.MeetingListProvider
}, {
  type: _providers_service_groups_service__WEBPACK_IMPORTED_MODULE_3__.ServiceGroupsProvider
}, {
  type: _providers_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
}, {
  type: _providers_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
}, {
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser
}], _class);
DoIHaveTheBmltPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-do-i-have-the-bmlt',
  template: _do_i_have_the_bmlt_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_do_i_have_the_bmlt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DoIHaveTheBmltPage);


/***/ }),

/***/ 2521:
/*!**********************************************!*\
  !*** ./src/app/providers/loading.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingService: () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 2288);

var _class;



let LoadingService = (_class = class LoadingService {
  constructor(loadingController) {
    this.loadingController = loadingController;
    this.isLoading = false;
  }
  present(text) {
    var _this = this;
    return (0,_home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      return yield _this.loadingController.create({
        spinner: 'circles',
        message: text
      }).then(a => {
        a.present().then(() => {
          if (!_this.isLoading) {
            a.dismiss();
          }
        });
      });
    })();
  }
  dismiss() {
    var _this2 = this;
    return (0,_home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoading = false;
      return yield _this2.loadingController.dismiss();
    })();
  }
}, _class.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
}], _class);
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], LoadingService);


/***/ }),

/***/ 4073:
/*!***************************************************!*\
  !*** ./src/app/providers/meeting-list.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeetingListProvider: () => (/* binding */ MeetingListProvider)
/* harmony export */ });
/* harmony import */ var _home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 142);

var _class;




let MeetingListProvider = (_class = class MeetingListProvider {
  constructor(http, httpCors) {
    this.http = http;
    this.httpCors = httpCors;
    this.tomatoBMLT = 'https://aggregator.bmltenabled.org/main_server/client_interface/json/';
    this.virtualBMLT = 'https://bmlt.virtual-na.org/main_server/client_interface/json/';
    this.getApiUrlVirt = 'https://bmlt.virtual-na.org/main_server/client_interface/json/?switcher=GetSearchResults&sort_keys=weekday_tinyint,start_time';
    this.getAllVirtMtgs = 'https://bmlt.virtual-na.org/main_server/client_interface/json/?switcher=GetSearchResults&data_field_key=location_postal_code_1,duration_time,start_time,time_zone,weekday_tinyint,service_body_bigint,longitude,latitude,location_province,location_municipality,location_street,location_info,location_text,location_neighborhood,formats,format_shared_id_list,comments,meeting_name,location_sub_province,worldid_mixed,root_server_uri,id_bigint,meeting_name,location_text,formatted_address,formatted_location_info,formatted_comments,contact_name_1,contact_phone_1,contact_email_1,contact_name_2,contact_phone_2,contact_email_2,virtual_meeting_link&services[]=4&recursive=1&sort_keys=start_time';
  }
  getVirtualMeetings() {
    var _this = this;
    return (0,_home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this.httpCors.get(_this.getApiUrlVirt, {}, {});
      return JSON.parse(data.data);
    })();
  }
  getAllVirtualMeetings() {
    var _this2 = this;
    return (0,_home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this2.httpCors.get(_this2.getAllVirtMtgs, {}, {});
      return JSON.parse(data.data);
    })();
  }
  getAutoRadiusMeetings(lat, long, radius) {
    const getAutoRadiusMeetingsURL = this.tomatoBMLT + '?switcher=GetSearchResults&geo_width_km=' + '-' + radius + '&long_val=' + long + '&lat_val=' + lat + '&sort_keys=longitude,latitude&callingApp=bmlt_search_3_ionic';
    return this.http.get(getAutoRadiusMeetingsURL);
  }
  getRadiusMeetings(lat, long, radius) {
    const getRadiusMeetingsURL = this.tomatoBMLT + '?switcher=GetSearchResults' + '&data_field_key=longitude,latitude,id_bigint' + '&geo_width_km=' + radius + '&long_val=' + long + '&lat_val=' + lat + '&sort_keys=longitude,latitude&callingApp=bmlt_search_3_ionic';
    return this.http.get(getRadiusMeetingsURL);
  }
  getAddressMeetings(lat, long, radius) {
    const getAddressMeetingsURL = this.tomatoBMLT + '?switcher=GetSearchResults&geo_width_km=' + '-' + radius + '&long_val=' + long + '&lat_val=' + lat + '&sort_keys=longitude,latitude&callingApp=bmlt_search_3_ionic';
    return this.http.get(getAddressMeetingsURL);
  }
  getNearestMeeting(lat, long) {
    const getAddressMeetingsURL = this.tomatoBMLT + '?switcher=GetSearchResults&geo_width_km=' + '-1' + '&long_val=' + long + '&lat_val=' + lat + '&sort_keys=longitude,latitude&callingApp=bmlt_search_3_ionic';
    return this.http.get(getAddressMeetingsURL);
  }
  getMeetingsByAreaProvider(areaID) {
    const getMeetingsByAreaURL = this.tomatoBMLT + '?switcher=GetSearchResults&services=' + areaID + '&sort_keys=weekday_tinyint,start_time&callingApp=bmlt_search_3_ionic';
    return this.http.get(getMeetingsByAreaURL);
  }
  getMeetingsByVirtArea(areaID) {
    var _this3 = this;
    return (0,_home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const getMeetingsByVirtAreaURL = _this3.virtualBMLT + '?switcher=GetSearchResults&services=' + areaID + '&sort_keys=weekday_tinyint,start_time&callingApp=bmlt_search_3_ionic';
      const data = yield _this3.httpCors.get(getMeetingsByVirtAreaURL, {}, {});
      return JSON.parse(data.data);
    })();
  }
  getSingleMeetingByID(id) {
    const getSingleMeetingByIDURL = this.tomatoBMLT + '?switcher=GetSearchResults&meeting_ids[]=' + id;
    return this.http.get(getSingleMeetingByIDURL);
  }
}, _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}, {
  type: _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_1__.HTTP
}], _class);
MeetingListProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], MeetingListProvider);


/***/ }),

/***/ 6029:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/do-i-have-the-bmlt/do-i-have-the-bmlt.page.scss?ngResource ***!
  \**********************************************************************************/
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

/***/ 4120:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/do-i-have-the-bmlt/do-i-have-the-bmlt.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      {{'DOIHAVETHEBMLT' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <ion-icon name=\"information-circle\" item-left></ion-icon>\n        {{'IS_BMLT' | translate}}\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item text-wrap>\n          <div *ngIf=\"bmltEnabled == 'true'\">\n            <br>\n            <h1>{{'YES' | translate}}! <ion-icon name=\"happy-outline\"></ion-icon></h1>\n            <h2>{{'IS_BMLT_YES_1' | translate}} {{ nearestMeeting[0].distance_in_miles | number:'1.1-1' }} {{'MILES' | translate}} (<i>{{ nearestMeeting[0].distance_in_km | number:'1.1-1' }} {{'KMS' | translate}}</i>) {{'AWAY' | translate}}</h2>\n            <h2>{{'IS_BMLT_YES_2' | translate}} (<i>{{ nearestMeeting[0].service_body_bigint }}</i>) {{'IS_BMLT_YES_3' | translate}}</h2>\n          </div>\n          <div *ngIf=\"bmltEnabled == 'false'\">\n            <br>\n            <h1>{{'NO' | translate}} </h1>\n            <h2>{{'IS_BMLT_NO_1' | translate}} {{ nearestMeeting[0].distance_in_miles | number:'1.1-1' }} {{'MILES' | translate}} (<i>{{ nearestMeeting[0].distance_in_km | number:'1.1-1' }} {{'KMS' | translate}}</i>) {{'AWAY' | translate}</h2>\n            <h2>{{'IS_BMLT_NO_2' | translate}}</h2>\n          </div>\n          <div *ngIf=\"bmltEnabled == 'maybe'\">\n            <h1>Checking...</h1>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>{{'FIND_OUT_MORE' | translate}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item text-wrap>\n          <ion-button   (click)=\"openLink('https://www.facebook.com/groups/149214049107349/')\"><ion-icon name=\"logo-facebook\" item-left></ion-icon>&nbsp;{{'JOIN_FB_GROUP' | translate}}</ion-button>\n        </ion-item>\n        <ion-item text-wrap>\n          <ion-button   (click)=\"openLink('https://bmlt.app/')\"><ion-icon name=\"globe\" item-left></ion-icon>&nbsp;{{'VISIT_WEBSITE' | translate}}</ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_do-i-have-the-bmlt_do-i-have-the-bmlt_module_ts.js.map