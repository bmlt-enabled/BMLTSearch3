(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 4431:
/*!*******************************************!*\
  !*** ./src/app/pages/modal/modal.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalPage: () => (/* binding */ ModalPage)
/* harmony export */ });
/* harmony import */ var _home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page.html?ngResource */ 1769);
/* harmony import */ var _modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.page.scss?ngResource */ 8061);
/* harmony import */ var _modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 8418);
/* harmony import */ var _providers_tomato_formats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/tomato-formats.service */ 4545);
/* harmony import */ var _providers_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/storage.service */ 9031);

var _class;









let ModalPage = (_class = class ModalPage {
  constructor(translate, navParams, modalController, iab, tomatoFormatsService, storage) {
    this.translate = translate;
    this.navParams = navParams;
    this.modalController = modalController;
    this.iab = iab;
    this.tomatoFormatsService = tomatoFormatsService;
    this.storage = storage;
    this.formatLanguage = 'en';
    this.meetingList = this.navParams.data.data;
  }
  ngOnInit() {
    this.storage.get('language').then(value => {
      if (value) {
        this.formatLanguage = value;
      }
    });
    this.tomatoFormatsService.setExplodedFormatsOnMeetingList(this.meetingList, this.formatLanguage);
  }
  dismiss() {
    var _this = this;
    return (0,_home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modalController.dismiss();
    })();
  }
  openMapsLink(destLatitude, destLongitude) {
    const browser = this.iab.create('https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude, '_system');
  }
  openLink(url) {
    const browser = this.iab.create(url, '_system');
  }
  dialNum(url) {
    const telUrl = 'tel:' + url;
    const browser = this.iab.create(telUrl, '_system');
  }
  isHybrid(meeting) {
    if (meeting.formats.match(/HY/i)) {
      return 'HYBRID';
    } else {
      return 'NOT-HYBRID';
    }
  }
  isTempClosed(meeting) {
    if (meeting.formats.match(/TC/i)) {
      return 'TEMPCLOSED';
    } else {
      return 'NOT-TEMPCLOSED';
    }
  }
  explodeFormats(meeting) {
    this.tomatoFormatsService.setExplodedFormatsOnMeetingList([meeting], this.formatLanguage);
  }
}, _class.ctorParameters = () => [{
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser
}, {
  type: _providers_tomato_formats_service__WEBPACK_IMPORTED_MODULE_4__.TomatoFormatsService
}, {
  type: _providers_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService
}], _class);
ModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-modal',
  template: _modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ModalPage);


/***/ }),

/***/ 425:
/*!*****************************************************!*\
  !*** ./src/app/providers/service-groups.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceGroupsProvider: () => (/* binding */ ServiceGroupsProvider)
/* harmony export */ });
/* harmony import */ var _home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 142);

var _class;




/*
  Generated class for the ServiceGroupsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let ServiceGroupsProvider = (_class = class ServiceGroupsProvider {
  constructor(http, httpCors) {
    this.http = http;
    this.httpCors = httpCors;
    this.getApiUrlServiceGroups = 'https://aggregator.bmltenabled.org/main_server/client_interface/json/?switcher=GetServiceBodies&callingApp=bmlt_search_3_ionic';
    this.getApiUrlVirtServiceGroups = 'https://bmlt.virtual-na.org/main_server/client_interface/json/?switcher=GetServiceBodies&callingApp=bmlt_search_3_ionic';
  }
  getAllServiceGroups() {
    return this.http.get(this.getApiUrlServiceGroups);
  }
  getAllVirtServiceGroups() {
    var _this = this;
    return (0,_home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this.httpCors.get(_this.getApiUrlVirtServiceGroups, {}, {});
      return JSON.parse(data.data);
    })();
  }
}, _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}, {
  type: _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_1__.HTTP
}], _class);
ServiceGroupsProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], ServiceGroupsProvider);


/***/ }),

/***/ 2140:
/*!************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/geolocation/ngx/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Geolocation: () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 6211);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3064);





var Geolocation = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Geolocation, _super);
  function Geolocation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Geolocation.prototype.getCurrentPosition = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getCurrentPosition", {
      "callbackOrder": "reverse"
    }, arguments);
  };
  /**
   * Watch the current device's position.  Clear the watch by unsubscribing from
   * Observable changes.
   *
   * ```typescript
   * const subscription = this.geolocation.watchPosition()
   *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
   *                               .subscribe(position => {
   *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
   * });
   *
   * // To stop notifications
   * subscription.unsubscribe();
   * ```
   *
   * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
   * @returns {Observable<Geoposition | PositionError>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
   */
  Geolocation.prototype.watchPosition = function (options) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(function (observer) {
      var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
      return function () {
        return navigator.geolocation.clearWatch(watchId);
      };
    });
  };
  Geolocation.ɵfac = /* @__PURE__ */function () {
    let ɵGeolocation_BaseFactory;
    return function Geolocation_Factory(t) {
      return (ɵGeolocation_BaseFactory || (ɵGeolocation_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](Geolocation)))(t || Geolocation);
    };
  }();
  Geolocation.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: Geolocation,
    factory: Geolocation.ɵfac
  });
  Geolocation.pluginName = "Geolocation";
  Geolocation.plugin = "cordova-plugin-geolocation";
  Geolocation.pluginRef = "navigator.geolocation";
  Geolocation.repo = "https://github.com/apache/cordova-plugin-geolocation";
  Geolocation.install = "ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION=\"To locate you\"";
  Geolocation.installVariables = ["GEOLOCATION_USAGE_DESCRIPTION"];
  Geolocation.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
  Geolocation = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([], Geolocation);
  return Geolocation;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Geolocation, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], null, {
    getCurrentPosition: []
  });
})();

/***/ }),

/***/ 8418:
/*!***************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/in-app-browser/ngx/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InAppBrowser: () => (/* binding */ InAppBrowser),
/* harmony export */   InAppBrowserObject: () => (/* binding */ InAppBrowserObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 6211);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3064);





var InAppBrowserObject = /** @class */function () {
  /**
   * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
   *
   * @param {string} url     The URL to load.
   * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
   *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
   *                 _blank: Opens in the InAppBrowser.
   *                 _system: Opens in the system's web browser.
   * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
   *                 The options string must not contain any blank space, and each feature's
   *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
   */
  function InAppBrowserObject(url, target, options) {
    try {
      if (options && typeof options !== 'string') {
        options = Object.keys(options).map(function (key) {
          return key + "=" + options[key];
        }).join(',');
      }
      this._objectInstance = cordova.InAppBrowser.open(url, target, options);
    } catch (e) {
      if (typeof window !== 'undefined') {
        window.open(url, target);
      }
      console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
    }
  }
  InAppBrowserObject.prototype._loadAfterBeforeload = function (strUrl) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "_loadAfterBeforeload", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.show = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "show", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.close = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "close", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.hide = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "hide", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.executeScript = function (script) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "executeScript", {}, arguments);
  };
  InAppBrowserObject.prototype.insertCSS = function (css) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "insertCSS", {}, arguments);
  };
  InAppBrowserObject.prototype.on = function (event) {
    var _this = this;
    return function () {
      if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
          _this._objectInstance.addEventListener(event, observer.next.bind(observer));
          return function () {
            return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
          };
        });
      }
    }();
  };
  InAppBrowserObject.prototype.on = function (event) {
    var _this = this;
    return function () {
      if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
          _this._objectInstance.addEventListener(event, observer.next.bind(observer));
          return function () {
            return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
          };
        });
      }
    }();
  };
  return InAppBrowserObject;
}();

var InAppBrowser = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(InAppBrowser, _super);
  function InAppBrowser() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
   *
   * @param  url {string}     The URL to load.
   * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
   * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
   *                 The options string must not contain any blank space, and each feature's
   *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
   * @returns {InAppBrowserObject}
   */
  InAppBrowser.prototype.create = function (url, target, options) {
    return new InAppBrowserObject(url, target, options);
  };
  InAppBrowser.ɵfac = /* @__PURE__ */function () {
    let ɵInAppBrowser_BaseFactory;
    return function InAppBrowser_Factory(t) {
      return (ɵInAppBrowser_BaseFactory || (ɵInAppBrowser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](InAppBrowser)))(t || InAppBrowser);
    };
  }();
  InAppBrowser.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: InAppBrowser,
    factory: InAppBrowser.ɵfac
  });
  InAppBrowser.pluginName = "InAppBrowser";
  InAppBrowser.plugin = "cordova-plugin-inappbrowser";
  InAppBrowser.pluginRef = "cordova.InAppBrowser";
  InAppBrowser.repo = "https://github.com/apache/cordova-plugin-inappbrowser";
  InAppBrowser.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "macOS", "Windows"];
  InAppBrowser = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([], InAppBrowser);
  return InAppBrowser;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](InAppBrowser, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], null, null);
})();

/***/ }),

/***/ 2338:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a4d897e8.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-8e692445.js */ 3293);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 8229);
/* harmony import */ var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-422b6e83.js */ 37);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};


/***/ }),

/***/ 5094:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};


/***/ }),

/***/ 1569:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-bd02518b.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startFocusVisible: () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;
  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath !== undefined) {
      const toFocus = ev.composedPath().filter(el => {
        // TODO(FW-2832): type
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};


/***/ }),

/***/ 961:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c3305a28.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CoreDelegate),
/* harmony export */   a: () => (/* binding */ attachComponent),
/* harmony export */   d: () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 1542);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


// TODO(FW-2832): types
const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,_home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps, inline) {
    var _a;
    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }
    const el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;
    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
      Object.assign(el, componentProps);
    }
    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });
  return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};
const CoreDelegate = () => {
  let BaseComponent;
  let Reference;
  const attachViewToDom = /*#__PURE__*/function () {
    var _ref2 = (0,_home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
      var _a, _b;
      BaseComponent = parentElement;
      /**
       * If passing in a component via the `component` props
       * we need to append it inside of our overlay component.
       */
      if (userComponent) {
        /**
         * If passing in the tag name, create
         * the element otherwise just get a reference
         * to the component.
         */
        const el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
        /**
         * Add any css classes passed in
         * via the cssClasses prop on the overlay.
         */
        cssClasses.forEach(c => el.classList.add(c));
        /**
         * Add any props passed in
         * via the componentProps prop on the overlay.
         */
        Object.assign(el, userComponentProps);
        /**
         * Finally, append the component
         * inside of the overlay component.
         */
        BaseComponent.appendChild(el);
        yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      } else if (BaseComponent.children.length > 0) {
        const root = BaseComponent.children[0];
        if (!root.classList.contains('ion-delegate-host')) {
          /**
           * If the root element is not a delegate host, it means
           * that the overlay has not been presented yet and we need
           * to create the containing element with the specified classes.
           */
          const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div');
          // Add a class to track if the root element was created by the delegate.
          el.classList.add('ion-delegate-host');
          cssClasses.forEach(c => el.classList.add(c));
          // Move each child from the original template to the new parent element.
          el.append(...BaseComponent.children);
          // Append the new parent element to the original parent element.
          BaseComponent.appendChild(el);
        }
      }
      /**
       * Get the root of the app and
       * add the overlay there.
       */
      const app = document.querySelector('ion-app') || document.body;
      /**
       * Create a placeholder comment so that
       * we can return this component to where
       * it was previously.
       */
      Reference = document.createComment('ionic teleport');
      BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
      app.appendChild(BaseComponent);
      return BaseComponent;
    });
    return function attachViewToDom(_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();
  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }
    return Promise.resolve();
  };
  return {
    attachViewToDom,
    removeViewFromDom
  };
};


/***/ }),

/***/ 8229:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-029a46f6.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ hapticSelectionStart),
/* harmony export */   b: () => (/* binding */ hapticSelectionChanged),
/* harmony export */   c: () => (/* binding */ hapticSelection),
/* harmony export */   d: () => (/* binding */ hapticImpact),
/* harmony export */   h: () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    var _a;
    const win = window;
    return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
  },
  available() {
    var _a;
    const win = window;
    const engine = this.getEngine();
    if (!engine) {
      return false;
    }
    /**
     * Developers can manually import the
     * Haptics plugin in their app which will cause
     * getEngine to return the Haptics engine. However,
     * the Haptics engine will throw an error if
     * used in a web browser that does not support
     * the Vibrate API. This check avoids that error
     * if the browser does not support the Vibrate API.
     */
    if (((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.getPlatform()) === 'web') {
      return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
    }
    return true;
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style
    });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style
    });
  },
  selection() {
    this.impact({
      style: 'light'
    });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
const hapticAvailable = () => {
  return HapticEngine.available();
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  hapticAvailable() && HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  hapticAvailable() && HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  hapticAvailable() && HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = options => {
  hapticAvailable() && HapticEngine.impact(options);
};


/***/ }),

/***/ 1065:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-2bcb741c.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ arrowBackSharp),
/* harmony export */   b: () => (/* binding */ closeCircle),
/* harmony export */   c: () => (/* binding */ chevronBack),
/* harmony export */   d: () => (/* binding */ closeSharp),
/* harmony export */   e: () => (/* binding */ searchSharp),
/* harmony export */   f: () => (/* binding */ checkmarkOutline),
/* harmony export */   g: () => (/* binding */ ellipseOutline),
/* harmony export */   h: () => (/* binding */ caretBackSharp),
/* harmony export */   i: () => (/* binding */ arrowDown),
/* harmony export */   j: () => (/* binding */ reorderThreeOutline),
/* harmony export */   k: () => (/* binding */ reorderTwoSharp),
/* harmony export */   l: () => (/* binding */ chevronDown),
/* harmony export */   m: () => (/* binding */ chevronForwardOutline),
/* harmony export */   n: () => (/* binding */ ellipsisHorizontal),
/* harmony export */   o: () => (/* binding */ chevronForward),
/* harmony export */   p: () => (/* binding */ caretUpSharp),
/* harmony export */   q: () => (/* binding */ caretDownSharp),
/* harmony export */   r: () => (/* binding */ removeOutline),
/* harmony export */   s: () => (/* binding */ searchOutline),
/* harmony export */   t: () => (/* binding */ close),
/* harmony export */   u: () => (/* binding */ menuOutline),
/* harmony export */   v: () => (/* binding */ menuSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.1.3, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 1472:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-e6d1a8be.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   a: () => (/* binding */ findIonContent),
/* harmony export */   b: () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   c: () => (/* binding */ scrollByPoint),
/* harmony export */   d: () => (/* binding */ disableContentScrollY),
/* harmony export */   f: () => (/* binding */ findClosestIonContent),
/* harmony export */   g: () => (/* binding */ getScrollElement),
/* harmony export */   i: () => (/* binding */ isIonContent),
/* harmony export */   p: () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   r: () => (/* binding */ resetContentScrollY),
/* harmony export */   s: () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var _home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 1542);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-c4b11676.js */ 1230);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */
const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;
const isIonContent = el => el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */
const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,_home_runner_work_BMLTSearch3_BMLTSearch3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }
    return el;
  });
  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */
const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);
  if (customContentHost) {
    return customContentHost;
  }
  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */
const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */
// TODO(FW-2832): type
const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }
  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */
const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }
  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */
const printIonContentErrorMsg = el => {
  return (0,_index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__.a)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */
const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */
    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};
const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};


/***/ }),

/***/ 737:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-282b81b8.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KEYBOARD_DID_CLOSE: () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   KEYBOARD_DID_OPEN: () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   copyVisualViewport: () => (/* binding */ copyVisualViewport),
/* harmony export */   keyboardDidClose: () => (/* binding */ keyboardDidClose),
/* harmony export */   keyboardDidOpen: () => (/* binding */ keyboardDidOpen),
/* harmony export */   keyboardDidResize: () => (/* binding */ keyboardDidResize),
/* harmony export */   resetKeyboardAssist: () => (/* binding */ resetKeyboardAssist),
/* harmony export */   setKeyboardClose: () => (/* binding */ setKeyboardClose),
/* harmony export */   setKeyboardOpen: () => (/* binding */ setKeyboardOpen),
/* harmony export */   startKeyboardAssist: () => (/* binding */ startKeyboardAssist),
/* harmony export */   trackViewportChanges: () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150;
// TODO(FW-2832): types
let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */
const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};
const startKeyboardAssist = win => {
  startNativeListeners(win);
  if (!win.visualViewport) {
    return;
  }
  currentVisualViewport = copyVisualViewport(win.visualViewport);
  win.visualViewport.onresize = () => {
    trackViewportChanges(win);
    if (keyboardDidOpen() || keyboardDidResize(win)) {
      setKeyboardOpen(win);
    } else if (keyboardDidClose(win)) {
      setKeyboardClose(win);
    }
  };
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */
const startNativeListeners = win => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};
const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};
const setKeyboardClose = win => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */
const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */
const keyboardDidResize = win => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */
const keyboardDidClose = win => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */
const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */
const fireKeyboardCloseEvent = win => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */
const trackViewportChanges = win => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */
const copyVisualViewport = visualViewport => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};


/***/ }),

/***/ 4504:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-73af62b2.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-33ffec25.js */ 5383);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */
const createKeyboardController = keyboardChangeCallback => {
  let keyboardWillShowHandler;
  let keyboardWillHideHandler;
  let keyboardVisible;
  const init = () => {
    keyboardWillShowHandler = () => {
      keyboardVisible = true;
      if (keyboardChangeCallback) keyboardChangeCallback(true);
    };
    keyboardWillHideHandler = () => {
      keyboardVisible = false;
      if (keyboardChangeCallback) keyboardChangeCallback(false);
    };
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
  };
  const destroy = () => {
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = undefined;
  };
  const isKeyboardVisible = () => keyboardVisible;
  init();
  return {
    init,
    destroy,
    isKeyboardVisible
  };
};


/***/ }),

/***/ 2853:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-5d6b6fe7.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${9 - 9 * index}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ }),

/***/ 3523:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-e35bd7d6.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSwipeBackGesture: () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 1542);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 5094);
/* harmony import */ var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-422b6e83.js */ 37);
/* harmony import */ var _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-17060b7c.js */ 1247);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  let rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */
  const isAtEdge = detail => {
    const threshold = 50;
    const {
      startX
    } = detail;
    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }
    return startX <= threshold;
  };
  const getDeltaX = detail => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };
  const getVelocityX = detail => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };
  const canStart = detail => {
    /**
     * The user's locale can change mid-session,
     * so we need to check text direction at
     * the beginning of every gesture.
     */
    rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
    return isAtEdge(detail) && canStartHandler();
  };
  const onMove = detail => {
    // set the transition animation's progress
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };
  const onEnd = detail => {
    // the swipe back gesture has ended
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2.0;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;
    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
  };
  return (0,_index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'goback-swipe',
    gesturePriority: 40,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};


/***/ }),

/***/ 8061:
/*!********************************************************!*\
  !*** ./src/app/pages/modal/modal.page.scss?ngResource ***!
  \********************************************************/
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

/***/ 1769:
/*!********************************************************!*\
  !*** ./src/app/pages/modal/modal.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{'MEETING_DETAILS' | translate}}\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-meeting-list [data]=\"meetingList\" meetingType='regular' expandAll='true'></app-meeting-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=common.js.map