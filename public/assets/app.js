(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _mazer_js_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mazer/js/app */ "./assets/mazer/js/app.js");
/* harmony import */ var _mazer_js_mazer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mazer/js/mazer */ "./assets/mazer/js/mazer.js");
/* harmony import */ var _mazer_static_js_components_dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mazer/static/js/components/dark */ "./assets/mazer/static/js/components/dark.js");
/* harmony import */ var _mazer_static_js_components_dark__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mazer_static_js_components_dark__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _mazer_static_js_components_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mazer/static/js/components/sidebar */ "./assets/mazer/static/js/components/sidebar.js");
/* harmony import */ var _mazer_static_js_initTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mazer/static/js/initTheme */ "./assets/mazer/static/js/initTheme.js");
/* harmony import */ var _mazer_static_js_initTheme__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mazer_static_js_initTheme__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./assets/mazer/js/app.js":
/*!********************************!*\
  !*** ./assets/mazer/js/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feather-icons */ "./node_modules/feather-icons/dist/feather.js");
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mazer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mazer */ "./assets/mazer/js/mazer.js");


// Feather icons are used on some pages
// Replace() replaces [data-feather] elements with icons

feather_icons__WEBPACK_IMPORTED_MODULE_2___default().replace();

// Mazer internal JS. Include this in your project to get
// the sidebar running.


/***/ }),

/***/ "./assets/mazer/js/mazer.js":
/*!**********************************!*\
  !*** ./assets/mazer/js/mazer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_js_components_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../static/js/components/sidebar */ "./assets/mazer/static/js/components/sidebar.js");
// Don't forget to load bootstrap js in your project
// Here, we load it in our app.js

window.bootstrap = (bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_0___default());

// We could import PerfectScrollbar directly in the sidebar module


/***/ }),

/***/ "./assets/mazer/static/js/components/dark.js":
/*!***************************************************!*\
  !*** ./assets/mazer/static/js/components/dark.js ***!
  \***************************************************/
/***/ (() => {

var THEME_KEY = "theme";
function toggleDarkTheme() {
  setTheme(document.documentElement.getAttribute("data-bs-theme") === 'dark' ? "light" : "dark");
}

/**
 * Set theme for mazer
 * @param {"dark"|"light"} theme
 * @param {boolean} persist 
 */
function setTheme(theme) {
  var persist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  document.body.classList.add(theme);
  document.documentElement.setAttribute('data-bs-theme', theme);
  if (persist) {
    localStorage.setItem(THEME_KEY, theme);
  }
}

/**
 * Init theme from setTheme()
 */
function initTheme() {
  //If the user manually set a theme, we'll load that
  var storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme) {
    return setTheme(storedTheme);
  }
  //Detect if the user set his preferred color scheme to dark
  if (!window.matchMedia) {
    return;
  }

  //Media query to detect dark preference
  var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  //Register change listener
  mediaQuery.addEventListener("change", function (e) {
    return setTheme(e.matches ? "dark" : "light", true);
  });
  return setTheme(mediaQuery.matches ? "dark" : "light", true);
}
window.addEventListener('DOMContentLoaded', function () {
  var toggler = document.getElementById("toggle-dark");
  var theme = localStorage.getItem(THEME_KEY);
  if (toggler) {
    toggler.checked = theme === "dark";
    toggler.addEventListener("input", function (e) {
      setTheme(e.target.checked ? "dark" : "light", true);
    });
  }
});
initTheme();

/***/ }),

/***/ "./assets/mazer/static/js/components/sidebar.js":
/*!******************************************************!*\
  !*** ./assets/mazer/static/js/components/sidebar.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _helper_isDesktop__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../helper/isDesktop */ "./assets/mazer/static/js/helper/isDesktop.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


























/**
 * Calculate nested children height in sidebar menu
* @param {HTMLElement} el 
*/
var calculateChildrenHeight = function calculateChildrenHeight(el) {
  var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var children = el.children;
  var height = 0;
  for (var i = 0; i < el.childElementCount; i++) {
    var child = children[i];
    height += child.querySelector('.submenu-link').clientHeight;

    // 2-level menu
    if (deep && child.classList.contains('has-sub')) {
      var subsubmenu = child.querySelector('.submenu');
      if (subsubmenu.classList.contains('submenu-open')) {
        var childrenHeight = ~~_toConsumableArray(subsubmenu.querySelectorAll('.submenu-link')).reduce(function (acc, curr) {
          return acc + curr.clientHeight;
        }, 0);
        height += childrenHeight;
      }
    }
  }
  el.style.setProperty('--submenu-height', height + 'px');
  return height;
};

/**
 * a Sidebar component
 * @param  {HTMLElement} el - sidebar element
 * @param  {object} options={} - options
 */
var Sidebar = /*#__PURE__*/function () {
  function Sidebar(el) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Sidebar);
    this.sidebarEL = el instanceof HTMLElement ? el : document.querySelector(el);
    this.options = options;
    this.init();
  }

  /**
   * initialize the sidebar
   */
  _createClass(Sidebar, [{
    key: "init",
    value: function init() {
      var _this = this;
      // add event listener to sidebar
      document.querySelectorAll(".burger-btn").forEach(function (el) {
        return el.addEventListener("click", _this.toggle.bind(_this));
      });
      document.querySelectorAll(".sidebar-hide").forEach(function (el) {
        return el.addEventListener("click", _this.toggle.bind(_this));
      });
      window.addEventListener("resize", this.onResize.bind(this));
      var toggleSubmenu = function toggleSubmenu(el) {
        if (el.classList.contains("submenu-open")) {
          el.classList.remove('submenu-open');
          el.classList.add('submenu-closed');
        } else {
          el.classList.remove("submenu-closed");
          el.classList.add("submenu-open");
        }
      };
      var sidebarItems = document.querySelectorAll(".sidebar-item.has-sub");
      var _loop = function _loop() {
        var sidebarItem = sidebarItems[i];
        sidebarItems[i].querySelector(".sidebar-link").addEventListener("click", function (e) {
          e.preventDefault();
          var submenu = sidebarItem.querySelector(".submenu");
          toggleSubmenu(submenu);
        });

        // If submenu has submenu
        var submenuItems = sidebarItem.querySelectorAll('.submenu-item.has-sub');
        submenuItems.forEach(function (item) {
          item.addEventListener('click', function () {
            var submenuLevelTwo = item.querySelector('.submenu');
            toggleSubmenu(submenuLevelTwo);

            // Pass second .submenu
            var height = calculateChildrenHeight(item.parentElement, true);
          });
        });
      };
      for (var i = 0; i < sidebarItems.length; i++) {
        _loop();
      }

      // Perfect Scrollbar Init
      if (typeof PerfectScrollbar == "function") {
        var container = document.querySelector(".sidebar-wrapper");
        var ps = new PerfectScrollbar(container, {
          wheelPropagation: false
        });
      }

      // Scroll into active sidebar
      setTimeout(function () {
        _this.forceElementVisibility(document.querySelector(".sidebar-item.active"));
      }, 300);
    }

    /**
     * On Sidebar Rezise Event
     */
  }, {
    key: "onResize",
    value: function onResize() {
      if ((0,_helper_isDesktop__WEBPACK_IMPORTED_MODULE_24__["default"])(window)) {
        this.sidebarEL.classList.add("active");
      } else {
        this.sidebarEL.classList.remove("active");
      }

      // reset
      this.deleteBackdrop();
      this.toggleOverflowBody(true);
    }

    /**
     * Toggle Sidebar
     */
  }, {
    key: "toggle",
    value: function toggle() {
      var sidebarState = this.sidebarEL.classList.contains("active");
      if (sidebarState) {
        this.hide();
      } else {
        this.show();
      }
    }

    /**
     * Show Sidebar
     */
  }, {
    key: "show",
    value: function show() {
      this.sidebarEL.classList.add("active");
      this.sidebarEL.classList.remove("inactive");
      this.createBackdrop();
      this.toggleOverflowBody();
    }

    /**
     * Hide Sidebar
     */
  }, {
    key: "hide",
    value: function hide() {
      this.sidebarEL.classList.remove("active");
      this.sidebarEL.classList.add("inactive");
      this.deleteBackdrop();
      this.toggleOverflowBody();
    }

    /**
     * Create Sidebar Backdrop
     */
  }, {
    key: "createBackdrop",
    value: function createBackdrop() {
      if ((0,_helper_isDesktop__WEBPACK_IMPORTED_MODULE_24__["default"])(window)) return;
      this.deleteBackdrop();
      var backdrop = document.createElement("div");
      backdrop.classList.add("sidebar-backdrop");
      backdrop.addEventListener("click", this.hide.bind(this));
      document.body.appendChild(backdrop);
    }

    /**
     * Delete Sidebar Backdrop
     */
  }, {
    key: "deleteBackdrop",
    value: function deleteBackdrop() {
      var backdrop = document.querySelector(".sidebar-backdrop");
      if (backdrop) {
        backdrop.remove();
      }
    }

    /**
     * Toggle Overflow Body
     */
  }, {
    key: "toggleOverflowBody",
    value: function toggleOverflowBody(active) {
      if ((0,_helper_isDesktop__WEBPACK_IMPORTED_MODULE_24__["default"])(window)) return;
      var sidebarState = this.sidebarEL.classList.contains("active");
      var body = document.querySelector("body");
      if (typeof active == "undefined") {
        body.style.overflowY = sidebarState ? "hidden" : "auto";
      } else {
        body.style.overflowY = active ? "auto" : "hidden";
      }
    }
  }, {
    key: "isElementInViewport",
    value: function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
  }, {
    key: "forceElementVisibility",
    value: function forceElementVisibility(el) {
      if (!this.isElementInViewport(el)) {
        el.scrollIntoView(false);
      }
    }
  }]);
  return Sidebar;
}();
var sidebarEl = document.getElementById("sidebar");
/**
   * On First Load
   */
var onFirstLoad = function onFirstLoad(sidebarEL) {
  if (!sidebarEl) return;
  if ((0,_helper_isDesktop__WEBPACK_IMPORTED_MODULE_24__["default"])(window)) {
    sidebarEL.classList.add("active");
    sidebarEL.classList.add('sidebar-desktop');
  }

  // Get submenus size
  var submenus = document.querySelectorAll(".sidebar-item.has-sub .submenu");
  var _loop2 = function _loop2() {
    var submenu = submenus[i];
    var sidebarItem = submenu.parentElement;
    var height = submenu.clientHeight;
    if (sidebarItem.classList.contains('active')) submenu.classList.add('submenu-open');else submenu.classList.add('submenu-closed');
    setTimeout(function () {
      var height = calculateChildrenHeight(submenu, true);
    }, 50);
  };
  for (var i = 0; i < submenus.length; i++) {
    _loop2();
  }
};
if (document.readyState !== 'loading') {
  onFirstLoad(sidebarEl);
} else {
  window.addEventListener('DOMContentLoaded', function () {
    return onFirstLoad(sidebarEl);
  });
}
/**
 * Create Sidebar Wrapper
 */
if (sidebarEl) {
  window.sidebar = new Sidebar(sidebarEl);
}

/***/ }),

/***/ "./assets/mazer/static/js/helper/isDesktop.js":
/*!****************************************************!*\
  !*** ./assets/mazer/static/js/helper/isDesktop.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (window) {
  return window.innerWidth > 1200;
});

/***/ }),

/***/ "./assets/mazer/static/js/initTheme.js":
/*!*********************************************!*\
  !*** ./assets/mazer/static/js/initTheme.js ***!
  \*********************************************/
/***/ (() => {

var body = document.body;
var theme = localStorage.getItem('theme');
if (theme) document.documentElement.setAttribute('data-bs-theme', theme);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-440d48"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlLENBQUNTLFlBQVksQ0FBQyxlQUFlLEVBQUVQLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7O0FDSi9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYXplci9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21hemVyL2pzL21hemVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYXplci9zdGF0aWMvanMvY29tcG9uZW50cy9kYXJrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYXplci9zdGF0aWMvanMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYXplci9zdGF0aWMvanMvaGVscGVyL2lzRGVza3RvcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWF6ZXIvc3RhdGljL2pzL2luaXRUaGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbmltcG9ydCAnLi4vYm9vdHN0cmFwJztcblxuaW1wb3J0ICcuLi9tYXplci9qcy9hcHAnO1xuXG5pbXBvcnQgJy4uL21hemVyL2pzL21hemVyJztcblxuaW1wb3J0ICcuLi9tYXplci9zdGF0aWMvanMvY29tcG9uZW50cy9kYXJrJztcblxuaW1wb3J0ICdwZXJmZWN0LXNjcm9sbGJhcic7XG5cbmltcG9ydCAnLi4vbWF6ZXIvc3RhdGljL2pzL2NvbXBvbmVudHMvc2lkZWJhcic7XG5cbmltcG9ydCAnLi4vbWF6ZXIvc3RhdGljL2pzL2luaXRUaGVtZSc7IiwiLy8gRmVhdGhlciBpY29ucyBhcmUgdXNlZCBvbiBzb21lIHBhZ2VzXHJcbi8vIFJlcGxhY2UoKSByZXBsYWNlcyBbZGF0YS1mZWF0aGVyXSBlbGVtZW50cyB3aXRoIGljb25zXHJcbmltcG9ydCBmZWF0aGVySWNvbnMgZnJvbSBcImZlYXRoZXItaWNvbnNcIlxyXG5mZWF0aGVySWNvbnMucmVwbGFjZSgpXHJcblxyXG4vLyBNYXplciBpbnRlcm5hbCBKUy4gSW5jbHVkZSB0aGlzIGluIHlvdXIgcHJvamVjdCB0byBnZXRcclxuLy8gdGhlIHNpZGViYXIgcnVubmluZy5cclxuaW1wb3J0IFwiLi9tYXplclwiIFxyXG4iLCIvLyBEb24ndCBmb3JnZXQgdG8gbG9hZCBib290c3RyYXAganMgaW4geW91ciBwcm9qZWN0XG4vLyBIZXJlLCB3ZSBsb2FkIGl0IGluIG91ciBhcHAuanNcbmltcG9ydCBib290c3RyYXBCdW5kbGUgZnJvbSBcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGVcIlxud2luZG93LmJvb3RzdHJhcCA9IGJvb3RzdHJhcEJ1bmRsZVxuXG4vLyBXZSBjb3VsZCBpbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBkaXJlY3RseSBpbiB0aGUgc2lkZWJhciBtb2R1bGVcbmltcG9ydCBcIi4vLi4vc3RhdGljL2pzL2NvbXBvbmVudHMvc2lkZWJhclwiXG5cbiIsIlxuY29uc3QgVEhFTUVfS0VZID0gXCJ0aGVtZVwiXG5cbmZ1bmN0aW9uIHRvZ2dsZURhcmtUaGVtZSgpIHtcbiAgc2V0VGhlbWUoXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYnMtdGhlbWVcIikgPT09ICdkYXJrJ1xuICAgICAgPyBcImxpZ2h0XCJcbiAgICAgIDogXCJkYXJrXCJcbiAgKVxufVxuXG4vKipcbiAqIFNldCB0aGVtZSBmb3IgbWF6ZXJcbiAqIEBwYXJhbSB7XCJkYXJrXCJ8XCJsaWdodFwifSB0aGVtZVxuICogQHBhcmFtIHtib29sZWFufSBwZXJzaXN0IFxuICovXG5mdW5jdGlvbiBzZXRUaGVtZSh0aGVtZSwgcGVyc2lzdCA9IGZhbHNlKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0aGVtZSlcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy10aGVtZScsIHRoZW1lKVxuICBcbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUSEVNRV9LRVksIHRoZW1lKVxuICB9XG59XG5cbi8qKlxuICogSW5pdCB0aGVtZSBmcm9tIHNldFRoZW1lKClcbiAqL1xuZnVuY3Rpb24gaW5pdFRoZW1lKCkge1xuICAvL0lmIHRoZSB1c2VyIG1hbnVhbGx5IHNldCBhIHRoZW1lLCB3ZSdsbCBsb2FkIHRoYXRcbiAgY29uc3Qgc3RvcmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUSEVNRV9LRVkpXG4gIGlmIChzdG9yZWRUaGVtZSkge1xuICAgIHJldHVybiBzZXRUaGVtZShzdG9yZWRUaGVtZSlcbiAgfVxuICAvL0RldGVjdCBpZiB0aGUgdXNlciBzZXQgaGlzIHByZWZlcnJlZCBjb2xvciBzY2hlbWUgdG8gZGFya1xuICBpZiAoIXdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvL01lZGlhIHF1ZXJ5IHRvIGRldGVjdCBkYXJrIHByZWZlcmVuY2VcbiAgY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKVxuXG4gIC8vUmVnaXN0ZXIgY2hhbmdlIGxpc3RlbmVyXG4gIG1lZGlhUXVlcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT5cbiAgICBzZXRUaGVtZShlLm1hdGNoZXMgPyBcImRhcmtcIiA6IFwibGlnaHRcIiwgdHJ1ZSlcbiAgKVxuICByZXR1cm4gc2V0VGhlbWUobWVkaWFRdWVyeS5tYXRjaGVzID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIsIHRydWUpXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCB0b2dnbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtZGFya1wiKVxuICBjb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRIRU1FX0tFWSlcblxuICBpZih0b2dnbGVyKSB7XG4gICAgdG9nZ2xlci5jaGVja2VkID0gdGhlbWUgPT09IFwiZGFya1wiXG4gICAgXG4gICAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIHNldFRoZW1lKGUudGFyZ2V0LmNoZWNrZWQgPyBcImRhcmtcIiA6IFwibGlnaHRcIiwgdHJ1ZSlcbiAgICB9KVxuICB9XG5cbn0pO1xuXG5pbml0VGhlbWUoKVxuXG4iLCJpbXBvcnQgaXNEZXNrdG9wIGZyb20gJy4uL2hlbHBlci9pc0Rlc2t0b3AnXG5cblxuLyoqXG4gKiBDYWxjdWxhdGUgbmVzdGVkIGNoaWxkcmVuIGhlaWdodCBpbiBzaWRlYmFyIG1lbnVcbiogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgXG4qL1xuY29uc3QgY2FsY3VsYXRlQ2hpbGRyZW5IZWlnaHQgPSAoZWwsIGRlZXAgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuXG4gIFxuICBsZXQgaGVpZ2h0ID0gMFxuICBmb3IobGV0IGkgPSAwOyBpIDwgZWwuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICBoZWlnaHQgKz0gY2hpbGQucXVlcnlTZWxlY3RvcignLnN1Ym1lbnUtbGluaycpLmNsaWVudEhlaWdodFxuXG4gICAgLy8gMi1sZXZlbCBtZW51XG4gICAgaWYoZGVlcCAmJiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1zdWInKSkge1xuICAgICAgY29uc3Qgc3Vic3VibWVudSA9IGNoaWxkLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtZW51JylcblxuICAgICAgaWYoc3Vic3VibWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Ym1lbnUtb3BlbicpKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuSGVpZ2h0ID0gIH5+Wy4uLnN1YnN1Ym1lbnUucXVlcnlTZWxlY3RvckFsbCgnLnN1Ym1lbnUtbGluaycpXS5yZWR1Y2UoKGFjYyxjdXJyKSA9PiBhY2MgKyBjdXJyLmNsaWVudEhlaWdodCwwKVxuICAgICAgICBoZWlnaHQgKz0gY2hpbGRyZW5IZWlnaHRcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cbiAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0tc3VibWVudS1oZWlnaHQnLCBoZWlnaHQgKyAncHgnKVxuICByZXR1cm4gaGVpZ2h0XG59XG5cbi8qKlxuICogYSBTaWRlYmFyIGNvbXBvbmVudFxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsIC0gc2lkZWJhciBlbGVtZW50XG4gKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnM9e30gLSBvcHRpb25zXG4gKi9cbmNsYXNzIFNpZGViYXIge1xuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5zaWRlYmFyRUwgPSBlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWwgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIGluaXRpYWxpemUgdGhlIHNpZGViYXJcbiAgICovXG4gIGluaXQoKSB7XG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNpZGViYXJcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnVyZ2VyLWJ0blwiKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy50b2dnbGUuYmluZCh0aGlzKSkpXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItaGlkZVwiKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy50b2dnbGUuYmluZCh0aGlzKSkpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxuXG4gICAgXG4gICAgY29uc3QgdG9nZ2xlU3VibWVudSA9IChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhcInN1Ym1lbnUtb3BlblwiKSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzdWJtZW51LW9wZW4nKVxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdzdWJtZW51LWNsb3NlZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwic3VibWVudS1jbG9zZWRcIilcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcInN1Ym1lbnUtb3BlblwiKVxuICAgICAgfSBcbiAgICB9XG5cbiAgICBcblxuXG4gICAgbGV0IHNpZGViYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1pdGVtLmhhcy1zdWJcIilcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGViYXJJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNpZGViYXJJdGVtID0gc2lkZWJhckl0ZW1zW2ldXG4gICAgICBcbiAgICAgIHNpZGViYXJJdGVtc1tpXVxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWxpbmtcIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGxldCBzdWJtZW51ID0gc2lkZWJhckl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zdWJtZW51XCIpXG4gICAgICAgICAgdG9nZ2xlU3VibWVudShzdWJtZW51KVxuICAgICAgICB9KVxuICAgICAgXG4gICAgICBcbiAgICAgIC8vIElmIHN1Ym1lbnUgaGFzIHN1Ym1lbnVcbiAgICAgIGNvbnN0IHN1Ym1lbnVJdGVtcyA9IHNpZGViYXJJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtZW51LWl0ZW0uaGFzLXN1YicpIFxuICAgICAgc3VibWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VibWVudUxldmVsVHdvID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc3VibWVudScpXG4gICAgICAgICAgdG9nZ2xlU3VibWVudShzdWJtZW51TGV2ZWxUd28pXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gUGFzcyBzZWNvbmQgLnN1Ym1lbnVcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSBjYWxjdWxhdGVDaGlsZHJlbkhlaWdodChpdGVtLnBhcmVudEVsZW1lbnQsIHRydWUpXG5cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUGVyZmVjdCBTY3JvbGxiYXIgSW5pdFxuICAgIGlmICh0eXBlb2YgUGVyZmVjdFNjcm9sbGJhciA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci13cmFwcGVyXCIpXG4gICAgICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKGNvbnRhaW5lciwge1xuICAgICAgICB3aGVlbFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gU2Nyb2xsIGludG8gYWN0aXZlIHNpZGViYXJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VFbGVtZW50VmlzaWJpbGl0eShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItaXRlbS5hY3RpdmVcIikpXG4gICAgfSwgMzAwKVxuXG4gIH1cblxuICBcblxuICBcblxuICAvKipcbiAgICogT24gU2lkZWJhciBSZXppc2UgRXZlbnRcbiAgICovXG4gIG9uUmVzaXplKCkge1xuICAgIGlmIChpc0Rlc2t0b3Aod2luZG93KSkge1xuICAgICAgdGhpcy5zaWRlYmFyRUwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpZGViYXJFTC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuXG4gICAgLy8gcmVzZXRcbiAgICB0aGlzLmRlbGV0ZUJhY2tkcm9wKClcbiAgICB0aGlzLnRvZ2dsZU92ZXJmbG93Qm9keSh0cnVlKVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBTaWRlYmFyXG4gICAqL1xuICB0b2dnbGUoKSB7XG4gICAgY29uc3Qgc2lkZWJhclN0YXRlID0gdGhpcy5zaWRlYmFyRUwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXG4gICAgaWYgKHNpZGViYXJTdGF0ZSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBTaWRlYmFyXG4gICAqL1xuICBzaG93KCkge1xuICAgIHRoaXMuc2lkZWJhckVMLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB0aGlzLnNpZGViYXJFTC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIilcbiAgICB0aGlzLmNyZWF0ZUJhY2tkcm9wKClcbiAgICB0aGlzLnRvZ2dsZU92ZXJmbG93Qm9keSgpXG4gIH1cblxuICAvKipcbiAgICogSGlkZSBTaWRlYmFyXG4gICAqL1xuICBoaWRlKCkge1xuICAgIHRoaXMuc2lkZWJhckVMLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB0aGlzLnNpZGViYXJFTC5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIilcbiAgICB0aGlzLmRlbGV0ZUJhY2tkcm9wKClcbiAgICB0aGlzLnRvZ2dsZU92ZXJmbG93Qm9keSgpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIFNpZGViYXIgQmFja2Ryb3BcbiAgICovXG4gIGNyZWF0ZUJhY2tkcm9wKCkge1xuICAgIGlmIChpc0Rlc2t0b3Aod2luZG93KSkgcmV0dXJuXG4gICAgdGhpcy5kZWxldGVCYWNrZHJvcCgpXG4gICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChcInNpZGViYXItYmFja2Ryb3BcIilcbiAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oaWRlLmJpbmQodGhpcykpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZHJvcClcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgU2lkZWJhciBCYWNrZHJvcFxuICAgKi9cbiAgZGVsZXRlQmFja2Ryb3AoKSB7XG4gICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItYmFja2Ryb3BcIilcbiAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgIGJhY2tkcm9wLnJlbW92ZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBPdmVyZmxvdyBCb2R5XG4gICAqL1xuICB0b2dnbGVPdmVyZmxvd0JvZHkoYWN0aXZlKSB7XG4gICAgaWYoaXNEZXNrdG9wKHdpbmRvdykpIHJldHVybjtcbiAgICBjb25zdCBzaWRlYmFyU3RhdGUgPSB0aGlzLnNpZGViYXJFTC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICBpZiAodHlwZW9mIGFjdGl2ZSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93WSA9IHNpZGViYXJTdGF0ZSA/IFwiaGlkZGVuXCIgOiBcImF1dG9cIlxuICAgIH0gZWxzZSB7XG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93WSA9IGFjdGl2ZSA/IFwiYXV0b1wiIDogXCJoaWRkZW5cIlxuICAgIH1cbiAgfVxuXG4gIGlzRWxlbWVudEluVmlld3BvcnQoZWwpIHtcbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9XG4gICAgICAgICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApXG4gIH1cblxuICBmb3JjZUVsZW1lbnRWaXNpYmlsaXR5KGVsKSB7XG4gICAgaWYgKCF0aGlzLmlzRWxlbWVudEluVmlld3BvcnQoZWwpKSB7XG4gICAgICBlbC5zY3JvbGxJbnRvVmlldyhmYWxzZSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbmxldCBzaWRlYmFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIilcbi8qKlxuICAgKiBPbiBGaXJzdCBMb2FkXG4gICAqL1xuY29uc3Qgb25GaXJzdExvYWQgPSAoc2lkZWJhckVMKSA9PiB7XG4gIGlmKCFzaWRlYmFyRWwpIHJldHVyblxuICBpZiAoaXNEZXNrdG9wKHdpbmRvdykpIHtcbiAgICBzaWRlYmFyRUwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIHNpZGViYXJFTC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWRlc2t0b3AnKVxuICB9XG5cbiAgLy8gR2V0IHN1Ym1lbnVzIHNpemVcbiAgbGV0IHN1Ym1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLWl0ZW0uaGFzLXN1YiAuc3VibWVudVwiKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1Ym1lbnVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHN1Ym1lbnUgPSBzdWJtZW51c1tpXVxuICAgIGNvbnN0IHNpZGViYXJJdGVtID0gc3VibWVudS5wYXJlbnRFbGVtZW50XG4gICAgY29uc3QgaGVpZ2h0ID0gc3VibWVudS5jbGllbnRIZWlnaHRcbiAgICBcbiAgICBpZihzaWRlYmFySXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSBzdWJtZW51LmNsYXNzTGlzdC5hZGQoJ3N1Ym1lbnUtb3BlbicpXG4gICAgZWxzZSBzdWJtZW51LmNsYXNzTGlzdC5hZGQoJ3N1Ym1lbnUtY2xvc2VkJylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGNhbGN1bGF0ZUNoaWxkcmVuSGVpZ2h0KHN1Ym1lbnUsIHRydWUpXG4gICAgfSwgNTApO1xuICB9XG59XG5cbmlmKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICBvbkZpcnN0TG9hZChzaWRlYmFyRWwpXG59XG5lbHNlIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiBvbkZpcnN0TG9hZChzaWRlYmFyRWwpKVxufVxuLyoqXG4gKiBDcmVhdGUgU2lkZWJhciBXcmFwcGVyXG4gKi9cbmlmIChzaWRlYmFyRWwpIHtcbiAgd2luZG93LnNpZGViYXIgPSBuZXcgU2lkZWJhcihzaWRlYmFyRWwpXG59XG4iLCJleHBvcnQgZGVmYXVsdCAod2luZG93KSA9PiB3aW5kb3cuaW5uZXJXaWR0aCA+IDEyMDA7XG4iLCJjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJylcblxuaWYgKHRoZW1lKSBcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy10aGVtZScsIHRoZW1lKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiZmVhdGhlckljb25zIiwicmVwbGFjZSIsImJvb3RzdHJhcEJ1bmRsZSIsIndpbmRvdyIsImJvb3RzdHJhcCIsIlRIRU1FX0tFWSIsInRvZ2dsZURhcmtUaGVtZSIsInNldFRoZW1lIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVtZSIsInBlcnNpc3QiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImluaXRUaGVtZSIsInN0b3JlZFRoZW1lIiwiZ2V0SXRlbSIsIm1hdGNoTWVkaWEiLCJtZWRpYVF1ZXJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJtYXRjaGVzIiwidG9nZ2xlciIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tlZCIsInRhcmdldCIsImlzRGVza3RvcCIsImNhbGN1bGF0ZUNoaWxkcmVuSGVpZ2h0IiwiZWwiLCJkZWVwIiwiY2hpbGRyZW4iLCJoZWlnaHQiLCJpIiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGllbnRIZWlnaHQiLCJjb250YWlucyIsInN1YnN1Ym1lbnUiLCJjaGlsZHJlbkhlaWdodCIsIl90b0NvbnN1bWFibGVBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsIlNpZGViYXIiLCJvcHRpb25zIiwic2lkZWJhckVMIiwiSFRNTEVsZW1lbnQiLCJpbml0IiwiX3RoaXMiLCJmb3JFYWNoIiwidG9nZ2xlIiwiYmluZCIsIm9uUmVzaXplIiwidG9nZ2xlU3VibWVudSIsInJlbW92ZSIsInNpZGViYXJJdGVtcyIsIl9sb29wIiwic2lkZWJhckl0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1lbnUiLCJzdWJtZW51SXRlbXMiLCJpdGVtIiwic3VibWVudUxldmVsVHdvIiwicGFyZW50RWxlbWVudCIsIlBlcmZlY3RTY3JvbGxiYXIiLCJjb250YWluZXIiLCJwcyIsIndoZWVsUHJvcGFnYXRpb24iLCJzZXRUaW1lb3V0IiwiZm9yY2VFbGVtZW50VmlzaWJpbGl0eSIsImRlbGV0ZUJhY2tkcm9wIiwidG9nZ2xlT3ZlcmZsb3dCb2R5Iiwic2lkZWJhclN0YXRlIiwiaGlkZSIsInNob3ciLCJjcmVhdGVCYWNrZHJvcCIsImJhY2tkcm9wIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYWN0aXZlIiwib3ZlcmZsb3dZIiwiaXNFbGVtZW50SW5WaWV3cG9ydCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInNjcm9sbEludG9WaWV3Iiwic2lkZWJhckVsIiwib25GaXJzdExvYWQiLCJzdWJtZW51cyIsIl9sb29wMiIsInJlYWR5U3RhdGUiLCJzaWRlYmFyIl0sInNvdXJjZVJvb3QiOiIifQ==