(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_location-search_location-search_module_ts"],{

/***/ 6586:
/*!*************************************************************************!*\
  !*** ./src/app/pages/location-search/location-search-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationSearchPageRoutingModule: () => (/* binding */ LocationSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _location_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-search.page */ 4517);




const routes = [{
  path: '',
  component: _location_search_page__WEBPACK_IMPORTED_MODULE_0__.LocationSearchPage
}];
let LocationSearchPageRoutingModule = class LocationSearchPageRoutingModule {};
LocationSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LocationSearchPageRoutingModule);


/***/ }),

/***/ 3113:
/*!*****************************************************************!*\
  !*** ./src/app/pages/location-search/location-search.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationSearchPageModule: () => (/* binding */ LocationSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _location_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-search-routing.module */ 6586);
/* harmony import */ var _location_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-search.page */ 4517);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var src_app_providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/meeting-list.service */ 4073);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 8418);
/* harmony import */ var src_app_providers_geolocate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/geolocate.service */ 5570);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 2140);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 2898);
/* harmony import */ var _components_component_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component/component.module */ 6394);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 142);
/* harmony import */ var src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/storage.service */ 9031);
















let LocationSearchPageModule = class LocationSearchPageModule {};
LocationSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__.PipesModule, _location_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocationSearchPageRoutingModule, _components_component_component_module__WEBPACK_IMPORTED_MODULE_7__.ComponentModule],
  declarations: [_location_search_page__WEBPACK_IMPORTED_MODULE_1__.LocationSearchPage],
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser, src_app_providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_2__.MeetingListProvider, src_app_providers_geolocate_service__WEBPACK_IMPORTED_MODULE_4__.GeolocateProvider, _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation, _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_8__.HTTP, src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_9__.StorageService]
})], LocationSearchPageModule);


/***/ }),

/***/ 4517:
/*!***************************************************************!*\
  !*** ./src/app/pages/location-search/location-search.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationSearchPage: () => (/* binding */ LocationSearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _location_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-search.page.html?ngResource */ 420);
/* harmony import */ var _location_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-search.page.scss?ngResource */ 2273);
/* harmony import */ var _location_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_location_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _providers_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/storage.service */ 9031);
/* harmony import */ var _providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/meeting-list.service */ 4073);
/* harmony import */ var _providers_geolocate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/geolocate.service */ 5570);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 2140);
/* harmony import */ var _providers_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/loading.service */ 2521);
var _class;










let LocationSearchPage = (_class = class LocationSearchPage {
  constructor(MeetingListProvider, loaderCtrl, storage, translate, GeolocateProvider, geolocation) {
    this.MeetingListProvider = MeetingListProvider;
    this.loaderCtrl = loaderCtrl;
    this.storage = storage;
    this.translate = translate;
    this.GeolocateProvider = GeolocateProvider;
    this.geolocation = geolocation;
    this.shownGroup = null;
    this.loader = null;
    this.isLoaded = false;
    this.currentAddress = '';
    this.addressLatitude = 0;
    this.addressLongitude = 0;
    this.radiusMeters = 10000;
    this.meetingsListGrouping = 'weekday_tinyint';
    // this.storage.ready().then(() => {
    this.storage.get('searchRange').then(searchValue => {
      if (searchValue) {
        this.radius = searchValue;
      } else {
        this.radius = 25;
      }
    });
    this.storage.get('savedAddressLat').then(value => {
      if (value) {
        this.addressLatitude = value;
        this.storage.get('savedAddressLng').then(value => {
          if (value) {
            this.addressLongitude = value;
            this.storage.get('savedAddress').then(value => {
              if (value) {
                this.currentAddress = value;
                this.getAllMeetings();
              } else {
                this.locatePhone();
              }
            });
          } else {
            this.locatePhone();
          }
        });
      } else {
        this.locatePhone();
      }
    });
    // });
  }

  getAllMeetings() {
    this.translate.get('FINDING_MTGS').subscribe(value => {
      this.presentLoader(value);
    });
    this.MeetingListProvider.getAddressMeetings(this.addressLatitude, this.addressLongitude, this.radius).subscribe(data => {
      this.addressMeetingList = data;
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
  locatePhone() {
    this.translate.get('LOCATING').subscribe(value => {
      this.presentLoader(value);
    });
    this.geolocation.getCurrentPosition().then(resp => {
      this.addressLatitude = resp.coords.latitude;
      this.addressLongitude = resp.coords.longitude;
      this.storage.set('savedAddressLat', this.addressLatitude);
      this.storage.set('savedAddressLng', this.addressLongitude);
      this.GeolocateProvider.convertLatLong(this.addressLatitude, this.addressLongitude).subscribe(json => {
        this.currentAddress = json;
        if (this.currentAddress.results[0]) {
          this.currentAddress = this.currentAddress.results[0].formatted_address;
          this.storage.set('savedAddress', this.currentAddress);
          this.dismissLoader();
          this.getAllMeetings();
        } else {
          this.dismissLoader();
          this.currentAddress = 'Location not found';
        }
      });
    }).catch(error => {
      console.log('Error getting location', error);
      this.currentAddress = 'Location not found';
      this.dismissLoader();
    });
  }
}, _class.ctorParameters = () => [{
  type: _providers_meeting_list_service__WEBPACK_IMPORTED_MODULE_3__.MeetingListProvider
}, {
  type: _providers_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService
}, {
  type: _providers_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
}, {
  type: _providers_geolocate_service__WEBPACK_IMPORTED_MODULE_4__.GeolocateProvider
}, {
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
}], _class);
LocationSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-location-search',
  template: _location_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_location_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LocationSearchPage);


/***/ }),

/***/ 5570:
/*!************************************************!*\
  !*** ./src/app/providers/geolocate.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeolocateProvider: () => (/* binding */ GeolocateProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



/*
  Generated class for the GeolocateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let GeolocateProvider = (_class = class GeolocateProvider {
  constructor(http) {
    this.http = http;
    this.googleAPIKey = '&key=AIzaSyDg5AKBNjMvoBBlLgXpy-dLxLAcVJYpOq8';
    this.convertLatLongUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
    this.convertAddressUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  }
  convertLatLong(lat, long) {
    const url = this.convertLatLongUrl + lat + ',' + long + this.googleAPIKey;
    return this.http.get(url);
  }
  convertAddress(address) {
    const url = this.convertAddressUrl + address + this.googleAPIKey;
    return this.http.get(url);
  }
}, _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
}], _class);
GeolocateProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], GeolocateProvider);


/***/ }),

/***/ 2273:
/*!****************************************************************************!*\
  !*** ./src/app/pages/location-search/location-search.page.scss?ngResource ***!
  \****************************************************************************/
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

/***/ 420:
/*!****************************************************************************!*\
  !*** ./src/app/pages/location-search/location-search.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      {{'LOCATIONSEARCH' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div ngSwitch=\"{{ currentAddress }}\">\n\n    <div *ngSwitchCase=\"''\"></div>\n\n    <div *ngSwitchCase=\"'Location not found'\" [ngClass]=\"'one'\">\n      <ion-item text-wrap><b>{{'NO_LOCATION' | translate}}</b></ion-item>\n    </div>\n\n    <div *ngSwitchDefault>\n      <div *ngIf = \"isLoaded\">\n        <app-meeting-list [data]=\"addressMeetingList\" meetingType='regular' expandAll='false'></app-meeting-list>\n      </div>\n    </div>\n    \n  </div>\n</ion-content>\n\n<ion-footer no-padding>\n  <ion-toolbar no-padding>\n\n    <ion-item text-wrap>\n      <b>{{radius}} {{'MEETINGS_NEAREST' | translate}} {{ currentAddress }}</b>\n    </ion-item>\n    <ion-item text-wrap>\n      <ion-button expand=\"full\" color=\"primary\" id=\"LocationButton\" (click)=\"locatePhone()\" class=\"col text-center text-wrap\">\n        <ion-icon name=\"locate-outline\"></ion-icon>&nbsp;{{'LOCATIONSEARCH' | translate }}\n      </ion-button>\n    </ion-item>\n\n    <ion-range id=\"RadiusRange\" min=\"5\" max=\"50\" [(ngModel)]=\"radius\" (ionChange)=\"getAllMeetings()\" color=\"danger\" pin=\"true\" debounce=\"500\">\n      <ion-label slot=\"start\">5 {{'MEETINGS' | translate}}</ion-label>\n      <ion-label slot=\"end\">50 {{'MEETINGS' | translate}}</ion-label>\n    </ion-range>\n\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_location-search_location-search_module_ts.js.map