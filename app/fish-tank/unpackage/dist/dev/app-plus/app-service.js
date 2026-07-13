(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*******************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/main.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 44));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App.vue */ 45));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFDbkI7QUFBMkI7QUFBQTtBQUUzQkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNkRyxZQUFHLEVBQ047QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJ1xuXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuXG5BcHAubXBUeXBlID0gJ2FwcCdcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gIC4uLkFwcFxufSlcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!**********************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages.json ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/login/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/login/index.vue?mpType=page */ 7).default);
});
__definePage('pages/devices/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/devices/index.vue?mpType=page */ 18).default);
});
__definePage('pages/control/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/control/index.vue?mpType=page */ 24).default);
});
__definePage('pages/control/fish-one', function () {
  return Vue.extend(__webpack_require__(/*! pages/control/fish-one.vue?mpType=page */ 29).default);
});
__definePage('pages/control/fish-mini', function () {
  return Vue.extend(__webpack_require__(/*! pages/control/fish-mini.vue?mpType=page */ 34).default);
});
__definePage('pages/bind/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/bind/index.vue?mpType=page */ 39).default);
});

/***/ }),
/* 7 */
/*!*********************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/login/index.vue?mpType=page ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=705bf593&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/login/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwNWJmNTkzJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbG9naW4vaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!***************************************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/login/index.vue?vue&type=template&id=705bf593&mpType=page ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=705bf593&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/login/index.vue?vue&type=template&id=705bf593&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "login-page"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "header"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "logo"),
            attrs: { _i: 2 },
          }),
          _c("text", {
            staticClass: _vm._$s(3, "sc", "title"),
            attrs: { _i: 3 },
          }),
          _c("text", {
            staticClass: _vm._$s(4, "sc", "subtitle"),
            attrs: { _i: 4 },
          }),
        ]
      ),
      _c("view", { staticClass: _vm._$s(5, "sc", "form"), attrs: { _i: 5 } }, [
        _c(
          "view",
          { staticClass: _vm._$s(6, "sc", "input-group"), attrs: { _i: 6 } },
          [
            _c("text", {
              staticClass: _vm._$s(7, "sc", "input-label"),
              attrs: { _i: 7 },
            }),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.phoneNumber,
                  expression: "phoneNumber",
                },
              ],
              staticClass: _vm._$s(8, "sc", "input"),
              attrs: { _i: 8 },
              domProps: { value: _vm._$s(8, "v-model", _vm.phoneNumber) },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.phoneNumber = $event.target.value
                },
              },
            }),
          ]
        ),
        _c("button", {
          staticClass: _vm._$s(9, "sc", "login-btn"),
          attrs: {
            disabled: _vm._$s(9, "a-disabled", !_vm.phoneNumber),
            _i: 9,
          },
          on: { click: _vm.handleLogin },
        }),
        _c(
          "view",
          { staticClass: _vm._$s(10, "sc", "tips"), attrs: { _i: 10 } },
          [_c("text")]
        ),
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(12, "sc", "footer"), attrs: { _i: 12 } },
        [
          _c("text", {
            staticClass: _vm._$s(13, "sc", "version"),
            attrs: { _i: 13 },
          }),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!*********************************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/login/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdqQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/login/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _storage = __webpack_require__(/*! @/utils/storage */ 15);\nvar _api = __webpack_require__(/*! @/utils/api */ 16);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      phoneNumber: ''\n    };\n  },\n  onLoad: function onLoad() {\n    var savedPhone = (0, _storage.getPhoneNumber)();\n    if (savedPhone) {\n      this.phoneNumber = savedPhone;\n      this.handleLogin();\n    }\n  },\n  methods: {\n    handleLogin: function handleLogin() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(!_this.phoneNumber || _this.phoneNumber.length !== 11)) {\n                  _context.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '请输入正确的手机号',\n                  icon: 'none'\n                });\n                return _context.abrupt(\"return\");\n              case 3:\n                uni.showLoading({\n                  title: '登录中...'\n                });\n                _context.prev = 4;\n                (0, _storage.savePhoneNumber)(_this.phoneNumber);\n                _context.next = 8;\n                return (0, _api.getDevices)(_this.phoneNumber);\n              case 8:\n                uni.hideLoading();\n                uni.redirectTo({\n                  url: '/pages/devices/index'\n                });\n                _context.next = 16;\n                break;\n              case 12:\n                _context.prev = 12;\n                _context.t0 = _context[\"catch\"](4);\n                uni.hideLoading();\n                uni.showToast({\n                  title: '登录失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[4, 12]]);\n      }))();\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJwaG9uZU51bWJlciIsIm9uTG9hZCIsInNhdmVkUGhvbmUiLCJnZXRQaG9uZU51bWJlciIsImhhbmRsZUxvZ2luIiwibWV0aG9kcyIsImxlbmd0aCIsInVuaSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInNob3dMb2FkaW5nIiwic2F2ZVBob25lTnVtYmVyIiwiZ2V0RGV2aWNlcyIsImhpZGVMb2FkaW5nIiwicmVkaXJlY3RUbyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0NBO0FBQ0E7QUFyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLGVBS2U7RUFDYkEsSUFBSSxrQkFBRztJQUNMLE9BQU87TUFDTEMsV0FBVyxFQUFFO0lBQ2YsQ0FBQztFQUNILENBQUM7RUFDREMsTUFBTSxvQkFBRztJQUNQLElBQU1DLFVBQVUsR0FBRyxJQUFBQyx1QkFBYyxHQUFFO0lBQ25DLElBQUlELFVBQVUsRUFBRTtNQUNkLElBQUksQ0FBQ0YsV0FBVyxHQUFHRSxVQUFVO01BQzdCLElBQUksQ0FBQ0UsV0FBVyxFQUFFO0lBQ3BCO0VBQ0YsQ0FBQztFQUNEQyxPQUFPLEVBQUU7SUFDREQsV0FBVyx5QkFBRztNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxNQUNkLENBQUMsS0FBSSxDQUFDSixXQUFXLElBQUksS0FBSSxDQUFDQSxXQUFXLENBQUNNLE1BQU0sS0FBSyxFQUFFO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUNyREMsR0FBRyxDQUFDQyxTQUFTLENBQUM7a0JBQUVDLEtBQUssRUFBRSxXQUFXO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQU8sQ0FBQyxDQUFDO2dCQUFBO2NBQUE7Z0JBSXJESCxHQUFHLENBQUNJLFdBQVcsQ0FBQztrQkFBRUYsS0FBSyxFQUFFO2dCQUFTLENBQUMsQ0FBQztnQkFBQTtnQkFHbEMsSUFBQUcsd0JBQWUsRUFBQyxLQUFJLENBQUNaLFdBQVcsQ0FBQztnQkFBQTtnQkFBQSxPQUMzQixJQUFBYSxlQUFVLEVBQUMsS0FBSSxDQUFDYixXQUFXLENBQUM7Y0FBQTtnQkFDbENPLEdBQUcsQ0FBQ08sV0FBVyxFQUFFO2dCQUNqQlAsR0FBRyxDQUFDUSxVQUFVLENBQUM7a0JBQUVDLEdBQUcsRUFBRTtnQkFBdUIsQ0FBQyxDQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBRS9DVCxHQUFHLENBQUNPLFdBQVcsRUFBRTtnQkFDakJQLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO2tCQUFFQyxLQUFLLEVBQUUsTUFBTTtrQkFBRUMsSUFBSSxFQUFFO2dCQUFPLENBQUMsQ0FBQztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVsRDtFQUNGO0FBQ0YsQ0FBQztBQUFBIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCB7IHNhdmVQaG9uZU51bWJlciwgZ2V0UGhvbmVOdW1iZXIgfSBmcm9tICdAL3V0aWxzL3N0b3JhZ2UnXG5pbXBvcnQgeyBnZXREZXZpY2VzIH0gZnJvbSAnQC91dGlscy9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGhvbmVOdW1iZXI6ICcnXG4gICAgfVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgY29uc3Qgc2F2ZWRQaG9uZSA9IGdldFBob25lTnVtYmVyKClcbiAgICBpZiAoc2F2ZWRQaG9uZSkge1xuICAgICAgdGhpcy5waG9uZU51bWJlciA9IHNhdmVkUGhvbmVcbiAgICAgIHRoaXMuaGFuZGxlTG9naW4oKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGhhbmRsZUxvZ2luKCkge1xuICAgICAgaWYgKCF0aGlzLnBob25lTnVtYmVyIHx8IHRoaXMucGhvbmVOdW1iZXIubGVuZ3RoICE9PSAxMSkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7cnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBcbiAgICAgIHVuaS5zaG93TG9hZGluZyh7IHRpdGxlOiAn55m75b2V5LitLi4uJyB9KVxuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBzYXZlUGhvbmVOdW1iZXIodGhpcy5waG9uZU51bWJlcilcbiAgICAgICAgYXdhaXQgZ2V0RGV2aWNlcyh0aGlzLnBob25lTnVtYmVyKVxuICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB1bmkucmVkaXJlY3RUbyh7IHVybDogJy9wYWdlcy9kZXZpY2VzL2luZGV4JyB9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn55m75b2V5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 13)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 13 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/*!****************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/utils/storage.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.clearPhoneNumber = clearPhoneNumber;\nexports.getDevices = getDevices;\nexports.getPhoneNumber = getPhoneNumber;\nexports.saveDevices = saveDevices;\nexports.savePhoneNumber = savePhoneNumber;\nvar PHONE_KEY = 'fish_tank_phone';\nvar DEVICES_KEY = 'fish_tank_devices';\nfunction savePhoneNumber(phone) {\n  uni.setStorageSync(PHONE_KEY, phone);\n}\nfunction getPhoneNumber() {\n  return uni.getStorageSync(PHONE_KEY) || '';\n}\nfunction clearPhoneNumber() {\n  uni.removeStorageSync(PHONE_KEY);\n}\nfunction saveDevices(devices) {\n  uni.setStorageSync(DEVICES_KEY, JSON.stringify(devices));\n}\nfunction getDevices() {\n  var data = uni.getStorageSync(DEVICES_KEY) || '[]';\n  try {\n    return JSON.parse(data);\n  } catch (_unused) {\n    return [];\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvc3RvcmFnZS5qcyJdLCJuYW1lcyI6WyJQSE9ORV9LRVkiLCJERVZJQ0VTX0tFWSIsInNhdmVQaG9uZU51bWJlciIsInBob25lIiwidW5pIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRQaG9uZU51bWJlciIsImdldFN0b3JhZ2VTeW5jIiwiY2xlYXJQaG9uZU51bWJlciIsInJlbW92ZVN0b3JhZ2VTeW5jIiwic2F2ZURldmljZXMiLCJkZXZpY2VzIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldERldmljZXMiLCJkYXRhIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUcsaUJBQWlCO0FBQ25DLElBQU1DLFdBQVcsR0FBRyxtQkFBbUI7QUFFaEMsU0FBU0MsZUFBZSxDQUFDQyxLQUFLLEVBQUU7RUFDckNDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDTCxTQUFTLEVBQUVHLEtBQUssQ0FBQztBQUN0QztBQUVPLFNBQVNHLGNBQWMsR0FBRztFQUMvQixPQUFPRixHQUFHLENBQUNHLGNBQWMsQ0FBQ1AsU0FBUyxDQUFDLElBQUksRUFBRTtBQUM1QztBQUVPLFNBQVNRLGdCQUFnQixHQUFHO0VBQ2pDSixHQUFHLENBQUNLLGlCQUFpQixDQUFDVCxTQUFTLENBQUM7QUFDbEM7QUFFTyxTQUFTVSxXQUFXLENBQUNDLE9BQU8sRUFBRTtFQUNuQ1AsR0FBRyxDQUFDQyxjQUFjLENBQUNKLFdBQVcsRUFBRVcsSUFBSSxDQUFDQyxTQUFTLENBQUNGLE9BQU8sQ0FBQyxDQUFDO0FBQzFEO0FBRU8sU0FBU0csVUFBVSxHQUFHO0VBQzNCLElBQU1DLElBQUksR0FBR1gsR0FBRyxDQUFDRyxjQUFjLENBQUNOLFdBQVcsQ0FBQyxJQUFJLElBQUk7RUFDcEQsSUFBSTtJQUNGLE9BQU9XLElBQUksQ0FBQ0ksS0FBSyxDQUFDRCxJQUFJLENBQUM7RUFDekIsQ0FBQyxDQUFDLGdCQUFNO0lBQ04sT0FBTyxFQUFFO0VBQ1g7QUFDRiIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBIT05FX0tFWSA9ICdmaXNoX3RhbmtfcGhvbmUnXG5jb25zdCBERVZJQ0VTX0tFWSA9ICdmaXNoX3RhbmtfZGV2aWNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQaG9uZU51bWJlcihwaG9uZSkge1xuICB1bmkuc2V0U3RvcmFnZVN5bmMoUEhPTkVfS0VZLCBwaG9uZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBob25lTnVtYmVyKCkge1xuICByZXR1cm4gdW5pLmdldFN0b3JhZ2VTeW5jKFBIT05FX0tFWSkgfHwgJydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUGhvbmVOdW1iZXIoKSB7XG4gIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhQSE9ORV9LRVkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRGV2aWNlcyhkZXZpY2VzKSB7XG4gIHVuaS5zZXRTdG9yYWdlU3luYyhERVZJQ0VTX0tFWSwgSlNPTi5zdHJpbmdpZnkoZGV2aWNlcykpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXZpY2VzKCkge1xuICBjb25zdCBkYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKERFVklDRVNfS0VZKSB8fCAnW10nXG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/utils/api.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.bindDevice = bindDevice;\nexports.deleteTimer = deleteTimer;\nexports.getDeviceStatus = getDeviceStatus;\nexports.getDevices = getDevices;\nexports.getTimers = getTimers;\nexports.request = request;\nexports.requestDeviceStatus = requestDeviceStatus;\nexports.saveTimers = saveTimers;\nexports.sendControlCommand = sendControlCommand;\nexports.unbindDevice = unbindDevice;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n// 服务器地址 - 部署到公网时改为公网IP\nvar BASE_URL = 'http://192.168.2.11:7965';\nfunction request(options) {\n  return new Promise(function (resolve, reject) {\n    uni.request({\n      url: BASE_URL + options.url,\n      method: options.method || 'GET',\n      data: options.data || {},\n      header: _objectSpread({\n        'Content-Type': 'application/json'\n      }, options.header),\n      success: function success(res) {\n        if (res.statusCode === 200) {\n          resolve(res.data);\n        } else {\n          reject(res.data);\n        }\n      },\n      fail: function fail(err) {\n        reject(err);\n      }\n    });\n  });\n}\nfunction getDevices(phoneNumber) {\n  return request({\n    url: '/api/devices',\n    data: {\n      phone_number: phoneNumber\n    }\n  });\n}\nfunction getDeviceStatus(deviceKey) {\n  return request({\n    url: '/api/status',\n    data: {\n      device_key: deviceKey\n    }\n  });\n}\nfunction bindDevice(phoneNumber, deviceKey) {\n  return request({\n    url: '/api/bind',\n    method: 'POST',\n    data: {\n      phone_number: phoneNumber,\n      device_key: deviceKey\n    }\n  });\n}\nfunction unbindDevice(phoneNumber, deviceKey) {\n  return request({\n    url: '/api/unbind',\n    method: 'POST',\n    data: {\n      phone_number: phoneNumber,\n      device_key: deviceKey\n    }\n  });\n}\nfunction sendControlCommand(deviceKey, cmd, params) {\n  return request({\n    url: '/api/control',\n    method: 'POST',\n    data: {\n      device_key: deviceKey,\n      cmd: cmd,\n      params: params\n    }\n  });\n}\nfunction getTimers(deviceKey) {\n  return request({\n    url: '/api/timers',\n    data: {\n      device_key: deviceKey\n    }\n  });\n}\nfunction saveTimers(deviceKey, timers) {\n  return request({\n    url: '/api/timers',\n    method: 'POST',\n    data: {\n      device_key: deviceKey,\n      timers: timers\n    }\n  });\n}\nfunction deleteTimer(deviceKey, timerId) {\n  return request({\n    url: '/api/timers/delete',\n    method: 'POST',\n    data: {\n      device_key: deviceKey,\n      timer_id: timerId\n    }\n  });\n}\nfunction requestDeviceStatus(deviceKey) {\n  return request({\n    url: '/api/request_status',\n    method: 'POST',\n    data: {\n      device_key: deviceKey\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYXBpLmpzIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwicmVxdWVzdCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVuaSIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwic3RhdHVzQ29kZSIsImZhaWwiLCJlcnIiLCJnZXREZXZpY2VzIiwicGhvbmVOdW1iZXIiLCJwaG9uZV9udW1iZXIiLCJnZXREZXZpY2VTdGF0dXMiLCJkZXZpY2VLZXkiLCJkZXZpY2Vfa2V5IiwiYmluZERldmljZSIsInVuYmluZERldmljZSIsInNlbmRDb250cm9sQ29tbWFuZCIsImNtZCIsInBhcmFtcyIsImdldFRpbWVycyIsInNhdmVUaW1lcnMiLCJ0aW1lcnMiLCJkZWxldGVUaW1lciIsInRpbWVySWQiLCJ0aW1lcl9pZCIsInJlcXVlc3REZXZpY2VTdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLFFBQVEsR0FBRywwQkFBMEI7QUFFcEMsU0FBU0MsT0FBTyxDQUFDQyxPQUFPLEVBQUU7RUFDL0IsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7SUFDdENDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDO01BQ1ZNLEdBQUcsRUFBRVAsUUFBUSxHQUFHRSxPQUFPLENBQUNLLEdBQUc7TUFDM0JDLE1BQU0sRUFBRU4sT0FBTyxDQUFDTSxNQUFNLElBQUksS0FBSztNQUMvQkMsSUFBSSxFQUFFUCxPQUFPLENBQUNPLElBQUksSUFBSSxDQUFDLENBQUM7TUFDeEJDLE1BQU07UUFDSixjQUFjLEVBQUU7TUFBa0IsR0FDL0JSLE9BQU8sQ0FBQ1EsTUFBTSxDQUNsQjtNQUNEQyxPQUFPLEVBQUUsaUJBQUNDLEdBQUcsRUFBSztRQUNoQixJQUFJQSxHQUFHLENBQUNDLFVBQVUsS0FBSyxHQUFHLEVBQUU7VUFDMUJU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iqHlmajlnLDlnYAgLSDpg6jnvbLliLDlhaznvZHml7bmlLnkuLrlhaznvZFJUFxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzE5Mi4xNjguMi4xMTo3OTY1J1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdW5pLnJlcXVlc3Qoe1xuICAgICAgdXJsOiBCQVNFX1VSTCArIG9wdGlvbnMudXJsLFxuICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJyxcbiAgICAgIGRhdGE6IG9wdGlvbnMuZGF0YSB8fCB7fSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAuLi5vcHRpb25zLmhlYWRlclxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChyZXMuZGF0YSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV2aWNlcyhwaG9uZU51bWJlcikge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS9kZXZpY2VzJyxcbiAgICBkYXRhOiB7IHBob25lX251bWJlcjogcGhvbmVOdW1iZXIgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV2aWNlU3RhdHVzKGRldmljZUtleSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS9zdGF0dXMnLFxuICAgIGRhdGE6IHsgZGV2aWNlX2tleTogZGV2aWNlS2V5IH1cbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmREZXZpY2UocGhvbmVOdW1iZXIsIGRldmljZUtleSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS9iaW5kJyxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7IHBob25lX251bWJlcjogcGhvbmVOdW1iZXIsIGRldmljZV9rZXk6IGRldmljZUtleSB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmJpbmREZXZpY2UocGhvbmVOdW1iZXIsIGRldmljZUtleSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS91bmJpbmQnLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHsgcGhvbmVfbnVtYmVyOiBwaG9uZU51bWJlciwgZGV2aWNlX2tleTogZGV2aWNlS2V5IH1cbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDb250cm9sQ29tbWFuZChkZXZpY2VLZXksIGNtZCwgcGFyYW1zKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6ICcvYXBpL2NvbnRyb2wnLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHsgZGV2aWNlX2tleTogZGV2aWNlS2V5LCBjbWQsIHBhcmFtcyB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lcnMoZGV2aWNlS2V5KSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6ICcvYXBpL3RpbWVycycsXG4gICAgZGF0YTogeyBkZXZpY2Vfa2V5OiBkZXZpY2VLZXkgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRpbWVycyhkZXZpY2VLZXksIHRpbWVycykge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS90aW1lcnMnLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHsgZGV2aWNlX2tleTogZGV2aWNlS2V5LCB0aW1lcnMgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGltZXIoZGV2aWNlS2V5LCB0aW1lcklkKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6ICcvYXBpL3RpbWVycy9kZWxldGUnLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHsgZGV2aWNlX2tleTogZGV2aWNlS2V5LCB0aW1lcl9pZDogdGltZXJJZCB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0RGV2aWNlU3RhdHVzKGRldmljZUtleSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS9yZXF1ZXN0X3N0YXR1cycsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogeyBkZXZpY2Vfa2V5OiBkZXZpY2VLZXkgfVxuICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */
/*!***********************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/devices/index.vue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_5566a047_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5566a047&mpType=page */ 19);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 21);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_5566a047_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_5566a047_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_5566a047_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/devices/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NTY2YTA0NyZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2RldmljZXMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/devices/index.vue?vue&type=template&id=5566a047&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5566a047_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5566a047&mpType=page */ 20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5566a047_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5566a047_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5566a047_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5566a047_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 20 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/devices/index.vue?vue&type=template&id=5566a047&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "devices-page"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "header"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "header-left"), attrs: { _i: 2 } },
            [
              _c("text", {
                staticClass: _vm._$s(3, "sc", "header-title"),
                attrs: { _i: 3 },
              }),
              _c(
                "text",
                {
                  staticClass: _vm._$s(4, "sc", "phone-number"),
                  attrs: { _i: 4 },
                },
                [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.phoneNumber)))]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "header-right"), attrs: { _i: 5 } },
            [
              _c("button", {
                staticClass: _vm._$s(6, "sc", "logout-btn"),
                attrs: { _i: 6 },
                on: { click: _vm.handleLogout },
              }),
              _vm._$s(7, "i", !_vm.editMode)
                ? _c("button", {
                    staticClass: _vm._$s(7, "sc", "edit-btn"),
                    attrs: { _i: 7 },
                    on: { click: _vm.enterEditMode },
                  })
                : _c("button", {
                    staticClass: _vm._$s(8, "sc", "cancel-btn"),
                    attrs: { _i: 8 },
                    on: { click: _vm.exitEditMode },
                  }),
              _c("button", {
                staticClass: _vm._$s(9, "sc", "add-btn"),
                attrs: { _i: 9 },
                on: { click: _vm.goToBind },
              }),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(10, "sc", "search-bar"), attrs: { _i: 10 } },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.searchKey,
                expression: "searchKey",
              },
            ],
            staticClass: _vm._$s(11, "sc", "search-input"),
            attrs: { _i: 11 },
            domProps: { value: _vm._$s(11, "v-model", _vm.searchKey) },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.searchKey = $event.target.value
              },
            },
          }),
        ]
      ),
      _c(
        "scroll-view",
        { staticClass: _vm._$s(12, "sc", "device-list"), attrs: { _i: 12 } },
        [
          _vm._$s(13, "i", _vm.devices.length === 0)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(13, "sc", "empty-state"),
                  attrs: { _i: 13 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(14, "sc", "empty-icon"),
                    attrs: { _i: 14 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(15, "sc", "empty-text"),
                    attrs: { _i: 15 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(16, "sc", "empty-hint"),
                    attrs: { _i: 16 },
                  }),
                ]
              )
            : _vm._e(),
          _vm._l(
            _vm._$s(17, "f", { forItems: _vm.filteredDevices }),
            function (device, $10, $20, $30) {
              return _c(
                "view",
                {
                  key: _vm._$s(17, "f", {
                    forIndex: $20,
                    key: device.device_key,
                  }),
                  staticClass: _vm._$s("17-" + $30, "sc", "device-card"),
                  attrs: { _i: "17-" + $30 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s("18-" + $30, "sc", "device-content"),
                      attrs: { _i: "18-" + $30 },
                      on: {
                        click: function ($event) {
                          return _vm.handleDeviceClick(device)
                        },
                      },
                    },
                    [
                      _vm._$s("19-" + $30, "i", _vm.editMode)
                        ? _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "19-" + $30,
                                "sc",
                                "checkbox"
                              ),
                              class: _vm._$s("19-" + $30, "c", {
                                checked: _vm.selectedDevices.includes(
                                  device.device_key
                                ),
                              }),
                              attrs: { _i: "19-" + $30 },
                            },
                            [
                              _vm._$s(
                                "20-" + $30,
                                "i",
                                _vm.selectedDevices.includes(device.device_key)
                              )
                                ? _c("text")
                                : _vm._e(),
                            ]
                          )
                        : _vm._e(),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            "21-" + $30,
                            "sc",
                            "device-icon"
                          ),
                          attrs: { _i: "21-" + $30 },
                        },
                        [
                          _c("text", [
                            _vm._v(
                              _vm._$s(
                                "22-" + $30,
                                "t0-0",
                                _vm._s(device.online ? "✅" : "🔴")
                              )
                            ),
                          ]),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            "23-" + $30,
                            "sc",
                            "device-info"
                          ),
                          attrs: { _i: "23-" + $30 },
                        },
                        [
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                "24-" + $30,
                                "sc",
                                "device-name"
                              ),
                              attrs: { _i: "24-" + $30 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "24-" + $30,
                                  "t0-0",
                                  _vm._s(_vm.getDeviceName(device))
                                )
                              ),
                            ]
                          ),
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                "25-" + $30,
                                "sc",
                                "device-key-label"
                              ),
                              attrs: { _i: "25-" + $30 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "25-" + $30,
                                  "t0-0",
                                  _vm._s(device.device_key)
                                )
                              ),
                            ]
                          ),
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                "26-" + $30,
                                "sc",
                                "device-status"
                              ),
                              attrs: { _i: "26-" + $30 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "26-" + $30,
                                  "t0-0",
                                  _vm._s(device.online ? "在线" : "离线")
                                )
                              ),
                            ]
                          ),
                        ]
                      ),
                      _vm._$s("27-" + $30, "i", _vm.editMode)
                        ? _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "27-" + $30,
                                "sc",
                                "device-rename"
                              ),
                              attrs: { _i: "27-" + $30 },
                              on: {
                                click: function ($event) {
                                  $event.stopPropagation()
                                  return _vm.startRename(device)
                                },
                              },
                            },
                            [_c("text")]
                          )
                        : _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "29-" + $30,
                                "sc",
                                "device-arrow"
                              ),
                              attrs: { _i: "29-" + $30 },
                            },
                            [_c("text")]
                          ),
                    ]
                  ),
                ]
              )
            }
          ),
        ],
        2
      ),
      _vm._$s(31, "i", _vm.editMode)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(31, "sc", "edit-bottom-bar"),
              attrs: { _i: 31 },
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(32, "sc", "selected-count"),
                  attrs: { _i: 32 },
                },
                [
                  _vm._v(
                    _vm._$s(32, "t0-0", _vm._s(_vm.selectedDevices.length))
                  ),
                ]
              ),
              _c(
                "button",
                {
                  staticClass: _vm._$s(33, "sc", "batch-delete-btn"),
                  attrs: {
                    disabled: _vm._$s(
                      33,
                      "a-disabled",
                      _vm.selectedDevices.length === 0
                    ),
                    _i: 33,
                  },
                  on: { click: _vm.batchDelete },
                },
                [
                  _vm._v(
                    _vm._$s(33, "t0-0", _vm._s(_vm.selectedDevices.length))
                  ),
                ]
              ),
            ]
          )
        : _c(
            "view",
            { staticClass: _vm._$s(34, "sc", "bottom-bar"), attrs: { _i: 34 } },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(35, "sc", "refresh-time"),
                  attrs: { _i: 35 },
                },
                [_vm._v(_vm._$s(35, "t0-0", _vm._s(_vm.lastUpdateTime)))]
              ),
              _c("button", {
                staticClass: _vm._$s(36, "sc", "refresh-btn"),
                attrs: { _i: 36 },
                on: { click: _vm.refreshDevices },
              }),
            ]
          ),
      _vm._$s(37, "i", _vm.renameVisible)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(37, "sc", "dialog-overlay"),
              attrs: { _i: 37 },
              on: { click: _vm.cancelRename },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(38, "sc", "dialog-box"),
                  attrs: { _i: 38 },
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                    },
                  },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(39, "sc", "dialog-title"),
                    attrs: { _i: 39 },
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.renameValue,
                        expression: "renameValue",
                      },
                    ],
                    staticClass: _vm._$s(40, "sc", "dialog-input"),
                    attrs: { _i: 40 },
                    domProps: {
                      value: _vm._$s(40, "v-model", _vm.renameValue),
                    },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.renameValue = $event.target.value
                      },
                    },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(41, "sc", "dialog-buttons"),
                      attrs: { _i: 41 },
                    },
                    [
                      _c("button", {
                        staticClass: _vm._$s(
                          42,
                          "sc",
                          "dialog-btn dialog-cancel"
                        ),
                        attrs: { _i: 42 },
                        on: { click: _vm.cancelRename },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(
                          43,
                          "sc",
                          "dialog-btn dialog-confirm"
                        ),
                        attrs: { _i: 43 },
                        on: { click: _vm.confirmRename },
                      }),
                    ]
                  ),
                ]
              ),
            ]
          )
        : _vm._e(),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 21 */
/*!***********************************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/devices/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 22);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdqQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/devices/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _storage = __webpack_require__(/*! @/utils/storage */ 15);\nvar _api = __webpack_require__(/*! @/utils/api */ 16);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nvar _default = {\n  data: function data() {\n    return {\n      devices: [],\n      searchKey: '',\n      lastUpdateTime: '',\n      timer: null,\n      phoneNumber: '',\n      editMode: false,\n      selectedDevices: [],\n      renameVisible: false,\n      renameValue: '',\n      renameDevice: null,\n      ws: null,\n      wsReconnectTimer: null\n    };\n  },\n  computed: {\n    filteredDevices: function filteredDevices() {\n      var _this = this;\n      if (!this.searchKey) return this.devices;\n      return this.devices.filter(function (d) {\n        var name = _this.getDeviceName(d);\n        return d.device_key.includes(_this.searchKey) || name.includes(_this.searchKey);\n      });\n    }\n  },\n  onLoad: function onLoad() {\n    var _this2 = this;\n    this.phoneNumber = (0, _storage.getPhoneNumber)() || '';\n    this.loadDevices();\n    this.timer = setInterval(function () {\n      _this2.loadDevices();\n    }, 30000); // 改为30秒轮询（WebSocket推送实时更新）\n\n    this.connectWS();\n  },\n  onUnload: function onUnload() {\n    if (this.timer) {\n      clearInterval(this.timer);\n    }\n    this.disconnectWS();\n  },\n  methods: {\n    getDeviceName: function getDeviceName(device) {\n      var key = 'device_name_' + device.device_key;\n      var name = uni.getStorageSync(key);\n      return name || device.device_key;\n    },\n    startRename: function startRename(device) {\n      this.renameDevice = device;\n      this.renameValue = this.getDeviceName(device) === device.device_key ? '' : this.getDeviceName(device);\n      this.renameVisible = true;\n    },\n    cancelRename: function cancelRename() {\n      this.renameVisible = false;\n      this.renameDevice = null;\n      this.renameValue = '';\n    },\n    confirmRename: function confirmRename() {\n      if (!this.renameDevice) return;\n      var key = 'device_name_' + this.renameDevice.device_key;\n      if (this.renameValue && this.renameValue.trim()) {\n        uni.setStorageSync(key, this.renameValue.trim());\n        uni.showToast({\n          title: '重命名成功',\n          icon: 'success'\n        });\n      } else {\n        uni.removeStorageSync(key);\n        uni.showToast({\n          title: '已恢复默认名称',\n          icon: 'none'\n        });\n      }\n      this.$forceUpdate();\n      this.cancelRename();\n    },\n    // ===== WebSocket 实时推送 =====\n    getWSBaseURL: function getWSBaseURL() {\n      try {\n        if (window && window.location) {\n          return \"ws://\".concat(window.location.host);\n        }\n      } catch (e) {}\n      return 'ws://192.168.2.11:7965';\n    },\n    connectWS: function connectWS() {\n      var _this3 = this;\n      if (this.ws) return;\n      var phone = (0, _storage.getPhoneNumber)();\n      if (!phone) return;\n      try {\n        var baseUrl = this.getWSBaseURL();\n        this.ws = uni.connectSocket({\n          url: \"\".concat(baseUrl, \"/ws/client\"),\n          success: function success() {}\n        });\n        this.ws.onOpen(function () {\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'auth',\n              phone: phone\n            })\n          });\n        });\n        this.ws.onMessage(function (res) {\n          try {\n            var msg = JSON.parse(res.data);\n            if (msg.type === 'device_status') {\n              // 设备状态变化，实时更新列表\n              var idx = _this3.devices.findIndex(function (d) {\n                return d.device_key === msg.device_key;\n              });\n              if (idx > -1) {\n                _this3.devices[idx].online = msg.online;\n                // 更新状态数据\n                if (msg.status) {\n                  _this3.devices[idx].status = msg.status;\n                }\n                _this3.lastUpdateTime = new Date().toLocaleTimeString();\n                _this3.$forceUpdate();\n              }\n            }\n          } catch (e) {}\n        });\n        this.ws.onClose(function () {\n          _this3.ws = null;\n          if (!_this3.wsReconnectTimer) {\n            _this3.wsReconnectTimer = setTimeout(function () {\n              _this3.wsReconnectTimer = null;\n              _this3.connectWS();\n            }, 5000);\n          }\n        });\n        this.ws.onError(function () {});\n      } catch (e) {\n        __f__(\"log\", 'WebSocket连接失败', e, \" at pages/devices/index.vue:227\");\n      }\n    },\n    disconnectWS: function disconnectWS() {\n      if (this.wsReconnectTimer) {\n        clearTimeout(this.wsReconnectTimer);\n        this.wsReconnectTimer = null;\n      }\n      if (this.ws) {\n        try {\n          this.ws.close();\n        } catch (e) {}\n        this.ws = null;\n      }\n    },\n    loadDevices: function loadDevices() {\n      var _this4 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var phone, res;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                phone = (0, _storage.getPhoneNumber)();\n                if (phone) {\n                  _context.next = 3;\n                  break;\n                }\n                return _context.abrupt(\"return\");\n              case 3:\n                _context.prev = 3;\n                _context.next = 6;\n                return (0, _api.getDevices)(phone);\n              case 6:\n                res = _context.sent;\n                if (res.success) {\n                  _this4.devices = res.devices || [];\n                  _this4.lastUpdateTime = new Date().toLocaleTimeString();\n                }\n                _context.next = 13;\n                break;\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](3);\n                __f__(\"error\", '加载设备失败', _context.t0, \" at pages/devices/index.vue:253\");\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[3, 10]]);\n      }))();\n    },\n    refreshDevices: function refreshDevices() {\n      uni.showLoading({\n        title: '刷新中...'\n      });\n      this.loadDevices().then(function () {\n        uni.hideLoading();\n      });\n    },\n    handleLogout: function handleLogout() {\n      uni.showModal({\n        title: '确认退出',\n        content: '确定要退出登录吗？',\n        success: function success(res) {\n          if (res.confirm) {\n            (0, _storage.clearPhoneNumber)();\n            uni.redirectTo({\n              url: '/pages/login/index'\n            });\n          }\n        }\n      });\n    },\n    goToBind: function goToBind() {\n      uni.navigateTo({\n        url: '/pages/bind/index'\n      });\n    },\n    handleDeviceClick: function handleDeviceClick(device) {\n      if (this.editMode) {\n        var index = this.selectedDevices.indexOf(device.device_key);\n        if (index > -1) {\n          this.selectedDevices.splice(index, 1);\n        } else {\n          this.selectedDevices.push(device.device_key);\n        }\n      } else {\n        // 根据型号跳转不同控制页\n        var page = '/pages/control/index';\n        if (device.model === 'fish_one') {\n          page = '/pages/control/fish-one';\n        } else if (device.model === 'fish_mini') {\n          page = '/pages/control/fish-mini';\n        }\n        uni.navigateTo({\n          url: \"\".concat(page, \"?device_key=\").concat(device.device_key)\n        });\n      }\n    },\n    enterEditMode: function enterEditMode() {\n      this.editMode = true;\n      this.selectedDevices = [];\n    },\n    exitEditMode: function exitEditMode() {\n      this.editMode = false;\n      this.selectedDevices = [];\n    },\n    batchDelete: function batchDelete() {\n      var _this5 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                if (!(_this5.selectedDevices.length === 0)) {\n                  _context3.next = 2;\n                  break;\n                }\n                return _context3.abrupt(\"return\");\n              case 2:\n                uni.showModal({\n                  title: '确认删除',\n                  content: \"\\u786E\\u5B9A\\u8981\\u5220\\u9664\\u9009\\u4E2D\\u7684 \".concat(_this5.selectedDevices.length, \" \\u4E2A\\u8BBE\\u5907\\u5417\\uFF1F\"),\n                  success: function () {\n                    var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {\n                      var phone, successCount, _iterator, _step, key, result;\n                      return _regenerator.default.wrap(function _callee2$(_context2) {\n                        while (1) {\n                          switch (_context2.prev = _context2.next) {\n                            case 0:\n                              if (res.confirm) {\n                                _context2.next = 2;\n                                break;\n                              }\n                              return _context2.abrupt(\"return\");\n                            case 2:\n                              phone = (0, _storage.getPhoneNumber)();\n                              successCount = 0;\n                              _iterator = _createForOfIteratorHelper(_this5.selectedDevices);\n                              _context2.prev = 5;\n                              _iterator.s();\n                            case 7:\n                              if ((_step = _iterator.n()).done) {\n                                _context2.next = 21;\n                                break;\n                              }\n                              key = _step.value;\n                              _context2.prev = 9;\n                              _context2.next = 12;\n                              return (0, _api.unbindDevice)(phone, key);\n                            case 12:\n                              result = _context2.sent;\n                              if (result.success) successCount++;\n                              uni.removeStorageSync('device_name_' + key);\n                              _context2.next = 19;\n                              break;\n                            case 17:\n                              _context2.prev = 17;\n                              _context2.t0 = _context2[\"catch\"](9);\n                            case 19:\n                              _context2.next = 7;\n                              break;\n                            case 21:\n                              _context2.next = 26;\n                              break;\n                            case 23:\n                              _context2.prev = 23;\n                              _context2.t1 = _context2[\"catch\"](5);\n                              _iterator.e(_context2.t1);\n                            case 26:\n                              _context2.prev = 26;\n                              _iterator.f();\n                              return _context2.finish(26);\n                            case 29:\n                              uni.showToast({\n                                title: \"\\u5220\\u9664\\u6210\\u529F \".concat(successCount, \" \\u4E2A\"),\n                                icon: 'success'\n                              });\n                              _this5.exitEditMode();\n                              _this5.loadDevices();\n                            case 32:\n                            case \"end\":\n                              return _context2.stop();\n                          }\n                        }\n                      }, _callee2, null, [[5, 23, 26, 29], [9, 17]]);\n                    }));\n                    function success(_x) {\n                      return _success.apply(this, arguments);\n                    }\n                    return success;\n                  }()\n                });\n              case 3:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV2aWNlcy9pbmRleC52dWUiXSwibmFtZXMiOlsiZGF0YSIsImRldmljZXMiLCJzZWFyY2hLZXkiLCJsYXN0VXBkYXRlVGltZSIsInRpbWVyIiwicGhvbmVOdW1iZXIiLCJlZGl0TW9kZSIsInNlbGVjdGVkRGV2aWNlcyIsInJlbmFtZVZpc2libGUiLCJyZW5hbWVWYWx1ZSIsInJlbmFtZURldmljZSIsIndzIiwid3NSZWNvbm5lY3RUaW1lciIsImNvbXB1dGVkIiwiZmlsdGVyZWREZXZpY2VzIiwiZmlsdGVyIiwiZCIsIm5hbWUiLCJnZXREZXZpY2VOYW1lIiwiZGV2aWNlX2tleSIsImluY2x1ZGVzIiwib25Mb2FkIiwiZ2V0UGhvbmVOdW1iZXIiLCJsb2FkRGV2aWNlcyIsInNldEludGVydmFsIiwiY29ubmVjdFdTIiwib25VbmxvYWQiLCJjbGVhckludGVydmFsIiwiZGlzY29ubmVjdFdTIiwibWV0aG9kcyIsImRldmljZSIsImtleSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwic3RhcnRSZW5hbWUiLCJjYW5jZWxSZW5hbWUiLCJjb25maXJtUmVuYW1lIiwidHJpbSIsInNldFN0b3JhZ2VTeW5jIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCIkZm9yY2VVcGRhdGUiLCJnZXRXU0Jhc2VVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3QiLCJlIiwicGhvbmUiLCJiYXNlVXJsIiwiY29ubmVjdFNvY2tldCIsInVybCIsInN1Y2Nlc3MiLCJvbk9wZW4iLCJzZW5kU29ja2V0TWVzc2FnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwib25NZXNzYWdlIiwicmVzIiwibXNnIiwicGFyc2UiLCJpZHgiLCJmaW5kSW5kZXgiLCJvbmxpbmUiLCJzdGF0dXMiLCJEYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwib25DbG9zZSIsInNldFRpbWVvdXQiLCJvbkVycm9yIiwiY2xlYXJUaW1lb3V0IiwiY2xvc2UiLCJnZXREZXZpY2VzIiwicmVmcmVzaERldmljZXMiLCJzaG93TG9hZGluZyIsInRoZW4iLCJoaWRlTG9hZGluZyIsImhhbmRsZUxvZ291dCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtIiwiY2xlYXJQaG9uZU51bWJlciIsInJlZGlyZWN0VG8iLCJnb1RvQmluZCIsIm5hdmlnYXRlVG8iLCJoYW5kbGVEZXZpY2VDbGljayIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJwYWdlIiwibW9kZWwiLCJlbnRlckVkaXRNb2RlIiwiZXhpdEVkaXRNb2RlIiwiYmF0Y2hEZWxldGUiLCJsZW5ndGgiLCJzdWNjZXNzQ291bnQiLCJ1bmJpbmREZXZpY2UiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQTBGQTtBQUNBO0FBQXNEO0FBQUE7QUFBQTtBQUFBLGVBRXZDO0VBQ2JBLElBQUksa0JBQUc7SUFDTCxPQUFPO01BQ0xDLE9BQU8sRUFBRSxFQUFFO01BQ1hDLFNBQVMsRUFBRSxFQUFFO01BQ2JDLGNBQWMsRUFBRSxFQUFFO01BQ2xCQyxLQUFLLEVBQUUsSUFBSTtNQUNYQyxXQUFXLEVBQUUsRUFBRTtNQUNmQyxRQUFRLEVBQUUsS0FBSztNQUNmQyxlQUFlLEVBQUUsRUFBRTtNQUNuQkMsYUFBYSxFQUFFLEtBQUs7TUFDcEJDLFdBQVcsRUFBRSxFQUFFO01BQ2ZDLFlBQVksRUFBRSxJQUFJO01BQ2xCQyxFQUFFLEVBQUUsSUFBSTtNQUNSQyxnQkFBZ0IsRUFBRTtJQUNwQixDQUFDO0VBQ0gsQ0FBQztFQUNEQyxRQUFRLEVBQUU7SUFDUkMsZUFBZSw2QkFBRztNQUFBO01BQ2hCLElBQUksQ0FBQyxJQUFJLENBQUNaLFNBQVMsRUFBRSxPQUFPLElBQUksQ0FBQ0QsT0FBTztNQUN4QyxPQUFPLElBQUksQ0FBQ0EsT0FBTyxDQUFDYyxNQUFNLENBQUMsVUFBQUMsQ0FBQyxFQUFJO1FBQzlCLElBQU1DLElBQUksR0FBRyxLQUFJLENBQUNDLGFBQWEs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QTs0QkFBQTs4QkFBQTs4QkFBQTs0QkFBQTs4QkFBQTs4QkFBQTs4QkFBQTs0QkFBQTs4QkFBQTs4QkFBQTs4QkFBQTs0QkFBQTs4QkFJL0NDLEdBQUcsQ0FBQ08sU0FBUyxDQUFDO2dDQUNaQyxLQUFLLHFDQUFVMEQsWUFBWSxZQUFJO2dDQUMvQnpELElBQUksRUFBRTs4QkFDUixDQUFDLENBQUM7OEJBRUYsTUFBSSxDQUFDc0QsWUFBWSxFQUFFOzhCQUNuQixNQUFJLENBQUN4RSxXQUFXLEVBQUU7NEJBQUE7NEJBQUE7OEJBQUE7MEJBQUE7d0JBQUE7c0JBQUE7b0JBQUEsQ0FDbkI7b0JBQUE7c0JBQUE7b0JBQUE7b0JBQUE7a0JBQUE7Z0JBQ0gsQ0FBQyxDQUFDO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0o7RUFDRjtBQUNGLENBQUM7QUFBQSwyQiIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5pbXBvcnQgeyBnZXRQaG9uZU51bWJlciwgY2xlYXJQaG9uZU51bWJlciB9IGZyb20gJ0AvdXRpbHMvc3RvcmFnZSdcbmltcG9ydCB7IGdldERldmljZXMsIHVuYmluZERldmljZSB9IGZyb20gJ0AvdXRpbHMvYXBpJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRldmljZXM6IFtdLFxuICAgICAgc2VhcmNoS2V5OiAnJyxcbiAgICAgIGxhc3RVcGRhdGVUaW1lOiAnJyxcbiAgICAgIHRpbWVyOiBudWxsLFxuICAgICAgcGhvbmVOdW1iZXI6ICcnLFxuICAgICAgZWRpdE1vZGU6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWREZXZpY2VzOiBbXSxcbiAgICAgIHJlbmFtZVZpc2libGU6IGZhbHNlLFxuICAgICAgcmVuYW1lVmFsdWU6ICcnLFxuICAgICAgcmVuYW1lRGV2aWNlOiBudWxsLFxuICAgICAgd3M6IG51bGwsXG4gICAgICB3c1JlY29ubmVjdFRpbWVyOiBudWxsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGZpbHRlcmVkRGV2aWNlcygpIHtcbiAgICAgIGlmICghdGhpcy5zZWFyY2hLZXkpIHJldHVybiB0aGlzLmRldmljZXNcbiAgICAgIHJldHVybiB0aGlzLmRldmljZXMuZmlsdGVyKGQgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXREZXZpY2VOYW1lKGQpXG4gICAgICAgIHJldHVybiBkLmRldmljZV9rZXkuaW5jbHVkZXModGhpcy5zZWFyY2hLZXkpIHx8IG5hbWUuaW5jbHVkZXModGhpcy5zZWFyY2hLZXkpXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMucGhvbmVOdW1iZXIgPSBnZXRQaG9uZU51bWJlcigpIHx8ICcnXG4gICAgdGhpcy5sb2FkRGV2aWNlcygpXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZERldmljZXMoKVxuICAgIH0sIDMwMDAwKSAgLy8g5pS55Li6MzDnp5Lova7or6LvvIhXZWJTb2NrZXTmjqjpgIHlrp7ml7bmm7TmlrDvvIlcbiAgICBcbiAgICB0aGlzLmNvbm5lY3RXUygpXG4gIH0sXG4gIG9uVW5sb2FkKCkge1xuICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgfVxuICAgIHRoaXMuZGlzY29ubmVjdFdTKClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldERldmljZU5hbWUoZGV2aWNlKSB7XG4gICAgICBjb25zdCBrZXkgPSAnZGV2aWNlX25hbWVfJyArIGRldmljZS5kZXZpY2Vfa2V5XG4gICAgICBjb25zdCBuYW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKGtleSlcbiAgICAgIHJldHVybiBuYW1lIHx8IGRldmljZS5kZXZpY2Vfa2V5XG4gICAgfSxcbiAgICBcbiAgICBzdGFydFJlbmFtZShkZXZpY2UpIHtcbiAgICAgIHRoaXMucmVuYW1lRGV2aWNlID0gZGV2aWNlXG4gICAgICB0aGlzLnJlbmFtZVZhbHVlID0gdGhpcy5nZXREZXZpY2VOYW1lKGRldmljZSkgPT09IGRldmljZS5kZXZpY2Vfa2V5ID8gJycgOiB0aGlzLmdldERldmljZU5hbWUoZGV2aWNlKVxuICAgICAgdGhpcy5yZW5hbWVWaXNpYmxlID0gdHJ1ZVxuICAgIH0sXG4gICAgXG4gICAgY2FuY2VsUmVuYW1lKCkge1xuICAgICAgdGhpcy5yZW5hbWVWaXNpYmxlID0gZmFsc2VcbiAgICAgIHRoaXMucmVuYW1lRGV2aWNlID0gbnVsbFxuICAgICAgdGhpcy5yZW5hbWVWYWx1ZSA9ICcnXG4gICAgfSxcbiAgICBcbiAgICBjb25maXJtUmVuYW1lKCkge1xuICAgICAgaWYgKCF0aGlzLnJlbmFtZURldmljZSkgcmV0dXJuXG4gICAgICBjb25zdCBrZXkgPSAnZGV2aWNlX25hbWVfJyArIHRoaXMucmVuYW1lRGV2aWNlLmRldmljZV9rZXlcbiAgICAgIGlmICh0aGlzLnJlbmFtZVZhbHVlICYmIHRoaXMucmVuYW1lVmFsdWUudHJpbSgpKSB7XG4gICAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhrZXksIHRoaXMucmVuYW1lVmFsdWUudHJpbSgpKVxuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfph43lkb3lkI3miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhrZXkpXG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+W3suaBouWkjem7mOiupOWQjeensCcsIGljb246ICdub25lJyB9KVxuICAgICAgfVxuICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKVxuICAgICAgdGhpcy5jYW5jZWxSZW5hbWUoKVxuICAgIH0sXG4gICAgXG4gICAgLy8gPT09PT0gV2ViU29ja2V0IOWunuaXtuaOqOmAgSA9PT09PVxuICAgIGdldFdTQmFzZVVSTCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGB3czovLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9YFxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgcmV0dXJuICd3czovLzE5Mi4xNjguMi4xMTo3OTY1J1xuICAgIH0sXG4gICAgXG4gICAgY29ubmVjdFdTKCkge1xuICAgICAgaWYgKHRoaXMud3MpIHJldHVyblxuICAgICAgY29uc3QgcGhvbmUgPSBnZXRQaG9uZU51bWJlcigpXG4gICAgICBpZiAoIXBob25lKSByZXR1cm5cbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IHRoaXMuZ2V0V1NCYXNlVVJMKClcbiAgICAgICAgdGhpcy53cyA9IHVuaS5jb25uZWN0U29ja2V0KHtcbiAgICAgICAgICB1cmw6IGAke2Jhc2VVcmx9L3dzL2NsaWVudGAsXG4gICAgICAgICAgc3VjY2VzczogKCkgPT4ge31cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMud3Mub25PcGVuKCgpID0+IHtcbiAgICAgICAgICB1bmkuc2VuZFNvY2tldE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnYXV0aCcsIHBob25lIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMud3Mub25NZXNzYWdlKChyZXMpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbXNnID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2RldmljZV9zdGF0dXMnKSB7XG4gICAgICAgICAgICAgIC8vIOiuvuWkh+eKtuaAgeWPmOWMlu+8jOWunuaXtuabtOaWsOWIl+ihqFxuICAgICAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLmRldmljZXMuZmluZEluZGV4KGQgPT4gZC5kZXZpY2Vfa2V5ID09PSBtc2cuZGV2aWNlX2tleSlcbiAgICAgICAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VzW2lkeF0ub25saW5lID0gbXNnLm9ubGluZVxuICAgICAgICAgICAgICAgIC8vIOabtOaWsOeKtuaAgeaVsOaNrlxuICAgICAgICAgICAgICAgIGlmIChtc2cuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmRldmljZXNbaWR4XS5zdGF0dXMgPSBtc2cuc3RhdHVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFVwZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpXG4gICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMud3Mub25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy53cyA9IG51bGxcbiAgICAgICAgICBpZiAoIXRoaXMud3NSZWNvbm5lY3RUaW1lcikge1xuICAgICAgICAgICAgdGhpcy53c1JlY29ubmVjdFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMud3NSZWNvbm5lY3RUaW1lciA9IG51bGxcbiAgICAgICAgICAgICAgdGhpcy5jb25uZWN0V1MoKVxuICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB0aGlzLndzLm9uRXJyb3IoKCkgPT4ge30pXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXTov57mjqXlpLHotKUnLCBlKVxuICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgZGlzY29ubmVjdFdTKCkge1xuICAgICAgaWYgKHRoaXMud3NSZWNvbm5lY3RUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy53c1JlY29ubmVjdFRpbWVyKVxuICAgICAgICB0aGlzLndzUmVjb25uZWN0VGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgICBpZiAodGhpcy53cykge1xuICAgICAgICB0cnkgeyB0aGlzLndzLmNsb3NlKCkgfSBjYXRjaCAoZSkge31cbiAgICAgICAgdGhpcy53cyA9IG51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIGFzeW5jIGxvYWREZXZpY2VzKCkge1xuICAgICAgY29uc3QgcGhvbmUgPSBnZXRQaG9uZU51bWJlcigpXG4gICAgICBpZiAoIXBob25lKSByZXR1cm5cbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RGV2aWNlcyhwaG9uZSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5kZXZpY2VzID0gcmVzLmRldmljZXMgfHwgW11cbiAgICAgICAgICB0aGlzLmxhc3RVcGRhdGVUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfliqDovb3orr7lpIflpLHotKUnLCBlcnJvcilcbiAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIHJlZnJlc2hEZXZpY2VzKCkge1xuICAgICAgdW5pLnNob3dMb2FkaW5nKHsgdGl0bGU6ICfliLfmlrDkuK0uLi4nIH0pXG4gICAgICB0aGlzLmxvYWREZXZpY2VzKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHVuaS5oaWRlTG9hZGluZygpXG4gICAgICB9KVxuICAgIH0sXG4gICAgXG4gICAgaGFuZGxlTG9nb3V0KCkge1xuICAgICAgdW5pLnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn56Gu6K6k6YCA5Ye6JyxcbiAgICAgICAgY29udGVudDogJ+ehruWumuimgemAgOWHuueZu+W9leWQl++8nycsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIGNsZWFyUGhvbmVOdW1iZXIoKVxuICAgICAgICAgICAgdW5pLnJlZGlyZWN0VG8oeyB1cmw6ICcvcGFnZXMvbG9naW4vaW5kZXgnIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgXG4gICAgZ29Ub0JpbmQoKSB7XG4gICAgICB1bmkubmF2aWdhdGVUbyh7IHVybDogJy9wYWdlcy9iaW5kL2luZGV4JyB9KVxuICAgIH0sXG4gICAgXG4gICAgaGFuZGxlRGV2aWNlQ2xpY2soZGV2aWNlKSB7XG4gICAgICBpZiAodGhpcy5lZGl0TW9kZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWREZXZpY2VzLmluZGV4T2YoZGV2aWNlLmRldmljZV9rZXkpXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZERldmljZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWREZXZpY2VzLnB1c2goZGV2aWNlLmRldmljZV9rZXkpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOagueaNruWei+WPt+i3s+i9rOS4jeWQjOaOp+WItumhtVxuICAgICAgICBsZXQgcGFnZSA9ICcvcGFnZXMvY29udHJvbC9pbmRleCdcbiAgICAgICAgaWYgKGRldmljZS5tb2RlbCA9PT0gJ2Zpc2hfb25lJykge1xuICAgICAgICAgIHBhZ2UgPSAnL3BhZ2VzL2NvbnRyb2wvZmlzaC1vbmUnXG4gICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlLm1vZGVsID09PSAnZmlzaF9taW5pJykge1xuICAgICAgICAgIHBhZ2UgPSAnL3BhZ2VzL2NvbnRyb2wvZmlzaC1taW5pJ1xuICAgICAgICB9XG4gICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHsgXG4gICAgICAgICAgdXJsOiBgJHtwYWdlfT9kZXZpY2Vfa2V5PSR7ZGV2aWNlLmRldmljZV9rZXl9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgZW50ZXJFZGl0TW9kZSgpIHtcbiAgICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlXG4gICAgICB0aGlzLnNlbGVjdGVkRGV2aWNlcyA9IFtdXG4gICAgfSxcbiAgICBcbiAgICBleGl0RWRpdE1vZGUoKSB7XG4gICAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2VcbiAgICAgIHRoaXMuc2VsZWN0ZWREZXZpY2VzID0gW11cbiAgICB9LFxuICAgIFxuICAgIGFzeW5jIGJhdGNoRGVsZXRlKCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREZXZpY2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgICBcbiAgICAgIHVuaS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+ehruiupOWIoOmZpCcsXG4gICAgICAgIGNvbnRlbnQ6IGDnoa7lrpropoHliKDpmaTpgInkuK3nmoQgJHt0aGlzLnNlbGVjdGVkRGV2aWNlcy5sZW5ndGh9IOS4quiuvuWkh+WQl++8n2AsXG4gICAgICAgIHN1Y2Nlc3M6IGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5jb25maXJtKSByZXR1cm5cbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBwaG9uZSA9IGdldFBob25lTnVtYmVyKClcbiAgICAgICAgICBsZXQgc3VjY2Vzc0NvdW50ID0gMFxuICAgICAgICAgIFxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuc2VsZWN0ZWREZXZpY2VzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1bmJpbmREZXZpY2UocGhvbmUsIGtleSlcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSBzdWNjZXNzQ291bnQrK1xuICAgICAgICAgICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ2RldmljZV9uYW1lXycgKyBrZXkpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgXG4gICAgICAgICAgICB0aXRsZTogYOWIoOmZpOaIkOWKnyAke3N1Y2Nlc3NDb3VudH0g5LiqYCwgXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycgXG4gICAgICAgICAgfSlcbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmV4aXRFZGl0TW9kZSgpXG4gICAgICAgICAgdGhpcy5sb2FkRGV2aWNlcygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 24 */
/*!***********************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/index.vue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_6d97f8c7_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6d97f8c7&mpType=page */ 25);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 27);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_6d97f8c7_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_6d97f8c7_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_6d97f8c7_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/control/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZDk3ZjhjNyZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NvbnRyb2wvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/index.vue?vue&type=template&id=6d97f8c7&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d97f8c7_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6d97f8c7&mpType=page */ 26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d97f8c7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d97f8c7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d97f8c7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d97f8c7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 26 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/index.vue?vue&type=template&id=6d97f8c7&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "control-page"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "status-header"),
          class: _vm._$s(1, "c", { offline: !_vm.status.online }),
          attrs: { _i: 1 },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "status-indicator"),
              attrs: { _i: 2 },
            },
            [
              _c("view", {
                staticClass: _vm._$s(3, "sc", "indicator-dot"),
                attrs: { _i: 3 },
              }),
              _c("text", [
                _vm._v(
                  _vm._$s(
                    4,
                    "t0-0",
                    _vm._s(_vm.status.online ? "在线" : "离线")
                  )
                ),
              ]),
            ]
          ),
          _c(
            "text",
            { staticClass: _vm._$s(5, "sc", "device-key"), attrs: { _i: 5 } },
            [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.deviceKey)))]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(6, "sc", "control-section"), attrs: { _i: 6 } },
        [
          _c("view", {
            staticClass: _vm._$s(7, "sc", "section-title"),
            attrs: { _i: 7 },
          }),
          _c(
            "view",
            { staticClass: _vm._$s(8, "sc", "control-card"), attrs: { _i: 8 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(9, "sc", "control-header"),
                  attrs: { _i: 9 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(10, "sc", "control-name"),
                      attrs: { _i: 10 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("pump1", "水泵1")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          10,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("pump1", "水泵1"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(11, "sc", "control-value"),
                      attrs: { _i: 11 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          11,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.pwm1Level])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(12, "sc", "pump-controls"),
                  attrs: { _i: 12 },
                },
                _vm._l(
                  _vm._$s(13, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $20, $30) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(13, "f", { forIndex: $20, key: index }),
                        staticClass: _vm._$s("13-" + $30, "sc", "level-btn"),
                        class: _vm._$s("13-" + $30, "c", {
                          active: _vm.status.pwm1Level === index,
                        }),
                        attrs: { _i: "13-" + $30 },
                        on: {
                          click: function ($event) {
                            return _vm.setPump(1, index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("13-" + $30, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(14, "sc", "control-card"),
              attrs: { _i: 14 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(15, "sc", "control-header"),
                  attrs: { _i: 15 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(16, "sc", "control-name"),
                      attrs: { _i: 16 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("pump2", "水泵2")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          16,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("pump2", "水泵2"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(17, "sc", "control-value"),
                      attrs: { _i: 17 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          17,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.pwm2Level])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(18, "sc", "pump-controls"),
                  attrs: { _i: 18 },
                },
                _vm._l(
                  _vm._$s(19, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $21, $31) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(19, "f", { forIndex: $21, key: index }),
                        staticClass: _vm._$s("19-" + $31, "sc", "level-btn"),
                        class: _vm._$s("19-" + $31, "c", {
                          active: _vm.status.pwm2Level === index,
                        }),
                        attrs: { _i: "19-" + $31 },
                        on: {
                          click: function ($event) {
                            return _vm.setPump(2, index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("19-" + $31, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(20, "sc", "control-section"),
          attrs: { _i: 20 },
        },
        [
          _c("view", {
            staticClass: _vm._$s(21, "sc", "section-title"),
            attrs: { _i: 21 },
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(22, "sc", "control-card"),
              attrs: { _i: 22 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(23, "sc", "control-header"),
                  attrs: { _i: 23 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(24, "sc", "control-name"),
                      attrs: { _i: 24 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("light", "灯条")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          24,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("light", "灯条"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(25, "sc", "control-value"),
                      attrs: { _i: 25 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          25,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.pwm3Level])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(26, "sc", "pump-controls"),
                  attrs: { _i: 26 },
                },
                _vm._l(
                  _vm._$s(27, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $22, $32) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(27, "f", { forIndex: $22, key: index }),
                        staticClass: _vm._$s("27-" + $32, "sc", "level-btn"),
                        class: _vm._$s("27-" + $32, "c", {
                          active: _vm.status.pwm3Level === index,
                        }),
                        attrs: { _i: "27-" + $32 },
                        on: {
                          click: function ($event) {
                            return _vm.setLight(index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("27-" + $32, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(28, "sc", "control-section"),
          attrs: { _i: 28 },
        },
        [
          _c("view", {
            staticClass: _vm._$s(29, "sc", "section-title"),
            attrs: { _i: 29 },
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(30, "sc", "control-card"),
              attrs: { _i: 30 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(31, "sc", "control-header"),
                  attrs: { _i: 31 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(32, "sc", "control-name"),
                      attrs: { _i: 32 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("airPump", "气泵")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          32,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("airPump", "气泵"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(33, "sc", "control-value"),
                      attrs: { _i: 33 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          33,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.airPumpLevel || 0])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(34, "sc", "pump-controls"),
                  attrs: { _i: 34 },
                },
                _vm._l(
                  _vm._$s(35, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $23, $33) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(35, "f", {
                          forIndex: $23,
                          key: "air" + index,
                        }),
                        staticClass: _vm._$s("35-" + $33, "sc", "level-btn"),
                        class: _vm._$s("35-" + $33, "c", {
                          active: (_vm.status.airPumpLevel || 0) === index,
                        }),
                        attrs: { _i: "35-" + $33 },
                        on: {
                          click: function ($event) {
                            return _vm.setAirPump(index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("35-" + $33, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(36, "sc", "control-card"),
              attrs: { _i: 36 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(37, "sc", "control-header"),
                  attrs: { _i: 37 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(38, "sc", "control-name"),
                      attrs: { _i: 38 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("fan", "风扇")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          38,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("fan", "风扇"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(39, "sc", "control-value"),
                      attrs: { _i: 39 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          39,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.fanLevel || 0])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(40, "sc", "pump-controls"),
                  attrs: { _i: 40 },
                },
                _vm._l(
                  _vm._$s(41, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $24, $34) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(41, "f", {
                          forIndex: $24,
                          key: "fan" + index,
                        }),
                        staticClass: _vm._$s("41-" + $34, "sc", "level-btn"),
                        class: _vm._$s("41-" + $34, "c", {
                          active: (_vm.status.fanLevel || 0) === index,
                        }),
                        attrs: { _i: "41-" + $34 },
                        on: {
                          click: function ($event) {
                            return _vm.setFan(index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("41-" + $34, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(42, "sc", "control-section"),
          attrs: { _i: 42 },
        },
        [
          _c("view", {
            staticClass: _vm._$s(43, "sc", "section-title"),
            attrs: { _i: 43 },
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(44, "sc", "switch-card"),
              attrs: { _i: 44 },
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(45, "sc", "switch-label"),
                  attrs: { _i: 45 },
                  on: {
                    click: function ($event) {
                      return _vm.startRename("uv", "UV灯")
                    },
                  },
                },
                [
                  _vm._v(
                    _vm._$s(45, "t0-0", _vm._s(_vm.getCtrlName("uv", "UV灯")))
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(46, "sc", "custom-switch"),
                  class: _vm._$s(46, "c", _vm.status.uvLightOn ? "on" : "off"),
                  attrs: { _i: 46 },
                  on: {
                    click: function ($event) {
                      return _vm.setUV(!_vm.status.uvLightOn)
                    },
                  },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(47, "sc", "custom-switch-knob"),
                    attrs: { _i: 47 },
                  }),
                ]
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(48, "sc", "switch-card"),
              attrs: { _i: 48 },
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(49, "sc", "switch-label"),
                  attrs: { _i: 49 },
                  on: {
                    click: function ($event) {
                      return _vm.startRename("relay2", "继电器2")
                    },
                  },
                },
                [
                  _vm._v(
                    _vm._$s(
                      49,
                      "t0-0",
                      _vm._s(_vm.getCtrlName("relay2", "继电器2"))
                    )
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(50, "sc", "custom-switch"),
                  class: _vm._$s(
                    50,
                    "c",
                    _vm.status.relay2State ? "on" : "off"
                  ),
                  attrs: { _i: 50 },
                  on: {
                    click: function ($event) {
                      return _vm.setRelay2(!_vm.status.relay2State)
                    },
                  },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(51, "sc", "custom-switch-knob"),
                    attrs: { _i: 51 },
                  }),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(52, "sc", "control-section"),
          attrs: { _i: 52 },
        },
        [
          _c("view", {
            staticClass: _vm._$s(53, "sc", "section-title"),
            attrs: { _i: 53 },
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(54, "sc", "control-card"),
              attrs: { _i: 54 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(55, "sc", "control-header"),
                  attrs: { _i: 55 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(56, "sc", "control-name"),
                      attrs: { _i: 56 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("servo", "舵机")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          56,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("servo", "舵机"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(57, "sc", "control-value"),
                      attrs: { _i: 57 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          57,
                          "t0-0",
                          _vm._s(_vm.status.servoMoving ? "运行中" : "空闲")
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "button",
                {
                  staticClass: _vm._$s(58, "sc", "action-btn"),
                  class: _vm._$s(58, "c", { busy: _vm.status.servoMoving }),
                  attrs: {
                    disabled: _vm._$s(58, "a-disabled", _vm.status.servoMoving),
                    _i: 58,
                  },
                  on: { click: _vm.triggerServo },
                },
                [
                  _vm._v(
                    _vm._$s(
                      58,
                      "t0-0",
                      _vm._s(_vm.status.servoMoving ? "运行中..." : "启动舵机")
                    )
                  ),
                ]
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(59, "sc", "control-card"),
              attrs: { _i: 59 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(60, "sc", "control-header"),
                  attrs: { _i: 60 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(61, "sc", "control-name"),
                      attrs: { _i: 61 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("power", "系统电源")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          61,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("power", "系统电源"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(62, "sc", "control-value"),
                      attrs: { _i: 62 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          62,
                          "t0-0",
                          _vm._s(_vm.status.systemPowered ? "开机" : "关机")
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "button",
                {
                  staticClass: _vm._$s(63, "sc", "power-btn"),
                  class: _vm._$s(63, "c", { on: _vm.status.systemPowered }),
                  attrs: { _i: 63 },
                  on: { click: _vm.togglePower },
                },
                [
                  _vm._v(
                    _vm._$s(
                      63,
                      "t0-0",
                      _vm._s(_vm.status.systemPowered ? "关机" : "开机")
                    )
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(64, "sc", "sensor-section"), attrs: { _i: 64 } },
        [
          _c("view", {
            staticClass: _vm._$s(65, "sc", "section-title"),
            attrs: { _i: 65 },
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(66, "sc", "sensor-grid"),
              attrs: { _i: 66 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(67, "sc", "sensor-item"),
                  attrs: { _i: 67 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(68, "sc", "sensor-icon"),
                    attrs: { _i: 68 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(69, "sc", "sensor-label"),
                    attrs: { _i: 69 },
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(70, "sc", "sensor-value"),
                      attrs: { _i: 70 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          70,
                          "t0-0",
                          _vm._s(_vm.status.waterTemperature.toFixed(1))
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(71, "sc", "sensor-item"),
                  attrs: { _i: 71 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(72, "sc", "sensor-icon"),
                    attrs: { _i: 72 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(73, "sc", "sensor-label"),
                    attrs: { _i: 73 },
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(74, "sc", "sensor-value"),
                      attrs: { _i: 74 },
                    },
                    [_vm._v(_vm._$s(74, "t0-0", _vm._s(_vm.status.tdsValue)))]
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(75, "sc", "bottom-bar"), attrs: { _i: 75 } },
        [
          _c(
            "text",
            {
              staticClass: _vm._$s(76, "sc", "refresh-time"),
              attrs: { _i: 76 },
            },
            [_vm._v(_vm._$s(76, "t0-0", _vm._s(_vm.lastUpdateTime)))]
          ),
          _c("button", {
            staticClass: _vm._$s(77, "sc", "refresh-btn"),
            attrs: { _i: 77 },
            on: { click: _vm.refreshStatus },
          }),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(78, "sc", "control-section"),
          attrs: { _i: 78 },
        },
        [
          _c("view", {
            staticClass: _vm._$s(79, "sc", "section-title"),
            attrs: { _i: 79 },
          }),
          _vm._$s(80, "i", _vm.timers.length === 0)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(80, "sc", "empty-tip"),
                  attrs: { _i: 80 },
                },
                [_c("text")]
              )
            : _vm._e(),
          _vm._l(
            _vm._$s(82, "f", { forItems: _vm.timers }),
            function (timer, index, $25, $35) {
              return _c(
                "view",
                {
                  key: _vm._$s(82, "f", { forIndex: $25, key: timer.id }),
                  staticClass: _vm._$s("82-" + $35, "sc", "timer-card"),
                  attrs: { _i: "82-" + $35 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(
                        "83-" + $35,
                        "sc",
                        "timer-card-left"
                      ),
                      attrs: { _i: "83-" + $35 },
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            "84-" + $35,
                            "sc",
                            "timer-card-top"
                          ),
                          attrs: { _i: "84-" + $35 },
                        },
                        [
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                "85-" + $35,
                                "sc",
                                "timer-name"
                              ),
                              attrs: { _i: "85-" + $35 },
                            },
                            [
                              _vm._v(
                                _vm._$s("85-" + $35, "t0-0", _vm._s(timer.name))
                              ),
                            ]
                          ),
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                "86-" + $35,
                                "sc",
                                "timer-time"
                              ),
                              attrs: { _i: "86-" + $35 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "86-" + $35,
                                  "t0-0",
                                  _vm._s(("0" + timer.hour).slice(-2))
                                ) +
                                  _vm._$s(
                                    "86-" + $35,
                                    "t0-1",
                                    _vm._s(("0" + timer.minute).slice(-2))
                                  )
                              ),
                            ]
                          ),
                        ]
                      ),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s("87-" + $35, "sc", "timer-desc"),
                          attrs: { _i: "87-" + $35 },
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              "87-" + $35,
                              "t0-0",
                              _vm._s(_vm.getTaskTypeLabel(timer))
                            )
                          ),
                        ]
                      ),
                      _vm._$s(
                        "88-" + $35,
                        "i",
                        timer.duration > 0 && timer.cmd !== "trigger_servo"
                      )
                        ? _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                "88-" + $35,
                                "sc",
                                "timer-duration"
                              ),
                              attrs: { _i: "88-" + $35 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "88-" + $35,
                                  "t0-0",
                                  _vm._s(timer.duration / 60)
                                )
                              ),
                            ]
                          )
                        : _vm._e(),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(
                        "89-" + $35,
                        "sc",
                        "timer-card-right"
                      ),
                      attrs: { _i: "89-" + $35 },
                    },
                    [
                      _c("switch", {
                        attrs: {
                          checked: _vm._$s(
                            "90-" + $35,
                            "a-checked",
                            timer.enabled
                          ),
                          _i: "90-" + $35,
                        },
                        on: {
                          change: function ($event) {
                            return _vm.toggleTimer(timer)
                          },
                        },
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            "91-" + $35,
                            "sc",
                            "timer-actions"
                          ),
                          attrs: { _i: "91-" + $35 },
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(
                              "92-" + $35,
                              "sc",
                              "timer-edit"
                            ),
                            attrs: { _i: "92-" + $35 },
                            on: {
                              click: function ($event) {
                                return _vm.openTimerDialog(timer)
                              },
                            },
                          }),
                          _c("text", {
                            staticClass: _vm._$s(
                              "93-" + $35,
                              "sc",
                              "timer-delete"
                            ),
                            attrs: { _i: "93-" + $35 },
                            on: {
                              click: function ($event) {
                                return _vm.handleDeleteTimer(timer)
                              },
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ]
              )
            }
          ),
          _c("button", {
            staticClass: _vm._$s(94, "sc", "add-timer-btn"),
            attrs: { _i: 94 },
            on: {
              click: function ($event) {
                return _vm.openTimerDialog(null)
              },
            },
          }),
        ],
        2
      ),
      _vm._$s(95, "i", _vm.timerDialogVisible)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(95, "sc", "dialog-overlay"),
              attrs: { _i: 95 },
              on: { click: _vm.closeTimerDialog },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(96, "sc", "dialog-box timer-dialog"),
                  attrs: { _i: 96 },
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                    },
                  },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(97, "sc", "dialog-title"),
                      attrs: { _i: 97 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          97,
                          "t0-0",
                          _vm._s(_vm.editingTimer ? "编辑任务" : "添加任务")
                        )
                      ),
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(98, "sc", "timer-form-label"),
                    attrs: { _i: 98 },
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.timerForm.name,
                        expression: "timerForm.name",
                      },
                    ],
                    staticClass: _vm._$s(99, "sc", "dialog-input"),
                    attrs: { _i: 99 },
                    domProps: {
                      value: _vm._$s(99, "v-model", _vm.timerForm.name),
                    },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.timerForm, "name", $event.target.value)
                      },
                    },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(100, "sc", "timer-form-label"),
                    attrs: { _i: 100 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(101, "sc", "timer-picker-row"),
                      attrs: { _i: 101 },
                    },
                    [
                      _c(
                        "picker",
                        {
                          attrs: {
                            range: _vm._$s(102, "a-range", [
                              _vm.hours,
                              _vm.minutes,
                            ]),
                            _i: 102,
                          },
                          on: { change: _vm.onTimeChange },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(103, "sc", "timer-picker"),
                              attrs: { _i: 103 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  103,
                                  "t0-0",
                                  _vm._s(("0" + _vm.timerForm.hour).slice(-2))
                                ) +
                                  _vm._$s(
                                    103,
                                    "t0-1",
                                    _vm._s(
                                      ("0" + _vm.timerForm.minute).slice(-2)
                                    )
                                  )
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(104, "sc", "timer-form-label"),
                    attrs: { _i: 104 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(105, "sc", "timer-picker-row"),
                      attrs: { _i: 105 },
                    },
                    [
                      _c(
                        "picker",
                        {
                          attrs: {
                            range: _vm._$s(106, "a-range", _vm.taskTypeLabels),
                            _i: 106,
                          },
                          on: { change: _vm.onTaskTypeChange },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(107, "sc", "timer-picker"),
                              attrs: { _i: 107 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  107,
                                  "t0-0",
                                  _vm._s(_vm.taskTypeLabels[_vm.timerForm.type])
                                )
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(108, "sc", "timer-form-label"),
                    attrs: { _i: 108 },
                  }),
                  _vm._$s(
                    109,
                    "i",
                    _vm.taskTypes[_vm.timerForm.type].cmd === "trigger_servo"
                  )
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(109, "sc", "timer-picker-row"),
                          attrs: { _i: 109 },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(110, "sc", "timer-picker"),
                              attrs: { _i: 110 },
                            },
                            [_c("text")]
                          ),
                        ]
                      )
                    : _c(
                        "view",
                        {
                          staticClass: _vm._$s(112, "sc", "timer-picker-row"),
                          attrs: { _i: 112 },
                        },
                        [
                          _c(
                            "picker",
                            {
                              attrs: {
                                range: _vm._$s(
                                  113,
                                  "a-range",
                                  _vm.durationLabels
                                ),
                                _i: 113,
                              },
                              on: { change: _vm.onDurationChange },
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    114,
                                    "sc",
                                    "timer-picker"
                                  ),
                                  attrs: { _i: 114 },
                                },
                                [
                                  _vm._v(
                                    _vm._$s(
                                      114,
                                      "t0-0",
                                      _vm._s(_vm.timerForm.durationLabel)
                                    )
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(115, "sc", "dialog-buttons"),
                      attrs: { _i: 115 },
                    },
                    [
                      _c("button", {
                        staticClass: _vm._$s(
                          116,
                          "sc",
                          "dialog-btn dialog-cancel"
                        ),
                        attrs: { _i: 116 },
                        on: { click: _vm.closeTimerDialog },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(
                          117,
                          "sc",
                          "dialog-btn dialog-confirm"
                        ),
                        attrs: { _i: 117 },
                        on: { click: _vm.confirmTimer },
                      }),
                    ]
                  ),
                ]
              ),
            ]
          )
        : _vm._e(),
      _vm._$s(118, "i", _vm.renameVisible)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(118, "sc", "dialog-overlay"),
              attrs: { _i: 118 },
              on: { click: _vm.cancelRename },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(119, "sc", "dialog-box"),
                  attrs: { _i: 119 },
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                    },
                  },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(120, "sc", "dialog-title"),
                    attrs: { _i: 120 },
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.renameValue,
                        expression: "renameValue",
                      },
                    ],
                    staticClass: _vm._$s(121, "sc", "dialog-input"),
                    attrs: { _i: 121 },
                    domProps: {
                      value: _vm._$s(121, "v-model", _vm.renameValue),
                    },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.renameValue = $event.target.value
                      },
                    },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(122, "sc", "dialog-buttons"),
                      attrs: { _i: 122 },
                    },
                    [
                      _c("button", {
                        staticClass: _vm._$s(
                          123,
                          "sc",
                          "dialog-btn dialog-cancel"
                        ),
                        attrs: { _i: 123 },
                        on: { click: _vm.cancelRename },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(
                          124,
                          "sc",
                          "dialog-btn dialog-confirm"
                        ),
                        attrs: { _i: 124 },
                        on: { click: _vm.confirmRename },
                      }),
                    ]
                  ),
                ]
              ),
            ]
          )
        : _vm._e(),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 27 */
/*!***********************************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 28);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdqQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _api = __webpack_require__(/*! @/utils/api */ 16);\nvar _storage = __webpack_require__(/*! @/utils/storage */ 15);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = {\n  data: function data() {\n    return {\n      deviceKey: '',\n      status: {\n        online: false,\n        pwm1Level: 0,\n        pwm2Level: 0,\n        pwm3Level: 0,\n        airPumpLevel: 0,\n        fanLevel: 0,\n        uvLightOn: false,\n        relay1State: false,\n        relay2State: false,\n        servoMoving: false,\n        adcWQVoltage: 0,\n        adcTempVoltage: 0,\n        systemPowered: true\n      },\n      pumpLevels: ['关', '一档', '二档', '三档'],\n      lastUpdateTime: '',\n      timer: null,\n      renameVisible: false,\n      renameValue: '',\n      renameTarget: '',\n      renameDefault: '',\n      ws: null,\n      wsConnected: false,\n      wsReconnectTimer: null,\n      servoTimer: null,\n      servoStartTime: 0,\n      lastClickTime: 0,\n      // 定时任务\n      timers: [],\n      timerDialogVisible: false,\n      editingTimer: null,\n      timerForm: {\n        id: '',\n        name: '',\n        hour: 8,\n        minute: 0,\n        type: 0,\n        cmd: 'trigger_servo',\n        params: {},\n        duration: 0,\n        durationLabel: '不停止'\n      },\n      hours: Array.from({\n        length: 24\n      }, function (_, i) {\n        return ('0' + i).slice(-2);\n      }),\n      minutes: Array.from({\n        length: 60\n      }, function (_, i) {\n        return ('0' + i).slice(-2);\n      }),\n      taskTypes: [{\n        label: '喂鱼（舵机）',\n        cmd: 'trigger_servo',\n        params: {}\n      }, {\n        label: '换水1档（水泵1 level=1）',\n        cmd: 'set_pump',\n        params: {\n          pump: 1,\n          level: 1\n        }\n      }, {\n        label: '换水2档（水泵1 level=2）',\n        cmd: 'set_pump',\n        params: {\n          pump: 1,\n          level: 2\n        }\n      }, {\n        label: '换水3档（水泵1 level=3）',\n        cmd: 'set_pump',\n        params: {\n          pump: 1,\n          level: 3\n        }\n      }, {\n        label: '加气1档（气泵 level=1）',\n        cmd: 'set_air_pump',\n        params: {\n          level: 1\n        }\n      }, {\n        label: '加气2档（气泵 level=2）',\n        cmd: 'set_air_pump',\n        params: {\n          level: 2\n        }\n      }, {\n        label: '加气3档（气泵 level=3）',\n        cmd: 'set_air_pump',\n        params: {\n          level: 3\n        }\n      }, {\n        label: '开灯1档（灯条 level=1）',\n        cmd: 'set_light',\n        params: {\n          level: 1\n        }\n      }, {\n        label: '开灯2档（level=2）',\n        cmd: 'set_light',\n        params: {\n          level: 2\n        }\n      }, {\n        label: '开灯3档（level=3）',\n        cmd: 'set_light',\n        params: {\n          level: 3\n        }\n      }, {\n        label: '风扇1档',\n        cmd: 'set_fan',\n        params: {\n          level: 1\n        }\n      }, {\n        label: '风扇2档',\n        cmd: 'set_fan',\n        params: {\n          level: 2\n        }\n      }, {\n        label: '风扇3档',\n        cmd: 'set_fan',\n        params: {\n          level: 3\n        }\n      }],\n      durationOptions: [{\n        label: '不停止',\n        value: 0\n      }, {\n        label: '1分钟',\n        value: 1\n      }, {\n        label: '5分钟',\n        value: 5\n      }, {\n        label: '10分钟',\n        value: 10\n      }, {\n        label: '30分钟',\n        value: 30\n      }, {\n        label: '60分钟',\n        value: 60\n      }]\n    };\n  },\n  computed: {\n    taskTypeLabels: function taskTypeLabels() {\n      return this.taskTypes.map(function (t) {\n        return t.label;\n      });\n    },\n    durationLabels: function durationLabels() {\n      return this.durationOptions.map(function (d) {\n        return d.label;\n      });\n    }\n  },\n  onLoad: function onLoad(options) {\n    var _this = this;\n    this.deviceKey = options.device_key || '';\n    if (!this.deviceKey) {\n      uni.showToast({\n        title: '设备参数错误',\n        icon: 'none'\n      });\n      return;\n    }\n    this.loadStatus();\n    this.loadTimers();\n\n    // 连接 WebSocket 接收实时推送\n    this.connectWS();\n\n    // 进入页面自动请求最新状态\n    (0, _api.requestDeviceStatus)(this.deviceKey).then(function () {\n      setTimeout(function () {\n        return _this.loadStatus();\n      }, 800);\n    });\n\n    // 10秒轮询（不管WebSocket是否连接，确保数据更新）\n    this.timer = setInterval(function () {\n      _this.loadStatus();\n      _this.checkServoTimeout();\n    }, 10000);\n\n    // 舵机超时检测（每2秒检查一次）\n    this.servoTimer = setInterval(function () {\n      _this.checkServoTimeout();\n    }, 2000);\n  },\n  onUnload: function onUnload() {\n    if (this.timer) {\n      clearInterval(this.timer);\n    }\n    if (this.servoTimer) {\n      clearInterval(this.servoTimer);\n    }\n    this.disconnectWS();\n  },\n  methods: {\n    getCtrlName: function getCtrlName(target, defaultName) {\n      var key = 'ctrl_name_' + this.deviceKey + '_' + target;\n      var name = uni.getStorageSync(key);\n      return name || defaultName;\n    },\n    checkRateLimit: function checkRateLimit() {\n      var now = Date.now();\n      if (now - this.lastClickTime < 1000) {\n        uni.showToast({\n          title: '操作过快，慢点哟',\n          icon: 'none'\n        });\n        return false;\n      }\n      this.lastClickTime = now;\n      return true;\n    },\n    startRename: function startRename(target, defaultName) {\n      this.renameTarget = target;\n      this.renameDefault = defaultName;\n      this.renameValue = this.getCtrlName(target, defaultName);\n      if (this.renameValue === defaultName) {\n        this.renameValue = '';\n      }\n      this.renameVisible = true;\n    },\n    cancelRename: function cancelRename() {\n      this.renameVisible = false;\n      this.renameTarget = '';\n      this.renameValue = '';\n    },\n    confirmRename: function confirmRename() {\n      if (!this.renameTarget) return;\n      var key = 'ctrl_name_' + this.deviceKey + '_' + this.renameTarget;\n      if (this.renameValue && this.renameValue.trim()) {\n        uni.setStorageSync(key, this.renameValue.trim());\n        uni.showToast({\n          title: '重命名成功',\n          icon: 'success'\n        });\n      } else {\n        uni.removeStorageSync(key);\n        uni.showToast({\n          title: '已恢复默认名称',\n          icon: 'none'\n        });\n      }\n      this.cancelRename();\n    },\n    // ===== WebSocket 实时推送 =====\n    getWSBaseURL: function getWSBaseURL() {\n      // H5开发模式：使用当前页面地址\n      // 原生App模式：使用配置的服务器地址\n      try {\n        if (window && window.location) {\n          return \"ws://\".concat(window.location.host);\n        }\n      } catch (e) {}\n      // 默认使用服务器地址\n      return 'ws://112.124.107.159:7965';\n    },\n    connectWS: function connectWS() {\n      var _this2 = this;\n      if (this.ws) return;\n      var phone = (0, _storage.getPhoneNumber)();\n      if (!phone) return;\n      try {\n        var baseUrl = this.getWSBaseURL();\n        this.ws = uni.connectSocket({\n          url: \"\".concat(baseUrl, \"/ws/client\"),\n          success: function success() {}\n        });\n        this.ws.onOpen(function () {\n          _this2.wsConnected = true;\n          // 发送认证\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'auth',\n              phone: phone\n            })\n          });\n          // 订阅当前设备\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'subscribe',\n              device_key: _this2.deviceKey\n            })\n          });\n        });\n        this.ws.onMessage(function (res) {\n          try {\n            var msg = JSON.parse(res.data);\n            if (msg.type === 'device_status' && msg.device_key === _this2.deviceKey) {\n              _this2.updateStatusFromWS(msg);\n            }\n          } catch (e) {}\n        });\n        this.ws.onClose(function () {\n          _this2.wsConnected = false;\n          _this2.ws = null;\n          // 3秒后自动重连\n          if (!_this2.wsReconnectTimer) {\n            _this2.wsReconnectTimer = setTimeout(function () {\n              _this2.wsReconnectTimer = null;\n              _this2.connectWS();\n            }, 3000);\n          }\n        });\n        this.ws.onError(function () {\n          _this2.wsConnected = false;\n        });\n      } catch (e) {\n        __f__(\"log\", 'WebSocket连接失败，使用HTTP轮询', e, \" at pages/control/index.vue:521\");\n      }\n    },\n    disconnectWS: function disconnectWS() {\n      if (this.wsReconnectTimer) {\n        clearTimeout(this.wsReconnectTimer);\n        this.wsReconnectTimer = null;\n      }\n      if (this.ws) {\n        this.ws.close();\n        this.ws = null;\n        this.wsConnected = false;\n      }\n    },\n    updateStatusFromWS: function updateStatusFromWS(msg) {\n      var s = msg.status || {};\n      var moving = s.servoMoving || false;\n      if (moving && !this.servoStartTime) {\n        this.servoStartTime = Date.now();\n      }\n      if (!moving) {\n        this.servoStartTime = 0;\n      }\n      this.status = {\n        online: msg.online || false,\n        pwm1Level: s.pwm1Level || 0,\n        pwm2Level: s.pwm2Level || 0,\n        pwm3Level: s.pwm3Level || 0,\n        airPumpLevel: s.airPumpLevel || 0,\n        fanLevel: s.fanLevel || 0,\n        uvLightOn: s.uvLightOn || false,\n        relay1State: s.relay1State || false,\n        relay2State: s.relay2State || false,\n        servoMoving: s.servoMoving || false,\n        adcWQVoltage: s.adcWQVoltage || 0,\n        adcTempVoltage: s.adcTempVoltage || 0,\n        tdsValue: s.tdsValue || 0,\n        waterTemperature: s.waterTemperature || 0,\n        systemPowered: s.systemPowered !== false\n      };\n      this.lastUpdateTime = new Date().toLocaleTimeString();\n    },\n    loadStatus: function loadStatus() {\n      var _this3 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var res, s, moving;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return (0, _api.getDeviceStatus)(_this3.deviceKey);\n              case 3:\n                res = _context.sent;\n                if (res.success) {\n                  s = res.status || {};\n                  moving = s.servoMoving || false;\n                  if (moving && !_this3.servoStartTime) {\n                    _this3.servoStartTime = Date.now();\n                  }\n                  if (!moving) {\n                    _this3.servoStartTime = 0;\n                  }\n                  _this3.status = {\n                    online: res.online || false,\n                    pwm1Level: s.pwm1Level || 0,\n                    pwm2Level: s.pwm2Level || 0,\n                    pwm3Level: s.pwm3Level || 0,\n                    airPumpLevel: s.airPumpLevel || 0,\n                    fanLevel: s.fanLevel || 0,\n                    uvLightOn: s.uvLightOn || false,\n                    relay1State: s.relay1State || false,\n                    relay2State: s.relay2State || false,\n                    servoMoving: s.servoMoving || false,\n                    adcWQVoltage: s.adcWQVoltage || 0,\n                    adcTempVoltage: s.adcTempVoltage || 0,\n                    tdsValue: s.tdsValue || 0,\n                    waterTemperature: s.waterTemperature || 0,\n                    systemPowered: s.systemPowered !== false\n                  };\n                  _this3.lastUpdateTime = new Date().toLocaleTimeString();\n                }\n                _context.next = 10;\n                break;\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                _this3.status.online = false;\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }))();\n    },\n    refreshStatus: function refreshStatus() {\n      var _this4 = this;\n      uni.showLoading({\n        title: '刷新中...'\n      });\n      (0, _api.requestDeviceStatus)(this.deviceKey).then(function () {\n        setTimeout(function () {\n          _this4.loadStatus().then(function () {\n            uni.hideLoading();\n          });\n        }, 800);\n      }).catch(function () {\n        _this4.loadStatus().then(function () {\n          uni.hideLoading();\n        });\n      });\n    },\n    setPump: function setPump(pump, level) {\n      var _this5 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var res;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (_this5.status.online) {\n                  _context2.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context2.abrupt(\"return\");\n              case 3:\n                if (_this5.checkRateLimit()) {\n                  _context2.next = 5;\n                  break;\n                }\n                return _context2.abrupt(\"return\");\n              case 5:\n                _this5.status[\"pwm\".concat(pump, \"Level\")] = level;\n                _context2.prev = 6;\n                _context2.next = 9;\n                return (0, _api.sendControlCommand)(_this5.deviceKey, 'set_pump', {\n                  pump: pump,\n                  level: level\n                });\n              case 9:\n                res = _context2.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this5.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context2.next = 16;\n                break;\n              case 13:\n                _context2.prev = 13;\n                _context2.t0 = _context2[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[6, 13]]);\n      }))();\n    },\n    setLight: function setLight(level) {\n      var _this6 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        var res;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                if (_this6.status.online) {\n                  _context3.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context3.abrupt(\"return\");\n              case 3:\n                if (_this6.checkRateLimit()) {\n                  _context3.next = 5;\n                  break;\n                }\n                return _context3.abrupt(\"return\");\n              case 5:\n                _this6.status.pwm3Level = level;\n                _context3.prev = 6;\n                _context3.next = 9;\n                return (0, _api.sendControlCommand)(_this6.deviceKey, 'set_light', {\n                  level: level\n                });\n              case 9:\n                res = _context3.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this6.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context3.next = 16;\n                break;\n              case 13:\n                _context3.prev = 13;\n                _context3.t0 = _context3[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, null, [[6, 13]]);\n      }))();\n    },\n    setAirPump: function setAirPump(level) {\n      var _this7 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {\n        var res;\n        return _regenerator.default.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                if (_this7.status.online) {\n                  _context4.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context4.abrupt(\"return\");\n              case 3:\n                if (_this7.checkRateLimit()) {\n                  _context4.next = 5;\n                  break;\n                }\n                return _context4.abrupt(\"return\");\n              case 5:\n                _this7.status.airPumpLevel = level;\n                _context4.prev = 6;\n                _context4.next = 9;\n                return (0, _api.sendControlCommand)(_this7.deviceKey, 'set_air_pump', {\n                  level: level\n                });\n              case 9:\n                res = _context4.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this7.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context4.next = 16;\n                break;\n              case 13:\n                _context4.prev = 13;\n                _context4.t0 = _context4[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, null, [[6, 13]]);\n      }))();\n    },\n    setFan: function setFan(level) {\n      var _this8 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {\n        var res;\n        return _regenerator.default.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                if (_this8.status.online) {\n                  _context5.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context5.abrupt(\"return\");\n              case 3:\n                if (_this8.checkRateLimit()) {\n                  _context5.next = 5;\n                  break;\n                }\n                return _context5.abrupt(\"return\");\n              case 5:\n                _this8.status.fanLevel = level;\n                _context5.prev = 6;\n                _context5.next = 9;\n                return (0, _api.sendControlCommand)(_this8.deviceKey, 'set_fan', {\n                  level: level\n                });\n              case 9:\n                res = _context5.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this8.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context5.next = 16;\n                break;\n              case 13:\n                _context5.prev = 13;\n                _context5.t0 = _context5[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5, null, [[6, 13]]);\n      }))();\n    },\n    setUV: function setUV(on) {\n      var _this9 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {\n        var res;\n        return _regenerator.default.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                if (_this9.status.online) {\n                  _context6.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context6.abrupt(\"return\");\n              case 3:\n                if (_this9.checkRateLimit()) {\n                  _context6.next = 5;\n                  break;\n                }\n                return _context6.abrupt(\"return\");\n              case 5:\n                _this9.status.uvLightOn = on;\n                _context6.prev = 6;\n                _context6.next = 9;\n                return (0, _api.sendControlCommand)(_this9.deviceKey, 'set_uv', {\n                  on: on\n                });\n              case 9:\n                res = _context6.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this9.loadStatus();\n                  }, 800);\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context6.next = 16;\n                break;\n              case 13:\n                _context6.prev = 13;\n                _context6.t0 = _context6[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6, null, [[6, 13]]);\n      }))();\n    },\n    setRelay2: function setRelay2(on) {\n      var _this10 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {\n        var res;\n        return _regenerator.default.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                if (_this10.status.online) {\n                  _context7.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context7.abrupt(\"return\");\n              case 3:\n                if (_this10.checkRateLimit()) {\n                  _context7.next = 5;\n                  break;\n                }\n                return _context7.abrupt(\"return\");\n              case 5:\n                _this10.status.relay2State = on;\n                _context7.prev = 6;\n                _context7.next = 9;\n                return (0, _api.sendControlCommand)(_this10.deviceKey, 'set_relay2', {\n                  on: on\n                });\n              case 9:\n                res = _context7.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this10.loadStatus();\n                  }, 800);\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context7.next = 16;\n                break;\n              case 13:\n                _context7.prev = 13;\n                _context7.t0 = _context7[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7, null, [[6, 13]]);\n      }))();\n    },\n    triggerServo: function triggerServo() {\n      var _this11 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {\n        var res;\n        return _regenerator.default.wrap(function _callee8$(_context8) {\n          while (1) {\n            switch (_context8.prev = _context8.next) {\n              case 0:\n                if (!(!_this11.status.online || _this11.status.servoMoving)) {\n                  _context8.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线或舵机运行中',\n                  icon: 'none'\n                });\n                return _context8.abrupt(\"return\");\n              case 3:\n                if (_this11.checkRateLimit()) {\n                  _context8.next = 5;\n                  break;\n                }\n                return _context8.abrupt(\"return\");\n              case 5:\n                _context8.prev = 5;\n                _context8.next = 8;\n                return (0, _api.sendControlCommand)(_this11.deviceKey, 'trigger_servo', {});\n              case 8:\n                res = _context8.sent;\n                if (res.success) {\n                  _this11.status.servoMoving = true;\n                  _this11.servoStartTime = Date.now(); // 记录启动时间\n                  uni.showToast({\n                    title: '舵机已启动',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '启动失败',\n                    icon: 'none'\n                  });\n                }\n                _context8.next = 15;\n                break;\n              case 12:\n                _context8.prev = 12;\n                _context8.t0 = _context8[\"catch\"](5);\n                uni.showToast({\n                  title: '启动失败',\n                  icon: 'none'\n                });\n              case 15:\n              case \"end\":\n                return _context8.stop();\n            }\n          }\n        }, _callee8, null, [[5, 12]]);\n      }))();\n    },\n    checkServoTimeout: function checkServoTimeout() {\n      // 舵机运行超15秒自动复位（舵机完整周期约8秒）\n      if (this.status.servoMoving && this.servoStartTime > 0) {\n        var elapsed = (Date.now() - this.servoStartTime) / 1000;\n        if (elapsed > 8) {\n          this.status.servoMoving = false;\n          this.servoStartTime = 0;\n        }\n      }\n    },\n    togglePower: function togglePower() {\n      var _this12 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {\n        var isPowered, cmd, confirmText;\n        return _regenerator.default.wrap(function _callee9$(_context9) {\n          while (1) {\n            switch (_context9.prev = _context9.next) {\n              case 0:\n                if (_this12.status.online) {\n                  _context9.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context9.abrupt(\"return\");\n              case 3:\n                isPowered = _this12.status.systemPowered;\n                cmd = isPowered ? 'power_off' : 'power_on';\n                confirmText = isPowered ? '确定要关机吗？\\n关机后设备保持网络连接，可远程开机。' : '确定要开机吗？';\n                uni.showModal({\n                  title: '确认操作',\n                  content: confirmText,\n                  success: function success(modalRes) {\n                    if (!modalRes.confirm) return;\n                    _this12.executePowerCmd(cmd);\n                  }\n                });\n              case 7:\n              case \"end\":\n                return _context9.stop();\n            }\n          }\n        }, _callee9);\n      }))();\n    },\n    executePowerCmd: function executePowerCmd(cmd) {\n      var _this13 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {\n        var result;\n        return _regenerator.default.wrap(function _callee10$(_context10) {\n          while (1) {\n            switch (_context10.prev = _context10.next) {\n              case 0:\n                if (_this13.checkRateLimit()) {\n                  _context10.next = 2;\n                  break;\n                }\n                return _context10.abrupt(\"return\");\n              case 2:\n                _context10.prev = 2;\n                _context10.next = 5;\n                return (0, _api.sendControlCommand)(_this13.deviceKey, cmd, {});\n              case 5:\n                result = _context10.sent;\n                if (result.success) {\n                  _this13.status.systemPowered = cmd === 'power_on';\n                  uni.showToast({\n                    title: cmd === 'power_on' ? '开机成功' : '关机成功',\n                    icon: 'success'\n                  });\n                  setTimeout(function () {\n                    return _this13.loadStatus();\n                  }, 1000);\n                } else {\n                  uni.showToast({\n                    title: result.message || '操作失败',\n                    icon: 'none'\n                  });\n                }\n                _context10.next = 12;\n                break;\n              case 9:\n                _context10.prev = 9;\n                _context10.t0 = _context10[\"catch\"](2);\n                uni.showToast({\n                  title: '操作失败',\n                  icon: 'none'\n                });\n              case 12:\n              case \"end\":\n                return _context10.stop();\n            }\n          }\n        }, _callee10, null, [[2, 9]]);\n      }))();\n    },\n    // ===== 定时任务 =====\n    getTaskTypeLabel: function getTaskTypeLabel(timer) {\n      var type = this.taskTypes.find(function (t) {\n        return t.cmd === timer.cmd && JSON.stringify(t.params) === JSON.stringify(timer.params);\n      });\n      return type ? type.label : '未知任务';\n    },\n    loadTimers: function loadTimers() {\n      var _this14 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {\n        var res;\n        return _regenerator.default.wrap(function _callee11$(_context11) {\n          while (1) {\n            switch (_context11.prev = _context11.next) {\n              case 0:\n                _context11.prev = 0;\n                _context11.next = 3;\n                return (0, _api.getTimers)(_this14.deviceKey);\n              case 3:\n                res = _context11.sent;\n                if (res.success && res.timers) {\n                  _this14.timers = res.timers;\n                }\n                _context11.next = 10;\n                break;\n              case 7:\n                _context11.prev = 7;\n                _context11.t0 = _context11[\"catch\"](0);\n                // 静默失败，使用空列表\n                _this14.timers = [];\n              case 10:\n              case \"end\":\n                return _context11.stop();\n            }\n          }\n        }, _callee11, null, [[0, 7]]);\n      }))();\n    },\n    openTimerDialog: function openTimerDialog(timer) {\n      if (timer) {\n        this.editingTimer = timer;\n        var typeIndex = this.taskTypes.findIndex(function (t) {\n          return t.cmd === timer.cmd && JSON.stringify(t.params) === JSON.stringify(timer.params);\n        });\n        var dur = this.durationOptions.find(function (d) {\n          return d.value === timer.duration / 60;\n        });\n        this.timerForm = {\n          id: timer.id,\n          name: timer.name,\n          hour: timer.hour,\n          minute: timer.minute,\n          type: typeIndex >= 0 ? typeIndex : 0,\n          cmd: timer.cmd,\n          params: timer.params,\n          duration: timer.duration / 60,\n          // 转为分钟\n          durationLabel: dur ? dur.label : '不停止'\n        };\n      } else {\n        this.editingTimer = null;\n        this.timerForm = {\n          id: '',\n          name: '',\n          hour: 8,\n          minute: 0,\n          type: 0,\n          cmd: 'trigger_servo',\n          params: {},\n          duration: 0,\n          durationLabel: '不停止'\n        };\n      }\n      this.timerDialogVisible = true;\n    },\n    closeTimerDialog: function closeTimerDialog() {\n      this.timerDialogVisible = false;\n      this.editingTimer = null;\n    },\n    onTimeChange: function onTimeChange(e) {\n      var vals = e.detail.value;\n      this.timerForm.hour = parseInt(vals[0]);\n      this.timerForm.minute = parseInt(vals[1]);\n    },\n    onTaskTypeChange: function onTaskTypeChange(e) {\n      var idx = e.detail.value;\n      this.timerForm.type = idx;\n      var type = this.taskTypes[idx];\n      this.timerForm.cmd = type.cmd;\n      this.timerForm.params = _objectSpread({}, type.params);\n    },\n    onDurationChange: function onDurationChange(e) {\n      var idx = e.detail.value;\n      var opt = this.durationOptions[idx];\n      this.timerForm.duration = opt.value;\n      this.timerForm.durationLabel = opt.label;\n    },\n    confirmTimer: function confirmTimer() {\n      var _this15 = this;\n      if (!this.timerForm.name.trim()) {\n        uni.showToast({\n          title: '请输入任务名称',\n          icon: 'none'\n        });\n        return;\n      }\n      var timerData = {\n        id: this.timerForm.id || 'timer_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),\n        name: this.timerForm.name.trim(),\n        hour: this.timerForm.hour,\n        minute: this.timerForm.minute,\n        type: this.timerForm.type,\n        cmd: this.timerForm.cmd,\n        params: this.timerForm.params,\n        duration: this.timerForm.duration * 60,\n        // 转为秒\n        enabled: true\n      };\n      if (this.editingTimer) {\n        var idx = this.timers.findIndex(function (t) {\n          return t.id === _this15.editingTimer.id;\n        });\n        if (idx >= 0) {\n          this.timers[idx] = timerData;\n        }\n      } else {\n        this.timers.push(timerData);\n      }\n      this.closeTimerDialog();\n      this.saveAllTimers();\n    },\n    handleDeleteTimer: function handleDeleteTimer(timer) {\n      var _this16 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {\n        return _regenerator.default.wrap(function _callee13$(_context13) {\n          while (1) {\n            switch (_context13.prev = _context13.next) {\n              case 0:\n                uni.showModal({\n                  title: '确认删除',\n                  content: '确定要删除定时任务\"' + timer.name + '\"吗？',\n                  success: function () {\n                    var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(res) {\n                      var result;\n                      return _regenerator.default.wrap(function _callee12$(_context12) {\n                        while (1) {\n                          switch (_context12.prev = _context12.next) {\n                            case 0:\n                              if (!res.confirm) {\n                                _context12.next = 11;\n                                break;\n                              }\n                              _context12.prev = 1;\n                              _context12.next = 4;\n                              return (0, _api.deleteTimer)(_this16.deviceKey, timer.id);\n                            case 4:\n                              result = _context12.sent;\n                              if (result.success) {\n                                _this16.timers = _this16.timers.filter(function (t) {\n                                  return t.id !== timer.id;\n                                });\n                                uni.showToast({\n                                  title: '删除成功',\n                                  icon: 'success'\n                                });\n                              } else {\n                                uni.showToast({\n                                  title: result.message || '删除失败',\n                                  icon: 'none'\n                                });\n                              }\n                              _context12.next = 11;\n                              break;\n                            case 8:\n                              _context12.prev = 8;\n                              _context12.t0 = _context12[\"catch\"](1);\n                              uni.showToast({\n                                title: '删除失败',\n                                icon: 'none'\n                              });\n                            case 11:\n                            case \"end\":\n                              return _context12.stop();\n                          }\n                        }\n                      }, _callee12, null, [[1, 8]]);\n                    }));\n                    function success(_x) {\n                      return _success.apply(this, arguments);\n                    }\n                    return success;\n                  }()\n                });\n              case 1:\n              case \"end\":\n                return _context13.stop();\n            }\n          }\n        }, _callee13);\n      }))();\n    },\n    toggleTimer: function toggleTimer(timer) {\n      timer.enabled = !timer.enabled;\n      this.saveAllTimers();\n    },\n    saveAllTimers: function saveAllTimers() {\n      var _this17 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {\n        return _regenerator.default.wrap(function _callee14$(_context14) {\n          while (1) {\n            switch (_context14.prev = _context14.next) {\n              case 0:\n                _context14.prev = 0;\n                _context14.next = 3;\n                return (0, _api.saveTimers)(_this17.deviceKey, _this17.timers);\n              case 3:\n                _context14.next = 8;\n                break;\n              case 5:\n                _context14.prev = 5;\n                _context14.t0 = _context14[\"catch\"](0);\n                uni.showToast({\n                  title: '保存失败',\n                  icon: 'none'\n                });\n              case 8:\n              case \"end\":\n                return _context14.stop();\n            }\n          }\n        }, _callee14, null, [[0, 5]]);\n      }))();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY29udHJvbC9pbmRleC52dWUiXSwibmFtZXMiOlsiZGF0YSIsImRldmljZUtleSIsInN0YXR1cyIsIm9ubGluZSIsInB3bTFMZXZlbCIsInB3bTJMZXZlbCIsInB3bTNMZXZlbCIsImFpclB1bXBMZXZlbCIsImZhbkxldmVsIiwidXZMaWdodE9uIiwicmVsYXkxU3RhdGUiLCJyZWxheTJTdGF0ZSIsInNlcnZvTW92aW5nIiwiYWRjV1FWb2x0YWdlIiwiYWRjVGVtcFZvbHRhZ2UiLCJzeXN0ZW1Qb3dlcmVkIiwicHVtcExldmVscyIsImxhc3RVcGRhdGVUaW1lIiwidGltZXIiLCJyZW5hbWVWaXNpYmxlIiwicmVuYW1lVmFsdWUiLCJyZW5hbWVUYXJnZXQiLCJyZW5hbWVEZWZhdWx0Iiwid3MiLCJ3c0Nvbm5lY3RlZCIsIndzUmVjb25uZWN0VGltZXIiLCJzZXJ2b1RpbWVyIiwic2Vydm9TdGFydFRpbWUiLCJsYXN0Q2xpY2tUaW1lIiwidGltZXJzIiwidGltZXJEaWFsb2dWaXNpYmxlIiwiZWRpdGluZ1RpbWVyIiwidGltZXJGb3JtIiwiaWQiLCJuYW1lIiwiaG91ciIsIm1pbnV0ZSIsInR5cGUiLCJjbWQiLCJwYXJhbXMiLCJkdXJhdGlvbiIsImR1cmF0aW9uTGFiZWwiLCJob3VycyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwic2xpY2UiLCJtaW51dGVzIiwidGFza1R5cGVzIiwibGFiZWwiLCJwdW1wIiwibGV2ZWwiLCJkdXJhdGlvbk9wdGlvbnMiLCJ2YWx1ZSIsImNvbXB1dGVkIiwidGFza1R5cGVMYWJlbHMiLCJtYXAiLCJ0IiwiZHVyYXRpb25MYWJlbHMiLCJkIiwib25Mb2FkIiwib3B0aW9ucyIsImRldmljZV9rZXkiLCJ1bmkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJsb2FkU3RhdHVzIiwibG9hZFRpbWVycyIsImNvbm5lY3RXUyIsInJlcXVlc3REZXZpY2VTdGF0dXMiLCJ0aGVuIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiY2hlY2tTZXJ2b1RpbWVvdXQiLCJvblVubG9hZCIsImNsZWFySW50ZXJ2YWwiLCJkaXNjb25uZWN0V1MiLCJtZXRob2RzIiwiZ2V0Q3RybE5hbWUiLCJ0YXJnZXQiLCJkZWZhdWx0TmFtZSIsImtleSIsImdldFN0b3JhZ2VTeW5jIiwiY2hlY2tSYXRlTGltaXQiLCJub3ciLCJEYXRlIiwic3RhcnRSZW5hbWUiLCJjYW5jZWxSZW5hbWUiLCJjb25maXJtUmVuYW1lIiwidHJpbSIsInNldFN0b3JhZ2VTeW5jIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRXU0Jhc2VVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3QiLCJlIiwicGhvbmUiLCJnZXRQaG9uZU51bWJlciIsImJhc2VVcmwiLCJjb25uZWN0U29ja2V0IiwidXJsIiwic3VjY2VzcyIsIm9uT3BlbiIsInNlbmRTb2NrZXRNZXNzYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uTWVzc2FnZSIsInJlcyIsIm1zZyIsInBhcnNlIiwidXBkYXRlU3RhdHVzRnJvbVdTIiwib25DbG9zZSIsIm9uRXJyb3IiLCJjbGVhclRpbWVvdXQiLCJjbG9zZSIsInMiLCJtb3ZpbmciLCJ0ZHNWYWx1ZSIsIndhdGVyVGVtcGVyYXR1cmUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJnZXREZXZpY2VTdGF0dXMiLCJyZWZyZXNoU3RhdHVzIiwic2hvd0xvYWRpbmciLCJoaWRlTG9hZGluZyIsImNhdGNoIiwic2V0UHVtcCIsInNlbmRDb250cm9sQ29tbWFuZCIsIm1lc3NhZ2UiLCJzZXRMaWdodCIsInNldEFpclB1bXAiLCJzZXRGYW4iLCJzZXRVViIsIm9uIiwic2V0UmVsYXkyIiwidHJpZ2dlclNlcnZvIiwiZWxhcHNlZCIsInRvZ2dsZVBvd2VyIiwiaXNQb3dlcmVkIiwiY29uZmlybVRleHQiLCJzaG93TW9kYWwiLCJjb250ZW50IiwibW9kYWxSZXMiLCJjb25maXJtIiwiZXhlY3V0ZVBvd2VyQ21kIiwicmVzdWx0IiwiZ2V0VGFza1R5cGVMYWJlbCIsImZpbmQiLCJnZXRUaW1lcnMiLCJvcGVuVGltZXJEaWFsb2ciLCJ0eXBlSW5kZXgiLCJmaW5kSW5kZXgiLCJkdXIiLCJjbG9zZVRpbWVyRGlhbG9nIiwib25UaW1lQ2hhbmdlIiwidmFscyIsImRldGFpbCIsInBhcnNlSW50Iiwib25UYXNrVHlwZUNoYW5nZSIsImlkeCIsIm9uRHVyYXRpb25DaGFuZ2UiLCJvcHQiLCJjb25maXJtVGltZXIiLCJ0aW1lckRhdGEiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJlbmFibGVkIiwicHVzaCIsInNhdmVBbGxUaW1lcnMiLCJoYW5kbGVEZWxldGVUaW1lciIsImRlbGV0ZVRpbWVyQXBpIiwiZmlsdGVyIiwidG9nZ2xlVGltZXIiLCJzYXZlVGltZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBaVNBO0FBQ0E7QUFBZ0Q7QUFBQTtBQUFBLGVBRWpDO0VBQ2JBLElBQUksa0JBQUc7SUFDTCxPQUFPO01BQ0xDLFNBQVMsRUFBRSxFQUFFO01BQ2JDLE1BQU0sRUFBRTtRQUNOQyxNQUFNLEVBQUUsS0FBSztRQUNiQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxZQUFZLEVBQUUsQ0FBQztRQUNmQyxRQUFRLEVBQUUsQ0FBQztRQUNYQyxTQUFTLEVBQUUsS0FBSztRQUNoQkMsV0FBVyxFQUFFLEtBQUs7UUFDbEJDLFdBQVcsRUFBRSxLQUFLO1FBQ2xCQyxXQUFXLEVBQUUsS0FBSztRQUNsQkMsWUFBWSxFQUFFLENBQUM7UUFDZkMsY0FBYyxFQUFFLENBQUM7UUFDakJDLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0RDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztNQUNuQ0MsY0FBYyxFQUFFLEVBQUU7TUFDbEJDLEtBQUssRUFBRSxJQUFJO01BQ1hDLGFBQWEsRUFBRSxLQUFLO01B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QUFDO2NBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFN0NvQyxHQUFHLENBQUNDLFNBQVMsQ0FBQztrQkFBRUMsS0FBSyxFQUFFLE1BQU07a0JBQUVDLElBQUksRUFBRTtnQkFBTyxDQUFDLENBQUM7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFFbEQ7RUFDRjtBQUNGLENBQUM7QUFBQSwyQiIsImZpbGUiOiIyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuaW1wb3J0IHsgZ2V0RGV2aWNlU3RhdHVzLCByZXF1ZXN0RGV2aWNlU3RhdHVzLCBzZW5kQ29udHJvbENvbW1hbmQsIGdldFRpbWVycywgc2F2ZVRpbWVycywgZGVsZXRlVGltZXIgYXMgZGVsZXRlVGltZXJBcGkgfSBmcm9tICdAL3V0aWxzL2FwaSdcbmltcG9ydCB7IGdldFBob25lTnVtYmVyIH0gZnJvbSAnQC91dGlscy9zdG9yYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRldmljZUtleTogJycsXG4gICAgICBzdGF0dXM6IHtcbiAgICAgICAgb25saW5lOiBmYWxzZSxcbiAgICAgICAgcHdtMUxldmVsOiAwLFxuICAgICAgICBwd20yTGV2ZWw6IDAsXG4gICAgICAgIHB3bTNMZXZlbDogMCxcbiAgICAgICAgYWlyUHVtcExldmVsOiAwLFxuICAgICAgICBmYW5MZXZlbDogMCxcbiAgICAgICAgdXZMaWdodE9uOiBmYWxzZSxcbiAgICAgICAgcmVsYXkxU3RhdGU6IGZhbHNlLFxuICAgICAgICByZWxheTJTdGF0ZTogZmFsc2UsXG4gICAgICAgIHNlcnZvTW92aW5nOiBmYWxzZSxcbiAgICAgICAgYWRjV1FWb2x0YWdlOiAwLFxuICAgICAgICBhZGNUZW1wVm9sdGFnZTogMCxcbiAgICAgICAgc3lzdGVtUG93ZXJlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHB1bXBMZXZlbHM6IFsn5YWzJywgJ+S4gOahoycsICfkuozmoaMnLCAn5LiJ5qGjJ10sXG4gICAgICBsYXN0VXBkYXRlVGltZTogJycsXG4gICAgICB0aW1lcjogbnVsbCxcbiAgICAgIHJlbmFtZVZpc2libGU6IGZhbHNlLFxuICAgICAgcmVuYW1lVmFsdWU6ICcnLFxuICAgICAgcmVuYW1lVGFyZ2V0OiAnJyxcbiAgICAgIHJlbmFtZURlZmF1bHQ6ICcnLFxuICAgICAgd3M6IG51bGwsXG4gICAgICB3c0Nvbm5lY3RlZDogZmFsc2UsXG4gICAgICB3c1JlY29ubmVjdFRpbWVyOiBudWxsLFxuICAgICAgc2Vydm9UaW1lcjogbnVsbCxcbiAgICAgIHNlcnZvU3RhcnRUaW1lOiAwLFxuICAgICAgbGFzdENsaWNrVGltZTogMCxcbiAgICAgIC8vIOWumuaXtuS7u+WKoVxuICAgICAgdGltZXJzOiBbXSxcbiAgICAgIHRpbWVyRGlhbG9nVmlzaWJsZTogZmFsc2UsXG4gICAgICBlZGl0aW5nVGltZXI6IG51bGwsXG4gICAgICB0aW1lckZvcm06IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgaG91cjogOCxcbiAgICAgICAgbWludXRlOiAwLFxuICAgICAgICB0eXBlOiAwLFxuICAgICAgICBjbWQ6ICd0cmlnZ2VyX3NlcnZvJyxcbiAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIGR1cmF0aW9uTGFiZWw6ICfkuI3lgZzmraInXG4gICAgICB9LFxuICAgICAgaG91cnM6IEFycmF5LmZyb20oeyBsZW5ndGg6IDI0IH0sIChfLCBpKSA9PiAoJzAnICsgaSkuc2xpY2UoLTIpKSxcbiAgICAgIG1pbnV0ZXM6IEFycmF5LmZyb20oeyBsZW5ndGg6IDYwIH0sIChfLCBpKSA9PiAoJzAnICsgaSkuc2xpY2UoLTIpKSxcbiAgICAgIHRhc2tUeXBlczogW1xuICAgICAgICB7IGxhYmVsOiAn5ZaC6bG877yI6Ii15py677yJJywgY21kOiAndHJpZ2dlcl9zZXJ2bycsIHBhcmFtczoge30gfSxcbiAgICAgICAgeyBsYWJlbDogJ+aNouawtDHmoaPvvIjmsLTms7UxIGxldmVsPTHvvIknLCBjbWQ6ICdzZXRfcHVtcCcsIHBhcmFtczogeyBwdW1wOiAxLCBsZXZlbDogMSB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICfmjaLmsLQy5qGj77yI5rC05rO1MSBsZXZlbD0y77yJJywgY21kOiAnc2V0X3B1bXAnLCBwYXJhbXM6IHsgcHVtcDogMSwgbGV2ZWw6IDIgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn5o2i5rC0M+aho++8iOawtOaztTEgbGV2ZWw9M++8iScsIGNtZDogJ3NldF9wdW1wJywgcGFyYW1zOiB7IHB1bXA6IDEsIGxldmVsOiAzIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+WKoOawlDHmoaPvvIjmsJTms7UgbGV2ZWw9Me+8iScsIGNtZDogJ3NldF9haXJfcHVtcCcsIHBhcmFtczogeyBsZXZlbDogMSB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICfliqDmsJQy5qGj77yI5rCU5rO1IGxldmVsPTLvvIknLCBjbWQ6ICdzZXRfYWlyX3B1bXAnLCBwYXJhbXM6IHsgbGV2ZWw6IDIgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn5Yqg5rCUM+aho++8iOawlOaztSBsZXZlbD0z77yJJywgY21kOiAnc2V0X2Fpcl9wdW1wJywgcGFyYW1zOiB7IGxldmVsOiAzIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+W8gOeBrzHmoaPvvIjnga/mnaEgbGV2ZWw9Me+8iScsIGNtZDogJ3NldF9saWdodCcsIHBhcmFtczogeyBsZXZlbDogMSB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICflvIDnga8y5qGj77yIbGV2ZWw9Mu+8iScsIGNtZDogJ3NldF9saWdodCcsIHBhcmFtczogeyBsZXZlbDogMiB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICflvIDnga8z5qGj77yIbGV2ZWw9M++8iScsIGNtZDogJ3NldF9saWdodCcsIHBhcmFtczogeyBsZXZlbDogMyB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICfpo47miYcx5qGjJywgY21kOiAnc2V0X2ZhbicsIHBhcmFtczogeyBsZXZlbDogMSB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICfpo47miYcy5qGjJywgY21kOiAnc2V0X2ZhbicsIHBhcmFtczogeyBsZXZlbDogMiB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICfpo47miYcz5qGjJywgY21kOiAnc2V0X2ZhbicsIHBhcmFtczogeyBsZXZlbDogMyB9IH1cbiAgICAgIF0sXG4gICAgICBkdXJhdGlvbk9wdGlvbnM6IFtcbiAgICAgICAgeyBsYWJlbDogJ+S4jeWBnOatoicsIHZhbHVlOiAwIH0sXG4gICAgICAgIHsgbGFiZWw6ICcx5YiG6ZKfJywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyBsYWJlbDogJzXliIbpkp8nLCB2YWx1ZTogNSB9LFxuICAgICAgICB7IGxhYmVsOiAnMTDliIbpkp8nLCB2YWx1ZTogMTAgfSxcbiAgICAgICAgeyBsYWJlbDogJzMw5YiG6ZKfJywgdmFsdWU6IDMwIH0sXG4gICAgICAgIHsgbGFiZWw6ICc2MOWIhumSnycsIHZhbHVlOiA2MCB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHRhc2tUeXBlTGFiZWxzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza1R5cGVzLm1hcCh0ID0+IHQubGFiZWwpXG4gICAgfSxcbiAgICBkdXJhdGlvbkxhYmVscygpIHtcbiAgICAgIHJldHVybiB0aGlzLmR1cmF0aW9uT3B0aW9ucy5tYXAoZCA9PiBkLmxhYmVsKVxuICAgIH1cbiAgfSxcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB0aGlzLmRldmljZUtleSA9IG9wdGlvbnMuZGV2aWNlX2tleSB8fCAnJ1xuICAgIGlmICghdGhpcy5kZXZpY2VLZXkpIHtcbiAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+WPguaVsOmUmeivrycsIGljb246ICdub25lJyB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIHRoaXMubG9hZFN0YXR1cygpXG4gICAgdGhpcy5sb2FkVGltZXJzKClcbiAgICBcbiAgICAvLyDov57mjqUgV2ViU29ja2V0IOaOpeaUtuWunuaXtuaOqOmAgVxuICAgIHRoaXMuY29ubmVjdFdTKClcbiAgICBcbiAgICAvLyDov5vlhaXpobXpnaLoh6rliqjor7fmsYLmnIDmlrDnirbmgIFcbiAgICByZXF1ZXN0RGV2aWNlU3RhdHVzKHRoaXMuZGV2aWNlS2V5KS50aGVuKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3RhdHVzKCksIDgwMClcbiAgICB9KVxuICAgIFxuICAgIC8vIDEw56eS6L2u6K+i77yI5LiN566hV2ViU29ja2V05piv5ZCm6L+e5o6l77yM56Gu5L+d5pWw5o2u5pu05paw77yJXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZFN0YXR1cygpXG4gICAgICB0aGlzLmNoZWNrU2Vydm9UaW1lb3V0KClcbiAgICB9LCAxMDAwMClcbiAgICBcbiAgICAvLyDoiLXmnLrotoXml7bmo4DmtYvvvIjmr48y56eS5qOA5p+l5LiA5qyh77yJXG4gICAgdGhpcy5zZXJ2b1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja1NlcnZvVGltZW91dCgpXG4gICAgfSwgMjAwMClcbiAgfSxcbiAgb25VbmxvYWQoKSB7XG4gICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICB9XG4gICAgaWYgKHRoaXMuc2Vydm9UaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNlcnZvVGltZXIpXG4gICAgfVxuICAgIHRoaXMuZGlzY29ubmVjdFdTKClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldEN0cmxOYW1lKHRhcmdldCwgZGVmYXVsdE5hbWUpIHtcbiAgICAgIGNvbnN0IGtleSA9ICdjdHJsX25hbWVfJyArIHRoaXMuZGV2aWNlS2V5ICsgJ18nICsgdGFyZ2V0XG4gICAgICBjb25zdCBuYW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKGtleSlcbiAgICAgIHJldHVybiBuYW1lIHx8IGRlZmF1bHROYW1lXG4gICAgfSxcbiAgICBcbiAgICBjaGVja1JhdGVMaW1pdCgpIHtcbiAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RDbGlja1RpbWUgPCAxMDAwKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+aTjeS9nOi/h+W/q++8jOaFoueCueWTnycsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdENsaWNrVGltZSA9IG5vd1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuICAgIFxuICAgIHN0YXJ0UmVuYW1lKHRhcmdldCwgZGVmYXVsdE5hbWUpIHtcbiAgICAgIHRoaXMucmVuYW1lVGFyZ2V0ID0gdGFyZ2V0XG4gICAgICB0aGlzLnJlbmFtZURlZmF1bHQgPSBkZWZhdWx0TmFtZVxuICAgICAgdGhpcy5yZW5hbWVWYWx1ZSA9IHRoaXMuZ2V0Q3RybE5hbWUodGFyZ2V0LCBkZWZhdWx0TmFtZSlcbiAgICAgIGlmICh0aGlzLnJlbmFtZVZhbHVlID09PSBkZWZhdWx0TmFtZSkge1xuICAgICAgICB0aGlzLnJlbmFtZVZhbHVlID0gJydcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuYW1lVmlzaWJsZSA9IHRydWVcbiAgICB9LFxuICAgIFxuICAgIGNhbmNlbFJlbmFtZSgpIHtcbiAgICAgIHRoaXMucmVuYW1lVmlzaWJsZSA9IGZhbHNlXG4gICAgICB0aGlzLnJlbmFtZVRhcmdldCA9ICcnXG4gICAgICB0aGlzLnJlbmFtZVZhbHVlID0gJydcbiAgICB9LFxuICAgIFxuICAgIGNvbmZpcm1SZW5hbWUoKSB7XG4gICAgICBpZiAoIXRoaXMucmVuYW1lVGFyZ2V0KSByZXR1cm5cbiAgICAgIGNvbnN0IGtleSA9ICdjdHJsX25hbWVfJyArIHRoaXMuZGV2aWNlS2V5ICsgJ18nICsgdGhpcy5yZW5hbWVUYXJnZXRcbiAgICAgIGlmICh0aGlzLnJlbmFtZVZhbHVlICYmIHRoaXMucmVuYW1lVmFsdWUudHJpbSgpKSB7XG4gICAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhrZXksIHRoaXMucmVuYW1lVmFsdWUudHJpbSgpKVxuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfph43lkb3lkI3miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhrZXkpXG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+W3suaBouWkjem7mOiupOWQjeensCcsIGljb246ICdub25lJyB9KVxuICAgICAgfVxuICAgICAgdGhpcy5jYW5jZWxSZW5hbWUoKVxuICAgIH0sXG4gICAgXG4gICAgLy8gPT09PT0gV2ViU29ja2V0IOWunuaXtuaOqOmAgSA9PT09PVxuICAgIGdldFdTQmFzZVVSTCgpIHtcbiAgICAgIC8vIEg15byA5Y+R5qih5byP77ya5L2/55So5b2T5YmN6aG16Z2i5Zyw5Z2AXG4gICAgICAvLyDljp/nlJ9BcHDmqKHlvI/vvJrkvb/nlKjphY3nva7nmoTmnI3liqHlmajlnLDlnYBcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGB3czovLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9YFxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgLy8g6buY6K6k5L2/55So5pyN5Yqh5Zmo5Zyw5Z2AXG4gICAgICByZXR1cm4gJ3dzOi8vMTEyLjEyNC4xMDcuMTU5Ojc5NjUnXG4gICAgfSxcbiAgICBcbiAgICBjb25uZWN0V1MoKSB7XG4gICAgICBpZiAodGhpcy53cykgcmV0dXJuXG4gICAgICBjb25zdCBwaG9uZSA9IGdldFBob25lTnVtYmVyKClcbiAgICAgIGlmICghcGhvbmUpIHJldHVyblxuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5nZXRXU0Jhc2VVUkwoKVxuICAgICAgICB0aGlzLndzID0gdW5pLmNvbm5lY3RTb2NrZXQoe1xuICAgICAgICAgIHVybDogYCR7YmFzZVVybH0vd3MvY2xpZW50YCxcbiAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7fVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy53cy5vbk9wZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMud3NDb25uZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgLy8g5Y+R6YCB6K6k6K+BXG4gICAgICAgICAgdW5pLnNlbmRTb2NrZXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2F1dGgnLCBwaG9uZSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8g6K6i6ZiF5b2T5YmN6K6+5aSHXG4gICAgICAgICAgdW5pLnNlbmRTb2NrZXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ3N1YnNjcmliZScsIGRldmljZV9rZXk6IHRoaXMuZGV2aWNlS2V5IH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMud3Mub25NZXNzYWdlKChyZXMpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbXNnID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2RldmljZV9zdGF0dXMnICYmIG1zZy5kZXZpY2Vfa2V5ID09PSB0aGlzLmRldmljZUtleSkge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1c0Zyb21XUyhtc2cpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMud3Mub25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy53c0Nvbm5lY3RlZCA9IGZhbHNlXG4gICAgICAgICAgdGhpcy53cyA9IG51bGxcbiAgICAgICAgICAvLyAz56eS5ZCO6Ieq5Yqo6YeN6L+eXG4gICAgICAgICAgaWYgKCF0aGlzLndzUmVjb25uZWN0VGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMud3NSZWNvbm5lY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLndzUmVjb25uZWN0VGltZXIgPSBudWxsXG4gICAgICAgICAgICAgIHRoaXMuY29ubmVjdFdTKClcbiAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy53cy5vbkVycm9yKCgpID0+IHtcbiAgICAgICAgICB0aGlzLndzQ29ubmVjdGVkID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldOi/nuaOpeWksei0pe+8jOS9v+eUqEhUVFDova7or6InLCBlKVxuICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgZGlzY29ubmVjdFdTKCkge1xuICAgICAgaWYgKHRoaXMud3NSZWNvbm5lY3RUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy53c1JlY29ubmVjdFRpbWVyKVxuICAgICAgICB0aGlzLndzUmVjb25uZWN0VGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgICBpZiAodGhpcy53cykge1xuICAgICAgICB0aGlzLndzLmNsb3NlKClcbiAgICAgICAgdGhpcy53cyA9IG51bGxcbiAgICAgICAgdGhpcy53c0Nvbm5lY3RlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBcbiAgICB1cGRhdGVTdGF0dXNGcm9tV1MobXNnKSB7XG4gICAgICBjb25zdCBzID0gbXNnLnN0YXR1cyB8fCB7fVxuICAgICAgY29uc3QgbW92aW5nID0gcy5zZXJ2b01vdmluZyB8fCBmYWxzZVxuICAgICAgaWYgKG1vdmluZyAmJiAhdGhpcy5zZXJ2b1N0YXJ0VGltZSkge1xuICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgICAgfVxuICAgICAgaWYgKCFtb3ZpbmcpIHtcbiAgICAgICAgdGhpcy5zZXJ2b1N0YXJ0VGltZSA9IDBcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdHVzID0ge1xuICAgICAgICBvbmxpbmU6IG1zZy5vbmxpbmUgfHwgZmFsc2UsXG4gICAgICAgIHB3bTFMZXZlbDogcy5wd20xTGV2ZWwgfHwgMCxcbiAgICAgICAgcHdtMkxldmVsOiBzLnB3bTJMZXZlbCB8fCAwLFxuICAgICAgICBwd20zTGV2ZWw6IHMucHdtM0xldmVsIHx8IDAsXG4gICAgICAgIGFpclB1bXBMZXZlbDogcy5haXJQdW1wTGV2ZWwgfHwgMCxcbiAgICAgICAgZmFuTGV2ZWw6IHMuZmFuTGV2ZWwgfHwgMCxcbiAgICAgICAgdXZMaWdodE9uOiBzLnV2TGlnaHRPbiB8fCBmYWxzZSxcbiAgICAgICAgcmVsYXkxU3RhdGU6IHMucmVsYXkxU3RhdGUgfHwgZmFsc2UsXG4gICAgICAgIHJlbGF5MlN0YXRlOiBzLnJlbGF5MlN0YXRlIHx8IGZhbHNlLFxuICAgICAgICBzZXJ2b01vdmluZzogcy5zZXJ2b01vdmluZyB8fCBmYWxzZSxcbiAgICAgICAgYWRjV1FWb2x0YWdlOiBzLmFkY1dRVm9sdGFnZSB8fCAwLFxuICAgICAgICBhZGNUZW1wVm9sdGFnZTogcy5hZGNUZW1wVm9sdGFnZSB8fCAwLFxuICAgICAgICB0ZHNWYWx1ZTogcy50ZHNWYWx1ZSB8fCAwLFxuICAgICAgICB3YXRlclRlbXBlcmF0dXJlOiBzLndhdGVyVGVtcGVyYXR1cmUgfHwgMCxcbiAgICAgICAgc3lzdGVtUG93ZXJlZDogcy5zeXN0ZW1Qb3dlcmVkICE9PSBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5sYXN0VXBkYXRlVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKClcbiAgICB9LFxuICAgIFxuICAgIGFzeW5jIGxvYWRTdGF0dXMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXREZXZpY2VTdGF0dXModGhpcy5kZXZpY2VLZXkpXG4gICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IHMgPSByZXMuc3RhdHVzIHx8IHt9XG4gICAgICAgICAgY29uc3QgbW92aW5nID0gcy5zZXJ2b01vdmluZyB8fCBmYWxzZVxuICAgICAgICAgIGlmIChtb3ZpbmcgJiYgIXRoaXMuc2Vydm9TdGFydFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vydm9TdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghbW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gMFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnN0YXR1cyA9IHtcbiAgICAgICAgICAgIG9ubGluZTogcmVzLm9ubGluZSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHB3bTFMZXZlbDogcy5wd20xTGV2ZWwgfHwgMCxcbiAgICAgICAgICAgIHB3bTJMZXZlbDogcy5wd20yTGV2ZWwgfHwgMCxcbiAgICAgICAgICAgIHB3bTNMZXZlbDogcy5wd20zTGV2ZWwgfHwgMCxcbiAgICAgICAgICAgIGFpclB1bXBMZXZlbDogcy5haXJQdW1wTGV2ZWwgfHwgMCxcbiAgICAgICAgICAgIGZhbkxldmVsOiBzLmZhbkxldmVsIHx8IDAsXG4gICAgICAgICAgICB1dkxpZ2h0T246IHMudXZMaWdodE9uIHx8IGZhbHNlLFxuICAgICAgICAgICAgcmVsYXkxU3RhdGU6IHMucmVsYXkxU3RhdGUgfHwgZmFsc2UsXG4gICAgICAgICAgICByZWxheTJTdGF0ZTogcy5yZWxheTJTdGF0ZSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHNlcnZvTW92aW5nOiBzLnNlcnZvTW92aW5nIHx8IGZhbHNlLFxuICAgICAgICAgICAgYWRjV1FWb2x0YWdlOiBzLmFkY1dRVm9sdGFnZSB8fCAwLFxuICAgICAgICAgICAgYWRjVGVtcFZvbHRhZ2U6IHMuYWRjVGVtcFZvbHRhZ2UgfHwgMCxcbiAgICAgICAgICAgIHRkc1ZhbHVlOiBzLnRkc1ZhbHVlIHx8IDAsXG4gICAgICAgICAgICB3YXRlclRlbXBlcmF0dXJlOiBzLndhdGVyVGVtcGVyYXR1cmUgfHwgMCxcbiAgICAgICAgICAgIHN5c3RlbVBvd2VyZWQ6IHMuc3lzdGVtUG93ZXJlZCAhPT0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sYXN0VXBkYXRlVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMub25saW5lID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIHJlZnJlc2hTdGF0dXMoKSB7XG4gICAgICB1bmkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+WIt+aWsOS4rS4uLicgfSlcbiAgICAgIHJlcXVlc3REZXZpY2VTdGF0dXModGhpcy5kZXZpY2VLZXkpLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRTdGF0dXMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgODAwKVxuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRTdGF0dXMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIFxuICAgIGFzeW5jIHNldFB1bXAocHVtcCwgbGV2ZWwpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIFxuICAgICAgdGhpcy5zdGF0dXNbYHB3bSR7cHVtcH1MZXZlbGBdID0gbGV2ZWxcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCAnc2V0X3B1bXAnLCB7IHB1bXAsIGxldmVsIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3RhdHVzKCksIDgwMClcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBhc3luYyBzZXRMaWdodChsZXZlbCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/JywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuICAgICAgXG4gICAgICB0aGlzLnN0YXR1cy5wd20zTGV2ZWwgPSBsZXZlbFxuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfbGlnaHQnLCB7IGxldmVsIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3RhdHVzKCksIDgwMClcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBhc3luYyBzZXRBaXJQdW1wKGxldmVsKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSk7IHJldHVybiB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG4gICAgICB0aGlzLnN0YXR1cy5haXJQdW1wTGV2ZWwgPSBsZXZlbFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCAnc2V0X2Fpcl9wdW1wJywgeyBsZXZlbCB9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHsgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKTsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pIH1cbiAgICAgICAgZWxzZSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgICB9IGNhdGNoIChlKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgfSxcbiAgICBcbiAgICBhc3luYyBzZXRGYW4obGV2ZWwpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KTsgcmV0dXJuIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIHRoaXMuc3RhdHVzLmZhbkxldmVsID0gbGV2ZWxcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3NldF9mYW4nLCB7IGxldmVsIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2VzcykgeyBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApOyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSkgfVxuICAgICAgICBlbHNlIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiByZXMubWVzc2FnZSB8fCAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pIH1cbiAgICB9LFxuICAgIFxuICAgIGFzeW5jIHNldFVWKG9uKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSk7IHJldHVybiB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG4gICAgICB0aGlzLnN0YXR1cy51dkxpZ2h0T24gPSBvblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCAnc2V0X3V2JywgeyBvbiB9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHsgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKSB9XG4gICAgICAgIGVsc2UgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgICAgfSBjYXRjaCAoZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgIH0sXG4gICAgXG4gICAgYXN5bmMgc2V0UmVsYXkyKG9uKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSk7IHJldHVybiB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG4gICAgICB0aGlzLnN0YXR1cy5yZWxheTJTdGF0ZSA9IG9uXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfcmVsYXkyJywgeyBvbiB9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHsgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKSB9XG4gICAgICAgIGVsc2UgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgICAgfSBjYXRjaCAoZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgIH0sXG4gICAgXG4gICAgYXN5bmMgdHJpZ2dlclNlcnZvKCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUgfHwgdGhpcy5zdGF0dXMuc2Vydm9Nb3ZpbmcpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/5oiW6Ii15py66L+Q6KGM5LitJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICd0cmlnZ2VyX3NlcnZvJywge30pXG4gICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMuc3RhdHVzLnNlcnZvTW92aW5nID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuc2Vydm9TdGFydFRpbWUgPSBEYXRlLm5vdygpICAvLyDorrDlvZXlkK/liqjml7bpl7RcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfoiLXmnLrlt7LlkK/liqgnLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICflkK/liqjlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5ZCv5Yqo5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBjaGVja1NlcnZvVGltZW91dCgpIHtcbiAgICAgIC8vIOiIteacuui/kOihjOi2hTE156eS6Ieq5Yqo5aSN5L2N77yI6Ii15py65a6M5pW05ZGo5pyf57qmOOenku+8iVxuICAgICAgaWYgKHRoaXMuc3RhdHVzLnNlcnZvTW92aW5nICYmIHRoaXMuc2Vydm9TdGFydFRpbWUgPiAwKSB7XG4gICAgICAgIGNvbnN0IGVsYXBzZWQgPSAoRGF0ZS5ub3coKSAtIHRoaXMuc2Vydm9TdGFydFRpbWUpIC8gMTAwMFxuICAgICAgICBpZiAoZWxhcHNlZCA+IDgpIHtcbiAgICAgICAgICB0aGlzLnN0YXR1cy5zZXJ2b01vdmluZyA9IGZhbHNlXG4gICAgICAgICAgdGhpcy5zZXJ2b1N0YXJ0VGltZSA9IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgYXN5bmMgdG9nZ2xlUG93ZXIoKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IGlzUG93ZXJlZCA9IHRoaXMuc3RhdHVzLnN5c3RlbVBvd2VyZWRcbiAgICAgIGNvbnN0IGNtZCA9IGlzUG93ZXJlZCA/ICdwb3dlcl9vZmYnIDogJ3Bvd2VyX29uJ1xuICAgICAgY29uc3QgY29uZmlybVRleHQgPSBpc1Bvd2VyZWQgPyAn56Gu5a6a6KaB5YWz5py65ZCX77yfXFxu5YWz5py65ZCO6K6+5aSH5L+d5oyB572R57uc6L+e5o6l77yM5Y+v6L+c56iL5byA5py644CCJyA6ICfnoa7lrpropoHlvIDmnLrlkJfvvJ8nXG4gICAgICBcbiAgICAgIHVuaS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+ehruiupOaTjeS9nCcsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpcm1UZXh0LFxuICAgICAgICBzdWNjZXNzOiAobW9kYWxSZXMpID0+IHtcbiAgICAgICAgICBpZiAoIW1vZGFsUmVzLmNvbmZpcm0pIHJldHVyblxuICAgICAgICAgIHRoaXMuZXhlY3V0ZVBvd2VyQ21kKGNtZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIFxuICAgIGFzeW5jIGV4ZWN1dGVQb3dlckNtZChjbWQpIHtcbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgY21kLCB7fSlcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXMuc3lzdGVtUG93ZXJlZCA9IGNtZCA9PT0gJ3Bvd2VyX29uJ1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogY21kID09PSAncG93ZXJfb24nID8gJ+W8gOacuuaIkOWKnycgOiAn5YWz5py65oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgMTAwMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlc3VsdC5tZXNzYWdlIHx8ICfmk43kvZzlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5pON5L2c5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vID09PT09IOWumuaXtuS7u+WKoSA9PT09PVxuICAgIGdldFRhc2tUeXBlTGFiZWwodGltZXIpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRhc2tUeXBlcy5maW5kKHQgPT4gdC5jbWQgPT09IHRpbWVyLmNtZCAmJiBKU09OLnN0cmluZ2lmeSh0LnBhcmFtcykgPT09IEpTT04uc3RyaW5naWZ5KHRpbWVyLnBhcmFtcykpXG4gICAgICByZXR1cm4gdHlwZSA/IHR5cGUubGFiZWwgOiAn5pyq55+l5Lu75YqhJ1xuICAgIH0sXG5cbiAgICBhc3luYyBsb2FkVGltZXJzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0VGltZXJzKHRoaXMuZGV2aWNlS2V5KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MgJiYgcmVzLnRpbWVycykge1xuICAgICAgICAgIHRoaXMudGltZXJzID0gcmVzLnRpbWVyc1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyDpnZnpu5jlpLHotKXvvIzkvb/nlKjnqbrliJfooahcbiAgICAgICAgdGhpcy50aW1lcnMgPSBbXVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvcGVuVGltZXJEaWFsb2codGltZXIpIHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICB0aGlzLmVkaXRpbmdUaW1lciA9IHRpbWVyXG4gICAgICAgIGNvbnN0IHR5cGVJbmRleCA9IHRoaXMudGFza1R5cGVzLmZpbmRJbmRleCh0ID0+IHQuY21kID09PSB0aW1lci5jbWQgJiYgSlNPTi5zdHJpbmdpZnkodC5wYXJhbXMpID09PSBKU09OLnN0cmluZ2lmeSh0aW1lci5wYXJhbXMpKVxuICAgICAgICBjb25zdCBkdXIgPSB0aGlzLmR1cmF0aW9uT3B0aW9ucy5maW5kKGQgPT4gZC52YWx1ZSA9PT0gKHRpbWVyLmR1cmF0aW9uIC8gNjApKVxuICAgICAgICB0aGlzLnRpbWVyRm9ybSA9IHtcbiAgICAgICAgICBpZDogdGltZXIuaWQsXG4gICAgICAgICAgbmFtZTogdGltZXIubmFtZSxcbiAgICAgICAgICBob3VyOiB0aW1lci5ob3VyLFxuICAgICAgICAgIG1pbnV0ZTogdGltZXIubWludXRlLFxuICAgICAgICAgIHR5cGU6IHR5cGVJbmRleCA+PSAwID8gdHlwZUluZGV4IDogMCxcbiAgICAgICAgICBjbWQ6IHRpbWVyLmNtZCxcbiAgICAgICAgICBwYXJhbXM6IHRpbWVyLnBhcmFtcyxcbiAgICAgICAgICBkdXJhdGlvbjogdGltZXIuZHVyYXRpb24gLyA2MCwgLy8g6L2s5Li65YiG6ZKfXG4gICAgICAgICAgZHVyYXRpb25MYWJlbDogZHVyID8gZHVyLmxhYmVsIDogJ+S4jeWBnOatoidcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nVGltZXIgPSBudWxsXG4gICAgICAgIHRoaXMudGltZXJGb3JtID0ge1xuICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICBob3VyOiA4LFxuICAgICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgICB0eXBlOiAwLFxuICAgICAgICAgIGNtZDogJ3RyaWdnZXJfc2Vydm8nLFxuICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgZHVyYXRpb25MYWJlbDogJ+S4jeWBnOatoidcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy50aW1lckRpYWxvZ1Zpc2libGUgPSB0cnVlXG4gICAgfSxcblxuICAgIGNsb3NlVGltZXJEaWFsb2coKSB7XG4gICAgICB0aGlzLnRpbWVyRGlhbG9nVmlzaWJsZSA9IGZhbHNlXG4gICAgICB0aGlzLmVkaXRpbmdUaW1lciA9IG51bGxcbiAgICB9LFxuXG4gICAgb25UaW1lQ2hhbmdlKGUpIHtcbiAgICAgIGNvbnN0IHZhbHMgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy50aW1lckZvcm0uaG91ciA9IHBhcnNlSW50KHZhbHNbMF0pXG4gICAgICB0aGlzLnRpbWVyRm9ybS5taW51dGUgPSBwYXJzZUludCh2YWxzWzFdKVxuICAgIH0sXG5cbiAgICBvblRhc2tUeXBlQ2hhbmdlKGUpIHtcbiAgICAgIGNvbnN0IGlkeCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLnRpbWVyRm9ybS50eXBlID0gaWR4XG4gICAgICBjb25zdCB0eXBlID0gdGhpcy50YXNrVHlwZXNbaWR4XVxuICAgICAgdGhpcy50aW1lckZvcm0uY21kID0gdHlwZS5jbWRcbiAgICAgIHRoaXMudGltZXJGb3JtLnBhcmFtcyA9IHsgLi4udHlwZS5wYXJhbXMgfVxuICAgIH0sXG5cbiAgICBvbkR1cmF0aW9uQ2hhbmdlKGUpIHtcbiAgICAgIGNvbnN0IGlkeCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICBjb25zdCBvcHQgPSB0aGlzLmR1cmF0aW9uT3B0aW9uc1tpZHhdXG4gICAgICB0aGlzLnRpbWVyRm9ybS5kdXJhdGlvbiA9IG9wdC52YWx1ZVxuICAgICAgdGhpcy50aW1lckZvcm0uZHVyYXRpb25MYWJlbCA9IG9wdC5sYWJlbFxuICAgIH0sXG5cbiAgICBjb25maXJtVGltZXIoKSB7XG4gICAgICBpZiAoIXRoaXMudGltZXJGb3JtLm5hbWUudHJpbSgpKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+ivt+i+k+WFpeS7u+WKoeWQjeensCcsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgdGltZXJEYXRhID0ge1xuICAgICAgICBpZDogdGhpcy50aW1lckZvcm0uaWQgfHwgJ3RpbWVyXycgKyBEYXRlLm5vdygpICsgJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDYpLFxuICAgICAgICBuYW1lOiB0aGlzLnRpbWVyRm9ybS5uYW1lLnRyaW0oKSxcbiAgICAgICAgaG91cjogdGhpcy50aW1lckZvcm0uaG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLnRpbWVyRm9ybS5taW51dGUsXG4gICAgICAgIHR5cGU6IHRoaXMudGltZXJGb3JtLnR5cGUsXG4gICAgICAgIGNtZDogdGhpcy50aW1lckZvcm0uY21kLFxuICAgICAgICBwYXJhbXM6IHRoaXMudGltZXJGb3JtLnBhcmFtcyxcbiAgICAgICAgZHVyYXRpb246IHRoaXMudGltZXJGb3JtLmR1cmF0aW9uICogNjAsIC8vIOi9rOS4uuenklxuICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVkaXRpbmdUaW1lcikge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnRpbWVycy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0aGlzLmVkaXRpbmdUaW1lci5pZClcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy50aW1lcnNbaWR4XSA9IHRpbWVyRGF0YVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbWVycy5wdXNoKHRpbWVyRGF0YSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9zZVRpbWVyRGlhbG9nKClcbiAgICAgIHRoaXMuc2F2ZUFsbFRpbWVycygpXG4gICAgfSxcblxuICAgIGFzeW5jIGhhbmRsZURlbGV0ZVRpbWVyKHRpbWVyKSB7XG4gICAgICB1bmkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfnoa7orqTliKDpmaQnLFxuICAgICAgICBjb250ZW50OiAn56Gu5a6a6KaB5Yig6Zmk5a6a5pe25Lu75YqhXCInICsgdGltZXIubmFtZSArICdcIuWQl++8nycsXG4gICAgICAgIHN1Y2Nlc3M6IGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRlbGV0ZVRpbWVyQXBpKHRoaXMuZGV2aWNlS2V5LCB0aW1lci5pZClcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lcnMgPSB0aGlzLnRpbWVycy5maWx0ZXIodCA9PiB0LmlkICE9PSB0aW1lci5pZClcbiAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfliKDpmaTmiJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlc3VsdC5tZXNzYWdlIHx8ICfliKDpmaTlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfliKDpmaTlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIHRvZ2dsZVRpbWVyKHRpbWVyKSB7XG4gICAgICB0aW1lci5lbmFibGVkID0gIXRpbWVyLmVuYWJsZWRcbiAgICAgIHRoaXMuc2F2ZUFsbFRpbWVycygpXG4gICAgfSxcblxuICAgIGFzeW5jIHNhdmVBbGxUaW1lcnMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBzYXZlVGltZXJzKHRoaXMuZGV2aWNlS2V5LCB0aGlzLnRpbWVycylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+S/neWtmOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!**************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/fish-one.vue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fish_one_vue_vue_type_template_id_35f7cfa8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish-one.vue?vue&type=template&id=35f7cfa8&mpType=page */ 30);\n/* harmony import */ var _fish_one_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish-one.vue?vue&type=script&lang=js&mpType=page */ 32);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fish_one_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fish_one_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _fish_one_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _fish_one_vue_vue_type_template_id_35f7cfa8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _fish_one_vue_vue_type_template_id_35f7cfa8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _fish_one_vue_vue_type_template_id_35f7cfa8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/control/fish-one.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2Zpc2gtb25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNWY3Y2ZhOCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZmlzaC1vbmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zpc2gtb25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NvbnRyb2wvZmlzaC1vbmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/fish-one.vue?vue&type=template&id=35f7cfa8&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_one_vue_vue_type_template_id_35f7cfa8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./fish-one.vue?vue&type=template&id=35f7cfa8&mpType=page */ 31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_one_vue_vue_type_template_id_35f7cfa8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_one_vue_vue_type_template_id_35f7cfa8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_one_vue_vue_type_template_id_35f7cfa8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_one_vue_vue_type_template_id_35f7cfa8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 31 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/fish-one.vue?vue&type=template&id=35f7cfa8&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "control-page"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "status-header"),
          class: _vm._$s(1, "c", { offline: !_vm.status.online }),
          attrs: { _i: 1 },
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "status-row"), attrs: { _i: 2 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(3, "sc", "status-left"),
                  attrs: { _i: 3 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(4, "sc", "status-indicator"),
                      attrs: { _i: 4 },
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(5, "sc", "indicator-dot"),
                        attrs: { _i: 5 },
                      }),
                      _c("text", [
                        _vm._v(
                          _vm._$s(
                            6,
                            "t0-0",
                            _vm._s(_vm.status.online ? "在线" : "离线")
                          )
                        ),
                      ]),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(7, "sc", "device-key"),
                      attrs: { _i: 7 },
                    },
                    [_vm._v(_vm._$s(7, "t0-0", _vm._s(_vm.deviceKey)))]
                  ),
                ]
              ),
              _c(
                "text",
                {
                  staticClass: _vm._$s(8, "sc", "model-info-header"),
                  attrs: { _i: 8 },
                },
                [_vm._v(_vm._$s(8, "t0-0", _vm._s(_vm.deviceModel)))]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(9, "sc", "sensor-section"), attrs: { _i: 9 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "sensor-grid two-col"),
              attrs: { _i: 10 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(11, "sc", "sensor-item"),
                  attrs: { _i: 11 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(12, "sc", "sensor-icon"),
                    attrs: { _i: 12 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(13, "sc", "sensor-label"),
                    attrs: { _i: 13 },
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(14, "sc", "sensor-value"),
                      attrs: { _i: 14 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          14,
                          "t0-0",
                          _vm._s(_vm.status.waterTemperature.toFixed(1))
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(15, "sc", "sensor-item"),
                  attrs: { _i: 15 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(16, "sc", "sensor-icon"),
                    attrs: { _i: 16 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(17, "sc", "sensor-label"),
                    attrs: { _i: 17 },
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(18, "sc", "sensor-value"),
                      attrs: { _i: 18 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          18,
                          "t0-0",
                          _vm._s(parseInt(_vm.status.tdsValue))
                        )
                      ),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(19, "sc", "wq-tag"),
                          class: _vm._$s(19, "c", _vm.waterQualityClass),
                          attrs: { _i: 19 },
                        },
                        [
                          _vm._v(
                            _vm._$s(19, "t0-0", _vm._s(_vm.waterQualityText))
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(20, "sc", "big-btn-section"),
          attrs: { _i: 20 },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(21, "sc", "big-btn-row"),
              attrs: { _i: 21 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(22, "sc", "big-btn-wrapper"),
                  attrs: { _i: 22 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(23, "sc", "big-btn"),
                      class: _vm._$s(
                        23,
                        "c",
                        _vm.status.systemPowered ? "power-on" : "power-off"
                      ),
                      attrs: { _i: 23 },
                      on: { click: _vm.togglePower },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(24, "sc", "big-btn-icon"),
                        attrs: { _i: 24 },
                      }),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(25, "sc", "big-btn-label"),
                          attrs: { _i: 25 },
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              25,
                              "t0-0",
                              _vm._s(_vm.status.systemPowered ? "开机" : "关机")
                            )
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(26, "sc", "big-btn-wrapper"),
                  attrs: { _i: 26 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(27, "sc", "big-btn feed-btn"),
                      class: _vm._$s(27, "c", { busy: _vm.status.servoMoving }),
                      attrs: { _i: 27 },
                      on: { click: _vm.triggerServo },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(28, "sc", "big-btn-icon"),
                        attrs: { _i: 28 },
                      }),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(29, "sc", "big-btn-label"),
                          attrs: { _i: 29 },
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              29,
                              "t0-0",
                              _vm._s(_vm.status.servoMoving ? "运行中" : "喂食")
                            )
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(30, "sc", "control-section"),
          attrs: { _i: 30 },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(31, "sc", "control-card"),
              attrs: { _i: 31 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(32, "sc", "control-header"),
                  attrs: { _i: 32 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(33, "sc", "control-name"),
                      attrs: { _i: 33 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("pump1", "水泵1")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          33,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("pump1", "水泵1"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(34, "sc", "control-value"),
                      attrs: { _i: 34 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          34,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.pwm1Level])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(35, "sc", "pump-controls"),
                  attrs: { _i: 35 },
                },
                _vm._l(
                  _vm._$s(36, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $20, $30) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(36, "f", { forIndex: $20, key: index }),
                        staticClass: _vm._$s("36-" + $30, "sc", "level-btn"),
                        class: _vm._$s("36-" + $30, "c", {
                          active: _vm.status.pwm1Level === index,
                        }),
                        attrs: { _i: "36-" + $30 },
                        on: {
                          click: function ($event) {
                            return _vm.setPump(1, index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("36-" + $30, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(37, "sc", "control-card"),
              attrs: { _i: 37 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(38, "sc", "control-header"),
                  attrs: { _i: 38 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(39, "sc", "control-name"),
                      attrs: { _i: 39 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("pump2", "水泵2")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          39,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("pump2", "水泵2"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(40, "sc", "control-value"),
                      attrs: { _i: 40 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          40,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.pwm2Level])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(41, "sc", "pump-controls"),
                  attrs: { _i: 41 },
                },
                _vm._l(
                  _vm._$s(42, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $21, $31) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(42, "f", { forIndex: $21, key: index }),
                        staticClass: _vm._$s("42-" + $31, "sc", "level-btn"),
                        class: _vm._$s("42-" + $31, "c", {
                          active: _vm.status.pwm2Level === index,
                        }),
                        attrs: { _i: "42-" + $31 },
                        on: {
                          click: function ($event) {
                            return _vm.setPump(2, index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("42-" + $31, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(43, "sc", "control-card"),
              attrs: { _i: 43 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(44, "sc", "control-header"),
                  attrs: { _i: 44 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(45, "sc", "control-name"),
                      attrs: { _i: 45 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("airPump", "氧气泵")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          45,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("airPump", "氧气泵"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(46, "sc", "control-value"),
                      attrs: { _i: 46 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          46,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.airPumpLevel || 0])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(47, "sc", "pump-controls"),
                  attrs: { _i: 47 },
                },
                _vm._l(
                  _vm._$s(48, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $22, $32) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(48, "f", {
                          forIndex: $22,
                          key: "air" + index,
                        }),
                        staticClass: _vm._$s("48-" + $32, "sc", "level-btn"),
                        class: _vm._$s("48-" + $32, "c", {
                          active: (_vm.status.airPumpLevel || 0) === index,
                        }),
                        attrs: { _i: "48-" + $32 },
                        on: {
                          click: function ($event) {
                            return _vm.setAirPump(index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("48-" + $32, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(49, "sc", "control-card"),
              attrs: { _i: 49 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(50, "sc", "control-header"),
                  attrs: { _i: 50 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(51, "sc", "control-name"),
                      attrs: { _i: 51 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("fan", "风扇")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          51,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("fan", "风扇"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(52, "sc", "control-value"),
                      attrs: { _i: 52 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          52,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.fanLevel || 0])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(53, "sc", "pump-controls"),
                  attrs: { _i: 53 },
                },
                _vm._l(
                  _vm._$s(54, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $23, $33) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(54, "f", {
                          forIndex: $23,
                          key: "fan" + index,
                        }),
                        staticClass: _vm._$s("54-" + $33, "sc", "level-btn"),
                        class: _vm._$s("54-" + $33, "c", {
                          active: (_vm.status.fanLevel || 0) === index,
                        }),
                        attrs: { _i: "54-" + $33 },
                        on: {
                          click: function ($event) {
                            return _vm.setFan(index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("54-" + $33, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(55, "sc", "control-card"),
              attrs: { _i: 55 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(56, "sc", "control-header"),
                  attrs: { _i: 56 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(57, "sc", "control-name"),
                      attrs: { _i: 57 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("light", "灯光")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          57,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("light", "灯光"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(58, "sc", "control-value"),
                      attrs: { _i: 58 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          58,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.pwm3Level])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(59, "sc", "pump-controls"),
                  attrs: { _i: 59 },
                },
                _vm._l(
                  _vm._$s(60, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $24, $34) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(60, "f", {
                          forIndex: $24,
                          key: "light" + index,
                        }),
                        staticClass: _vm._$s("60-" + $34, "sc", "level-btn"),
                        class: _vm._$s("60-" + $34, "c", {
                          active: _vm.status.pwm3Level === index,
                        }),
                        attrs: { _i: "60-" + $34 },
                        on: {
                          click: function ($event) {
                            return _vm.setLight(index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("60-" + $34, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(61, "sc", "control-section"),
          attrs: { _i: 61 },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(62, "sc", "switch-card"),
              attrs: { _i: 62 },
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(63, "sc", "switch-label"),
                  attrs: { _i: 63 },
                  on: {
                    click: function ($event) {
                      return _vm.startRename("uv", "UV灯")
                    },
                  },
                },
                [
                  _vm._v(
                    _vm._$s(63, "t0-0", _vm._s(_vm.getCtrlName("uv", "UV灯")))
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(64, "sc", "custom-switch"),
                  class: _vm._$s(64, "c", _vm.status.uvLightOn ? "on" : "off"),
                  attrs: { _i: 64 },
                  on: {
                    click: function ($event) {
                      return _vm.setUV(!_vm.status.uvLightOn)
                    },
                  },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(65, "sc", "custom-switch-knob"),
                    attrs: { _i: 65 },
                  }),
                ]
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(66, "sc", "switch-card"),
              attrs: { _i: 66 },
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(67, "sc", "switch-label"),
                  attrs: { _i: 67 },
                  on: {
                    click: function ($event) {
                      return _vm.startRename("relay2", "备用开关")
                    },
                  },
                },
                [
                  _vm._v(
                    _vm._$s(
                      67,
                      "t0-0",
                      _vm._s(_vm.getCtrlName("relay2", "备用开关"))
                    )
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(68, "sc", "custom-switch"),
                  class: _vm._$s(
                    68,
                    "c",
                    _vm.status.relay2State ? "on" : "off"
                  ),
                  attrs: { _i: 68 },
                  on: {
                    click: function ($event) {
                      return _vm.setRelay2(!_vm.status.relay2State)
                    },
                  },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(69, "sc", "custom-switch-knob"),
                    attrs: { _i: 69 },
                  }),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(70, "sc", "control-section"),
          attrs: { _i: 70 },
        },
        [
          _c("view", {
            staticClass: _vm._$s(71, "sc", "section-title"),
            attrs: { _i: 71 },
          }),
          _vm._$s(72, "i", _vm.timers.length === 0)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(72, "sc", "empty-tip"),
                  attrs: { _i: 72 },
                },
                [_c("text")]
              )
            : _vm._e(),
          _vm._l(
            _vm._$s(74, "f", { forItems: _vm.timers }),
            function (timer, index, $25, $35) {
              return _c(
                "view",
                {
                  key: _vm._$s(74, "f", { forIndex: $25, key: timer.id }),
                  staticClass: _vm._$s("74-" + $35, "sc", "timer-card"),
                  attrs: { _i: "74-" + $35 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(
                        "75-" + $35,
                        "sc",
                        "timer-card-left"
                      ),
                      attrs: { _i: "75-" + $35 },
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            "76-" + $35,
                            "sc",
                            "timer-card-top"
                          ),
                          attrs: { _i: "76-" + $35 },
                        },
                        [
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                "77-" + $35,
                                "sc",
                                "timer-name"
                              ),
                              attrs: { _i: "77-" + $35 },
                            },
                            [
                              _vm._v(
                                _vm._$s("77-" + $35, "t0-0", _vm._s(timer.name))
                              ),
                            ]
                          ),
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                "78-" + $35,
                                "sc",
                                "timer-time"
                              ),
                              attrs: { _i: "78-" + $35 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "78-" + $35,
                                  "t0-0",
                                  _vm._s(("0" + timer.hour).slice(-2))
                                ) +
                                  _vm._$s(
                                    "78-" + $35,
                                    "t0-1",
                                    _vm._s(("0" + timer.minute).slice(-2))
                                  )
                              ),
                            ]
                          ),
                        ]
                      ),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s("79-" + $35, "sc", "timer-desc"),
                          attrs: { _i: "79-" + $35 },
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              "79-" + $35,
                              "t0-0",
                              _vm._s(_vm.getTaskTypeLabel(timer))
                            )
                          ),
                        ]
                      ),
                      _vm._$s(
                        "80-" + $35,
                        "i",
                        timer.duration > 0 && timer.cmd !== "trigger_servo"
                      )
                        ? _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                "80-" + $35,
                                "sc",
                                "timer-duration"
                              ),
                              attrs: { _i: "80-" + $35 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "80-" + $35,
                                  "t0-0",
                                  _vm._s(timer.duration / 60)
                                )
                              ),
                            ]
                          )
                        : _vm._e(),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(
                        "81-" + $35,
                        "sc",
                        "timer-card-right"
                      ),
                      attrs: { _i: "81-" + $35 },
                    },
                    [
                      _c("switch", {
                        attrs: {
                          checked: _vm._$s(
                            "82-" + $35,
                            "a-checked",
                            timer.enabled
                          ),
                          _i: "82-" + $35,
                        },
                        on: {
                          change: function ($event) {
                            return _vm.toggleTimer(timer)
                          },
                        },
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            "83-" + $35,
                            "sc",
                            "timer-actions"
                          ),
                          attrs: { _i: "83-" + $35 },
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(
                              "84-" + $35,
                              "sc",
                              "timer-edit"
                            ),
                            attrs: { _i: "84-" + $35 },
                            on: {
                              click: function ($event) {
                                return _vm.openTimerDialog(timer)
                              },
                            },
                          }),
                          _c("text", {
                            staticClass: _vm._$s(
                              "85-" + $35,
                              "sc",
                              "timer-delete"
                            ),
                            attrs: { _i: "85-" + $35 },
                            on: {
                              click: function ($event) {
                                return _vm.handleDeleteTimer(timer)
                              },
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ]
              )
            }
          ),
          _c("button", {
            staticClass: _vm._$s(86, "sc", "add-timer-btn"),
            attrs: { _i: 86 },
            on: {
              click: function ($event) {
                return _vm.openTimerDialog(null)
              },
            },
          }),
        ],
        2
      ),
      _c(
        "view",
        { staticClass: _vm._$s(87, "sc", "bottom-bar"), attrs: { _i: 87 } },
        [
          _c(
            "text",
            {
              staticClass: _vm._$s(88, "sc", "refresh-time"),
              attrs: { _i: 88 },
            },
            [_vm._v(_vm._$s(88, "t0-0", _vm._s(_vm.lastUpdateTime)))]
          ),
          _c("button", {
            staticClass: _vm._$s(89, "sc", "refresh-btn"),
            attrs: { _i: 89 },
            on: { click: _vm.refreshStatus },
          }),
        ]
      ),
      _vm._$s(90, "i", _vm.timerDialogVisible)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(90, "sc", "dialog-overlay"),
              attrs: { _i: 90 },
              on: { click: _vm.closeTimerDialog },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(91, "sc", "dialog-box timer-dialog"),
                  attrs: { _i: 91 },
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                    },
                  },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(92, "sc", "dialog-title"),
                      attrs: { _i: 92 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          92,
                          "t0-0",
                          _vm._s(_vm.editingTimer ? "编辑任务" : "添加任务")
                        )
                      ),
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(93, "sc", "timer-form-label"),
                    attrs: { _i: 93 },
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.timerForm.name,
                        expression: "timerForm.name",
                      },
                    ],
                    staticClass: _vm._$s(94, "sc", "dialog-input"),
                    attrs: { _i: 94 },
                    domProps: {
                      value: _vm._$s(94, "v-model", _vm.timerForm.name),
                    },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.timerForm, "name", $event.target.value)
                      },
                    },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(95, "sc", "timer-form-label"),
                    attrs: { _i: 95 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(96, "sc", "timer-picker-row"),
                      attrs: { _i: 96 },
                    },
                    [
                      _c(
                        "picker",
                        {
                          attrs: {
                            range: _vm._$s(97, "a-range", [
                              _vm.hours,
                              _vm.minutes,
                            ]),
                            _i: 97,
                          },
                          on: { change: _vm.onTimeChange },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(98, "sc", "timer-picker"),
                              attrs: { _i: 98 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  98,
                                  "t0-0",
                                  _vm._s(("0" + _vm.timerForm.hour).slice(-2))
                                ) +
                                  _vm._$s(
                                    98,
                                    "t0-1",
                                    _vm._s(
                                      ("0" + _vm.timerForm.minute).slice(-2)
                                    )
                                  )
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(99, "sc", "timer-form-label"),
                    attrs: { _i: 99 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(100, "sc", "timer-picker-row"),
                      attrs: { _i: 100 },
                    },
                    [
                      _c(
                        "picker",
                        {
                          attrs: {
                            range: _vm._$s(101, "a-range", _vm.taskTypeLabels),
                            _i: 101,
                          },
                          on: { change: _vm.onTaskTypeChange },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(102, "sc", "timer-picker"),
                              attrs: { _i: 102 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  102,
                                  "t0-0",
                                  _vm._s(_vm.taskTypeLabels[_vm.timerForm.type])
                                )
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(103, "sc", "timer-form-label"),
                    attrs: { _i: 103 },
                  }),
                  _vm._$s(
                    104,
                    "i",
                    _vm.taskTypes[_vm.timerForm.type].cmd === "trigger_servo"
                  )
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(104, "sc", "timer-picker-row"),
                          attrs: { _i: 104 },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(105, "sc", "timer-picker"),
                              attrs: { _i: 105 },
                            },
                            [_c("text")]
                          ),
                        ]
                      )
                    : _c(
                        "view",
                        {
                          staticClass: _vm._$s(107, "sc", "timer-picker-row"),
                          attrs: { _i: 107 },
                        },
                        [
                          _c(
                            "picker",
                            {
                              attrs: {
                                range: _vm._$s(
                                  108,
                                  "a-range",
                                  _vm.durationLabels
                                ),
                                _i: 108,
                              },
                              on: { change: _vm.onDurationChange },
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    109,
                                    "sc",
                                    "timer-picker"
                                  ),
                                  attrs: { _i: 109 },
                                },
                                [
                                  _vm._v(
                                    _vm._$s(
                                      109,
                                      "t0-0",
                                      _vm._s(_vm.timerForm.durationLabel)
                                    )
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(110, "sc", "dialog-buttons"),
                      attrs: { _i: 110 },
                    },
                    [
                      _c("button", {
                        staticClass: _vm._$s(
                          111,
                          "sc",
                          "dialog-btn dialog-cancel"
                        ),
                        attrs: { _i: 111 },
                        on: { click: _vm.closeTimerDialog },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(
                          112,
                          "sc",
                          "dialog-btn dialog-confirm"
                        ),
                        attrs: { _i: 112 },
                        on: { click: _vm.confirmTimer },
                      }),
                    ]
                  ),
                ]
              ),
            ]
          )
        : _vm._e(),
      _vm._$s(113, "i", _vm.renameVisible)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(113, "sc", "dialog-overlay"),
              attrs: { _i: 113 },
              on: { click: _vm.cancelRename },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(114, "sc", "dialog-box"),
                  attrs: { _i: 114 },
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                    },
                  },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(115, "sc", "dialog-title"),
                    attrs: { _i: 115 },
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.renameValue,
                        expression: "renameValue",
                      },
                    ],
                    staticClass: _vm._$s(116, "sc", "dialog-input"),
                    attrs: { _i: 116 },
                    domProps: {
                      value: _vm._$s(116, "v-model", _vm.renameValue),
                    },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.renameValue = $event.target.value
                      },
                    },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(117, "sc", "dialog-buttons"),
                      attrs: { _i: 117 },
                    },
                    [
                      _c("button", {
                        staticClass: _vm._$s(
                          118,
                          "sc",
                          "dialog-btn dialog-cancel"
                        ),
                        attrs: { _i: 118 },
                        on: { click: _vm.cancelRename },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(
                          119,
                          "sc",
                          "dialog-btn dialog-confirm"
                        ),
                        attrs: { _i: 119 },
                        on: { click: _vm.confirmRename },
                      }),
                    ]
                  ),
                ]
              ),
            ]
          )
        : _vm._e(),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 32 */
/*!**************************************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/fish-one.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_one_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./fish-one.vue?vue&type=script&lang=js&mpType=page */ 33);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_one_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_one_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_one_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_one_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_one_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJqQixDQUFnQix5a0JBQUcsRUFBQyIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zpc2gtb25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maXNoLW9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/fish-one.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _api = __webpack_require__(/*! @/utils/api */ 16);\nvar _storage = __webpack_require__(/*! @/utils/storage */ 15);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = {\n  data: function data() {\n    return {\n      deviceKey: '',\n      deviceModel: '',\n      status: {\n        online: false,\n        pwm1Level: 0,\n        pwm2Level: 0,\n        pwm3Level: 0,\n        airPumpLevel: 0,\n        fanLevel: 0,\n        uvLightOn: false,\n        relay1State: false,\n        relay2State: false,\n        servoMoving: false,\n        adcWQVoltage: 0,\n        adcTempVoltage: 0,\n        tdsValue: 0,\n        waterTemperature: 0,\n        systemPowered: true\n      },\n      pumpLevels: ['关', '一档', '二档', '三档'],\n      lastUpdateTime: '',\n      timer: null,\n      renameVisible: false,\n      renameValue: '',\n      renameTarget: '',\n      renameDefault: '',\n      ws: null,\n      wsConnected: false,\n      wsReconnectTimer: null,\n      servoTimer: null,\n      servoStartTime: 0,\n      lastClickTime: 0,\n      // 定时任务\n      timers: [],\n      timerDialogVisible: false,\n      editingTimer: null,\n      timerForm: {\n        id: '',\n        name: '',\n        hour: 8,\n        minute: 0,\n        type: 0,\n        cmd: 'trigger_servo',\n        params: {},\n        duration: 0,\n        durationLabel: '不停止'\n      },\n      hours: Array.from({\n        length: 24\n      }, function (_, i) {\n        return ('0' + i).slice(-2);\n      }),\n      minutes: Array.from({\n        length: 60\n      }, function (_, i) {\n        return ('0' + i).slice(-2);\n      }),\n      taskTypes: [{\n        label: '喂鱼（舵机）',\n        cmd: 'trigger_servo',\n        params: {}\n      }, {\n        label: '换水1档（水泵1 level=1）',\n        cmd: 'set_pump',\n        params: {\n          pump: 1,\n          level: 1\n        }\n      }, {\n        label: '换水2档（水泵1 level=2）',\n        cmd: 'set_pump',\n        params: {\n          pump: 1,\n          level: 2\n        }\n      }, {\n        label: '换水3档（水泵1 level=3）',\n        cmd: 'set_pump',\n        params: {\n          pump: 1,\n          level: 3\n        }\n      }, {\n        label: '加气1档（气泵 level=1）',\n        cmd: 'set_air_pump',\n        params: {\n          level: 1\n        }\n      }, {\n        label: '加气2档（气泵 level=2）',\n        cmd: 'set_air_pump',\n        params: {\n          level: 2\n        }\n      }, {\n        label: '加气3档（气泵 level=3）',\n        cmd: 'set_air_pump',\n        params: {\n          level: 3\n        }\n      }, {\n        label: '开灯1档（灯条 level=1）',\n        cmd: 'set_light',\n        params: {\n          level: 1\n        }\n      }, {\n        label: '开灯2档（level=2）',\n        cmd: 'set_light',\n        params: {\n          level: 2\n        }\n      }, {\n        label: '开灯3档（level=3）',\n        cmd: 'set_light',\n        params: {\n          level: 3\n        }\n      }, {\n        label: '风扇1档',\n        cmd: 'set_fan',\n        params: {\n          level: 1\n        }\n      }, {\n        label: '风扇2档',\n        cmd: 'set_fan',\n        params: {\n          level: 2\n        }\n      }, {\n        label: '风扇3档',\n        cmd: 'set_fan',\n        params: {\n          level: 3\n        }\n      }],\n      durationOptions: [{\n        label: '不停止',\n        value: 0\n      }, {\n        label: '1分钟',\n        value: 1\n      }, {\n        label: '5分钟',\n        value: 5\n      }, {\n        label: '10分钟',\n        value: 10\n      }, {\n        label: '30分钟',\n        value: 30\n      }, {\n        label: '60分钟',\n        value: 60\n      }]\n    };\n  },\n  computed: {\n    taskTypeLabels: function taskTypeLabels() {\n      return this.taskTypes.map(function (t) {\n        return t.label;\n      });\n    },\n    durationLabels: function durationLabels() {\n      return this.durationOptions.map(function (d) {\n        return d.label;\n      });\n    },\n    waterQualityText: function waterQualityText() {\n      var v = this.status.tdsValue || 0;\n      if (v < 150) return '优';\n      if (v < 200) return '良';\n      if (v < 400) return '中';\n      return '差';\n    },\n    waterQualityClass: function waterQualityClass() {\n      var v = this.status.tdsValue || 0;\n      if (v < 150) return 'wq-excellent';\n      if (v < 200) return 'wq-good';\n      if (v < 400) return 'wq-fair';\n      return 'wq-poor';\n    }\n  },\n  onLoad: function onLoad(options) {\n    var _this = this;\n    this.deviceKey = options.device_key || '';\n    if (!this.deviceKey) {\n      uni.showToast({\n        title: '设备参数错误',\n        icon: 'none'\n      });\n      return;\n    }\n    this.loadStatus();\n    this.loadTimers();\n\n    // 连接 WebSocket 接收实时推送\n    this.connectWS();\n\n    // 进入页面自动请求最新状态\n    (0, _api.requestDeviceStatus)(this.deviceKey).then(function () {\n      setTimeout(function () {\n        return _this.loadStatus();\n      }, 800);\n    });\n\n    // 10秒轮询\n    this.timer = setInterval(function () {\n      _this.loadStatus();\n      _this.checkServoTimeout();\n    }, 10000);\n\n    // 舵机超时检测\n    this.servoTimer = setInterval(function () {\n      _this.checkServoTimeout();\n    }, 2000);\n  },\n  onUnload: function onUnload() {\n    if (this.timer) {\n      clearInterval(this.timer);\n    }\n    if (this.servoTimer) {\n      clearInterval(this.servoTimer);\n    }\n    this.disconnectWS();\n  },\n  methods: {\n    getCtrlName: function getCtrlName(target, defaultName) {\n      var key = 'ctrl_name_' + this.deviceKey + '_' + target;\n      var name = uni.getStorageSync(key);\n      return name || defaultName;\n    },\n    checkRateLimit: function checkRateLimit() {\n      var now = Date.now();\n      if (now - this.lastClickTime < 1000) {\n        uni.showToast({\n          title: '操作过快，慢点哟',\n          icon: 'none'\n        });\n        return false;\n      }\n      this.lastClickTime = now;\n      return true;\n    },\n    startRename: function startRename(target, defaultName) {\n      this.renameTarget = target;\n      this.renameDefault = defaultName;\n      this.renameValue = this.getCtrlName(target, defaultName);\n      if (this.renameValue === defaultName) {\n        this.renameValue = '';\n      }\n      this.renameVisible = true;\n    },\n    cancelRename: function cancelRename() {\n      this.renameVisible = false;\n      this.renameTarget = '';\n      this.renameValue = '';\n    },\n    confirmRename: function confirmRename() {\n      if (!this.renameTarget) return;\n      var key = 'ctrl_name_' + this.deviceKey + '_' + this.renameTarget;\n      if (this.renameValue && this.renameValue.trim()) {\n        uni.setStorageSync(key, this.renameValue.trim());\n        uni.showToast({\n          title: '重命名成功',\n          icon: 'success'\n        });\n      } else {\n        uni.removeStorageSync(key);\n        uni.showToast({\n          title: '已恢复默认名称',\n          icon: 'none'\n        });\n      }\n      this.cancelRename();\n    },\n    // ===== WebSocket 实时推送 =====\n    getWSBaseURL: function getWSBaseURL() {\n      try {\n        if (window && window.location) {\n          return \"ws://\".concat(window.location.host);\n        }\n      } catch (e) {}\n      return 'ws://112.124.107.159:7965';\n    },\n    connectWS: function connectWS() {\n      var _this2 = this;\n      if (this.ws) return;\n      var phone = (0, _storage.getPhoneNumber)();\n      if (!phone) return;\n      try {\n        var baseUrl = this.getWSBaseURL();\n        this.ws = uni.connectSocket({\n          url: \"\".concat(baseUrl, \"/ws/client\"),\n          success: function success() {}\n        });\n        this.ws.onOpen(function () {\n          _this2.wsConnected = true;\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'auth',\n              phone: phone\n            })\n          });\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'subscribe',\n              device_key: _this2.deviceKey\n            })\n          });\n        });\n        this.ws.onMessage(function (res) {\n          try {\n            var msg = JSON.parse(res.data);\n            if (msg.type === 'device_status' && msg.device_key === _this2.deviceKey) {\n              _this2.updateStatusFromWS(msg);\n            }\n          } catch (e) {}\n        });\n        this.ws.onClose(function () {\n          _this2.wsConnected = false;\n          _this2.ws = null;\n          if (!_this2.wsReconnectTimer) {\n            _this2.wsReconnectTimer = setTimeout(function () {\n              _this2.wsReconnectTimer = null;\n              _this2.connectWS();\n            }, 3000);\n          }\n        });\n        this.ws.onError(function () {\n          _this2.wsConnected = false;\n        });\n      } catch (e) {\n        __f__(\"log\", 'WebSocket连接失败，使用HTTP轮询', e, \" at pages/control/fish-one.vue:516\");\n      }\n    },\n    disconnectWS: function disconnectWS() {\n      if (this.wsReconnectTimer) {\n        clearTimeout(this.wsReconnectTimer);\n        this.wsReconnectTimer = null;\n      }\n      if (this.ws) {\n        this.ws.close();\n        this.ws = null;\n        this.wsConnected = false;\n      }\n    },\n    updateStatusFromWS: function updateStatusFromWS(msg) {\n      var s = msg.status || {};\n      var moving = s.servoMoving || false;\n      if (moving && !this.servoStartTime) {\n        this.servoStartTime = Date.now();\n      }\n      if (!moving) {\n        this.servoStartTime = 0;\n      }\n      this.status = {\n        online: msg.online || false,\n        pwm1Level: s.pwm1Level || 0,\n        pwm2Level: s.pwm2Level || 0,\n        pwm3Level: s.pwm3Level || 0,\n        airPumpLevel: s.airPumpLevel || 0,\n        fanLevel: s.fanLevel || 0,\n        uvLightOn: s.uvLightOn || false,\n        relay1State: s.relay1State || false,\n        relay2State: s.relay2State || false,\n        servoMoving: s.servoMoving || false,\n        adcWQVoltage: s.adcWQVoltage || 0,\n        adcTempVoltage: s.adcTempVoltage || 0,\n        tdsValue: s.tdsValue || 0,\n        waterTemperature: s.waterTemperature || 0,\n        systemPowered: s.systemPowered !== false\n      };\n      this.lastUpdateTime = new Date().toLocaleTimeString();\n    },\n    loadStatus: function loadStatus() {\n      var _this3 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var res, s, moving;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return (0, _api.getDeviceStatus)(_this3.deviceKey);\n              case 3:\n                res = _context.sent;\n                if (res.success) {\n                  _this3.deviceModel = res.model || '';\n                  s = res.status || {};\n                  moving = s.servoMoving || false;\n                  if (moving && !_this3.servoStartTime) {\n                    _this3.servoStartTime = Date.now();\n                  }\n                  if (!moving) {\n                    _this3.servoStartTime = 0;\n                  }\n                  _this3.status = {\n                    online: res.online || false,\n                    pwm1Level: s.pwm1Level || 0,\n                    pwm2Level: s.pwm2Level || 0,\n                    pwm3Level: s.pwm3Level || 0,\n                    airPumpLevel: s.airPumpLevel || 0,\n                    fanLevel: s.fanLevel || 0,\n                    uvLightOn: s.uvLightOn || false,\n                    relay1State: s.relay1State || false,\n                    relay2State: s.relay2State || false,\n                    servoMoving: s.servoMoving || false,\n                    adcWQVoltage: s.adcWQVoltage || 0,\n                    adcTempVoltage: s.adcTempVoltage || 0,\n                    tdsValue: s.tdsValue || 0,\n                    waterTemperature: s.waterTemperature || 0,\n                    systemPowered: s.systemPowered !== false\n                  };\n                  _this3.lastUpdateTime = new Date().toLocaleTimeString();\n                }\n                _context.next = 10;\n                break;\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                _this3.status.online = false;\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }))();\n    },\n    refreshStatus: function refreshStatus() {\n      var _this4 = this;\n      uni.showLoading({\n        title: '刷新中...'\n      });\n      (0, _api.requestDeviceStatus)(this.deviceKey).then(function () {\n        setTimeout(function () {\n          _this4.loadStatus().then(function () {\n            uni.hideLoading();\n          });\n        }, 800);\n      }).catch(function () {\n        _this4.loadStatus().then(function () {\n          uni.hideLoading();\n        });\n      });\n    },\n    setPump: function setPump(pump, level) {\n      var _this5 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var res;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (_this5.status.online) {\n                  _context2.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context2.abrupt(\"return\");\n              case 3:\n                if (_this5.checkRateLimit()) {\n                  _context2.next = 5;\n                  break;\n                }\n                return _context2.abrupt(\"return\");\n              case 5:\n                _this5.status[\"pwm\".concat(pump, \"Level\")] = level;\n                _context2.prev = 6;\n                _context2.next = 9;\n                return (0, _api.sendControlCommand)(_this5.deviceKey, 'set_pump', {\n                  pump: pump,\n                  level: level\n                });\n              case 9:\n                res = _context2.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this5.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context2.next = 16;\n                break;\n              case 13:\n                _context2.prev = 13;\n                _context2.t0 = _context2[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[6, 13]]);\n      }))();\n    },\n    setLight: function setLight(level) {\n      var _this6 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        var res;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                if (_this6.status.online) {\n                  _context3.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context3.abrupt(\"return\");\n              case 3:\n                if (_this6.checkRateLimit()) {\n                  _context3.next = 5;\n                  break;\n                }\n                return _context3.abrupt(\"return\");\n              case 5:\n                _this6.status.pwm3Level = level;\n                _context3.prev = 6;\n                _context3.next = 9;\n                return (0, _api.sendControlCommand)(_this6.deviceKey, 'set_light', {\n                  level: level\n                });\n              case 9:\n                res = _context3.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this6.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context3.next = 16;\n                break;\n              case 13:\n                _context3.prev = 13;\n                _context3.t0 = _context3[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, null, [[6, 13]]);\n      }))();\n    },\n    setAirPump: function setAirPump(level) {\n      var _this7 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {\n        var res;\n        return _regenerator.default.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                if (_this7.status.online) {\n                  _context4.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context4.abrupt(\"return\");\n              case 3:\n                if (_this7.checkRateLimit()) {\n                  _context4.next = 5;\n                  break;\n                }\n                return _context4.abrupt(\"return\");\n              case 5:\n                _this7.status.airPumpLevel = level;\n                _context4.prev = 6;\n                _context4.next = 9;\n                return (0, _api.sendControlCommand)(_this7.deviceKey, 'set_air_pump', {\n                  level: level\n                });\n              case 9:\n                res = _context4.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this7.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context4.next = 16;\n                break;\n              case 13:\n                _context4.prev = 13;\n                _context4.t0 = _context4[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, null, [[6, 13]]);\n      }))();\n    },\n    setFan: function setFan(level) {\n      var _this8 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {\n        var res;\n        return _regenerator.default.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                if (_this8.status.online) {\n                  _context5.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context5.abrupt(\"return\");\n              case 3:\n                if (_this8.checkRateLimit()) {\n                  _context5.next = 5;\n                  break;\n                }\n                return _context5.abrupt(\"return\");\n              case 5:\n                _this8.status.fanLevel = level;\n                _context5.prev = 6;\n                _context5.next = 9;\n                return (0, _api.sendControlCommand)(_this8.deviceKey, 'set_fan', {\n                  level: level\n                });\n              case 9:\n                res = _context5.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this8.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context5.next = 16;\n                break;\n              case 13:\n                _context5.prev = 13;\n                _context5.t0 = _context5[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5, null, [[6, 13]]);\n      }))();\n    },\n    setUV: function setUV(on) {\n      var _this9 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {\n        var res;\n        return _regenerator.default.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                if (_this9.status.online) {\n                  _context6.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context6.abrupt(\"return\");\n              case 3:\n                if (_this9.checkRateLimit()) {\n                  _context6.next = 5;\n                  break;\n                }\n                return _context6.abrupt(\"return\");\n              case 5:\n                _this9.status.uvLightOn = on;\n                _context6.prev = 6;\n                _context6.next = 9;\n                return (0, _api.sendControlCommand)(_this9.deviceKey, 'set_uv', {\n                  on: on\n                });\n              case 9:\n                res = _context6.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this9.loadStatus();\n                  }, 800);\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context6.next = 16;\n                break;\n              case 13:\n                _context6.prev = 13;\n                _context6.t0 = _context6[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6, null, [[6, 13]]);\n      }))();\n    },\n    setRelay2: function setRelay2(on) {\n      var _this10 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {\n        var res;\n        return _regenerator.default.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                if (_this10.status.online) {\n                  _context7.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context7.abrupt(\"return\");\n              case 3:\n                if (_this10.checkRateLimit()) {\n                  _context7.next = 5;\n                  break;\n                }\n                return _context7.abrupt(\"return\");\n              case 5:\n                _this10.status.relay2State = on;\n                _context7.prev = 6;\n                _context7.next = 9;\n                return (0, _api.sendControlCommand)(_this10.deviceKey, 'set_relay2', {\n                  on: on\n                });\n              case 9:\n                res = _context7.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this10.loadStatus();\n                  }, 800);\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context7.next = 16;\n                break;\n              case 13:\n                _context7.prev = 13;\n                _context7.t0 = _context7[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7, null, [[6, 13]]);\n      }))();\n    },\n    triggerServo: function triggerServo() {\n      var _this11 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {\n        var res;\n        return _regenerator.default.wrap(function _callee8$(_context8) {\n          while (1) {\n            switch (_context8.prev = _context8.next) {\n              case 0:\n                if (!(!_this11.status.online || _this11.status.servoMoving)) {\n                  _context8.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线或舵机运行中',\n                  icon: 'none'\n                });\n                return _context8.abrupt(\"return\");\n              case 3:\n                if (_this11.checkRateLimit()) {\n                  _context8.next = 5;\n                  break;\n                }\n                return _context8.abrupt(\"return\");\n              case 5:\n                _context8.prev = 5;\n                _context8.next = 8;\n                return (0, _api.sendControlCommand)(_this11.deviceKey, 'trigger_servo', {});\n              case 8:\n                res = _context8.sent;\n                if (res.success) {\n                  _this11.status.servoMoving = true;\n                  _this11.servoStartTime = Date.now();\n                  uni.showToast({\n                    title: '喂食已启动',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '启动失败',\n                    icon: 'none'\n                  });\n                }\n                _context8.next = 15;\n                break;\n              case 12:\n                _context8.prev = 12;\n                _context8.t0 = _context8[\"catch\"](5);\n                uni.showToast({\n                  title: '启动失败',\n                  icon: 'none'\n                });\n              case 15:\n              case \"end\":\n                return _context8.stop();\n            }\n          }\n        }, _callee8, null, [[5, 12]]);\n      }))();\n    },\n    checkServoTimeout: function checkServoTimeout() {\n      if (this.status.servoMoving && this.servoStartTime > 0) {\n        var elapsed = (Date.now() - this.servoStartTime) / 1000;\n        if (elapsed > 8) {\n          this.status.servoMoving = false;\n          this.servoStartTime = 0;\n        }\n      }\n    },\n    togglePower: function togglePower() {\n      var _this12 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {\n        var isPowered, cmd, confirmText;\n        return _regenerator.default.wrap(function _callee9$(_context9) {\n          while (1) {\n            switch (_context9.prev = _context9.next) {\n              case 0:\n                if (_this12.status.online) {\n                  _context9.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context9.abrupt(\"return\");\n              case 3:\n                isPowered = _this12.status.systemPowered;\n                cmd = isPowered ? 'power_off' : 'power_on';\n                confirmText = isPowered ? '确定要关机吗？\\n关机后设备保持网络连接，可远程开机。' : '确定要开机吗？';\n                uni.showModal({\n                  title: '确认操作',\n                  content: confirmText,\n                  success: function success(modalRes) {\n                    if (!modalRes.confirm) return;\n                    _this12.executePowerCmd(cmd);\n                  }\n                });\n              case 7:\n              case \"end\":\n                return _context9.stop();\n            }\n          }\n        }, _callee9);\n      }))();\n    },\n    executePowerCmd: function executePowerCmd(cmd) {\n      var _this13 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {\n        var result;\n        return _regenerator.default.wrap(function _callee10$(_context10) {\n          while (1) {\n            switch (_context10.prev = _context10.next) {\n              case 0:\n                if (_this13.checkRateLimit()) {\n                  _context10.next = 2;\n                  break;\n                }\n                return _context10.abrupt(\"return\");\n              case 2:\n                _context10.prev = 2;\n                _context10.next = 5;\n                return (0, _api.sendControlCommand)(_this13.deviceKey, cmd, {});\n              case 5:\n                result = _context10.sent;\n                if (result.success) {\n                  _this13.status.systemPowered = cmd === 'power_on';\n                  uni.showToast({\n                    title: cmd === 'power_on' ? '开机成功' : '关机成功',\n                    icon: 'success'\n                  });\n                  setTimeout(function () {\n                    return _this13.loadStatus();\n                  }, 1000);\n                } else {\n                  uni.showToast({\n                    title: result.message || '操作失败',\n                    icon: 'none'\n                  });\n                }\n                _context10.next = 12;\n                break;\n              case 9:\n                _context10.prev = 9;\n                _context10.t0 = _context10[\"catch\"](2);\n                uni.showToast({\n                  title: '操作失败',\n                  icon: 'none'\n                });\n              case 12:\n              case \"end\":\n                return _context10.stop();\n            }\n          }\n        }, _callee10, null, [[2, 9]]);\n      }))();\n    },\n    // ===== 定时任务 =====\n    getTaskTypeLabel: function getTaskTypeLabel(timer) {\n      var type = this.taskTypes.find(function (t) {\n        return t.cmd === timer.cmd && JSON.stringify(t.params) === JSON.stringify(timer.params);\n      });\n      return type ? type.label : '未知任务';\n    },\n    loadTimers: function loadTimers() {\n      var _this14 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {\n        var res;\n        return _regenerator.default.wrap(function _callee11$(_context11) {\n          while (1) {\n            switch (_context11.prev = _context11.next) {\n              case 0:\n                _context11.prev = 0;\n                _context11.next = 3;\n                return (0, _api.getTimers)(_this14.deviceKey);\n              case 3:\n                res = _context11.sent;\n                if (res.success && res.timers) {\n                  _this14.timers = res.timers;\n                }\n                _context11.next = 10;\n                break;\n              case 7:\n                _context11.prev = 7;\n                _context11.t0 = _context11[\"catch\"](0);\n                _this14.timers = [];\n              case 10:\n              case \"end\":\n                return _context11.stop();\n            }\n          }\n        }, _callee11, null, [[0, 7]]);\n      }))();\n    },\n    openTimerDialog: function openTimerDialog(timer) {\n      if (timer) {\n        this.editingTimer = timer;\n        var typeIndex = this.taskTypes.findIndex(function (t) {\n          return t.cmd === timer.cmd && JSON.stringify(t.params) === JSON.stringify(timer.params);\n        });\n        var dur = this.durationOptions.find(function (d) {\n          return d.value === timer.duration / 60;\n        });\n        this.timerForm = {\n          id: timer.id,\n          name: timer.name,\n          hour: timer.hour,\n          minute: timer.minute,\n          type: typeIndex >= 0 ? typeIndex : 0,\n          cmd: timer.cmd,\n          params: timer.params,\n          duration: timer.duration / 60,\n          durationLabel: dur ? dur.label : '不停止'\n        };\n      } else {\n        this.editingTimer = null;\n        this.timerForm = {\n          id: '',\n          name: '',\n          hour: 8,\n          minute: 0,\n          type: 0,\n          cmd: 'trigger_servo',\n          params: {},\n          duration: 0,\n          durationLabel: '不停止'\n        };\n      }\n      this.timerDialogVisible = true;\n    },\n    closeTimerDialog: function closeTimerDialog() {\n      this.timerDialogVisible = false;\n      this.editingTimer = null;\n    },\n    onTimeChange: function onTimeChange(e) {\n      var vals = e.detail.value;\n      this.timerForm.hour = parseInt(vals[0]);\n      this.timerForm.minute = parseInt(vals[1]);\n    },\n    onTaskTypeChange: function onTaskTypeChange(e) {\n      var idx = e.detail.value;\n      this.timerForm.type = idx;\n      var type = this.taskTypes[idx];\n      this.timerForm.cmd = type.cmd;\n      this.timerForm.params = _objectSpread({}, type.params);\n    },\n    onDurationChange: function onDurationChange(e) {\n      var idx = e.detail.value;\n      var opt = this.durationOptions[idx];\n      this.timerForm.duration = opt.value;\n      this.timerForm.durationLabel = opt.label;\n    },\n    confirmTimer: function confirmTimer() {\n      var _this15 = this;\n      if (!this.timerForm.name.trim()) {\n        uni.showToast({\n          title: '请输入任务名称',\n          icon: 'none'\n        });\n        return;\n      }\n      var timerData = {\n        id: this.timerForm.id || 'timer_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),\n        name: this.timerForm.name.trim(),\n        hour: this.timerForm.hour,\n        minute: this.timerForm.minute,\n        type: this.timerForm.type,\n        cmd: this.timerForm.cmd,\n        params: this.timerForm.params,\n        duration: this.timerForm.duration * 60,\n        enabled: true\n      };\n      if (this.editingTimer) {\n        var idx = this.timers.findIndex(function (t) {\n          return t.id === _this15.editingTimer.id;\n        });\n        if (idx >= 0) {\n          this.timers[idx] = timerData;\n        }\n      } else {\n        this.timers.push(timerData);\n      }\n      this.closeTimerDialog();\n      this.saveAllTimers();\n    },\n    handleDeleteTimer: function handleDeleteTimer(timer) {\n      var _this16 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {\n        return _regenerator.default.wrap(function _callee13$(_context13) {\n          while (1) {\n            switch (_context13.prev = _context13.next) {\n              case 0:\n                uni.showModal({\n                  title: '确认删除',\n                  content: '确定要删除定时任务\"' + timer.name + '\"吗？',\n                  success: function () {\n                    var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(res) {\n                      var result;\n                      return _regenerator.default.wrap(function _callee12$(_context12) {\n                        while (1) {\n                          switch (_context12.prev = _context12.next) {\n                            case 0:\n                              if (!res.confirm) {\n                                _context12.next = 11;\n                                break;\n                              }\n                              _context12.prev = 1;\n                              _context12.next = 4;\n                              return (0, _api.deleteTimer)(_this16.deviceKey, timer.id);\n                            case 4:\n                              result = _context12.sent;\n                              if (result.success) {\n                                _this16.timers = _this16.timers.filter(function (t) {\n                                  return t.id !== timer.id;\n                                });\n                                uni.showToast({\n                                  title: '删除成功',\n                                  icon: 'success'\n                                });\n                              } else {\n                                uni.showToast({\n                                  title: result.message || '删除失败',\n                                  icon: 'none'\n                                });\n                              }\n                              _context12.next = 11;\n                              break;\n                            case 8:\n                              _context12.prev = 8;\n                              _context12.t0 = _context12[\"catch\"](1);\n                              uni.showToast({\n                                title: '删除失败',\n                                icon: 'none'\n                              });\n                            case 11:\n                            case \"end\":\n                              return _context12.stop();\n                          }\n                        }\n                      }, _callee12, null, [[1, 8]]);\n                    }));\n                    function success(_x) {\n                      return _success.apply(this, arguments);\n                    }\n                    return success;\n                  }()\n                });\n              case 1:\n              case \"end\":\n                return _context13.stop();\n            }\n          }\n        }, _callee13);\n      }))();\n    },\n    toggleTimer: function toggleTimer(timer) {\n      timer.enabled = !timer.enabled;\n      this.saveAllTimers();\n    },\n    saveAllTimers: function saveAllTimers() {\n      var _this17 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {\n        return _regenerator.default.wrap(function _callee14$(_context14) {\n          while (1) {\n            switch (_context14.prev = _context14.next) {\n              case 0:\n                _context14.prev = 0;\n                _context14.next = 3;\n                return (0, _api.saveTimers)(_this17.deviceKey, _this17.timers);\n              case 3:\n                _context14.next = 8;\n                break;\n              case 5:\n                _context14.prev = 5;\n                _context14.t0 = _context14[\"catch\"](0);\n                uni.showToast({\n                  title: '保存失败',\n                  icon: 'none'\n                });\n              case 8:\n              case \"end\":\n                return _context14.stop();\n            }\n          }\n        }, _callee14, null, [[0, 5]]);\n      }))();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY29udHJvbC9maXNoLW9uZS52dWUiXSwibmFtZXMiOlsiZGF0YSIsImRldmljZUtleSIsImRldmljZU1vZGVsIiwic3RhdHVzIiwib25saW5lIiwicHdtMUxldmVsIiwicHdtMkxldmVsIiwicHdtM0xldmVsIiwiYWlyUHVtcExldmVsIiwiZmFuTGV2ZWwiLCJ1dkxpZ2h0T24iLCJyZWxheTFTdGF0ZSIsInJlbGF5MlN0YXRlIiwic2Vydm9Nb3ZpbmciLCJhZGNXUVZvbHRhZ2UiLCJhZGNUZW1wVm9sdGFnZSIsInRkc1ZhbHVlIiwid2F0ZXJUZW1wZXJhdHVyZSIsInN5c3RlbVBvd2VyZWQiLCJwdW1wTGV2ZWxzIiwibGFzdFVwZGF0ZVRpbWUiLCJ0aW1lciIsInJlbmFtZVZpc2libGUiLCJyZW5hbWVWYWx1ZSIsInJlbmFtZVRhcmdldCIsInJlbmFtZURlZmF1bHQiLCJ3cyIsIndzQ29ubmVjdGVkIiwid3NSZWNvbm5lY3RUaW1lciIsInNlcnZvVGltZXIiLCJzZXJ2b1N0YXJ0VGltZSIsImxhc3RDbGlja1RpbWUiLCJ0aW1lcnMiLCJ0aW1lckRpYWxvZ1Zpc2libGUiLCJlZGl0aW5nVGltZXIiLCJ0aW1lckZvcm0iLCJpZCIsIm5hbWUiLCJob3VyIiwibWludXRlIiwidHlwZSIsImNtZCIsInBhcmFtcyIsImR1cmF0aW9uIiwiZHVyYXRpb25MYWJlbCIsImhvdXJzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJzbGljZSIsIm1pbnV0ZXMiLCJ0YXNrVHlwZXMiLCJsYWJlbCIsInB1bXAiLCJsZXZlbCIsImR1cmF0aW9uT3B0aW9ucyIsInZhbHVlIiwiY29tcHV0ZWQiLCJ0YXNrVHlwZUxhYmVscyIsIm1hcCIsInQiLCJkdXJhdGlvbkxhYmVscyIsImQiLCJ3YXRlclF1YWxpdHlUZXh0IiwidiIsIndhdGVyUXVhbGl0eUNsYXNzIiwib25Mb2FkIiwib3B0aW9ucyIsImRldmljZV9rZXkiLCJ1bmkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJsb2FkU3RhdHVzIiwibG9hZFRpbWVycyIsImNvbm5lY3RXUyIsInJlcXVlc3REZXZpY2VTdGF0dXMiLCJ0aGVuIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiY2hlY2tTZXJ2b1RpbWVvdXQiLCJvblVubG9hZCIsImNsZWFySW50ZXJ2YWwiLCJkaXNjb25uZWN0V1MiLCJtZXRob2RzIiwiZ2V0Q3RybE5hbWUiLCJ0YXJnZXQiLCJkZWZhdWx0TmFtZSIsImtleSIsImdldFN0b3JhZ2VTeW5jIiwiY2hlY2tSYXRlTGltaXQiLCJub3ciLCJEYXRlIiwic3RhcnRSZW5hbWUiLCJjYW5jZWxSZW5hbWUiLCJjb25maXJtUmVuYW1lIiwidHJpbSIsInNldFN0b3JhZ2VTeW5jIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRXU0Jhc2VVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3QiLCJlIiwicGhvbmUiLCJnZXRQaG9uZU51bWJlciIsImJhc2VVcmwiLCJjb25uZWN0U29ja2V0IiwidXJsIiwic3VjY2VzcyIsIm9uT3BlbiIsInNlbmRTb2NrZXRNZXNzYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uTWVzc2FnZSIsInJlcyIsIm1zZyIsInBhcnNlIiwidXBkYXRlU3RhdHVzRnJvbVdTIiwib25DbG9zZSIsIm9uRXJyb3IiLCJjbGVhclRpbWVvdXQiLCJjbG9zZSIsInMiLCJtb3ZpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJnZXREZXZpY2VTdGF0dXMiLCJtb2RlbCIsInJlZnJlc2hTdGF0dXMiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwiY2F0Y2giLCJzZXRQdW1wIiwic2VuZENvbnRyb2xDb21tYW5kIiwibWVzc2FnZSIsInNldExpZ2h0Iiwic2V0QWlyUHVtcCIsInNldEZhbiIsInNldFVWIiwib24iLCJzZXRSZWxheTIiLCJ0cmlnZ2VyU2Vydm8iLCJlbGFwc2VkIiwidG9nZ2xlUG93ZXIiLCJpc1Bvd2VyZWQiLCJjb25maXJtVGV4dCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJtb2RhbFJlcyIsImNvbmZpcm0iLCJleGVjdXRlUG93ZXJDbWQiLCJyZXN1bHQiLCJnZXRUYXNrVHlwZUxhYmVsIiwiZmluZCIsImdldFRpbWVycyIsIm9wZW5UaW1lckRpYWxvZyIsInR5cGVJbmRleCIsImZpbmRJbmRleCIsImR1ciIsImNsb3NlVGltZXJEaWFsb2ciLCJvblRpbWVDaGFuZ2UiLCJ2YWxzIiwiZGV0YWlsIiwicGFyc2VJbnQiLCJvblRhc2tUeXBlQ2hhbmdlIiwiaWR4Iiwib25EdXJhdGlvbkNoYW5nZSIsIm9wdCIsImNvbmZpcm1UaW1lciIsInRpbWVyRGF0YSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsImVuYWJsZWQiLCJwdXNoIiwic2F2ZUFsbFRpbWVycyIsImhhbmRsZURlbGV0ZVRpbWVyIiwiZGVsZXRlVGltZXJBcGkiLCJmaWx0ZXIiLCJ0b2dnbGVUaW1lciIsInNhdmVUaW1lcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFpUkE7QUFDQTtBQUFnRDtBQUFBO0FBQUEsZUFFakM7RUFDYkEsSUFBSSxrQkFBRztJQUNMLE9BQU87TUFDTEMsU0FBUyxFQUFFLEVBQUU7TUFDYkMsV0FBVyxFQUFFLEVBQUU7TUFDZkMsTUFBTSxFQUFFO1FBQ05DLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLFlBQVksRUFBRSxDQUFDO1FBQ2ZDLFFBQVEsRUFBRSxDQUFDO1FBQ1hDLFNBQVMsRUFBRSxLQUFLO1FBQ2hCQyxXQUFXLEVBQUUsS0FBSztRQUNsQkMsV0FBVyxFQUFFLEtBQUs7UUFDbEJDLFdBQVcsRUFBRSxLQUFLO1FBQ2xCQyxZQUFZLEVBQUUsQ0FBQztRQUNmQyxjQUFjLEVBQUUsQ0FBQztRQUNqQkMsUUFBUSxFQUFFLENBQUM7UUFDWEMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQkMsYUFBYSxFQUFFO01BQ2pC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QUFHLENBQUNDLFNBQVMsQ0FBQztrQ0FBRUMsS0FBSyxFQUFFZ0YsTUFBTSxDQUFDakIsT0FBTyxJQUFJLE1BQU07a0NBQUU5RCxJQUFJLEVBQUU7Z0NBQU8sQ0FBQyxDQUFDOzhCQUNsRTs4QkFBQzs4QkFBQTs0QkFBQTs4QkFBQTs4QkFBQTs4QkFFREgsR0FBRyxDQUFDQyxTQUFTLENBQUM7Z0NBQUVDLEtBQUssRUFBRSxNQUFNO2dDQUFFQyxJQUFJLEVBQUU7OEJBQU8sQ0FBQyxDQUFDOzRCQUFBOzRCQUFBOzhCQUFBOzBCQUFBO3dCQUFBO3NCQUFBO29CQUFBLENBR25EO29CQUFBO3NCQUFBO29CQUFBO29CQUFBO2tCQUFBO2dCQUNILENBQUMsQ0FBQztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNKLENBQUM7SUFFRDRHLFdBQVcsdUJBQUNqSyxLQUFLLEVBQUU7TUFDakJBLEtBQUssQ0FBQzJKLE9BQU8sR0FBRyxDQUFDM0osS0FBSyxDQUFDMkosT0FBTztNQUM5QixJQUFJLENBQUNFLGFBQWEsRUFBRTtJQUN0QixDQUFDO0lBRUtBLGFBQWEsMkJBQUc7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFWixJQUFBSyxlQUFVLEVBQUMsT0FBSSxDQUFDdEwsU0FBUyxFQUFFLE9BQUksQ0FBQytCLE1BQU0sQ0FBQztjQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBRTdDdUMsR0FBRyxDQUFDQyxTQUFTLENBQUM7a0JBQUVDLEtBQUssRUFBRSxNQUFNO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQU8sQ0FBQyxDQUFDO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRWxEO0VBQ0Y7QUFDRixDQUFDO0FBQUEsMkIiLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuaW1wb3J0IHsgZ2V0RGV2aWNlU3RhdHVzLCByZXF1ZXN0RGV2aWNlU3RhdHVzLCBzZW5kQ29udHJvbENvbW1hbmQsIGdldFRpbWVycywgc2F2ZVRpbWVycywgZGVsZXRlVGltZXIgYXMgZGVsZXRlVGltZXJBcGkgfSBmcm9tICdAL3V0aWxzL2FwaSdcbmltcG9ydCB7IGdldFBob25lTnVtYmVyIH0gZnJvbSAnQC91dGlscy9zdG9yYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRldmljZUtleTogJycsXG4gICAgICBkZXZpY2VNb2RlbDogJycsXG4gICAgICBzdGF0dXM6IHtcbiAgICAgICAgb25saW5lOiBmYWxzZSxcbiAgICAgICAgcHdtMUxldmVsOiAwLFxuICAgICAgICBwd20yTGV2ZWw6IDAsXG4gICAgICAgIHB3bTNMZXZlbDogMCxcbiAgICAgICAgYWlyUHVtcExldmVsOiAwLFxuICAgICAgICBmYW5MZXZlbDogMCxcbiAgICAgICAgdXZMaWdodE9uOiBmYWxzZSxcbiAgICAgICAgcmVsYXkxU3RhdGU6IGZhbHNlLFxuICAgICAgICByZWxheTJTdGF0ZTogZmFsc2UsXG4gICAgICAgIHNlcnZvTW92aW5nOiBmYWxzZSxcbiAgICAgICAgYWRjV1FWb2x0YWdlOiAwLFxuICAgICAgICBhZGNUZW1wVm9sdGFnZTogMCxcbiAgICAgICAgdGRzVmFsdWU6IDAsXG4gICAgICAgIHdhdGVyVGVtcGVyYXR1cmU6IDAsXG4gICAgICAgIHN5c3RlbVBvd2VyZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBwdW1wTGV2ZWxzOiBbJ+WFsycsICfkuIDmoaMnLCAn5LqM5qGjJywgJ+S4ieahoyddLFxuICAgICAgbGFzdFVwZGF0ZVRpbWU6ICcnLFxuICAgICAgdGltZXI6IG51bGwsXG4gICAgICByZW5hbWVWaXNpYmxlOiBmYWxzZSxcbiAgICAgIHJlbmFtZVZhbHVlOiAnJyxcbiAgICAgIHJlbmFtZVRhcmdldDogJycsXG4gICAgICByZW5hbWVEZWZhdWx0OiAnJyxcbiAgICAgIHdzOiBudWxsLFxuICAgICAgd3NDb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgd3NSZWNvbm5lY3RUaW1lcjogbnVsbCxcbiAgICAgIHNlcnZvVGltZXI6IG51bGwsXG4gICAgICBzZXJ2b1N0YXJ0VGltZTogMCxcbiAgICAgIGxhc3RDbGlja1RpbWU6IDAsXG4gICAgICAvLyDlrprml7bku7vliqFcbiAgICAgIHRpbWVyczogW10sXG4gICAgICB0aW1lckRpYWxvZ1Zpc2libGU6IGZhbHNlLFxuICAgICAgZWRpdGluZ1RpbWVyOiBudWxsLFxuICAgICAgdGltZXJGb3JtOiB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGhvdXI6IDgsXG4gICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgdHlwZTogMCxcbiAgICAgICAgY21kOiAndHJpZ2dlcl9zZXJ2bycsXG4gICAgICAgIHBhcmFtczoge30sXG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBkdXJhdGlvbkxhYmVsOiAn5LiN5YGc5q2iJ1xuICAgICAgfSxcbiAgICAgIGhvdXJzOiBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyNCB9LCAoXywgaSkgPT4gKCcwJyArIGkpLnNsaWNlKC0yKSksXG4gICAgICBtaW51dGVzOiBBcnJheS5mcm9tKHsgbGVuZ3RoOiA2MCB9LCAoXywgaSkgPT4gKCcwJyArIGkpLnNsaWNlKC0yKSksXG4gICAgICB0YXNrVHlwZXM6IFtcbiAgICAgICAgeyBsYWJlbDogJ+WWgumxvO+8iOiIteacuu+8iScsIGNtZDogJ3RyaWdnZXJfc2Vydm8nLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgIHsgbGFiZWw6ICfmjaLmsLQx5qGj77yI5rC05rO1MSBsZXZlbD0x77yJJywgY21kOiAnc2V0X3B1bXAnLCBwYXJhbXM6IHsgcHVtcDogMSwgbGV2ZWw6IDEgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn5o2i5rC0Muaho++8iOawtOaztTEgbGV2ZWw9Mu+8iScsIGNtZDogJ3NldF9wdW1wJywgcGFyYW1zOiB7IHB1bXA6IDEsIGxldmVsOiAyIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+aNouawtDPmoaPvvIjmsLTms7UxIGxldmVsPTPvvIknLCBjbWQ6ICdzZXRfcHVtcCcsIHBhcmFtczogeyBwdW1wOiAxLCBsZXZlbDogMyB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICfliqDmsJQx5qGj77yI5rCU5rO1IGxldmVsPTHvvIknLCBjbWQ6ICdzZXRfYWlyX3B1bXAnLCBwYXJhbXM6IHsgbGV2ZWw6IDEgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn5Yqg5rCUMuaho++8iOawlOaztSBsZXZlbD0y77yJJywgY21kOiAnc2V0X2Fpcl9wdW1wJywgcGFyYW1zOiB7IGxldmVsOiAyIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+WKoOawlDPmoaPvvIjmsJTms7UgbGV2ZWw9M++8iScsIGNtZDogJ3NldF9haXJfcHVtcCcsIHBhcmFtczogeyBsZXZlbDogMyB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICflvIDnga8x5qGj77yI54Gv5p2hIGxldmVsPTHvvIknLCBjbWQ6ICdzZXRfbGlnaHQnLCBwYXJhbXM6IHsgbGV2ZWw6IDEgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn5byA54GvMuaho++8iGxldmVsPTLvvIknLCBjbWQ6ICdzZXRfbGlnaHQnLCBwYXJhbXM6IHsgbGV2ZWw6IDIgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn5byA54GvM+aho++8iGxldmVsPTPvvIknLCBjbWQ6ICdzZXRfbGlnaHQnLCBwYXJhbXM6IHsgbGV2ZWw6IDMgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn6aOO5omHMeahoycsIGNtZDogJ3NldF9mYW4nLCBwYXJhbXM6IHsgbGV2ZWw6IDEgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn6aOO5omHMuahoycsIGNtZDogJ3NldF9mYW4nLCBwYXJhbXM6IHsgbGV2ZWw6IDIgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn6aOO5omHM+ahoycsIGNtZDogJ3NldF9mYW4nLCBwYXJhbXM6IHsgbGV2ZWw6IDMgfSB9XG4gICAgICBdLFxuICAgICAgZHVyYXRpb25PcHRpb25zOiBbXG4gICAgICAgIHsgbGFiZWw6ICfkuI3lgZzmraInLCB2YWx1ZTogMCB9LFxuICAgICAgICB7IGxhYmVsOiAnMeWIhumSnycsIHZhbHVlOiAxIH0sXG4gICAgICAgIHsgbGFiZWw6ICc15YiG6ZKfJywgdmFsdWU6IDUgfSxcbiAgICAgICAgeyBsYWJlbDogJzEw5YiG6ZKfJywgdmFsdWU6IDEwIH0sXG4gICAgICAgIHsgbGFiZWw6ICczMOWIhumSnycsIHZhbHVlOiAzMCB9LFxuICAgICAgICB7IGxhYmVsOiAnNjDliIbpkp8nLCB2YWx1ZTogNjAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB0YXNrVHlwZUxhYmVscygpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tUeXBlcy5tYXAodCA9PiB0LmxhYmVsKVxuICAgIH0sXG4gICAgZHVyYXRpb25MYWJlbHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kdXJhdGlvbk9wdGlvbnMubWFwKGQgPT4gZC5sYWJlbClcbiAgICB9LFxuICAgIHdhdGVyUXVhbGl0eVRleHQoKSB7XG4gICAgICBjb25zdCB2ID0gdGhpcy5zdGF0dXMudGRzVmFsdWUgfHwgMFxuICAgICAgaWYgKHYgPCAxNTApIHJldHVybiAn5LyYJ1xuICAgICAgaWYgKHYgPCAyMDApIHJldHVybiAn6ImvJ1xuICAgICAgaWYgKHYgPCA0MDApIHJldHVybiAn5LitJ1xuICAgICAgcmV0dXJuICflt64nXG4gICAgfSxcbiAgICB3YXRlclF1YWxpdHlDbGFzcygpIHtcbiAgICAgIGNvbnN0IHYgPSB0aGlzLnN0YXR1cy50ZHNWYWx1ZSB8fCAwXG4gICAgICBpZiAodiA8IDE1MCkgcmV0dXJuICd3cS1leGNlbGxlbnQnXG4gICAgICBpZiAodiA8IDIwMCkgcmV0dXJuICd3cS1nb29kJ1xuICAgICAgaWYgKHYgPCA0MDApIHJldHVybiAnd3EtZmFpcidcbiAgICAgIHJldHVybiAnd3EtcG9vcidcbiAgICB9XG4gIH0sXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy5kZXZpY2VLZXkgPSBvcHRpb25zLmRldmljZV9rZXkgfHwgJydcbiAgICBpZiAoIXRoaXMuZGV2aWNlS2V5KSB7XG4gICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIflj4LmlbDplJnor68nLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMubG9hZFN0YXR1cygpXG4gICAgdGhpcy5sb2FkVGltZXJzKClcblxuICAgIC8vIOi/nuaOpSBXZWJTb2NrZXQg5o6l5pS25a6e5pe25o6o6YCBXG4gICAgdGhpcy5jb25uZWN0V1MoKVxuXG4gICAgLy8g6L+b5YWl6aG16Z2i6Ieq5Yqo6K+35rGC5pyA5paw54q25oCBXG4gICAgcmVxdWVzdERldmljZVN0YXR1cyh0aGlzLmRldmljZUtleSkudGhlbigoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApXG4gICAgfSlcblxuICAgIC8vIDEw56eS6L2u6K+iXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZFN0YXR1cygpXG4gICAgICB0aGlzLmNoZWNrU2Vydm9UaW1lb3V0KClcbiAgICB9LCAxMDAwMClcblxuICAgIC8vIOiIteacuui2heaXtuajgOa1i1xuICAgIHRoaXMuc2Vydm9UaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tTZXJ2b1RpbWVvdXQoKVxuICAgIH0sIDIwMDApXG4gIH0sXG4gIG9uVW5sb2FkKCkge1xuICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLnNlcnZvVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zZXJ2b1RpbWVyKVxuICAgIH1cbiAgICB0aGlzLmRpc2Nvbm5lY3RXUygpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRDdHJsTmFtZSh0YXJnZXQsIGRlZmF1bHROYW1lKSB7XG4gICAgICBjb25zdCBrZXkgPSAnY3RybF9uYW1lXycgKyB0aGlzLmRldmljZUtleSArICdfJyArIHRhcmdldFxuICAgICAgY29uc3QgbmFtZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhrZXkpXG4gICAgICByZXR1cm4gbmFtZSB8fCBkZWZhdWx0TmFtZVxuICAgIH0sXG5cbiAgICBjaGVja1JhdGVMaW1pdCgpIHtcbiAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RDbGlja1RpbWUgPCAxMDAwKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+aTjeS9nOi/h+W/q++8jOaFoueCueWTnycsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdENsaWNrVGltZSA9IG5vd1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuXG4gICAgc3RhcnRSZW5hbWUodGFyZ2V0LCBkZWZhdWx0TmFtZSkge1xuICAgICAgdGhpcy5yZW5hbWVUYXJnZXQgPSB0YXJnZXRcbiAgICAgIHRoaXMucmVuYW1lRGVmYXVsdCA9IGRlZmF1bHROYW1lXG4gICAgICB0aGlzLnJlbmFtZVZhbHVlID0gdGhpcy5nZXRDdHJsTmFtZSh0YXJnZXQsIGRlZmF1bHROYW1lKVxuICAgICAgaWYgKHRoaXMucmVuYW1lVmFsdWUgPT09IGRlZmF1bHROYW1lKSB7XG4gICAgICAgIHRoaXMucmVuYW1lVmFsdWUgPSAnJ1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5hbWVWaXNpYmxlID0gdHJ1ZVxuICAgIH0sXG5cbiAgICBjYW5jZWxSZW5hbWUoKSB7XG4gICAgICB0aGlzLnJlbmFtZVZpc2libGUgPSBmYWxzZVxuICAgICAgdGhpcy5yZW5hbWVUYXJnZXQgPSAnJ1xuICAgICAgdGhpcy5yZW5hbWVWYWx1ZSA9ICcnXG4gICAgfSxcblxuICAgIGNvbmZpcm1SZW5hbWUoKSB7XG4gICAgICBpZiAoIXRoaXMucmVuYW1lVGFyZ2V0KSByZXR1cm5cbiAgICAgIGNvbnN0IGtleSA9ICdjdHJsX25hbWVfJyArIHRoaXMuZGV2aWNlS2V5ICsgJ18nICsgdGhpcy5yZW5hbWVUYXJnZXRcbiAgICAgIGlmICh0aGlzLnJlbmFtZVZhbHVlICYmIHRoaXMucmVuYW1lVmFsdWUudHJpbSgpKSB7XG4gICAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhrZXksIHRoaXMucmVuYW1lVmFsdWUudHJpbSgpKVxuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfph43lkb3lkI3miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhrZXkpXG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+W3suaBouWkjem7mOiupOWQjeensCcsIGljb246ICdub25lJyB9KVxuICAgICAgfVxuICAgICAgdGhpcy5jYW5jZWxSZW5hbWUoKVxuICAgIH0sXG5cbiAgICAvLyA9PT09PSBXZWJTb2NrZXQg5a6e5pe25o6o6YCBID09PT09XG4gICAgZ2V0V1NCYXNlVVJMKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gYHdzOi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH1gXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICByZXR1cm4gJ3dzOi8vMTEyLjEyNC4xMDcuMTU5Ojc5NjUnXG4gICAgfSxcblxuICAgIGNvbm5lY3RXUygpIHtcbiAgICAgIGlmICh0aGlzLndzKSByZXR1cm5cbiAgICAgIGNvbnN0IHBob25lID0gZ2V0UGhvbmVOdW1iZXIoKVxuICAgICAgaWYgKCFwaG9uZSkgcmV0dXJuXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLmdldFdTQmFzZVVSTCgpXG4gICAgICAgIHRoaXMud3MgPSB1bmkuY29ubmVjdFNvY2tldCh7XG4gICAgICAgICAgdXJsOiBgJHtiYXNlVXJsfS93cy9jbGllbnRgLFxuICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHt9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy53cy5vbk9wZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMud3NDb25uZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgdW5pLnNlbmRTb2NrZXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2F1dGgnLCBwaG9uZSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdW5pLnNlbmRTb2NrZXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ3N1YnNjcmliZScsIGRldmljZV9rZXk6IHRoaXMuZGV2aWNlS2V5IH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLndzLm9uTWVzc2FnZSgocmVzKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IEpTT04ucGFyc2UocmVzLmRhdGEpXG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdkZXZpY2Vfc3RhdHVzJyAmJiBtc2cuZGV2aWNlX2tleSA9PT0gdGhpcy5kZXZpY2VLZXkpIHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXNGcm9tV1MobXNnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy53cy5vbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLndzQ29ubmVjdGVkID0gZmFsc2VcbiAgICAgICAgICB0aGlzLndzID0gbnVsbFxuICAgICAgICAgIGlmICghdGhpcy53c1JlY29ubmVjdFRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLndzUmVjb25uZWN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy53c1JlY29ubmVjdFRpbWVyID0gbnVsbFxuICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RXUygpXG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLndzLm9uRXJyb3IoKCkgPT4ge1xuICAgICAgICAgIHRoaXMud3NDb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnV2ViU29ja2V06L+e5o6l5aSx6LSl77yM5L2/55SoSFRUUOi9ruivoicsIGUpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGRpc2Nvbm5lY3RXUygpIHtcbiAgICAgIGlmICh0aGlzLndzUmVjb25uZWN0VGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMud3NSZWNvbm5lY3RUaW1lcilcbiAgICAgICAgdGhpcy53c1JlY29ubmVjdFRpbWVyID0gbnVsbFxuICAgICAgfVxuICAgICAgaWYgKHRoaXMud3MpIHtcbiAgICAgICAgdGhpcy53cy5jbG9zZSgpXG4gICAgICAgIHRoaXMud3MgPSBudWxsXG4gICAgICAgIHRoaXMud3NDb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVTdGF0dXNGcm9tV1MobXNnKSB7XG4gICAgICBjb25zdCBzID0gbXNnLnN0YXR1cyB8fCB7fVxuICAgICAgY29uc3QgbW92aW5nID0gcy5zZXJ2b01vdmluZyB8fCBmYWxzZVxuICAgICAgaWYgKG1vdmluZyAmJiAhdGhpcy5zZXJ2b1N0YXJ0VGltZSkge1xuICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgICAgfVxuICAgICAgaWYgKCFtb3ZpbmcpIHtcbiAgICAgICAgdGhpcy5zZXJ2b1N0YXJ0VGltZSA9IDBcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdHVzID0ge1xuICAgICAgICBvbmxpbmU6IG1zZy5vbmxpbmUgfHwgZmFsc2UsXG4gICAgICAgIHB3bTFMZXZlbDogcy5wd20xTGV2ZWwgfHwgMCxcbiAgICAgICAgcHdtMkxldmVsOiBzLnB3bTJMZXZlbCB8fCAwLFxuICAgICAgICBwd20zTGV2ZWw6IHMucHdtM0xldmVsIHx8IDAsXG4gICAgICAgIGFpclB1bXBMZXZlbDogcy5haXJQdW1wTGV2ZWwgfHwgMCxcbiAgICAgICAgZmFuTGV2ZWw6IHMuZmFuTGV2ZWwgfHwgMCxcbiAgICAgICAgdXZMaWdodE9uOiBzLnV2TGlnaHRPbiB8fCBmYWxzZSxcbiAgICAgICAgcmVsYXkxU3RhdGU6IHMucmVsYXkxU3RhdGUgfHwgZmFsc2UsXG4gICAgICAgIHJlbGF5MlN0YXRlOiBzLnJlbGF5MlN0YXRlIHx8IGZhbHNlLFxuICAgICAgICBzZXJ2b01vdmluZzogcy5zZXJ2b01vdmluZyB8fCBmYWxzZSxcbiAgICAgICAgYWRjV1FWb2x0YWdlOiBzLmFkY1dRVm9sdGFnZSB8fCAwLFxuICAgICAgICBhZGNUZW1wVm9sdGFnZTogcy5hZGNUZW1wVm9sdGFnZSB8fCAwLFxuICAgICAgICB0ZHNWYWx1ZTogcy50ZHNWYWx1ZSB8fCAwLFxuICAgICAgICB3YXRlclRlbXBlcmF0dXJlOiBzLndhdGVyVGVtcGVyYXR1cmUgfHwgMCxcbiAgICAgICAgc3lzdGVtUG93ZXJlZDogcy5zeXN0ZW1Qb3dlcmVkICE9PSBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5sYXN0VXBkYXRlVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKClcbiAgICB9LFxuXG4gICAgYXN5bmMgbG9hZFN0YXR1cygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldERldmljZVN0YXR1cyh0aGlzLmRldmljZUtleSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5kZXZpY2VNb2RlbCA9IHJlcy5tb2RlbCB8fCAnJ1xuICAgICAgICAgIGNvbnN0IHMgPSByZXMuc3RhdHVzIHx8IHt9XG4gICAgICAgICAgY29uc3QgbW92aW5nID0gcy5zZXJ2b01vdmluZyB8fCBmYWxzZVxuICAgICAgICAgIGlmIChtb3ZpbmcgJiYgIXRoaXMuc2Vydm9TdGFydFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vydm9TdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghbW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gMFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnN0YXR1cyA9IHtcbiAgICAgICAgICAgIG9ubGluZTogcmVzLm9ubGluZSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHB3bTFMZXZlbDogcy5wd20xTGV2ZWwgfHwgMCxcbiAgICAgICAgICAgIHB3bTJMZXZlbDogcy5wd20yTGV2ZWwgfHwgMCxcbiAgICAgICAgICAgIHB3bTNMZXZlbDogcy5wd20zTGV2ZWwgfHwgMCxcbiAgICAgICAgICAgIGFpclB1bXBMZXZlbDogcy5haXJQdW1wTGV2ZWwgfHwgMCxcbiAgICAgICAgICAgIGZhbkxldmVsOiBzLmZhbkxldmVsIHx8IDAsXG4gICAgICAgICAgICB1dkxpZ2h0T246IHMudXZMaWdodE9uIHx8IGZhbHNlLFxuICAgICAgICAgICAgcmVsYXkxU3RhdGU6IHMucmVsYXkxU3RhdGUgfHwgZmFsc2UsXG4gICAgICAgICAgICByZWxheTJTdGF0ZTogcy5yZWxheTJTdGF0ZSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHNlcnZvTW92aW5nOiBzLnNlcnZvTW92aW5nIHx8IGZhbHNlLFxuICAgICAgICAgICAgYWRjV1FWb2x0YWdlOiBzLmFkY1dRVm9sdGFnZSB8fCAwLFxuICAgICAgICAgICAgYWRjVGVtcFZvbHRhZ2U6IHMuYWRjVGVtcFZvbHRhZ2UgfHwgMCxcbiAgICAgICAgICAgIHRkc1ZhbHVlOiBzLnRkc1ZhbHVlIHx8IDAsXG4gICAgICAgICAgICB3YXRlclRlbXBlcmF0dXJlOiBzLndhdGVyVGVtcGVyYXR1cmUgfHwgMCxcbiAgICAgICAgICAgIHN5c3RlbVBvd2VyZWQ6IHMuc3lzdGVtUG93ZXJlZCAhPT0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sYXN0VXBkYXRlVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMub25saW5lID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVmcmVzaFN0YXR1cygpIHtcbiAgICAgIHVuaS5zaG93TG9hZGluZyh7IHRpdGxlOiAn5Yi35paw5LitLi4uJyB9KVxuICAgICAgcmVxdWVzdERldmljZVN0YXR1cyh0aGlzLmRldmljZUtleSkudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZFN0YXR1cygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9KVxuICAgICAgICB9LCA4MDApXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZFN0YXR1cygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBhc3luYyBzZXRQdW1wKHB1bXAsIGxldmVsKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG5cbiAgICAgIHRoaXMuc3RhdHVzW2Bwd20ke3B1bXB9TGV2ZWxgXSA9IGxldmVsXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3NldF9wdW1wJywgeyBwdW1wLCBsZXZlbCB9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiByZXMubWVzc2FnZSB8fCAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBzZXRMaWdodChsZXZlbCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/JywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuXG4gICAgICB0aGlzLnN0YXR1cy5wd20zTGV2ZWwgPSBsZXZlbFxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfbGlnaHQnLCB7IGxldmVsIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3RhdHVzKCksIDgwMClcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIHNldEFpclB1bXAobGV2ZWwpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KTsgcmV0dXJuIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIHRoaXMuc3RhdHVzLmFpclB1bXBMZXZlbCA9IGxldmVsXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfYWlyX3B1bXAnLCB7IGxldmVsIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2VzcykgeyBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApOyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSkgfVxuICAgICAgICBlbHNlIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiByZXMubWVzc2FnZSB8fCAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgc2V0RmFuKGxldmVsKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSk7IHJldHVybiB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG4gICAgICB0aGlzLnN0YXR1cy5mYW5MZXZlbCA9IGxldmVsXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfZmFuJywgeyBsZXZlbCB9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHsgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKTsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pIH1cbiAgICAgICAgZWxzZSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgICB9IGNhdGNoIChlKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgfSxcblxuICAgIGFzeW5jIHNldFVWKG9uKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSk7IHJldHVybiB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG4gICAgICB0aGlzLnN0YXR1cy51dkxpZ2h0T24gPSBvblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCAnc2V0X3V2JywgeyBvbiB9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHsgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKSB9XG4gICAgICAgIGVsc2UgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgICAgfSBjYXRjaCAoZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgIH0sXG5cbiAgICBhc3luYyBzZXRSZWxheTIob24pIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KTsgcmV0dXJuIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIHRoaXMuc3RhdHVzLnJlbGF5MlN0YXRlID0gb25cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3NldF9yZWxheTInLCB7IG9uIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2VzcykgeyBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApIH1cbiAgICAgICAgZWxzZSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgICB9IGNhdGNoIChlKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgfSxcblxuICAgIGFzeW5jIHRyaWdnZXJTZXJ2bygpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lIHx8IHRoaXMuc3RhdHVzLnNlcnZvTW92aW5nKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6v+aIluiIteacuui/kOihjOS4rScsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCAndHJpZ2dlcl9zZXJ2bycsIHt9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLnN0YXR1cy5zZXJ2b01vdmluZyA9IHRydWVcbiAgICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+WWgumjn+W3suWQr+WKqCcsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+WQr+WKqOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICflkK/liqjlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hlY2tTZXJ2b1RpbWVvdXQoKSB7XG4gICAgICBpZiAodGhpcy5zdGF0dXMuc2Vydm9Nb3ZpbmcgJiYgdGhpcy5zZXJ2b1N0YXJ0VGltZSA+IDApIHtcbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IChEYXRlLm5vdygpIC0gdGhpcy5zZXJ2b1N0YXJ0VGltZSkgLyAxMDAwXG4gICAgICAgIGlmIChlbGFwc2VkID4gOCkge1xuICAgICAgICAgIHRoaXMuc3RhdHVzLnNlcnZvTW92aW5nID0gZmFsc2VcbiAgICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIHRvZ2dsZVBvd2VyKCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/JywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1Bvd2VyZWQgPSB0aGlzLnN0YXR1cy5zeXN0ZW1Qb3dlcmVkXG4gICAgICBjb25zdCBjbWQgPSBpc1Bvd2VyZWQgPyAncG93ZXJfb2ZmJyA6ICdwb3dlcl9vbidcbiAgICAgIGNvbnN0IGNvbmZpcm1UZXh0ID0gaXNQb3dlcmVkID8gJ+ehruWumuimgeWFs+acuuWQl++8n1xcbuWFs+acuuWQjuiuvuWkh+S/neaMgee9kee7nOi/nuaOpe+8jOWPr+i/nOeoi+W8gOacuuOAgicgOiAn56Gu5a6a6KaB5byA5py65ZCX77yfJ1xuXG4gICAgICB1bmkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfnoa7orqTmk43kvZwnLFxuICAgICAgICBjb250ZW50OiBjb25maXJtVGV4dCxcbiAgICAgICAgc3VjY2VzczogKG1vZGFsUmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFtb2RhbFJlcy5jb25maXJtKSByZXR1cm5cbiAgICAgICAgICB0aGlzLmV4ZWN1dGVQb3dlckNtZChjbWQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGFzeW5jIGV4ZWN1dGVQb3dlckNtZChjbWQpIHtcbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgY21kLCB7fSlcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXMuc3lzdGVtUG93ZXJlZCA9IGNtZCA9PT0gJ3Bvd2VyX29uJ1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogY21kID09PSAncG93ZXJfb24nID8gJ+W8gOacuuaIkOWKnycgOiAn5YWz5py65oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgMTAwMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlc3VsdC5tZXNzYWdlIHx8ICfmk43kvZzlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5pON5L2c5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vID09PT09IOWumuaXtuS7u+WKoSA9PT09PVxuICAgIGdldFRhc2tUeXBlTGFiZWwodGltZXIpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRhc2tUeXBlcy5maW5kKHQgPT4gdC5jbWQgPT09IHRpbWVyLmNtZCAmJiBKU09OLnN0cmluZ2lmeSh0LnBhcmFtcykgPT09IEpTT04uc3RyaW5naWZ5KHRpbWVyLnBhcmFtcykpXG4gICAgICByZXR1cm4gdHlwZSA/IHR5cGUubGFiZWwgOiAn5pyq55+l5Lu75YqhJ1xuICAgIH0sXG5cbiAgICBhc3luYyBsb2FkVGltZXJzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0VGltZXJzKHRoaXMuZGV2aWNlS2V5KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MgJiYgcmVzLnRpbWVycykge1xuICAgICAgICAgIHRoaXMudGltZXJzID0gcmVzLnRpbWVyc1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLnRpbWVycyA9IFtdXG4gICAgICB9XG4gICAgfSxcblxuICAgIG9wZW5UaW1lckRpYWxvZyh0aW1lcikge1xuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1RpbWVyID0gdGltZXJcbiAgICAgICAgY29uc3QgdHlwZUluZGV4ID0gdGhpcy50YXNrVHlwZXMuZmluZEluZGV4KHQgPT4gdC5jbWQgPT09IHRpbWVyLmNtZCAmJiBKU09OLnN0cmluZ2lmeSh0LnBhcmFtcykgPT09IEpTT04uc3RyaW5naWZ5KHRpbWVyLnBhcmFtcykpXG4gICAgICAgIGNvbnN0IGR1ciA9IHRoaXMuZHVyYXRpb25PcHRpb25zLmZpbmQoZCA9PiBkLnZhbHVlID09PSAodGltZXIuZHVyYXRpb24gLyA2MCkpXG4gICAgICAgIHRoaXMudGltZXJGb3JtID0ge1xuICAgICAgICAgIGlkOiB0aW1lci5pZCxcbiAgICAgICAgICBuYW1lOiB0aW1lci5uYW1lLFxuICAgICAgICAgIGhvdXI6IHRpbWVyLmhvdXIsXG4gICAgICAgICAgbWludXRlOiB0aW1lci5taW51dGUsXG4gICAgICAgICAgdHlwZTogdHlwZUluZGV4ID49IDAgPyB0eXBlSW5kZXggOiAwLFxuICAgICAgICAgIGNtZDogdGltZXIuY21kLFxuICAgICAgICAgIHBhcmFtczogdGltZXIucGFyYW1zLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aW1lci5kdXJhdGlvbiAvIDYwLFxuICAgICAgICAgIGR1cmF0aW9uTGFiZWw6IGR1ciA/IGR1ci5sYWJlbCA6ICfkuI3lgZzmraInXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1RpbWVyID0gbnVsbFxuICAgICAgICB0aGlzLnRpbWVyRm9ybSA9IHtcbiAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgaG91cjogOCxcbiAgICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgICAgdHlwZTogMCxcbiAgICAgICAgICBjbWQ6ICd0cmlnZ2VyX3NlcnZvJyxcbiAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgIGR1cmF0aW9uTGFiZWw6ICfkuI3lgZzmraInXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudGltZXJEaWFsb2dWaXNpYmxlID0gdHJ1ZVxuICAgIH0sXG5cbiAgICBjbG9zZVRpbWVyRGlhbG9nKCkge1xuICAgICAgdGhpcy50aW1lckRpYWxvZ1Zpc2libGUgPSBmYWxzZVxuICAgICAgdGhpcy5lZGl0aW5nVGltZXIgPSBudWxsXG4gICAgfSxcblxuICAgIG9uVGltZUNoYW5nZShlKSB7XG4gICAgICBjb25zdCB2YWxzID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMudGltZXJGb3JtLmhvdXIgPSBwYXJzZUludCh2YWxzWzBdKVxuICAgICAgdGhpcy50aW1lckZvcm0ubWludXRlID0gcGFyc2VJbnQodmFsc1sxXSlcbiAgICB9LFxuXG4gICAgb25UYXNrVHlwZUNoYW5nZShlKSB7XG4gICAgICBjb25zdCBpZHggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy50aW1lckZvcm0udHlwZSA9IGlkeFxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMudGFza1R5cGVzW2lkeF1cbiAgICAgIHRoaXMudGltZXJGb3JtLmNtZCA9IHR5cGUuY21kXG4gICAgICB0aGlzLnRpbWVyRm9ybS5wYXJhbXMgPSB7IC4uLnR5cGUucGFyYW1zIH1cbiAgICB9LFxuXG4gICAgb25EdXJhdGlvbkNoYW5nZShlKSB7XG4gICAgICBjb25zdCBpZHggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgY29uc3Qgb3B0ID0gdGhpcy5kdXJhdGlvbk9wdGlvbnNbaWR4XVxuICAgICAgdGhpcy50aW1lckZvcm0uZHVyYXRpb24gPSBvcHQudmFsdWVcbiAgICAgIHRoaXMudGltZXJGb3JtLmR1cmF0aW9uTGFiZWwgPSBvcHQubGFiZWxcbiAgICB9LFxuXG4gICAgY29uZmlybVRpbWVyKCkge1xuICAgICAgaWYgKCF0aGlzLnRpbWVyRm9ybS5uYW1lLnRyaW0oKSkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfor7fovpPlhaXku7vliqHlkI3np7AnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpbWVyRGF0YSA9IHtcbiAgICAgICAgaWQ6IHRoaXMudGltZXJGb3JtLmlkIHx8ICd0aW1lcl8nICsgRGF0ZS5ub3coKSArICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA2KSxcbiAgICAgICAgbmFtZTogdGhpcy50aW1lckZvcm0ubmFtZS50cmltKCksXG4gICAgICAgIGhvdXI6IHRoaXMudGltZXJGb3JtLmhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy50aW1lckZvcm0ubWludXRlLFxuICAgICAgICB0eXBlOiB0aGlzLnRpbWVyRm9ybS50eXBlLFxuICAgICAgICBjbWQ6IHRoaXMudGltZXJGb3JtLmNtZCxcbiAgICAgICAgcGFyYW1zOiB0aGlzLnRpbWVyRm9ybS5wYXJhbXMsXG4gICAgICAgIGR1cmF0aW9uOiB0aGlzLnRpbWVyRm9ybS5kdXJhdGlvbiAqIDYwLFxuICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVkaXRpbmdUaW1lcikge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnRpbWVycy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0aGlzLmVkaXRpbmdUaW1lci5pZClcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy50aW1lcnNbaWR4XSA9IHRpbWVyRGF0YVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbWVycy5wdXNoKHRpbWVyRGF0YSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9zZVRpbWVyRGlhbG9nKClcbiAgICAgIHRoaXMuc2F2ZUFsbFRpbWVycygpXG4gICAgfSxcblxuICAgIGFzeW5jIGhhbmRsZURlbGV0ZVRpbWVyKHRpbWVyKSB7XG4gICAgICB1bmkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfnoa7orqTliKDpmaQnLFxuICAgICAgICBjb250ZW50OiAn56Gu5a6a6KaB5Yig6Zmk5a6a5pe25Lu75YqhXCInICsgdGltZXIubmFtZSArICdcIuWQl++8nycsXG4gICAgICAgIHN1Y2Nlc3M6IGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRlbGV0ZVRpbWVyQXBpKHRoaXMuZGV2aWNlS2V5LCB0aW1lci5pZClcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lcnMgPSB0aGlzLnRpbWVycy5maWx0ZXIodCA9PiB0LmlkICE9PSB0aW1lci5pZClcbiAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfliKDpmaTmiJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlc3VsdC5tZXNzYWdlIHx8ICfliKDpmaTlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfliKDpmaTlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIHRvZ2dsZVRpbWVyKHRpbWVyKSB7XG4gICAgICB0aW1lci5lbmFibGVkID0gIXRpbWVyLmVuYWJsZWRcbiAgICAgIHRoaXMuc2F2ZUFsbFRpbWVycygpXG4gICAgfSxcblxuICAgIGFzeW5jIHNhdmVBbGxUaW1lcnMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBzYXZlVGltZXJzKHRoaXMuZGV2aWNlS2V5LCB0aGlzLnRpbWVycylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+S/neWtmOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!***************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/fish-mini.vue?mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fish_mini_vue_vue_type_template_id_2e269421_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish-mini.vue?vue&type=template&id=2e269421&mpType=page */ 35);\n/* harmony import */ var _fish_mini_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish-mini.vue?vue&type=script&lang=js&mpType=page */ 37);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fish_mini_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fish_mini_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _fish_mini_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _fish_mini_vue_vue_type_template_id_2e269421_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _fish_mini_vue_vue_type_template_id_2e269421_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _fish_mini_vue_vue_type_template_id_2e269421_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/control/fish-mini.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDs7O0FBR25FO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2Zpc2gtbWluaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmUyNjk0MjEmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Zpc2gtbWluaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmlzaC1taW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NvbnRyb2wvZmlzaC1taW5pLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!*********************************************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/fish-mini.vue?vue&type=template&id=2e269421&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_mini_vue_vue_type_template_id_2e269421_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./fish-mini.vue?vue&type=template&id=2e269421&mpType=page */ 36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_mini_vue_vue_type_template_id_2e269421_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_mini_vue_vue_type_template_id_2e269421_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_mini_vue_vue_type_template_id_2e269421_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_mini_vue_vue_type_template_id_2e269421_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 36 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/fish-mini.vue?vue&type=template&id=2e269421&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "control-page"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "status-header"),
          class: _vm._$s(1, "c", { offline: !_vm.status.online }),
          attrs: { _i: 1 },
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "status-row"), attrs: { _i: 2 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(3, "sc", "status-left"),
                  attrs: { _i: 3 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(4, "sc", "status-indicator"),
                      attrs: { _i: 4 },
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(5, "sc", "indicator-dot"),
                        attrs: { _i: 5 },
                      }),
                      _c("text", [
                        _vm._v(
                          _vm._$s(
                            6,
                            "t0-0",
                            _vm._s(_vm.status.online ? "在线" : "离线")
                          )
                        ),
                      ]),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(7, "sc", "device-key"),
                      attrs: { _i: 7 },
                    },
                    [_vm._v(_vm._$s(7, "t0-0", _vm._s(_vm.deviceKey)))]
                  ),
                ]
              ),
              _c(
                "text",
                {
                  staticClass: _vm._$s(8, "sc", "model-info-header"),
                  attrs: { _i: 8 },
                },
                [_vm._v(_vm._$s(8, "t0-0", _vm._s(_vm.deviceModel)))]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(9, "sc", "sensor-section"), attrs: { _i: 9 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "sensor-grid two-col"),
              attrs: { _i: 10 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(11, "sc", "sensor-item"),
                  attrs: { _i: 11 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(12, "sc", "sensor-icon"),
                    attrs: { _i: 12 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(13, "sc", "sensor-label"),
                    attrs: { _i: 13 },
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(14, "sc", "sensor-value"),
                      attrs: { _i: 14 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          14,
                          "t0-0",
                          _vm._s(_vm.status.waterTemperature.toFixed(1))
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(15, "sc", "sensor-item"),
                  attrs: { _i: 15 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(16, "sc", "sensor-icon"),
                    attrs: { _i: 16 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(17, "sc", "sensor-label"),
                    attrs: { _i: 17 },
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(18, "sc", "sensor-value"),
                      attrs: { _i: 18 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          18,
                          "t0-0",
                          _vm._s(parseInt(_vm.status.tdsValue))
                        )
                      ),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(19, "sc", "wq-tag"),
                          class: _vm._$s(19, "c", _vm.waterQualityClass),
                          attrs: { _i: 19 },
                        },
                        [
                          _vm._v(
                            _vm._$s(19, "t0-0", _vm._s(_vm.waterQualityText))
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(20, "sc", "big-btn-section"),
          attrs: { _i: 20 },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(21, "sc", "big-btn-row"),
              attrs: { _i: 21 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(22, "sc", "big-btn-wrapper"),
                  attrs: { _i: 22 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(23, "sc", "big-btn"),
                      class: _vm._$s(
                        23,
                        "c",
                        _vm.status.systemPowered ? "power-on" : "power-off"
                      ),
                      attrs: { _i: 23 },
                      on: { click: _vm.togglePower },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(24, "sc", "big-btn-icon"),
                        attrs: { _i: 24 },
                      }),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(25, "sc", "big-btn-label"),
                          attrs: { _i: 25 },
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              25,
                              "t0-0",
                              _vm._s(_vm.status.systemPowered ? "开机" : "关机")
                            )
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(26, "sc", "big-btn-wrapper"),
                  attrs: { _i: 26 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(27, "sc", "big-btn feed-btn"),
                      class: _vm._$s(27, "c", { busy: _vm.status.servoMoving }),
                      attrs: { _i: 27 },
                      on: { click: _vm.triggerServo },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(28, "sc", "big-btn-icon"),
                        attrs: { _i: 28 },
                      }),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(29, "sc", "big-btn-label"),
                          attrs: { _i: 29 },
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              29,
                              "t0-0",
                              _vm._s(_vm.status.servoMoving ? "运行中" : "喂食")
                            )
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(30, "sc", "control-section"),
          attrs: { _i: 30 },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(31, "sc", "control-card"),
              attrs: { _i: 31 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(32, "sc", "control-header"),
                  attrs: { _i: 32 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(33, "sc", "control-name"),
                      attrs: { _i: 33 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("pump1", "水泵1")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          33,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("pump1", "水泵1"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(34, "sc", "control-value"),
                      attrs: { _i: 34 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          34,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.pwm1Level])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(35, "sc", "pump-controls"),
                  attrs: { _i: 35 },
                },
                _vm._l(
                  _vm._$s(36, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $20, $30) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(36, "f", { forIndex: $20, key: index }),
                        staticClass: _vm._$s("36-" + $30, "sc", "level-btn"),
                        class: _vm._$s("36-" + $30, "c", {
                          active: _vm.status.pwm1Level === index,
                        }),
                        attrs: { _i: "36-" + $30 },
                        on: {
                          click: function ($event) {
                            return _vm.setPump(1, index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("36-" + $30, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(37, "sc", "control-card"),
              attrs: { _i: 37 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(38, "sc", "control-header"),
                  attrs: { _i: 38 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(39, "sc", "control-name"),
                      attrs: { _i: 39 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("airPump", "氧气泵")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          39,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("airPump", "氧气泵"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(40, "sc", "control-value"),
                      attrs: { _i: 40 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          40,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.airPumpLevel || 0])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(41, "sc", "pump-controls"),
                  attrs: { _i: 41 },
                },
                _vm._l(
                  _vm._$s(42, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $21, $31) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(42, "f", {
                          forIndex: $21,
                          key: "air" + index,
                        }),
                        staticClass: _vm._$s("42-" + $31, "sc", "level-btn"),
                        class: _vm._$s("42-" + $31, "c", {
                          active: (_vm.status.airPumpLevel || 0) === index,
                        }),
                        attrs: { _i: "42-" + $31 },
                        on: {
                          click: function ($event) {
                            return _vm.setAirPump(index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("42-" + $31, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(43, "sc", "control-card"),
              attrs: { _i: 43 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(44, "sc", "control-header"),
                  attrs: { _i: 44 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(45, "sc", "control-name"),
                      attrs: { _i: 45 },
                      on: {
                        click: function ($event) {
                          return _vm.startRename("light", "灯光")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          45,
                          "t0-0",
                          _vm._s(_vm.getCtrlName("light", "灯光"))
                        )
                      ),
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(46, "sc", "control-value"),
                      attrs: { _i: 46 },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          46,
                          "t0-0",
                          _vm._s(_vm.pumpLevels[_vm.status.pwm3Level])
                        )
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(47, "sc", "pump-controls"),
                  attrs: { _i: 47 },
                },
                _vm._l(
                  _vm._$s(48, "f", { forItems: _vm.pumpLevels }),
                  function (level, index, $22, $32) {
                    return _c(
                      "button",
                      {
                        key: _vm._$s(48, "f", {
                          forIndex: $22,
                          key: "light" + index,
                        }),
                        staticClass: _vm._$s("48-" + $32, "sc", "level-btn"),
                        class: _vm._$s("48-" + $32, "c", {
                          active: _vm.status.pwm3Level === index,
                        }),
                        attrs: { _i: "48-" + $32 },
                        on: {
                          click: function ($event) {
                            return _vm.setLight(index)
                          },
                        },
                      },
                      [_vm._v(_vm._$s("48-" + $32, "t0-0", _vm._s(level)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(49, "sc", "control-section"),
          attrs: { _i: 49 },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(50, "sc", "switch-card"),
              attrs: { _i: 50 },
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(51, "sc", "switch-label"),
                  attrs: { _i: 51 },
                  on: {
                    click: function ($event) {
                      return _vm.startRename("relay2", "备用开关1")
                    },
                  },
                },
                [
                  _vm._v(
                    _vm._$s(
                      51,
                      "t0-0",
                      _vm._s(_vm.getCtrlName("relay2", "备用开关1"))
                    )
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(52, "sc", "custom-switch"),
                  class: _vm._$s(
                    52,
                    "c",
                    _vm.status.relay2State ? "on" : "off"
                  ),
                  attrs: { _i: 52 },
                  on: {
                    click: function ($event) {
                      return _vm.setRelay2(!_vm.status.relay2State)
                    },
                  },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(53, "sc", "custom-switch-knob"),
                    attrs: { _i: 53 },
                  }),
                ]
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(54, "sc", "switch-card"),
              attrs: { _i: 54 },
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(55, "sc", "switch-label"),
                  attrs: { _i: 55 },
                  on: {
                    click: function ($event) {
                      return _vm.startRename("relay3", "备用开关2")
                    },
                  },
                },
                [
                  _vm._v(
                    _vm._$s(
                      55,
                      "t0-0",
                      _vm._s(_vm.getCtrlName("relay3", "备用开关2"))
                    )
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(56, "sc", "custom-switch"),
                  class: _vm._$s(
                    56,
                    "c",
                    _vm.status.relay3State ? "on" : "off"
                  ),
                  attrs: { _i: 56 },
                  on: {
                    click: function ($event) {
                      return _vm.setRelay3(!_vm.status.relay3State)
                    },
                  },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(57, "sc", "custom-switch-knob"),
                    attrs: { _i: 57 },
                  }),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(58, "sc", "bottom-bar"), attrs: { _i: 58 } },
        [
          _c(
            "text",
            {
              staticClass: _vm._$s(59, "sc", "refresh-time"),
              attrs: { _i: 59 },
            },
            [_vm._v(_vm._$s(59, "t0-0", _vm._s(_vm.lastUpdateTime)))]
          ),
          _c("button", {
            staticClass: _vm._$s(60, "sc", "refresh-btn"),
            attrs: { _i: 60 },
            on: { click: _vm.refreshStatus },
          }),
        ]
      ),
      _vm._$s(61, "i", _vm.renameVisible)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(61, "sc", "dialog-overlay"),
              attrs: { _i: 61 },
              on: { click: _vm.cancelRename },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(62, "sc", "dialog-box"),
                  attrs: { _i: 62 },
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                    },
                  },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(63, "sc", "dialog-title"),
                    attrs: { _i: 63 },
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.renameValue,
                        expression: "renameValue",
                      },
                    ],
                    staticClass: _vm._$s(64, "sc", "dialog-input"),
                    attrs: { _i: 64 },
                    domProps: {
                      value: _vm._$s(64, "v-model", _vm.renameValue),
                    },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.renameValue = $event.target.value
                      },
                    },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(65, "sc", "dialog-buttons"),
                      attrs: { _i: 65 },
                    },
                    [
                      _c("button", {
                        staticClass: _vm._$s(
                          66,
                          "sc",
                          "dialog-btn dialog-cancel"
                        ),
                        attrs: { _i: 66 },
                        on: { click: _vm.cancelRename },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(
                          67,
                          "sc",
                          "dialog-btn dialog-confirm"
                        ),
                        attrs: { _i: 67 },
                        on: { click: _vm.confirmRename },
                      }),
                    ]
                  ),
                ]
              ),
            ]
          )
        : _vm._e(),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 37 */
/*!***************************************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/fish-mini.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_mini_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./fish-mini.vue?vue&type=script&lang=js&mpType=page */ 38);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_mini_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_mini_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_mini_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_mini_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fish_mini_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRqQixDQUFnQiwwa0JBQUcsRUFBQyIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zpc2gtbWluaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmlzaC1taW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/control/fish-mini.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _api = __webpack_require__(/*! @/utils/api */ 16);\nvar _storage = __webpack_require__(/*! @/utils/storage */ 15);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      deviceKey: '',\n      deviceModel: '',\n      status: {\n        online: false,\n        pwm1Level: 0,\n        pwm3Level: 0,\n        airPumpLevel: 0,\n        relay1State: false,\n        relay2State: false,\n        relay3State: false,\n        servoMoving: false,\n        adcWQVoltage: 0,\n        adcTempVoltage: 0,\n        tdsValue: 0,\n        waterTemperature: 0,\n        systemPowered: true\n      },\n      pumpLevels: ['关', '一档', '二档', '三档'],\n      lastUpdateTime: '',\n      timer: null,\n      renameVisible: false,\n      renameValue: '',\n      renameTarget: '',\n      renameDefault: '',\n      ws: null,\n      wsConnected: false,\n      wsReconnectTimer: null,\n      servoTimer: null,\n      servoStartTime: 0,\n      lastClickTime: 0\n    };\n  },\n  computed: {\n    taskTypeLabels: function taskTypeLabels() {\n      return [];\n    },\n    durationLabels: function durationLabels() {\n      return [];\n    },\n    waterQualityText: function waterQualityText() {\n      var v = this.status.tdsValue || 0;\n      if (v < 150) return '优';\n      if (v < 200) return '良';\n      if (v < 400) return '中';\n      return '差';\n    },\n    waterQualityClass: function waterQualityClass() {\n      var v = this.status.tdsValue || 0;\n      if (v < 150) return 'wq-excellent';\n      if (v < 200) return 'wq-good';\n      if (v < 400) return 'wq-fair';\n      return 'wq-poor';\n    }\n  },\n  onLoad: function onLoad(options) {\n    var _this = this;\n    this.deviceKey = options.device_key || '';\n    if (!this.deviceKey) {\n      uni.showToast({\n        title: '设备参数错误',\n        icon: 'none'\n      });\n      return;\n    }\n    this.loadStatus();\n\n    // 连接 WebSocket 接收实时推送\n    this.connectWS();\n\n    // 进入页面自动请求最新状态\n    (0, _api.requestDeviceStatus)(this.deviceKey).then(function () {\n      setTimeout(function () {\n        return _this.loadStatus();\n      }, 800);\n    });\n\n    // 10秒轮询\n    this.timer = setInterval(function () {\n      _this.loadStatus();\n      _this.checkServoTimeout();\n    }, 10000);\n\n    // 舵机超时检测\n    this.servoTimer = setInterval(function () {\n      _this.checkServoTimeout();\n    }, 2000);\n  },\n  onUnload: function onUnload() {\n    if (this.timer) {\n      clearInterval(this.timer);\n    }\n    if (this.servoTimer) {\n      clearInterval(this.servoTimer);\n    }\n    this.disconnectWS();\n  },\n  methods: {\n    getCtrlName: function getCtrlName(target, defaultName) {\n      var key = 'ctrl_name_' + this.deviceKey + '_' + target;\n      var name = uni.getStorageSync(key);\n      return name || defaultName;\n    },\n    checkRateLimit: function checkRateLimit() {\n      var now = Date.now();\n      if (now - this.lastClickTime < 1000) {\n        uni.showToast({\n          title: '操作过快，慢点哟',\n          icon: 'none'\n        });\n        return false;\n      }\n      this.lastClickTime = now;\n      return true;\n    },\n    startRename: function startRename(target, defaultName) {\n      this.renameTarget = target;\n      this.renameDefault = defaultName;\n      this.renameValue = this.getCtrlName(target, defaultName);\n      if (this.renameValue === defaultName) {\n        this.renameValue = '';\n      }\n      this.renameVisible = true;\n    },\n    cancelRename: function cancelRename() {\n      this.renameVisible = false;\n      this.renameTarget = '';\n      this.renameValue = '';\n    },\n    confirmRename: function confirmRename() {\n      if (!this.renameTarget) return;\n      var key = 'ctrl_name_' + this.deviceKey + '_' + this.renameTarget;\n      if (this.renameValue && this.renameValue.trim()) {\n        uni.setStorageSync(key, this.renameValue.trim());\n        uni.showToast({\n          title: '重命名成功',\n          icon: 'success'\n        });\n      } else {\n        uni.removeStorageSync(key);\n        uni.showToast({\n          title: '已恢复默认名称',\n          icon: 'none'\n        });\n      }\n      this.cancelRename();\n    },\n    // ===== WebSocket 实时推送 =====\n    getWSBaseURL: function getWSBaseURL() {\n      try {\n        if (window && window.location) {\n          return \"ws://\".concat(window.location.host);\n        }\n      } catch (e) {}\n      return 'ws://112.124.107.159:7965';\n    },\n    connectWS: function connectWS() {\n      var _this2 = this;\n      if (this.ws) return;\n      var phone = (0, _storage.getPhoneNumber)();\n      if (!phone) return;\n      try {\n        var baseUrl = this.getWSBaseURL();\n        this.ws = uni.connectSocket({\n          url: \"\".concat(baseUrl, \"/ws/client\"),\n          success: function success() {}\n        });\n        this.ws.onOpen(function () {\n          _this2.wsConnected = true;\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'auth',\n              phone: phone\n            })\n          });\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'subscribe',\n              device_key: _this2.deviceKey\n            })\n          });\n        });\n        this.ws.onMessage(function (res) {\n          try {\n            var msg = JSON.parse(res.data);\n            if (msg.type === 'device_status' && msg.device_key === _this2.deviceKey) {\n              _this2.updateStatusFromWS(msg);\n            }\n          } catch (e) {}\n        });\n        this.ws.onClose(function () {\n          _this2.wsConnected = false;\n          _this2.ws = null;\n          if (!_this2.wsReconnectTimer) {\n            _this2.wsReconnectTimer = setTimeout(function () {\n              _this2.wsReconnectTimer = null;\n              _this2.connectWS();\n            }, 3000);\n          }\n        });\n        this.ws.onError(function () {\n          _this2.wsConnected = false;\n        });\n      } catch (e) {\n        __f__(\"log\", 'WebSocket连接失败，使用HTTP轮询', e, \" at pages/control/fish-mini.vue:358\");\n      }\n    },\n    disconnectWS: function disconnectWS() {\n      if (this.wsReconnectTimer) {\n        clearTimeout(this.wsReconnectTimer);\n        this.wsReconnectTimer = null;\n      }\n      if (this.ws) {\n        this.ws.close();\n        this.ws = null;\n        this.wsConnected = false;\n      }\n    },\n    updateStatusFromWS: function updateStatusFromWS(msg) {\n      var s = msg.status || {};\n      var moving = s.servoMoving || false;\n      if (moving && !this.servoStartTime) {\n        this.servoStartTime = Date.now();\n      }\n      if (!moving) {\n        this.servoStartTime = 0;\n      }\n      this.status = {\n        online: msg.online || false,\n        pwm1Level: s.pwm1Level || 0,\n        pwm3Level: s.pwm3Level || 0,\n        airPumpLevel: s.airPumpLevel || 0,\n        relay1State: s.relay1State || false,\n        relay2State: s.relay2State || false,\n        relay3State: s.relay3State || false,\n        servoMoving: s.servoMoving || false,\n        adcWQVoltage: s.adcWQVoltage || 0,\n        adcTempVoltage: s.adcTempVoltage || 0,\n        tdsValue: s.tdsValue || 0,\n        waterTemperature: s.waterTemperature || 0,\n        systemPowered: s.systemPowered !== false\n      };\n      this.lastUpdateTime = new Date().toLocaleTimeString();\n    },\n    loadStatus: function loadStatus() {\n      var _this3 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var res, s, moving;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return (0, _api.getDeviceStatus)(_this3.deviceKey);\n              case 3:\n                res = _context.sent;\n                if (res.success) {\n                  _this3.deviceModel = res.model || '';\n                  s = res.status || {};\n                  moving = s.servoMoving || false;\n                  if (moving && !_this3.servoStartTime) {\n                    _this3.servoStartTime = Date.now();\n                  }\n                  if (!moving) {\n                    _this3.servoStartTime = 0;\n                  }\n                  _this3.status = {\n                    online: res.online || false,\n                    pwm1Level: s.pwm1Level || 0,\n                    pwm3Level: s.pwm3Level || 0,\n                    airPumpLevel: s.airPumpLevel || 0,\n                    relay1State: s.relay1State || false,\n                    relay2State: s.relay2State || false,\n                    relay3State: s.relay3State || false,\n                    servoMoving: s.servoMoving || false,\n                    adcWQVoltage: s.adcWQVoltage || 0,\n                    adcTempVoltage: s.adcTempVoltage || 0,\n                    tdsValue: s.tdsValue || 0,\n                    waterTemperature: s.waterTemperature || 0,\n                    systemPowered: s.systemPowered !== false\n                  };\n                  _this3.lastUpdateTime = new Date().toLocaleTimeString();\n                }\n                _context.next = 10;\n                break;\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                _this3.status.online = false;\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }))();\n    },\n    refreshStatus: function refreshStatus() {\n      var _this4 = this;\n      uni.showLoading({\n        title: '刷新中...'\n      });\n      (0, _api.requestDeviceStatus)(this.deviceKey).then(function () {\n        setTimeout(function () {\n          _this4.loadStatus().then(function () {\n            uni.hideLoading();\n          });\n        }, 800);\n      }).catch(function () {\n        _this4.loadStatus().then(function () {\n          uni.hideLoading();\n        });\n      });\n    },\n    setPump: function setPump(pump, level) {\n      var _this5 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var res;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (_this5.status.online) {\n                  _context2.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context2.abrupt(\"return\");\n              case 3:\n                if (_this5.checkRateLimit()) {\n                  _context2.next = 5;\n                  break;\n                }\n                return _context2.abrupt(\"return\");\n              case 5:\n                _this5.status[\"pwm\".concat(pump, \"Level\")] = level;\n                _context2.prev = 6;\n                _context2.next = 9;\n                return (0, _api.sendControlCommand)(_this5.deviceKey, 'set_pump', {\n                  pump: pump,\n                  level: level\n                });\n              case 9:\n                res = _context2.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this5.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context2.next = 16;\n                break;\n              case 13:\n                _context2.prev = 13;\n                _context2.t0 = _context2[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[6, 13]]);\n      }))();\n    },\n    setLight: function setLight(level) {\n      var _this6 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        var res;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                if (_this6.status.online) {\n                  _context3.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context3.abrupt(\"return\");\n              case 3:\n                if (_this6.checkRateLimit()) {\n                  _context3.next = 5;\n                  break;\n                }\n                return _context3.abrupt(\"return\");\n              case 5:\n                _this6.status.pwm3Level = level;\n                _context3.prev = 6;\n                _context3.next = 9;\n                return (0, _api.sendControlCommand)(_this6.deviceKey, 'set_light', {\n                  level: level\n                });\n              case 9:\n                res = _context3.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this6.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context3.next = 16;\n                break;\n              case 13:\n                _context3.prev = 13;\n                _context3.t0 = _context3[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, null, [[6, 13]]);\n      }))();\n    },\n    setAirPump: function setAirPump(level) {\n      var _this7 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {\n        var res;\n        return _regenerator.default.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                if (_this7.status.online) {\n                  _context4.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context4.abrupt(\"return\");\n              case 3:\n                if (_this7.checkRateLimit()) {\n                  _context4.next = 5;\n                  break;\n                }\n                return _context4.abrupt(\"return\");\n              case 5:\n                _this7.status.airPumpLevel = level;\n                _context4.prev = 6;\n                _context4.next = 9;\n                return (0, _api.sendControlCommand)(_this7.deviceKey, 'set_air_pump', {\n                  level: level\n                });\n              case 9:\n                res = _context4.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this7.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context4.next = 16;\n                break;\n              case 13:\n                _context4.prev = 13;\n                _context4.t0 = _context4[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, null, [[6, 13]]);\n      }))();\n    },\n    setRelay2: function setRelay2(on) {\n      var _this8 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {\n        var res;\n        return _regenerator.default.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                if (_this8.status.online) {\n                  _context5.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context5.abrupt(\"return\");\n              case 3:\n                if (_this8.checkRateLimit()) {\n                  _context5.next = 5;\n                  break;\n                }\n                return _context5.abrupt(\"return\");\n              case 5:\n                _this8.status.relay2State = on;\n                _context5.prev = 6;\n                _context5.next = 9;\n                return (0, _api.sendControlCommand)(_this8.deviceKey, 'set_relay2', {\n                  on: on\n                });\n              case 9:\n                res = _context5.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this8.loadStatus();\n                  }, 800);\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context5.next = 16;\n                break;\n              case 13:\n                _context5.prev = 13;\n                _context5.t0 = _context5[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5, null, [[6, 13]]);\n      }))();\n    },\n    setRelay3: function setRelay3(on) {\n      var _this9 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {\n        var res;\n        return _regenerator.default.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                if (_this9.status.online) {\n                  _context6.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context6.abrupt(\"return\");\n              case 3:\n                if (_this9.checkRateLimit()) {\n                  _context6.next = 5;\n                  break;\n                }\n                return _context6.abrupt(\"return\");\n              case 5:\n                _this9.status.relay3State = on;\n                _context6.prev = 6;\n                _context6.next = 9;\n                return (0, _api.sendControlCommand)(_this9.deviceKey, 'set_relay3', {\n                  on: on\n                });\n              case 9:\n                res = _context6.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this9.loadStatus();\n                  }, 800);\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context6.next = 16;\n                break;\n              case 13:\n                _context6.prev = 13;\n                _context6.t0 = _context6[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6, null, [[6, 13]]);\n      }))();\n    },\n    triggerServo: function triggerServo() {\n      var _this10 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {\n        var res;\n        return _regenerator.default.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                if (!(!_this10.status.online || _this10.status.servoMoving)) {\n                  _context7.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线或舵机运行中',\n                  icon: 'none'\n                });\n                return _context7.abrupt(\"return\");\n              case 3:\n                if (_this10.checkRateLimit()) {\n                  _context7.next = 5;\n                  break;\n                }\n                return _context7.abrupt(\"return\");\n              case 5:\n                _context7.prev = 5;\n                _context7.next = 8;\n                return (0, _api.sendControlCommand)(_this10.deviceKey, 'trigger_servo', {});\n              case 8:\n                res = _context7.sent;\n                if (res.success) {\n                  _this10.status.servoMoving = true;\n                  _this10.servoStartTime = Date.now();\n                  uni.showToast({\n                    title: '喂食已启动',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '启动失败',\n                    icon: 'none'\n                  });\n                }\n                _context7.next = 15;\n                break;\n              case 12:\n                _context7.prev = 12;\n                _context7.t0 = _context7[\"catch\"](5);\n                uni.showToast({\n                  title: '启动失败',\n                  icon: 'none'\n                });\n              case 15:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7, null, [[5, 12]]);\n      }))();\n    },\n    checkServoTimeout: function checkServoTimeout() {\n      if (this.status.servoMoving && this.servoStartTime > 0) {\n        var elapsed = (Date.now() - this.servoStartTime) / 1000;\n        if (elapsed > 8) {\n          this.status.servoMoving = false;\n          this.servoStartTime = 0;\n        }\n      }\n    },\n    togglePower: function togglePower() {\n      var _this11 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {\n        var isPowered, cmd, confirmText;\n        return _regenerator.default.wrap(function _callee8$(_context8) {\n          while (1) {\n            switch (_context8.prev = _context8.next) {\n              case 0:\n                if (_this11.status.online) {\n                  _context8.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context8.abrupt(\"return\");\n              case 3:\n                isPowered = _this11.status.systemPowered;\n                cmd = isPowered ? 'power_off' : 'power_on';\n                confirmText = isPowered ? '确定要关机吗？\\n关机后设备保持网络连接，可远程开机。' : '确定要开机吗？';\n                uni.showModal({\n                  title: '确认操作',\n                  content: confirmText,\n                  success: function success(modalRes) {\n                    if (!modalRes.confirm) return;\n                    _this11.executePowerCmd(cmd);\n                  }\n                });\n              case 7:\n              case \"end\":\n                return _context8.stop();\n            }\n          }\n        }, _callee8);\n      }))();\n    },\n    executePowerCmd: function executePowerCmd(cmd) {\n      var _this12 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {\n        var result;\n        return _regenerator.default.wrap(function _callee9$(_context9) {\n          while (1) {\n            switch (_context9.prev = _context9.next) {\n              case 0:\n                if (_this12.checkRateLimit()) {\n                  _context9.next = 2;\n                  break;\n                }\n                return _context9.abrupt(\"return\");\n              case 2:\n                _context9.prev = 2;\n                _context9.next = 5;\n                return (0, _api.sendControlCommand)(_this12.deviceKey, cmd, {});\n              case 5:\n                result = _context9.sent;\n                if (result.success) {\n                  _this12.status.systemPowered = cmd === 'power_on';\n                  uni.showToast({\n                    title: cmd === 'power_on' ? '开机成功' : '关机成功',\n                    icon: 'success'\n                  });\n                  setTimeout(function () {\n                    return _this12.loadStatus();\n                  }, 1000);\n                } else {\n                  uni.showToast({\n                    title: result.message || '操作失败',\n                    icon: 'none'\n                  });\n                }\n                _context9.next = 12;\n                break;\n              case 9:\n                _context9.prev = 9;\n                _context9.t0 = _context9[\"catch\"](2);\n                uni.showToast({\n                  title: '操作失败',\n                  icon: 'none'\n                });\n              case 12:\n              case \"end\":\n                return _context9.stop();\n            }\n          }\n        }, _callee9, null, [[2, 9]]);\n      }))();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY29udHJvbC9maXNoLW1pbmkudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJkZXZpY2VLZXkiLCJkZXZpY2VNb2RlbCIsInN0YXR1cyIsIm9ubGluZSIsInB3bTFMZXZlbCIsInB3bTNMZXZlbCIsImFpclB1bXBMZXZlbCIsInJlbGF5MVN0YXRlIiwicmVsYXkyU3RhdGUiLCJyZWxheTNTdGF0ZSIsInNlcnZvTW92aW5nIiwiYWRjV1FWb2x0YWdlIiwiYWRjVGVtcFZvbHRhZ2UiLCJ0ZHNWYWx1ZSIsIndhdGVyVGVtcGVyYXR1cmUiLCJzeXN0ZW1Qb3dlcmVkIiwicHVtcExldmVscyIsImxhc3RVcGRhdGVUaW1lIiwidGltZXIiLCJyZW5hbWVWaXNpYmxlIiwicmVuYW1lVmFsdWUiLCJyZW5hbWVUYXJnZXQiLCJyZW5hbWVEZWZhdWx0Iiwid3MiLCJ3c0Nvbm5lY3RlZCIsIndzUmVjb25uZWN0VGltZXIiLCJzZXJ2b1RpbWVyIiwic2Vydm9TdGFydFRpbWUiLCJsYXN0Q2xpY2tUaW1lIiwiY29tcHV0ZWQiLCJ0YXNrVHlwZUxhYmVscyIsImR1cmF0aW9uTGFiZWxzIiwid2F0ZXJRdWFsaXR5VGV4dCIsInYiLCJ3YXRlclF1YWxpdHlDbGFzcyIsIm9uTG9hZCIsIm9wdGlvbnMiLCJkZXZpY2Vfa2V5IiwidW5pIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwibG9hZFN0YXR1cyIsImNvbm5lY3RXUyIsInJlcXVlc3REZXZpY2VTdGF0dXMiLCJ0aGVuIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiY2hlY2tTZXJ2b1RpbWVvdXQiLCJvblVubG9hZCIsImNsZWFySW50ZXJ2YWwiLCJkaXNjb25uZWN0V1MiLCJtZXRob2RzIiwiZ2V0Q3RybE5hbWUiLCJ0YXJnZXQiLCJkZWZhdWx0TmFtZSIsImtleSIsIm5hbWUiLCJnZXRTdG9yYWdlU3luYyIsImNoZWNrUmF0ZUxpbWl0Iiwibm93IiwiRGF0ZSIsInN0YXJ0UmVuYW1lIiwiY2FuY2VsUmVuYW1lIiwiY29uZmlybVJlbmFtZSIsInRyaW0iLCJzZXRTdG9yYWdlU3luYyIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0V1NCYXNlVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0IiwiZSIsInBob25lIiwiZ2V0UGhvbmVOdW1iZXIiLCJiYXNlVXJsIiwiY29ubmVjdFNvY2tldCIsInVybCIsInN1Y2Nlc3MiLCJvbk9wZW4iLCJzZW5kU29ja2V0TWVzc2FnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwib25NZXNzYWdlIiwicmVzIiwibXNnIiwicGFyc2UiLCJ1cGRhdGVTdGF0dXNGcm9tV1MiLCJvbkNsb3NlIiwib25FcnJvciIsImNsZWFyVGltZW91dCIsImNsb3NlIiwicyIsIm1vdmluZyIsInRvTG9jYWxlVGltZVN0cmluZyIsImdldERldmljZVN0YXR1cyIsIm1vZGVsIiwicmVmcmVzaFN0YXR1cyIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJjYXRjaCIsInNldFB1bXAiLCJwdW1wIiwibGV2ZWwiLCJzZW5kQ29udHJvbENvbW1hbmQiLCJtZXNzYWdlIiwic2V0TGlnaHQiLCJzZXRBaXJQdW1wIiwic2V0UmVsYXkyIiwib24iLCJzZXRSZWxheTMiLCJ0cmlnZ2VyU2Vydm8iLCJlbGFwc2VkIiwidG9nZ2xlUG93ZXIiLCJpc1Bvd2VyZWQiLCJjbWQiLCJjb25maXJtVGV4dCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJtb2RhbFJlcyIsImNvbmZpcm0iLCJleGVjdXRlUG93ZXJDbWQiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQThKQTtBQUNBO0FBL0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsZUFLZTtFQUNiQSxJQUFJLGtCQUFHO0lBQ0wsT0FBTztNQUNMQyxTQUFTLEVBQUUsRUFBRTtNQUNiQyxXQUFXLEVBQUUsRUFBRTtNQUNmQyxNQUFNLEVBQUU7UUFDTkMsTUFBTSxFQUFFLEtBQUs7UUFDYkMsU0FBUyxFQUFFLENBQUM7UUFDWkMsU0FBUyxFQUFFLENBQUM7UUFDWkMsWUFBWSxFQUFFLENBQUM7UUFDZkMsV0FBVyxFQUFFLEtBQUs7UUFDbEJDLFdBQVcsRUFBRSxLQUFLO1FBQ2xCQyxXQUFXLEVBQUUsS0FBSztRQUNsQkMsV0FBVyxFQUFFLEtBQUs7UUFDbEJDLFlBQVksRUFBRSxDQUFDO1FBQ2ZDLGNBQWMsRUFBRSxDQUFDO1FBQ2pCQyxRQUFRLEVBQUUsQ0FBQztRQUNYQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ25CQyxhQUFhLEVBQUU7TUFDakIsQ0FBQztNQUNEQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7TUFDbkNDLGNBQWMsRUFBRSxFQUFFO01BQ2xCQyxLQUFLLEVBQUUsSUFBSTtNQUNYQyxhQUFhLEVBQUUsS0FBSztNQUNwQkMsV0FBVyxFQUFFLEVBQUU7TUFDZkMsWUFBWSxFQUFFLEVBQUU7TUFDaEJDLGFBQWEsRUFBRSxFQUFFO01BQ2pCQyxFQUFFLEVBQUUsSUFBSTtNQUNSQyxXQUFXLEVBQUUsS0FBSztNQUNsQkMsZ0JBQWdCLEVBQUUsSUFBSTtNQUN0QkMsVUFBVSxFQUFFLElBQUk7TUFDaEJDLGNBQWMsRUFBRSxDQUFDO01BQ2pCQyxhQUFhLEVBQUU7SUFDakIsQ0FBQztFQUNILENBQUM7RUFDREMsUUFBUSxFQUFFO0lBQ1JDLGNBQWMsNEJBQUc7TUFDZixPQUFPLEVBQUU7SUFDWCxDQUFDO0lBQ0RDLGNBQWMsNEJBQUc7TUFDZixPQUFPLEVBQUU7SUFDWCxDQUFDO0lBQ0RDLGdCQUFnQiw4QkFBRztNQUNqQixJQUFNQyxDQUFDLEdBQUcsSUFBSSxDQUFDL0IsTUFBTSxDQUFDVyxRQUFRLElBQUksQ0FBQztNQUNuQyxJQUFJb0IsQ0FBQyxHQUFHLEdBQUcsRUFBRSxPQUFPLEdBQUc7TUFDdkIsSUFBSUEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxPQUFPLEdBQUc7TUFDdkIsSUFBSUEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxPQUFPLEdBQUc7TUFDdkIsT0FBTyxHQUFHO0lBQ1osQ0FBQztJQUNEQyxpQkFBaUIsK0JBQUc7TUFDbEIsSUFBTUQsQ0FBQyxHQUFHLElBQUksQ0FBQy9CLE1BQU0sQ0FBQ1csUUFBUSxJQUFJLENBQUM7TUFDbkMsSUFBSW9CLENBQUMsR0FBRyxHQUFHLEVBQUUsT0FBTyxjQUFjO01BQ2xDLElBQUlBLENBQUMsR0FBRyxHQUFHLEVBQUUsT0FBTyxTQUFTO01BQzdCLElBQUlBLENBQUMsR0FBRyxHQUFHLEVBQUUsT0FBTyxTQUFTO01BQzdCLE9BQU8sU0FBUztJQUNsQjtFQUNGLENBQUM7RUFDREUsTUFBTSxrQkFBQ0MsT0FBTyxFQUFFO0lBQUE7SUFDZCxJQUFJLENBQUNwQyxTQUFTLEdBQUdvQyxPQUFPLENBQUNDLFVBQVUsSUFBSSxFQUFFO0lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUNyQyxTQUFTLEVBQUU7TUFDbkJzQyxHQUFHLENBQUNDLFNBQVMsQ0FBQztRQUFFQyxLQUFLLEVBQUUsUUFBUTtRQUFFQyxJQUFJLEVBQUU7TUFBTyxDQUFDLENBQUM7TUFDaEQ7SUFDRjtJQUVBLElBQUksQ0FBQ0MsVUFBVSxFQUFFOztJQUVqQjtJQUNBLElBQUksQ0FBQ0MsU0FBUyxFQUFFOztJQUVoQjtJQUNBLElBQUFDLHdCQUFtQixFQUFDLElBQUksQ0FBQzVDLFNBQVMsQ0FBQyxDQUFDNkMsSUFBSSxDQUFDLFlBQU07TUFDN0NDLFVBQVUsQ0FBQztRQUFBLE9BQU0sS0FBSSxDQUFDSixVQUFVLEVBQUU7TUFBQSxHQUFFLEdBQUcsQ0FBQztJQUMxQyxDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFJLENBQUN4QixLQUFLLEdBQUc2QixXQUFXLENBQUMsWUFBTTtNQUM3QixLQUFJLENBQUNMLFVBQVUsRUFBRTtNQUNqQixLQUFJLENBQUNNLGlCQUFpQixFQUFFO0lBQzFCLENBQUMsRUFBRSxLQUFLLENBQUM7O0lBRVQ7SUFDQSxJQUFJLENBQUN0QixVQUFVLEdBQUdxQixXQUFXLENBQUMsWUFBTTtNQUNsQyxLQUFJLENBQUNDLGlCQUFpQixFQUFFO0lBQzFCLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDVixDQUFDO0VBQ0RDLFFBQVEsc0JBQUc7SUFDVCxJQUFJLElBQUksQ0FBQy9CLEtBQUssRUFBRTtNQUNkZ0MsYUFBYSxDQUFDLElBQUksQ0FBQ2hDLEtBQUssQ0FBQztJQUMzQjtJQUNBLElBQUksSUFBSSxDQUFDUSxVQUFVLEVBQUU7TUFDbkJ3QixhQUFhLENBQUMsSUFBSSxDQUFDeEIsVUFBVSxDQUFDO0lBQ2hDO0lBQ0EsSUFBSSxDQUFDeUIsWUFBWSxFQUFFO0VBQ3JCLENBQUM7RUFDREMsT0FBTyxFQUFFO0lBQ1BDLFdBQVcsdUJBQUNDLE1BQU0sRUFBRUMsV0FBVyxFQUFFO01BQy9CLElBQU1DLEdBQUcsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDeEQsU0FBUyxHQUFHLEdBQUcsR0FBR3NELE1BQU07TUFDeEQsSUFBTUcsSUFBSSxHQUFHbkIsR0FBRyxDQUFDb0IsY0FBYyxDQUFDRixHQUFHLENBQUM7TUFDcEMsT0FBT0MsSUFBSSxJQUFJRixXQUFXO0lBQzVCLENBQUM7SUFFREksY0FBYyw0QkFBRztNQUNmLElBQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDRCxHQUFHLEVBQUU7TUFDdEIsSUFBSUEsR0FBRyxHQUFHLElBQUksQ0FBQ2hDLGFBQWEsR0FBRyxJQUFJLEVBQUU7UUFDbkNVLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO1VBQUVDLEtBQUssRUFBRSxVQUFVO1VBQUVDLElBQUksRUFBRTtRQUFPLENBQUMsQ0FBQztRQUNsRCxPQUFPLEtBQUs7TUFDZDtNQUNBLElBQUksQ0FBQ2IsYUFBYSxHQUFHZ0MsR0FBRztNQUN4QixPQUFPLElBQUk7SUFDYixDQUFDO0lBRURFLFdBQVcsdUJBQUNSLE1BQU0sRUFBRUMsV0FBVyxFQUFFO01BQy9CLElBQUksQ0FBQ2xDLFlBQVksR0FBR2lDLE1BQU07TUFDMUIsSUFBSSxDQUFDaEMsYUFBYSxHQUFHaUMsV0FBVztNQUNoQyxJQUFJLENBQUNuQyxXQUFXLEdBQUcsSUFBSSxDQUFDaUMsV0FBVyxDQUFDQyxNQUFNLEVBQUVDLFdBQVcsQ0FBQztNQUN4RCxJQUFJLElBQUksQ0FBQ25DLFdBQVcsS0FBS21DLFdBQVcsRUFBRTtRQUNwQyxJQUFJLENBQUNuQyxXQUFXLEdBQUcsRUFBRTtNQUN2QjtNQUNBLElBQUksQ0FBQ0QsYUFBYSxHQUFHLElBQUk7SUFDM0IsQ0FBQztJQUVENEMsWUFBWSwwQkFBRztNQUNiLElBQUksQ0FBQzVDLGFBQWEsR0FBRyxLQUFLO01BQzFCLElBQUksQ0FBQ0UsWUFBWSxHQUFHLEVBQUU7TUFDdEIsSUFBSSxDQUFDRCxXQUFXLEdBQUcsRUFBRTtJQUN2QixDQUFDO0lBRUQ0QyxhQUFhLDJCQUFHO01BQ2QsSUFBSSxDQUFDLElBQUksQ0FBQzNDLFlBQVksRUFBRTtNQUN4QixJQUFNbUMsR0FBRyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUN4RCxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQ3FCLFlBQVk7TUFDbkUsSUFBSSxJQUFJLENBQUNELFdBQVcsSUFBSSxJQUFJLENBQUNBLFdBQVcsQ0FBQzZDLElBQUksRUFBRSxFQUFFO1FBQy9DM0IsR0FBRyxDQUFDNEIsY0FBYyxDQUFDVixHQUFHLEVBQUUsSUFBSSxDQUFDcEMsV0FBVyxDQUFDNkMsSUFBSSxFQUFFLENBQUM7UUFDaEQzQixHQUFHLENBQUNDLFNBQVMsQ0FBQztVQUFFQyxLQUFLLEVBQUUsT0FBTztVQUFFQyxJQUFJLEVBQUU7UUFBVSxDQUFDLENBQUM7TUFDcEQsQ0FBQyxNQUFNO1FBQ0xILEdBQUcsQ0FBQzZCLGlCQUFpQixDQUFDWCxHQUFHLENBQUM7UUFDMUJsQixHQUFHLENBQUNDLFNBQVMsQ0FBQztVQUFFQyxLQUFLLEVBQUUsU0FBUztVQUFFQyxJQUFJLEVBQUU7UUFBTyxDQUFDLENBQUM7TUFDbkQ7TUFDQSxJQUFJLENBQUNzQixZQUFZLEVBQUU7SUFDckIsQ0FBQztJQUVEO0lBQ0FLLFlBQVksMEJBQUc7TUFDYixJQUFJO1FBQ0YsSUFBSUMsTUFBTSxJQUFJQSxNQUFNLENBQUNDLFFBQVEsRUFBRTtVQUM3QixzQkFBZUQsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUk7UUFDckM7TUFDRixDQUFDLENBQUMsT0FBT0MsQ0FBQyxFQUFFLENBQUM7TUFDYixPQUFPLDJCQUEyQjtJQUNwQyxDQUFDO0lBRUQ3QixTQUFTLHVCQUFHO01BQUE7TUFDVixJQUFJLElBQUksQ0FBQ3BCLEVBQUUsRUFBRTtNQUNiLElBQU1rRCxLQUFLLEdBQUcsSUFBQUMsdUJBQWMsR0FBRTtNQUM5QixJQUFJLENBQUNELEtBQUssRUFBRTtNQUVaLElBQUk7UUFDRixJQUFNRSxPQUFPLEdBQUcsSUFBSSxDQUFDUCxZQUFZLEVBQUU7UUFDbkMsSUFBSSxDQUFDN0MsRUFBRSxHQUFHZSxHQUFHLENBQUNzQyxhQUFhLENBQUM7VUFDMUJDLEdBQUcsWUFBS0YsT0FBTyxlQUFZO1VBQzNCRyxPQUFPLEVBQUUsbUJBQU0sQ0FBQztRQUNsQixDQUFDLENBQUM7UUFFRixJQUFJLENBQUN2RCxFQUFFLENBQUN3RCxNQUFNLENBQUMsWUFBTTtVQUNuQixNQUFJLENBQUN2RCxXQUFXLEdBQUcsSUFBSTtVQUN2QmMsR0FBRyxDQUFDMEMsaUJBQWlCLENBQUM7WUFDcEJqRixJQUFJLEVBQUVrRixJQUFJLENBQUNDLFNBQVMsQ0FBQztjQUFFQyxJQUFJLEVBQUUsTUFBTTtjQUFFVixLQUFLLEVBQUxBO1lBQU0sQ0FBQztVQUM5QyxDQUFDLENBQUM7VUFDRm5DLEdBQUcsQ0FBQzBDLGlCQUFpQixDQUFDO1lBQ3BCakYsSUFBSSxFQUFFa0YsSUFBSSxDQUFDQyxTQUFTLENBQUM7Y0FBRUMsSUFBSSxFQUFFLFdBQVc7Y0FBRTlDLFVBQVUsRUFBRSxNQUFJLENBQUNyQztZQUFVLENBQUM7VUFDeEUsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDdUIsRUFBRSxDQUFDNkQsU0FBUyxDQUFDLFVBQUNDLEdBQUcsRUFBSztVQUN6QixJQUFJO1lBQ0YsSUFBTUMsR0FBRyxHQUFHTCxJQUFJLENBQUNNLEtBQUssQ0FBQ0YsR0FBRyxDQUFDdEYsSUFBSSxDQUFDO1lBQ2hDLElBQUl1RixHQUFHLENBQUNILElBQUksS0FBSyxlQUFlLElBQUlHLEdBQUcsQ0FBQ2pELFVBQVUsS0FBSyxNQUFJLENBQUNyQyxTQUFTLEVBQUU7Y0FDckUsTUFBSSxDQUFDd0Ysa0JBQWtCLENBQUNGLEdBQUcsQ0FBQztZQUM5QjtVQUNGLENBQUMsQ0FBQyxPQUFPZCxDQUFDLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ2pELEVBQUUsQ0FBQ2tFLE9BQU8sQ0FBQyxZQUFNO1VBQ3BCLE1BQUksQ0FBQ2pFLFdBQVcsR0FBRyxLQUFLO1VBQ3hCLE1BQUksQ0FBQ0QsRUFBRSxHQUFHLElBQUk7VUFDZCxJQUFJLENBQUMsTUFBSSxDQUFDRSxnQkFBZ0IsRUFBRTtZQUMxQixNQUFJLENBQUNBLGdCQUFnQixHQUFHcUIsVUFBVSxDQUFDLFlBQU07Y0FDdkMsTUFBSSxDQUFDckIsZ0JBQWdCLEdBQUcsSUFBSTtjQUM1QixNQUFJLENBQUNrQixTQUFTLEVBQUU7WUFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQztVQUNWO1FBQ0YsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDcEIsRUFBRSxDQUFDbUUsT0FBTyxDQUFDLFlBQU07VUFDcEIsTUFBSSxDQUFDbEUsV0FBVyxHQUFHLEtBQUs7UUFDMUIsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDLE9BQU9nRCxDQUFDLEVBQUU7UUFDVixhQUFZLHdCQUF3QixFQUFFQSxDQUFDO01BQ3pDO0lBQ0YsQ0FBQztJQUVEckIsWUFBWSwwQkFBRztNQUNiLElBQUksSUFBSSxDQUFDMUIsZ0JBQWdCLEVBQUU7UUFDekJrRSxZQUFZLENBQUMsSUFBSSxDQUFDbEUsZ0JBQWdCLENBQUM7UUFDbkMsSUFBSSxDQUFDQSxnQkFBZ0IsR0FBRyxJQUFJO01BQzlCO01BQ0EsSUFBSSxJQUFJLENBQUNGLEVBQUUsRUFBRTtRQUNYLElBQUksQ0FBQ0EsRUFBRSxDQUFDcUUsS0FBSyxFQUFFO1FBQ2YsSUFBSSxDQUFDckUsRUFBRSxHQUFHLElBQUk7UUFDZCxJQUFJLENBQUNDLFdBQVcsR0FBRyxLQUFLO01BQzFCO0lBQ0YsQ0FBQztJQUVEZ0Usa0JBQWtCLDhCQUFDRixHQUFHLEVBQUU7TUFDdEIsSUFBTU8sQ0FBQyxHQUFHUCxHQUFHLENBQUNwRixNQUFNLElBQUksQ0FBQyxDQUFDO01BQzFCLElBQU00RixNQUFNLEdBQUdELENBQUMsQ0FBQ25GLFdBQVcsSUFBSSxLQUFLO01BQ3JDLElBQUlvRixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUNuRSxjQUFjLEVBQUU7UUFDbEMsSUFBSSxDQUFDQSxjQUFjLEdBQUdrQyxJQUFJLENBQUNELEdBQUcsRUFBRTtNQUNsQztNQUNBLElBQUksQ0FBQ2tDLE1BQU0sRUFBRTtRQUNYLElBQUksQ0FBQ25FLGNBQWMsR0FBRyxDQUFDO01BQ3pCO01BQ0EsSUFBSSxDQUFDekIsTUFBTSxHQUFHO1FBQ1pDLE1BQU0sRUFBRW1GLEdBQUcsQ0FBQ25GLE1BQU0sSUFBSSxLQUFLO1FBQzNCQyxTQUFTLEVBQUV5RixDQUFDLENBQUN6RixTQUFTLElBQUksQ0FBQztRQUMzQkMsU0FBUyxFQUFFd0YsQ0FBQyxDQUFDeEYsU0FBUyxJQUFJLENBQUM7UUFDM0JDLFlBQVksRUFBRXVGLENBQUMsQ0FBQ3ZGLFlBQVksSUFBSSxDQUFDO1FBQ2pDQyxXQUFXLEVBQUVzRixDQUFDLENBQUN0RixXQUFXLElBQUksS0FBSztRQUNuQ0MsV0FBVyxFQUFFcUYsQ0FBQyxDQUFDckYsV0FBVyxJQUFJLEtBQUs7UUFDbkNDLFdBQVcsRUFBRW9GLENBQUMsQ0FBQ3BGLFdBQVcsSUFBSSxLQUFLO1FBQ25DQyxXQUFXLEVBQUVtRixDQUFDLENBQUNuRixXQUFXLElBQUksS0FBSztRQUNuQ0MsWUFBWSxFQUFFa0YsQ0FBQyxDQUFDbEYsWUFBWSxJQUFJLENBQUM7UUFDakNDLGNBQWMsRUFBRWlGLENBQUMsQ0FBQ2pGLGNBQWMsSUFBSSxDQUFDO1FBQ3JDQyxRQUFRLEVBQUVnRixDQUFDLENBQUNoRixRQUFRLElBQUksQ0FBQztRQUN6QkMsZ0JBQWdCLEVBQUUrRSxDQUFDLENBQUMvRSxnQkFBZ0IsSUFBSSxDQUFDO1FBQ3pDQyxhQUFhLEVBQUU4RSxDQUFDLENBQUM5RSxhQUFhLEtBQUs7TUFDckMsQ0FBQztNQUNELElBQUksQ0FBQ0UsY0FBYyxHQUFHLElBQUk0QyxJQUFJLEVBQUUsQ0FBQ2tDLGtCQUFrQixFQUFFO0lBQ3ZELENBQUM7SUFFS3JELFVBQVUsd0JBQUc7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUVHLElBQUFzRCxvQkFBZSxFQUFDLE1BQUksQ0FBQ2hHLFNBQVMsQ0FBQztjQUFBO2dCQUEzQ3FGLEdBQUc7Z0JBQ1QsSUFBSUEsR0FBRyxDQUFDUCxPQUFPLEVBQUU7a0JBQ2YsTUFBSSxDQUFDN0UsV0FBVyxHQUFHb0YsR0FBRyxDQUFDWSxLQUFLLElBQUksRUFBRTtrQkFDNUJKLENBQUMsR0FBR1IsR0FBRyxDQUFDbkYsTUFBTSxJQUFJLENBQUMsQ0FBQztrQkFDcEI0RixNQUFNLEdBQUdELENBQUMsQ0FBQ25GLFdBQVcsSUFBSSxLQUFLO2tCQUNyQyxJQUFJb0YsTUFBTSxJQUFJLENBQUMsTUFBSSxDQUFDbkUsY0FBYyxFQUFFO29CQUNsQyxNQUFJLENBQUNBLGNBQWMsR0FBR2tDLElBQUksQ0FBQ0QsR0FBRyxFQUFFO2tCQUNsQztrQkFDQSxJQUFJLENBQUNrQyxNQUFNLEVBQUU7b0JBQ1gsTUFBSSxDQUFDbkUsY0FBYyxHQUFHLENBQUM7a0JBQ3pCO2tCQUNBLE1BQUksQ0FBQ3pCLE1BQU0sR0FBRztvQkFDWkMsTUFBTSxFQUFFa0YsR0FBRyxDQUFDbEYsTUFBTSxJQUFJLEtBQUs7b0JBQzNCQyxTQUFTLEVBQUV5RixDQUFDLENBQUN6RixTQUFTLElBQUksQ0FBQztvQkFDM0JDLFNBQVMsRUFBRXdGLENBQUMsQ0FBQ3hGLFNBQVMsSUFBSSxDQUFDO29CQUMzQkMsWUFBWSxFQUFFdUYsQ0FBQyxDQUFDdkYsWUFBWSxJQUFJLENBQUM7b0JBQ2pDQyxXQUFXLEVBQUVzRixDQUFDLENBQUN0RixXQUFXLElBQUksS0FBSztvQkFDbkNDLFdBQVcsRUFBRXFGLENBQUMsQ0FBQ3JGLFdBQVcsSUFBSSxLQUFLO29CQUNuQ0MsV0FBVyxFQUFFb0YsQ0FBQyxDQUFDcEYsV0FBVyxJQUFJLEtBQUs7b0JBQ25DQyxXQUFXLEVBQUVtRixDQUFDLENBQUNuRixXQUFXLElBQUksS0FBSztvQkFDbkNDLFlBQVksRUFBRWtGLENBQUMsQ0FBQ2xGLFlBQVksSUFBSSxDQUFDO29CQUNqQ0MsY0FBYyxFQUFFaUYsQ0FBQyxDQUFDakYsY0FBYyxJQUFJLENBQUM7b0JBQ3JDQyxRQUFRLEVBQUVnRixDQUFDLENBQUNoRixRQUFRLElBQUksQ0FBQztvQkFDekJDLGdCQUFnQixFQUFFK0UsQ0FBQyxDQUFDL0UsZ0JBQWdCLElBQUksQ0FBQztvQkFDekNDLGFBQWEsRUFBRThFLENBQUMsQ0FBQzlFLGFBQWEsS0FBSztrQkFDckMsQ0FBQztrQkFDRCxNQUFJLENBQUNFLGNBQWMsR0FBRyxJQUFJNEMsSUFBSSxFQUFFLENBQUNrQyxrQkFBa0IsRUFBRTtnQkFDdkQ7Z0JBQUM7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFRCxNQUFJLENBQUM3RixNQUFNLENBQUNDLE1BQU0sR0FBRyxLQUFLO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRTlCLENBQUM7SUFFRCtGLGFBQWEsMkJBQUc7TUFBQTtNQUNkNUQsR0FBRyxDQUFDNkQsV0FBVyxDQUFDO1FBQUUzRCxLQUFLLEVBQUU7TUFBUyxDQUFDLENBQUM7TUFDcEMsSUFBQUksd0JBQW1CLEVBQUMsSUFBSSxDQUFDNUMsU0FBUyxDQUFDLENBQUM2QyxJQUFJLENBQUMsWUFBTTtRQUM3Q0MsVUFBVSxDQUFDLFlBQU07VUFDZixNQUFJLENBQUNKLFVBQVUsRUFBRSxDQUFDRyxJQUFJLENBQUMsWUFBTTtZQUMzQlAsR0FBRyxDQUFDOEQsV0FBVyxFQUFFO1VBQ25CLENBQUMsQ0FBQztRQUNKLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDVCxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQU07UUFDYixNQUFJLENBQUMzRCxVQUFVLEVBQUUsQ0FBQ0csSUFBSSxDQUFDLFlBQU07VUFDM0JQLEdBQUcsQ0FBQzhELFdBQVcsRUFBRTtRQUNuQixDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUtFLE9BQU8sbUJBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsSUFDcEIsTUFBSSxDQUFDdEcsTUFBTSxDQUFDQyxNQUFNO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUNyQm1DLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO2tCQUFFQyxLQUFLLEVBQUUsTUFBTTtrQkFBRUMsSUFBSSxFQUFFO2dCQUFPLENBQUMsQ0FBQztnQkFBQTtjQUFBO2dCQUFBLElBRzNDLE1BQUksQ0FBQ2tCLGNBQWMsRUFBRTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUUxQixNQUFJLENBQUN6RCxNQUFNLGNBQU9xRyxJQUFJLFdBQVEsR0FBR0MsS0FBSztnQkFBQTtnQkFBQTtnQkFBQSxPQUdsQixJQUFBQyx1QkFBa0IsRUFBQyxNQUFJLENBQUN6RyxTQUFTLEVBQUUsVUFBVSxFQUFFO2tCQUFFdUcsSUFBSSxFQUFKQSxJQUFJO2tCQUFFQyxLQUFLLEVBQUxBO2dCQUFNLENBQUMsQ0FBQztjQUFBO2dCQUEzRW5CLEdBQUc7Z0JBQ1QsSUFBSUEsR0FBRyxDQUFDUCxPQUFPLEVBQUU7a0JBQ2ZoQyxVQUFVLENBQUM7b0JBQUEsT0FBTSxNQUFJLENBQUNKLFVBQVUsRUFBRTtrQkFBQSxHQUFFLEdBQUcsQ0FBQztrQkFDeENKLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO29CQUFFQyxLQUFLLEVBQUUsTUFBTTtvQkFBRUMsSUFBSSxFQUFFO2tCQUFVLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxNQUFNO2tCQUNMSCxHQUFHLENBQUNDLFNBQVMsQ0FBQztvQkFBRUMsS0FBSyxFQUFFNkMsR0FBRyxDQUFDcUIsT0FBTyxJQUFJLE1BQU07b0JBQUVqRSxJQUFJLEVBQUU7a0JBQU8sQ0FBQyxDQUFDO2dCQUMvRDtnQkFBQztnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVESCxHQUFHLENBQUNDLFNBQVMsQ0FBQztrQkFBRUMsS0FBSyxFQUFFLE1BQU07a0JBQUVDLElBQUksRUFBRTtnQkFBTyxDQUFDLENBQUM7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFFbEQsQ0FBQztJQUVLa0UsUUFBUSxvQkFBQ0gsS0FBSyxFQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsSUFDZixNQUFJLENBQUN0RyxNQUFNLENBQUNDLE1BQU07a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ3JCbUMsR0FBRyxDQUFDQyxTQUFTLENBQUM7a0JBQUVDLEtBQUssRUFBRSxNQUFNO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQU8sQ0FBQyxDQUFDO2dCQUFBO2NBQUE7Z0JBQUEsSUFHM0MsTUFBSSxDQUFDa0IsY0FBYyxFQUFFO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBRTFCLE1BQUksQ0FBQ3pELE1BQU0sQ0FBQ0csU0FBUyxHQUFHbUcsS0FBSztnQkFBQTtnQkFBQTtnQkFBQSxPQUdULElBQUFDLHVCQUFrQixFQUFDLE1BQUksQ0FBQ3pHLFNBQVMsRUFBRSxXQUFXLEVBQUU7a0JBQUV3RyxLQUFLLEVBQUxBO2dCQUFNLENBQUMsQ0FBQztjQUFBO2dCQUF0RW5CLEdBQUc7Z0JBQ1QsSUFBSUEsR0FBRyxDQUFDUCxPQUFPLEVBQUU7a0JBQ2ZoQyxVQUFVLENBQUM7b0JBQUEsT0FBTSxNQUFJLENBQUNKLFVBQVUsRUFBRTtrQkFBQSxHQUFFLEdBQUcsQ0FBQztrQkFDeENKLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO29CQUFFQyxLQUFLLEVBQUUsTUFBTTtvQkFBRUMsSUFBSSxFQUFFO2tCQUFVLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxNQUFNO2tCQUNMSCxHQUFHLENBQUNDLFNBQVMsQ0FBQztvQkFBRUMsS0FBSyxFQUFFNkMsR0FBRyxDQUFDcUIsT0FBTyxJQUFJLE1BQU07b0JBQUVqRSxJQUFJLEVBQUU7a0JBQU8sQ0FBQyxDQUFDO2dCQUMvRDtnQkFBQztnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVESCxHQUFHLENBQUNDLFNBQVMsQ0FBQztrQkFBRUMsS0FBSyxFQUFFLE1BQU07a0JBQUVDLElBQUksRUFBRTtnQkFBTyxDQUFDLENBQUM7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFFbEQsQ0FBQztJQUVLbUUsVUFBVSxzQkFBQ0osS0FBSyxFQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsSUFDakIsTUFBSSxDQUFDdEcsTUFBTSxDQUFDQyxNQUFNO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFJbUMsR0FBRyxDQUFDQyxTQUFTLENBQUM7a0JBQUVDLEtBQUssRUFBRSxNQUFNO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQU8sQ0FBQyxDQUFDO2dCQUFDO2NBQUE7Z0JBQUEsSUFDckUsTUFBSSxDQUFDa0IsY0FBYyxFQUFFO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQzFCLE1BQUksQ0FBQ3pELE1BQU0sQ0FBQ0ksWUFBWSxHQUFHa0csS0FBSztnQkFBQTtnQkFBQTtnQkFBQSxPQUVaLElBQUFDLHVCQUFrQixFQUFDLE1BQUksQ0FBQ3pHLFNBQVMsRUFBRSxjQUFjLEVBQUU7a0JBQUV3RyxLQUFLLEVBQUxBO2dCQUFNLENBQUMsQ0FBQztjQUFBO2dCQUF6RW5CLEdBQUc7Z0JBQ1QsSUFBSUEsR0FBRyxDQUFDUCxPQUFPLEVBQUU7a0JBQUVoQyxVQUFVLENBQUM7b0JBQUEsT0FBTSxNQUFJLENBQUNKLFVBQVUsRUFBRTtrQkFBQSxHQUFFLEdBQUcsQ0FBQztrQkFBRUosR0FBRyxDQUFDQyxTQUFTLENBQUM7b0JBQUVDLEtBQUssRUFBRSxNQUFNO29CQUFFQyxJQUFJLEVBQUU7a0JBQVUsQ0FBQyxDQUFDO2dCQUFDLENBQUMsTUFDM0c7a0JBQUVILEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO29CQUFFQyxLQUFLLEVBQUU2QyxHQUFHLENBQUNxQixPQUFPLElBQUksTUFBTTtvQkFBRWpFLElBQUksRUFBRTtrQkFBTyxDQUFDLENBQUM7Z0JBQUM7Z0JBQUM7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFDMURILEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO2tCQUFFQyxLQUFLLEVBQUUsTUFBTTtrQkFBRUMsSUFBSSxFQUFFO2dCQUFPLENBQUMsQ0FBQztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUM5RCxDQUFDO0lBRUtvRSxTQUFTLHFCQUFDQyxFQUFFLEVBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxJQUNiLE1BQUksQ0FBQzVHLE1BQU0sQ0FBQ0MsTUFBTTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBSW1DLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO2tCQUFFQyxLQUFLLEVBQUUsTUFBTTtrQkFBRUMsSUFBSSxFQUFFO2dCQUFPLENBQUMsQ0FBQztnQkFBQztjQUFBO2dCQUFBLElBQ3JFLE1BQUksQ0FBQ2tCLGNBQWMsRUFBRTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUMxQixNQUFJLENBQUN6RCxNQUFNLENBQUNNLFdBQVcsR0FBR3NHLEVBQUU7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFUixJQUFBTCx1QkFBa0IsRUFBQyxNQUFJLENBQUN6RyxTQUFTLEVBQUUsWUFBWSxFQUFFO2tCQUFFOEcsRUFBRSxFQUFGQTtnQkFBRyxDQUFDLENBQUM7Y0FBQTtnQkFBcEV6QixHQUFHO2dCQUNULElBQUlBLEdBQUcsQ0FBQ1AsT0FBTyxFQUFFO2tCQUFFaEMsVUFBVSxDQUFDO29CQUFBLE9BQU0sTUFBSSxDQUFDSixVQUFVLEVBQUU7a0JBQUEsR0FBRSxHQUFHLENBQUM7Z0JBQUMsQ0FBQyxNQUN4RDtrQkFBRUosR0FBRyxDQUFDQyxTQUFTLENBQUM7b0JBQUVDLEtBQUssRUFBRTZDLEdBQUcsQ0FBQ3FCLE9BQU8sSUFBSSxNQUFNO29CQUFFakUsSUFBSSxFQUFFO2tCQUFPLENBQUMsQ0FBQztnQkFBQztnQkFBQztnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUMxREgsR0FBRyxDQUFDQyxTQUFTLENBQUM7a0JBQUVDLEtBQUssRUFBRSxNQUFNO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQU8sQ0FBQyxDQUFDO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQzlELENBQUM7SUFFS3NFLFNBQVMscUJBQUNELEVBQUUsRUFBRTtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ2IsTUFBSSxDQUFDNUcsTUFBTSxDQUFDQyxNQUFNO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFJbUMsR0FBRyxDQUFDQyxTQUFTLENBQUM7a0JBQUVDLEtBQUssRUFBRSxNQUFNO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQU8sQ0FBQyxDQUFDO2dCQUFDO2NBQUE7Z0JBQUEsSUFDckUsTUFBSSxDQUFDa0IsY0FBYyxFQUFFO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQzFCLE1BQUksQ0FBQ3pELE1BQU0sQ0FBQ08sV0FBVyxHQUFHcUcsRUFBRTtnQkFBQTtnQkFBQTtnQkFBQSxPQUVSLElBQUFMLHVCQUFrQixFQUFDLE1BQUksQ0FBQ3pHLFNBQVMsRUFBRSxZQUFZLEVBQUU7a0JBQUU4RyxFQUFFLEVBQUZBO2dCQUFHLENBQUMsQ0FBQztjQUFBO2dCQUFwRXpCLEdBQUc7Z0JBQ1QsSUFBSUEsR0FBRyxDQUFDUCxPQUFPLEVBQUU7a0JBQUVoQyxVQUFVLENBQUM7b0JBQUEsT0FBTSxNQUFJLENBQUNKLFVBQVUsRUFBRTtrQkFBQSxHQUFFLEdBQUcsQ0FBQztnQkFBQyxDQUFDLE1BQ3hEO2tCQUFFSixHQUFHLENBQUNDLFNBQVMsQ0FBQztvQkFBRUMsS0FBSyxFQUFFNkMsR0FBRyxDQUFDcUIsT0FBTyxJQUFJLE1BQU07b0JBQUVqRSxJQUFJLEVBQUU7a0JBQU8sQ0FBQyxDQUFDO2dCQUFDO2dCQUFDO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQzFESCxHQUFHLENBQUNDLFNBQVMsQ0FBQztrQkFBRUMsS0FBSyxFQUFFLE1BQU07a0JBQUVDLElBQUksRUFBRTtnQkFBTyxDQUFDLENBQUM7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFDOUQsQ0FBQztJQUVLdUUsWUFBWSwwQkFBRztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLE1BQ2YsQ0FBQyxPQUFJLENBQUM5RyxNQUFNLENBQUNDLE1BQU0sSUFBSSxPQUFJLENBQUNELE1BQU0sQ0FBQ1EsV0FBVztrQkFBQTtrQkFBQTtnQkFBQTtnQkFDaEQ0QixHQUFHLENBQUNDLFNBQVMsQ0FBQztrQkFBRUMsS0FBSyxFQUFFLFlBQVk7a0JBQUVDLElBQUksRUFBRTtnQkFBTyxDQUFDLENBQUM7Z0JBQUE7Y0FBQTtnQkFBQSxJQUdqRCxPQUFJLENBQUNrQixjQUFjLEVBQUU7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUdOLElBQUE4Qyx1QkFBa0IsRUFBQyxPQUFJLENBQUN6RyxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO2NBQUE7Z0JBQW5FcUYsR0FBRztnQkFDVCxJQUFJQSxHQUFHLENBQUNQLE9BQU8sRUFBRTtrQkFDZixPQUFJLENBQUM1RSxNQUFNLENBQUNRLFdBQVcsR0FBRyxJQUFJO2tCQUM5QixPQUFJLENBQUNpQixjQUFjLEdBQUdrQyxJQUFJLENBQUNELEdBQUcsRUFBRTtrQkFDaEN0QixHQUFHLENBQUNDLFNBQVMsQ0FBQztvQkFBRUMsS0FBSyxFQUFFLE9BQU87b0JBQUVDLElBQUksRUFBRTtrQkFBVSxDQUFDLENBQUM7Z0JBQ3BELENBQUMsTUFBTTtrQkFDTEgsR0FBRyxDQUFDQyxTQUFTLENBQUM7b0JBQUVDLEtBQUssRUFBRTZDLEdBQUcsQ0FBQ3FCLE9BQU8sSUFBSSxNQUFNO29CQUFFakUsSUFBSSxFQUFFO2tCQUFPLENBQUMsQ0FBQztnQkFDL0Q7Z0JBQUM7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFREgsR0FBRyxDQUFDQyxTQUFTLENBQUM7a0JBQUVDLEtBQUssRUFBRSxNQUFNO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQU8sQ0FBQyxDQUFDO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRWxELENBQUM7SUFFRE8saUJBQWlCLCtCQUFHO01BQ2xCLElBQUksSUFBSSxDQUFDOUMsTUFBTSxDQUFDUSxXQUFXLElBQUksSUFBSSxDQUFDaUIsY0FBYyxHQUFHLENBQUMsRUFBRTtRQUN0RCxJQUFNc0YsT0FBTyxHQUFHLENBQUNwRCxJQUFJLENBQUNELEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQ2pDLGNBQWMsSUFBSSxJQUFJO1FBQ3pELElBQUlzRixPQUFPLEdBQUcsQ0FBQyxFQUFFO1VBQ2YsSUFBSSxDQUFDL0csTUFBTSxDQUFDUSxXQUFXLEdBQUcsS0FBSztVQUMvQixJQUFJLENBQUNpQixjQUFjLEdBQUcsQ0FBQztRQUN6QjtNQUNGO0lBQ0YsQ0FBQztJQUVLdUYsV0FBVyx5QkFBRztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ2IsT0FBSSxDQUFDaEgsTUFBTSxDQUFDQyxNQUFNO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUNyQm1DLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO2tCQUFFQyxLQUFLLEVBQUUsTUFBTTtrQkFBRUMsSUFBSSxFQUFFO2dCQUFPLENBQUMsQ0FBQztnQkFBQTtjQUFBO2dCQUkxQzBFLFNBQVMsR0FBRyxPQUFJLENBQUNqSCxNQUFNLENBQUNhLGFBQWE7Z0JBQ3JDcUcsR0FBRyxHQUFHRCxTQUFTLEdBQUcsV0FBVyxHQUFHLFVBQVU7Z0JBQzFDRSxXQUFXLEdBQUdGLFNBQVMsR0FBRyw2QkFBNkIsR0FBRyxTQUFTO2dCQUV6RTdFLEdBQUcsQ0FBQ2dGLFNBQVMsQ0FBQztrQkFDWjlFLEtBQUssRUFBRSxNQUFNO2tCQUNiK0UsT0FBTyxFQUFFRixXQUFXO2tCQUNwQnZDLE9BQU8sRUFBRSxpQkFBQzBDLFFBQVEsRUFBSztvQkFDckIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLE9BQU8sRUFBRTtvQkFDdkIsT0FBSSxDQUFDQyxlQUFlLENBQUNOLEdBQUcsQ0FBQztrQkFDM0I7Z0JBQ0YsQ0FBQyxDQUFDO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0osQ0FBQztJQUVLTSxlQUFlLDJCQUFDTixHQUFHLEVBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxJQUNwQixPQUFJLENBQUN6RCxjQUFjLEVBQUU7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUVILElBQUE4Qyx1QkFBa0IsRUFBQyxPQUFJLENBQUN6RyxTQUFTLEVBQUVvSCxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Y0FBQTtnQkFBMURPLE1BQU07Z0JBQ1osSUFBSUEsTUFBTSxDQUFDN0MsT0FBTyxFQUFFO2tCQUNsQixPQUFJLENBQUM1RSxNQUFNLENBQUNhLGFBQWEsR0FBR3FHLEdBQUcsS0FBSyxVQUFVO2tCQUM5QzlFLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO29CQUFFQyxLQUFLLEVBQUU0RSxHQUFHLEtBQUssVUFBVSxHQUFHLE1BQU0sR0FBRyxNQUFNO29CQUFFM0UsSUFBSSxFQUFFO2tCQUFVLENBQUMsQ0FBQztrQkFDL0VLLFVBQVUsQ0FBQztvQkFBQSxPQUFNLE9BQUksQ0FBQ0osVUFBVSxFQUFFO2tCQUFBLEdBQUUsSUFBSSxDQUFDO2dCQUMzQyxDQUFDLE1BQU07a0JBQ0xKLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO29CQUFFQyxLQUFLLEVBQUVtRixNQUFNLENBQUNqQixPQUFPLElBQUksTUFBTTtvQkFBRWpFLElBQUksRUFBRTtrQkFBTyxDQUFDLENBQUM7Z0JBQ2xFO2dCQUFDO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBRURILEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO2tCQUFFQyxLQUFLLEVBQUUsTUFBTTtrQkFBRUMsSUFBSSxFQUFFO2dCQUFPLENBQUMsQ0FBQztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVsRDtFQUNGO0FBQ0YsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuaW1wb3J0IHsgZ2V0RGV2aWNlU3RhdHVzLCByZXF1ZXN0RGV2aWNlU3RhdHVzLCBzZW5kQ29udHJvbENvbW1hbmQsIGdldFRpbWVycywgc2F2ZVRpbWVycywgZGVsZXRlVGltZXIgYXMgZGVsZXRlVGltZXJBcGkgfSBmcm9tICdAL3V0aWxzL2FwaSdcbmltcG9ydCB7IGdldFBob25lTnVtYmVyIH0gZnJvbSAnQC91dGlscy9zdG9yYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRldmljZUtleTogJycsXG4gICAgICBkZXZpY2VNb2RlbDogJycsXG4gICAgICBzdGF0dXM6IHtcbiAgICAgICAgb25saW5lOiBmYWxzZSxcbiAgICAgICAgcHdtMUxldmVsOiAwLFxuICAgICAgICBwd20zTGV2ZWw6IDAsXG4gICAgICAgIGFpclB1bXBMZXZlbDogMCxcbiAgICAgICAgcmVsYXkxU3RhdGU6IGZhbHNlLFxuICAgICAgICByZWxheTJTdGF0ZTogZmFsc2UsXG4gICAgICAgIHJlbGF5M1N0YXRlOiBmYWxzZSxcbiAgICAgICAgc2Vydm9Nb3Zpbmc6IGZhbHNlLFxuICAgICAgICBhZGNXUVZvbHRhZ2U6IDAsXG4gICAgICAgIGFkY1RlbXBWb2x0YWdlOiAwLFxuICAgICAgICB0ZHNWYWx1ZTogMCxcbiAgICAgICAgd2F0ZXJUZW1wZXJhdHVyZTogMCxcbiAgICAgICAgc3lzdGVtUG93ZXJlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHB1bXBMZXZlbHM6IFsn5YWzJywgJ+S4gOahoycsICfkuozmoaMnLCAn5LiJ5qGjJ10sXG4gICAgICBsYXN0VXBkYXRlVGltZTogJycsXG4gICAgICB0aW1lcjogbnVsbCxcbiAgICAgIHJlbmFtZVZpc2libGU6IGZhbHNlLFxuICAgICAgcmVuYW1lVmFsdWU6ICcnLFxuICAgICAgcmVuYW1lVGFyZ2V0OiAnJyxcbiAgICAgIHJlbmFtZURlZmF1bHQ6ICcnLFxuICAgICAgd3M6IG51bGwsXG4gICAgICB3c0Nvbm5lY3RlZDogZmFsc2UsXG4gICAgICB3c1JlY29ubmVjdFRpbWVyOiBudWxsLFxuICAgICAgc2Vydm9UaW1lcjogbnVsbCxcbiAgICAgIHNlcnZvU3RhcnRUaW1lOiAwLFxuICAgICAgbGFzdENsaWNrVGltZTogMFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB0YXNrVHlwZUxhYmVscygpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH0sXG4gICAgZHVyYXRpb25MYWJlbHMoKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9LFxuICAgIHdhdGVyUXVhbGl0eVRleHQoKSB7XG4gICAgICBjb25zdCB2ID0gdGhpcy5zdGF0dXMudGRzVmFsdWUgfHwgMFxuICAgICAgaWYgKHYgPCAxNTApIHJldHVybiAn5LyYJ1xuICAgICAgaWYgKHYgPCAyMDApIHJldHVybiAn6ImvJ1xuICAgICAgaWYgKHYgPCA0MDApIHJldHVybiAn5LitJ1xuICAgICAgcmV0dXJuICflt64nXG4gICAgfSxcbiAgICB3YXRlclF1YWxpdHlDbGFzcygpIHtcbiAgICAgIGNvbnN0IHYgPSB0aGlzLnN0YXR1cy50ZHNWYWx1ZSB8fCAwXG4gICAgICBpZiAodiA8IDE1MCkgcmV0dXJuICd3cS1leGNlbGxlbnQnXG4gICAgICBpZiAodiA8IDIwMCkgcmV0dXJuICd3cS1nb29kJ1xuICAgICAgaWYgKHYgPCA0MDApIHJldHVybiAnd3EtZmFpcidcbiAgICAgIHJldHVybiAnd3EtcG9vcidcbiAgICB9XG4gIH0sXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy5kZXZpY2VLZXkgPSBvcHRpb25zLmRldmljZV9rZXkgfHwgJydcbiAgICBpZiAoIXRoaXMuZGV2aWNlS2V5KSB7XG4gICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIflj4LmlbDplJnor68nLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMubG9hZFN0YXR1cygpXG5cbiAgICAvLyDov57mjqUgV2ViU29ja2V0IOaOpeaUtuWunuaXtuaOqOmAgVxuICAgIHRoaXMuY29ubmVjdFdTKClcblxuICAgIC8vIOi/m+WFpemhtemdouiHquWKqOivt+axguacgOaWsOeKtuaAgVxuICAgIHJlcXVlc3REZXZpY2VTdGF0dXModGhpcy5kZXZpY2VLZXkpLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKVxuICAgIH0pXG5cbiAgICAvLyAxMOenkui9ruivolxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRTdGF0dXMoKVxuICAgICAgdGhpcy5jaGVja1NlcnZvVGltZW91dCgpXG4gICAgfSwgMTAwMDApXG5cbiAgICAvLyDoiLXmnLrotoXml7bmo4DmtYtcbiAgICB0aGlzLnNlcnZvVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrU2Vydm9UaW1lb3V0KClcbiAgICB9LCAyMDAwKVxuICB9LFxuICBvblVubG9hZCgpIHtcbiAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5zZXJ2b1RpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc2Vydm9UaW1lcilcbiAgICB9XG4gICAgdGhpcy5kaXNjb25uZWN0V1MoKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0Q3RybE5hbWUodGFyZ2V0LCBkZWZhdWx0TmFtZSkge1xuICAgICAgY29uc3Qga2V5ID0gJ2N0cmxfbmFtZV8nICsgdGhpcy5kZXZpY2VLZXkgKyAnXycgKyB0YXJnZXRcbiAgICAgIGNvbnN0IG5hbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoa2V5KVxuICAgICAgcmV0dXJuIG5hbWUgfHwgZGVmYXVsdE5hbWVcbiAgICB9LFxuXG4gICAgY2hlY2tSYXRlTGltaXQoKSB7XG4gICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICBpZiAobm93IC0gdGhpcy5sYXN0Q2xpY2tUaW1lIDwgMTAwMCkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfmk43kvZzov4flv6vvvIzmhaLngrnlk58nLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RDbGlja1RpbWUgPSBub3dcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcblxuICAgIHN0YXJ0UmVuYW1lKHRhcmdldCwgZGVmYXVsdE5hbWUpIHtcbiAgICAgIHRoaXMucmVuYW1lVGFyZ2V0ID0gdGFyZ2V0XG4gICAgICB0aGlzLnJlbmFtZURlZmF1bHQgPSBkZWZhdWx0TmFtZVxuICAgICAgdGhpcy5yZW5hbWVWYWx1ZSA9IHRoaXMuZ2V0Q3RybE5hbWUodGFyZ2V0LCBkZWZhdWx0TmFtZSlcbiAgICAgIGlmICh0aGlzLnJlbmFtZVZhbHVlID09PSBkZWZhdWx0TmFtZSkge1xuICAgICAgICB0aGlzLnJlbmFtZVZhbHVlID0gJydcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuYW1lVmlzaWJsZSA9IHRydWVcbiAgICB9LFxuXG4gICAgY2FuY2VsUmVuYW1lKCkge1xuICAgICAgdGhpcy5yZW5hbWVWaXNpYmxlID0gZmFsc2VcbiAgICAgIHRoaXMucmVuYW1lVGFyZ2V0ID0gJydcbiAgICAgIHRoaXMucmVuYW1lVmFsdWUgPSAnJ1xuICAgIH0sXG5cbiAgICBjb25maXJtUmVuYW1lKCkge1xuICAgICAgaWYgKCF0aGlzLnJlbmFtZVRhcmdldCkgcmV0dXJuXG4gICAgICBjb25zdCBrZXkgPSAnY3RybF9uYW1lXycgKyB0aGlzLmRldmljZUtleSArICdfJyArIHRoaXMucmVuYW1lVGFyZ2V0XG4gICAgICBpZiAodGhpcy5yZW5hbWVWYWx1ZSAmJiB0aGlzLnJlbmFtZVZhbHVlLnRyaW0oKSkge1xuICAgICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoa2V5LCB0aGlzLnJlbmFtZVZhbHVlLnRyaW0oKSlcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6YeN5ZG95ZCN5oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoa2V5KVxuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICflt7LmgaLlpI3pu5jorqTlkI3np7AnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FuY2VsUmVuYW1lKClcbiAgICB9LFxuXG4gICAgLy8gPT09PT0gV2ViU29ja2V0IOWunuaXtuaOqOmAgSA9PT09PVxuICAgIGdldFdTQmFzZVVSTCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGB3czovLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9YFxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgcmV0dXJuICd3czovLzExMi4xMjQuMTA3LjE1OTo3OTY1J1xuICAgIH0sXG5cbiAgICBjb25uZWN0V1MoKSB7XG4gICAgICBpZiAodGhpcy53cykgcmV0dXJuXG4gICAgICBjb25zdCBwaG9uZSA9IGdldFBob25lTnVtYmVyKClcbiAgICAgIGlmICghcGhvbmUpIHJldHVyblxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5nZXRXU0Jhc2VVUkwoKVxuICAgICAgICB0aGlzLndzID0gdW5pLmNvbm5lY3RTb2NrZXQoe1xuICAgICAgICAgIHVybDogYCR7YmFzZVVybH0vd3MvY2xpZW50YCxcbiAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7fVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMud3Mub25PcGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLndzQ29ubmVjdGVkID0gdHJ1ZVxuICAgICAgICAgIHVuaS5zZW5kU29ja2V0TWVzc2FnZSh7XG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdhdXRoJywgcGhvbmUgfSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIHVuaS5zZW5kU29ja2V0TWVzc2FnZSh7XG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdzdWJzY3JpYmUnLCBkZXZpY2Vfa2V5OiB0aGlzLmRldmljZUtleSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy53cy5vbk1lc3NhZ2UoKHJlcykgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnZGV2aWNlX3N0YXR1cycgJiYgbXNnLmRldmljZV9rZXkgPT09IHRoaXMuZGV2aWNlS2V5KSB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzRnJvbVdTKG1zZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMud3Mub25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy53c0Nvbm5lY3RlZCA9IGZhbHNlXG4gICAgICAgICAgdGhpcy53cyA9IG51bGxcbiAgICAgICAgICBpZiAoIXRoaXMud3NSZWNvbm5lY3RUaW1lcikge1xuICAgICAgICAgICAgdGhpcy53c1JlY29ubmVjdFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMud3NSZWNvbm5lY3RUaW1lciA9IG51bGxcbiAgICAgICAgICAgICAgdGhpcy5jb25uZWN0V1MoKVxuICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy53cy5vbkVycm9yKCgpID0+IHtcbiAgICAgICAgICB0aGlzLndzQ29ubmVjdGVkID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldOi/nuaOpeWksei0pe+8jOS9v+eUqEhUVFDova7or6InLCBlKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkaXNjb25uZWN0V1MoKSB7XG4gICAgICBpZiAodGhpcy53c1JlY29ubmVjdFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLndzUmVjb25uZWN0VGltZXIpXG4gICAgICAgIHRoaXMud3NSZWNvbm5lY3RUaW1lciA9IG51bGxcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLndzKSB7XG4gICAgICAgIHRoaXMud3MuY2xvc2UoKVxuICAgICAgICB0aGlzLndzID0gbnVsbFxuICAgICAgICB0aGlzLndzQ29ubmVjdGVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlU3RhdHVzRnJvbVdTKG1zZykge1xuICAgICAgY29uc3QgcyA9IG1zZy5zdGF0dXMgfHwge31cbiAgICAgIGNvbnN0IG1vdmluZyA9IHMuc2Vydm9Nb3ZpbmcgfHwgZmFsc2VcbiAgICAgIGlmIChtb3ZpbmcgJiYgIXRoaXMuc2Vydm9TdGFydFRpbWUpIHtcbiAgICAgICAgdGhpcy5zZXJ2b1N0YXJ0VGltZSA9IERhdGUubm93KClcbiAgICAgIH1cbiAgICAgIGlmICghbW92aW5nKSB7XG4gICAgICAgIHRoaXMuc2Vydm9TdGFydFRpbWUgPSAwXG4gICAgICB9XG4gICAgICB0aGlzLnN0YXR1cyA9IHtcbiAgICAgICAgb25saW5lOiBtc2cub25saW5lIHx8IGZhbHNlLFxuICAgICAgICBwd20xTGV2ZWw6IHMucHdtMUxldmVsIHx8IDAsXG4gICAgICAgIHB3bTNMZXZlbDogcy5wd20zTGV2ZWwgfHwgMCxcbiAgICAgICAgYWlyUHVtcExldmVsOiBzLmFpclB1bXBMZXZlbCB8fCAwLFxuICAgICAgICByZWxheTFTdGF0ZTogcy5yZWxheTFTdGF0ZSB8fCBmYWxzZSxcbiAgICAgICAgcmVsYXkyU3RhdGU6IHMucmVsYXkyU3RhdGUgfHwgZmFsc2UsXG4gICAgICAgIHJlbGF5M1N0YXRlOiBzLnJlbGF5M1N0YXRlIHx8IGZhbHNlLFxuICAgICAgICBzZXJ2b01vdmluZzogcy5zZXJ2b01vdmluZyB8fCBmYWxzZSxcbiAgICAgICAgYWRjV1FWb2x0YWdlOiBzLmFkY1dRVm9sdGFnZSB8fCAwLFxuICAgICAgICBhZGNUZW1wVm9sdGFnZTogcy5hZGNUZW1wVm9sdGFnZSB8fCAwLFxuICAgICAgICB0ZHNWYWx1ZTogcy50ZHNWYWx1ZSB8fCAwLFxuICAgICAgICB3YXRlclRlbXBlcmF0dXJlOiBzLndhdGVyVGVtcGVyYXR1cmUgfHwgMCxcbiAgICAgICAgc3lzdGVtUG93ZXJlZDogcy5zeXN0ZW1Qb3dlcmVkICE9PSBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5sYXN0VXBkYXRlVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKClcbiAgICB9LFxuXG4gICAgYXN5bmMgbG9hZFN0YXR1cygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldERldmljZVN0YXR1cyh0aGlzLmRldmljZUtleSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5kZXZpY2VNb2RlbCA9IHJlcy5tb2RlbCB8fCAnJ1xuICAgICAgICAgIGNvbnN0IHMgPSByZXMuc3RhdHVzIHx8IHt9XG4gICAgICAgICAgY29uc3QgbW92aW5nID0gcy5zZXJ2b01vdmluZyB8fCBmYWxzZVxuICAgICAgICAgIGlmIChtb3ZpbmcgJiYgIXRoaXMuc2Vydm9TdGFydFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vydm9TdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghbW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gMFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnN0YXR1cyA9IHtcbiAgICAgICAgICAgIG9ubGluZTogcmVzLm9ubGluZSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHB3bTFMZXZlbDogcy5wd20xTGV2ZWwgfHwgMCxcbiAgICAgICAgICAgIHB3bTNMZXZlbDogcy5wd20zTGV2ZWwgfHwgMCxcbiAgICAgICAgICAgIGFpclB1bXBMZXZlbDogcy5haXJQdW1wTGV2ZWwgfHwgMCxcbiAgICAgICAgICAgIHJlbGF5MVN0YXRlOiBzLnJlbGF5MVN0YXRlIHx8IGZhbHNlLFxuICAgICAgICAgICAgcmVsYXkyU3RhdGU6IHMucmVsYXkyU3RhdGUgfHwgZmFsc2UsXG4gICAgICAgICAgICByZWxheTNTdGF0ZTogcy5yZWxheTNTdGF0ZSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHNlcnZvTW92aW5nOiBzLnNlcnZvTW92aW5nIHx8IGZhbHNlLFxuICAgICAgICAgICAgYWRjV1FWb2x0YWdlOiBzLmFkY1dRVm9sdGFnZSB8fCAwLFxuICAgICAgICAgICAgYWRjVGVtcFZvbHRhZ2U6IHMuYWRjVGVtcFZvbHRhZ2UgfHwgMCxcbiAgICAgICAgICAgIHRkc1ZhbHVlOiBzLnRkc1ZhbHVlIHx8IDAsXG4gICAgICAgICAgICB3YXRlclRlbXBlcmF0dXJlOiBzLndhdGVyVGVtcGVyYXR1cmUgfHwgMCxcbiAgICAgICAgICAgIHN5c3RlbVBvd2VyZWQ6IHMuc3lzdGVtUG93ZXJlZCAhPT0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sYXN0VXBkYXRlVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMub25saW5lID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVmcmVzaFN0YXR1cygpIHtcbiAgICAgIHVuaS5zaG93TG9hZGluZyh7IHRpdGxlOiAn5Yi35paw5LitLi4uJyB9KVxuICAgICAgcmVxdWVzdERldmljZVN0YXR1cyh0aGlzLmRldmljZUtleSkudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZFN0YXR1cygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9KVxuICAgICAgICB9LCA4MDApXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZFN0YXR1cygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBhc3luYyBzZXRQdW1wKHB1bXAsIGxldmVsKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG5cbiAgICAgIHRoaXMuc3RhdHVzW2Bwd20ke3B1bXB9TGV2ZWxgXSA9IGxldmVsXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3NldF9wdW1wJywgeyBwdW1wLCBsZXZlbCB9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiByZXMubWVzc2FnZSB8fCAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBzZXRMaWdodChsZXZlbCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/JywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuXG4gICAgICB0aGlzLnN0YXR1cy5wd20zTGV2ZWwgPSBsZXZlbFxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfbGlnaHQnLCB7IGxldmVsIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3RhdHVzKCksIDgwMClcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIHNldEFpclB1bXAobGV2ZWwpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KTsgcmV0dXJuIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIHRoaXMuc3RhdHVzLmFpclB1bXBMZXZlbCA9IGxldmVsXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfYWlyX3B1bXAnLCB7IGxldmVsIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2VzcykgeyBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApOyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSkgfVxuICAgICAgICBlbHNlIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiByZXMubWVzc2FnZSB8fCAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgc2V0UmVsYXkyKG9uKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSk7IHJldHVybiB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG4gICAgICB0aGlzLnN0YXR1cy5yZWxheTJTdGF0ZSA9IG9uXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfcmVsYXkyJywgeyBvbiB9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHsgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKSB9XG4gICAgICAgIGVsc2UgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgICAgfSBjYXRjaCAoZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgIH0sXG5cbiAgICBhc3luYyBzZXRSZWxheTMob24pIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KTsgcmV0dXJuIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIHRoaXMuc3RhdHVzLnJlbGF5M1N0YXRlID0gb25cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3NldF9yZWxheTMnLCB7IG9uIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2VzcykgeyBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApIH1cbiAgICAgICAgZWxzZSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgICB9IGNhdGNoIChlKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgfSxcblxuICAgIGFzeW5jIHRyaWdnZXJTZXJ2bygpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lIHx8IHRoaXMuc3RhdHVzLnNlcnZvTW92aW5nKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6v+aIluiIteacuui/kOihjOS4rScsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCAndHJpZ2dlcl9zZXJ2bycsIHt9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLnN0YXR1cy5zZXJ2b01vdmluZyA9IHRydWVcbiAgICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+WWgumjn+W3suWQr+WKqCcsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+WQr+WKqOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICflkK/liqjlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hlY2tTZXJ2b1RpbWVvdXQoKSB7XG4gICAgICBpZiAodGhpcy5zdGF0dXMuc2Vydm9Nb3ZpbmcgJiYgdGhpcy5zZXJ2b1N0YXJ0VGltZSA+IDApIHtcbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IChEYXRlLm5vdygpIC0gdGhpcy5zZXJ2b1N0YXJ0VGltZSkgLyAxMDAwXG4gICAgICAgIGlmIChlbGFwc2VkID4gOCkge1xuICAgICAgICAgIHRoaXMuc3RhdHVzLnNlcnZvTW92aW5nID0gZmFsc2VcbiAgICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIHRvZ2dsZVBvd2VyKCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/JywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1Bvd2VyZWQgPSB0aGlzLnN0YXR1cy5zeXN0ZW1Qb3dlcmVkXG4gICAgICBjb25zdCBjbWQgPSBpc1Bvd2VyZWQgPyAncG93ZXJfb2ZmJyA6ICdwb3dlcl9vbidcbiAgICAgIGNvbnN0IGNvbmZpcm1UZXh0ID0gaXNQb3dlcmVkID8gJ+ehruWumuimgeWFs+acuuWQl++8n1xcbuWFs+acuuWQjuiuvuWkh+S/neaMgee9kee7nOi/nuaOpe+8jOWPr+i/nOeoi+W8gOacuuOAgicgOiAn56Gu5a6a6KaB5byA5py65ZCX77yfJ1xuXG4gICAgICB1bmkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfnoa7orqTmk43kvZwnLFxuICAgICAgICBjb250ZW50OiBjb25maXJtVGV4dCxcbiAgICAgICAgc3VjY2VzczogKG1vZGFsUmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFtb2RhbFJlcy5jb25maXJtKSByZXR1cm5cbiAgICAgICAgICB0aGlzLmV4ZWN1dGVQb3dlckNtZChjbWQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGFzeW5jIGV4ZWN1dGVQb3dlckNtZChjbWQpIHtcbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgY21kLCB7fSlcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXMuc3lzdGVtUG93ZXJlZCA9IGNtZCA9PT0gJ3Bvd2VyX29uJ1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogY21kID09PSAncG93ZXJfb24nID8gJ+W8gOacuuaIkOWKnycgOiAn5YWz5py65oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgMTAwMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlc3VsdC5tZXNzYWdlIHx8ICfmk43kvZzlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5pON5L2c5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!********************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/bind/index.vue?mpType=page ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_6a38acee_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6a38acee&mpType=page */ 40);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 42);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_6a38acee_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_6a38acee_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_6a38acee_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/bind/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTM4YWNlZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2JpbmQvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!**************************************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/bind/index.vue?vue&type=template&id=6a38acee&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6a38acee_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6a38acee&mpType=page */ 41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6a38acee_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6a38acee_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6a38acee_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6a38acee_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 41 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/bind/index.vue?vue&type=template&id=6a38acee&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "bind-page"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "header"), attrs: { _i: 1 } },
        [
          _c("text", {
            staticClass: _vm._$s(2, "sc", "header-title"),
            attrs: { _i: 2 },
          }),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(3, "sc", "bind-card"), attrs: { _i: 3 } },
        [
          _c("view", {
            staticClass: _vm._$s(4, "sc", "bind-icon"),
            attrs: { _i: 4 },
          }),
          _c("text", {
            staticClass: _vm._$s(5, "sc", "bind-title"),
            attrs: { _i: 5 },
          }),
          _c("text", {
            staticClass: _vm._$s(6, "sc", "bind-hint"),
            attrs: { _i: 6 },
          }),
          _c(
            "view",
            { staticClass: _vm._$s(7, "sc", "input-group"), attrs: { _i: 7 } },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.deviceKey,
                    expression: "deviceKey",
                  },
                ],
                staticClass: _vm._$s(8, "sc", "key-input"),
                attrs: { _i: 8 },
                domProps: { value: _vm._$s(8, "v-model", _vm.deviceKey) },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.deviceKey = $event.target.value
                  },
                },
              }),
            ]
          ),
          _c("button", {
            staticClass: _vm._$s(9, "sc", "bind-btn"),
            attrs: {
              disabled: _vm._$s(
                9,
                "a-disabled",
                !_vm.deviceKey || _vm.deviceKey.length !== 8
              ),
              _i: 9,
            },
            on: { click: _vm.handleBind },
          }),
          _c(
            "view",
            { staticClass: _vm._$s(10, "sc", "tips"), attrs: { _i: 10 } },
            [_c("text")]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(12, "sc", "guide-section"), attrs: { _i: 12 } },
        [
          _c("text", {
            staticClass: _vm._$s(13, "sc", "guide-title"),
            attrs: { _i: 13 },
          }),
          _c(
            "view",
            { staticClass: _vm._$s(14, "sc", "guide-list"), attrs: { _i: 14 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(15, "sc", "guide-item"),
                  attrs: { _i: 15 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(16, "sc", "guide-number"),
                    attrs: { _i: 16 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(17, "sc", "guide-text"),
                    attrs: { _i: 17 },
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(18, "sc", "guide-item"),
                  attrs: { _i: 18 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(19, "sc", "guide-number"),
                    attrs: { _i: 19 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(20, "sc", "guide-text"),
                    attrs: { _i: 20 },
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(21, "sc", "guide-item"),
                  attrs: { _i: 21 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(22, "sc", "guide-number"),
                    attrs: { _i: 22 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(23, "sc", "guide-text"),
                    attrs: { _i: 23 },
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(24, "sc", "guide-item"),
                  attrs: { _i: 24 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(25, "sc", "guide-number"),
                    attrs: { _i: 25 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(26, "sc", "guide-text"),
                    attrs: { _i: 26 },
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(27, "sc", "guide-item"),
                  attrs: { _i: 27 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(28, "sc", "guide-number"),
                    attrs: { _i: 28 },
                  }),
                  _c("text", {
                    staticClass: _vm._$s(29, "sc", "guide-text"),
                    attrs: { _i: 29 },
                  }),
                ]
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 42 */
/*!********************************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/bind/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 43);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdqQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/pages/bind/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _storage = __webpack_require__(/*! @/utils/storage */ 15);\nvar _api = __webpack_require__(/*! @/utils/api */ 16);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      deviceKey: ''\n    };\n  },\n  methods: {\n    handleBind: function handleBind() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var phone, res;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(_this.deviceKey.length !== 8)) {\n                  _context.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '请输入8位密钥',\n                  icon: 'none'\n                });\n                return _context.abrupt(\"return\");\n              case 3:\n                phone = (0, _storage.getPhoneNumber)();\n                if (phone) {\n                  _context.next = 8;\n                  break;\n                }\n                uni.showToast({\n                  title: '请先登录',\n                  icon: 'none'\n                });\n                uni.navigateTo({\n                  url: '/pages/login/index'\n                });\n                return _context.abrupt(\"return\");\n              case 8:\n                uni.showLoading({\n                  title: '绑定中...'\n                });\n                _context.prev = 9;\n                _context.next = 12;\n                return (0, _api.bindDevice)(phone, _this.deviceKey);\n              case 12:\n                res = _context.sent;\n                uni.hideLoading();\n                if (res.success) {\n                  uni.showToast({\n                    title: '绑定成功',\n                    icon: 'success'\n                  });\n                  setTimeout(function () {\n                    uni.navigateBack();\n                  }, 1500);\n                } else {\n                  uni.showToast({\n                    title: res.message || '绑定失败',\n                    icon: 'none'\n                  });\n                }\n                _context.next = 21;\n                break;\n              case 17:\n                _context.prev = 17;\n                _context.t0 = _context[\"catch\"](9);\n                uni.hideLoading();\n                uni.showToast({\n                  title: '绑定失败',\n                  icon: 'none'\n                });\n              case 21:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[9, 17]]);\n      }))();\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvYmluZC9pbmRleC52dWUiXSwibmFtZXMiOlsiZGF0YSIsImRldmljZUtleSIsIm1ldGhvZHMiLCJoYW5kbGVCaW5kIiwibGVuZ3RoIiwidW5pIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwicGhvbmUiLCJnZXRQaG9uZU51bWJlciIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzaG93TG9hZGluZyIsImJpbmREZXZpY2UiLCJyZXMiLCJoaWRlTG9hZGluZyIsInN1Y2Nlc3MiLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVCYWNrIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBMkRBO0FBQ0E7QUE1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxlQUtlO0VBQ2JBLElBQUksa0JBQUc7SUFDTCxPQUFPO01BQ0xDLFNBQVMsRUFBRTtJQUNiLENBQUM7RUFDSCxDQUFDO0VBQ0RDLE9BQU8sRUFBRTtJQUNEQyxVQUFVLHdCQUFHO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsTUFDYixLQUFJLENBQUNGLFNBQVMsQ0FBQ0csTUFBTSxLQUFLLENBQUM7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQzdCQyxHQUFHLENBQUNDLFNBQVMsQ0FBQztrQkFBRUMsS0FBSyxFQUFFLFNBQVM7a0JBQUVDLElBQUksRUFBRTtnQkFBTyxDQUFDLENBQUM7Z0JBQUE7Y0FBQTtnQkFJN0NDLEtBQUssR0FBRyxJQUFBQyx1QkFBYyxHQUFFO2dCQUFBLElBQ3pCRCxLQUFLO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUNSSixHQUFHLENBQUNDLFNBQVMsQ0FBQztrQkFBRUMsS0FBSyxFQUFFLE1BQU07a0JBQUVDLElBQUksRUFBRTtnQkFBTyxDQUFDLENBQUM7Z0JBQzlDSCxHQUFHLENBQUNNLFVBQVUsQ0FBQztrQkFBRUMsR0FBRyxFQUFFO2dCQUFxQixDQUFDLENBQUM7Z0JBQUE7Y0FBQTtnQkFJL0NQLEdBQUcsQ0FBQ1EsV0FBVyxDQUFDO2tCQUFFTixLQUFLLEVBQUU7Z0JBQVMsQ0FBQyxDQUFDO2dCQUFBO2dCQUFBO2dCQUFBLE9BR2hCLElBQUFPLGVBQVUsRUFBQ0wsS0FBSyxFQUFFLEtBQUksQ0FBQ1IsU0FBUyxDQUFDO2NBQUE7Z0JBQTdDYyxHQUFHO2dCQUNUVixHQUFHLENBQUNXLFdBQVcsRUFBRTtnQkFFakIsSUFBSUQsR0FBRyxDQUFDRSxPQUFPLEVBQUU7a0JBQ2ZaLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO29CQUFFQyxLQUFLLEVBQUUsTUFBTTtvQkFBRUMsSUFBSSxFQUFFO2tCQUFVLENBQUMsQ0FBQztrQkFDakRVLFVBQVUsQ0FBQyxZQUFNO29CQUNmYixHQUFHLENBQUNjLFlBQVksRUFBRTtrQkFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFDVixDQUFDLE1BQU07a0JBQ0xkLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO29CQUFFQyxLQUFLLEVBQUVRLEdBQUcsQ0FBQ0ssT0FBTyxJQUFJLE1BQU07b0JBQUVaLElBQUksRUFBRTtrQkFBTyxDQUFDLENBQUM7Z0JBQy9EO2dCQUFDO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBRURILEdBQUcsQ0FBQ1csV0FBVyxFQUFFO2dCQUNqQlgsR0FBRyxDQUFDQyxTQUFTLENBQUM7a0JBQUVDLEtBQUssRUFBRSxNQUFNO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQU8sQ0FBQyxDQUFDO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRWxEO0VBQ0Y7QUFDRixDQUFDO0FBQUEiLCJmaWxlIjoiNDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5pbXBvcnQgeyBnZXRQaG9uZU51bWJlciB9IGZyb20gJ0AvdXRpbHMvc3RvcmFnZSdcbmltcG9ydCB7IGJpbmREZXZpY2UgfSBmcm9tICdAL3V0aWxzL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXZpY2VLZXk6ICcnXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgaGFuZGxlQmluZCgpIHtcbiAgICAgIGlmICh0aGlzLmRldmljZUtleS5sZW5ndGggIT09IDgpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K+36L6T5YWlOOS9jeWvhumSpScsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgcGhvbmUgPSBnZXRQaG9uZU51bWJlcigpXG4gICAgICBpZiAoIXBob25lKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+ivt+WFiOeZu+W9lScsIGljb246ICdub25lJyB9KVxuICAgICAgICB1bmkubmF2aWdhdGVUbyh7IHVybDogJy9wYWdlcy9sb2dpbi9pbmRleCcgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBcbiAgICAgIHVuaS5zaG93TG9hZGluZyh7IHRpdGxlOiAn57uR5a6a5LitLi4uJyB9KVxuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBiaW5kRGV2aWNlKHBob25lLCB0aGlzLmRldmljZUtleSlcbiAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcbiAgICAgICAgXG4gICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+e7keWumuaIkOWKnycsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdW5pLm5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgfSwgMTUwMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICfnu5HlrprlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn57uR5a6a5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 45 */
/*!*******************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/App.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=472cff63& */ 46);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 48);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0g7QUFDaEg7QUFDdUQ7QUFDTDs7O0FBR2xEO0FBQ2dLO0FBQ2hLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHlFQUFNO0FBQ1IsRUFBRSw4RUFBTTtBQUNSLEVBQUUsdUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDcyY2ZmNjMmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!**************************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/App.vue?vue&type=template&id=472cff63& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=472cff63& */ 47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 47 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/App.vue?vue&type=template&id=472cff63& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "app"), attrs: { _i: 0 } },
    [_c("router-view", { attrs: { _i: 1 } })],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 48 */
/*!********************************************************************************!*\
  !*** C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 49);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1oQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiI0OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/WJ/Desktop/养鱼生态箱/app/fish-tank/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:10\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:13\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:16\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2VBT0E7RUFDQUE7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dmlldyBjbGFzcz1cImFwcFwiPlxuICAgIDxyb3V0ZXItdmlldyAvPlxuICA8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBvbkxhdW5jaDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0FwcCBMYXVuY2gnKVxuICB9LFxuICBvblNob3c6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXG4gIH0sXG4gIG9uSGlkZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0FwcCBIaWRlJylcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbnBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///49\n");

/***/ })
],[[0,"app-config"]]]);