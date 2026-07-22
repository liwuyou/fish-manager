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
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _storage = __webpack_require__(/*! @/utils/storage */ 15);\nvar _api = __webpack_require__(/*! @/utils/api */ 16);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      phoneNumber: ''\n    };\n  },\n  onLoad: function onLoad() {\n    var savedPhone = (0, _storage.getPhoneNumber)();\n    if (savedPhone) {\n      this.phoneNumber = savedPhone;\n      this.handleLogin();\n    }\n  },\n  methods: {\n    handleLogin: function handleLogin() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(!_this.phoneNumber || _this.phoneNumber.length !== 11)) {\n                  _context.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '请输入正确的手机号',\n                  icon: 'none'\n                });\n                return _context.abrupt(\"return\");\n              case 3:\n                uni.showLoading({\n                  title: '登录中...'\n                });\n                _context.prev = 4;\n                (0, _storage.savePhoneNumber)(_this.phoneNumber);\n                _context.next = 8;\n                return (0, _api.getDevices)(_this.phoneNumber);\n              case 8:\n                uni.hideLoading();\n                uni.redirectTo({\n                  url: '/pages/devices/index'\n                });\n                _context.next = 16;\n                break;\n              case 12:\n                _context.prev = 12;\n                _context.t0 = _context[\"catch\"](4);\n                uni.hideLoading();\n                uni.showToast({\n                  title: '登录失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[4, 12]]);\n      }))();\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJwaG9uZU51bWJlciIsIm9uTG9hZCIsIm1ldGhvZHMiLCJoYW5kbGVMb2dpbiIsInVuaSIsInRpdGxlIiwiaWNvbiIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUVBO0VBQ0FBO0lBQ0E7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLE1BQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ0FDO2tCQUFBQztrQkFBQUM7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFJQUY7a0JBQUFDO2dCQUFBO2dCQUFBO2dCQUdBO2dCQUFBO2dCQUFBLE9BQ0E7Y0FBQTtnQkFDQUQ7Z0JBQ0FBO2tCQUFBRztnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVBSDtnQkFDQUE7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dmlldyBjbGFzcz1cImxvZ2luLXBhZ2VcIj5cbiAgICA8dmlldyBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPHZpZXcgY2xhc3M9XCJsb2dvXCI+8J+QoDwvdmlldz5cbiAgICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj7psbznrrHnrqHnkIY8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cInN1YnRpdGxlXCI+6L+c56iL5o6n5Yi25oKo55qE5YW76bG855Sf5oCB566xPC90ZXh0PlxuICAgIDwvdmlldz5cbiAgICBcbiAgICA8dmlldyBjbGFzcz1cImZvcm1cIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJpbnB1dC1sYWJlbFwiPuaJi+acuuWPt+eggTwvdGV4dD5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIiBcbiAgICAgICAgICB2LW1vZGVsPVwicGhvbmVOdW1iZXJcIiBcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmiYvmnLrlj7dcIlxuICAgICAgICAgIG1heGxlbmd0aD1cIjExXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdmlldz5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImxvZ2luLWJ0blwiIEBjbGljaz1cImhhbmRsZUxvZ2luXCIgOmRpc2FibGVkPVwiIXBob25lTnVtYmVyXCI+XG4gICAgICAgIOeZu+W9lVxuICAgICAgPC9idXR0b24+XG4gICAgICBcbiAgICAgIDx2aWV3IGNsYXNzPVwidGlwc1wiPlxuICAgICAgICA8dGV4dD7pppbmrKHnmbvlvZXlsIboh6rliqjms6jlhow8L3RleHQ+XG4gICAgICA8L3ZpZXc+XG4gICAgPC92aWV3PlxuICAgIFxuICAgIDx2aWV3IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICA8dGV4dCBjbGFzcz1cInZlcnNpb25cIj52MS4wLjA8L3RleHQ+XG4gICAgPC92aWV3PlxuICA8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgc2F2ZVBob25lTnVtYmVyLCBnZXRQaG9uZU51bWJlciB9IGZyb20gJ0AvdXRpbHMvc3RvcmFnZSdcbmltcG9ydCB7IGdldERldmljZXMgfSBmcm9tICdAL3V0aWxzL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwaG9uZU51bWJlcjogJydcbiAgICB9XG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zdCBzYXZlZFBob25lID0gZ2V0UGhvbmVOdW1iZXIoKVxuICAgIGlmIChzYXZlZFBob25lKSB7XG4gICAgICB0aGlzLnBob25lTnVtYmVyID0gc2F2ZWRQaG9uZVxuICAgICAgdGhpcy5oYW5kbGVMb2dpbigpXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgaGFuZGxlTG9naW4oKSB7XG4gICAgICBpZiAoIXRoaXMucGhvbmVOdW1iZXIgfHwgdGhpcy5waG9uZU51bWJlci5sZW5ndGggIT09IDExKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtycsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIFxuICAgICAgdW5pLnNob3dMb2FkaW5nKHsgdGl0bGU6ICfnmbvlvZXkuK0uLi4nIH0pXG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIHNhdmVQaG9uZU51bWJlcih0aGlzLnBob25lTnVtYmVyKVxuICAgICAgICBhd2FpdCBnZXREZXZpY2VzKHRoaXMucGhvbmVOdW1iZXIpXG4gICAgICAgIHVuaS5oaWRlTG9hZGluZygpXG4gICAgICAgIHVuaS5yZWRpcmVjdFRvKHsgdXJsOiAnL3BhZ2VzL2RldmljZXMvaW5kZXgnIH0pXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfnmbvlvZXlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5sb2dpbi1wYWdlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYTczZTggMCUsICMwZDQ3YTEgMTAwJSk7XG4gIHBhZGRpbmc6IDYwcnB4IDQwcnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTIwcnB4O1xuICBtYXJnaW4tYm90dG9tOiA4MHJweDtcbn1cblxuLmxvZ28ge1xuICBmb250LXNpemU6IDEyMHJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBycHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDhycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTZycHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbi5mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjRycHg7XG4gIHBhZGRpbmc6IDUwcnB4IDQwcnB4O1xuICBib3gtc2hhZG93OiAwIDEwcnB4IDQwcnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBycHg7XG59XG5cbi5pbnB1dC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tYm90dG9tOiAxNnJweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcnB4O1xuICBib3JkZXI6IDJycHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogMTJycHg7XG4gIHBhZGRpbmc6IDAgMjRycHg7XG4gIGZvbnQtc2l6ZTogMzJycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5sb2dpbi1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFhNzNlOCAwJSwgIzBkNDdhMSAxMDAlKTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMzJycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAxMnJweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAyMHJweDtcbn1cblxuLmxvZ2luLWJ0bltkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4udGlwcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBycHg7XG59XG5cbi50aXBzIHRleHQge1xuICBmb250LXNpemU6IDI0cnB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLmZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAwcnB4O1xufVxuXG4udmVyc2lvbiB7XG4gIGZvbnQtc2l6ZTogMjRycHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

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
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.bindDevice = bindDevice;\nexports.deleteTimer = deleteTimer;\nexports.getDeviceStatus = getDeviceStatus;\nexports.getDevices = getDevices;\nexports.getTimers = getTimers;\nexports.request = request;\nexports.requestDeviceStatus = requestDeviceStatus;\nexports.saveTimers = saveTimers;\nexports.sendControlCommand = sendControlCommand;\nexports.unbindDevice = unbindDevice;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n// 服务器地址 - 部署到公网时改为公网IP\nvar BASE_URL = 'http://fishmanager.top:7965';\nfunction request(options) {\n  return new Promise(function (resolve, reject) {\n    uni.request({\n      url: BASE_URL + options.url,\n      method: options.method || 'GET',\n      data: options.data || {},\n      header: _objectSpread({\n        'Content-Type': 'application/json'\n      }, options.header),\n      success: function success(res) {\n        if (res.statusCode === 200) {\n          resolve(res.data);\n        } else {\n          reject(res.data);\n        }\n      },\n      fail: function fail(err) {\n        reject(err);\n      }\n    });\n  });\n}\nfunction getDevices(phoneNumber) {\n  return request({\n    url: '/api/devices',\n    data: {\n      phone_number: phoneNumber\n    }\n  });\n}\nfunction getDeviceStatus(deviceKey) {\n  return request({\n    url: '/api/status',\n    data: {\n      device_key: deviceKey\n    }\n  });\n}\nfunction bindDevice(phoneNumber, deviceKey) {\n  return request({\n    url: '/api/bind',\n    method: 'POST',\n    data: {\n      phone_number: phoneNumber,\n      device_key: deviceKey\n    }\n  });\n}\nfunction unbindDevice(phoneNumber, deviceKey) {\n  return request({\n    url: '/api/unbind',\n    method: 'POST',\n    data: {\n      phone_number: phoneNumber,\n      device_key: deviceKey\n    }\n  });\n}\nfunction sendControlCommand(deviceKey, cmd, params) {\n  return request({\n    url: '/api/control',\n    method: 'POST',\n    data: {\n      device_key: deviceKey,\n      cmd: cmd,\n      params: params\n    }\n  });\n}\nfunction getTimers(deviceKey) {\n  return request({\n    url: '/api/timers',\n    data: {\n      device_key: deviceKey\n    }\n  });\n}\nfunction saveTimers(deviceKey, timers) {\n  return request({\n    url: '/api/timers',\n    method: 'POST',\n    data: {\n      device_key: deviceKey,\n      timers: timers\n    }\n  });\n}\nfunction deleteTimer(deviceKey, timerId) {\n  return request({\n    url: '/api/timers/delete',\n    method: 'POST',\n    data: {\n      device_key: deviceKey,\n      timer_id: timerId\n    }\n  });\n}\nfunction requestDeviceStatus(deviceKey) {\n  return request({\n    url: '/api/request_status',\n    method: 'POST',\n    data: {\n      device_key: deviceKey\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYXBpLmpzIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwicmVxdWVzdCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVuaSIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwic3RhdHVzQ29kZSIsImZhaWwiLCJlcnIiLCJnZXREZXZpY2VzIiwicGhvbmVOdW1iZXIiLCJwaG9uZV9udW1iZXIiLCJnZXREZXZpY2VTdGF0dXMiLCJkZXZpY2VLZXkiLCJkZXZpY2Vfa2V5IiwiYmluZERldmljZSIsInVuYmluZERldmljZSIsInNlbmRDb250cm9sQ29tbWFuZCIsImNtZCIsInBhcmFtcyIsImdldFRpbWVycyIsInNhdmVUaW1lcnMiLCJ0aW1lcnMiLCJkZWxldGVUaW1lciIsInRpbWVySWQiLCJ0aW1lcl9pZCIsInJlcXVlc3REZXZpY2VTdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLFFBQVEsR0FBRyw2QkFBNkI7QUFFdkMsU0FBU0MsT0FBTyxDQUFDQyxPQUFPLEVBQUU7RUFDL0IsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7SUFDdENDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDO01BQ1ZNLEdBQUcsRUFBRVAsUUFBUSxHQUFHRSxPQUFPLENBQUNLLEdBQUc7TUFDM0JDLE1BQU0sRUFBRU4sT0FBTyxDQUFDTSxNQUFNLElBQUksS0FBSztNQUMvQkMsSUFBSSxFQUFFUCxPQUFPLENBQUNPLElBQUksSUFBSSxDQUFDLENBQUM7TUFDeEJDLE1BQU07UUFDSixjQUFjLEVBQUU7TUFBa0IsR0FDL0JSLE9BQU8sQ0FBQ1EsTUFBTSxDQUNsQjtNQUNEQyxPQUFPLEVBQUUsaUJBQUNDLEdBQUcsRUFBSztRQUNoQixJQUFJQSxHQUFHLENBQUNDLFVBQVUsS0FBSyxHQUFHLEVBQUU7VUFDMUJULE9BQU8sQ0FBQ1EsR0FBRyxDQUFDSCxJQUFJLENBQUM7UUFDbkIsQ0FBQyxNQUFNO1VBQ0xKLE1BQU0sQ0FBQ08sR0FBRyxDQUFDSCxJQUFJLENBQUM7UUFDbEI7TUFDRixDQUFDO01BQ0RLLElBQUksRUFBRSxjQUFDQyxHQUFHLEVBQUs7UUFDYlYsTUFBTSxDQUFDVSxHQUFHLENBQUM7TUFDYjtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKO0FBRU8sU0FBU0MsVUFBVSxDQUFDQyxXQUFXLEVBQUU7RUFDdEMsT0FBT2hCLE9BQU8sQ0FBQztJQUNiTSxHQUFHLEVBQUUsY0FBYztJQUNuQkUsSUFBSSxFQUFFO01BQUVTLFlBQVksRUFBRUQ7SUFBWTtFQUNwQyxDQUFDLENBQUM7QUFDSjtBQUVPLFNBQVNFLGVBQWUsQ0FBQ0MsU0FBUyxFQUFFO0VBQ3pDLE9BQU9uQixPQUFPLENBQUM7SUFDYk0sR0FBRyxFQUFFLGFBQWE7SUFDbEJFLElBQUksRUFBRTtNQUFFWSxVQUFVLEVBQUVEO0lBQVU7RUFDaEMsQ0FBQyxDQUFDO0FBQ0o7QUFFTyxTQUFTRSxVQUFVLENBQUNMLFdBQVcsRUFBRUcsU0FBUyxFQUFFO0VBQ2pELE9BQU9uQixPQUFPLENBQUM7SUFDYk0sR0FBRyxFQUFFLFdBQVc7SUFDaEJDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRTtNQUFFUyxZQUFZLEVBQUVELFdBQVc7TUFBRUksVUFBVSxFQUFFRDtJQUFVO0VBQzNELENBQUMsQ0FBQztBQUNKO0FBRU8sU0FBU0csWUFBWSxDQUFDTixXQUFXLEVBQUVHLFNBQVMsRUFBRTtFQUNuRCxPQUFPbkIsT0FBTyxDQUFDO0lBQ2JNLEdBQUcsRUFBRSxhQUFhO0lBQ2xCQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxJQUFJLEVBQUU7TUFBRVMsWUFBWSxFQUFFRCxXQUFXO01BQUVJLFVBQVUsRUFBRUQ7SUFBVTtFQUMzRCxDQUFDLENBQUM7QUFDSjtBQUVPLFNBQVNJLGtCQUFrQixDQUFDSixTQUFTLEVBQUVLLEdBQUcsRUFBRUMsTUFBTSxFQUFFO0VBQ3pELE9BQU96QixPQUFPLENBQUM7SUFDYk0sR0FBRyxFQUFFLGNBQWM7SUFDbkJDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRTtNQUFFWSxVQUFVLEVBQUVELFNBQVM7TUFBRUssR0FBRyxFQUFIQSxHQUFHO01BQUVDLE1BQU0sRUFBTkE7SUFBTztFQUM3QyxDQUFDLENBQUM7QUFDSjtBQUVPLFNBQVNDLFNBQVMsQ0FBQ1AsU0FBUyxFQUFFO0VBQ25DLE9BQU9uQixPQUFPLENBQUM7SUFDYk0sR0FBRyxFQUFFLGFBQWE7SUFDbEJFLElBQUksRUFBRTtNQUFFWSxVQUFVLEVBQUVEO0lBQVU7RUFDaEMsQ0FBQyxDQUFDO0FBQ0o7QUFFTyxTQUFTUSxVQUFVLENBQUNSLFNBQVMsRUFBRVMsTUFBTSxFQUFFO0VBQzVDLE9BQU81QixPQUFPLENBQUM7SUFDYk0sR0FBRyxFQUFFLGFBQWE7SUFDbEJDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRTtNQUFFWSxVQUFVLEVBQUVELFNBQVM7TUFBRVMsTUFBTSxFQUFOQTtJQUFPO0VBQ3hDLENBQUMsQ0FBQztBQUNKO0FBRU8sU0FBU0MsV0FBVyxDQUFDVixTQUFTLEVBQUVXLE9BQU8sRUFBRTtFQUM5QyxPQUFPOUIsT0FBTyxDQUFDO0lBQ2JNLEdBQUcsRUFBRSxvQkFBb0I7SUFDekJDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRTtNQUFFWSxVQUFVLEVBQUVELFNBQVM7TUFBRVksUUFBUSxFQUFFRDtJQUFRO0VBQ25ELENBQUMsQ0FBQztBQUNKO0FBRU8sU0FBU0UsbUJBQW1CLENBQUNiLFNBQVMsRUFBRTtFQUM3QyxPQUFPbkIsT0FBTyxDQUFDO0lBQ2JNLEdBQUcsRUFBRSxxQkFBcUI7SUFDMUJDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRTtNQUFFWSxVQUFVLEVBQUVEO0lBQVU7RUFDaEMsQ0FBQyxDQUFDO0FBQ0oiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDmnI3liqHlmajlnLDlnYAgLSDpg6jnvbLliLDlhaznvZHml7bmlLnkuLrlhaznvZFJUFxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2Zpc2htYW5hZ2VyLnRvcDo3OTY1J1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdW5pLnJlcXVlc3Qoe1xuICAgICAgdXJsOiBCQVNFX1VSTCArIG9wdGlvbnMudXJsLFxuICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJyxcbiAgICAgIGRhdGE6IG9wdGlvbnMuZGF0YSB8fCB7fSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAuLi5vcHRpb25zLmhlYWRlclxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChyZXMuZGF0YSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV2aWNlcyhwaG9uZU51bWJlcikge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS9kZXZpY2VzJyxcbiAgICBkYXRhOiB7IHBob25lX251bWJlcjogcGhvbmVOdW1iZXIgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV2aWNlU3RhdHVzKGRldmljZUtleSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS9zdGF0dXMnLFxuICAgIGRhdGE6IHsgZGV2aWNlX2tleTogZGV2aWNlS2V5IH1cbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmREZXZpY2UocGhvbmVOdW1iZXIsIGRldmljZUtleSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS9iaW5kJyxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7IHBob25lX251bWJlcjogcGhvbmVOdW1iZXIsIGRldmljZV9rZXk6IGRldmljZUtleSB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmJpbmREZXZpY2UocGhvbmVOdW1iZXIsIGRldmljZUtleSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS91bmJpbmQnLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHsgcGhvbmVfbnVtYmVyOiBwaG9uZU51bWJlciwgZGV2aWNlX2tleTogZGV2aWNlS2V5IH1cbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDb250cm9sQ29tbWFuZChkZXZpY2VLZXksIGNtZCwgcGFyYW1zKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6ICcvYXBpL2NvbnRyb2wnLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHsgZGV2aWNlX2tleTogZGV2aWNlS2V5LCBjbWQsIHBhcmFtcyB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lcnMoZGV2aWNlS2V5KSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6ICcvYXBpL3RpbWVycycsXG4gICAgZGF0YTogeyBkZXZpY2Vfa2V5OiBkZXZpY2VLZXkgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRpbWVycyhkZXZpY2VLZXksIHRpbWVycykge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS90aW1lcnMnLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHsgZGV2aWNlX2tleTogZGV2aWNlS2V5LCB0aW1lcnMgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGltZXIoZGV2aWNlS2V5LCB0aW1lcklkKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6ICcvYXBpL3RpbWVycy9kZWxldGUnLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHsgZGV2aWNlX2tleTogZGV2aWNlS2V5LCB0aW1lcl9pZDogdGltZXJJZCB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0RGV2aWNlU3RhdHVzKGRldmljZUtleSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL2FwaS9yZXF1ZXN0X3N0YXR1cycsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogeyBkZXZpY2Vfa2V5OiBkZXZpY2VLZXkgfVxuICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _storage = __webpack_require__(/*! @/utils/storage */ 15);\nvar _api = __webpack_require__(/*! @/utils/api */ 16);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nvar _default = {\n  data: function data() {\n    return {\n      devices: [],\n      searchKey: '',\n      lastUpdateTime: '',\n      timer: null,\n      phoneNumber: '',\n      editMode: false,\n      selectedDevices: [],\n      renameVisible: false,\n      renameValue: '',\n      renameDevice: null,\n      ws: null,\n      wsReconnectTimer: null\n    };\n  },\n  computed: {\n    filteredDevices: function filteredDevices() {\n      var _this = this;\n      if (!this.searchKey) return this.devices;\n      return this.devices.filter(function (d) {\n        var name = _this.getDeviceName(d);\n        return d.device_key.includes(_this.searchKey) || name.includes(_this.searchKey);\n      });\n    }\n  },\n  onLoad: function onLoad() {\n    var _this2 = this;\n    this.phoneNumber = (0, _storage.getPhoneNumber)() || '';\n    this.loadDevices();\n    this.timer = setInterval(function () {\n      _this2.loadDevices();\n    }, 30000); // 改为30秒轮询（WebSocket推送实时更新）\n\n    this.connectWS();\n  },\n  onUnload: function onUnload() {\n    if (this.timer) {\n      clearInterval(this.timer);\n    }\n    this.disconnectWS();\n  },\n  methods: {\n    getDeviceName: function getDeviceName(device) {\n      var key = 'device_name_' + device.device_key;\n      var name = uni.getStorageSync(key);\n      return name || device.device_key;\n    },\n    startRename: function startRename(device) {\n      this.renameDevice = device;\n      this.renameValue = this.getDeviceName(device) === device.device_key ? '' : this.getDeviceName(device);\n      this.renameVisible = true;\n    },\n    cancelRename: function cancelRename() {\n      this.renameVisible = false;\n      this.renameDevice = null;\n      this.renameValue = '';\n    },\n    confirmRename: function confirmRename() {\n      if (!this.renameDevice) return;\n      var key = 'device_name_' + this.renameDevice.device_key;\n      if (this.renameValue && this.renameValue.trim()) {\n        uni.setStorageSync(key, this.renameValue.trim());\n        uni.showToast({\n          title: '重命名成功',\n          icon: 'success'\n        });\n      } else {\n        uni.removeStorageSync(key);\n        uni.showToast({\n          title: '已恢复默认名称',\n          icon: 'none'\n        });\n      }\n      this.$forceUpdate();\n      this.cancelRename();\n    },\n    // ===== WebSocket 实时推送 =====\n    getWSBaseURL: function getWSBaseURL() {\n      try {\n        if (window && window.location) {\n          return \"ws://\".concat(window.location.host);\n        }\n      } catch (e) {}\n      return 'ws://192.168.2.11:7965';\n    },\n    connectWS: function connectWS() {\n      var _this3 = this;\n      if (this.ws) return;\n      var phone = (0, _storage.getPhoneNumber)();\n      if (!phone) return;\n      try {\n        var baseUrl = this.getWSBaseURL();\n        this.ws = uni.connectSocket({\n          url: \"\".concat(baseUrl, \"/ws/client\"),\n          success: function success() {}\n        });\n        this.ws.onOpen(function () {\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'auth',\n              phone: phone\n            })\n          });\n        });\n        this.ws.onMessage(function (res) {\n          try {\n            var msg = JSON.parse(res.data);\n            if (msg.type === 'device_status') {\n              // 设备状态变化，实时更新列表\n              var idx = _this3.devices.findIndex(function (d) {\n                return d.device_key === msg.device_key;\n              });\n              if (idx > -1) {\n                _this3.devices[idx].online = msg.online;\n                // 更新状态数据\n                if (msg.status) {\n                  _this3.devices[idx].status = msg.status;\n                }\n                _this3.lastUpdateTime = new Date().toLocaleTimeString();\n                _this3.$forceUpdate();\n              }\n            }\n          } catch (e) {}\n        });\n        this.ws.onClose(function () {\n          _this3.ws = null;\n          if (!_this3.wsReconnectTimer) {\n            _this3.wsReconnectTimer = setTimeout(function () {\n              _this3.wsReconnectTimer = null;\n              _this3.connectWS();\n            }, 5000);\n          }\n        });\n        this.ws.onError(function () {});\n      } catch (e) {\n        __f__(\"log\", 'WebSocket连接失败', e, \" at pages/devices/index.vue:227\");\n      }\n    },\n    disconnectWS: function disconnectWS() {\n      if (this.wsReconnectTimer) {\n        clearTimeout(this.wsReconnectTimer);\n        this.wsReconnectTimer = null;\n      }\n      if (this.ws) {\n        try {\n          this.ws.close();\n        } catch (e) {}\n        this.ws = null;\n      }\n    },\n    loadDevices: function loadDevices() {\n      var _this4 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var phone, res;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                phone = (0, _storage.getPhoneNumber)();\n                if (phone) {\n                  _context.next = 3;\n                  break;\n                }\n                return _context.abrupt(\"return\");\n              case 3:\n                _context.prev = 3;\n                _context.next = 6;\n                return (0, _api.getDevices)(phone);\n              case 6:\n                res = _context.sent;\n                if (res.success) {\n                  _this4.devices = res.devices || [];\n                  _this4.lastUpdateTime = new Date().toLocaleTimeString();\n                }\n                _context.next = 13;\n                break;\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](3);\n                __f__(\"error\", '加载设备失败', _context.t0, \" at pages/devices/index.vue:253\");\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[3, 10]]);\n      }))();\n    },\n    refreshDevices: function refreshDevices() {\n      uni.showLoading({\n        title: '刷新中...'\n      });\n      this.loadDevices().then(function () {\n        uni.hideLoading();\n      });\n    },\n    handleLogout: function handleLogout() {\n      uni.showModal({\n        title: '确认退出',\n        content: '确定要退出登录吗？',\n        success: function success(res) {\n          if (res.confirm) {\n            (0, _storage.clearPhoneNumber)();\n            uni.redirectTo({\n              url: '/pages/login/index'\n            });\n          }\n        }\n      });\n    },\n    goToBind: function goToBind() {\n      uni.navigateTo({\n        url: '/pages/bind/index'\n      });\n    },\n    handleDeviceClick: function handleDeviceClick(device) {\n      if (this.editMode) {\n        var index = this.selectedDevices.indexOf(device.device_key);\n        if (index > -1) {\n          this.selectedDevices.splice(index, 1);\n        } else {\n          this.selectedDevices.push(device.device_key);\n        }\n      } else {\n        // 根据型号跳转不同控制页\n        var page = '/pages/control/index';\n        if (device.model === 'fish_one') {\n          page = '/pages/control/fish-one';\n        } else if (device.model === 'fish_mini') {\n          page = '/pages/control/fish-mini';\n        }\n        uni.navigateTo({\n          url: \"\".concat(page, \"?device_key=\").concat(device.device_key)\n        });\n      }\n    },\n    enterEditMode: function enterEditMode() {\n      this.editMode = true;\n      this.selectedDevices = [];\n    },\n    exitEditMode: function exitEditMode() {\n      this.editMode = false;\n      this.selectedDevices = [];\n    },\n    batchDelete: function batchDelete() {\n      var _this5 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                if (!(_this5.selectedDevices.length === 0)) {\n                  _context3.next = 2;\n                  break;\n                }\n                return _context3.abrupt(\"return\");\n              case 2:\n                uni.showModal({\n                  title: '确认删除',\n                  content: \"\\u786E\\u5B9A\\u8981\\u5220\\u9664\\u9009\\u4E2D\\u7684 \".concat(_this5.selectedDevices.length, \" \\u4E2A\\u8BBE\\u5907\\u5417\\uFF1F\"),\n                  success: function () {\n                    var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {\n                      var phone, successCount, _iterator, _step, key, result;\n                      return _regenerator.default.wrap(function _callee2$(_context2) {\n                        while (1) {\n                          switch (_context2.prev = _context2.next) {\n                            case 0:\n                              if (res.confirm) {\n                                _context2.next = 2;\n                                break;\n                              }\n                              return _context2.abrupt(\"return\");\n                            case 2:\n                              phone = (0, _storage.getPhoneNumber)();\n                              successCount = 0;\n                              _iterator = _createForOfIteratorHelper(_this5.selectedDevices);\n                              _context2.prev = 5;\n                              _iterator.s();\n                            case 7:\n                              if ((_step = _iterator.n()).done) {\n                                _context2.next = 21;\n                                break;\n                              }\n                              key = _step.value;\n                              _context2.prev = 9;\n                              _context2.next = 12;\n                              return (0, _api.unbindDevice)(phone, key);\n                            case 12:\n                              result = _context2.sent;\n                              if (result.success) {\n                                successCount++;\n                                uni.removeStorageSync('device_name_' + key);\n                              }\n                              _context2.next = 19;\n                              break;\n                            case 16:\n                              _context2.prev = 16;\n                              _context2.t0 = _context2[\"catch\"](9);\n                              __f__(\"error\", '删除失败', key, _context2.t0, \" at pages/devices/index.vue:333\");\n                            case 19:\n                              _context2.next = 7;\n                              break;\n                            case 21:\n                              _context2.next = 26;\n                              break;\n                            case 23:\n                              _context2.prev = 23;\n                              _context2.t1 = _context2[\"catch\"](5);\n                              _iterator.e(_context2.t1);\n                            case 26:\n                              _context2.prev = 26;\n                              _iterator.f();\n                              return _context2.finish(26);\n                            case 29:\n                              if (successCount === _this5.selectedDevices.length) {\n                                uni.showToast({\n                                  title: \"\\u5220\\u9664\\u6210\\u529F \".concat(successCount, \" \\u4E2A\"),\n                                  icon: 'success'\n                                });\n                              } else if (successCount === 0) {\n                                uni.showToast({\n                                  title: '删除失败，请检查网络',\n                                  icon: 'none'\n                                });\n                              } else {\n                                uni.showToast({\n                                  title: \"\\u5220\\u9664\\u6210\\u529F \".concat(successCount, \"/\").concat(_this5.selectedDevices.length),\n                                  icon: 'none'\n                                });\n                              }\n                              _this5.exitEditMode();\n                              _this5.loadDevices();\n                            case 32:\n                            case \"end\":\n                              return _context2.stop();\n                          }\n                        }\n                      }, _callee2, null, [[5, 23, 26, 29], [9, 16]]);\n                    }));\n                    function success(_x) {\n                      return _success.apply(this, arguments);\n                    }\n                    return success;\n                  }()\n                });\n              case 3:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV2aWNlcy9pbmRleC52dWUiXSwibmFtZXMiOlsiZGF0YSIsImRldmljZXMiLCJzZWFyY2hLZXkiLCJsYXN0VXBkYXRlVGltZSIsInRpbWVyIiwicGhvbmVOdW1iZXIiLCJlZGl0TW9kZSIsInNlbGVjdGVkRGV2aWNlcyIsInJlbmFtZVZpc2libGUiLCJyZW5hbWVWYWx1ZSIsInJlbmFtZURldmljZSIsIndzIiwid3NSZWNvbm5lY3RUaW1lciIsImNvbXB1dGVkIiwiZmlsdGVyZWREZXZpY2VzIiwib25Mb2FkIiwib25VbmxvYWQiLCJjbGVhckludGVydmFsIiwibWV0aG9kcyIsImdldERldmljZU5hbWUiLCJzdGFydFJlbmFtZSIsImNhbmNlbFJlbmFtZSIsImNvbmZpcm1SZW5hbWUiLCJ1bmkiLCJ0aXRsZSIsImljb24iLCJnZXRXU0Jhc2VVUkwiLCJjb25uZWN0V1MiLCJ1cmwiLCJzdWNjZXNzIiwidHlwZSIsInBob25lIiwiZGlzY29ubmVjdFdTIiwiY2xlYXJUaW1lb3V0IiwibG9hZERldmljZXMiLCJyZXMiLCJyZWZyZXNoRGV2aWNlcyIsImhhbmRsZUxvZ291dCIsImNvbnRlbnQiLCJnb1RvQmluZCIsImhhbmRsZURldmljZUNsaWNrIiwicGFnZSIsImVudGVyRWRpdE1vZGUiLCJleGl0RWRpdE1vZGUiLCJiYXRjaERlbGV0ZSIsInN1Y2Nlc3NDb3VudCIsImtleSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBMEZBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0VBQ0FBO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQUE7TUFDQTtNQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUFBO0lBQ0E7SUFDQTtJQUNBO01BQ0E7SUFDQTs7SUFFQTtFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO01BQ0E7UUFDQUM7UUFDQUE7VUFBQUM7VUFBQUM7UUFBQTtNQUNBO1FBQ0FGO1FBQ0FBO1VBQUFDO1VBQUFDO1FBQUE7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FDO01BQ0E7UUFDQTtVQUNBO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFBQTtNQUNBO01BQ0E7TUFDQTtNQUVBO1FBQ0E7UUFDQTtVQUNBQztVQUNBQztRQUNBO1FBRUE7VUFDQU47WUFDQXZCO2NBQUE4QjtjQUFBQztZQUFBO1VBQ0E7UUFDQTtRQUVBO1VBQ0E7WUFDQTtZQUNBO2NBQ0E7Y0FDQTtnQkFBQTtjQUFBO2NBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7a0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtRQUVBO1VBQ0E7VUFDQTtZQUNBO2NBQ0E7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtRQUVBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtRQUNBQztRQUNBO01BQ0E7TUFDQTtRQUNBO1VBQUE7UUFBQTtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNBSDtnQkFBQSxJQUNBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBLE9BR0E7Y0FBQTtnQkFBQUk7Z0JBQ0E7a0JBQ0E7a0JBQ0E7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0lBRUFDO01BQ0FiO1FBQUFDO01BQUE7TUFDQTtRQUNBRDtNQUNBO0lBQ0E7SUFFQWM7TUFDQWQ7UUFDQUM7UUFDQWM7UUFDQVQ7VUFDQTtZQUNBO1lBQ0FOO2NBQUFLO1lBQUE7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBVztNQUNBaEI7UUFBQUs7TUFBQTtJQUNBO0lBRUFZO01BQ0E7UUFDQTtRQUNBO1VBQ0E7UUFDQTtVQUNBO1FBQ0E7TUFDQTtRQUNBO1FBQ0E7UUFDQTtVQUNBQztRQUNBO1VBQ0FBO1FBQ0E7UUFDQWxCO1VBQ0FLO1FBQ0E7TUFDQTtJQUNBO0lBRUFjO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLE1BQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFFQXJCO2tCQUNBQztrQkFDQWM7a0JBQ0FUO29CQUFBO3NCQUFBO3NCQUFBO3dCQUFBOzBCQUFBOzRCQUFBOzhCQUFBLElBQ0FNO2dDQUFBO2dDQUFBOzhCQUFBOzhCQUFBOzRCQUFBOzhCQUVBSjs4QkFDQWM7OEJBQUEsdUNBRUE7OEJBQUE7OEJBQUE7NEJBQUE7OEJBQUE7Z0NBQUE7Z0NBQUE7OEJBQUE7OEJBQUFDOzhCQUFBOzhCQUFBOzhCQUFBLE9BRUE7NEJBQUE7OEJBQUFDOzhCQUNBO2dDQUNBRjtnQ0FDQXRCOzhCQUNBOzhCQUFBOzhCQUFBOzRCQUFBOzhCQUFBOzhCQUFBOzhCQUVBOzRCQUFBOzhCQUFBOzhCQUFBOzRCQUFBOzhCQUFBOzhCQUFBOzRCQUFBOzhCQUFBOzhCQUFBOzhCQUFBOzRCQUFBOzhCQUFBOzhCQUFBOzhCQUFBOzRCQUFBOzhCQUlBO2dDQUNBQTtrQ0FBQUM7a0NBQUFDO2dDQUFBOzhCQUNBO2dDQUNBRjtrQ0FBQUM7a0NBQUFDO2dDQUFBOzhCQUNBO2dDQUNBRjtrQ0FBQUM7a0NBQUFDO2dDQUFBOzhCQUNBOzhCQUVBOzhCQUNBOzRCQUFBOzRCQUFBOzhCQUFBOzBCQUFBO3dCQUFBO3NCQUFBO29CQUFBLENBQ0E7b0JBQUE7c0JBQUE7b0JBQUE7b0JBQUE7a0JBQUE7Z0JBQ0E7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHZpZXcgY2xhc3M9XCJkZXZpY2VzLXBhZ2VcIj5cbiAgICA8dmlldyBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPHZpZXcgY2xhc3M9XCJoZWFkZXItbGVmdFwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhlYWRlci10aXRsZVwiPuaIkeeahOiuvuWkhzwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJwaG9uZS1udW1iZXJcIj57eyBwaG9uZU51bWJlciB9fTwvdGV4dD5cbiAgICAgIDwvdmlldz5cbiAgICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJsb2dvdXQtYnRuXCIgQGNsaWNrPVwiaGFuZGxlTG9nb3V0XCI+6YCA5Ye6PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdi1pZj1cIiFlZGl0TW9kZVwiIGNsYXNzPVwiZWRpdC1idG5cIiBAY2xpY2s9XCJlbnRlckVkaXRNb2RlXCI+57yW6L6RPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdi1lbHNlIGNsYXNzPVwiY2FuY2VsLWJ0blwiIEBjbGljaz1cImV4aXRFZGl0TW9kZVwiPuWPlua2iDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLWJ0blwiIEBjbGljaz1cImdvVG9CaW5kXCI+KyDmt7vliqA8L2J1dHRvbj5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG4gICAgXG4gICAgPHZpZXcgY2xhc3M9XCJzZWFyY2gtYmFyXCI+XG4gICAgICA8aW5wdXQgXG4gICAgICAgIGNsYXNzPVwic2VhcmNoLWlucHV0XCIgXG4gICAgICAgIHYtbW9kZWw9XCJzZWFyY2hLZXlcIiBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLmkJzntKLorr7lpIdcIlxuICAgICAgLz5cbiAgICA8L3ZpZXc+XG4gICAgXG4gICAgPHNjcm9sbC12aWV3IGNsYXNzPVwiZGV2aWNlLWxpc3RcIiBzY3JvbGwteT5cbiAgICAgIDx2aWV3IHYtaWY9XCJkZXZpY2VzLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwiZW1wdHktc3RhdGVcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJlbXB0eS1pY29uXCI+8J+TsTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJlbXB0eS10ZXh0XCI+5pqC5peg6K6+5aSHPC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImVtcHR5LWhpbnRcIj7ngrnlh7vlj7PkuIrop5Lmt7vliqDorr7lpIc8L3RleHQ+XG4gICAgICA8L3ZpZXc+XG4gICAgICBcbiAgICAgIDx2aWV3IFxuICAgICAgICB2LWZvcj1cImRldmljZSBpbiBmaWx0ZXJlZERldmljZXNcIiBcbiAgICAgICAgOmtleT1cImRldmljZS5kZXZpY2Vfa2V5XCJcbiAgICAgICAgY2xhc3M9XCJkZXZpY2UtY2FyZFwiXG4gICAgICA+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiZGV2aWNlLWNvbnRlbnRcIiBAY2xpY2s9XCJoYW5kbGVEZXZpY2VDbGljayhkZXZpY2UpXCI+XG4gICAgICAgICAgPHZpZXcgdi1pZj1cImVkaXRNb2RlXCIgY2xhc3M9XCJjaGVja2JveFwiIDpjbGFzcz1cInsgY2hlY2tlZDogc2VsZWN0ZWREZXZpY2VzLmluY2x1ZGVzKGRldmljZS5kZXZpY2Vfa2V5KSB9XCI+XG4gICAgICAgICAgICA8dGV4dCB2LWlmPVwic2VsZWN0ZWREZXZpY2VzLmluY2x1ZGVzKGRldmljZS5kZXZpY2Vfa2V5KVwiPuKckzwvdGV4dD5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJkZXZpY2UtaWNvblwiPlxuICAgICAgICAgICAgPHRleHQ+e3sgZGV2aWNlLm9ubGluZSA/ICfinIUnIDogJ/CflLQnIH19PC90ZXh0PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cImRldmljZS1pbmZvXCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImRldmljZS1uYW1lXCI+e3sgZ2V0RGV2aWNlTmFtZShkZXZpY2UpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJkZXZpY2Uta2V5LWxhYmVsXCI+e3sgZGV2aWNlLmRldmljZV9rZXkgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImRldmljZS1zdGF0dXNcIj57eyBkZXZpY2Uub25saW5lID8gJ+WcqOe6vycgOiAn56a757q/JyB9fTwvdGV4dD5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgPHZpZXcgdi1pZj1cImVkaXRNb2RlXCIgY2xhc3M9XCJkZXZpY2UtcmVuYW1lXCIgQGNsaWNrLnN0b3A9XCJzdGFydFJlbmFtZShkZXZpY2UpXCI+XG4gICAgICAgICAgICA8dGV4dD7inI/vuI88L3RleHQ+XG4gICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDx2aWV3IHYtZWxzZSBjbGFzcz1cImRldmljZS1hcnJvd1wiPlxuICAgICAgICAgICAgPHRleHQ+4oC6PC90ZXh0PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgIDwvc2Nyb2xsLXZpZXc+XG4gICAgXG4gICAgPHZpZXcgdi1pZj1cImVkaXRNb2RlXCIgY2xhc3M9XCJlZGl0LWJvdHRvbS1iYXJcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwic2VsZWN0ZWQtY291bnRcIj7lt7LpgIkge3sgc2VsZWN0ZWREZXZpY2VzLmxlbmd0aCB9fSDkuKo8L3RleHQ+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYmF0Y2gtZGVsZXRlLWJ0blwiIEBjbGljaz1cImJhdGNoRGVsZXRlXCIgOmRpc2FibGVkPVwic2VsZWN0ZWREZXZpY2VzLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICDliKDpmaQgKHt7IHNlbGVjdGVkRGV2aWNlcy5sZW5ndGggfX0pXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L3ZpZXc+XG4gICAgXG4gICAgPHZpZXcgdi1lbHNlIGNsYXNzPVwiYm90dG9tLWJhclwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJyZWZyZXNoLXRpbWVcIj7mm7TmlrDkuo4ge3sgbGFzdFVwZGF0ZVRpbWUgfX08L3RleHQ+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicmVmcmVzaC1idG5cIiBAY2xpY2s9XCJyZWZyZXNoRGV2aWNlc1wiPuKGuyDliLfmlrA8L2J1dHRvbj5cbiAgICA8L3ZpZXc+XG5cbiAgICA8IS0tIOmHjeWRveWQjeW8ueeqlyAtLT5cbiAgICA8dmlldyB2LWlmPVwicmVuYW1lVmlzaWJsZVwiIGNsYXNzPVwiZGlhbG9nLW92ZXJsYXlcIiBAY2xpY2s9XCJjYW5jZWxSZW5hbWVcIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwiZGlhbG9nLWJveFwiIEBjbGljay5zdG9wPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImRpYWxvZy10aXRsZVwiPumHjeWRveWQjeiuvuWkhzwvdGV4dD5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIGNsYXNzPVwiZGlhbG9nLWlucHV0XCIgXG4gICAgICAgICAgdi1tb2RlbD1cInJlbmFtZVZhbHVlXCIgXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLovpPlhaXorr7lpIflkI3np7BcIlxuICAgICAgICAgIG1heGxlbmd0aD1cIjIwXCJcbiAgICAgICAgICBmb2N1c1xuICAgICAgICAvPlxuICAgICAgICA8dmlldyBjbGFzcz1cImRpYWxvZy1idXR0b25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZy1idG4gZGlhbG9nLWNhbmNlbFwiIEBjbGljaz1cImNhbmNlbFJlbmFtZVwiPuWPlua2iDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2ctYnRuIGRpYWxvZy1jb25maXJtXCIgQGNsaWNrPVwiY29uZmlybVJlbmFtZVwiPuehruiupDwvYnV0dG9uPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG4gICAgPC92aWV3PlxuICA8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZ2V0UGhvbmVOdW1iZXIsIGNsZWFyUGhvbmVOdW1iZXIgfSBmcm9tICdAL3V0aWxzL3N0b3JhZ2UnXG5pbXBvcnQgeyBnZXREZXZpY2VzLCB1bmJpbmREZXZpY2UgfSBmcm9tICdAL3V0aWxzL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXZpY2VzOiBbXSxcbiAgICAgIHNlYXJjaEtleTogJycsXG4gICAgICBsYXN0VXBkYXRlVGltZTogJycsXG4gICAgICB0aW1lcjogbnVsbCxcbiAgICAgIHBob25lTnVtYmVyOiAnJyxcbiAgICAgIGVkaXRNb2RlOiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkRGV2aWNlczogW10sXG4gICAgICByZW5hbWVWaXNpYmxlOiBmYWxzZSxcbiAgICAgIHJlbmFtZVZhbHVlOiAnJyxcbiAgICAgIHJlbmFtZURldmljZTogbnVsbCxcbiAgICAgIHdzOiBudWxsLFxuICAgICAgd3NSZWNvbm5lY3RUaW1lcjogbnVsbFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBmaWx0ZXJlZERldmljZXMoKSB7XG4gICAgICBpZiAoIXRoaXMuc2VhcmNoS2V5KSByZXR1cm4gdGhpcy5kZXZpY2VzXG4gICAgICByZXR1cm4gdGhpcy5kZXZpY2VzLmZpbHRlcihkID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0RGV2aWNlTmFtZShkKVxuICAgICAgICByZXR1cm4gZC5kZXZpY2Vfa2V5LmluY2x1ZGVzKHRoaXMuc2VhcmNoS2V5KSB8fCBuYW1lLmluY2x1ZGVzKHRoaXMuc2VhcmNoS2V5KVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnBob25lTnVtYmVyID0gZ2V0UGhvbmVOdW1iZXIoKSB8fCAnJ1xuICAgIHRoaXMubG9hZERldmljZXMoKVxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWREZXZpY2VzKClcbiAgICB9LCAzMDAwMCkgIC8vIOaUueS4ujMw56eS6L2u6K+i77yIV2ViU29ja2V05o6o6YCB5a6e5pe25pu05paw77yJXG4gICAgXG4gICAgdGhpcy5jb25uZWN0V1MoKVxuICB9LFxuICBvblVubG9hZCgpIHtcbiAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgIH1cbiAgICB0aGlzLmRpc2Nvbm5lY3RXUygpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXREZXZpY2VOYW1lKGRldmljZSkge1xuICAgICAgY29uc3Qga2V5ID0gJ2RldmljZV9uYW1lXycgKyBkZXZpY2UuZGV2aWNlX2tleVxuICAgICAgY29uc3QgbmFtZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhrZXkpXG4gICAgICByZXR1cm4gbmFtZSB8fCBkZXZpY2UuZGV2aWNlX2tleVxuICAgIH0sXG4gICAgXG4gICAgc3RhcnRSZW5hbWUoZGV2aWNlKSB7XG4gICAgICB0aGlzLnJlbmFtZURldmljZSA9IGRldmljZVxuICAgICAgdGhpcy5yZW5hbWVWYWx1ZSA9IHRoaXMuZ2V0RGV2aWNlTmFtZShkZXZpY2UpID09PSBkZXZpY2UuZGV2aWNlX2tleSA/ICcnIDogdGhpcy5nZXREZXZpY2VOYW1lKGRldmljZSlcbiAgICAgIHRoaXMucmVuYW1lVmlzaWJsZSA9IHRydWVcbiAgICB9LFxuICAgIFxuICAgIGNhbmNlbFJlbmFtZSgpIHtcbiAgICAgIHRoaXMucmVuYW1lVmlzaWJsZSA9IGZhbHNlXG4gICAgICB0aGlzLnJlbmFtZURldmljZSA9IG51bGxcbiAgICAgIHRoaXMucmVuYW1lVmFsdWUgPSAnJ1xuICAgIH0sXG4gICAgXG4gICAgY29uZmlybVJlbmFtZSgpIHtcbiAgICAgIGlmICghdGhpcy5yZW5hbWVEZXZpY2UpIHJldHVyblxuICAgICAgY29uc3Qga2V5ID0gJ2RldmljZV9uYW1lXycgKyB0aGlzLnJlbmFtZURldmljZS5kZXZpY2Vfa2V5XG4gICAgICBpZiAodGhpcy5yZW5hbWVWYWx1ZSAmJiB0aGlzLnJlbmFtZVZhbHVlLnRyaW0oKSkge1xuICAgICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoa2V5LCB0aGlzLnJlbmFtZVZhbHVlLnRyaW0oKSlcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6YeN5ZG95ZCN5oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoa2V5KVxuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICflt7LmgaLlpI3pu5jorqTlkI3np7AnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKClcbiAgICAgIHRoaXMuY2FuY2VsUmVuYW1lKClcbiAgICB9LFxuICAgIFxuICAgIC8vID09PT09IFdlYlNvY2tldCDlrp7ml7bmjqjpgIEgPT09PT1cbiAgICBnZXRXU0Jhc2VVUkwoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAod2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbikge1xuICAgICAgICAgIHJldHVybiBgd3M6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fWBcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHJldHVybiAnd3M6Ly8xOTIuMTY4LjIuMTE6Nzk2NSdcbiAgICB9LFxuICAgIFxuICAgIGNvbm5lY3RXUygpIHtcbiAgICAgIGlmICh0aGlzLndzKSByZXR1cm5cbiAgICAgIGNvbnN0IHBob25lID0gZ2V0UGhvbmVOdW1iZXIoKVxuICAgICAgaWYgKCFwaG9uZSkgcmV0dXJuXG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLmdldFdTQmFzZVVSTCgpXG4gICAgICAgIHRoaXMud3MgPSB1bmkuY29ubmVjdFNvY2tldCh7XG4gICAgICAgICAgdXJsOiBgJHtiYXNlVXJsfS93cy9jbGllbnRgLFxuICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHt9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB0aGlzLndzLm9uT3BlbigoKSA9PiB7XG4gICAgICAgICAgdW5pLnNlbmRTb2NrZXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2F1dGgnLCBwaG9uZSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB0aGlzLndzLm9uTWVzc2FnZSgocmVzKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IEpTT04ucGFyc2UocmVzLmRhdGEpXG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdkZXZpY2Vfc3RhdHVzJykge1xuICAgICAgICAgICAgICAvLyDorr7lpIfnirbmgIHlj5jljJbvvIzlrp7ml7bmm7TmlrDliJfooahcbiAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5kZXZpY2VzLmZpbmRJbmRleChkID0+IGQuZGV2aWNlX2tleSA9PT0gbXNnLmRldmljZV9rZXkpXG4gICAgICAgICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlc1tpZHhdLm9ubGluZSA9IG1zZy5vbmxpbmVcbiAgICAgICAgICAgICAgICAvLyDmm7TmlrDnirbmgIHmlbDmja5cbiAgICAgICAgICAgICAgICBpZiAobXNnLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VzW2lkeF0uc3RhdHVzID0gbXNnLnN0YXR1c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RVcGRhdGVUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKVxuICAgICAgICAgICAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB0aGlzLndzLm9uQ2xvc2UoKCkgPT4ge1xuICAgICAgICAgIHRoaXMud3MgPSBudWxsXG4gICAgICAgICAgaWYgKCF0aGlzLndzUmVjb25uZWN0VGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMud3NSZWNvbm5lY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLndzUmVjb25uZWN0VGltZXIgPSBudWxsXG4gICAgICAgICAgICAgIHRoaXMuY29ubmVjdFdTKClcbiAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy53cy5vbkVycm9yKCgpID0+IHt9KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnV2ViU29ja2V06L+e5o6l5aSx6LSlJywgZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIGRpc2Nvbm5lY3RXUygpIHtcbiAgICAgIGlmICh0aGlzLndzUmVjb25uZWN0VGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMud3NSZWNvbm5lY3RUaW1lcilcbiAgICAgICAgdGhpcy53c1JlY29ubmVjdFRpbWVyID0gbnVsbFxuICAgICAgfVxuICAgICAgaWYgKHRoaXMud3MpIHtcbiAgICAgICAgdHJ5IHsgdGhpcy53cy5jbG9zZSgpIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHRoaXMud3MgPSBudWxsXG4gICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBhc3luYyBsb2FkRGV2aWNlcygpIHtcbiAgICAgIGNvbnN0IHBob25lID0gZ2V0UGhvbmVOdW1iZXIoKVxuICAgICAgaWYgKCFwaG9uZSkgcmV0dXJuXG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldERldmljZXMocGhvbmUpXG4gICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMuZGV2aWNlcyA9IHJlcy5kZXZpY2VzIHx8IFtdXG4gICAgICAgICAgdGhpcy5sYXN0VXBkYXRlVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign5Yqg6L296K6+5aSH5aSx6LSlJywgZXJyb3IpXG4gICAgICB9XG4gICAgfSxcbiAgICBcbiAgICByZWZyZXNoRGV2aWNlcygpIHtcbiAgICAgIHVuaS5zaG93TG9hZGluZyh7IHRpdGxlOiAn5Yi35paw5LitLi4uJyB9KVxuICAgICAgdGhpcy5sb2FkRGV2aWNlcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIFxuICAgIGhhbmRsZUxvZ291dCgpIHtcbiAgICAgIHVuaS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+ehruiupOmAgOWHuicsXG4gICAgICAgIGNvbnRlbnQ6ICfnoa7lrpropoHpgIDlh7rnmbvlvZXlkJfvvJ8nLFxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICBjbGVhclBob25lTnVtYmVyKClcbiAgICAgICAgICAgIHVuaS5yZWRpcmVjdFRvKHsgdXJsOiAnL3BhZ2VzL2xvZ2luL2luZGV4JyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIFxuICAgIGdvVG9CaW5kKCkge1xuICAgICAgdW5pLm5hdmlnYXRlVG8oeyB1cmw6ICcvcGFnZXMvYmluZC9pbmRleCcgfSlcbiAgICB9LFxuICAgIFxuICAgIGhhbmRsZURldmljZUNsaWNrKGRldmljZSkge1xuICAgICAgaWYgKHRoaXMuZWRpdE1vZGUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkRGV2aWNlcy5pbmRleE9mKGRldmljZS5kZXZpY2Vfa2V5KVxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWREZXZpY2VzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRGV2aWNlcy5wdXNoKGRldmljZS5kZXZpY2Vfa2V5KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDmoLnmja7lnovlj7fot7PovazkuI3lkIzmjqfliLbpobVcbiAgICAgICAgbGV0IHBhZ2UgPSAnL3BhZ2VzL2NvbnRyb2wvaW5kZXgnXG4gICAgICAgIGlmIChkZXZpY2UubW9kZWwgPT09ICdmaXNoX29uZScpIHtcbiAgICAgICAgICBwYWdlID0gJy9wYWdlcy9jb250cm9sL2Zpc2gtb25lJ1xuICAgICAgICB9IGVsc2UgaWYgKGRldmljZS5tb2RlbCA9PT0gJ2Zpc2hfbWluaScpIHtcbiAgICAgICAgICBwYWdlID0gJy9wYWdlcy9jb250cm9sL2Zpc2gtbWluaSdcbiAgICAgICAgfVxuICAgICAgICB1bmkubmF2aWdhdGVUbyh7IFxuICAgICAgICAgIHVybDogYCR7cGFnZX0/ZGV2aWNlX2tleT0ke2RldmljZS5kZXZpY2Vfa2V5fWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIGVudGVyRWRpdE1vZGUoKSB7XG4gICAgICB0aGlzLmVkaXRNb2RlID0gdHJ1ZVxuICAgICAgdGhpcy5zZWxlY3RlZERldmljZXMgPSBbXVxuICAgIH0sXG4gICAgXG4gICAgZXhpdEVkaXRNb2RlKCkge1xuICAgICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlXG4gICAgICB0aGlzLnNlbGVjdGVkRGV2aWNlcyA9IFtdXG4gICAgfSxcbiAgICBcbiAgICBhc3luYyBiYXRjaERlbGV0ZSgpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGV2aWNlcy5sZW5ndGggPT09IDApIHJldHVyblxuICAgICAgXG4gICAgICB1bmkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfnoa7orqTliKDpmaQnLFxuICAgICAgICBjb250ZW50OiBg56Gu5a6a6KaB5Yig6Zmk6YCJ5Lit55qEICR7dGhpcy5zZWxlY3RlZERldmljZXMubGVuZ3RofSDkuKrorr7lpIflkJfvvJ9gLFxuICAgICAgICBzdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMuY29uZmlybSkgcmV0dXJuXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgcGhvbmUgPSBnZXRQaG9uZU51bWJlcigpXG4gICAgICAgICAgbGV0IHN1Y2Nlc3NDb3VudCA9IDBcbiAgICAgICAgICBcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLnNlbGVjdGVkRGV2aWNlcykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdW5iaW5kRGV2aWNlKHBob25lLCBrZXkpXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDb3VudCsrXG4gICAgICAgICAgICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdkZXZpY2VfbmFtZV8nICsga2V5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+WIoOmZpOWksei0pScsIGtleSwgZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NDb3VudCA9PT0gdGhpcy5zZWxlY3RlZERldmljZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IGDliKDpmaTmiJDlip8gJHtzdWNjZXNzQ291bnR9IOS4qmAsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAoc3VjY2Vzc0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfliKDpmaTlpLHotKXvvIzor7fmo4Dmn6XnvZHnu5wnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiBg5Yig6Zmk5oiQ5YqfICR7c3VjY2Vzc0NvdW50fS8ke3RoaXMuc2VsZWN0ZWREZXZpY2VzLmxlbmd0aH1gLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5leGl0RWRpdE1vZGUoKVxuICAgICAgICAgIHRoaXMubG9hZERldmljZXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmRldmljZXMtcGFnZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBwYWRkaW5nLWJvdHRvbTogMTIwcnB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0MHJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmhlYWRlci1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzZycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbn1cblxuLnBob25lLW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMjRycHg7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tdG9wOiA4cnB4O1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ291dC1idG4ge1xuICBmb250LXNpemU6IDI2cnB4O1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDIwcnB4O1xufVxuXG4uZWRpdC1idG4ge1xuICBmb250LXNpemU6IDI4cnB4O1xuICBjb2xvcjogIzFhNzNlODtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDIwcnB4O1xufVxuXG4uY2FuY2VsLWJ0biB7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMjBycHg7XG59XG5cbi5hZGQtYnRuIHtcbiAgYmFja2dyb3VuZDogIzFhNzNlODtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIHBhZGRpbmc6IDE2cnB4IDMycnB4O1xuICBib3JkZXItcmFkaXVzOiA0MHJweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIHBhZGRpbmc6IDIwcnB4IDQwcnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItdG9wOiAxcnB4IHNvbGlkICNlZWU7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHJweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogMzVycHg7XG4gIHBhZGRpbmc6IDAgMzBycHg7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG59XG5cbi5kZXZpY2UtbGlzdCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM4MHJweCk7XG4gIHBhZGRpbmc6IDIwcnB4IDQwcnB4O1xufVxuXG4uZW1wdHktc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTAwcnB4IDA7XG59XG5cbi5lbXB0eS1pY29uIHtcbiAgZm9udC1zaXplOiA4MHJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBycHg7XG59XG5cbi5lbXB0eS10ZXh0IHtcbiAgZm9udC1zaXplOiAzMnJweDtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1ib3R0b206IDE2cnB4O1xufVxuXG4uZW1wdHktaGludCB7XG4gIGZvbnQtc2l6ZTogMjZycHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uZGV2aWNlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHJweDtcbiAgcGFkZGluZzogMzBycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcnB4O1xuICBib3gtc2hhZG93OiAwIDJycHggMTBycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLmRldmljZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNoZWNrYm94IHtcbiAgd2lkdGg6IDQ4cnB4O1xuICBoZWlnaHQ6IDQ4cnB4O1xuICBib3JkZXI6IDJycHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHJweDtcbiAgZm9udC1zaXplOiAyOHJweDtcbiAgY29sb3I6ICNmZmY7XG4gIFxuICAmLmNoZWNrZWQge1xuICAgIGJhY2tncm91bmQ6ICMxYTczZTg7XG4gICAgYm9yZGVyLWNvbG9yOiAjMWE3M2U4O1xuICB9XG59XG5cbi5kZXZpY2UtaWNvbiB7XG4gIHdpZHRoOiA2MHJweDtcbiAgaGVpZ2h0OiA2MHJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzZycHg7XG4gIG1hcmdpbi1yaWdodDogMjBycHg7XG59XG5cbi5kZXZpY2UtaW5mbyB7XG4gIGZsZXg6IDE7XG59XG5cbi5kZXZpY2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMzJycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kZXZpY2Uta2V5LWxhYmVsIHtcbiAgZm9udC1zaXplOiAyMnJweDtcbiAgY29sb3I6ICNiYmI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGV2aWNlLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMjZycHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uZGV2aWNlLWFycm93IHtcbiAgZm9udC1zaXplOiA0MHJweDtcbiAgY29sb3I6ICNjY2M7XG4gIHBhZGRpbmc6IDEwcnB4O1xufVxuXG4uZGV2aWNlLXJlbmFtZSB7XG4gIGZvbnQtc2l6ZTogMzZycHg7XG4gIHBhZGRpbmc6IDEwcnB4O1xuICBtYXJnaW4tbGVmdDogMTBycHg7XG59XG5cbi5ib3R0b20tYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcnB4IDQwcnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItdG9wOiAxcnB4IHNvbGlkICNlZWU7XG59XG5cbi5lZGl0LWJvdHRvbS1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBycHggNDBycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3A6IDFycHggc29saWQgI2VlZTtcbn1cblxuLnNlbGVjdGVkLWNvdW50IHtcbiAgZm9udC1zaXplOiAyOHJweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5iYXRjaC1kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIHBhZGRpbmc6IDE2cnB4IDMycnB4O1xuICBib3JkZXItcmFkaXVzOiA0MHJweDtcbiAgYm9yZGVyOiBub25lO1xuICBcbiAgJltkaXNhYmxlZF0ge1xuICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gIH1cbn1cblxuLnJlZnJlc2gtdGltZSB7XG4gIGZvbnQtc2l6ZTogMjRycHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4ucmVmcmVzaC1idG4ge1xuICBmb250LXNpemU6IDI2cnB4O1xuICBjb2xvcjogIzFhNzNlODtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4vKiDph43lkb3lkI3lvLnnqpcgKi9cbi5kaWFsb2ctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5kaWFsb2ctYm94IHtcbiAgd2lkdGg6IDYwMHJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjRycHg7XG4gIHBhZGRpbmc6IDUwcnB4IDQwcnB4IDMwcnB4O1xufVxuXG4uZGlhbG9nLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzNHJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0MHJweDtcbn1cblxuLmRpYWxvZy1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcnB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiAxMnJweDtcbiAgcGFkZGluZzogMCAyNHJweDtcbiAgZm9udC1zaXplOiAzMHJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLWJvdHRvbTogNDBycHg7XG59XG5cbi5kaWFsb2ctYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRpYWxvZy1idG4ge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDgwcnB4O1xuICBmb250LXNpemU6IDMwcnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnJweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDAgMTBycHg7XG59XG5cbi5kaWFsb2ctY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5kaWFsb2ctY29uZmlybSB7XG4gIGJhY2tncm91bmQ6ICMxYTczZTg7XG4gIGNvbG9yOiAjZmZmO1xufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _api = __webpack_require__(/*! @/utils/api */ 16);\nvar _storage = __webpack_require__(/*! @/utils/storage */ 15);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = {\n  data: function data() {\n    return {\n      deviceKey: '',\n      status: {\n        online: false,\n        pwm1Level: 0,\n        pwm2Level: 0,\n        pwm3Level: 0,\n        airPumpLevel: 0,\n        fanLevel: 0,\n        uvLightOn: false,\n        relay1State: false,\n        relay2State: false,\n        servoMoving: false,\n        adcWQVoltage: 0,\n        adcTempVoltage: 0,\n        systemPowered: true\n      },\n      pumpLevels: ['关', '一档', '二档', '三档'],\n      lastUpdateTime: '',\n      timer: null,\n      renameVisible: false,\n      renameValue: '',\n      renameTarget: '',\n      renameDefault: '',\n      ws: null,\n      wsConnected: false,\n      wsReconnectTimer: null,\n      servoTimer: null,\n      servoStartTime: 0,\n      lastClickTime: 0,\n      // 定时任务\n      timers: [],\n      timerDialogVisible: false,\n      editingTimer: null,\n      timerForm: {\n        id: '',\n        name: '',\n        hour: 8,\n        minute: 0,\n        type: 0,\n        cmd: 'trigger_servo',\n        params: {},\n        duration: 0,\n        durationLabel: '不停止'\n      },\n      hours: Array.from({\n        length: 24\n      }, function (_, i) {\n        return ('0' + i).slice(-2);\n      }),\n      minutes: Array.from({\n        length: 60\n      }, function (_, i) {\n        return ('0' + i).slice(-2);\n      }),\n      taskTypes: [{\n        label: '喂鱼（舵机）',\n        cmd: 'trigger_servo',\n        params: {}\n      }, {\n        label: '换水1档（水泵1 level=1）',\n        cmd: 'set_pump',\n        params: {\n          pump: 1,\n          level: 1\n        }\n      }, {\n        label: '换水2档（水泵1 level=2）',\n        cmd: 'set_pump',\n        params: {\n          pump: 1,\n          level: 2\n        }\n      }, {\n        label: '换水3档（水泵1 level=3）',\n        cmd: 'set_pump',\n        params: {\n          pump: 1,\n          level: 3\n        }\n      }, {\n        label: '加气1档（气泵 level=1）',\n        cmd: 'set_air_pump',\n        params: {\n          level: 1\n        }\n      }, {\n        label: '加气2档（气泵 level=2）',\n        cmd: 'set_air_pump',\n        params: {\n          level: 2\n        }\n      }, {\n        label: '加气3档（气泵 level=3）',\n        cmd: 'set_air_pump',\n        params: {\n          level: 3\n        }\n      }, {\n        label: '开灯1档（灯条 level=1）',\n        cmd: 'set_light',\n        params: {\n          level: 1\n        }\n      }, {\n        label: '开灯2档（level=2）',\n        cmd: 'set_light',\n        params: {\n          level: 2\n        }\n      }, {\n        label: '开灯3档（level=3）',\n        cmd: 'set_light',\n        params: {\n          level: 3\n        }\n      }, {\n        label: '风扇1档',\n        cmd: 'set_fan',\n        params: {\n          level: 1\n        }\n      }, {\n        label: '风扇2档',\n        cmd: 'set_fan',\n        params: {\n          level: 2\n        }\n      }, {\n        label: '风扇3档',\n        cmd: 'set_fan',\n        params: {\n          level: 3\n        }\n      }],\n      durationOptions: [{\n        label: '不停止',\n        value: 0\n      }, {\n        label: '1分钟',\n        value: 1\n      }, {\n        label: '5分钟',\n        value: 5\n      }, {\n        label: '10分钟',\n        value: 10\n      }, {\n        label: '30分钟',\n        value: 30\n      }, {\n        label: '60分钟',\n        value: 60\n      }]\n    };\n  },\n  computed: {\n    taskTypeLabels: function taskTypeLabels() {\n      return this.taskTypes.map(function (t) {\n        return t.label;\n      });\n    },\n    durationLabels: function durationLabels() {\n      return this.durationOptions.map(function (d) {\n        return d.label;\n      });\n    }\n  },\n  onLoad: function onLoad(options) {\n    var _this = this;\n    this.deviceKey = options.device_key || '';\n    if (!this.deviceKey) {\n      uni.showToast({\n        title: '设备参数错误',\n        icon: 'none'\n      });\n      return;\n    }\n    this.loadStatus();\n    this.loadTimers();\n\n    // 连接 WebSocket 接收实时推送\n    this.connectWS();\n\n    // 进入页面自动请求最新状态\n    (0, _api.requestDeviceStatus)(this.deviceKey).then(function () {\n      setTimeout(function () {\n        return _this.loadStatus();\n      }, 800);\n    });\n\n    // 10秒轮询（不管WebSocket是否连接，确保数据更新）\n    this.timer = setInterval(function () {\n      _this.loadStatus();\n      _this.checkServoTimeout();\n    }, 10000);\n\n    // 舵机超时检测（每2秒检查一次）\n    this.servoTimer = setInterval(function () {\n      _this.checkServoTimeout();\n    }, 2000);\n  },\n  onUnload: function onUnload() {\n    if (this.timer) {\n      clearInterval(this.timer);\n    }\n    if (this.servoTimer) {\n      clearInterval(this.servoTimer);\n    }\n    this.disconnectWS();\n  },\n  methods: {\n    getCtrlName: function getCtrlName(target, defaultName) {\n      var key = 'ctrl_name_' + this.deviceKey + '_' + target;\n      var name = uni.getStorageSync(key);\n      return name || defaultName;\n    },\n    checkRateLimit: function checkRateLimit() {\n      var now = Date.now();\n      if (now - this.lastClickTime < 1000) {\n        uni.showToast({\n          title: '操作过快，慢点哟',\n          icon: 'none'\n        });\n        return false;\n      }\n      this.lastClickTime = now;\n      return true;\n    },\n    startRename: function startRename(target, defaultName) {\n      this.renameTarget = target;\n      this.renameDefault = defaultName;\n      this.renameValue = this.getCtrlName(target, defaultName);\n      if (this.renameValue === defaultName) {\n        this.renameValue = '';\n      }\n      this.renameVisible = true;\n    },\n    cancelRename: function cancelRename() {\n      this.renameVisible = false;\n      this.renameTarget = '';\n      this.renameValue = '';\n    },\n    confirmRename: function confirmRename() {\n      if (!this.renameTarget) return;\n      var key = 'ctrl_name_' + this.deviceKey + '_' + this.renameTarget;\n      if (this.renameValue && this.renameValue.trim()) {\n        uni.setStorageSync(key, this.renameValue.trim());\n        uni.showToast({\n          title: '重命名成功',\n          icon: 'success'\n        });\n      } else {\n        uni.removeStorageSync(key);\n        uni.showToast({\n          title: '已恢复默认名称',\n          icon: 'none'\n        });\n      }\n      this.cancelRename();\n    },\n    // ===== WebSocket 实时推送 =====\n    getWSBaseURL: function getWSBaseURL() {\n      // H5开发模式：使用当前页面地址\n      // 原生App模式：使用配置的服务器地址\n      try {\n        if (window && window.location) {\n          return \"ws://\".concat(window.location.host);\n        }\n      } catch (e) {}\n      // 默认使用服务器地址\n      return 'ws://112.124.107.159:7965';\n    },\n    connectWS: function connectWS() {\n      var _this2 = this;\n      if (this.ws) return;\n      var phone = (0, _storage.getPhoneNumber)();\n      if (!phone) return;\n      try {\n        var baseUrl = this.getWSBaseURL();\n        this.ws = uni.connectSocket({\n          url: \"\".concat(baseUrl, \"/ws/client\"),\n          success: function success() {}\n        });\n        this.ws.onOpen(function () {\n          _this2.wsConnected = true;\n          // 发送认证\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'auth',\n              phone: phone\n            })\n          });\n          // 订阅当前设备\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'subscribe',\n              device_key: _this2.deviceKey\n            })\n          });\n        });\n        this.ws.onMessage(function (res) {\n          try {\n            var msg = JSON.parse(res.data);\n            if (msg.type === 'device_status' && msg.device_key === _this2.deviceKey) {\n              _this2.updateStatusFromWS(msg);\n            }\n          } catch (e) {}\n        });\n        this.ws.onClose(function () {\n          _this2.wsConnected = false;\n          _this2.ws = null;\n          // 3秒后自动重连\n          if (!_this2.wsReconnectTimer) {\n            _this2.wsReconnectTimer = setTimeout(function () {\n              _this2.wsReconnectTimer = null;\n              _this2.connectWS();\n            }, 3000);\n          }\n        });\n        this.ws.onError(function () {\n          _this2.wsConnected = false;\n        });\n      } catch (e) {\n        __f__(\"log\", 'WebSocket连接失败，使用HTTP轮询', e, \" at pages/control/index.vue:521\");\n      }\n    },\n    disconnectWS: function disconnectWS() {\n      if (this.wsReconnectTimer) {\n        clearTimeout(this.wsReconnectTimer);\n        this.wsReconnectTimer = null;\n      }\n      if (this.ws) {\n        this.ws.close();\n        this.ws = null;\n        this.wsConnected = false;\n      }\n    },\n    updateStatusFromWS: function updateStatusFromWS(msg) {\n      var s = msg.status || {};\n      var moving = s.servoMoving || false;\n      if (moving && !this.servoStartTime) {\n        this.servoStartTime = Date.now();\n      }\n      if (!moving) {\n        this.servoStartTime = 0;\n      }\n      this.status = {\n        online: msg.online || false,\n        pwm1Level: s.pwm1Level || 0,\n        pwm2Level: s.pwm2Level || 0,\n        pwm3Level: s.pwm3Level || 0,\n        airPumpLevel: s.airPumpLevel || 0,\n        fanLevel: s.fanLevel || 0,\n        uvLightOn: s.uvLightOn || false,\n        relay1State: s.relay1State || false,\n        relay2State: s.relay2State || false,\n        servoMoving: s.servoMoving || false,\n        adcWQVoltage: s.adcWQVoltage || 0,\n        adcTempVoltage: s.adcTempVoltage || 0,\n        tdsValue: s.tdsValue || 0,\n        waterTemperature: s.waterTemperature || 0,\n        systemPowered: s.systemPowered !== false\n      };\n      this.lastUpdateTime = new Date().toLocaleTimeString();\n    },\n    loadStatus: function loadStatus() {\n      var _this3 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var res, s, moving;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return (0, _api.getDeviceStatus)(_this3.deviceKey);\n              case 3:\n                res = _context.sent;\n                if (res.success) {\n                  s = res.status || {};\n                  moving = s.servoMoving || false;\n                  if (moving && !_this3.servoStartTime) {\n                    _this3.servoStartTime = Date.now();\n                  }\n                  if (!moving) {\n                    _this3.servoStartTime = 0;\n                  }\n                  _this3.status = {\n                    online: res.online || false,\n                    pwm1Level: s.pwm1Level || 0,\n                    pwm2Level: s.pwm2Level || 0,\n                    pwm3Level: s.pwm3Level || 0,\n                    airPumpLevel: s.airPumpLevel || 0,\n                    fanLevel: s.fanLevel || 0,\n                    uvLightOn: s.uvLightOn || false,\n                    relay1State: s.relay1State || false,\n                    relay2State: s.relay2State || false,\n                    servoMoving: s.servoMoving || false,\n                    adcWQVoltage: s.adcWQVoltage || 0,\n                    adcTempVoltage: s.adcTempVoltage || 0,\n                    tdsValue: s.tdsValue || 0,\n                    waterTemperature: s.waterTemperature || 0,\n                    systemPowered: s.systemPowered !== false\n                  };\n                  _this3.lastUpdateTime = new Date().toLocaleTimeString();\n                }\n                _context.next = 10;\n                break;\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                _this3.status.online = false;\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }))();\n    },\n    refreshStatus: function refreshStatus() {\n      var _this4 = this;\n      uni.showLoading({\n        title: '刷新中...'\n      });\n      (0, _api.requestDeviceStatus)(this.deviceKey).then(function () {\n        setTimeout(function () {\n          _this4.loadStatus().then(function () {\n            uni.hideLoading();\n          });\n        }, 800);\n      }).catch(function () {\n        _this4.loadStatus().then(function () {\n          uni.hideLoading();\n        });\n      });\n    },\n    setPump: function setPump(pump, level) {\n      var _this5 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var res;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (_this5.status.online) {\n                  _context2.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context2.abrupt(\"return\");\n              case 3:\n                if (_this5.checkRateLimit()) {\n                  _context2.next = 5;\n                  break;\n                }\n                return _context2.abrupt(\"return\");\n              case 5:\n                _this5.status[\"pwm\".concat(pump, \"Level\")] = level;\n                _context2.prev = 6;\n                _context2.next = 9;\n                return (0, _api.sendControlCommand)(_this5.deviceKey, 'set_pump', {\n                  pump: pump,\n                  level: level\n                });\n              case 9:\n                res = _context2.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this5.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context2.next = 16;\n                break;\n              case 13:\n                _context2.prev = 13;\n                _context2.t0 = _context2[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[6, 13]]);\n      }))();\n    },\n    setLight: function setLight(level) {\n      var _this6 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        var res;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                if (_this6.status.online) {\n                  _context3.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context3.abrupt(\"return\");\n              case 3:\n                if (_this6.checkRateLimit()) {\n                  _context3.next = 5;\n                  break;\n                }\n                return _context3.abrupt(\"return\");\n              case 5:\n                _this6.status.pwm3Level = level;\n                _context3.prev = 6;\n                _context3.next = 9;\n                return (0, _api.sendControlCommand)(_this6.deviceKey, 'set_light', {\n                  level: level\n                });\n              case 9:\n                res = _context3.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this6.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context3.next = 16;\n                break;\n              case 13:\n                _context3.prev = 13;\n                _context3.t0 = _context3[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, null, [[6, 13]]);\n      }))();\n    },\n    setAirPump: function setAirPump(level) {\n      var _this7 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {\n        var res;\n        return _regenerator.default.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                if (_this7.status.online) {\n                  _context4.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context4.abrupt(\"return\");\n              case 3:\n                if (_this7.checkRateLimit()) {\n                  _context4.next = 5;\n                  break;\n                }\n                return _context4.abrupt(\"return\");\n              case 5:\n                _this7.status.airPumpLevel = level;\n                _context4.prev = 6;\n                _context4.next = 9;\n                return (0, _api.sendControlCommand)(_this7.deviceKey, 'set_air_pump', {\n                  level: level\n                });\n              case 9:\n                res = _context4.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this7.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context4.next = 16;\n                break;\n              case 13:\n                _context4.prev = 13;\n                _context4.t0 = _context4[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, null, [[6, 13]]);\n      }))();\n    },\n    setFan: function setFan(level) {\n      var _this8 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {\n        var res;\n        return _regenerator.default.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                if (_this8.status.online) {\n                  _context5.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context5.abrupt(\"return\");\n              case 3:\n                if (_this8.checkRateLimit()) {\n                  _context5.next = 5;\n                  break;\n                }\n                return _context5.abrupt(\"return\");\n              case 5:\n                _this8.status.fanLevel = level;\n                _context5.prev = 6;\n                _context5.next = 9;\n                return (0, _api.sendControlCommand)(_this8.deviceKey, 'set_fan', {\n                  level: level\n                });\n              case 9:\n                res = _context5.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this8.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context5.next = 16;\n                break;\n              case 13:\n                _context5.prev = 13;\n                _context5.t0 = _context5[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5, null, [[6, 13]]);\n      }))();\n    },\n    setUV: function setUV(on) {\n      var _this9 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {\n        var res;\n        return _regenerator.default.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                if (_this9.status.online) {\n                  _context6.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context6.abrupt(\"return\");\n              case 3:\n                if (_this9.checkRateLimit()) {\n                  _context6.next = 5;\n                  break;\n                }\n                return _context6.abrupt(\"return\");\n              case 5:\n                _this9.status.uvLightOn = on;\n                _context6.prev = 6;\n                _context6.next = 9;\n                return (0, _api.sendControlCommand)(_this9.deviceKey, 'set_uv', {\n                  on: on\n                });\n              case 9:\n                res = _context6.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this9.loadStatus();\n                  }, 800);\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context6.next = 16;\n                break;\n              case 13:\n                _context6.prev = 13;\n                _context6.t0 = _context6[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6, null, [[6, 13]]);\n      }))();\n    },\n    setRelay2: function setRelay2(on) {\n      var _this10 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {\n        var res;\n        return _regenerator.default.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                if (_this10.status.online) {\n                  _context7.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context7.abrupt(\"return\");\n              case 3:\n                if (_this10.checkRateLimit()) {\n                  _context7.next = 5;\n                  break;\n                }\n                return _context7.abrupt(\"return\");\n              case 5:\n                _this10.status.relay2State = on;\n                _context7.prev = 6;\n                _context7.next = 9;\n                return (0, _api.sendControlCommand)(_this10.deviceKey, 'set_relay2', {\n                  on: on\n                });\n              case 9:\n                res = _context7.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this10.loadStatus();\n                  }, 800);\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context7.next = 16;\n                break;\n              case 13:\n                _context7.prev = 13;\n                _context7.t0 = _context7[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7, null, [[6, 13]]);\n      }))();\n    },\n    triggerServo: function triggerServo() {\n      var _this11 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {\n        var res;\n        return _regenerator.default.wrap(function _callee8$(_context8) {\n          while (1) {\n            switch (_context8.prev = _context8.next) {\n              case 0:\n                if (!(!_this11.status.online || _this11.status.servoMoving)) {\n                  _context8.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线或舵机运行中',\n                  icon: 'none'\n                });\n                return _context8.abrupt(\"return\");\n              case 3:\n                if (_this11.checkRateLimit()) {\n                  _context8.next = 5;\n                  break;\n                }\n                return _context8.abrupt(\"return\");\n              case 5:\n                _context8.prev = 5;\n                _context8.next = 8;\n                return (0, _api.sendControlCommand)(_this11.deviceKey, 'trigger_servo', {});\n              case 8:\n                res = _context8.sent;\n                if (res.success) {\n                  _this11.status.servoMoving = true;\n                  _this11.servoStartTime = Date.now(); // 记录启动时间\n                  uni.showToast({\n                    title: '舵机已启动',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '启动失败',\n                    icon: 'none'\n                  });\n                }\n                _context8.next = 15;\n                break;\n              case 12:\n                _context8.prev = 12;\n                _context8.t0 = _context8[\"catch\"](5);\n                uni.showToast({\n                  title: '启动失败',\n                  icon: 'none'\n                });\n              case 15:\n              case \"end\":\n                return _context8.stop();\n            }\n          }\n        }, _callee8, null, [[5, 12]]);\n      }))();\n    },\n    checkServoTimeout: function checkServoTimeout() {\n      // 舵机运行超15秒自动复位（舵机完整周期约8秒）\n      if (this.status.servoMoving && this.servoStartTime > 0) {\n        var elapsed = (Date.now() - this.servoStartTime) / 1000;\n        if (elapsed > 8) {\n          this.status.servoMoving = false;\n          this.servoStartTime = 0;\n        }\n      }\n    },\n    togglePower: function togglePower() {\n      var _this12 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {\n        var isPowered, cmd, confirmText;\n        return _regenerator.default.wrap(function _callee9$(_context9) {\n          while (1) {\n            switch (_context9.prev = _context9.next) {\n              case 0:\n                if (_this12.status.online) {\n                  _context9.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context9.abrupt(\"return\");\n              case 3:\n                isPowered = _this12.status.systemPowered;\n                cmd = isPowered ? 'power_off' : 'power_on';\n                confirmText = isPowered ? '确定要关机吗？\\n关机后设备保持网络连接，可远程开机。' : '确定要开机吗？';\n                uni.showModal({\n                  title: '确认操作',\n                  content: confirmText,\n                  success: function success(modalRes) {\n                    if (!modalRes.confirm) return;\n                    _this12.executePowerCmd(cmd);\n                  }\n                });\n              case 7:\n              case \"end\":\n                return _context9.stop();\n            }\n          }\n        }, _callee9);\n      }))();\n    },\n    executePowerCmd: function executePowerCmd(cmd) {\n      var _this13 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {\n        var result;\n        return _regenerator.default.wrap(function _callee10$(_context10) {\n          while (1) {\n            switch (_context10.prev = _context10.next) {\n              case 0:\n                if (_this13.checkRateLimit()) {\n                  _context10.next = 2;\n                  break;\n                }\n                return _context10.abrupt(\"return\");\n              case 2:\n                _context10.prev = 2;\n                _context10.next = 5;\n                return (0, _api.sendControlCommand)(_this13.deviceKey, cmd, {});\n              case 5:\n                result = _context10.sent;\n                if (result.success) {\n                  _this13.status.systemPowered = cmd === 'power_on';\n                  uni.showToast({\n                    title: cmd === 'power_on' ? '开机成功' : '关机成功',\n                    icon: 'success'\n                  });\n                  setTimeout(function () {\n                    return _this13.loadStatus();\n                  }, 1000);\n                } else {\n                  uni.showToast({\n                    title: result.message || '操作失败',\n                    icon: 'none'\n                  });\n                }\n                _context10.next = 12;\n                break;\n              case 9:\n                _context10.prev = 9;\n                _context10.t0 = _context10[\"catch\"](2);\n                uni.showToast({\n                  title: '操作失败',\n                  icon: 'none'\n                });\n              case 12:\n              case \"end\":\n                return _context10.stop();\n            }\n          }\n        }, _callee10, null, [[2, 9]]);\n      }))();\n    },\n    // ===== 定时任务 =====\n    getTaskTypeLabel: function getTaskTypeLabel(timer) {\n      var type = this.taskTypes.find(function (t) {\n        return t.cmd === timer.cmd && JSON.stringify(t.params) === JSON.stringify(timer.params);\n      });\n      return type ? type.label : '未知任务';\n    },\n    loadTimers: function loadTimers() {\n      var _this14 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {\n        var res;\n        return _regenerator.default.wrap(function _callee11$(_context11) {\n          while (1) {\n            switch (_context11.prev = _context11.next) {\n              case 0:\n                _context11.prev = 0;\n                _context11.next = 3;\n                return (0, _api.getTimers)(_this14.deviceKey);\n              case 3:\n                res = _context11.sent;\n                if (res.success && res.timers) {\n                  _this14.timers = res.timers;\n                }\n                _context11.next = 10;\n                break;\n              case 7:\n                _context11.prev = 7;\n                _context11.t0 = _context11[\"catch\"](0);\n                // 静默失败，使用空列表\n                _this14.timers = [];\n              case 10:\n              case \"end\":\n                return _context11.stop();\n            }\n          }\n        }, _callee11, null, [[0, 7]]);\n      }))();\n    },\n    openTimerDialog: function openTimerDialog(timer) {\n      if (timer) {\n        this.editingTimer = timer;\n        var typeIndex = this.taskTypes.findIndex(function (t) {\n          return t.cmd === timer.cmd && JSON.stringify(t.params) === JSON.stringify(timer.params);\n        });\n        var dur = this.durationOptions.find(function (d) {\n          return d.value === timer.duration / 60;\n        });\n        this.timerForm = {\n          id: timer.id,\n          name: timer.name,\n          hour: timer.hour,\n          minute: timer.minute,\n          type: typeIndex >= 0 ? typeIndex : 0,\n          cmd: timer.cmd,\n          params: timer.params,\n          duration: timer.duration / 60,\n          // 转为分钟\n          durationLabel: dur ? dur.label : '不停止'\n        };\n      } else {\n        this.editingTimer = null;\n        this.timerForm = {\n          id: '',\n          name: '',\n          hour: 8,\n          minute: 0,\n          type: 0,\n          cmd: 'trigger_servo',\n          params: {},\n          duration: 0,\n          durationLabel: '不停止'\n        };\n      }\n      this.timerDialogVisible = true;\n    },\n    closeTimerDialog: function closeTimerDialog() {\n      this.timerDialogVisible = false;\n      this.editingTimer = null;\n    },\n    onTimeChange: function onTimeChange(e) {\n      var vals = e.detail.value;\n      this.timerForm.hour = parseInt(vals[0]);\n      this.timerForm.minute = parseInt(vals[1]);\n    },\n    onTaskTypeChange: function onTaskTypeChange(e) {\n      var idx = e.detail.value;\n      this.timerForm.type = idx;\n      var type = this.taskTypes[idx];\n      this.timerForm.cmd = type.cmd;\n      this.timerForm.params = _objectSpread({}, type.params);\n    },\n    onDurationChange: function onDurationChange(e) {\n      var idx = e.detail.value;\n      var opt = this.durationOptions[idx];\n      this.timerForm.duration = opt.value;\n      this.timerForm.durationLabel = opt.label;\n    },\n    confirmTimer: function confirmTimer() {\n      var _this15 = this;\n      if (!this.timerForm.name.trim()) {\n        uni.showToast({\n          title: '请输入任务名称',\n          icon: 'none'\n        });\n        return;\n      }\n      var timerData = {\n        id: this.timerForm.id || 'timer_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),\n        name: this.timerForm.name.trim(),\n        hour: this.timerForm.hour,\n        minute: this.timerForm.minute,\n        type: this.timerForm.type,\n        cmd: this.timerForm.cmd,\n        params: this.timerForm.params,\n        duration: this.timerForm.duration * 60,\n        // 转为秒\n        enabled: true\n      };\n      if (this.editingTimer) {\n        var idx = this.timers.findIndex(function (t) {\n          return t.id === _this15.editingTimer.id;\n        });\n        if (idx >= 0) {\n          this.timers[idx] = timerData;\n        }\n      } else {\n        this.timers.push(timerData);\n      }\n      this.closeTimerDialog();\n      this.saveAllTimers();\n    },\n    handleDeleteTimer: function handleDeleteTimer(timer) {\n      var _this16 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {\n        return _regenerator.default.wrap(function _callee13$(_context13) {\n          while (1) {\n            switch (_context13.prev = _context13.next) {\n              case 0:\n                uni.showModal({\n                  title: '确认删除',\n                  content: '确定要删除定时任务\"' + timer.name + '\"吗？',\n                  success: function () {\n                    var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(res) {\n                      var result;\n                      return _regenerator.default.wrap(function _callee12$(_context12) {\n                        while (1) {\n                          switch (_context12.prev = _context12.next) {\n                            case 0:\n                              if (!res.confirm) {\n                                _context12.next = 11;\n                                break;\n                              }\n                              _context12.prev = 1;\n                              _context12.next = 4;\n                              return (0, _api.deleteTimer)(_this16.deviceKey, timer.id);\n                            case 4:\n                              result = _context12.sent;\n                              if (result.success) {\n                                _this16.timers = _this16.timers.filter(function (t) {\n                                  return t.id !== timer.id;\n                                });\n                                uni.showToast({\n                                  title: '删除成功',\n                                  icon: 'success'\n                                });\n                              } else {\n                                uni.showToast({\n                                  title: result.message || '删除失败',\n                                  icon: 'none'\n                                });\n                              }\n                              _context12.next = 11;\n                              break;\n                            case 8:\n                              _context12.prev = 8;\n                              _context12.t0 = _context12[\"catch\"](1);\n                              uni.showToast({\n                                title: '删除失败',\n                                icon: 'none'\n                              });\n                            case 11:\n                            case \"end\":\n                              return _context12.stop();\n                          }\n                        }\n                      }, _callee12, null, [[1, 8]]);\n                    }));\n                    function success(_x) {\n                      return _success.apply(this, arguments);\n                    }\n                    return success;\n                  }()\n                });\n              case 1:\n              case \"end\":\n                return _context13.stop();\n            }\n          }\n        }, _callee13);\n      }))();\n    },\n    toggleTimer: function toggleTimer(timer) {\n      timer.enabled = !timer.enabled;\n      this.saveAllTimers();\n    },\n    saveAllTimers: function saveAllTimers() {\n      var _this17 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {\n        return _regenerator.default.wrap(function _callee14$(_context14) {\n          while (1) {\n            switch (_context14.prev = _context14.next) {\n              case 0:\n                _context14.prev = 0;\n                _context14.next = 3;\n                return (0, _api.saveTimers)(_this17.deviceKey, _this17.timers);\n              case 3:\n                _context14.next = 8;\n                break;\n              case 5:\n                _context14.prev = 5;\n                _context14.t0 = _context14[\"catch\"](0);\n                uni.showToast({\n                  title: '保存失败',\n                  icon: 'none'\n                });\n              case 8:\n              case \"end\":\n                return _context14.stop();\n            }\n          }\n        }, _callee14, null, [[0, 5]]);\n      }))();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY29udHJvbC9pbmRleC52dWUiXSwibmFtZXMiOlsiZGF0YSIsImRldmljZUtleSIsInN0YXR1cyIsIm9ubGluZSIsInB3bTFMZXZlbCIsInB3bTJMZXZlbCIsInB3bTNMZXZlbCIsImFpclB1bXBMZXZlbCIsImZhbkxldmVsIiwidXZMaWdodE9uIiwicmVsYXkxU3RhdGUiLCJyZWxheTJTdGF0ZSIsInNlcnZvTW92aW5nIiwiYWRjV1FWb2x0YWdlIiwiYWRjVGVtcFZvbHRhZ2UiLCJzeXN0ZW1Qb3dlcmVkIiwicHVtcExldmVscyIsImxhc3RVcGRhdGVUaW1lIiwidGltZXIiLCJyZW5hbWVWaXNpYmxlIiwicmVuYW1lVmFsdWUiLCJyZW5hbWVUYXJnZXQiLCJyZW5hbWVEZWZhdWx0Iiwid3MiLCJ3c0Nvbm5lY3RlZCIsIndzUmVjb25uZWN0VGltZXIiLCJzZXJ2b1RpbWVyIiwic2Vydm9TdGFydFRpbWUiLCJsYXN0Q2xpY2tUaW1lIiwidGltZXJzIiwidGltZXJEaWFsb2dWaXNpYmxlIiwiZWRpdGluZ1RpbWVyIiwidGltZXJGb3JtIiwiaWQiLCJuYW1lIiwiaG91ciIsIm1pbnV0ZSIsInR5cGUiLCJjbWQiLCJwYXJhbXMiLCJkdXJhdGlvbiIsImR1cmF0aW9uTGFiZWwiLCJob3VycyIsImxlbmd0aCIsIm1pbnV0ZXMiLCJ0YXNrVHlwZXMiLCJsYWJlbCIsInB1bXAiLCJsZXZlbCIsImR1cmF0aW9uT3B0aW9ucyIsInZhbHVlIiwiY29tcHV0ZWQiLCJ0YXNrVHlwZUxhYmVscyIsImR1cmF0aW9uTGFiZWxzIiwib25Mb2FkIiwidW5pIiwidGl0bGUiLCJpY29uIiwic2V0VGltZW91dCIsIm9uVW5sb2FkIiwiY2xlYXJJbnRlcnZhbCIsIm1ldGhvZHMiLCJnZXRDdHJsTmFtZSIsImNoZWNrUmF0ZUxpbWl0Iiwic3RhcnRSZW5hbWUiLCJjYW5jZWxSZW5hbWUiLCJjb25maXJtUmVuYW1lIiwiZ2V0V1NCYXNlVVJMIiwiY29ubmVjdFdTIiwidXJsIiwic3VjY2VzcyIsInBob25lIiwiZGV2aWNlX2tleSIsImRpc2Nvbm5lY3RXUyIsImNsZWFyVGltZW91dCIsInVwZGF0ZVN0YXR1c0Zyb21XUyIsInRkc1ZhbHVlIiwid2F0ZXJUZW1wZXJhdHVyZSIsImxvYWRTdGF0dXMiLCJyZXMiLCJzIiwibW92aW5nIiwicmVmcmVzaFN0YXR1cyIsInNldFB1bXAiLCJzZXRMaWdodCIsInNldEFpclB1bXAiLCJzZXRGYW4iLCJzZXRVViIsIm9uIiwic2V0UmVsYXkyIiwidHJpZ2dlclNlcnZvIiwiY2hlY2tTZXJ2b1RpbWVvdXQiLCJ0b2dnbGVQb3dlciIsImlzUG93ZXJlZCIsImNvbmZpcm1UZXh0IiwiY29udGVudCIsImV4ZWN1dGVQb3dlckNtZCIsInJlc3VsdCIsImdldFRhc2tUeXBlTGFiZWwiLCJsb2FkVGltZXJzIiwib3BlblRpbWVyRGlhbG9nIiwiY2xvc2VUaW1lckRpYWxvZyIsIm9uVGltZUNoYW5nZSIsIm9uVGFza1R5cGVDaGFuZ2UiLCJvbkR1cmF0aW9uQ2hhbmdlIiwiY29uZmlybVRpbWVyIiwiZW5hYmxlZCIsImhhbmRsZURlbGV0ZVRpbWVyIiwidG9nZ2xlVGltZXIiLCJzYXZlQWxsVGltZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBaVNBO0FBQ0E7QUFBQTtBQUFBO0FBQUEsZUFFQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0FDO1FBQUFDO01BQUE7UUFBQTtNQUFBO01BQ0FDO1FBQUFEO01BQUE7UUFBQTtNQUFBO01BQ0FFLFlBQ0E7UUFBQUM7UUFBQVI7UUFBQUM7TUFBQSxHQUNBO1FBQUFPO1FBQUFSO1FBQUFDO1VBQUFRO1VBQUFDO1FBQUE7TUFBQSxHQUNBO1FBQUFGO1FBQUFSO1FBQUFDO1VBQUFRO1VBQUFDO1FBQUE7TUFBQSxHQUNBO1FBQUFGO1FBQUFSO1FBQUFDO1VBQUFRO1VBQUFDO1FBQUE7TUFBQSxHQUNBO1FBQUFGO1FBQUFSO1FBQUFDO1VBQUFTO1FBQUE7TUFBQSxHQUNBO1FBQUFGO1FBQUFSO1FBQUFDO1VBQUFTO1FBQUE7TUFBQSxHQUNBO1FBQUFGO1FBQUFSO1FBQUFDO1VBQUFTO1FBQUE7TUFBQSxHQUNBO1FBQUFGO1FBQUFSO1FBQUFDO1VBQUFTO1FBQUE7TUFBQSxHQUNBO1FBQUFGO1FBQUFSO1FBQUFDO1VBQUFTO1FBQUE7TUFBQSxHQUNBO1FBQUFGO1FBQUFSO1FBQUFDO1VBQUFTO1FBQUE7TUFBQSxHQUNBO1FBQUFGO1FBQUFSO1FBQUFDO1VBQUFTO1FBQUE7TUFBQSxHQUNBO1FBQUFGO1FBQUFSO1FBQUFDO1VBQUFTO1FBQUE7TUFBQSxHQUNBO1FBQUFGO1FBQUFSO1FBQUFDO1VBQUFTO1FBQUE7TUFBQSxFQUNBO01BQ0FDLGtCQUNBO1FBQUFIO1FBQUFJO01BQUEsR0FDQTtRQUFBSjtRQUFBSTtNQUFBLEdBQ0E7UUFBQUo7UUFBQUk7TUFBQSxHQUNBO1FBQUFKO1FBQUFJO01BQUEsR0FDQTtRQUFBSjtRQUFBSTtNQUFBLEdBQ0E7UUFBQUo7UUFBQUk7TUFBQTtJQUVBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtRQUFBO01BQUE7SUFDQTtJQUNBQztNQUNBO1FBQUE7TUFBQTtJQUNBO0VBQ0E7RUFDQUM7SUFBQTtJQUNBO0lBQ0E7TUFDQUM7UUFBQUM7UUFBQUM7TUFBQTtNQUNBO0lBQ0E7SUFFQTtJQUNBOztJQUVBO0lBQ0E7O0lBRUE7SUFDQTtNQUNBQztRQUFBO01BQUE7SUFDQTs7SUFFQTtJQUNBO01BQ0E7TUFDQTtJQUNBOztJQUVBO0lBQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtNQUNBQztJQUNBO0lBQ0E7TUFDQUE7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7UUFDQVI7VUFBQUM7VUFBQUM7UUFBQTtRQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQU87TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO01BQ0E7UUFDQVg7UUFDQUE7VUFBQUM7VUFBQUM7UUFBQTtNQUNBO1FBQ0FGO1FBQ0FBO1VBQUFDO1VBQUFDO1FBQUE7TUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBVTtNQUNBO01BQ0E7TUFDQTtRQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQUE7TUFDQTtNQUNBO01BQ0E7TUFFQTtRQUNBO1FBQ0E7VUFDQUM7VUFDQUM7UUFDQTtRQUVBO1VBQ0E7VUFDQTtVQUNBZjtZQUNBdkQ7Y0FBQXFDO2NBQUFrQztZQUFBO1VBQ0E7VUFDQTtVQUNBaEI7WUFDQXZEO2NBQUFxQztjQUFBbUM7WUFBQTtVQUNBO1FBQ0E7UUFFQTtVQUNBO1lBQ0E7WUFDQTtjQUNBO1lBQ0E7VUFDQTtRQUNBO1FBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtZQUNBO2NBQ0E7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtRQUVBO1VBQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7UUFDQUM7UUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0F4RTtRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBOEQ7UUFDQUM7UUFDQTlEO01BQ0E7TUFDQTtJQUNBO0lBRUErRDtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBLE9BRUE7Y0FBQTtnQkFBQUM7Z0JBQ0E7a0JBQ0FDO2tCQUNBQztrQkFDQTtvQkFDQTtrQkFDQTtrQkFDQTtvQkFDQTtrQkFDQTtrQkFDQTtvQkFDQTlFO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0E4RDtvQkFDQUM7b0JBQ0E5RDtrQkFDQTtrQkFDQTtnQkFDQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRUE7SUFFQW1FO01BQUE7TUFDQTNCO1FBQUFDO01BQUE7TUFDQTtRQUNBRTtVQUNBO1lBQ0FIO1VBQ0E7UUFDQTtNQUNBO1FBQ0E7VUFDQUE7UUFDQTtNQUNBO0lBQ0E7SUFFQTRCO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFDQTVCO2tCQUFBQztrQkFBQUM7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQSxJQUdBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBRUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FHQTtrQkFBQVY7a0JBQUFDO2dCQUFBO2NBQUE7Z0JBQUErQjtnQkFDQTtrQkFDQXJCO29CQUFBO2tCQUFBO2tCQUNBSDtvQkFBQUM7b0JBQUFDO2tCQUFBO2dCQUNBO2tCQUNBRjtvQkFBQUM7b0JBQUFDO2tCQUFBO2dCQUNBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBRUFGO2tCQUFBQztrQkFBQUM7Z0JBQUE7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFFQTtJQUVBMkI7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxJQUNBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUNBN0I7a0JBQUFDO2tCQUFBQztnQkFBQTtnQkFBQTtjQUFBO2dCQUFBLElBR0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFFQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUdBO2tCQUFBVDtnQkFBQTtjQUFBO2dCQUFBK0I7Z0JBQ0E7a0JBQ0FyQjtvQkFBQTtrQkFBQTtrQkFDQUg7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFDQTtrQkFDQUY7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFDQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVBRjtrQkFBQUM7a0JBQUFDO2dCQUFBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRUE7SUFFQTRCO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTlCO2tCQUFBQztrQkFBQUM7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQSxJQUNBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFQTtrQkFBQVQ7Z0JBQUE7Y0FBQTtnQkFBQStCO2dCQUNBO2tCQUFBckI7b0JBQUE7a0JBQUE7a0JBQUFIO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQUEsT0FDQTtrQkFBQUY7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUNBRjtrQkFBQUM7a0JBQUFDO2dCQUFBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFFQTZCO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQS9CO2tCQUFBQztrQkFBQUM7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQSxJQUNBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFQTtrQkFBQVQ7Z0JBQUE7Y0FBQTtnQkFBQStCO2dCQUNBO2tCQUFBckI7b0JBQUE7a0JBQUE7a0JBQUFIO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQUEsT0FDQTtrQkFBQUY7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUNBRjtrQkFBQUM7a0JBQUFDO2dCQUFBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFFQThCO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQWhDO2tCQUFBQztrQkFBQUM7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQSxJQUNBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFQTtrQkFBQStCO2dCQUFBO2NBQUE7Z0JBQUFUO2dCQUNBO2tCQUFBckI7b0JBQUE7a0JBQUE7Z0JBQUEsT0FDQTtrQkFBQUg7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUNBRjtrQkFBQUM7a0JBQUFDO2dCQUFBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFFQWdDO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQWxDO2tCQUFBQztrQkFBQUM7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQSxJQUNBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFQTtrQkFBQStCO2dCQUFBO2NBQUE7Z0JBQUFUO2dCQUNBO2tCQUFBckI7b0JBQUE7a0JBQUE7Z0JBQUEsT0FDQTtrQkFBQUg7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUNBRjtrQkFBQUM7a0JBQUFDO2dCQUFBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFFQWlDO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsTUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFDQW5DO2tCQUFBQztrQkFBQUM7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQSxJQUdBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FHQTtjQUFBO2dCQUFBc0I7Z0JBQ0E7a0JBQ0E7a0JBQ0E7a0JBQ0F4QjtvQkFBQUM7b0JBQUFDO2tCQUFBO2dCQUNBO2tCQUNBRjtvQkFBQUM7b0JBQUFDO2tCQUFBO2dCQUNBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBRUFGO2tCQUFBQztrQkFBQUM7Z0JBQUE7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFFQTtJQUVBa0M7TUFDQTtNQUNBO1FBQ0E7UUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxJQUNBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUNBckM7a0JBQUFDO2tCQUFBQztnQkFBQTtnQkFBQTtjQUFBO2dCQUlBb0M7Z0JBQ0F2RDtnQkFDQXdEO2dCQUVBdkM7a0JBQ0FDO2tCQUNBdUM7a0JBQ0F6QjtvQkFDQTtvQkFDQTtrQkFDQTtnQkFDQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBRUEwQjtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUVBO2NBQUE7Z0JBQUFDO2dCQUNBO2tCQUNBO2tCQUNBMUM7b0JBQUFDO29CQUFBQztrQkFBQTtrQkFDQUM7b0JBQUE7a0JBQUE7Z0JBQ0E7a0JBQ0FIO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFQUY7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0lBRUE7SUFDQXlDO01BQ0E7UUFBQTtNQUFBO01BQ0E7SUFDQTtJQUVBQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBLE9BRUE7Y0FBQTtnQkFBQXBCO2dCQUNBO2tCQUNBO2dCQUNBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBRUE7Z0JBQ0E7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFFQTtJQUVBcUI7TUFDQTtRQUNBO1FBQ0E7VUFBQTtRQUFBO1FBQ0E7VUFBQTtRQUFBO1FBQ0E7VUFDQW5FO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQUE7VUFDQUM7UUFDQTtNQUNBO1FBQ0E7UUFDQTtVQUNBUjtVQUNBQztVQUNBQztVQUNBQztVQUNBQztVQUNBQztVQUNBQztVQUNBQztVQUNBQztRQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUE0RDtNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUFBO01BQ0E7UUFDQWxEO1VBQUFDO1VBQUFDO1FBQUE7UUFDQTtNQUNBO01BRUE7UUFDQXhCO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQUE7UUFDQWtFO01BQ0E7TUFFQTtRQUNBO1VBQUE7UUFBQTtRQUNBO1VBQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUVBO01BQ0E7SUFDQTtJQUVBQztNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFDQXBEO2tCQUNBQztrQkFDQXVDO2tCQUNBekI7b0JBQUE7c0JBQUE7c0JBQUE7d0JBQUE7MEJBQUE7NEJBQUE7OEJBQUEsS0FDQVM7Z0NBQUE7Z0NBQUE7OEJBQUE7OEJBQUE7OEJBQUE7OEJBQUEsT0FFQTs0QkFBQTs4QkFBQWtCOzhCQUNBO2dDQUNBO2tDQUFBO2dDQUFBO2dDQUNBMUM7a0NBQUFDO2tDQUFBQztnQ0FBQTs4QkFDQTtnQ0FDQUY7a0NBQUFDO2tDQUFBQztnQ0FBQTs4QkFDQTs4QkFBQTs4QkFBQTs0QkFBQTs4QkFBQTs4QkFBQTs4QkFFQUY7Z0NBQUFDO2dDQUFBQzs4QkFBQTs0QkFBQTs0QkFBQTs4QkFBQTswQkFBQTt3QkFBQTtzQkFBQTtvQkFBQSxDQUdBO29CQUFBO3NCQUFBO29CQUFBO29CQUFBO2tCQUFBO2dCQUNBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFFQW1EO01BQ0ExRjtNQUNBO0lBQ0E7SUFFQTJGO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBLE9BRUE7Y0FBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVBdEQ7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dmlldyBjbGFzcz1cImNvbnRyb2wtcGFnZVwiPlxuICAgIDx2aWV3IGNsYXNzPVwic3RhdHVzLWhlYWRlclwiIDpjbGFzcz1cInsgb2ZmbGluZTogIXN0YXR1cy5vbmxpbmUgfVwiPlxuICAgICAgPHZpZXcgY2xhc3M9XCJzdGF0dXMtaW5kaWNhdG9yXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiaW5kaWNhdG9yLWRvdFwiPjwvdmlldz5cbiAgICAgICAgPHRleHQ+e3sgc3RhdHVzLm9ubGluZSA/ICflnKjnur8nIDogJ+emu+e6vycgfX08L3RleHQ+XG4gICAgICA8L3ZpZXc+XG4gICAgICA8dGV4dCBjbGFzcz1cImRldmljZS1rZXlcIj57eyBkZXZpY2VLZXkgfX08L3RleHQ+XG4gICAgPC92aWV3PlxuICAgIFxuICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1zZWN0aW9uXCI+XG4gICAgICA8dmlldyBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj7msLTms7XmjqfliLY8L3ZpZXc+XG4gICAgICBcbiAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1jYXJkXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1oZWFkZXJcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtbmFtZVwiIEBjbGljaz1cInN0YXJ0UmVuYW1lKCdwdW1wMScsICfmsLTms7UxJylcIj57eyBnZXRDdHJsTmFtZSgncHVtcDEnLCAn5rC05rO1MScpIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY29udHJvbC12YWx1ZVwiPnt7IHB1bXBMZXZlbHNbc3RhdHVzLnB3bTFMZXZlbF0gfX08L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJwdW1wLWNvbnRyb2xzXCI+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIHYtZm9yPVwiKGxldmVsLCBpbmRleCkgaW4gcHVtcExldmVsc1wiIFxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgIGNsYXNzPVwibGV2ZWwtYnRuXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBzdGF0dXMucHdtMUxldmVsID09PSBpbmRleCB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cInNldFB1bXAoMSwgaW5kZXgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBsZXZlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG4gICAgICBcbiAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1jYXJkXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1oZWFkZXJcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtbmFtZVwiIEBjbGljaz1cInN0YXJ0UmVuYW1lKCdwdW1wMicsICfmsLTms7UyJylcIj57eyBnZXRDdHJsTmFtZSgncHVtcDInLCAn5rC05rO1MicpIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY29udHJvbC12YWx1ZVwiPnt7IHB1bXBMZXZlbHNbc3RhdHVzLnB3bTJMZXZlbF0gfX08L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJwdW1wLWNvbnRyb2xzXCI+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIHYtZm9yPVwiKGxldmVsLCBpbmRleCkgaW4gcHVtcExldmVsc1wiIFxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgIGNsYXNzPVwibGV2ZWwtYnRuXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBzdGF0dXMucHdtMkxldmVsID09PSBpbmRleCB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cInNldFB1bXAoMiwgaW5kZXgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBsZXZlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG4gICAgPC92aWV3PlxuICAgIFxuICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1zZWN0aW9uXCI+XG4gICAgICA8dmlldyBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj7nga/lhYnmjqfliLY8L3ZpZXc+XG4gICAgICBcbiAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1jYXJkXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1oZWFkZXJcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtbmFtZVwiIEBjbGljaz1cInN0YXJ0UmVuYW1lKCdsaWdodCcsICfnga/mnaEnKVwiPnt7IGdldEN0cmxOYW1lKCdsaWdodCcsICfnga/mnaEnKSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtdmFsdWVcIj57eyBwdW1wTGV2ZWxzW3N0YXR1cy5wd20zTGV2ZWxdIH19PC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwicHVtcC1jb250cm9sc1wiPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB2LWZvcj1cIihsZXZlbCwgaW5kZXgpIGluIHB1bXBMZXZlbHNcIiBcbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICBjbGFzcz1cImxldmVsLWJ0blwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogc3RhdHVzLnB3bTNMZXZlbCA9PT0gaW5kZXggfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJzZXRMaWdodChpbmRleClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGxldmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG4gICAgXG4gICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLXNlY3Rpb25cIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPuawlOaztSAmYW1wOyDpo47miYc8L3ZpZXc+XG4gICAgICBcbiAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1jYXJkXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1oZWFkZXJcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtbmFtZVwiIEBjbGljaz1cInN0YXJ0UmVuYW1lKCdhaXJQdW1wJywgJ+awlOaztScpXCI+e3sgZ2V0Q3RybE5hbWUoJ2FpclB1bXAnLCAn5rCU5rO1JykgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJjb250cm9sLXZhbHVlXCI+e3sgcHVtcExldmVsc1tzdGF0dXMuYWlyUHVtcExldmVsIHx8IDBdIH19PC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwicHVtcC1jb250cm9sc1wiPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB2LWZvcj1cIihsZXZlbCwgaW5kZXgpIGluIHB1bXBMZXZlbHNcIiBcbiAgICAgICAgICAgIDprZXk9XCInYWlyJytpbmRleFwiXG4gICAgICAgICAgICBjbGFzcz1cImxldmVsLWJ0blwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogKHN0YXR1cy5haXJQdW1wTGV2ZWwgfHwgMCkgPT09IGluZGV4IH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwic2V0QWlyUHVtcChpbmRleClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGxldmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICAgIFxuICAgICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLWNhcmRcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLWhlYWRlclwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY29udHJvbC1uYW1lXCIgQGNsaWNrPVwic3RhcnRSZW5hbWUoJ2ZhbicsICfpo47miYcnKVwiPnt7IGdldEN0cmxOYW1lKCdmYW4nLCAn6aOO5omHJykgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJjb250cm9sLXZhbHVlXCI+e3sgcHVtcExldmVsc1tzdGF0dXMuZmFuTGV2ZWwgfHwgMF0gfX08L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJwdW1wLWNvbnRyb2xzXCI+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIHYtZm9yPVwiKGxldmVsLCBpbmRleCkgaW4gcHVtcExldmVsc1wiIFxuICAgICAgICAgICAgOmtleT1cIidmYW4nK2luZGV4XCJcbiAgICAgICAgICAgIGNsYXNzPVwibGV2ZWwtYnRuXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiAoc3RhdHVzLmZhbkxldmVsIHx8IDApID09PSBpbmRleCB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cInNldEZhbihpbmRleClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGxldmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG4gICAgXG4gICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLXNlY3Rpb25cIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPuW8gOWFs+aOp+WItjwvdmlldz5cbiAgICAgIFxuICAgICAgPHZpZXcgY2xhc3M9XCJzd2l0Y2gtY2FyZFwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cInN3aXRjaC1sYWJlbFwiIEBjbGljaz1cInN0YXJ0UmVuYW1lKCd1dicsICdVVueBrycpXCI+e3sgZ2V0Q3RybE5hbWUoJ3V2JywgJ1VW54GvJykgfX08L3RleHQ+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY3VzdG9tLXN3aXRjaFwiIDpjbGFzcz1cInN0YXR1cy51dkxpZ2h0T24gPyAnb24nIDogJ29mZidcIiBAY2xpY2s9XCJzZXRVVighc3RhdHVzLnV2TGlnaHRPbilcIj5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cImN1c3RvbS1zd2l0Y2gta25vYlwiPjwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgICAgXG4gICAgICA8dmlldyBjbGFzcz1cInN3aXRjaC1jYXJkXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwic3dpdGNoLWxhYmVsXCIgQGNsaWNrPVwic3RhcnRSZW5hbWUoJ3JlbGF5MicsICfnu6fnlLXlmagyJylcIj57eyBnZXRDdHJsTmFtZSgncmVsYXkyJywgJ+e7p+eUteWZqDInKSB9fTwvdGV4dD5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJjdXN0b20tc3dpdGNoXCIgOmNsYXNzPVwic3RhdHVzLnJlbGF5MlN0YXRlID8gJ29uJyA6ICdvZmYnXCIgQGNsaWNrPVwic2V0UmVsYXkyKCFzdGF0dXMucmVsYXkyU3RhdGUpXCI+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJjdXN0b20tc3dpdGNoLWtub2JcIj48L3ZpZXc+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG4gICAgXG4gICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLXNlY3Rpb25cIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPuiuvuWkh+aOp+WItjwvdmlldz5cbiAgICAgIFxuICAgICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLWNhcmRcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLWhlYWRlclwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY29udHJvbC1uYW1lXCIgQGNsaWNrPVwic3RhcnRSZW5hbWUoJ3NlcnZvJywgJ+iIteacuicpXCI+e3sgZ2V0Q3RybE5hbWUoJ3NlcnZvJywgJ+iIteacuicpIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY29udHJvbC12YWx1ZVwiPnt7IHN0YXR1cy5zZXJ2b01vdmluZyA/ICfov5DooYzkuK0nIDogJ+epuumXsicgfX08L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICBjbGFzcz1cImFjdGlvbi1idG5cIlxuICAgICAgICAgIDpjbGFzcz1cInsgYnVzeTogc3RhdHVzLnNlcnZvTW92aW5nIH1cIlxuICAgICAgICAgIEBjbGljaz1cInRyaWdnZXJTZXJ2b1wiXG4gICAgICAgICAgOmRpc2FibGVkPVwic3RhdHVzLnNlcnZvTW92aW5nXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IHN0YXR1cy5zZXJ2b01vdmluZyA/ICfov5DooYzkuK0uLi4nIDogJ+WQr+WKqOiIteacuicgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3ZpZXc+XG4gICAgICBcbiAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1jYXJkXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1oZWFkZXJcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtbmFtZVwiIEBjbGljaz1cInN0YXJ0UmVuYW1lKCdwb3dlcicsICfns7vnu5/nlLXmupAnKVwiPnt7IGdldEN0cmxOYW1lKCdwb3dlcicsICfns7vnu5/nlLXmupAnKSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtdmFsdWVcIj57eyBzdGF0dXMuc3lzdGVtUG93ZXJlZCA/ICflvIDmnLonIDogJ+WFs+acuicgfX08L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICBjbGFzcz1cInBvd2VyLWJ0blwiXG4gICAgICAgICAgOmNsYXNzPVwieyBvbjogc3RhdHVzLnN5c3RlbVBvd2VyZWQgfVwiXG4gICAgICAgICAgQGNsaWNrPVwidG9nZ2xlUG93ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgc3RhdHVzLnN5c3RlbVBvd2VyZWQgPyAn5YWz5py6JyA6ICflvIDmnLonIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cbiAgICBcbiAgICA8dmlldyBjbGFzcz1cInNlbnNvci1zZWN0aW9uXCI+XG4gICAgICA8dmlldyBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj7kvKDmhJ/lmajmlbDmja48L3ZpZXc+XG4gICAgICBcbiAgICAgIDx2aWV3IGNsYXNzPVwic2Vuc29yLWdyaWRcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJzZW5zb3ItaXRlbVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2Vuc29yLWljb25cIj7wn4yh77iPPC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2Vuc29yLWxhYmVsXCI+5rC05ripPC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2Vuc29yLXZhbHVlXCI+e3sgc3RhdHVzLndhdGVyVGVtcGVyYXR1cmUudG9GaXhlZCgxKSB9fcKwQzwvdGV4dD5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8dmlldyBjbGFzcz1cInNlbnNvci1pdGVtXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzZW5zb3ItaWNvblwiPvCfkqc8L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzZW5zb3ItbGFiZWxcIj5URFM8L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzZW5zb3ItdmFsdWVcIj57eyBzdGF0dXMudGRzVmFsdWUgfX1wcG08L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG4gICAgXG4gICAgPHZpZXcgY2xhc3M9XCJib3R0b20tYmFyXCI+XG4gICAgICA8dGV4dCBjbGFzcz1cInJlZnJlc2gtdGltZVwiPuabtOaWsOS6jiB7eyBsYXN0VXBkYXRlVGltZSB9fTwvdGV4dD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJyZWZyZXNoLWJ0blwiIEBjbGljaz1cInJlZnJlc2hTdGF0dXNcIj7ihrsg5Yi35pawPC9idXR0b24+XG4gICAgPC92aWV3PlxuXG4gICAgPCEtLSDlrprml7bku7vliqHljLrln58gLS0+XG4gICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLXNlY3Rpb25cIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPuWumuaXtuS7u+WKoTwvdmlldz5cblxuICAgICAgPHZpZXcgdi1pZj1cInRpbWVycy5sZW5ndGggPT09IDBcIiBjbGFzcz1cImVtcHR5LXRpcFwiPlxuICAgICAgICA8dGV4dD7mmoLml6Dlrprml7bku7vliqHvvIzngrnlh7vkuIvmlrnmjInpkq7mt7vliqA8L3RleHQ+XG4gICAgICA8L3ZpZXc+XG5cbiAgICAgIDx2aWV3IHYtZm9yPVwiKHRpbWVyLCBpbmRleCkgaW4gdGltZXJzXCIgOmtleT1cInRpbWVyLmlkXCIgY2xhc3M9XCJ0aW1lci1jYXJkXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwidGltZXItY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJ0aW1lci1jYXJkLXRvcFwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0aW1lci1uYW1lXCI+e3sgdGltZXIubmFtZSB9fTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGltZXItdGltZVwiPnt7ICgnMCcgKyB0aW1lci5ob3VyKS5zbGljZSgtMikgfX06e3sgKCcwJyArIHRpbWVyLm1pbnV0ZSkuc2xpY2UoLTIpIH19PC90ZXh0PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInRpbWVyLWRlc2NcIj57eyBnZXRUYXNrVHlwZUxhYmVsKHRpbWVyKSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCB2LWlmPVwidGltZXIuZHVyYXRpb24gPiAwICYmIHRpbWVyLmNtZCAhPT0gJ3RyaWdnZXJfc2Vydm8nXCIgY2xhc3M9XCJ0aW1lci1kdXJhdGlvblwiPuaMgee7rSB7eyB0aW1lci5kdXJhdGlvbiAvIDYwIH19IOWIhumSn+WQjuWBnOatojwvdGV4dD5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8dmlldyBjbGFzcz1cInRpbWVyLWNhcmQtcmlnaHRcIj5cbiAgICAgICAgICA8c3dpdGNoIDpjaGVja2VkPVwidGltZXIuZW5hYmxlZFwiIEBjaGFuZ2U9XCJ0b2dnbGVUaW1lcih0aW1lcilcIiBjb2xvcj1cIiMxYTczZThcIiBzdHlsZT1cInRyYW5zZm9ybTogc2NhbGUoMC44KTtcIiAvPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwidGltZXItYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0aW1lci1lZGl0XCIgQGNsaWNrPVwib3BlblRpbWVyRGlhbG9nKHRpbWVyKVwiPue8lui+kTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGltZXItZGVsZXRlXCIgQGNsaWNrPVwiaGFuZGxlRGVsZXRlVGltZXIodGltZXIpXCI+5Yig6ZmkPC90ZXh0PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRpbWVyLWJ0blwiIEBjbGljaz1cIm9wZW5UaW1lckRpYWxvZyhudWxsKVwiPisg5re75Yqg5Lu75YqhPC9idXR0b24+XG4gICAgPC92aWV3PlxuXG4gICAgPCEtLSDlrprml7bku7vliqHlvLnnqpcgLS0+XG4gICAgPHZpZXcgdi1pZj1cInRpbWVyRGlhbG9nVmlzaWJsZVwiIGNsYXNzPVwiZGlhbG9nLW92ZXJsYXlcIiBAY2xpY2s9XCJjbG9zZVRpbWVyRGlhbG9nXCI+XG4gICAgICA8dmlldyBjbGFzcz1cImRpYWxvZy1ib3ggdGltZXItZGlhbG9nXCIgQGNsaWNrLnN0b3A+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+e3sgZWRpdGluZ1RpbWVyID8gJ+e8lui+keS7u+WKoScgOiAn5re75Yqg5Lu75YqhJyB9fTwvdGV4dD5cblxuICAgICAgICA8IS0tIOS7u+WKoeWQjeensCAtLT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0aW1lci1mb3JtLWxhYmVsXCI+5Lu75Yqh5ZCN56ewPC90ZXh0PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzcz1cImRpYWxvZy1pbnB1dFwiXG4gICAgICAgICAgdi1tb2RlbD1cInRpbWVyRm9ybS5uYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIui+k+WFpeS7u+WKoeWQjeensFwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiMjBcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDwhLS0g5pe26Ze06YCJ5oupIC0tPlxuICAgICAgICA8dGV4dCBjbGFzcz1cInRpbWVyLWZvcm0tbGFiZWxcIj7miafooYzml7bpl7Q8L3RleHQ+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwidGltZXItcGlja2VyLXJvd1wiPlxuICAgICAgICAgIDxwaWNrZXIgbW9kZT1cIm11bHRpU2VsZWN0b3JcIiA6cmFuZ2U9XCJbaG91cnMsIG1pbnV0ZXNdXCIgQGNoYW5nZT1cIm9uVGltZUNoYW5nZVwiPlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJ0aW1lci1waWNrZXJcIj5cbiAgICAgICAgICAgICAge3sgKCcwJyArIHRpbWVyRm9ybS5ob3VyKS5zbGljZSgtMikgfX0gOiB7eyAoJzAnICsgdGltZXJGb3JtLm1pbnV0ZSkuc2xpY2UoLTIpIH19XG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgPC9waWNrZXI+XG4gICAgICAgIDwvdmlldz5cblxuICAgICAgICA8IS0tIOS7u+WKoeexu+WeiyAtLT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0aW1lci1mb3JtLWxhYmVsXCI+5Lu75Yqh57G75Z6LPC90ZXh0PlxuICAgICAgICA8dmlldyBjbGFzcz1cInRpbWVyLXBpY2tlci1yb3dcIj5cbiAgICAgICAgICA8cGlja2VyIG1vZGU9XCJzZWxlY3RvclwiIDpyYW5nZT1cInRhc2tUeXBlTGFiZWxzXCIgQGNoYW5nZT1cIm9uVGFza1R5cGVDaGFuZ2VcIj5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidGltZXItcGlja2VyXCI+XG4gICAgICAgICAgICAgIHt7IHRhc2tUeXBlTGFiZWxzW3RpbWVyRm9ybS50eXBlXSB9fVxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDwvcGlja2VyPlxuICAgICAgICA8L3ZpZXc+XG5cbiAgICAgICAgPCEtLSDmjIHnu63ml7bpl7QgLS0+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidGltZXItZm9ybS1sYWJlbFwiPuaMgee7reaXtumXtDwvdGV4dD5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0aW1lci1waWNrZXItcm93XCIgdi1pZj1cInRhc2tUeXBlc1t0aW1lckZvcm0udHlwZV0uY21kID09PSAndHJpZ2dlcl9zZXJ2bydcIj5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cInRpbWVyLXBpY2tlclwiPjx0ZXh0IHN0eWxlPVwiY29sb3I6Izk5OVwiPuaXoDwvdGV4dD48L3ZpZXc+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0aW1lci1waWNrZXItcm93XCIgdi1lbHNlPlxuICAgICAgICAgIDxwaWNrZXIgbW9kZT1cInNlbGVjdG9yXCIgOnJhbmdlPVwiZHVyYXRpb25MYWJlbHNcIiBAY2hhbmdlPVwib25EdXJhdGlvbkNoYW5nZVwiPlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJ0aW1lci1waWNrZXJcIj5cbiAgICAgICAgICAgICAge3sgdGltZXJGb3JtLmR1cmF0aW9uTGFiZWwgfX1cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICA8L3BpY2tlcj5cbiAgICAgICAgPC92aWV3PlxuXG4gICAgICAgIDx2aWV3IGNsYXNzPVwiZGlhbG9nLWJ1dHRvbnNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDQwcnB4O1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2ctYnRuIGRpYWxvZy1jYW5jZWxcIiBAY2xpY2s9XCJjbG9zZVRpbWVyRGlhbG9nXCI+5Y+W5raIPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZy1idG4gZGlhbG9nLWNvbmZpcm1cIiBAY2xpY2s9XCJjb25maXJtVGltZXJcIj7noa7orqQ8L2J1dHRvbj5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cblxuICAgIDwhLS0g6YeN5ZG95ZCN5by556qXIC0tPlxuICAgIDx2aWV3IHYtaWY9XCJyZW5hbWVWaXNpYmxlXCIgY2xhc3M9XCJkaWFsb2ctb3ZlcmxheVwiIEBjbGljaz1cImNhbmNlbFJlbmFtZVwiPlxuICAgICAgPHZpZXcgY2xhc3M9XCJkaWFsb2ctYm94XCIgQGNsaWNrLnN0b3A+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+6YeN5ZG95ZCNPC90ZXh0PlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgY2xhc3M9XCJkaWFsb2ctaW5wdXRcIiBcbiAgICAgICAgICB2LW1vZGVsPVwicmVuYW1lVmFsdWVcIiBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIui+k+WFpeWQjeensFwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiMjBcIlxuICAgICAgICAgIGZvY3VzXG4gICAgICAgIC8+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiZGlhbG9nLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9nLWJ0biBkaWFsb2ctY2FuY2VsXCIgQGNsaWNrPVwiY2FuY2VsUmVuYW1lXCI+5Y+W5raIPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZy1idG4gZGlhbG9nLWNvbmZpcm1cIiBAY2xpY2s9XCJjb25maXJtUmVuYW1lXCI+56Gu6K6kPC9idXR0b24+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG4gIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBnZXREZXZpY2VTdGF0dXMsIHJlcXVlc3REZXZpY2VTdGF0dXMsIHNlbmRDb250cm9sQ29tbWFuZCwgZ2V0VGltZXJzLCBzYXZlVGltZXJzLCBkZWxldGVUaW1lciBhcyBkZWxldGVUaW1lckFwaSB9IGZyb20gJ0AvdXRpbHMvYXBpJ1xuaW1wb3J0IHsgZ2V0UGhvbmVOdW1iZXIgfSBmcm9tICdAL3V0aWxzL3N0b3JhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGV2aWNlS2V5OiAnJyxcbiAgICAgIHN0YXR1czoge1xuICAgICAgICBvbmxpbmU6IGZhbHNlLFxuICAgICAgICBwd20xTGV2ZWw6IDAsXG4gICAgICAgIHB3bTJMZXZlbDogMCxcbiAgICAgICAgcHdtM0xldmVsOiAwLFxuICAgICAgICBhaXJQdW1wTGV2ZWw6IDAsXG4gICAgICAgIGZhbkxldmVsOiAwLFxuICAgICAgICB1dkxpZ2h0T246IGZhbHNlLFxuICAgICAgICByZWxheTFTdGF0ZTogZmFsc2UsXG4gICAgICAgIHJlbGF5MlN0YXRlOiBmYWxzZSxcbiAgICAgICAgc2Vydm9Nb3Zpbmc6IGZhbHNlLFxuICAgICAgICBhZGNXUVZvbHRhZ2U6IDAsXG4gICAgICAgIGFkY1RlbXBWb2x0YWdlOiAwLFxuICAgICAgICBzeXN0ZW1Qb3dlcmVkOiB0cnVlXG4gICAgICB9LFxuICAgICAgcHVtcExldmVsczogWyflhbMnLCAn5LiA5qGjJywgJ+S6jOahoycsICfkuInmoaMnXSxcbiAgICAgIGxhc3RVcGRhdGVUaW1lOiAnJyxcbiAgICAgIHRpbWVyOiBudWxsLFxuICAgICAgcmVuYW1lVmlzaWJsZTogZmFsc2UsXG4gICAgICByZW5hbWVWYWx1ZTogJycsXG4gICAgICByZW5hbWVUYXJnZXQ6ICcnLFxuICAgICAgcmVuYW1lRGVmYXVsdDogJycsXG4gICAgICB3czogbnVsbCxcbiAgICAgIHdzQ29ubmVjdGVkOiBmYWxzZSxcbiAgICAgIHdzUmVjb25uZWN0VGltZXI6IG51bGwsXG4gICAgICBzZXJ2b1RpbWVyOiBudWxsLFxuICAgICAgc2Vydm9TdGFydFRpbWU6IDAsXG4gICAgICBsYXN0Q2xpY2tUaW1lOiAwLFxuICAgICAgLy8g5a6a5pe25Lu75YqhXG4gICAgICB0aW1lcnM6IFtdLFxuICAgICAgdGltZXJEaWFsb2dWaXNpYmxlOiBmYWxzZSxcbiAgICAgIGVkaXRpbmdUaW1lcjogbnVsbCxcbiAgICAgIHRpbWVyRm9ybToge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBob3VyOiA4LFxuICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgIHR5cGU6IDAsXG4gICAgICAgIGNtZDogJ3RyaWdnZXJfc2Vydm8nLFxuICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgZHVyYXRpb25MYWJlbDogJ+S4jeWBnOatoidcbiAgICAgIH0sXG4gICAgICBob3VyczogQXJyYXkuZnJvbSh7IGxlbmd0aDogMjQgfSwgKF8sIGkpID0+ICgnMCcgKyBpKS5zbGljZSgtMikpLFxuICAgICAgbWludXRlczogQXJyYXkuZnJvbSh7IGxlbmd0aDogNjAgfSwgKF8sIGkpID0+ICgnMCcgKyBpKS5zbGljZSgtMikpLFxuICAgICAgdGFza1R5cGVzOiBbXG4gICAgICAgIHsgbGFiZWw6ICflloLpsbzvvIjoiLXmnLrvvIknLCBjbWQ6ICd0cmlnZ2VyX3NlcnZvJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICB7IGxhYmVsOiAn5o2i5rC0Meaho++8iOawtOaztTEgbGV2ZWw9Me+8iScsIGNtZDogJ3NldF9wdW1wJywgcGFyYW1zOiB7IHB1bXA6IDEsIGxldmVsOiAxIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+aNouawtDLmoaPvvIjmsLTms7UxIGxldmVsPTLvvIknLCBjbWQ6ICdzZXRfcHVtcCcsIHBhcmFtczogeyBwdW1wOiAxLCBsZXZlbDogMiB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICfmjaLmsLQz5qGj77yI5rC05rO1MSBsZXZlbD0z77yJJywgY21kOiAnc2V0X3B1bXAnLCBwYXJhbXM6IHsgcHVtcDogMSwgbGV2ZWw6IDMgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn5Yqg5rCUMeaho++8iOawlOaztSBsZXZlbD0x77yJJywgY21kOiAnc2V0X2Fpcl9wdW1wJywgcGFyYW1zOiB7IGxldmVsOiAxIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+WKoOawlDLmoaPvvIjmsJTms7UgbGV2ZWw9Mu+8iScsIGNtZDogJ3NldF9haXJfcHVtcCcsIHBhcmFtczogeyBsZXZlbDogMiB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICfliqDmsJQz5qGj77yI5rCU5rO1IGxldmVsPTPvvIknLCBjbWQ6ICdzZXRfYWlyX3B1bXAnLCBwYXJhbXM6IHsgbGV2ZWw6IDMgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn5byA54GvMeaho++8iOeBr+adoSBsZXZlbD0x77yJJywgY21kOiAnc2V0X2xpZ2h0JywgcGFyYW1zOiB7IGxldmVsOiAxIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+W8gOeBrzLmoaPvvIhsZXZlbD0y77yJJywgY21kOiAnc2V0X2xpZ2h0JywgcGFyYW1zOiB7IGxldmVsOiAyIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+W8gOeBrzPmoaPvvIhsZXZlbD0z77yJJywgY21kOiAnc2V0X2xpZ2h0JywgcGFyYW1zOiB7IGxldmVsOiAzIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+mjjuaJhzHmoaMnLCBjbWQ6ICdzZXRfZmFuJywgcGFyYW1zOiB7IGxldmVsOiAxIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+mjjuaJhzLmoaMnLCBjbWQ6ICdzZXRfZmFuJywgcGFyYW1zOiB7IGxldmVsOiAyIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+mjjuaJhzPmoaMnLCBjbWQ6ICdzZXRfZmFuJywgcGFyYW1zOiB7IGxldmVsOiAzIH0gfVxuICAgICAgXSxcbiAgICAgIGR1cmF0aW9uT3B0aW9uczogW1xuICAgICAgICB7IGxhYmVsOiAn5LiN5YGc5q2iJywgdmFsdWU6IDAgfSxcbiAgICAgICAgeyBsYWJlbDogJzHliIbpkp8nLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IGxhYmVsOiAnNeWIhumSnycsIHZhbHVlOiA1IH0sXG4gICAgICAgIHsgbGFiZWw6ICcxMOWIhumSnycsIHZhbHVlOiAxMCB9LFxuICAgICAgICB7IGxhYmVsOiAnMzDliIbpkp8nLCB2YWx1ZTogMzAgfSxcbiAgICAgICAgeyBsYWJlbDogJzYw5YiG6ZKfJywgdmFsdWU6IDYwIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdGFza1R5cGVMYWJlbHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrVHlwZXMubWFwKHQgPT4gdC5sYWJlbClcbiAgICB9LFxuICAgIGR1cmF0aW9uTGFiZWxzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHVyYXRpb25PcHRpb25zLm1hcChkID0+IGQubGFiZWwpXG4gICAgfVxuICB9LFxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIHRoaXMuZGV2aWNlS2V5ID0gb3B0aW9ucy5kZXZpY2Vfa2V5IHx8ICcnXG4gICAgaWYgKCF0aGlzLmRldmljZUtleSkge1xuICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH5Y+C5pWw6ZSZ6K+vJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgdGhpcy5sb2FkU3RhdHVzKClcbiAgICB0aGlzLmxvYWRUaW1lcnMoKVxuICAgIFxuICAgIC8vIOi/nuaOpSBXZWJTb2NrZXQg5o6l5pS25a6e5pe25o6o6YCBXG4gICAgdGhpcy5jb25uZWN0V1MoKVxuICAgIFxuICAgIC8vIOi/m+WFpemhtemdouiHquWKqOivt+axguacgOaWsOeKtuaAgVxuICAgIHJlcXVlc3REZXZpY2VTdGF0dXModGhpcy5kZXZpY2VLZXkpLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKVxuICAgIH0pXG4gICAgXG4gICAgLy8gMTDnp5Lova7or6LvvIjkuI3nrqFXZWJTb2NrZXTmmK/lkKbov57mjqXvvIznoa7kv53mlbDmja7mm7TmlrDvvIlcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkU3RhdHVzKClcbiAgICAgIHRoaXMuY2hlY2tTZXJ2b1RpbWVvdXQoKVxuICAgIH0sIDEwMDAwKVxuICAgIFxuICAgIC8vIOiIteacuui2heaXtuajgOa1i++8iOavjzLnp5Lmo4Dmn6XkuIDmrKHvvIlcbiAgICB0aGlzLnNlcnZvVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrU2Vydm9UaW1lb3V0KClcbiAgICB9LCAyMDAwKVxuICB9LFxuICBvblVubG9hZCgpIHtcbiAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5zZXJ2b1RpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc2Vydm9UaW1lcilcbiAgICB9XG4gICAgdGhpcy5kaXNjb25uZWN0V1MoKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0Q3RybE5hbWUodGFyZ2V0LCBkZWZhdWx0TmFtZSkge1xuICAgICAgY29uc3Qga2V5ID0gJ2N0cmxfbmFtZV8nICsgdGhpcy5kZXZpY2VLZXkgKyAnXycgKyB0YXJnZXRcbiAgICAgIGNvbnN0IG5hbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoa2V5KVxuICAgICAgcmV0dXJuIG5hbWUgfHwgZGVmYXVsdE5hbWVcbiAgICB9LFxuICAgIFxuICAgIGNoZWNrUmF0ZUxpbWl0KCkge1xuICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgICAgaWYgKG5vdyAtIHRoaXMubGFzdENsaWNrVGltZSA8IDEwMDApIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5pON5L2c6L+H5b+r77yM5oWi54K55ZOfJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5sYXN0Q2xpY2tUaW1lID0gbm93XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gICAgXG4gICAgc3RhcnRSZW5hbWUodGFyZ2V0LCBkZWZhdWx0TmFtZSkge1xuICAgICAgdGhpcy5yZW5hbWVUYXJnZXQgPSB0YXJnZXRcbiAgICAgIHRoaXMucmVuYW1lRGVmYXVsdCA9IGRlZmF1bHROYW1lXG4gICAgICB0aGlzLnJlbmFtZVZhbHVlID0gdGhpcy5nZXRDdHJsTmFtZSh0YXJnZXQsIGRlZmF1bHROYW1lKVxuICAgICAgaWYgKHRoaXMucmVuYW1lVmFsdWUgPT09IGRlZmF1bHROYW1lKSB7XG4gICAgICAgIHRoaXMucmVuYW1lVmFsdWUgPSAnJ1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5hbWVWaXNpYmxlID0gdHJ1ZVxuICAgIH0sXG4gICAgXG4gICAgY2FuY2VsUmVuYW1lKCkge1xuICAgICAgdGhpcy5yZW5hbWVWaXNpYmxlID0gZmFsc2VcbiAgICAgIHRoaXMucmVuYW1lVGFyZ2V0ID0gJydcbiAgICAgIHRoaXMucmVuYW1lVmFsdWUgPSAnJ1xuICAgIH0sXG4gICAgXG4gICAgY29uZmlybVJlbmFtZSgpIHtcbiAgICAgIGlmICghdGhpcy5yZW5hbWVUYXJnZXQpIHJldHVyblxuICAgICAgY29uc3Qga2V5ID0gJ2N0cmxfbmFtZV8nICsgdGhpcy5kZXZpY2VLZXkgKyAnXycgKyB0aGlzLnJlbmFtZVRhcmdldFxuICAgICAgaWYgKHRoaXMucmVuYW1lVmFsdWUgJiYgdGhpcy5yZW5hbWVWYWx1ZS50cmltKCkpIHtcbiAgICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKGtleSwgdGhpcy5yZW5hbWVWYWx1ZS50cmltKCkpXG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+mHjeWRveWQjeaIkOWKnycsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKGtleSlcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5bey5oGi5aSN6buY6K6k5ZCN56ewJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgICB0aGlzLmNhbmNlbFJlbmFtZSgpXG4gICAgfSxcbiAgICBcbiAgICAvLyA9PT09PSBXZWJTb2NrZXQg5a6e5pe25o6o6YCBID09PT09XG4gICAgZ2V0V1NCYXNlVVJMKCkge1xuICAgICAgLy8gSDXlvIDlj5HmqKHlvI/vvJrkvb/nlKjlvZPliY3pobXpnaLlnLDlnYBcbiAgICAgIC8vIOWOn+eUn0FwcOaooeW8j++8muS9v+eUqOmFjee9rueahOacjeWKoeWZqOWcsOWdgFxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gYHdzOi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH1gXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAvLyDpu5jorqTkvb/nlKjmnI3liqHlmajlnLDlnYBcbiAgICAgIHJldHVybiAnd3M6Ly8xMTIuMTI0LjEwNy4xNTk6Nzk2NSdcbiAgICB9LFxuICAgIFxuICAgIGNvbm5lY3RXUygpIHtcbiAgICAgIGlmICh0aGlzLndzKSByZXR1cm5cbiAgICAgIGNvbnN0IHBob25lID0gZ2V0UGhvbmVOdW1iZXIoKVxuICAgICAgaWYgKCFwaG9uZSkgcmV0dXJuXG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLmdldFdTQmFzZVVSTCgpXG4gICAgICAgIHRoaXMud3MgPSB1bmkuY29ubmVjdFNvY2tldCh7XG4gICAgICAgICAgdXJsOiBgJHtiYXNlVXJsfS93cy9jbGllbnRgLFxuICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHt9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB0aGlzLndzLm9uT3BlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy53c0Nvbm5lY3RlZCA9IHRydWVcbiAgICAgICAgICAvLyDlj5HpgIHorqTor4FcbiAgICAgICAgICB1bmkuc2VuZFNvY2tldE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnYXV0aCcsIHBob25lIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyDorqLpmIXlvZPliY3orr7lpIdcbiAgICAgICAgICB1bmkuc2VuZFNvY2tldE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnc3Vic2NyaWJlJywgZGV2aWNlX2tleTogdGhpcy5kZXZpY2VLZXkgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy53cy5vbk1lc3NhZ2UoKHJlcykgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnZGV2aWNlX3N0YXR1cycgJiYgbXNnLmRldmljZV9rZXkgPT09IHRoaXMuZGV2aWNlS2V5KSB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzRnJvbVdTKG1zZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy53cy5vbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLndzQ29ubmVjdGVkID0gZmFsc2VcbiAgICAgICAgICB0aGlzLndzID0gbnVsbFxuICAgICAgICAgIC8vIDPnp5LlkI7oh6rliqjph43ov55cbiAgICAgICAgICBpZiAoIXRoaXMud3NSZWNvbm5lY3RUaW1lcikge1xuICAgICAgICAgICAgdGhpcy53c1JlY29ubmVjdFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMud3NSZWNvbm5lY3RUaW1lciA9IG51bGxcbiAgICAgICAgICAgICAgdGhpcy5jb25uZWN0V1MoKVxuICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB0aGlzLndzLm9uRXJyb3IoKCkgPT4ge1xuICAgICAgICAgIHRoaXMud3NDb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnV2ViU29ja2V06L+e5o6l5aSx6LSl77yM5L2/55SoSFRUUOi9ruivoicsIGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBkaXNjb25uZWN0V1MoKSB7XG4gICAgICBpZiAodGhpcy53c1JlY29ubmVjdFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLndzUmVjb25uZWN0VGltZXIpXG4gICAgICAgIHRoaXMud3NSZWNvbm5lY3RUaW1lciA9IG51bGxcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLndzKSB7XG4gICAgICAgIHRoaXMud3MuY2xvc2UoKVxuICAgICAgICB0aGlzLndzID0gbnVsbFxuICAgICAgICB0aGlzLndzQ29ubmVjdGVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIHVwZGF0ZVN0YXR1c0Zyb21XUyhtc2cpIHtcbiAgICAgIGNvbnN0IHMgPSBtc2cuc3RhdHVzIHx8IHt9XG4gICAgICBjb25zdCBtb3ZpbmcgPSBzLnNlcnZvTW92aW5nIHx8IGZhbHNlXG4gICAgICBpZiAobW92aW5nICYmICF0aGlzLnNlcnZvU3RhcnRUaW1lKSB7XG4gICAgICAgIHRoaXMuc2Vydm9TdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gICAgICB9XG4gICAgICBpZiAoIW1vdmluZykge1xuICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gMFxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICAgIG9ubGluZTogbXNnLm9ubGluZSB8fCBmYWxzZSxcbiAgICAgICAgcHdtMUxldmVsOiBzLnB3bTFMZXZlbCB8fCAwLFxuICAgICAgICBwd20yTGV2ZWw6IHMucHdtMkxldmVsIHx8IDAsXG4gICAgICAgIHB3bTNMZXZlbDogcy5wd20zTGV2ZWwgfHwgMCxcbiAgICAgICAgYWlyUHVtcExldmVsOiBzLmFpclB1bXBMZXZlbCB8fCAwLFxuICAgICAgICBmYW5MZXZlbDogcy5mYW5MZXZlbCB8fCAwLFxuICAgICAgICB1dkxpZ2h0T246IHMudXZMaWdodE9uIHx8IGZhbHNlLFxuICAgICAgICByZWxheTFTdGF0ZTogcy5yZWxheTFTdGF0ZSB8fCBmYWxzZSxcbiAgICAgICAgcmVsYXkyU3RhdGU6IHMucmVsYXkyU3RhdGUgfHwgZmFsc2UsXG4gICAgICAgIHNlcnZvTW92aW5nOiBzLnNlcnZvTW92aW5nIHx8IGZhbHNlLFxuICAgICAgICBhZGNXUVZvbHRhZ2U6IHMuYWRjV1FWb2x0YWdlIHx8IDAsXG4gICAgICAgIGFkY1RlbXBWb2x0YWdlOiBzLmFkY1RlbXBWb2x0YWdlIHx8IDAsXG4gICAgICAgIHRkc1ZhbHVlOiBzLnRkc1ZhbHVlIHx8IDAsXG4gICAgICAgIHdhdGVyVGVtcGVyYXR1cmU6IHMud2F0ZXJUZW1wZXJhdHVyZSB8fCAwLFxuICAgICAgICBzeXN0ZW1Qb3dlcmVkOiBzLnN5c3RlbVBvd2VyZWQgIT09IGZhbHNlXG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RVcGRhdGVUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKVxuICAgIH0sXG4gICAgXG4gICAgYXN5bmMgbG9hZFN0YXR1cygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldERldmljZVN0YXR1cyh0aGlzLmRldmljZUtleSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgcyA9IHJlcy5zdGF0dXMgfHwge31cbiAgICAgICAgICBjb25zdCBtb3ZpbmcgPSBzLnNlcnZvTW92aW5nIHx8IGZhbHNlXG4gICAgICAgICAgaWYgKG1vdmluZyAmJiAhdGhpcy5zZXJ2b1N0YXJ0VGltZSkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2b1N0YXJ0VGltZSA9IERhdGUubm93KClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFtb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vydm9TdGFydFRpbWUgPSAwXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc3RhdHVzID0ge1xuICAgICAgICAgICAgb25saW5lOiByZXMub25saW5lIHx8IGZhbHNlLFxuICAgICAgICAgICAgcHdtMUxldmVsOiBzLnB3bTFMZXZlbCB8fCAwLFxuICAgICAgICAgICAgcHdtMkxldmVsOiBzLnB3bTJMZXZlbCB8fCAwLFxuICAgICAgICAgICAgcHdtM0xldmVsOiBzLnB3bTNMZXZlbCB8fCAwLFxuICAgICAgICAgICAgYWlyUHVtcExldmVsOiBzLmFpclB1bXBMZXZlbCB8fCAwLFxuICAgICAgICAgICAgZmFuTGV2ZWw6IHMuZmFuTGV2ZWwgfHwgMCxcbiAgICAgICAgICAgIHV2TGlnaHRPbjogcy51dkxpZ2h0T24gfHwgZmFsc2UsXG4gICAgICAgICAgICByZWxheTFTdGF0ZTogcy5yZWxheTFTdGF0ZSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHJlbGF5MlN0YXRlOiBzLnJlbGF5MlN0YXRlIHx8IGZhbHNlLFxuICAgICAgICAgICAgc2Vydm9Nb3Zpbmc6IHMuc2Vydm9Nb3ZpbmcgfHwgZmFsc2UsXG4gICAgICAgICAgICBhZGNXUVZvbHRhZ2U6IHMuYWRjV1FWb2x0YWdlIHx8IDAsXG4gICAgICAgICAgICBhZGNUZW1wVm9sdGFnZTogcy5hZGNUZW1wVm9sdGFnZSB8fCAwLFxuICAgICAgICAgICAgdGRzVmFsdWU6IHMudGRzVmFsdWUgfHwgMCxcbiAgICAgICAgICAgIHdhdGVyVGVtcGVyYXR1cmU6IHMud2F0ZXJUZW1wZXJhdHVyZSB8fCAwLFxuICAgICAgICAgICAgc3lzdGVtUG93ZXJlZDogcy5zeXN0ZW1Qb3dlcmVkICE9PSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxhc3RVcGRhdGVUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLnN0YXR1cy5vbmxpbmUgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgcmVmcmVzaFN0YXR1cygpIHtcbiAgICAgIHVuaS5zaG93TG9hZGluZyh7IHRpdGxlOiAn5Yi35paw5LitLi4uJyB9KVxuICAgICAgcmVxdWVzdERldmljZVN0YXR1cyh0aGlzLmRldmljZUtleSkudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZFN0YXR1cygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9KVxuICAgICAgICB9LCA4MDApXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZFN0YXR1cygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgXG4gICAgYXN5bmMgc2V0UHVtcChwdW1wLCBsZXZlbCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/JywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuICAgICAgXG4gICAgICB0aGlzLnN0YXR1c1tgcHdtJHtwdW1wfUxldmVsYF0gPSBsZXZlbFxuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfcHVtcCcsIHsgcHVtcCwgbGV2ZWwgfSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKVxuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruaIkOWKnycsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIGFzeW5jIHNldExpZ2h0KGxldmVsKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG4gICAgICBcbiAgICAgIHRoaXMuc3RhdHVzLnB3bTNMZXZlbCA9IGxldmVsXG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3NldF9saWdodCcsIHsgbGV2ZWwgfSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKVxuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruaIkOWKnycsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIGFzeW5jIHNldEFpclB1bXAobGV2ZWwpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KTsgcmV0dXJuIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIHRoaXMuc3RhdHVzLmFpclB1bXBMZXZlbCA9IGxldmVsXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfYWlyX3B1bXAnLCB7IGxldmVsIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2VzcykgeyBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApOyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSkgfVxuICAgICAgICBlbHNlIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiByZXMubWVzc2FnZSB8fCAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pIH1cbiAgICB9LFxuICAgIFxuICAgIGFzeW5jIHNldEZhbihsZXZlbCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUpIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/JywgaWNvbjogJ25vbmUnIH0pOyByZXR1cm4gfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuICAgICAgdGhpcy5zdGF0dXMuZmFuTGV2ZWwgPSBsZXZlbFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCAnc2V0X2ZhbicsIHsgbGV2ZWwgfSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3RhdHVzKCksIDgwMCk7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruaIkOWKnycsIGljb246ICdzdWNjZXNzJyB9KSB9XG4gICAgICAgIGVsc2UgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgICAgfSBjYXRjaCAoZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgIH0sXG4gICAgXG4gICAgYXN5bmMgc2V0VVYob24pIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KTsgcmV0dXJuIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIHRoaXMuc3RhdHVzLnV2TGlnaHRPbiA9IG9uXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfdXYnLCB7IG9uIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2VzcykgeyBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApIH1cbiAgICAgICAgZWxzZSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgICB9IGNhdGNoIChlKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgfSxcbiAgICBcbiAgICBhc3luYyBzZXRSZWxheTIob24pIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KTsgcmV0dXJuIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIHRoaXMuc3RhdHVzLnJlbGF5MlN0YXRlID0gb25cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3NldF9yZWxheTInLCB7IG9uIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2VzcykgeyBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApIH1cbiAgICAgICAgZWxzZSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgICB9IGNhdGNoIChlKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgfSxcbiAgICBcbiAgICBhc3luYyB0cmlnZ2VyU2Vydm8oKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSB8fCB0aGlzLnN0YXR1cy5zZXJ2b01vdmluZykge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur/miJboiLXmnLrov5DooYzkuK0nLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3RyaWdnZXJfc2Vydm8nLCB7fSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXMuc2Vydm9Nb3ZpbmcgPSB0cnVlXG4gICAgICAgICAgdGhpcy5zZXJ2b1N0YXJ0VGltZSA9IERhdGUubm93KCkgIC8vIOiusOW9leWQr+WKqOaXtumXtFxuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iIteacuuW3suWQr+WKqCcsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+WQr+WKqOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICflkK/liqjlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIGNoZWNrU2Vydm9UaW1lb3V0KCkge1xuICAgICAgLy8g6Ii15py66L+Q6KGM6LaFMTXnp5Loh6rliqjlpI3kvY3vvIjoiLXmnLrlrozmlbTlkajmnJ/nuqY456eS77yJXG4gICAgICBpZiAodGhpcy5zdGF0dXMuc2Vydm9Nb3ZpbmcgJiYgdGhpcy5zZXJ2b1N0YXJ0VGltZSA+IDApIHtcbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IChEYXRlLm5vdygpIC0gdGhpcy5zZXJ2b1N0YXJ0VGltZSkgLyAxMDAwXG4gICAgICAgIGlmIChlbGFwc2VkID4gOCkge1xuICAgICAgICAgIHRoaXMuc3RhdHVzLnNlcnZvTW92aW5nID0gZmFsc2VcbiAgICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBhc3luYyB0b2dnbGVQb3dlcigpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgaXNQb3dlcmVkID0gdGhpcy5zdGF0dXMuc3lzdGVtUG93ZXJlZFxuICAgICAgY29uc3QgY21kID0gaXNQb3dlcmVkID8gJ3Bvd2VyX29mZicgOiAncG93ZXJfb24nXG4gICAgICBjb25zdCBjb25maXJtVGV4dCA9IGlzUG93ZXJlZCA/ICfnoa7lrpropoHlhbPmnLrlkJfvvJ9cXG7lhbPmnLrlkI7orr7lpIfkv53mjIHnvZHnu5zov57mjqXvvIzlj6/ov5znqIvlvIDmnLrjgIInIDogJ+ehruWumuimgeW8gOacuuWQl++8nydcbiAgICAgIFxuICAgICAgdW5pLnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn56Gu6K6k5pON5L2cJyxcbiAgICAgICAgY29udGVudDogY29uZmlybVRleHQsXG4gICAgICAgIHN1Y2Nlc3M6IChtb2RhbFJlcykgPT4ge1xuICAgICAgICAgIGlmICghbW9kYWxSZXMuY29uZmlybSkgcmV0dXJuXG4gICAgICAgICAgdGhpcy5leGVjdXRlUG93ZXJDbWQoY21kKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgXG4gICAgYXN5bmMgZXhlY3V0ZVBvd2VyQ21kKGNtZCkge1xuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCBjbWQsIHt9KVxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLnN0YXR1cy5zeXN0ZW1Qb3dlcmVkID0gY21kID09PSAncG93ZXJfb24nXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiBjbWQgPT09ICdwb3dlcl9vbicgPyAn5byA5py65oiQ5YqfJyA6ICflhbPmnLrmiJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCAxMDAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzdWx0Lm1lc3NhZ2UgfHwgJ+aTjeS9nOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfmk43kvZzlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gPT09PT0g5a6a5pe25Lu75YqhID09PT09XG4gICAgZ2V0VGFza1R5cGVMYWJlbCh0aW1lcikge1xuICAgICAgY29uc3QgdHlwZSA9IHRoaXMudGFza1R5cGVzLmZpbmQodCA9PiB0LmNtZCA9PT0gdGltZXIuY21kICYmIEpTT04uc3RyaW5naWZ5KHQucGFyYW1zKSA9PT0gSlNPTi5zdHJpbmdpZnkodGltZXIucGFyYW1zKSlcbiAgICAgIHJldHVybiB0eXBlID8gdHlwZS5sYWJlbCA6ICfmnKrnn6Xku7vliqEnXG4gICAgfSxcblxuICAgIGFzeW5jIGxvYWRUaW1lcnMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRUaW1lcnModGhpcy5kZXZpY2VLZXkpXG4gICAgICAgIGlmIChyZXMuc3VjY2VzcyAmJiByZXMudGltZXJzKSB7XG4gICAgICAgICAgdGhpcy50aW1lcnMgPSByZXMudGltZXJzXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIOmdmem7mOWksei0pe+8jOS9v+eUqOepuuWIl+ihqFxuICAgICAgICB0aGlzLnRpbWVycyA9IFtdXG4gICAgICB9XG4gICAgfSxcblxuICAgIG9wZW5UaW1lckRpYWxvZyh0aW1lcikge1xuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1RpbWVyID0gdGltZXJcbiAgICAgICAgY29uc3QgdHlwZUluZGV4ID0gdGhpcy50YXNrVHlwZXMuZmluZEluZGV4KHQgPT4gdC5jbWQgPT09IHRpbWVyLmNtZCAmJiBKU09OLnN0cmluZ2lmeSh0LnBhcmFtcykgPT09IEpTT04uc3RyaW5naWZ5KHRpbWVyLnBhcmFtcykpXG4gICAgICAgIGNvbnN0IGR1ciA9IHRoaXMuZHVyYXRpb25PcHRpb25zLmZpbmQoZCA9PiBkLnZhbHVlID09PSAodGltZXIuZHVyYXRpb24gLyA2MCkpXG4gICAgICAgIHRoaXMudGltZXJGb3JtID0ge1xuICAgICAgICAgIGlkOiB0aW1lci5pZCxcbiAgICAgICAgICBuYW1lOiB0aW1lci5uYW1lLFxuICAgICAgICAgIGhvdXI6IHRpbWVyLmhvdXIsXG4gICAgICAgICAgbWludXRlOiB0aW1lci5taW51dGUsXG4gICAgICAgICAgdHlwZTogdHlwZUluZGV4ID49IDAgPyB0eXBlSW5kZXggOiAwLFxuICAgICAgICAgIGNtZDogdGltZXIuY21kLFxuICAgICAgICAgIHBhcmFtczogdGltZXIucGFyYW1zLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aW1lci5kdXJhdGlvbiAvIDYwLCAvLyDovazkuLrliIbpkp9cbiAgICAgICAgICBkdXJhdGlvbkxhYmVsOiBkdXIgPyBkdXIubGFiZWwgOiAn5LiN5YGc5q2iJ1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVkaXRpbmdUaW1lciA9IG51bGxcbiAgICAgICAgdGhpcy50aW1lckZvcm0gPSB7XG4gICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgIGhvdXI6IDgsXG4gICAgICAgICAgbWludXRlOiAwLFxuICAgICAgICAgIHR5cGU6IDAsXG4gICAgICAgICAgY21kOiAndHJpZ2dlcl9zZXJ2bycsXG4gICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICBkdXJhdGlvbkxhYmVsOiAn5LiN5YGc5q2iJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnRpbWVyRGlhbG9nVmlzaWJsZSA9IHRydWVcbiAgICB9LFxuXG4gICAgY2xvc2VUaW1lckRpYWxvZygpIHtcbiAgICAgIHRoaXMudGltZXJEaWFsb2dWaXNpYmxlID0gZmFsc2VcbiAgICAgIHRoaXMuZWRpdGluZ1RpbWVyID0gbnVsbFxuICAgIH0sXG5cbiAgICBvblRpbWVDaGFuZ2UoZSkge1xuICAgICAgY29uc3QgdmFscyA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLnRpbWVyRm9ybS5ob3VyID0gcGFyc2VJbnQodmFsc1swXSlcbiAgICAgIHRoaXMudGltZXJGb3JtLm1pbnV0ZSA9IHBhcnNlSW50KHZhbHNbMV0pXG4gICAgfSxcblxuICAgIG9uVGFza1R5cGVDaGFuZ2UoZSkge1xuICAgICAgY29uc3QgaWR4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMudGltZXJGb3JtLnR5cGUgPSBpZHhcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRhc2tUeXBlc1tpZHhdXG4gICAgICB0aGlzLnRpbWVyRm9ybS5jbWQgPSB0eXBlLmNtZFxuICAgICAgdGhpcy50aW1lckZvcm0ucGFyYW1zID0geyAuLi50eXBlLnBhcmFtcyB9XG4gICAgfSxcblxuICAgIG9uRHVyYXRpb25DaGFuZ2UoZSkge1xuICAgICAgY29uc3QgaWR4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIGNvbnN0IG9wdCA9IHRoaXMuZHVyYXRpb25PcHRpb25zW2lkeF1cbiAgICAgIHRoaXMudGltZXJGb3JtLmR1cmF0aW9uID0gb3B0LnZhbHVlXG4gICAgICB0aGlzLnRpbWVyRm9ybS5kdXJhdGlvbkxhYmVsID0gb3B0LmxhYmVsXG4gICAgfSxcblxuICAgIGNvbmZpcm1UaW1lcigpIHtcbiAgICAgIGlmICghdGhpcy50aW1lckZvcm0ubmFtZS50cmltKCkpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K+36L6T5YWl5Lu75Yqh5ZCN56ewJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aW1lckRhdGEgPSB7XG4gICAgICAgIGlkOiB0aGlzLnRpbWVyRm9ybS5pZCB8fCAndGltZXJfJyArIERhdGUubm93KCkgKyAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNiksXG4gICAgICAgIG5hbWU6IHRoaXMudGltZXJGb3JtLm5hbWUudHJpbSgpLFxuICAgICAgICBob3VyOiB0aGlzLnRpbWVyRm9ybS5ob3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMudGltZXJGb3JtLm1pbnV0ZSxcbiAgICAgICAgdHlwZTogdGhpcy50aW1lckZvcm0udHlwZSxcbiAgICAgICAgY21kOiB0aGlzLnRpbWVyRm9ybS5jbWQsXG4gICAgICAgIHBhcmFtczogdGhpcy50aW1lckZvcm0ucGFyYW1zLFxuICAgICAgICBkdXJhdGlvbjogdGhpcy50aW1lckZvcm0uZHVyYXRpb24gKiA2MCwgLy8g6L2s5Li656eSXG4gICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWRpdGluZ1RpbWVyKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMudGltZXJzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRoaXMuZWRpdGluZ1RpbWVyLmlkKVxuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICB0aGlzLnRpbWVyc1tpZHhdID0gdGltZXJEYXRhXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZXJzLnB1c2godGltZXJEYXRhKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlVGltZXJEaWFsb2coKVxuICAgICAgdGhpcy5zYXZlQWxsVGltZXJzKClcbiAgICB9LFxuXG4gICAgYXN5bmMgaGFuZGxlRGVsZXRlVGltZXIodGltZXIpIHtcbiAgICAgIHVuaS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+ehruiupOWIoOmZpCcsXG4gICAgICAgIGNvbnRlbnQ6ICfnoa7lrpropoHliKDpmaTlrprml7bku7vliqFcIicgKyB0aW1lci5uYW1lICsgJ1wi5ZCX77yfJyxcbiAgICAgICAgc3VjY2VzczogYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVsZXRlVGltZXJBcGkodGhpcy5kZXZpY2VLZXksIHRpbWVyLmlkKVxuICAgICAgICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVycyA9IHRoaXMudGltZXJzLmZpbHRlcih0ID0+IHQuaWQgIT09IHRpbWVyLmlkKVxuICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+WIoOmZpOaIkOWKnycsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzdWx0Lm1lc3NhZ2UgfHwgJ+WIoOmZpOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+WIoOmZpOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgdG9nZ2xlVGltZXIodGltZXIpIHtcbiAgICAgIHRpbWVyLmVuYWJsZWQgPSAhdGltZXIuZW5hYmxlZFxuICAgICAgdGhpcy5zYXZlQWxsVGltZXJzKClcbiAgICB9LFxuXG4gICAgYXN5bmMgc2F2ZUFsbFRpbWVycygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHNhdmVUaW1lcnModGhpcy5kZXZpY2VLZXksIHRoaXMudGltZXJzKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5L+d5a2Y5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uY29udHJvbC1wYWdlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIHBhZGRpbmctYm90dG9tOiAxMjBycHg7XG59XG5cbi5zdGF0dXMtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFhNzNlOCAwJSwgIzBkNDdhMSAxMDAlKTtcbiAgcGFkZGluZzogNDBycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBcbiAgJi5vZmZsaW5lIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY2IDAlLCAjMzMzIDEwMCUpO1xuICB9XG59XG5cbi5zdGF0dXMtaW5kaWNhdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBycHg7XG4gIFxuICAuaW5kaWNhdG9yLWRvdCB7XG4gICAgd2lkdGg6IDE2cnB4O1xuICAgIGhlaWdodDogMTZycHg7XG4gICAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnJweDtcbiAgICBcbiAgICAub2ZmbGluZSAmIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XG4gICAgfVxuICB9XG4gIFxuICB0ZXh0IHtcbiAgICBmb250LXNpemU6IDI2cnB4O1xuICB9XG59XG5cbi5kZXZpY2Uta2V5IHtcbiAgZm9udC1zaXplOiAzNnJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250cm9sLXNlY3Rpb24sIC5zZW5zb3Itc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDIwcnB4IDQwcnB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMjBycHg7XG59XG5cbi5jb250cm9sLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHJweDtcbiAgcGFkZGluZzogMzBycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcnB4O1xufVxuXG4uY29udHJvbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI1cnB4O1xufVxuXG4uY29udHJvbC1uYW1lIHtcbiAgZm9udC1zaXplOiAzMHJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOiA2cnB4IDEycnB4O1xuICBib3JkZXItcmFkaXVzOiA4cnB4O1xuICBcbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIH1cbn1cblxuLmNvbnRyb2wtdmFsdWUge1xuICBmb250LXNpemU6IDI4cnB4O1xuICBjb2xvcjogIzFhNzNlODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wdW1wLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubGV2ZWwtYnRuIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA3MHJweDtcbiAgbWFyZ2luOiAwIDEwcnB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAyNnJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWE3M2U4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi5hY3Rpb24tYnRuLCAucG93ZXItYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBycHg7XG4gIGJhY2tncm91bmQ6ICM0Y2FmNTA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDMwcnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHJweDtcbiAgYm9yZGVyOiBub25lO1xuICBcbiAgJi5idXN5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY5ODAwO1xuICB9XG4gIFxuICAmLm9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICB9XG59XG5cbi5zd2l0Y2gtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cnB4O1xuICBwYWRkaW5nOiAyNHJweCAzMHJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycnB4IDEwcnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5zd2l0Y2gtbGFiZWwge1xuICBmb250LXNpemU6IDMwcnB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNnJweCAxMnJweDtcbiAgYm9yZGVyLXJhZGl1czogOHJweDtcbiAgXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICB9XG59XG5cbi8qIOiHquWumuS5ieW8gOWFsyAqL1xuLmN1c3RvbS1zd2l0Y2gge1xuICB3aWR0aDogOTZycHg7XG4gIGhlaWdodDogNTJycHg7XG4gIGJvcmRlci1yYWRpdXM6IDI2cnB4O1xuICBwYWRkaW5nOiA0cnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jdXN0b20tc3dpdGNoLm9mZiB7IGJhY2tncm91bmQ6ICNkZGQ7IH1cbi5jdXN0b20tc3dpdGNoLm9uIHsgYmFja2dyb3VuZDogIzFhNzNlODsgfVxuLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1zd2l0Y2gta25vYiB7XG4gIHdpZHRoOiA0NHJweDtcbiAgaGVpZ2h0OiA0NHJweDtcbiAgYm9yZGVyLXJhZGl1czogMjJycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnJweCA4cnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4uY3VzdG9tLXN3aXRjaC5vbiAuY3VzdG9tLXN3aXRjaC1rbm9iIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQ0cnB4KTtcbn1cblxuLnNlbnNvci1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2Vuc29yLWl0ZW0ge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHJweDtcbiAgcGFkZGluZzogMzBycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAxMHJweDtcbn1cblxuLnNlbnNvci1pY29uIHtcbiAgZm9udC1zaXplOiA0OHJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVycHg7XG59XG5cbi5zZW5zb3ItbGFiZWwge1xuICBmb250LXNpemU6IDI2cnB4O1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWJvdHRvbTogMTBycHg7XG59XG5cbi5zZW5zb3ItdmFsdWUge1xuICBmb250LXNpemU6IDM2cnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5ib3R0b20tYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcnB4IDQwcnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItdG9wOiAxcnB4IHNvbGlkICNlZWU7XG59XG5cbi5yZWZyZXNoLXRpbWUge1xuICBmb250LXNpemU6IDI0cnB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnJlZnJlc2gtYnRuIHtcbiAgZm9udC1zaXplOiAyNnJweDtcbiAgY29sb3I6ICMxYTczZTg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLyog6YeN5ZG95ZCN5by556qXICovXG4uZGlhbG9nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uZGlhbG9nLWJveCB7XG4gIHdpZHRoOiA2MDBycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI0cnB4O1xuICBwYWRkaW5nOiA1MHJweCA0MHJweCAzMHJweDtcbn1cblxuLmRpYWxvZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzRycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNDBycHg7XG59XG5cbi5kaWFsb2ctaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHJweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogMTJycHg7XG4gIHBhZGRpbmc6IDAgMjRycHg7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1ib3R0b206IDQwcnB4O1xufVxuXG4uZGlhbG9nLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kaWFsb2ctYnRuIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA4MHJweDtcbiAgZm9udC1zaXplOiAzMHJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAwIDEwcnB4O1xufVxuXG4uZGlhbG9nLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uZGlhbG9nLWNvbmZpcm0ge1xuICBiYWNrZ3JvdW5kOiAjMWE3M2U4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyog5a6a5pe25Lu75YqhICovXG4uZW1wdHktdGlwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHJweDtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMjZycHg7XG59XG5cbi50aW1lci1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTZycHg7XG4gIHBhZGRpbmc6IDI0cnB4IDMwcnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDJycHggMTBycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnRpbWVyLWNhcmQtbGVmdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHJweDtcbn1cblxuLnRpbWVyLWNhcmQtdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHJweDtcbn1cblxuLnRpbWVyLW5hbWUge1xuICBmb250LXNpemU6IDMwcnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi50aW1lci10aW1lIHtcbiAgZm9udC1zaXplOiAyOHJweDtcbiAgY29sb3I6ICMxYTczZTg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGltZXItZGVzYyB7XG4gIGZvbnQtc2l6ZTogMjZycHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4udGltZXItZHVyYXRpb24ge1xuICBmb250LXNpemU6IDI0cnB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnRpbWVyLWNhcmQtcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZycHg7XG59XG5cbi50aW1lci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cnB4O1xufVxuXG4udGltZXItZWRpdCB7XG4gIGZvbnQtc2l6ZTogMjRycHg7XG4gIGNvbG9yOiAjMWE3M2U4O1xuICBwYWRkaW5nOiA0cnB4IDEycnB4O1xufVxuXG4udGltZXItZGVsZXRlIHtcbiAgZm9udC1zaXplOiAyNHJweDtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIHBhZGRpbmc6IDRycHggMTJycHg7XG59XG5cbi5hZGQtdGltZXItYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMWE3M2U4O1xuICBmb250LXNpemU6IDMwcnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnJweDtcbiAgYm9yZGVyOiAycnB4IGRhc2hlZCAjMWE3M2U4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBycHg7XG59XG5cbi50aW1lci1kaWFsb2cge1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4udGltZXItZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTZycHg7XG4gIG1hcmdpbi10b3A6IDIwcnB4O1xufVxuXG4udGltZXItZm9ybS1sYWJlbDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnRpbWVyLXBpY2tlci1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyMHJweDtcbn1cblxuLnRpbWVyLXBpY2tlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcnB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiAxMnJweDtcbiAgcGFkZGluZzogMCAyNHJweDtcbiAgZm9udC1zaXplOiAzMHJweDtcbiAgbGluZS1oZWlnaHQ6IDgwcnB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _api = __webpack_require__(/*! @/utils/api */ 16);\nvar _storage = __webpack_require__(/*! @/utils/storage */ 15);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = {\n  data: function data() {\n    return {\n      deviceKey: '',\n      deviceModel: '',\n      status: {\n        online: false,\n        pwm1Level: 0,\n        pwm2Level: 0,\n        pwm3Level: 0,\n        airPumpLevel: 0,\n        fanLevel: 0,\n        uvLightOn: false,\n        relay1State: false,\n        relay2State: false,\n        servoMoving: false,\n        adcWQVoltage: 0,\n        adcTempVoltage: 0,\n        tdsValue: 0,\n        waterTemperature: 0,\n        systemPowered: true\n      },\n      pumpLevels: ['关', '一档', '二档', '三档'],\n      lastUpdateTime: '',\n      timer: null,\n      renameVisible: false,\n      renameValue: '',\n      renameTarget: '',\n      renameDefault: '',\n      ws: null,\n      wsConnected: false,\n      wsReconnectTimer: null,\n      servoTimer: null,\n      servoStartTime: 0,\n      lastClickTime: 0,\n      // 定时任务\n      timers: [],\n      timerDialogVisible: false,\n      editingTimer: null,\n      timerForm: {\n        id: '',\n        name: '',\n        hour: 8,\n        minute: 0,\n        type: 0,\n        cmd: 'trigger_servo',\n        params: {},\n        duration: 0,\n        durationLabel: '不停止'\n      },\n      hours: Array.from({\n        length: 24\n      }, function (_, i) {\n        return ('0' + i).slice(-2);\n      }),\n      minutes: Array.from({\n        length: 60\n      }, function (_, i) {\n        return ('0' + i).slice(-2);\n      }),\n      taskTypes: [{\n        label: '喂鱼（舵机）',\n        cmd: 'trigger_servo',\n        params: {}\n      }, {\n        label: '换水1档（水泵1 level=1）',\n        cmd: 'set_pump',\n        params: {\n          pump: 1,\n          level: 1\n        }\n      }, {\n        label: '换水2档（水泵1 level=2）',\n        cmd: 'set_pump',\n        params: {\n          pump: 1,\n          level: 2\n        }\n      }, {\n        label: '换水3档（水泵1 level=3）',\n        cmd: 'set_pump',\n        params: {\n          pump: 1,\n          level: 3\n        }\n      }, {\n        label: '加气1档（气泵 level=1）',\n        cmd: 'set_air_pump',\n        params: {\n          level: 1\n        }\n      }, {\n        label: '加气2档（气泵 level=2）',\n        cmd: 'set_air_pump',\n        params: {\n          level: 2\n        }\n      }, {\n        label: '加气3档（气泵 level=3）',\n        cmd: 'set_air_pump',\n        params: {\n          level: 3\n        }\n      }, {\n        label: '开灯1档（灯条 level=1）',\n        cmd: 'set_light',\n        params: {\n          level: 1\n        }\n      }, {\n        label: '开灯2档（level=2）',\n        cmd: 'set_light',\n        params: {\n          level: 2\n        }\n      }, {\n        label: '开灯3档（level=3）',\n        cmd: 'set_light',\n        params: {\n          level: 3\n        }\n      }, {\n        label: '风扇1档',\n        cmd: 'set_fan',\n        params: {\n          level: 1\n        }\n      }, {\n        label: '风扇2档',\n        cmd: 'set_fan',\n        params: {\n          level: 2\n        }\n      }, {\n        label: '风扇3档',\n        cmd: 'set_fan',\n        params: {\n          level: 3\n        }\n      }],\n      durationOptions: [{\n        label: '不停止',\n        value: 0\n      }, {\n        label: '1分钟',\n        value: 1\n      }, {\n        label: '5分钟',\n        value: 5\n      }, {\n        label: '10分钟',\n        value: 10\n      }, {\n        label: '30分钟',\n        value: 30\n      }, {\n        label: '60分钟',\n        value: 60\n      }]\n    };\n  },\n  computed: {\n    taskTypeLabels: function taskTypeLabels() {\n      return this.taskTypes.map(function (t) {\n        return t.label;\n      });\n    },\n    durationLabels: function durationLabels() {\n      return this.durationOptions.map(function (d) {\n        return d.label;\n      });\n    },\n    waterQualityText: function waterQualityText() {\n      var v = this.status.tdsValue || 0;\n      if (v < 150) return '优';\n      if (v < 200) return '良';\n      if (v < 400) return '中';\n      return '差';\n    },\n    waterQualityClass: function waterQualityClass() {\n      var v = this.status.tdsValue || 0;\n      if (v < 150) return 'wq-excellent';\n      if (v < 200) return 'wq-good';\n      if (v < 400) return 'wq-fair';\n      return 'wq-poor';\n    }\n  },\n  onLoad: function onLoad(options) {\n    var _this = this;\n    this.deviceKey = options.device_key || '';\n    if (!this.deviceKey) {\n      uni.showToast({\n        title: '设备参数错误',\n        icon: 'none'\n      });\n      return;\n    }\n    this.loadStatus();\n    this.loadTimers();\n\n    // 连接 WebSocket 接收实时推送\n    this.connectWS();\n\n    // 进入页面自动请求最新状态\n    (0, _api.requestDeviceStatus)(this.deviceKey).then(function () {\n      setTimeout(function () {\n        return _this.loadStatus();\n      }, 800);\n    });\n\n    // 10秒轮询\n    this.timer = setInterval(function () {\n      _this.loadStatus();\n      _this.checkServoTimeout();\n    }, 10000);\n\n    // 舵机超时检测\n    this.servoTimer = setInterval(function () {\n      _this.checkServoTimeout();\n    }, 2000);\n  },\n  onUnload: function onUnload() {\n    if (this.timer) {\n      clearInterval(this.timer);\n    }\n    if (this.servoTimer) {\n      clearInterval(this.servoTimer);\n    }\n    this.disconnectWS();\n  },\n  methods: {\n    getCtrlName: function getCtrlName(target, defaultName) {\n      var key = 'ctrl_name_' + this.deviceKey + '_' + target;\n      var name = uni.getStorageSync(key);\n      return name || defaultName;\n    },\n    checkRateLimit: function checkRateLimit() {\n      var now = Date.now();\n      if (now - this.lastClickTime < 1000) {\n        uni.showToast({\n          title: '操作过快，慢点哟',\n          icon: 'none'\n        });\n        return false;\n      }\n      this.lastClickTime = now;\n      return true;\n    },\n    startRename: function startRename(target, defaultName) {\n      this.renameTarget = target;\n      this.renameDefault = defaultName;\n      this.renameValue = this.getCtrlName(target, defaultName);\n      if (this.renameValue === defaultName) {\n        this.renameValue = '';\n      }\n      this.renameVisible = true;\n    },\n    cancelRename: function cancelRename() {\n      this.renameVisible = false;\n      this.renameTarget = '';\n      this.renameValue = '';\n    },\n    confirmRename: function confirmRename() {\n      if (!this.renameTarget) return;\n      var key = 'ctrl_name_' + this.deviceKey + '_' + this.renameTarget;\n      if (this.renameValue && this.renameValue.trim()) {\n        uni.setStorageSync(key, this.renameValue.trim());\n        uni.showToast({\n          title: '重命名成功',\n          icon: 'success'\n        });\n      } else {\n        uni.removeStorageSync(key);\n        uni.showToast({\n          title: '已恢复默认名称',\n          icon: 'none'\n        });\n      }\n      this.cancelRename();\n    },\n    // ===== WebSocket 实时推送 =====\n    getWSBaseURL: function getWSBaseURL() {\n      try {\n        if (window && window.location) {\n          return \"ws://\".concat(window.location.host);\n        }\n      } catch (e) {}\n      return 'ws://112.124.107.159:7965';\n    },\n    connectWS: function connectWS() {\n      var _this2 = this;\n      if (this.ws) return;\n      var phone = (0, _storage.getPhoneNumber)();\n      if (!phone) return;\n      try {\n        var baseUrl = this.getWSBaseURL();\n        this.ws = uni.connectSocket({\n          url: \"\".concat(baseUrl, \"/ws/client\"),\n          success: function success() {}\n        });\n        this.ws.onOpen(function () {\n          _this2.wsConnected = true;\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'auth',\n              phone: phone\n            })\n          });\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'subscribe',\n              device_key: _this2.deviceKey\n            })\n          });\n        });\n        this.ws.onMessage(function (res) {\n          try {\n            var msg = JSON.parse(res.data);\n            if (msg.type === 'device_status' && msg.device_key === _this2.deviceKey) {\n              _this2.updateStatusFromWS(msg);\n            }\n          } catch (e) {}\n        });\n        this.ws.onClose(function () {\n          _this2.wsConnected = false;\n          _this2.ws = null;\n          if (!_this2.wsReconnectTimer) {\n            _this2.wsReconnectTimer = setTimeout(function () {\n              _this2.wsReconnectTimer = null;\n              _this2.connectWS();\n            }, 3000);\n          }\n        });\n        this.ws.onError(function () {\n          _this2.wsConnected = false;\n        });\n      } catch (e) {\n        __f__(\"log\", 'WebSocket连接失败，使用HTTP轮询', e, \" at pages/control/fish-one.vue:516\");\n      }\n    },\n    disconnectWS: function disconnectWS() {\n      if (this.wsReconnectTimer) {\n        clearTimeout(this.wsReconnectTimer);\n        this.wsReconnectTimer = null;\n      }\n      if (this.ws) {\n        this.ws.close();\n        this.ws = null;\n        this.wsConnected = false;\n      }\n    },\n    updateStatusFromWS: function updateStatusFromWS(msg) {\n      var s = msg.status || {};\n      var moving = s.servoMoving || false;\n      if (moving && !this.servoStartTime) {\n        this.servoStartTime = Date.now();\n      }\n      if (!moving) {\n        this.servoStartTime = 0;\n      }\n      this.status = {\n        online: msg.online || false,\n        pwm1Level: s.pwm1Level || 0,\n        pwm2Level: s.pwm2Level || 0,\n        pwm3Level: s.pwm3Level || 0,\n        airPumpLevel: s.airPumpLevel || 0,\n        fanLevel: s.fanLevel || 0,\n        uvLightOn: s.uvLightOn || false,\n        relay1State: s.relay1State || false,\n        relay2State: s.relay2State || false,\n        servoMoving: s.servoMoving || false,\n        adcWQVoltage: s.adcWQVoltage || 0,\n        adcTempVoltage: s.adcTempVoltage || 0,\n        tdsValue: s.tdsValue || 0,\n        waterTemperature: s.waterTemperature || 0,\n        systemPowered: s.systemPowered !== false\n      };\n      this.lastUpdateTime = new Date().toLocaleTimeString();\n    },\n    loadStatus: function loadStatus() {\n      var _this3 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var res, s, moving;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return (0, _api.getDeviceStatus)(_this3.deviceKey);\n              case 3:\n                res = _context.sent;\n                if (res.success) {\n                  _this3.deviceModel = res.model || '';\n                  s = res.status || {};\n                  moving = s.servoMoving || false;\n                  if (moving && !_this3.servoStartTime) {\n                    _this3.servoStartTime = Date.now();\n                  }\n                  if (!moving) {\n                    _this3.servoStartTime = 0;\n                  }\n                  _this3.status = {\n                    online: res.online || false,\n                    pwm1Level: s.pwm1Level || 0,\n                    pwm2Level: s.pwm2Level || 0,\n                    pwm3Level: s.pwm3Level || 0,\n                    airPumpLevel: s.airPumpLevel || 0,\n                    fanLevel: s.fanLevel || 0,\n                    uvLightOn: s.uvLightOn || false,\n                    relay1State: s.relay1State || false,\n                    relay2State: s.relay2State || false,\n                    servoMoving: s.servoMoving || false,\n                    adcWQVoltage: s.adcWQVoltage || 0,\n                    adcTempVoltage: s.adcTempVoltage || 0,\n                    tdsValue: s.tdsValue || 0,\n                    waterTemperature: s.waterTemperature || 0,\n                    systemPowered: s.systemPowered !== false\n                  };\n                  _this3.lastUpdateTime = new Date().toLocaleTimeString();\n                }\n                _context.next = 10;\n                break;\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                _this3.status.online = false;\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }))();\n    },\n    refreshStatus: function refreshStatus() {\n      var _this4 = this;\n      uni.showLoading({\n        title: '刷新中...'\n      });\n      (0, _api.requestDeviceStatus)(this.deviceKey).then(function () {\n        setTimeout(function () {\n          _this4.loadStatus().then(function () {\n            uni.hideLoading();\n          });\n        }, 800);\n      }).catch(function () {\n        _this4.loadStatus().then(function () {\n          uni.hideLoading();\n        });\n      });\n    },\n    setPump: function setPump(pump, level) {\n      var _this5 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var res;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (_this5.status.online) {\n                  _context2.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context2.abrupt(\"return\");\n              case 3:\n                if (_this5.checkRateLimit()) {\n                  _context2.next = 5;\n                  break;\n                }\n                return _context2.abrupt(\"return\");\n              case 5:\n                _this5.status[\"pwm\".concat(pump, \"Level\")] = level;\n                _context2.prev = 6;\n                _context2.next = 9;\n                return (0, _api.sendControlCommand)(_this5.deviceKey, 'set_pump', {\n                  pump: pump,\n                  level: level\n                });\n              case 9:\n                res = _context2.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this5.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context2.next = 16;\n                break;\n              case 13:\n                _context2.prev = 13;\n                _context2.t0 = _context2[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[6, 13]]);\n      }))();\n    },\n    setLight: function setLight(level) {\n      var _this6 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        var res;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                if (_this6.status.online) {\n                  _context3.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context3.abrupt(\"return\");\n              case 3:\n                if (_this6.checkRateLimit()) {\n                  _context3.next = 5;\n                  break;\n                }\n                return _context3.abrupt(\"return\");\n              case 5:\n                _this6.status.pwm3Level = level;\n                _context3.prev = 6;\n                _context3.next = 9;\n                return (0, _api.sendControlCommand)(_this6.deviceKey, 'set_light', {\n                  level: level\n                });\n              case 9:\n                res = _context3.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this6.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context3.next = 16;\n                break;\n              case 13:\n                _context3.prev = 13;\n                _context3.t0 = _context3[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, null, [[6, 13]]);\n      }))();\n    },\n    setAirPump: function setAirPump(level) {\n      var _this7 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {\n        var res;\n        return _regenerator.default.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                if (_this7.status.online) {\n                  _context4.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context4.abrupt(\"return\");\n              case 3:\n                if (_this7.checkRateLimit()) {\n                  _context4.next = 5;\n                  break;\n                }\n                return _context4.abrupt(\"return\");\n              case 5:\n                _this7.status.airPumpLevel = level;\n                _context4.prev = 6;\n                _context4.next = 9;\n                return (0, _api.sendControlCommand)(_this7.deviceKey, 'set_air_pump', {\n                  level: level\n                });\n              case 9:\n                res = _context4.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this7.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context4.next = 16;\n                break;\n              case 13:\n                _context4.prev = 13;\n                _context4.t0 = _context4[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, null, [[6, 13]]);\n      }))();\n    },\n    setFan: function setFan(level) {\n      var _this8 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {\n        var res;\n        return _regenerator.default.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                if (_this8.status.online) {\n                  _context5.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context5.abrupt(\"return\");\n              case 3:\n                if (_this8.checkRateLimit()) {\n                  _context5.next = 5;\n                  break;\n                }\n                return _context5.abrupt(\"return\");\n              case 5:\n                _this8.status.fanLevel = level;\n                _context5.prev = 6;\n                _context5.next = 9;\n                return (0, _api.sendControlCommand)(_this8.deviceKey, 'set_fan', {\n                  level: level\n                });\n              case 9:\n                res = _context5.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this8.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context5.next = 16;\n                break;\n              case 13:\n                _context5.prev = 13;\n                _context5.t0 = _context5[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5, null, [[6, 13]]);\n      }))();\n    },\n    setUV: function setUV(on) {\n      var _this9 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {\n        var res;\n        return _regenerator.default.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                if (_this9.status.online) {\n                  _context6.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context6.abrupt(\"return\");\n              case 3:\n                if (_this9.checkRateLimit()) {\n                  _context6.next = 5;\n                  break;\n                }\n                return _context6.abrupt(\"return\");\n              case 5:\n                _this9.status.uvLightOn = on;\n                _context6.prev = 6;\n                _context6.next = 9;\n                return (0, _api.sendControlCommand)(_this9.deviceKey, 'set_uv', {\n                  on: on\n                });\n              case 9:\n                res = _context6.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this9.loadStatus();\n                  }, 800);\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context6.next = 16;\n                break;\n              case 13:\n                _context6.prev = 13;\n                _context6.t0 = _context6[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6, null, [[6, 13]]);\n      }))();\n    },\n    setRelay2: function setRelay2(on) {\n      var _this10 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {\n        var res;\n        return _regenerator.default.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                if (_this10.status.online) {\n                  _context7.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context7.abrupt(\"return\");\n              case 3:\n                if (_this10.checkRateLimit()) {\n                  _context7.next = 5;\n                  break;\n                }\n                return _context7.abrupt(\"return\");\n              case 5:\n                _this10.status.relay2State = on;\n                _context7.prev = 6;\n                _context7.next = 9;\n                return (0, _api.sendControlCommand)(_this10.deviceKey, 'set_relay2', {\n                  on: on\n                });\n              case 9:\n                res = _context7.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this10.loadStatus();\n                  }, 800);\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context7.next = 16;\n                break;\n              case 13:\n                _context7.prev = 13;\n                _context7.t0 = _context7[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7, null, [[6, 13]]);\n      }))();\n    },\n    triggerServo: function triggerServo() {\n      var _this11 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {\n        var res;\n        return _regenerator.default.wrap(function _callee8$(_context8) {\n          while (1) {\n            switch (_context8.prev = _context8.next) {\n              case 0:\n                if (!(!_this11.status.online || _this11.status.servoMoving)) {\n                  _context8.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线或舵机运行中',\n                  icon: 'none'\n                });\n                return _context8.abrupt(\"return\");\n              case 3:\n                if (_this11.checkRateLimit()) {\n                  _context8.next = 5;\n                  break;\n                }\n                return _context8.abrupt(\"return\");\n              case 5:\n                _context8.prev = 5;\n                _context8.next = 8;\n                return (0, _api.sendControlCommand)(_this11.deviceKey, 'trigger_servo', {});\n              case 8:\n                res = _context8.sent;\n                if (res.success) {\n                  _this11.status.servoMoving = true;\n                  _this11.servoStartTime = Date.now();\n                  uni.showToast({\n                    title: '喂食已启动',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '启动失败',\n                    icon: 'none'\n                  });\n                }\n                _context8.next = 15;\n                break;\n              case 12:\n                _context8.prev = 12;\n                _context8.t0 = _context8[\"catch\"](5);\n                uni.showToast({\n                  title: '启动失败',\n                  icon: 'none'\n                });\n              case 15:\n              case \"end\":\n                return _context8.stop();\n            }\n          }\n        }, _callee8, null, [[5, 12]]);\n      }))();\n    },\n    checkServoTimeout: function checkServoTimeout() {\n      if (this.status.servoMoving && this.servoStartTime > 0) {\n        var elapsed = (Date.now() - this.servoStartTime) / 1000;\n        if (elapsed > 8) {\n          this.status.servoMoving = false;\n          this.servoStartTime = 0;\n        }\n      }\n    },\n    togglePower: function togglePower() {\n      var _this12 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {\n        var isPowered, cmd, confirmText;\n        return _regenerator.default.wrap(function _callee9$(_context9) {\n          while (1) {\n            switch (_context9.prev = _context9.next) {\n              case 0:\n                if (_this12.status.online) {\n                  _context9.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context9.abrupt(\"return\");\n              case 3:\n                isPowered = _this12.status.systemPowered;\n                cmd = isPowered ? 'power_off' : 'power_on';\n                confirmText = isPowered ? '确定要关机吗？\\n关机后设备保持网络连接，可远程开机。' : '确定要开机吗？';\n                uni.showModal({\n                  title: '确认操作',\n                  content: confirmText,\n                  success: function success(modalRes) {\n                    if (!modalRes.confirm) return;\n                    _this12.executePowerCmd(cmd);\n                  }\n                });\n              case 7:\n              case \"end\":\n                return _context9.stop();\n            }\n          }\n        }, _callee9);\n      }))();\n    },\n    executePowerCmd: function executePowerCmd(cmd) {\n      var _this13 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {\n        var result;\n        return _regenerator.default.wrap(function _callee10$(_context10) {\n          while (1) {\n            switch (_context10.prev = _context10.next) {\n              case 0:\n                if (_this13.checkRateLimit()) {\n                  _context10.next = 2;\n                  break;\n                }\n                return _context10.abrupt(\"return\");\n              case 2:\n                _context10.prev = 2;\n                _context10.next = 5;\n                return (0, _api.sendControlCommand)(_this13.deviceKey, cmd, {});\n              case 5:\n                result = _context10.sent;\n                if (result.success) {\n                  _this13.status.systemPowered = cmd === 'power_on';\n                  uni.showToast({\n                    title: cmd === 'power_on' ? '开机成功' : '关机成功',\n                    icon: 'success'\n                  });\n                  setTimeout(function () {\n                    return _this13.loadStatus();\n                  }, 1000);\n                } else {\n                  uni.showToast({\n                    title: result.message || '操作失败',\n                    icon: 'none'\n                  });\n                }\n                _context10.next = 12;\n                break;\n              case 9:\n                _context10.prev = 9;\n                _context10.t0 = _context10[\"catch\"](2);\n                uni.showToast({\n                  title: '操作失败',\n                  icon: 'none'\n                });\n              case 12:\n              case \"end\":\n                return _context10.stop();\n            }\n          }\n        }, _callee10, null, [[2, 9]]);\n      }))();\n    },\n    // ===== 定时任务 =====\n    getTaskTypeLabel: function getTaskTypeLabel(timer) {\n      var type = this.taskTypes.find(function (t) {\n        return t.cmd === timer.cmd && JSON.stringify(t.params) === JSON.stringify(timer.params);\n      });\n      return type ? type.label : '未知任务';\n    },\n    loadTimers: function loadTimers() {\n      var _this14 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {\n        var res;\n        return _regenerator.default.wrap(function _callee11$(_context11) {\n          while (1) {\n            switch (_context11.prev = _context11.next) {\n              case 0:\n                _context11.prev = 0;\n                _context11.next = 3;\n                return (0, _api.getTimers)(_this14.deviceKey);\n              case 3:\n                res = _context11.sent;\n                if (res.success && res.timers) {\n                  _this14.timers = res.timers;\n                }\n                _context11.next = 10;\n                break;\n              case 7:\n                _context11.prev = 7;\n                _context11.t0 = _context11[\"catch\"](0);\n                _this14.timers = [];\n              case 10:\n              case \"end\":\n                return _context11.stop();\n            }\n          }\n        }, _callee11, null, [[0, 7]]);\n      }))();\n    },\n    openTimerDialog: function openTimerDialog(timer) {\n      if (timer) {\n        this.editingTimer = timer;\n        var typeIndex = this.taskTypes.findIndex(function (t) {\n          return t.cmd === timer.cmd && JSON.stringify(t.params) === JSON.stringify(timer.params);\n        });\n        var dur = this.durationOptions.find(function (d) {\n          return d.value === timer.duration / 60;\n        });\n        this.timerForm = {\n          id: timer.id,\n          name: timer.name,\n          hour: timer.hour,\n          minute: timer.minute,\n          type: typeIndex >= 0 ? typeIndex : 0,\n          cmd: timer.cmd,\n          params: timer.params,\n          duration: timer.duration / 60,\n          durationLabel: dur ? dur.label : '不停止'\n        };\n      } else {\n        this.editingTimer = null;\n        this.timerForm = {\n          id: '',\n          name: '',\n          hour: 8,\n          minute: 0,\n          type: 0,\n          cmd: 'trigger_servo',\n          params: {},\n          duration: 0,\n          durationLabel: '不停止'\n        };\n      }\n      this.timerDialogVisible = true;\n    },\n    closeTimerDialog: function closeTimerDialog() {\n      this.timerDialogVisible = false;\n      this.editingTimer = null;\n    },\n    onTimeChange: function onTimeChange(e) {\n      var vals = e.detail.value;\n      this.timerForm.hour = parseInt(vals[0]);\n      this.timerForm.minute = parseInt(vals[1]);\n    },\n    onTaskTypeChange: function onTaskTypeChange(e) {\n      var idx = e.detail.value;\n      this.timerForm.type = idx;\n      var type = this.taskTypes[idx];\n      this.timerForm.cmd = type.cmd;\n      this.timerForm.params = _objectSpread({}, type.params);\n    },\n    onDurationChange: function onDurationChange(e) {\n      var idx = e.detail.value;\n      var opt = this.durationOptions[idx];\n      this.timerForm.duration = opt.value;\n      this.timerForm.durationLabel = opt.label;\n    },\n    confirmTimer: function confirmTimer() {\n      var _this15 = this;\n      if (!this.timerForm.name.trim()) {\n        uni.showToast({\n          title: '请输入任务名称',\n          icon: 'none'\n        });\n        return;\n      }\n      var timerData = {\n        id: this.timerForm.id || 'timer_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),\n        name: this.timerForm.name.trim(),\n        hour: this.timerForm.hour,\n        minute: this.timerForm.minute,\n        type: this.timerForm.type,\n        cmd: this.timerForm.cmd,\n        params: this.timerForm.params,\n        duration: this.timerForm.duration * 60,\n        enabled: true\n      };\n      if (this.editingTimer) {\n        var idx = this.timers.findIndex(function (t) {\n          return t.id === _this15.editingTimer.id;\n        });\n        if (idx >= 0) {\n          this.timers[idx] = timerData;\n        }\n      } else {\n        this.timers.push(timerData);\n      }\n      this.closeTimerDialog();\n      this.saveAllTimers();\n    },\n    handleDeleteTimer: function handleDeleteTimer(timer) {\n      var _this16 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {\n        return _regenerator.default.wrap(function _callee13$(_context13) {\n          while (1) {\n            switch (_context13.prev = _context13.next) {\n              case 0:\n                uni.showModal({\n                  title: '确认删除',\n                  content: '确定要删除定时任务\"' + timer.name + '\"吗？',\n                  success: function () {\n                    var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(res) {\n                      var result;\n                      return _regenerator.default.wrap(function _callee12$(_context12) {\n                        while (1) {\n                          switch (_context12.prev = _context12.next) {\n                            case 0:\n                              if (!res.confirm) {\n                                _context12.next = 11;\n                                break;\n                              }\n                              _context12.prev = 1;\n                              _context12.next = 4;\n                              return (0, _api.deleteTimer)(_this16.deviceKey, timer.id);\n                            case 4:\n                              result = _context12.sent;\n                              if (result.success) {\n                                _this16.timers = _this16.timers.filter(function (t) {\n                                  return t.id !== timer.id;\n                                });\n                                uni.showToast({\n                                  title: '删除成功',\n                                  icon: 'success'\n                                });\n                              } else {\n                                uni.showToast({\n                                  title: result.message || '删除失败',\n                                  icon: 'none'\n                                });\n                              }\n                              _context12.next = 11;\n                              break;\n                            case 8:\n                              _context12.prev = 8;\n                              _context12.t0 = _context12[\"catch\"](1);\n                              uni.showToast({\n                                title: '删除失败',\n                                icon: 'none'\n                              });\n                            case 11:\n                            case \"end\":\n                              return _context12.stop();\n                          }\n                        }\n                      }, _callee12, null, [[1, 8]]);\n                    }));\n                    function success(_x) {\n                      return _success.apply(this, arguments);\n                    }\n                    return success;\n                  }()\n                });\n              case 1:\n              case \"end\":\n                return _context13.stop();\n            }\n          }\n        }, _callee13);\n      }))();\n    },\n    toggleTimer: function toggleTimer(timer) {\n      timer.enabled = !timer.enabled;\n      this.saveAllTimers();\n    },\n    saveAllTimers: function saveAllTimers() {\n      var _this17 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {\n        return _regenerator.default.wrap(function _callee14$(_context14) {\n          while (1) {\n            switch (_context14.prev = _context14.next) {\n              case 0:\n                _context14.prev = 0;\n                _context14.next = 3;\n                return (0, _api.saveTimers)(_this17.deviceKey, _this17.timers);\n              case 3:\n                _context14.next = 8;\n                break;\n              case 5:\n                _context14.prev = 5;\n                _context14.t0 = _context14[\"catch\"](0);\n                uni.showToast({\n                  title: '保存失败',\n                  icon: 'none'\n                });\n              case 8:\n              case \"end\":\n                return _context14.stop();\n            }\n          }\n        }, _callee14, null, [[0, 5]]);\n      }))();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY29udHJvbC9maXNoLW9uZS52dWUiXSwibmFtZXMiOlsiZGF0YSIsImRldmljZUtleSIsImRldmljZU1vZGVsIiwic3RhdHVzIiwib25saW5lIiwicHdtMUxldmVsIiwicHdtMkxldmVsIiwicHdtM0xldmVsIiwiYWlyUHVtcExldmVsIiwiZmFuTGV2ZWwiLCJ1dkxpZ2h0T24iLCJyZWxheTFTdGF0ZSIsInJlbGF5MlN0YXRlIiwic2Vydm9Nb3ZpbmciLCJhZGNXUVZvbHRhZ2UiLCJhZGNUZW1wVm9sdGFnZSIsInRkc1ZhbHVlIiwid2F0ZXJUZW1wZXJhdHVyZSIsInN5c3RlbVBvd2VyZWQiLCJwdW1wTGV2ZWxzIiwibGFzdFVwZGF0ZVRpbWUiLCJ0aW1lciIsInJlbmFtZVZpc2libGUiLCJyZW5hbWVWYWx1ZSIsInJlbmFtZVRhcmdldCIsInJlbmFtZURlZmF1bHQiLCJ3cyIsIndzQ29ubmVjdGVkIiwid3NSZWNvbm5lY3RUaW1lciIsInNlcnZvVGltZXIiLCJzZXJ2b1N0YXJ0VGltZSIsImxhc3RDbGlja1RpbWUiLCJ0aW1lcnMiLCJ0aW1lckRpYWxvZ1Zpc2libGUiLCJlZGl0aW5nVGltZXIiLCJ0aW1lckZvcm0iLCJpZCIsIm5hbWUiLCJob3VyIiwibWludXRlIiwidHlwZSIsImNtZCIsInBhcmFtcyIsImR1cmF0aW9uIiwiZHVyYXRpb25MYWJlbCIsImhvdXJzIiwibGVuZ3RoIiwibWludXRlcyIsInRhc2tUeXBlcyIsImxhYmVsIiwicHVtcCIsImxldmVsIiwiZHVyYXRpb25PcHRpb25zIiwidmFsdWUiLCJjb21wdXRlZCIsInRhc2tUeXBlTGFiZWxzIiwiZHVyYXRpb25MYWJlbHMiLCJ3YXRlclF1YWxpdHlUZXh0Iiwid2F0ZXJRdWFsaXR5Q2xhc3MiLCJvbkxvYWQiLCJ1bmkiLCJ0aXRsZSIsImljb24iLCJzZXRUaW1lb3V0Iiwib25VbmxvYWQiLCJjbGVhckludGVydmFsIiwibWV0aG9kcyIsImdldEN0cmxOYW1lIiwiY2hlY2tSYXRlTGltaXQiLCJzdGFydFJlbmFtZSIsImNhbmNlbFJlbmFtZSIsImNvbmZpcm1SZW5hbWUiLCJnZXRXU0Jhc2VVUkwiLCJjb25uZWN0V1MiLCJ1cmwiLCJzdWNjZXNzIiwicGhvbmUiLCJkZXZpY2Vfa2V5IiwiZGlzY29ubmVjdFdTIiwiY2xlYXJUaW1lb3V0IiwidXBkYXRlU3RhdHVzRnJvbVdTIiwibG9hZFN0YXR1cyIsInJlcyIsInMiLCJtb3ZpbmciLCJyZWZyZXNoU3RhdHVzIiwic2V0UHVtcCIsInNldExpZ2h0Iiwic2V0QWlyUHVtcCIsInNldEZhbiIsInNldFVWIiwib24iLCJzZXRSZWxheTIiLCJ0cmlnZ2VyU2Vydm8iLCJjaGVja1NlcnZvVGltZW91dCIsInRvZ2dsZVBvd2VyIiwiaXNQb3dlcmVkIiwiY29uZmlybVRleHQiLCJjb250ZW50IiwiZXhlY3V0ZVBvd2VyQ21kIiwicmVzdWx0IiwiZ2V0VGFza1R5cGVMYWJlbCIsImxvYWRUaW1lcnMiLCJvcGVuVGltZXJEaWFsb2ciLCJjbG9zZVRpbWVyRGlhbG9nIiwib25UaW1lQ2hhbmdlIiwib25UYXNrVHlwZUNoYW5nZSIsIm9uRHVyYXRpb25DaGFuZ2UiLCJjb25maXJtVGltZXIiLCJlbmFibGVkIiwiaGFuZGxlRGVsZXRlVGltZXIiLCJ0b2dnbGVUaW1lciIsInNhdmVBbGxUaW1lcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFpUkE7QUFDQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0VBQ0FBO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQUM7UUFBQUM7TUFBQTtRQUFBO01BQUE7TUFDQUM7UUFBQUQ7TUFBQTtRQUFBO01BQUE7TUFDQUUsWUFDQTtRQUFBQztRQUFBUjtRQUFBQztNQUFBLEdBQ0E7UUFBQU87UUFBQVI7UUFBQUM7VUFBQVE7VUFBQUM7UUFBQTtNQUFBLEdBQ0E7UUFBQUY7UUFBQVI7UUFBQUM7VUFBQVE7VUFBQUM7UUFBQTtNQUFBLEdBQ0E7UUFBQUY7UUFBQVI7UUFBQUM7VUFBQVE7VUFBQUM7UUFBQTtNQUFBLEdBQ0E7UUFBQUY7UUFBQVI7UUFBQUM7VUFBQVM7UUFBQTtNQUFBLEdBQ0E7UUFBQUY7UUFBQVI7UUFBQUM7VUFBQVM7UUFBQTtNQUFBLEdBQ0E7UUFBQUY7UUFBQVI7UUFBQUM7VUFBQVM7UUFBQTtNQUFBLEdBQ0E7UUFBQUY7UUFBQVI7UUFBQUM7VUFBQVM7UUFBQTtNQUFBLEdBQ0E7UUFBQUY7UUFBQVI7UUFBQUM7VUFBQVM7UUFBQTtNQUFBLEdBQ0E7UUFBQUY7UUFBQVI7UUFBQUM7VUFBQVM7UUFBQTtNQUFBLEdBQ0E7UUFBQUY7UUFBQVI7UUFBQUM7VUFBQVM7UUFBQTtNQUFBLEdBQ0E7UUFBQUY7UUFBQVI7UUFBQUM7VUFBQVM7UUFBQTtNQUFBLEdBQ0E7UUFBQUY7UUFBQVI7UUFBQUM7VUFBQVM7UUFBQTtNQUFBLEVBQ0E7TUFDQUMsa0JBQ0E7UUFBQUg7UUFBQUk7TUFBQSxHQUNBO1FBQUFKO1FBQUFJO01BQUEsR0FDQTtRQUFBSjtRQUFBSTtNQUFBLEdBQ0E7UUFBQUo7UUFBQUk7TUFBQSxHQUNBO1FBQUFKO1FBQUFJO01BQUEsR0FDQTtRQUFBSjtRQUFBSTtNQUFBO0lBRUE7RUFDQTtFQUNBQztJQUNBQztNQUNBO1FBQUE7TUFBQTtJQUNBO0lBQ0FDO01BQ0E7UUFBQTtNQUFBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUFBO0lBQ0E7SUFDQTtNQUNBQztRQUFBQztRQUFBQztNQUFBO01BQ0E7SUFDQTtJQUVBO0lBQ0E7O0lBRUE7SUFDQTs7SUFFQTtJQUNBO01BQ0FDO1FBQUE7TUFBQTtJQUNBOztJQUVBO0lBQ0E7TUFDQTtNQUNBO0lBQ0E7O0lBRUE7SUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO01BQ0FDO0lBQ0E7SUFDQTtNQUNBQTtJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtRQUNBUjtVQUFBQztVQUFBQztRQUFBO1FBQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBTztNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7TUFDQTtRQUNBWDtRQUNBQTtVQUFBQztVQUFBQztRQUFBO01BQ0E7UUFDQUY7UUFDQUE7VUFBQUM7VUFBQUM7UUFBQTtNQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FVO01BQ0E7UUFDQTtVQUNBO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFBQTtNQUNBO01BQ0E7TUFDQTtNQUVBO1FBQ0E7UUFDQTtVQUNBQztVQUNBQztRQUNBO1FBRUE7VUFDQTtVQUNBZjtZQUNBNUQ7Y0FBQXdDO2NBQUFvQztZQUFBO1VBQ0E7VUFDQWhCO1lBQ0E1RDtjQUFBd0M7Y0FBQXFDO1lBQUE7VUFDQTtRQUNBO1FBRUE7VUFDQTtZQUNBO1lBQ0E7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtRQUVBO1VBQ0E7VUFDQTtVQUNBO1lBQ0E7Y0FDQTtjQUNBO1lBQ0E7VUFDQTtRQUNBO1FBRUE7VUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtRQUNBQztRQUNBO01BQ0E7TUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO01BQ0E7UUFDQTtNQUNBO01BQ0E7UUFDQTtNQUNBO01BQ0E7UUFDQTVFO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBRUErRDtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBLE9BRUE7Y0FBQTtnQkFBQUM7Z0JBQ0E7a0JBQ0E7a0JBQ0FDO2tCQUNBQztrQkFDQTtvQkFDQTtrQkFDQTtrQkFDQTtvQkFDQTtrQkFDQTtrQkFDQTtvQkFDQWhGO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7a0JBQ0E7a0JBQ0E7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0lBRUFtRTtNQUFBO01BQ0F6QjtRQUFBQztNQUFBO01BQ0E7UUFDQUU7VUFDQTtZQUNBSDtVQUNBO1FBQ0E7TUFDQTtRQUNBO1VBQ0FBO1FBQ0E7TUFDQTtJQUNBO0lBRUEwQjtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ0ExQjtrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUEsSUFHQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUVBO2dCQUFBO2dCQUFBO2dCQUFBLE9BR0E7a0JBQUFaO2tCQUFBQztnQkFBQTtjQUFBO2dCQUFBK0I7Z0JBQ0E7a0JBQ0FuQjtvQkFBQTtrQkFBQTtrQkFDQUg7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFDQTtrQkFDQUY7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFDQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVBRjtrQkFBQUM7a0JBQUFDO2dCQUFBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRUE7SUFFQXlCO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFDQTNCO2tCQUFBQztrQkFBQUM7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQSxJQUdBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBRUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FHQTtrQkFBQVg7Z0JBQUE7Y0FBQTtnQkFBQStCO2dCQUNBO2tCQUNBbkI7b0JBQUE7a0JBQUE7a0JBQ0FIO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQ0E7a0JBQ0FGO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFQUY7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0lBRUEwQjtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE1QjtrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUNBO2dCQUFBO2dCQUFBO2dCQUFBLE9BRUE7a0JBQUFYO2dCQUFBO2NBQUE7Z0JBQUErQjtnQkFDQTtrQkFBQW5CO29CQUFBO2tCQUFBO2tCQUFBSDtvQkFBQUM7b0JBQUFDO2tCQUFBO2dCQUFBLE9BQ0E7a0JBQUFGO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFDQUY7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBRUEyQjtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE3QjtrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUNBO2dCQUFBO2dCQUFBO2dCQUFBLE9BRUE7a0JBQUFYO2dCQUFBO2NBQUE7Z0JBQUErQjtnQkFDQTtrQkFBQW5CO29CQUFBO2tCQUFBO2tCQUFBSDtvQkFBQUM7b0JBQUFDO2tCQUFBO2dCQUFBLE9BQ0E7a0JBQUFGO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFDQUY7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBRUE0QjtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE5QjtrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUNBO2dCQUFBO2dCQUFBO2dCQUFBLE9BRUE7a0JBQUE2QjtnQkFBQTtjQUFBO2dCQUFBVDtnQkFDQTtrQkFBQW5CO29CQUFBO2tCQUFBO2dCQUFBLE9BQ0E7a0JBQUFIO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFDQUY7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBRUE4QjtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUFoQztrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUNBO2dCQUFBO2dCQUFBO2dCQUFBLE9BRUE7a0JBQUE2QjtnQkFBQTtjQUFBO2dCQUFBVDtnQkFDQTtrQkFBQW5CO29CQUFBO2tCQUFBO2dCQUFBLE9BQ0E7a0JBQUFIO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFDQUY7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBRUErQjtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLE1BQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ0FqQztrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUEsSUFHQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBLE9BR0E7Y0FBQTtnQkFBQW9CO2dCQUNBO2tCQUNBO2tCQUNBO2tCQUNBdEI7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFDQTtrQkFDQUY7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFDQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVBRjtrQkFBQUM7a0JBQUFDO2dCQUFBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRUE7SUFFQWdDO01BQ0E7UUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ0FuQztrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBSUFrQztnQkFDQXZEO2dCQUNBd0Q7Z0JBRUFyQztrQkFDQUM7a0JBQ0FxQztrQkFDQXZCO29CQUNBO29CQUNBO2tCQUNBO2dCQUNBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFFQXdCO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBLE9BRUE7Y0FBQTtnQkFBQUM7Z0JBQ0E7a0JBQ0E7a0JBQ0F4QztvQkFBQUM7b0JBQUFDO2tCQUFBO2tCQUNBQztvQkFBQTtrQkFBQTtnQkFDQTtrQkFDQUg7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFDQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVBRjtrQkFBQUM7a0JBQUFDO2dCQUFBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRUE7SUFFQTtJQUNBdUM7TUFDQTtRQUFBO01BQUE7TUFDQTtJQUNBO0lBRUFDO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFQTtjQUFBO2dCQUFBcEI7Z0JBQ0E7a0JBQ0E7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0lBRUFxQjtNQUNBO1FBQ0E7UUFDQTtVQUFBO1FBQUE7UUFDQTtVQUFBO1FBQUE7UUFDQTtVQUNBbkU7VUFDQUM7VUFDQUM7VUFDQUM7VUFDQUM7VUFDQUM7VUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtNQUNBO1FBQ0E7UUFDQTtVQUNBUjtVQUNBQztVQUNBQztVQUNBQztVQUNBQztVQUNBQztVQUNBQztVQUNBQztVQUNBQztRQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUE0RDtNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUFBO01BQ0E7UUFDQWhEO1VBQUFDO1VBQUFDO1FBQUE7UUFDQTtNQUNBO01BRUE7UUFDQTFCO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FrRTtNQUNBO01BRUE7UUFDQTtVQUFBO1FBQUE7UUFDQTtVQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7TUFFQTtNQUNBO0lBQ0E7SUFFQUM7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ0FsRDtrQkFDQUM7a0JBQ0FxQztrQkFDQXZCO29CQUFBO3NCQUFBO3NCQUFBO3dCQUFBOzBCQUFBOzRCQUFBOzhCQUFBLEtBQ0FPO2dDQUFBO2dDQUFBOzhCQUFBOzhCQUFBOzhCQUFBOzhCQUFBLE9BRUE7NEJBQUE7OEJBQUFrQjs4QkFDQTtnQ0FDQTtrQ0FBQTtnQ0FBQTtnQ0FDQXhDO2tDQUFBQztrQ0FBQUM7Z0NBQUE7OEJBQ0E7Z0NBQ0FGO2tDQUFBQztrQ0FBQUM7Z0NBQUE7OEJBQ0E7OEJBQUE7OEJBQUE7NEJBQUE7OEJBQUE7OEJBQUE7OEJBRUFGO2dDQUFBQztnQ0FBQUM7OEJBQUE7NEJBQUE7NEJBQUE7OEJBQUE7MEJBQUE7d0JBQUE7c0JBQUE7b0JBQUEsQ0FHQTtvQkFBQTtzQkFBQTtvQkFBQTtvQkFBQTtrQkFBQTtnQkFDQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBRUFpRDtNQUNBMUY7TUFDQTtJQUNBO0lBRUEyRjtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUVBO2NBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFQXBEO2tCQUFBQztrQkFBQUM7Z0JBQUE7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFFQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHZpZXcgY2xhc3M9XCJjb250cm9sLXBhZ2VcIj5cbiAgICA8dmlldyBjbGFzcz1cInN0YXR1cy1oZWFkZXJcIiA6Y2xhc3M9XCJ7IG9mZmxpbmU6ICFzdGF0dXMub25saW5lIH1cIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwic3RhdHVzLXJvd1wiPlxuICAgICAgICA8dmlldyBjbGFzcz1cInN0YXR1cy1sZWZ0XCI+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJzdGF0dXMtaW5kaWNhdG9yXCI+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImluZGljYXRvci1kb3RcIj48L3ZpZXc+XG4gICAgICAgICAgICA8dGV4dD57eyBzdGF0dXMub25saW5lID8gJ+WcqOe6vycgOiAn56a757q/JyB9fTwvdGV4dD5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJkZXZpY2Uta2V5XCI+e3sgZGV2aWNlS2V5IH19PC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibW9kZWwtaW5mby1oZWFkZXJcIj57eyBkZXZpY2VNb2RlbCB9fTwvdGV4dD5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG5cbiAgICA8IS0tIOS8oOaEn+WZqOaVsOaNriAtLT5cbiAgICA8dmlldyBjbGFzcz1cInNlbnNvci1zZWN0aW9uXCI+XG4gICAgICA8dmlldyBjbGFzcz1cInNlbnNvci1ncmlkIHR3by1jb2xcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJzZW5zb3ItaXRlbVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2Vuc29yLWljb25cIj7wn4yh77iPPC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2Vuc29yLWxhYmVsXCI+5rip5bqmPC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2Vuc29yLXZhbHVlXCI+e3sgc3RhdHVzLndhdGVyVGVtcGVyYXR1cmUudG9GaXhlZCgxKSB9fcKwQzwvdGV4dD5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8dmlldyBjbGFzcz1cInNlbnNvci1pdGVtXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzZW5zb3ItaWNvblwiPvCfkqc8L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzZW5zb3ItbGFiZWxcIj7msLTotKg8L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzZW5zb3ItdmFsdWVcIj57eyBwYXJzZUludChzdGF0dXMudGRzVmFsdWUpIH19cHBtIDx0ZXh0IGNsYXNzPVwid3EtdGFnXCIgOmNsYXNzPVwid2F0ZXJRdWFsaXR5Q2xhc3NcIj57eyB3YXRlclF1YWxpdHlUZXh0IH19PC90ZXh0PjwvdGV4dD5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cblxuICAgIDwhLS0g5aSn5Zu+5qCH5oyJ6ZKuIC0tPlxuICAgIDx2aWV3IGNsYXNzPVwiYmlnLWJ0bi1zZWN0aW9uXCI+XG4gICAgICA8dmlldyBjbGFzcz1cImJpZy1idG4tcm93XCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiYmlnLWJ0bi13cmFwcGVyXCI+XG4gICAgICAgICAgPHZpZXdcbiAgICAgICAgICAgIGNsYXNzPVwiYmlnLWJ0blwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJzdGF0dXMuc3lzdGVtUG93ZXJlZCA/ICdwb3dlci1vbicgOiAncG93ZXItb2ZmJ1wiXG4gICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVQb3dlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJiaWctYnRuLWljb25cIj7imqE8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImJpZy1idG4tbGFiZWxcIj57eyBzdGF0dXMuc3lzdGVtUG93ZXJlZCA/ICflvIDmnLonIDogJ+WFs+acuicgfX08L3RleHQ+XG4gICAgICAgICAgPC92aWV3PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiYmlnLWJ0bi13cmFwcGVyXCI+XG4gICAgICAgICAgPHZpZXdcbiAgICAgICAgICAgIGNsYXNzPVwiYmlnLWJ0biBmZWVkLWJ0blwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IGJ1c3k6IHN0YXR1cy5zZXJ2b01vdmluZyB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cInRyaWdnZXJTZXJ2b1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJiaWctYnRuLWljb25cIj7wn5CfPC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJiaWctYnRuLWxhYmVsXCI+e3sgc3RhdHVzLnNlcnZvTW92aW5nID8gJ+i/kOihjOS4rScgOiAn5ZaC6aOfJyB9fTwvdGV4dD5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG5cbiAgICA8IS0tIFBXTSDmjqfliLYgLS0+XG4gICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLXNlY3Rpb25cIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1jYXJkXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1oZWFkZXJcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtbmFtZVwiIEBjbGljaz1cInN0YXJ0UmVuYW1lKCdwdW1wMScsICfmsLTms7UxJylcIj57eyBnZXRDdHJsTmFtZSgncHVtcDEnLCAn5rC05rO1MScpIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY29udHJvbC12YWx1ZVwiPnt7IHB1bXBMZXZlbHNbc3RhdHVzLnB3bTFMZXZlbF0gfX08L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJwdW1wLWNvbnRyb2xzXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdi1mb3I9XCIobGV2ZWwsIGluZGV4KSBpbiBwdW1wTGV2ZWxzXCJcbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICBjbGFzcz1cImxldmVsLWJ0blwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogc3RhdHVzLnB3bTFMZXZlbCA9PT0gaW5kZXggfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJzZXRQdW1wKDEsIGluZGV4KVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbGV2ZWwgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuXG4gICAgICA8dmlldyBjbGFzcz1cImNvbnRyb2wtY2FyZFwiPlxuICAgICAgICA8dmlldyBjbGFzcz1cImNvbnRyb2wtaGVhZGVyXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJjb250cm9sLW5hbWVcIiBAY2xpY2s9XCJzdGFydFJlbmFtZSgncHVtcDInLCAn5rC05rO1MicpXCI+e3sgZ2V0Q3RybE5hbWUoJ3B1bXAyJywgJ+awtOaztTInKSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtdmFsdWVcIj57eyBwdW1wTGV2ZWxzW3N0YXR1cy5wd20yTGV2ZWxdIH19PC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwicHVtcC1jb250cm9sc1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHYtZm9yPVwiKGxldmVsLCBpbmRleCkgaW4gcHVtcExldmVsc1wiXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJsZXZlbC1idG5cIlxuICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IHN0YXR1cy5wd20yTGV2ZWwgPT09IGluZGV4IH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwic2V0UHVtcCgyLCBpbmRleClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGxldmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cblxuICAgICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLWNhcmRcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLWhlYWRlclwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY29udHJvbC1uYW1lXCIgQGNsaWNrPVwic3RhcnRSZW5hbWUoJ2FpclB1bXAnLCAn5rCn5rCU5rO1JylcIj57eyBnZXRDdHJsTmFtZSgnYWlyUHVtcCcsICfmsKfmsJTms7UnKSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtdmFsdWVcIj57eyBwdW1wTGV2ZWxzW3N0YXR1cy5haXJQdW1wTGV2ZWwgfHwgMF0gfX08L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJwdW1wLWNvbnRyb2xzXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdi1mb3I9XCIobGV2ZWwsIGluZGV4KSBpbiBwdW1wTGV2ZWxzXCJcbiAgICAgICAgICAgIDprZXk9XCInYWlyJytpbmRleFwiXG4gICAgICAgICAgICBjbGFzcz1cImxldmVsLWJ0blwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogKHN0YXR1cy5haXJQdW1wTGV2ZWwgfHwgMCkgPT09IGluZGV4IH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwic2V0QWlyUHVtcChpbmRleClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGxldmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cblxuICAgICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLWNhcmRcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLWhlYWRlclwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY29udHJvbC1uYW1lXCIgQGNsaWNrPVwic3RhcnRSZW5hbWUoJ2ZhbicsICfpo47miYcnKVwiPnt7IGdldEN0cmxOYW1lKCdmYW4nLCAn6aOO5omHJykgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJjb250cm9sLXZhbHVlXCI+e3sgcHVtcExldmVsc1tzdGF0dXMuZmFuTGV2ZWwgfHwgMF0gfX08L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJwdW1wLWNvbnRyb2xzXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdi1mb3I9XCIobGV2ZWwsIGluZGV4KSBpbiBwdW1wTGV2ZWxzXCJcbiAgICAgICAgICAgIDprZXk9XCInZmFuJytpbmRleFwiXG4gICAgICAgICAgICBjbGFzcz1cImxldmVsLWJ0blwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogKHN0YXR1cy5mYW5MZXZlbCB8fCAwKSA9PT0gaW5kZXggfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJzZXRGYW4oaW5kZXgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBsZXZlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG5cbiAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1jYXJkXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1oZWFkZXJcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtbmFtZVwiIEBjbGljaz1cInN0YXJ0UmVuYW1lKCdsaWdodCcsICfnga/lhYknKVwiPnt7IGdldEN0cmxOYW1lKCdsaWdodCcsICfnga/lhYknKSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtdmFsdWVcIj57eyBwdW1wTGV2ZWxzW3N0YXR1cy5wd20zTGV2ZWxdIH19PC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwicHVtcC1jb250cm9sc1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHYtZm9yPVwiKGxldmVsLCBpbmRleCkgaW4gcHVtcExldmVsc1wiXG4gICAgICAgICAgICA6a2V5PVwiJ2xpZ2h0JytpbmRleFwiXG4gICAgICAgICAgICBjbGFzcz1cImxldmVsLWJ0blwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogc3RhdHVzLnB3bTNMZXZlbCA9PT0gaW5kZXggfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJzZXRMaWdodChpbmRleClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGxldmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG5cbiAgICA8IS0tIOW8gOWFs+aOp+WItiAtLT5cbiAgICA8dmlldyBjbGFzcz1cImNvbnRyb2wtc2VjdGlvblwiPlxuICAgICAgPHZpZXcgY2xhc3M9XCJzd2l0Y2gtY2FyZFwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cInN3aXRjaC1sYWJlbFwiIEBjbGljaz1cInN0YXJ0UmVuYW1lKCd1dicsICdVVueBrycpXCI+e3sgZ2V0Q3RybE5hbWUoJ3V2JywgJ1VW54GvJykgfX08L3RleHQ+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY3VzdG9tLXN3aXRjaFwiIDpjbGFzcz1cInN0YXR1cy51dkxpZ2h0T24gPyAnb24nIDogJ29mZidcIiBAY2xpY2s9XCJzZXRVVighc3RhdHVzLnV2TGlnaHRPbilcIj5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cImN1c3RvbS1zd2l0Y2gta25vYlwiPjwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuXG4gICAgICA8dmlldyBjbGFzcz1cInN3aXRjaC1jYXJkXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwic3dpdGNoLWxhYmVsXCIgQGNsaWNrPVwic3RhcnRSZW5hbWUoJ3JlbGF5MicsICflpIfnlKjlvIDlhbMnKVwiPnt7IGdldEN0cmxOYW1lKCdyZWxheTInLCAn5aSH55So5byA5YWzJykgfX08L3RleHQ+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY3VzdG9tLXN3aXRjaFwiIDpjbGFzcz1cInN0YXR1cy5yZWxheTJTdGF0ZSA/ICdvbicgOiAnb2ZmJ1wiIEBjbGljaz1cInNldFJlbGF5Mighc3RhdHVzLnJlbGF5MlN0YXRlKVwiPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiY3VzdG9tLXN3aXRjaC1rbm9iXCI+PC92aWV3PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG4gICAgPC92aWV3PlxuXG4gICAgPCEtLSDlrprml7bku7vliqEgLS0+XG4gICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLXNlY3Rpb25cIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPuWumuaXtuS7u+WKoTwvdmlldz5cblxuICAgICAgPHZpZXcgdi1pZj1cInRpbWVycy5sZW5ndGggPT09IDBcIiBjbGFzcz1cImVtcHR5LXRpcFwiPlxuICAgICAgICA8dGV4dD7mmoLml6Dlrprml7bku7vliqHvvIzngrnlh7vkuIvmlrnmjInpkq7mt7vliqA8L3RleHQ+XG4gICAgICA8L3ZpZXc+XG5cbiAgICAgIDx2aWV3IHYtZm9yPVwiKHRpbWVyLCBpbmRleCkgaW4gdGltZXJzXCIgOmtleT1cInRpbWVyLmlkXCIgY2xhc3M9XCJ0aW1lci1jYXJkXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwidGltZXItY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJ0aW1lci1jYXJkLXRvcFwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0aW1lci1uYW1lXCI+e3sgdGltZXIubmFtZSB9fTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGltZXItdGltZVwiPnt7ICgnMCcgKyB0aW1lci5ob3VyKS5zbGljZSgtMikgfX06e3sgKCcwJyArIHRpbWVyLm1pbnV0ZSkuc2xpY2UoLTIpIH19PC90ZXh0PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInRpbWVyLWRlc2NcIj57eyBnZXRUYXNrVHlwZUxhYmVsKHRpbWVyKSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCB2LWlmPVwidGltZXIuZHVyYXRpb24gPiAwICYmIHRpbWVyLmNtZCAhPT0gJ3RyaWdnZXJfc2Vydm8nXCIgY2xhc3M9XCJ0aW1lci1kdXJhdGlvblwiPuaMgee7rSB7eyB0aW1lci5kdXJhdGlvbiAvIDYwIH19IOWIhumSn+WQjuWBnOatojwvdGV4dD5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8dmlldyBjbGFzcz1cInRpbWVyLWNhcmQtcmlnaHRcIj5cbiAgICAgICAgICA8c3dpdGNoIDpjaGVja2VkPVwidGltZXIuZW5hYmxlZFwiIEBjaGFuZ2U9XCJ0b2dnbGVUaW1lcih0aW1lcilcIiBjb2xvcj1cIiMxYTczZThcIiBzdHlsZT1cInRyYW5zZm9ybTogc2NhbGUoMC44KTtcIiAvPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwidGltZXItYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0aW1lci1lZGl0XCIgQGNsaWNrPVwib3BlblRpbWVyRGlhbG9nKHRpbWVyKVwiPue8lui+kTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGltZXItZGVsZXRlXCIgQGNsaWNrPVwiaGFuZGxlRGVsZXRlVGltZXIodGltZXIpXCI+5Yig6ZmkPC90ZXh0PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRpbWVyLWJ0blwiIEBjbGljaz1cIm9wZW5UaW1lckRpYWxvZyhudWxsKVwiPisg5re75Yqg5Lu75YqhPC9idXR0b24+XG4gICAgPC92aWV3PlxuXG4gICAgPCEtLSDlupXpg6jmoI8gLS0+XG4gICAgPHZpZXcgY2xhc3M9XCJib3R0b20tYmFyXCI+XG4gICAgICA8dGV4dCBjbGFzcz1cInJlZnJlc2gtdGltZVwiPuabtOaWsOS6jiB7eyBsYXN0VXBkYXRlVGltZSB9fTwvdGV4dD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJyZWZyZXNoLWJ0blwiIEBjbGljaz1cInJlZnJlc2hTdGF0dXNcIj7ihrsg5Yi35pawPC9idXR0b24+XG4gICAgPC92aWV3PlxuXG4gICAgPCEtLSDlrprml7bku7vliqHlvLnnqpcgLS0+XG4gICAgPHZpZXcgdi1pZj1cInRpbWVyRGlhbG9nVmlzaWJsZVwiIGNsYXNzPVwiZGlhbG9nLW92ZXJsYXlcIiBAY2xpY2s9XCJjbG9zZVRpbWVyRGlhbG9nXCI+XG4gICAgICA8dmlldyBjbGFzcz1cImRpYWxvZy1ib3ggdGltZXItZGlhbG9nXCIgQGNsaWNrLnN0b3A+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+e3sgZWRpdGluZ1RpbWVyID8gJ+e8lui+keS7u+WKoScgOiAn5re75Yqg5Lu75YqhJyB9fTwvdGV4dD5cblxuICAgICAgICA8dGV4dCBjbGFzcz1cInRpbWVyLWZvcm0tbGFiZWxcIj7ku7vliqHlkI3np7A8L3RleHQ+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzPVwiZGlhbG9nLWlucHV0XCJcbiAgICAgICAgICB2LW1vZGVsPVwidGltZXJGb3JtLm5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6L6T5YWl5Lu75Yqh5ZCN56ewXCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCIyMFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0aW1lci1mb3JtLWxhYmVsXCI+5omn6KGM5pe26Ze0PC90ZXh0PlxuICAgICAgICA8dmlldyBjbGFzcz1cInRpbWVyLXBpY2tlci1yb3dcIj5cbiAgICAgICAgICA8cGlja2VyIG1vZGU9XCJtdWx0aVNlbGVjdG9yXCIgOnJhbmdlPVwiW2hvdXJzLCBtaW51dGVzXVwiIEBjaGFuZ2U9XCJvblRpbWVDaGFuZ2VcIj5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidGltZXItcGlja2VyXCI+XG4gICAgICAgICAgICAgIHt7ICgnMCcgKyB0aW1lckZvcm0uaG91cikuc2xpY2UoLTIpIH19IDoge3sgKCcwJyArIHRpbWVyRm9ybS5taW51dGUpLnNsaWNlKC0yKSB9fVxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDwvcGlja2VyPlxuICAgICAgICA8L3ZpZXc+XG5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0aW1lci1mb3JtLWxhYmVsXCI+5Lu75Yqh57G75Z6LPC90ZXh0PlxuICAgICAgICA8dmlldyBjbGFzcz1cInRpbWVyLXBpY2tlci1yb3dcIj5cbiAgICAgICAgICA8cGlja2VyIG1vZGU9XCJzZWxlY3RvclwiIDpyYW5nZT1cInRhc2tUeXBlTGFiZWxzXCIgQGNoYW5nZT1cIm9uVGFza1R5cGVDaGFuZ2VcIj5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidGltZXItcGlja2VyXCI+XG4gICAgICAgICAgICAgIHt7IHRhc2tUeXBlTGFiZWxzW3RpbWVyRm9ybS50eXBlXSB9fVxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDwvcGlja2VyPlxuICAgICAgICA8L3ZpZXc+XG5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0aW1lci1mb3JtLWxhYmVsXCI+5oyB57ut5pe26Ze0PC90ZXh0PlxuICAgICAgICA8dmlldyBjbGFzcz1cInRpbWVyLXBpY2tlci1yb3dcIiB2LWlmPVwidGFza1R5cGVzW3RpbWVyRm9ybS50eXBlXS5jbWQgPT09ICd0cmlnZ2VyX3NlcnZvJ1wiPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwidGltZXItcGlja2VyXCI+PHRleHQgc3R5bGU9XCJjb2xvcjojOTk5XCI+5pegPC90ZXh0Pjwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8dmlldyBjbGFzcz1cInRpbWVyLXBpY2tlci1yb3dcIiB2LWVsc2U+XG4gICAgICAgICAgPHBpY2tlciBtb2RlPVwic2VsZWN0b3JcIiA6cmFuZ2U9XCJkdXJhdGlvbkxhYmVsc1wiIEBjaGFuZ2U9XCJvbkR1cmF0aW9uQ2hhbmdlXCI+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cInRpbWVyLXBpY2tlclwiPlxuICAgICAgICAgICAgICB7eyB0aW1lckZvcm0uZHVyYXRpb25MYWJlbCB9fVxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDwvcGlja2VyPlxuICAgICAgICA8L3ZpZXc+XG5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJkaWFsb2ctYnV0dG9uc1wiIHN0eWxlPVwibWFyZ2luLXRvcDogNDBycHg7XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZy1idG4gZGlhbG9nLWNhbmNlbFwiIEBjbGljaz1cImNsb3NlVGltZXJEaWFsb2dcIj7lj5bmtog8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9nLWJ0biBkaWFsb2ctY29uZmlybVwiIEBjbGljaz1cImNvbmZpcm1UaW1lclwiPuehruiupDwvYnV0dG9uPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG4gICAgPC92aWV3PlxuXG4gICAgPCEtLSDph43lkb3lkI3lvLnnqpcgLS0+XG4gICAgPHZpZXcgdi1pZj1cInJlbmFtZVZpc2libGVcIiBjbGFzcz1cImRpYWxvZy1vdmVybGF5XCIgQGNsaWNrPVwiY2FuY2VsUmVuYW1lXCI+XG4gICAgICA8dmlldyBjbGFzcz1cImRpYWxvZy1ib3hcIiBAY2xpY2suc3RvcD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJkaWFsb2ctdGl0bGVcIj7ph43lkb3lkI08L3RleHQ+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzPVwiZGlhbG9nLWlucHV0XCJcbiAgICAgICAgICB2LW1vZGVsPVwicmVuYW1lVmFsdWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6L6T5YWl5ZCN56ewXCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCIyMFwiXG4gICAgICAgICAgZm9jdXNcbiAgICAgICAgLz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJkaWFsb2ctYnV0dG9uc1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2ctYnRuIGRpYWxvZy1jYW5jZWxcIiBAY2xpY2s9XCJjYW5jZWxSZW5hbWVcIj7lj5bmtog8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9nLWJ0biBkaWFsb2ctY29uZmlybVwiIEBjbGljaz1cImNvbmZpcm1SZW5hbWVcIj7noa7orqQ8L2J1dHRvbj5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cbiAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGdldERldmljZVN0YXR1cywgcmVxdWVzdERldmljZVN0YXR1cywgc2VuZENvbnRyb2xDb21tYW5kLCBnZXRUaW1lcnMsIHNhdmVUaW1lcnMsIGRlbGV0ZVRpbWVyIGFzIGRlbGV0ZVRpbWVyQXBpIH0gZnJvbSAnQC91dGlscy9hcGknXG5pbXBvcnQgeyBnZXRQaG9uZU51bWJlciB9IGZyb20gJ0AvdXRpbHMvc3RvcmFnZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXZpY2VLZXk6ICcnLFxuICAgICAgZGV2aWNlTW9kZWw6ICcnLFxuICAgICAgc3RhdHVzOiB7XG4gICAgICAgIG9ubGluZTogZmFsc2UsXG4gICAgICAgIHB3bTFMZXZlbDogMCxcbiAgICAgICAgcHdtMkxldmVsOiAwLFxuICAgICAgICBwd20zTGV2ZWw6IDAsXG4gICAgICAgIGFpclB1bXBMZXZlbDogMCxcbiAgICAgICAgZmFuTGV2ZWw6IDAsXG4gICAgICAgIHV2TGlnaHRPbjogZmFsc2UsXG4gICAgICAgIHJlbGF5MVN0YXRlOiBmYWxzZSxcbiAgICAgICAgcmVsYXkyU3RhdGU6IGZhbHNlLFxuICAgICAgICBzZXJ2b01vdmluZzogZmFsc2UsXG4gICAgICAgIGFkY1dRVm9sdGFnZTogMCxcbiAgICAgICAgYWRjVGVtcFZvbHRhZ2U6IDAsXG4gICAgICAgIHRkc1ZhbHVlOiAwLFxuICAgICAgICB3YXRlclRlbXBlcmF0dXJlOiAwLFxuICAgICAgICBzeXN0ZW1Qb3dlcmVkOiB0cnVlXG4gICAgICB9LFxuICAgICAgcHVtcExldmVsczogWyflhbMnLCAn5LiA5qGjJywgJ+S6jOahoycsICfkuInmoaMnXSxcbiAgICAgIGxhc3RVcGRhdGVUaW1lOiAnJyxcbiAgICAgIHRpbWVyOiBudWxsLFxuICAgICAgcmVuYW1lVmlzaWJsZTogZmFsc2UsXG4gICAgICByZW5hbWVWYWx1ZTogJycsXG4gICAgICByZW5hbWVUYXJnZXQ6ICcnLFxuICAgICAgcmVuYW1lRGVmYXVsdDogJycsXG4gICAgICB3czogbnVsbCxcbiAgICAgIHdzQ29ubmVjdGVkOiBmYWxzZSxcbiAgICAgIHdzUmVjb25uZWN0VGltZXI6IG51bGwsXG4gICAgICBzZXJ2b1RpbWVyOiBudWxsLFxuICAgICAgc2Vydm9TdGFydFRpbWU6IDAsXG4gICAgICBsYXN0Q2xpY2tUaW1lOiAwLFxuICAgICAgLy8g5a6a5pe25Lu75YqhXG4gICAgICB0aW1lcnM6IFtdLFxuICAgICAgdGltZXJEaWFsb2dWaXNpYmxlOiBmYWxzZSxcbiAgICAgIGVkaXRpbmdUaW1lcjogbnVsbCxcbiAgICAgIHRpbWVyRm9ybToge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBob3VyOiA4LFxuICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgIHR5cGU6IDAsXG4gICAgICAgIGNtZDogJ3RyaWdnZXJfc2Vydm8nLFxuICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgZHVyYXRpb25MYWJlbDogJ+S4jeWBnOatoidcbiAgICAgIH0sXG4gICAgICBob3VyczogQXJyYXkuZnJvbSh7IGxlbmd0aDogMjQgfSwgKF8sIGkpID0+ICgnMCcgKyBpKS5zbGljZSgtMikpLFxuICAgICAgbWludXRlczogQXJyYXkuZnJvbSh7IGxlbmd0aDogNjAgfSwgKF8sIGkpID0+ICgnMCcgKyBpKS5zbGljZSgtMikpLFxuICAgICAgdGFza1R5cGVzOiBbXG4gICAgICAgIHsgbGFiZWw6ICflloLpsbzvvIjoiLXmnLrvvIknLCBjbWQ6ICd0cmlnZ2VyX3NlcnZvJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICB7IGxhYmVsOiAn5o2i5rC0Meaho++8iOawtOaztTEgbGV2ZWw9Me+8iScsIGNtZDogJ3NldF9wdW1wJywgcGFyYW1zOiB7IHB1bXA6IDEsIGxldmVsOiAxIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+aNouawtDLmoaPvvIjmsLTms7UxIGxldmVsPTLvvIknLCBjbWQ6ICdzZXRfcHVtcCcsIHBhcmFtczogeyBwdW1wOiAxLCBsZXZlbDogMiB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICfmjaLmsLQz5qGj77yI5rC05rO1MSBsZXZlbD0z77yJJywgY21kOiAnc2V0X3B1bXAnLCBwYXJhbXM6IHsgcHVtcDogMSwgbGV2ZWw6IDMgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn5Yqg5rCUMeaho++8iOawlOaztSBsZXZlbD0x77yJJywgY21kOiAnc2V0X2Fpcl9wdW1wJywgcGFyYW1zOiB7IGxldmVsOiAxIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+WKoOawlDLmoaPvvIjmsJTms7UgbGV2ZWw9Mu+8iScsIGNtZDogJ3NldF9haXJfcHVtcCcsIHBhcmFtczogeyBsZXZlbDogMiB9IH0sXG4gICAgICAgIHsgbGFiZWw6ICfliqDmsJQz5qGj77yI5rCU5rO1IGxldmVsPTPvvIknLCBjbWQ6ICdzZXRfYWlyX3B1bXAnLCBwYXJhbXM6IHsgbGV2ZWw6IDMgfSB9LFxuICAgICAgICB7IGxhYmVsOiAn5byA54GvMeaho++8iOeBr+adoSBsZXZlbD0x77yJJywgY21kOiAnc2V0X2xpZ2h0JywgcGFyYW1zOiB7IGxldmVsOiAxIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+W8gOeBrzLmoaPvvIhsZXZlbD0y77yJJywgY21kOiAnc2V0X2xpZ2h0JywgcGFyYW1zOiB7IGxldmVsOiAyIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+W8gOeBrzPmoaPvvIhsZXZlbD0z77yJJywgY21kOiAnc2V0X2xpZ2h0JywgcGFyYW1zOiB7IGxldmVsOiAzIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+mjjuaJhzHmoaMnLCBjbWQ6ICdzZXRfZmFuJywgcGFyYW1zOiB7IGxldmVsOiAxIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+mjjuaJhzLmoaMnLCBjbWQ6ICdzZXRfZmFuJywgcGFyYW1zOiB7IGxldmVsOiAyIH0gfSxcbiAgICAgICAgeyBsYWJlbDogJ+mjjuaJhzPmoaMnLCBjbWQ6ICdzZXRfZmFuJywgcGFyYW1zOiB7IGxldmVsOiAzIH0gfVxuICAgICAgXSxcbiAgICAgIGR1cmF0aW9uT3B0aW9uczogW1xuICAgICAgICB7IGxhYmVsOiAn5LiN5YGc5q2iJywgdmFsdWU6IDAgfSxcbiAgICAgICAgeyBsYWJlbDogJzHliIbpkp8nLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IGxhYmVsOiAnNeWIhumSnycsIHZhbHVlOiA1IH0sXG4gICAgICAgIHsgbGFiZWw6ICcxMOWIhumSnycsIHZhbHVlOiAxMCB9LFxuICAgICAgICB7IGxhYmVsOiAnMzDliIbpkp8nLCB2YWx1ZTogMzAgfSxcbiAgICAgICAgeyBsYWJlbDogJzYw5YiG6ZKfJywgdmFsdWU6IDYwIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdGFza1R5cGVMYWJlbHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrVHlwZXMubWFwKHQgPT4gdC5sYWJlbClcbiAgICB9LFxuICAgIGR1cmF0aW9uTGFiZWxzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHVyYXRpb25PcHRpb25zLm1hcChkID0+IGQubGFiZWwpXG4gICAgfSxcbiAgICB3YXRlclF1YWxpdHlUZXh0KCkge1xuICAgICAgY29uc3QgdiA9IHRoaXMuc3RhdHVzLnRkc1ZhbHVlIHx8IDBcbiAgICAgIGlmICh2IDwgMTUwKSByZXR1cm4gJ+S8mCdcbiAgICAgIGlmICh2IDwgMjAwKSByZXR1cm4gJ+iJrydcbiAgICAgIGlmICh2IDwgNDAwKSByZXR1cm4gJ+S4rSdcbiAgICAgIHJldHVybiAn5beuJ1xuICAgIH0sXG4gICAgd2F0ZXJRdWFsaXR5Q2xhc3MoKSB7XG4gICAgICBjb25zdCB2ID0gdGhpcy5zdGF0dXMudGRzVmFsdWUgfHwgMFxuICAgICAgaWYgKHYgPCAxNTApIHJldHVybiAnd3EtZXhjZWxsZW50J1xuICAgICAgaWYgKHYgPCAyMDApIHJldHVybiAnd3EtZ29vZCdcbiAgICAgIGlmICh2IDwgNDAwKSByZXR1cm4gJ3dxLWZhaXInXG4gICAgICByZXR1cm4gJ3dxLXBvb3InXG4gICAgfVxuICB9LFxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIHRoaXMuZGV2aWNlS2V5ID0gb3B0aW9ucy5kZXZpY2Vfa2V5IHx8ICcnXG4gICAgaWYgKCF0aGlzLmRldmljZUtleSkge1xuICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH5Y+C5pWw6ZSZ6K+vJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmxvYWRTdGF0dXMoKVxuICAgIHRoaXMubG9hZFRpbWVycygpXG5cbiAgICAvLyDov57mjqUgV2ViU29ja2V0IOaOpeaUtuWunuaXtuaOqOmAgVxuICAgIHRoaXMuY29ubmVjdFdTKClcblxuICAgIC8vIOi/m+WFpemhtemdouiHquWKqOivt+axguacgOaWsOeKtuaAgVxuICAgIHJlcXVlc3REZXZpY2VTdGF0dXModGhpcy5kZXZpY2VLZXkpLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKVxuICAgIH0pXG5cbiAgICAvLyAxMOenkui9ruivolxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRTdGF0dXMoKVxuICAgICAgdGhpcy5jaGVja1NlcnZvVGltZW91dCgpXG4gICAgfSwgMTAwMDApXG5cbiAgICAvLyDoiLXmnLrotoXml7bmo4DmtYtcbiAgICB0aGlzLnNlcnZvVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrU2Vydm9UaW1lb3V0KClcbiAgICB9LCAyMDAwKVxuICB9LFxuICBvblVubG9hZCgpIHtcbiAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5zZXJ2b1RpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc2Vydm9UaW1lcilcbiAgICB9XG4gICAgdGhpcy5kaXNjb25uZWN0V1MoKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0Q3RybE5hbWUodGFyZ2V0LCBkZWZhdWx0TmFtZSkge1xuICAgICAgY29uc3Qga2V5ID0gJ2N0cmxfbmFtZV8nICsgdGhpcy5kZXZpY2VLZXkgKyAnXycgKyB0YXJnZXRcbiAgICAgIGNvbnN0IG5hbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoa2V5KVxuICAgICAgcmV0dXJuIG5hbWUgfHwgZGVmYXVsdE5hbWVcbiAgICB9LFxuXG4gICAgY2hlY2tSYXRlTGltaXQoKSB7XG4gICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICBpZiAobm93IC0gdGhpcy5sYXN0Q2xpY2tUaW1lIDwgMTAwMCkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfmk43kvZzov4flv6vvvIzmhaLngrnlk58nLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RDbGlja1RpbWUgPSBub3dcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcblxuICAgIHN0YXJ0UmVuYW1lKHRhcmdldCwgZGVmYXVsdE5hbWUpIHtcbiAgICAgIHRoaXMucmVuYW1lVGFyZ2V0ID0gdGFyZ2V0XG4gICAgICB0aGlzLnJlbmFtZURlZmF1bHQgPSBkZWZhdWx0TmFtZVxuICAgICAgdGhpcy5yZW5hbWVWYWx1ZSA9IHRoaXMuZ2V0Q3RybE5hbWUodGFyZ2V0LCBkZWZhdWx0TmFtZSlcbiAgICAgIGlmICh0aGlzLnJlbmFtZVZhbHVlID09PSBkZWZhdWx0TmFtZSkge1xuICAgICAgICB0aGlzLnJlbmFtZVZhbHVlID0gJydcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuYW1lVmlzaWJsZSA9IHRydWVcbiAgICB9LFxuXG4gICAgY2FuY2VsUmVuYW1lKCkge1xuICAgICAgdGhpcy5yZW5hbWVWaXNpYmxlID0gZmFsc2VcbiAgICAgIHRoaXMucmVuYW1lVGFyZ2V0ID0gJydcbiAgICAgIHRoaXMucmVuYW1lVmFsdWUgPSAnJ1xuICAgIH0sXG5cbiAgICBjb25maXJtUmVuYW1lKCkge1xuICAgICAgaWYgKCF0aGlzLnJlbmFtZVRhcmdldCkgcmV0dXJuXG4gICAgICBjb25zdCBrZXkgPSAnY3RybF9uYW1lXycgKyB0aGlzLmRldmljZUtleSArICdfJyArIHRoaXMucmVuYW1lVGFyZ2V0XG4gICAgICBpZiAodGhpcy5yZW5hbWVWYWx1ZSAmJiB0aGlzLnJlbmFtZVZhbHVlLnRyaW0oKSkge1xuICAgICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoa2V5LCB0aGlzLnJlbmFtZVZhbHVlLnRyaW0oKSlcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6YeN5ZG95ZCN5oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoa2V5KVxuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICflt7LmgaLlpI3pu5jorqTlkI3np7AnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FuY2VsUmVuYW1lKClcbiAgICB9LFxuXG4gICAgLy8gPT09PT0gV2ViU29ja2V0IOWunuaXtuaOqOmAgSA9PT09PVxuICAgIGdldFdTQmFzZVVSTCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGB3czovLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9YFxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgcmV0dXJuICd3czovLzExMi4xMjQuMTA3LjE1OTo3OTY1J1xuICAgIH0sXG5cbiAgICBjb25uZWN0V1MoKSB7XG4gICAgICBpZiAodGhpcy53cykgcmV0dXJuXG4gICAgICBjb25zdCBwaG9uZSA9IGdldFBob25lTnVtYmVyKClcbiAgICAgIGlmICghcGhvbmUpIHJldHVyblxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5nZXRXU0Jhc2VVUkwoKVxuICAgICAgICB0aGlzLndzID0gdW5pLmNvbm5lY3RTb2NrZXQoe1xuICAgICAgICAgIHVybDogYCR7YmFzZVVybH0vd3MvY2xpZW50YCxcbiAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7fVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMud3Mub25PcGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLndzQ29ubmVjdGVkID0gdHJ1ZVxuICAgICAgICAgIHVuaS5zZW5kU29ja2V0TWVzc2FnZSh7XG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdhdXRoJywgcGhvbmUgfSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIHVuaS5zZW5kU29ja2V0TWVzc2FnZSh7XG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdzdWJzY3JpYmUnLCBkZXZpY2Vfa2V5OiB0aGlzLmRldmljZUtleSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy53cy5vbk1lc3NhZ2UoKHJlcykgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnZGV2aWNlX3N0YXR1cycgJiYgbXNnLmRldmljZV9rZXkgPT09IHRoaXMuZGV2aWNlS2V5KSB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzRnJvbVdTKG1zZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMud3Mub25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy53c0Nvbm5lY3RlZCA9IGZhbHNlXG4gICAgICAgICAgdGhpcy53cyA9IG51bGxcbiAgICAgICAgICBpZiAoIXRoaXMud3NSZWNvbm5lY3RUaW1lcikge1xuICAgICAgICAgICAgdGhpcy53c1JlY29ubmVjdFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMud3NSZWNvbm5lY3RUaW1lciA9IG51bGxcbiAgICAgICAgICAgICAgdGhpcy5jb25uZWN0V1MoKVxuICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy53cy5vbkVycm9yKCgpID0+IHtcbiAgICAgICAgICB0aGlzLndzQ29ubmVjdGVkID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldOi/nuaOpeWksei0pe+8jOS9v+eUqEhUVFDova7or6InLCBlKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkaXNjb25uZWN0V1MoKSB7XG4gICAgICBpZiAodGhpcy53c1JlY29ubmVjdFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLndzUmVjb25uZWN0VGltZXIpXG4gICAgICAgIHRoaXMud3NSZWNvbm5lY3RUaW1lciA9IG51bGxcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLndzKSB7XG4gICAgICAgIHRoaXMud3MuY2xvc2UoKVxuICAgICAgICB0aGlzLndzID0gbnVsbFxuICAgICAgICB0aGlzLndzQ29ubmVjdGVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlU3RhdHVzRnJvbVdTKG1zZykge1xuICAgICAgY29uc3QgcyA9IG1zZy5zdGF0dXMgfHwge31cbiAgICAgIGNvbnN0IG1vdmluZyA9IHMuc2Vydm9Nb3ZpbmcgfHwgZmFsc2VcbiAgICAgIGlmIChtb3ZpbmcgJiYgIXRoaXMuc2Vydm9TdGFydFRpbWUpIHtcbiAgICAgICAgdGhpcy5zZXJ2b1N0YXJ0VGltZSA9IERhdGUubm93KClcbiAgICAgIH1cbiAgICAgIGlmICghbW92aW5nKSB7XG4gICAgICAgIHRoaXMuc2Vydm9TdGFydFRpbWUgPSAwXG4gICAgICB9XG4gICAgICB0aGlzLnN0YXR1cyA9IHtcbiAgICAgICAgb25saW5lOiBtc2cub25saW5lIHx8IGZhbHNlLFxuICAgICAgICBwd20xTGV2ZWw6IHMucHdtMUxldmVsIHx8IDAsXG4gICAgICAgIHB3bTJMZXZlbDogcy5wd20yTGV2ZWwgfHwgMCxcbiAgICAgICAgcHdtM0xldmVsOiBzLnB3bTNMZXZlbCB8fCAwLFxuICAgICAgICBhaXJQdW1wTGV2ZWw6IHMuYWlyUHVtcExldmVsIHx8IDAsXG4gICAgICAgIGZhbkxldmVsOiBzLmZhbkxldmVsIHx8IDAsXG4gICAgICAgIHV2TGlnaHRPbjogcy51dkxpZ2h0T24gfHwgZmFsc2UsXG4gICAgICAgIHJlbGF5MVN0YXRlOiBzLnJlbGF5MVN0YXRlIHx8IGZhbHNlLFxuICAgICAgICByZWxheTJTdGF0ZTogcy5yZWxheTJTdGF0ZSB8fCBmYWxzZSxcbiAgICAgICAgc2Vydm9Nb3Zpbmc6IHMuc2Vydm9Nb3ZpbmcgfHwgZmFsc2UsXG4gICAgICAgIGFkY1dRVm9sdGFnZTogcy5hZGNXUVZvbHRhZ2UgfHwgMCxcbiAgICAgICAgYWRjVGVtcFZvbHRhZ2U6IHMuYWRjVGVtcFZvbHRhZ2UgfHwgMCxcbiAgICAgICAgdGRzVmFsdWU6IHMudGRzVmFsdWUgfHwgMCxcbiAgICAgICAgd2F0ZXJUZW1wZXJhdHVyZTogcy53YXRlclRlbXBlcmF0dXJlIHx8IDAsXG4gICAgICAgIHN5c3RlbVBvd2VyZWQ6IHMuc3lzdGVtUG93ZXJlZCAhPT0gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdFVwZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpXG4gICAgfSxcblxuICAgIGFzeW5jIGxvYWRTdGF0dXMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXREZXZpY2VTdGF0dXModGhpcy5kZXZpY2VLZXkpXG4gICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMuZGV2aWNlTW9kZWwgPSByZXMubW9kZWwgfHwgJydcbiAgICAgICAgICBjb25zdCBzID0gcmVzLnN0YXR1cyB8fCB7fVxuICAgICAgICAgIGNvbnN0IG1vdmluZyA9IHMuc2Vydm9Nb3ZpbmcgfHwgZmFsc2VcbiAgICAgICAgICBpZiAobW92aW5nICYmICF0aGlzLnNlcnZvU3RhcnRUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIW1vdmluZykge1xuICAgICAgICAgICAgdGhpcy5zZXJ2b1N0YXJ0VGltZSA9IDBcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICAgICAgICBvbmxpbmU6IHJlcy5vbmxpbmUgfHwgZmFsc2UsXG4gICAgICAgICAgICBwd20xTGV2ZWw6IHMucHdtMUxldmVsIHx8IDAsXG4gICAgICAgICAgICBwd20yTGV2ZWw6IHMucHdtMkxldmVsIHx8IDAsXG4gICAgICAgICAgICBwd20zTGV2ZWw6IHMucHdtM0xldmVsIHx8IDAsXG4gICAgICAgICAgICBhaXJQdW1wTGV2ZWw6IHMuYWlyUHVtcExldmVsIHx8IDAsXG4gICAgICAgICAgICBmYW5MZXZlbDogcy5mYW5MZXZlbCB8fCAwLFxuICAgICAgICAgICAgdXZMaWdodE9uOiBzLnV2TGlnaHRPbiB8fCBmYWxzZSxcbiAgICAgICAgICAgIHJlbGF5MVN0YXRlOiBzLnJlbGF5MVN0YXRlIHx8IGZhbHNlLFxuICAgICAgICAgICAgcmVsYXkyU3RhdGU6IHMucmVsYXkyU3RhdGUgfHwgZmFsc2UsXG4gICAgICAgICAgICBzZXJ2b01vdmluZzogcy5zZXJ2b01vdmluZyB8fCBmYWxzZSxcbiAgICAgICAgICAgIGFkY1dRVm9sdGFnZTogcy5hZGNXUVZvbHRhZ2UgfHwgMCxcbiAgICAgICAgICAgIGFkY1RlbXBWb2x0YWdlOiBzLmFkY1RlbXBWb2x0YWdlIHx8IDAsXG4gICAgICAgICAgICB0ZHNWYWx1ZTogcy50ZHNWYWx1ZSB8fCAwLFxuICAgICAgICAgICAgd2F0ZXJUZW1wZXJhdHVyZTogcy53YXRlclRlbXBlcmF0dXJlIHx8IDAsXG4gICAgICAgICAgICBzeXN0ZW1Qb3dlcmVkOiBzLnN5c3RlbVBvd2VyZWQgIT09IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubGFzdFVwZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLm9ubGluZSA9IGZhbHNlXG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlZnJlc2hTdGF0dXMoKSB7XG4gICAgICB1bmkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+WIt+aWsOS4rS4uLicgfSlcbiAgICAgIHJlcXVlc3REZXZpY2VTdGF0dXModGhpcy5kZXZpY2VLZXkpLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRTdGF0dXMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgODAwKVxuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRTdGF0dXMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgYXN5bmMgc2V0UHVtcChwdW1wLCBsZXZlbCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/JywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuXG4gICAgICB0aGlzLnN0YXR1c1tgcHdtJHtwdW1wfUxldmVsYF0gPSBsZXZlbFxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfcHVtcCcsIHsgcHVtcCwgbGV2ZWwgfSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKVxuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruaIkOWKnycsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgc2V0TGlnaHQobGV2ZWwpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cblxuICAgICAgdGhpcy5zdGF0dXMucHdtM0xldmVsID0gbGV2ZWxcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCAnc2V0X2xpZ2h0JywgeyBsZXZlbCB9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiByZXMubWVzc2FnZSB8fCAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBzZXRBaXJQdW1wKGxldmVsKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSk7IHJldHVybiB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG4gICAgICB0aGlzLnN0YXR1cy5haXJQdW1wTGV2ZWwgPSBsZXZlbFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCAnc2V0X2Fpcl9wdW1wJywgeyBsZXZlbCB9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHsgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKTsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pIH1cbiAgICAgICAgZWxzZSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgICB9IGNhdGNoIChlKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgfSxcblxuICAgIGFzeW5jIHNldEZhbihsZXZlbCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUpIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/JywgaWNvbjogJ25vbmUnIH0pOyByZXR1cm4gfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuICAgICAgdGhpcy5zdGF0dXMuZmFuTGV2ZWwgPSBsZXZlbFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCAnc2V0X2ZhbicsIHsgbGV2ZWwgfSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3RhdHVzKCksIDgwMCk7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruaIkOWKnycsIGljb246ICdzdWNjZXNzJyB9KSB9XG4gICAgICAgIGVsc2UgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgICAgfSBjYXRjaCAoZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgIH0sXG5cbiAgICBhc3luYyBzZXRVVihvbikge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUpIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/JywgaWNvbjogJ25vbmUnIH0pOyByZXR1cm4gfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuICAgICAgdGhpcy5zdGF0dXMudXZMaWdodE9uID0gb25cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3NldF91dicsIHsgb24gfSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3RhdHVzKCksIDgwMCkgfVxuICAgICAgICBlbHNlIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiByZXMubWVzc2FnZSB8fCAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgc2V0UmVsYXkyKG9uKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSk7IHJldHVybiB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG4gICAgICB0aGlzLnN0YXR1cy5yZWxheTJTdGF0ZSA9IG9uXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICdzZXRfcmVsYXkyJywgeyBvbiB9KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHsgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKSB9XG4gICAgICAgIGVsc2UgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgICAgfSBjYXRjaCAoZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgIH0sXG5cbiAgICBhc3luYyB0cmlnZ2VyU2Vydm8oKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSB8fCB0aGlzLnN0YXR1cy5zZXJ2b01vdmluZykge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur/miJboiLXmnLrov5DooYzkuK0nLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3RyaWdnZXJfc2Vydm8nLCB7fSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXMuc2Vydm9Nb3ZpbmcgPSB0cnVlXG4gICAgICAgICAgdGhpcy5zZXJ2b1N0YXJ0VGltZSA9IERhdGUubm93KClcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICflloLpo5/lt7LlkK/liqgnLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICflkK/liqjlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5ZCv5Yqo5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfSxcblxuICAgIGNoZWNrU2Vydm9UaW1lb3V0KCkge1xuICAgICAgaWYgKHRoaXMuc3RhdHVzLnNlcnZvTW92aW5nICYmIHRoaXMuc2Vydm9TdGFydFRpbWUgPiAwKSB7XG4gICAgICAgIGNvbnN0IGVsYXBzZWQgPSAoRGF0ZS5ub3coKSAtIHRoaXMuc2Vydm9TdGFydFRpbWUpIC8gMTAwMFxuICAgICAgICBpZiAoZWxhcHNlZCA+IDgpIHtcbiAgICAgICAgICB0aGlzLnN0YXR1cy5zZXJ2b01vdmluZyA9IGZhbHNlXG4gICAgICAgICAgdGhpcy5zZXJ2b1N0YXJ0VGltZSA9IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyB0b2dnbGVQb3dlcigpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNQb3dlcmVkID0gdGhpcy5zdGF0dXMuc3lzdGVtUG93ZXJlZFxuICAgICAgY29uc3QgY21kID0gaXNQb3dlcmVkID8gJ3Bvd2VyX29mZicgOiAncG93ZXJfb24nXG4gICAgICBjb25zdCBjb25maXJtVGV4dCA9IGlzUG93ZXJlZCA/ICfnoa7lrpropoHlhbPmnLrlkJfvvJ9cXG7lhbPmnLrlkI7orr7lpIfkv53mjIHnvZHnu5zov57mjqXvvIzlj6/ov5znqIvlvIDmnLrjgIInIDogJ+ehruWumuimgeW8gOacuuWQl++8nydcblxuICAgICAgdW5pLnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn56Gu6K6k5pON5L2cJyxcbiAgICAgICAgY29udGVudDogY29uZmlybVRleHQsXG4gICAgICAgIHN1Y2Nlc3M6IChtb2RhbFJlcykgPT4ge1xuICAgICAgICAgIGlmICghbW9kYWxSZXMuY29uZmlybSkgcmV0dXJuXG4gICAgICAgICAgdGhpcy5leGVjdXRlUG93ZXJDbWQoY21kKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBhc3luYyBleGVjdXRlUG93ZXJDbWQoY21kKSB7XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksIGNtZCwge30pXG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMuc3RhdHVzLnN5c3RlbVBvd2VyZWQgPSBjbWQgPT09ICdwb3dlcl9vbidcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IGNtZCA9PT0gJ3Bvd2VyX29uJyA/ICflvIDmnLrmiJDlip8nIDogJ+WFs+acuuaIkOWKnycsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3RhdHVzKCksIDEwMDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiByZXN1bHQubWVzc2FnZSB8fCAn5pON5L2c5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+aTjeS9nOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyA9PT09PSDlrprml7bku7vliqEgPT09PT1cbiAgICBnZXRUYXNrVHlwZUxhYmVsKHRpbWVyKSB7XG4gICAgICBjb25zdCB0eXBlID0gdGhpcy50YXNrVHlwZXMuZmluZCh0ID0+IHQuY21kID09PSB0aW1lci5jbWQgJiYgSlNPTi5zdHJpbmdpZnkodC5wYXJhbXMpID09PSBKU09OLnN0cmluZ2lmeSh0aW1lci5wYXJhbXMpKVxuICAgICAgcmV0dXJuIHR5cGUgPyB0eXBlLmxhYmVsIDogJ+acquefpeS7u+WKoSdcbiAgICB9LFxuXG4gICAgYXN5bmMgbG9hZFRpbWVycygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldFRpbWVycyh0aGlzLmRldmljZUtleSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzICYmIHJlcy50aW1lcnMpIHtcbiAgICAgICAgICB0aGlzLnRpbWVycyA9IHJlcy50aW1lcnNcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy50aW1lcnMgPSBbXVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvcGVuVGltZXJEaWFsb2codGltZXIpIHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICB0aGlzLmVkaXRpbmdUaW1lciA9IHRpbWVyXG4gICAgICAgIGNvbnN0IHR5cGVJbmRleCA9IHRoaXMudGFza1R5cGVzLmZpbmRJbmRleCh0ID0+IHQuY21kID09PSB0aW1lci5jbWQgJiYgSlNPTi5zdHJpbmdpZnkodC5wYXJhbXMpID09PSBKU09OLnN0cmluZ2lmeSh0aW1lci5wYXJhbXMpKVxuICAgICAgICBjb25zdCBkdXIgPSB0aGlzLmR1cmF0aW9uT3B0aW9ucy5maW5kKGQgPT4gZC52YWx1ZSA9PT0gKHRpbWVyLmR1cmF0aW9uIC8gNjApKVxuICAgICAgICB0aGlzLnRpbWVyRm9ybSA9IHtcbiAgICAgICAgICBpZDogdGltZXIuaWQsXG4gICAgICAgICAgbmFtZTogdGltZXIubmFtZSxcbiAgICAgICAgICBob3VyOiB0aW1lci5ob3VyLFxuICAgICAgICAgIG1pbnV0ZTogdGltZXIubWludXRlLFxuICAgICAgICAgIHR5cGU6IHR5cGVJbmRleCA+PSAwID8gdHlwZUluZGV4IDogMCxcbiAgICAgICAgICBjbWQ6IHRpbWVyLmNtZCxcbiAgICAgICAgICBwYXJhbXM6IHRpbWVyLnBhcmFtcyxcbiAgICAgICAgICBkdXJhdGlvbjogdGltZXIuZHVyYXRpb24gLyA2MCxcbiAgICAgICAgICBkdXJhdGlvbkxhYmVsOiBkdXIgPyBkdXIubGFiZWwgOiAn5LiN5YGc5q2iJ1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVkaXRpbmdUaW1lciA9IG51bGxcbiAgICAgICAgdGhpcy50aW1lckZvcm0gPSB7XG4gICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgIGhvdXI6IDgsXG4gICAgICAgICAgbWludXRlOiAwLFxuICAgICAgICAgIHR5cGU6IDAsXG4gICAgICAgICAgY21kOiAndHJpZ2dlcl9zZXJ2bycsXG4gICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICBkdXJhdGlvbkxhYmVsOiAn5LiN5YGc5q2iJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnRpbWVyRGlhbG9nVmlzaWJsZSA9IHRydWVcbiAgICB9LFxuXG4gICAgY2xvc2VUaW1lckRpYWxvZygpIHtcbiAgICAgIHRoaXMudGltZXJEaWFsb2dWaXNpYmxlID0gZmFsc2VcbiAgICAgIHRoaXMuZWRpdGluZ1RpbWVyID0gbnVsbFxuICAgIH0sXG5cbiAgICBvblRpbWVDaGFuZ2UoZSkge1xuICAgICAgY29uc3QgdmFscyA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLnRpbWVyRm9ybS5ob3VyID0gcGFyc2VJbnQodmFsc1swXSlcbiAgICAgIHRoaXMudGltZXJGb3JtLm1pbnV0ZSA9IHBhcnNlSW50KHZhbHNbMV0pXG4gICAgfSxcblxuICAgIG9uVGFza1R5cGVDaGFuZ2UoZSkge1xuICAgICAgY29uc3QgaWR4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMudGltZXJGb3JtLnR5cGUgPSBpZHhcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRhc2tUeXBlc1tpZHhdXG4gICAgICB0aGlzLnRpbWVyRm9ybS5jbWQgPSB0eXBlLmNtZFxuICAgICAgdGhpcy50aW1lckZvcm0ucGFyYW1zID0geyAuLi50eXBlLnBhcmFtcyB9XG4gICAgfSxcblxuICAgIG9uRHVyYXRpb25DaGFuZ2UoZSkge1xuICAgICAgY29uc3QgaWR4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIGNvbnN0IG9wdCA9IHRoaXMuZHVyYXRpb25PcHRpb25zW2lkeF1cbiAgICAgIHRoaXMudGltZXJGb3JtLmR1cmF0aW9uID0gb3B0LnZhbHVlXG4gICAgICB0aGlzLnRpbWVyRm9ybS5kdXJhdGlvbkxhYmVsID0gb3B0LmxhYmVsXG4gICAgfSxcblxuICAgIGNvbmZpcm1UaW1lcigpIHtcbiAgICAgIGlmICghdGhpcy50aW1lckZvcm0ubmFtZS50cmltKCkpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K+36L6T5YWl5Lu75Yqh5ZCN56ewJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aW1lckRhdGEgPSB7XG4gICAgICAgIGlkOiB0aGlzLnRpbWVyRm9ybS5pZCB8fCAndGltZXJfJyArIERhdGUubm93KCkgKyAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNiksXG4gICAgICAgIG5hbWU6IHRoaXMudGltZXJGb3JtLm5hbWUudHJpbSgpLFxuICAgICAgICBob3VyOiB0aGlzLnRpbWVyRm9ybS5ob3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMudGltZXJGb3JtLm1pbnV0ZSxcbiAgICAgICAgdHlwZTogdGhpcy50aW1lckZvcm0udHlwZSxcbiAgICAgICAgY21kOiB0aGlzLnRpbWVyRm9ybS5jbWQsXG4gICAgICAgIHBhcmFtczogdGhpcy50aW1lckZvcm0ucGFyYW1zLFxuICAgICAgICBkdXJhdGlvbjogdGhpcy50aW1lckZvcm0uZHVyYXRpb24gKiA2MCxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lZGl0aW5nVGltZXIpIHtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy50aW1lcnMuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGhpcy5lZGl0aW5nVGltZXIuaWQpXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgIHRoaXMudGltZXJzW2lkeF0gPSB0aW1lckRhdGFcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aW1lcnMucHVzaCh0aW1lckRhdGEpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VUaW1lckRpYWxvZygpXG4gICAgICB0aGlzLnNhdmVBbGxUaW1lcnMoKVxuICAgIH0sXG5cbiAgICBhc3luYyBoYW5kbGVEZWxldGVUaW1lcih0aW1lcikge1xuICAgICAgdW5pLnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn56Gu6K6k5Yig6ZmkJyxcbiAgICAgICAgY29udGVudDogJ+ehruWumuimgeWIoOmZpOWumuaXtuS7u+WKoVwiJyArIHRpbWVyLm5hbWUgKyAnXCLlkJfvvJ8nLFxuICAgICAgICBzdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWxldGVUaW1lckFwaSh0aGlzLmRldmljZUtleSwgdGltZXIuaWQpXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXJzID0gdGhpcy50aW1lcnMuZmlsdGVyKHQgPT4gdC5pZCAhPT0gdGltZXIuaWQpXG4gICAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiByZXN1bHQubWVzc2FnZSB8fCAn5Yig6Zmk5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5Yig6Zmk5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICB0b2dnbGVUaW1lcih0aW1lcikge1xuICAgICAgdGltZXIuZW5hYmxlZCA9ICF0aW1lci5lbmFibGVkXG4gICAgICB0aGlzLnNhdmVBbGxUaW1lcnMoKVxuICAgIH0sXG5cbiAgICBhc3luYyBzYXZlQWxsVGltZXJzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgc2F2ZVRpbWVycyh0aGlzLmRldmljZUtleSwgdGhpcy50aW1lcnMpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfkv53lrZjlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5jb250cm9sLXBhZ2Uge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgcGFkZGluZy1ib3R0b206IDEyMHJweDtcbn1cblxuLnN0YXR1cy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWE3M2U4IDAlLCAjMGQ0N2ExIDEwMCUpO1xuICBwYWRkaW5nOiA0MHJweDtcbiAgY29sb3I6ICNmZmY7XG5cbiAgJi5vZmZsaW5lIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY2IDAlLCAjMzMzIDEwMCUpO1xuICB9XG59XG5cbi5zdGF0dXMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZ2FwOiAyMHJweDtcbn1cblxuLnN0YXR1cy1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBnYXA6IDIwcnB4O1xufVxuXG4uc3RhdHVzLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC5pbmRpY2F0b3ItZG90IHtcbiAgICB3aWR0aDogMTZycHg7XG4gICAgaGVpZ2h0OiAxNnJweDtcbiAgICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycnB4O1xuXG4gICAgLm9mZmxpbmUgJiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICAgIH1cbiAgfVxuXG4gIHRleHQge1xuICAgIGZvbnQtc2l6ZTogMjZycHg7XG4gIH1cbn1cblxuLmRldmljZS1rZXkge1xuICBmb250LXNpemU6IDMycnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLm1vZGVsLWluZm8taGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnJweDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi8vID09PT09IOS8oOaEn+WZqOS4pOWIlyA9PT09PVxuLnNlbnNvci1zZWN0aW9uIHtcbiAgcGFkZGluZzogMjBycHggNDBycHg7XG59XG5cbi5zZW5zb3ItZ3JpZC50d28tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2Vuc29yLWl0ZW0ge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHJweDtcbiAgcGFkZGluZzogMjRycHggMTBycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAxMHJweDtcbiAgYm94LXNoYWRvdzogMCAycnB4IDEycnB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbi5zZW5zb3ItaXRlbTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2Vuc29yLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnNlbnNvci1pY29uIHtcbiAgZm9udC1zaXplOiA0OHJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJycHg7XG59XG5cbi5zZW5zb3ItbGFiZWwge1xuICBmb250LXNpemU6IDI0cnB4O1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWJvdHRvbTogOHJweDtcbn1cblxuLnNlbnNvci12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzZycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbn1cblxuLndxLXRhZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyMnJweDtcbiAgcGFkZGluZzogNHJweCAxMnJweDtcbiAgYm9yZGVyLXJhZGl1czogOHJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ud3EtZXhjZWxsZW50IHsgYmFja2dyb3VuZDogI2U4ZjVlOTsgY29sb3I6ICMyZTdkMzI7IH1cbi53cS1nb29kIHsgYmFja2dyb3VuZDogI2UzZjJmZDsgY29sb3I6ICMxNTY1YzA7IH1cbi53cS1mYWlyIHsgYmFja2dyb3VuZDogI2ZmZjNlMDsgY29sb3I6ICNlNjUxMDA7IH1cbi53cS1wb29yIHsgYmFja2dyb3VuZDogI2ZmZWJlZTsgY29sb3I6ICNjNjI4Mjg7IH1cblxuLy8gPT09PT0g5aSn5Zu+5qCH5oyJ6ZKuID09PT09XG4uYmlnLWJ0bi1zZWN0aW9uIHtcbiAgcGFkZGluZzogMCA0MHJweCAxMHJweDtcbn1cblxuLmJpZy1idG4tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDMwcnB4O1xufVxuXG4uYmlnLWJ0bi13cmFwcGVyIHtcbiAgZmxleDogMTtcbn1cblxuLmJpZy1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjRycHg7XG4gIHBhZGRpbmc6IDQwcnB4IDA7XG4gIGJveC1zaGFkb3c6IDAgNHJweCAxNnJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cblxuICAuYmlnLWJ0bi1pY29uIHtcbiAgICBmb250LXNpemU6IDgwcnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cnB4O1xuICB9XG5cbiAgLmJpZy1idG4tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjhycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gICYucG93ZXItb24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlOGY1ZTksICNjOGU2YzkpO1xuICAgIC5iaWctYnRuLWxhYmVsIHsgY29sb3I6ICMyZTdkMzI7IH1cbiAgfVxuXG4gICYucG93ZXItb2ZmIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZlYmVlLCAjZmZjZGQyKTtcbiAgICAuYmlnLWJ0bi1sYWJlbCB7IGNvbG9yOiAjYzYyODI4OyB9XG4gIH1cblxuICAmLmZlZWQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTNmMmZkLCAjYmJkZWZiKTtcbiAgICAuYmlnLWJ0bi1sYWJlbCB7IGNvbG9yOiAjMTU2NWMwOyB9XG5cbiAgICAmLmJ1c3kge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZjNlMCwgI2ZmZTBiMik7XG4gICAgICAuYmlnLWJ0bi1sYWJlbCB7IGNvbG9yOiAjZTY1MTAwOyB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09IOaOp+WItuWNoeeJhyA9PT09PVxuLmNvbnRyb2wtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDIwcnB4IDQwcnB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMjBycHg7XG59XG5cbi5jb250cm9sLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHJweDtcbiAgcGFkZGluZzogMzBycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcnB4O1xuICBib3gtc2hhZG93OiAwIDJycHggMTJycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLmNvbnRyb2wtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXJweDtcbn1cblxuLmNvbnRyb2wtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbiAgcGFkZGluZzogNnJweCAxMnJweDtcbiAgYm9yZGVyLXJhZGl1czogOHJweDtcblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgfVxufVxuXG4uY29udHJvbC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiAjMWE3M2U4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnB1bXAtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sZXZlbC1idG4ge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDcwcnB4O1xuICBtYXJnaW46IDAgMTBycHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDI2cnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHJweDtcbiAgYm9yZGVyOiBub25lO1xuXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWE3M2U4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi8vID09PT09IOW8gOWFs+WNoeeJhyA9PT09PVxuLnN3aXRjaC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTZycHg7XG4gIHBhZGRpbmc6IDI0cnB4IDMwcnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDJycHggMTBycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnN3aXRjaC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA2cnB4IDEycnB4O1xuICBib3JkZXItcmFkaXVzOiA4cnB4O1xuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICB9XG59XG5cbi8vID09PT09IOiHquWumuS5ieW8gOWFsyA9PT09PVxuLmN1c3RvbS1zd2l0Y2gge1xuICB3aWR0aDogOTZycHg7XG4gIGhlaWdodDogNTJycHg7XG4gIGJvcmRlci1yYWRpdXM6IDI2cnB4O1xuICBwYWRkaW5nOiA0cnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jdXN0b20tc3dpdGNoLm9mZiB7IGJhY2tncm91bmQ6ICNkZGQ7IH1cbi5jdXN0b20tc3dpdGNoLm9uIHsgYmFja2dyb3VuZDogIzFhNzNlODsgfVxuLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1zd2l0Y2gta25vYiB7XG4gIHdpZHRoOiA0NHJweDtcbiAgaGVpZ2h0OiA0NHJweDtcbiAgYm9yZGVyLXJhZGl1czogMjJycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnJweCA4cnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4uY3VzdG9tLXN3aXRjaC5vbiAuY3VzdG9tLXN3aXRjaC1rbm9iIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQ0cnB4KTtcbn1cblxuLy8gPT09PT0g5bqV6YOo5qCPID09PT09XG4uYm90dG9tLWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHJweCA0MHJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcDogMXJweCBzb2xpZCAjZWVlO1xufVxuXG4ucmVmcmVzaC10aW1lIHtcbiAgZm9udC1zaXplOiAyNHJweDtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5yZWZyZXNoLWJ0biB7XG4gIGZvbnQtc2l6ZTogMjZycHg7XG4gIGNvbG9yOiAjMWE3M2U4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi8vID09PT09IOW8ueeqlyA9PT09PVxuLmRpYWxvZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmRpYWxvZy1ib3gge1xuICB3aWR0aDogNjAwcnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyNHJweDtcbiAgcGFkZGluZzogNTBycHggNDBycHggMzBycHg7XG59XG5cbi5kaWFsb2ctdGl0bGUge1xuICBmb250LXNpemU6IDM0cnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDQwcnB4O1xufVxuXG4uZGlhbG9nLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBycHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDEycnB4O1xuICBwYWRkaW5nOiAwIDI0cnB4O1xuICBmb250LXNpemU6IDMwcnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tYm90dG9tOiA0MHJweDtcbn1cblxuLmRpYWxvZy1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGlhbG9nLWJ0biB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogODBycHg7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAxMHJweDtcbn1cblxuLmRpYWxvZy1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmRpYWxvZy1jb25maXJtIHtcbiAgYmFja2dyb3VuZDogIzFhNzNlODtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vID09PT09IOWumuaXtuS7u+WKoSA9PT09PVxuLmVtcHR5LXRpcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBycHg7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDI2cnB4O1xufVxuXG4udGltZXItY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cnB4O1xuICBwYWRkaW5nOiAyNHJweCAzMHJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycnB4IDEwcnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi50aW1lci1jYXJkLWxlZnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhycHg7XG59XG5cbi50aW1lci1jYXJkLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBycHg7XG59XG5cbi50aW1lci1uYW1lIHtcbiAgZm9udC1zaXplOiAzMHJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4udGltZXItdGltZSB7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiAjMWE3M2U4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpbWVyLWRlc2Mge1xuICBmb250LXNpemU6IDI2cnB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnRpbWVyLWR1cmF0aW9uIHtcbiAgZm9udC1zaXplOiAyNHJweDtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi50aW1lci1jYXJkLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cnB4O1xufVxuXG4udGltZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHJweDtcbn1cblxuLnRpbWVyLWVkaXQge1xuICBmb250LXNpemU6IDI0cnB4O1xuICBjb2xvcjogIzFhNzNlODtcbiAgcGFkZGluZzogNHJweCAxMnJweDtcbn1cblxuLnRpbWVyLWRlbGV0ZSB7XG4gIGZvbnQtc2l6ZTogMjRycHg7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBwYWRkaW5nOiA0cnB4IDEycnB4O1xufVxuXG4uYWRkLXRpbWVyLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzFhNzNlODtcbiAgZm9udC1zaXplOiAzMHJweDtcbiAgYm9yZGVyLXJhZGl1czogMTZycHg7XG4gIGJvcmRlcjogMnJweCBkYXNoZWQgIzFhNzNlODtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcnB4O1xufVxuXG4udGltZXItZGlhbG9nIHtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnRpbWVyLWZvcm0tbGFiZWwge1xuICBmb250LXNpemU6IDI4cnB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE2cnB4O1xuICBtYXJnaW4tdG9wOiAyMHJweDtcbn1cblxuLnRpbWVyLWZvcm0tbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi50aW1lci1waWNrZXItcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBycHg7XG59XG5cbi50aW1lci1waWNrZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHJweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogMTJycHg7XG4gIHBhZGRpbmc6IDAgMjRycHg7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGxpbmUtaGVpZ2h0OiA4MHJweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _api = __webpack_require__(/*! @/utils/api */ 16);\nvar _storage = __webpack_require__(/*! @/utils/storage */ 15);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      deviceKey: '',\n      deviceModel: '',\n      status: {\n        online: false,\n        pwm1Level: 0,\n        pwm3Level: 0,\n        airPumpLevel: 0,\n        relay1State: false,\n        relay2State: false,\n        relay3State: false,\n        servoMoving: false,\n        adcWQVoltage: 0,\n        adcTempVoltage: 0,\n        tdsValue: 0,\n        waterTemperature: 0,\n        systemPowered: true\n      },\n      pumpLevels: ['关', '一档', '二档', '三档'],\n      lastUpdateTime: '',\n      timer: null,\n      renameVisible: false,\n      renameValue: '',\n      renameTarget: '',\n      renameDefault: '',\n      ws: null,\n      wsConnected: false,\n      wsReconnectTimer: null,\n      servoTimer: null,\n      servoStartTime: 0,\n      lastClickTime: 0\n    };\n  },\n  computed: {\n    taskTypeLabels: function taskTypeLabels() {\n      return [];\n    },\n    durationLabels: function durationLabels() {\n      return [];\n    },\n    waterQualityText: function waterQualityText() {\n      var v = this.status.tdsValue || 0;\n      if (v < 150) return '优';\n      if (v < 200) return '良';\n      if (v < 400) return '中';\n      return '差';\n    },\n    waterQualityClass: function waterQualityClass() {\n      var v = this.status.tdsValue || 0;\n      if (v < 150) return 'wq-excellent';\n      if (v < 200) return 'wq-good';\n      if (v < 400) return 'wq-fair';\n      return 'wq-poor';\n    }\n  },\n  onLoad: function onLoad(options) {\n    var _this = this;\n    this.deviceKey = options.device_key || '';\n    if (!this.deviceKey) {\n      uni.showToast({\n        title: '设备参数错误',\n        icon: 'none'\n      });\n      return;\n    }\n    this.loadStatus();\n\n    // 连接 WebSocket 接收实时推送\n    this.connectWS();\n\n    // 进入页面自动请求最新状态\n    (0, _api.requestDeviceStatus)(this.deviceKey).then(function () {\n      setTimeout(function () {\n        return _this.loadStatus();\n      }, 800);\n    });\n\n    // 10秒轮询\n    this.timer = setInterval(function () {\n      _this.loadStatus();\n      _this.checkServoTimeout();\n    }, 10000);\n\n    // 舵机超时检测\n    this.servoTimer = setInterval(function () {\n      _this.checkServoTimeout();\n    }, 2000);\n  },\n  onUnload: function onUnload() {\n    if (this.timer) {\n      clearInterval(this.timer);\n    }\n    if (this.servoTimer) {\n      clearInterval(this.servoTimer);\n    }\n    this.disconnectWS();\n  },\n  methods: {\n    getCtrlName: function getCtrlName(target, defaultName) {\n      var key = 'ctrl_name_' + this.deviceKey + '_' + target;\n      var name = uni.getStorageSync(key);\n      return name || defaultName;\n    },\n    checkRateLimit: function checkRateLimit() {\n      var now = Date.now();\n      if (now - this.lastClickTime < 1000) {\n        uni.showToast({\n          title: '操作过快，慢点哟',\n          icon: 'none'\n        });\n        return false;\n      }\n      this.lastClickTime = now;\n      return true;\n    },\n    startRename: function startRename(target, defaultName) {\n      this.renameTarget = target;\n      this.renameDefault = defaultName;\n      this.renameValue = this.getCtrlName(target, defaultName);\n      if (this.renameValue === defaultName) {\n        this.renameValue = '';\n      }\n      this.renameVisible = true;\n    },\n    cancelRename: function cancelRename() {\n      this.renameVisible = false;\n      this.renameTarget = '';\n      this.renameValue = '';\n    },\n    confirmRename: function confirmRename() {\n      if (!this.renameTarget) return;\n      var key = 'ctrl_name_' + this.deviceKey + '_' + this.renameTarget;\n      if (this.renameValue && this.renameValue.trim()) {\n        uni.setStorageSync(key, this.renameValue.trim());\n        uni.showToast({\n          title: '重命名成功',\n          icon: 'success'\n        });\n      } else {\n        uni.removeStorageSync(key);\n        uni.showToast({\n          title: '已恢复默认名称',\n          icon: 'none'\n        });\n      }\n      this.cancelRename();\n    },\n    // ===== WebSocket 实时推送 =====\n    getWSBaseURL: function getWSBaseURL() {\n      try {\n        if (window && window.location) {\n          return \"ws://\".concat(window.location.host);\n        }\n      } catch (e) {}\n      return 'ws://112.124.107.159:7965';\n    },\n    connectWS: function connectWS() {\n      var _this2 = this;\n      if (this.ws) return;\n      var phone = (0, _storage.getPhoneNumber)();\n      if (!phone) return;\n      try {\n        var baseUrl = this.getWSBaseURL();\n        this.ws = uni.connectSocket({\n          url: \"\".concat(baseUrl, \"/ws/client\"),\n          success: function success() {}\n        });\n        this.ws.onOpen(function () {\n          _this2.wsConnected = true;\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'auth',\n              phone: phone\n            })\n          });\n          uni.sendSocketMessage({\n            data: JSON.stringify({\n              type: 'subscribe',\n              device_key: _this2.deviceKey\n            })\n          });\n        });\n        this.ws.onMessage(function (res) {\n          try {\n            var msg = JSON.parse(res.data);\n            if (msg.type === 'device_status' && msg.device_key === _this2.deviceKey) {\n              _this2.updateStatusFromWS(msg);\n            }\n          } catch (e) {}\n        });\n        this.ws.onClose(function () {\n          _this2.wsConnected = false;\n          _this2.ws = null;\n          if (!_this2.wsReconnectTimer) {\n            _this2.wsReconnectTimer = setTimeout(function () {\n              _this2.wsReconnectTimer = null;\n              _this2.connectWS();\n            }, 3000);\n          }\n        });\n        this.ws.onError(function () {\n          _this2.wsConnected = false;\n        });\n      } catch (e) {\n        __f__(\"log\", 'WebSocket连接失败，使用HTTP轮询', e, \" at pages/control/fish-mini.vue:358\");\n      }\n    },\n    disconnectWS: function disconnectWS() {\n      if (this.wsReconnectTimer) {\n        clearTimeout(this.wsReconnectTimer);\n        this.wsReconnectTimer = null;\n      }\n      if (this.ws) {\n        this.ws.close();\n        this.ws = null;\n        this.wsConnected = false;\n      }\n    },\n    updateStatusFromWS: function updateStatusFromWS(msg) {\n      var s = msg.status || {};\n      var moving = s.servoMoving || false;\n      if (moving && !this.servoStartTime) {\n        this.servoStartTime = Date.now();\n      }\n      if (!moving) {\n        this.servoStartTime = 0;\n      }\n      this.status = {\n        online: msg.online || false,\n        pwm1Level: s.pwm1Level || 0,\n        pwm3Level: s.pwm3Level || 0,\n        airPumpLevel: s.airPumpLevel || 0,\n        relay1State: s.relay1State || false,\n        relay2State: s.relay2State || false,\n        relay3State: s.relay3State || false,\n        servoMoving: s.servoMoving || false,\n        adcWQVoltage: s.adcWQVoltage || 0,\n        adcTempVoltage: s.adcTempVoltage || 0,\n        tdsValue: s.tdsValue || 0,\n        waterTemperature: s.waterTemperature || 0,\n        systemPowered: s.systemPowered !== false\n      };\n      this.lastUpdateTime = new Date().toLocaleTimeString();\n    },\n    loadStatus: function loadStatus() {\n      var _this3 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var res, s, moving;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return (0, _api.getDeviceStatus)(_this3.deviceKey);\n              case 3:\n                res = _context.sent;\n                if (res.success) {\n                  _this3.deviceModel = res.model || '';\n                  s = res.status || {};\n                  moving = s.servoMoving || false;\n                  if (moving && !_this3.servoStartTime) {\n                    _this3.servoStartTime = Date.now();\n                  }\n                  if (!moving) {\n                    _this3.servoStartTime = 0;\n                  }\n                  _this3.status = {\n                    online: res.online || false,\n                    pwm1Level: s.pwm1Level || 0,\n                    pwm3Level: s.pwm3Level || 0,\n                    airPumpLevel: s.airPumpLevel || 0,\n                    relay1State: s.relay1State || false,\n                    relay2State: s.relay2State || false,\n                    relay3State: s.relay3State || false,\n                    servoMoving: s.servoMoving || false,\n                    adcWQVoltage: s.adcWQVoltage || 0,\n                    adcTempVoltage: s.adcTempVoltage || 0,\n                    tdsValue: s.tdsValue || 0,\n                    waterTemperature: s.waterTemperature || 0,\n                    systemPowered: s.systemPowered !== false\n                  };\n                  _this3.lastUpdateTime = new Date().toLocaleTimeString();\n                }\n                _context.next = 10;\n                break;\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                _this3.status.online = false;\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }))();\n    },\n    refreshStatus: function refreshStatus() {\n      var _this4 = this;\n      uni.showLoading({\n        title: '刷新中...'\n      });\n      (0, _api.requestDeviceStatus)(this.deviceKey).then(function () {\n        setTimeout(function () {\n          _this4.loadStatus().then(function () {\n            uni.hideLoading();\n          });\n        }, 800);\n      }).catch(function () {\n        _this4.loadStatus().then(function () {\n          uni.hideLoading();\n        });\n      });\n    },\n    setPump: function setPump(pump, level) {\n      var _this5 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var res;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (_this5.status.online) {\n                  _context2.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context2.abrupt(\"return\");\n              case 3:\n                if (_this5.checkRateLimit()) {\n                  _context2.next = 5;\n                  break;\n                }\n                return _context2.abrupt(\"return\");\n              case 5:\n                _this5.status[\"pwm\".concat(pump, \"Level\")] = level;\n                _context2.prev = 6;\n                _context2.next = 9;\n                return (0, _api.sendControlCommand)(_this5.deviceKey, 'set_pump', {\n                  pump: pump,\n                  level: level\n                });\n              case 9:\n                res = _context2.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this5.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context2.next = 16;\n                break;\n              case 13:\n                _context2.prev = 13;\n                _context2.t0 = _context2[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[6, 13]]);\n      }))();\n    },\n    setLight: function setLight(level) {\n      var _this6 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        var res;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                if (_this6.status.online) {\n                  _context3.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context3.abrupt(\"return\");\n              case 3:\n                if (_this6.checkRateLimit()) {\n                  _context3.next = 5;\n                  break;\n                }\n                return _context3.abrupt(\"return\");\n              case 5:\n                _this6.status.pwm3Level = level;\n                _context3.prev = 6;\n                _context3.next = 9;\n                return (0, _api.sendControlCommand)(_this6.deviceKey, 'set_light', {\n                  level: level\n                });\n              case 9:\n                res = _context3.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this6.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context3.next = 16;\n                break;\n              case 13:\n                _context3.prev = 13;\n                _context3.t0 = _context3[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, null, [[6, 13]]);\n      }))();\n    },\n    setAirPump: function setAirPump(level) {\n      var _this7 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {\n        var res;\n        return _regenerator.default.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                if (_this7.status.online) {\n                  _context4.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context4.abrupt(\"return\");\n              case 3:\n                if (_this7.checkRateLimit()) {\n                  _context4.next = 5;\n                  break;\n                }\n                return _context4.abrupt(\"return\");\n              case 5:\n                _this7.status.airPumpLevel = level;\n                _context4.prev = 6;\n                _context4.next = 9;\n                return (0, _api.sendControlCommand)(_this7.deviceKey, 'set_air_pump', {\n                  level: level\n                });\n              case 9:\n                res = _context4.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this7.loadStatus();\n                  }, 800);\n                  uni.showToast({\n                    title: '设置成功',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context4.next = 16;\n                break;\n              case 13:\n                _context4.prev = 13;\n                _context4.t0 = _context4[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, null, [[6, 13]]);\n      }))();\n    },\n    setRelay2: function setRelay2(on) {\n      var _this8 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {\n        var res;\n        return _regenerator.default.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                if (_this8.status.online) {\n                  _context5.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context5.abrupt(\"return\");\n              case 3:\n                if (_this8.checkRateLimit()) {\n                  _context5.next = 5;\n                  break;\n                }\n                return _context5.abrupt(\"return\");\n              case 5:\n                _this8.status.relay2State = on;\n                _context5.prev = 6;\n                _context5.next = 9;\n                return (0, _api.sendControlCommand)(_this8.deviceKey, 'set_relay2', {\n                  on: on\n                });\n              case 9:\n                res = _context5.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this8.loadStatus();\n                  }, 800);\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context5.next = 16;\n                break;\n              case 13:\n                _context5.prev = 13;\n                _context5.t0 = _context5[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5, null, [[6, 13]]);\n      }))();\n    },\n    setRelay3: function setRelay3(on) {\n      var _this9 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {\n        var res;\n        return _regenerator.default.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                if (_this9.status.online) {\n                  _context6.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context6.abrupt(\"return\");\n              case 3:\n                if (_this9.checkRateLimit()) {\n                  _context6.next = 5;\n                  break;\n                }\n                return _context6.abrupt(\"return\");\n              case 5:\n                _this9.status.relay3State = on;\n                _context6.prev = 6;\n                _context6.next = 9;\n                return (0, _api.sendControlCommand)(_this9.deviceKey, 'set_relay3', {\n                  on: on\n                });\n              case 9:\n                res = _context6.sent;\n                if (res.success) {\n                  setTimeout(function () {\n                    return _this9.loadStatus();\n                  }, 800);\n                } else {\n                  uni.showToast({\n                    title: res.message || '设置失败',\n                    icon: 'none'\n                  });\n                }\n                _context6.next = 16;\n                break;\n              case 13:\n                _context6.prev = 13;\n                _context6.t0 = _context6[\"catch\"](6);\n                uni.showToast({\n                  title: '设置失败',\n                  icon: 'none'\n                });\n              case 16:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6, null, [[6, 13]]);\n      }))();\n    },\n    triggerServo: function triggerServo() {\n      var _this10 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {\n        var res;\n        return _regenerator.default.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                if (!(!_this10.status.online || _this10.status.servoMoving)) {\n                  _context7.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线或舵机运行中',\n                  icon: 'none'\n                });\n                return _context7.abrupt(\"return\");\n              case 3:\n                if (_this10.checkRateLimit()) {\n                  _context7.next = 5;\n                  break;\n                }\n                return _context7.abrupt(\"return\");\n              case 5:\n                _context7.prev = 5;\n                _context7.next = 8;\n                return (0, _api.sendControlCommand)(_this10.deviceKey, 'trigger_servo', {});\n              case 8:\n                res = _context7.sent;\n                if (res.success) {\n                  _this10.status.servoMoving = true;\n                  _this10.servoStartTime = Date.now();\n                  uni.showToast({\n                    title: '喂食已启动',\n                    icon: 'success'\n                  });\n                } else {\n                  uni.showToast({\n                    title: res.message || '启动失败',\n                    icon: 'none'\n                  });\n                }\n                _context7.next = 15;\n                break;\n              case 12:\n                _context7.prev = 12;\n                _context7.t0 = _context7[\"catch\"](5);\n                uni.showToast({\n                  title: '启动失败',\n                  icon: 'none'\n                });\n              case 15:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7, null, [[5, 12]]);\n      }))();\n    },\n    checkServoTimeout: function checkServoTimeout() {\n      if (this.status.servoMoving && this.servoStartTime > 0) {\n        var elapsed = (Date.now() - this.servoStartTime) / 1000;\n        if (elapsed > 8) {\n          this.status.servoMoving = false;\n          this.servoStartTime = 0;\n        }\n      }\n    },\n    togglePower: function togglePower() {\n      var _this11 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {\n        var isPowered, cmd, confirmText;\n        return _regenerator.default.wrap(function _callee8$(_context8) {\n          while (1) {\n            switch (_context8.prev = _context8.next) {\n              case 0:\n                if (_this11.status.online) {\n                  _context8.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '设备离线',\n                  icon: 'none'\n                });\n                return _context8.abrupt(\"return\");\n              case 3:\n                isPowered = _this11.status.systemPowered;\n                cmd = isPowered ? 'power_off' : 'power_on';\n                confirmText = isPowered ? '确定要关机吗？\\n关机后设备保持网络连接，可远程开机。' : '确定要开机吗？';\n                uni.showModal({\n                  title: '确认操作',\n                  content: confirmText,\n                  success: function success(modalRes) {\n                    if (!modalRes.confirm) return;\n                    _this11.executePowerCmd(cmd);\n                  }\n                });\n              case 7:\n              case \"end\":\n                return _context8.stop();\n            }\n          }\n        }, _callee8);\n      }))();\n    },\n    executePowerCmd: function executePowerCmd(cmd) {\n      var _this12 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {\n        var result;\n        return _regenerator.default.wrap(function _callee9$(_context9) {\n          while (1) {\n            switch (_context9.prev = _context9.next) {\n              case 0:\n                if (_this12.checkRateLimit()) {\n                  _context9.next = 2;\n                  break;\n                }\n                return _context9.abrupt(\"return\");\n              case 2:\n                _context9.prev = 2;\n                _context9.next = 5;\n                return (0, _api.sendControlCommand)(_this12.deviceKey, cmd, {});\n              case 5:\n                result = _context9.sent;\n                if (result.success) {\n                  _this12.status.systemPowered = cmd === 'power_on';\n                  uni.showToast({\n                    title: cmd === 'power_on' ? '开机成功' : '关机成功',\n                    icon: 'success'\n                  });\n                  setTimeout(function () {\n                    return _this12.loadStatus();\n                  }, 1000);\n                } else {\n                  uni.showToast({\n                    title: result.message || '操作失败',\n                    icon: 'none'\n                  });\n                }\n                _context9.next = 12;\n                break;\n              case 9:\n                _context9.prev = 9;\n                _context9.t0 = _context9[\"catch\"](2);\n                uni.showToast({\n                  title: '操作失败',\n                  icon: 'none'\n                });\n              case 12:\n              case \"end\":\n                return _context9.stop();\n            }\n          }\n        }, _callee9, null, [[2, 9]]);\n      }))();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY29udHJvbC9maXNoLW1pbmkudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJkZXZpY2VLZXkiLCJkZXZpY2VNb2RlbCIsInN0YXR1cyIsIm9ubGluZSIsInB3bTFMZXZlbCIsInB3bTNMZXZlbCIsImFpclB1bXBMZXZlbCIsInJlbGF5MVN0YXRlIiwicmVsYXkyU3RhdGUiLCJyZWxheTNTdGF0ZSIsInNlcnZvTW92aW5nIiwiYWRjV1FWb2x0YWdlIiwiYWRjVGVtcFZvbHRhZ2UiLCJ0ZHNWYWx1ZSIsIndhdGVyVGVtcGVyYXR1cmUiLCJzeXN0ZW1Qb3dlcmVkIiwicHVtcExldmVscyIsImxhc3RVcGRhdGVUaW1lIiwidGltZXIiLCJyZW5hbWVWaXNpYmxlIiwicmVuYW1lVmFsdWUiLCJyZW5hbWVUYXJnZXQiLCJyZW5hbWVEZWZhdWx0Iiwid3MiLCJ3c0Nvbm5lY3RlZCIsIndzUmVjb25uZWN0VGltZXIiLCJzZXJ2b1RpbWVyIiwic2Vydm9TdGFydFRpbWUiLCJsYXN0Q2xpY2tUaW1lIiwiY29tcHV0ZWQiLCJ0YXNrVHlwZUxhYmVscyIsImR1cmF0aW9uTGFiZWxzIiwid2F0ZXJRdWFsaXR5VGV4dCIsIndhdGVyUXVhbGl0eUNsYXNzIiwib25Mb2FkIiwidW5pIiwidGl0bGUiLCJpY29uIiwic2V0VGltZW91dCIsIm9uVW5sb2FkIiwiY2xlYXJJbnRlcnZhbCIsIm1ldGhvZHMiLCJnZXRDdHJsTmFtZSIsImNoZWNrUmF0ZUxpbWl0Iiwic3RhcnRSZW5hbWUiLCJjYW5jZWxSZW5hbWUiLCJjb25maXJtUmVuYW1lIiwiZ2V0V1NCYXNlVVJMIiwiY29ubmVjdFdTIiwidXJsIiwic3VjY2VzcyIsInR5cGUiLCJwaG9uZSIsImRldmljZV9rZXkiLCJkaXNjb25uZWN0V1MiLCJjbGVhclRpbWVvdXQiLCJ1cGRhdGVTdGF0dXNGcm9tV1MiLCJsb2FkU3RhdHVzIiwicmVzIiwicyIsIm1vdmluZyIsInJlZnJlc2hTdGF0dXMiLCJzZXRQdW1wIiwicHVtcCIsImxldmVsIiwic2V0TGlnaHQiLCJzZXRBaXJQdW1wIiwic2V0UmVsYXkyIiwib24iLCJzZXRSZWxheTMiLCJ0cmlnZ2VyU2Vydm8iLCJjaGVja1NlcnZvVGltZW91dCIsInRvZ2dsZVBvd2VyIiwiaXNQb3dlcmVkIiwiY21kIiwiY29uZmlybVRleHQiLCJjb250ZW50IiwiZXhlY3V0ZVBvd2VyQ21kIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUE4SkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUFBO0lBQ0E7SUFDQTtNQUNBQztRQUFBQztRQUFBQztNQUFBO01BQ0E7SUFDQTtJQUVBOztJQUVBO0lBQ0E7O0lBRUE7SUFDQTtNQUNBQztRQUFBO01BQUE7SUFDQTs7SUFFQTtJQUNBO01BQ0E7TUFDQTtJQUNBOztJQUVBO0lBQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtNQUNBQztJQUNBO0lBQ0E7TUFDQUE7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7UUFDQVI7VUFBQUM7VUFBQUM7UUFBQTtRQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQU87TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO01BQ0E7UUFDQVg7UUFDQUE7VUFBQUM7VUFBQUM7UUFBQTtNQUNBO1FBQ0FGO1FBQ0FBO1VBQUFDO1VBQUFDO1FBQUE7TUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBVTtNQUNBO1FBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQUE7TUFDQTtNQUNBO01BQ0E7TUFFQTtRQUNBO1FBQ0E7VUFDQUM7VUFDQUM7UUFDQTtRQUVBO1VBQ0E7VUFDQWY7WUFDQXBDO2NBQUFvRDtjQUFBQztZQUFBO1VBQ0E7VUFDQWpCO1lBQ0FwQztjQUFBb0Q7Y0FBQUU7WUFBQTtVQUNBO1FBQ0E7UUFFQTtVQUNBO1lBQ0E7WUFDQTtjQUNBO1lBQ0E7VUFDQTtRQUNBO1FBRUE7VUFDQTtVQUNBO1VBQ0E7WUFDQTtjQUNBO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7UUFFQTtVQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO1FBQ0FDO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7TUFDQTtRQUNBckQ7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBO0lBQ0E7SUFFQTBDO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFQTtjQUFBO2dCQUFBQztnQkFDQTtrQkFDQTtrQkFDQUM7a0JBQ0FDO2tCQUNBO29CQUNBO2tCQUNBO2tCQUNBO29CQUNBO2tCQUNBO2tCQUNBO29CQUNBekQ7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7a0JBQ0E7a0JBQ0E7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0lBRUE4QztNQUFBO01BQ0ExQjtRQUFBQztNQUFBO01BQ0E7UUFDQUU7VUFDQTtZQUNBSDtVQUNBO1FBQ0E7TUFDQTtRQUNBO1VBQ0FBO1FBQ0E7TUFDQTtJQUNBO0lBRUEyQjtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ0EzQjtrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUEsSUFHQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUVBO2dCQUFBO2dCQUFBO2dCQUFBLE9BR0E7a0JBQUEwQjtrQkFBQUM7Z0JBQUE7Y0FBQTtnQkFBQU47Z0JBQ0E7a0JBQ0FwQjtvQkFBQTtrQkFBQTtrQkFDQUg7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFDQTtrQkFDQUY7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFDQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVBRjtrQkFBQUM7a0JBQUFDO2dCQUFBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRUE7SUFFQTRCO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFDQTlCO2tCQUFBQztrQkFBQUM7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQSxJQUdBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBRUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FHQTtrQkFBQTJCO2dCQUFBO2NBQUE7Z0JBQUFOO2dCQUNBO2tCQUNBcEI7b0JBQUE7a0JBQUE7a0JBQ0FIO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQ0E7a0JBQ0FGO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFQUY7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0lBRUE2QjtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUEvQjtrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUNBO2dCQUFBO2dCQUFBO2dCQUFBLE9BRUE7a0JBQUEyQjtnQkFBQTtjQUFBO2dCQUFBTjtnQkFDQTtrQkFBQXBCO29CQUFBO2tCQUFBO2tCQUFBSDtvQkFBQUM7b0JBQUFDO2tCQUFBO2dCQUFBLE9BQ0E7a0JBQUFGO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFDQUY7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBRUE4QjtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUFoQztrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUNBO2dCQUFBO2dCQUFBO2dCQUFBLE9BRUE7a0JBQUErQjtnQkFBQTtjQUFBO2dCQUFBVjtnQkFDQTtrQkFBQXBCO29CQUFBO2tCQUFBO2dCQUFBLE9BQ0E7a0JBQUFIO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFDQUY7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBRUFnQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUFsQztrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUEsSUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUNBO2dCQUFBO2dCQUFBO2dCQUFBLE9BRUE7a0JBQUErQjtnQkFBQTtjQUFBO2dCQUFBVjtnQkFDQTtrQkFBQXBCO29CQUFBO2tCQUFBO2dCQUFBLE9BQ0E7a0JBQUFIO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFDQUY7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBRUFpQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLE1BQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ0FuQztrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUEsSUFHQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBLE9BR0E7Y0FBQTtnQkFBQXFCO2dCQUNBO2tCQUNBO2tCQUNBO2tCQUNBdkI7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFDQTtrQkFDQUY7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFDQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVBRjtrQkFBQUM7a0JBQUFDO2dCQUFBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRUE7SUFFQWtDO01BQ0E7UUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ0FyQztrQkFBQUM7a0JBQUFDO2dCQUFBO2dCQUFBO2NBQUE7Z0JBSUFvQztnQkFDQUM7Z0JBQ0FDO2dCQUVBeEM7a0JBQ0FDO2tCQUNBd0M7a0JBQ0ExQjtvQkFDQTtvQkFDQTtrQkFDQTtnQkFDQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBRUEyQjtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLElBQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUVBO2NBQUE7Z0JBQUFDO2dCQUNBO2tCQUNBO2tCQUNBM0M7b0JBQUFDO29CQUFBQztrQkFBQTtrQkFDQUM7b0JBQUE7a0JBQUE7Z0JBQ0E7a0JBQ0FIO29CQUFBQztvQkFBQUM7a0JBQUE7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFQUY7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dmlldyBjbGFzcz1cImNvbnRyb2wtcGFnZVwiPlxuICAgIDx2aWV3IGNsYXNzPVwic3RhdHVzLWhlYWRlclwiIDpjbGFzcz1cInsgb2ZmbGluZTogIXN0YXR1cy5vbmxpbmUgfVwiPlxuICAgICAgPHZpZXcgY2xhc3M9XCJzdGF0dXMtcm93XCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwic3RhdHVzLWxlZnRcIj5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cInN0YXR1cy1pbmRpY2F0b3JcIj5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaW5kaWNhdG9yLWRvdFwiPjwvdmlldz5cbiAgICAgICAgICAgIDx0ZXh0Pnt7IHN0YXR1cy5vbmxpbmUgPyAn5Zyo57q/JyA6ICfnprvnur8nIH19PC90ZXh0PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImRldmljZS1rZXlcIj57eyBkZXZpY2VLZXkgfX08L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJtb2RlbC1pbmZvLWhlYWRlclwiPnt7IGRldmljZU1vZGVsIH19PC90ZXh0PlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cblxuICAgIDwhLS0g5Lyg5oSf5Zmo5pWw5o2uIC0tPlxuICAgIDx2aWV3IGNsYXNzPVwic2Vuc29yLXNlY3Rpb25cIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwic2Vuc29yLWdyaWQgdHdvLWNvbFwiPlxuICAgICAgICA8dmlldyBjbGFzcz1cInNlbnNvci1pdGVtXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzZW5zb3ItaWNvblwiPvCfjKHvuI88L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzZW5zb3ItbGFiZWxcIj7muKnluqY8L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzZW5zb3ItdmFsdWVcIj57eyBzdGF0dXMud2F0ZXJUZW1wZXJhdHVyZS50b0ZpeGVkKDEpIH19wrBDPC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwic2Vuc29yLWl0ZW1cIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInNlbnNvci1pY29uXCI+8J+SpzwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInNlbnNvci1sYWJlbFwiPuawtOi0qDwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInNlbnNvci12YWx1ZVwiPnt7IHBhcnNlSW50KHN0YXR1cy50ZHNWYWx1ZSkgfX1wcG0gPHRleHQgY2xhc3M9XCJ3cS10YWdcIiA6Y2xhc3M9XCJ3YXRlclF1YWxpdHlDbGFzc1wiPnt7IHdhdGVyUXVhbGl0eVRleHQgfX08L3RleHQ+PC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG4gICAgPC92aWV3PlxuXG4gICAgPCEtLSDlpKflm77moIfmjInpkq4gLS0+XG4gICAgPHZpZXcgY2xhc3M9XCJiaWctYnRuLXNlY3Rpb25cIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwiYmlnLWJ0bi1yb3dcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJiaWctYnRuLXdyYXBwZXJcIj5cbiAgICAgICAgICA8dmlld1xuICAgICAgICAgICAgY2xhc3M9XCJiaWctYnRuXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInN0YXR1cy5zeXN0ZW1Qb3dlcmVkID8gJ3Bvd2VyLW9uJyA6ICdwb3dlci1vZmYnXCJcbiAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZVBvd2VyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImJpZy1idG4taWNvblwiPuKaoTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYmlnLWJ0bi1sYWJlbFwiPnt7IHN0YXR1cy5zeXN0ZW1Qb3dlcmVkID8gJ+W8gOacuicgOiAn5YWz5py6JyB9fTwvdGV4dD5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJiaWctYnRuLXdyYXBwZXJcIj5cbiAgICAgICAgICA8dmlld1xuICAgICAgICAgICAgY2xhc3M9XCJiaWctYnRuIGZlZWQtYnRuXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgYnVzeTogc3RhdHVzLnNlcnZvTW92aW5nIH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwidHJpZ2dlclNlcnZvXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImJpZy1idG4taWNvblwiPvCfkJ88L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImJpZy1idG4tbGFiZWxcIj57eyBzdGF0dXMuc2Vydm9Nb3ZpbmcgPyAn6L+Q6KGM5LitJyA6ICflloLpo58nIH19PC90ZXh0PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cblxuICAgIDwhLS0gUFdNIOaOp+WItiAtLT5cbiAgICA8dmlldyBjbGFzcz1cImNvbnRyb2wtc2VjdGlvblwiPlxuICAgICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLWNhcmRcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJjb250cm9sLWhlYWRlclwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY29udHJvbC1uYW1lXCIgQGNsaWNrPVwic3RhcnRSZW5hbWUoJ3B1bXAxJywgJ+awtOaztTEnKVwiPnt7IGdldEN0cmxOYW1lKCdwdW1wMScsICfmsLTms7UxJykgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJjb250cm9sLXZhbHVlXCI+e3sgcHVtcExldmVsc1tzdGF0dXMucHdtMUxldmVsXSB9fTwvdGV4dD5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8dmlldyBjbGFzcz1cInB1bXAtY29udHJvbHNcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB2LWZvcj1cIihsZXZlbCwgaW5kZXgpIGluIHB1bXBMZXZlbHNcIlxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgIGNsYXNzPVwibGV2ZWwtYnRuXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBzdGF0dXMucHdtMUxldmVsID09PSBpbmRleCB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cInNldFB1bXAoMSwgaW5kZXgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBsZXZlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG5cbiAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1jYXJkXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1oZWFkZXJcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtbmFtZVwiIEBjbGljaz1cInN0YXJ0UmVuYW1lKCdhaXJQdW1wJywgJ+awp+awlOaztScpXCI+e3sgZ2V0Q3RybE5hbWUoJ2FpclB1bXAnLCAn5rCn5rCU5rO1JykgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJjb250cm9sLXZhbHVlXCI+e3sgcHVtcExldmVsc1tzdGF0dXMuYWlyUHVtcExldmVsIHx8IDBdIH19PC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwicHVtcC1jb250cm9sc1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHYtZm9yPVwiKGxldmVsLCBpbmRleCkgaW4gcHVtcExldmVsc1wiXG4gICAgICAgICAgICA6a2V5PVwiJ2FpcicraW5kZXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJsZXZlbC1idG5cIlxuICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IChzdGF0dXMuYWlyUHVtcExldmVsIHx8IDApID09PSBpbmRleCB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cInNldEFpclB1bXAoaW5kZXgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBsZXZlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG5cbiAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1jYXJkXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY29udHJvbC1oZWFkZXJcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtbmFtZVwiIEBjbGljaz1cInN0YXJ0UmVuYW1lKCdsaWdodCcsICfnga/lhYknKVwiPnt7IGdldEN0cmxOYW1lKCdsaWdodCcsICfnga/lhYknKSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbnRyb2wtdmFsdWVcIj57eyBwdW1wTGV2ZWxzW3N0YXR1cy5wd20zTGV2ZWxdIH19PC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwicHVtcC1jb250cm9sc1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHYtZm9yPVwiKGxldmVsLCBpbmRleCkgaW4gcHVtcExldmVsc1wiXG4gICAgICAgICAgICA6a2V5PVwiJ2xpZ2h0JytpbmRleFwiXG4gICAgICAgICAgICBjbGFzcz1cImxldmVsLWJ0blwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogc3RhdHVzLnB3bTNMZXZlbCA9PT0gaW5kZXggfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJzZXRMaWdodChpbmRleClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGxldmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG5cbiAgICA8IS0tIOW8gOWFs+aOp+WItiAtLT5cbiAgICA8dmlldyBjbGFzcz1cImNvbnRyb2wtc2VjdGlvblwiPlxuICAgICAgPHZpZXcgY2xhc3M9XCJzd2l0Y2gtY2FyZFwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cInN3aXRjaC1sYWJlbFwiIEBjbGljaz1cInN0YXJ0UmVuYW1lKCdyZWxheTInLCAn5aSH55So5byA5YWzMScpXCI+e3sgZ2V0Q3RybE5hbWUoJ3JlbGF5MicsICflpIfnlKjlvIDlhbMxJykgfX08L3RleHQ+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY3VzdG9tLXN3aXRjaFwiIDpjbGFzcz1cInN0YXR1cy5yZWxheTJTdGF0ZSA/ICdvbicgOiAnb2ZmJ1wiIEBjbGljaz1cInNldFJlbGF5Mighc3RhdHVzLnJlbGF5MlN0YXRlKVwiPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiY3VzdG9tLXN3aXRjaC1rbm9iXCI+PC92aWV3PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG5cbiAgICAgIDx2aWV3IGNsYXNzPVwic3dpdGNoLWNhcmRcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJzd2l0Y2gtbGFiZWxcIiBAY2xpY2s9XCJzdGFydFJlbmFtZSgncmVsYXkzJywgJ+Wkh+eUqOW8gOWFszInKVwiPnt7IGdldEN0cmxOYW1lKCdyZWxheTMnLCAn5aSH55So5byA5YWzMicpIH19PC90ZXh0PlxuICAgICAgICA8dmlldyBjbGFzcz1cImN1c3RvbS1zd2l0Y2hcIiA6Y2xhc3M9XCJzdGF0dXMucmVsYXkzU3RhdGUgPyAnb24nIDogJ29mZidcIiBAY2xpY2s9XCJzZXRSZWxheTMoIXN0YXR1cy5yZWxheTNTdGF0ZSlcIj5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cImN1c3RvbS1zd2l0Y2gta25vYlwiPjwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cblxuICAgIDwhLS0g5bqV6YOo5qCPIC0tPlxuICAgIDx2aWV3IGNsYXNzPVwiYm90dG9tLWJhclwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJyZWZyZXNoLXRpbWVcIj7mm7TmlrDkuo4ge3sgbGFzdFVwZGF0ZVRpbWUgfX08L3RleHQ+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicmVmcmVzaC1idG5cIiBAY2xpY2s9XCJyZWZyZXNoU3RhdHVzXCI+4oa7IOWIt+aWsDwvYnV0dG9uPlxuICAgIDwvdmlldz5cblxuICAgIDwhLS0g6YeN5ZG95ZCN5by556qXIC0tPlxuICAgIDx2aWV3IHYtaWY9XCJyZW5hbWVWaXNpYmxlXCIgY2xhc3M9XCJkaWFsb2ctb3ZlcmxheVwiIEBjbGljaz1cImNhbmNlbFJlbmFtZVwiPlxuICAgICAgPHZpZXcgY2xhc3M9XCJkaWFsb2ctYm94XCIgQGNsaWNrLnN0b3A+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+6YeN5ZG95ZCNPC90ZXh0PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzcz1cImRpYWxvZy1pbnB1dFwiXG4gICAgICAgICAgdi1tb2RlbD1cInJlbmFtZVZhbHVlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIui+k+WFpeWQjeensFwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiMjBcIlxuICAgICAgICAgIGZvY3VzXG4gICAgICAgIC8+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiZGlhbG9nLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9nLWJ0biBkaWFsb2ctY2FuY2VsXCIgQGNsaWNrPVwiY2FuY2VsUmVuYW1lXCI+5Y+W5raIPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZy1idG4gZGlhbG9nLWNvbmZpcm1cIiBAY2xpY2s9XCJjb25maXJtUmVuYW1lXCI+56Gu6K6kPC9idXR0b24+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG4gIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBnZXREZXZpY2VTdGF0dXMsIHJlcXVlc3REZXZpY2VTdGF0dXMsIHNlbmRDb250cm9sQ29tbWFuZCwgZ2V0VGltZXJzLCBzYXZlVGltZXJzLCBkZWxldGVUaW1lciBhcyBkZWxldGVUaW1lckFwaSB9IGZyb20gJ0AvdXRpbHMvYXBpJ1xuaW1wb3J0IHsgZ2V0UGhvbmVOdW1iZXIgfSBmcm9tICdAL3V0aWxzL3N0b3JhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGV2aWNlS2V5OiAnJyxcbiAgICAgIGRldmljZU1vZGVsOiAnJyxcbiAgICAgIHN0YXR1czoge1xuICAgICAgICBvbmxpbmU6IGZhbHNlLFxuICAgICAgICBwd20xTGV2ZWw6IDAsXG4gICAgICAgIHB3bTNMZXZlbDogMCxcbiAgICAgICAgYWlyUHVtcExldmVsOiAwLFxuICAgICAgICByZWxheTFTdGF0ZTogZmFsc2UsXG4gICAgICAgIHJlbGF5MlN0YXRlOiBmYWxzZSxcbiAgICAgICAgcmVsYXkzU3RhdGU6IGZhbHNlLFxuICAgICAgICBzZXJ2b01vdmluZzogZmFsc2UsXG4gICAgICAgIGFkY1dRVm9sdGFnZTogMCxcbiAgICAgICAgYWRjVGVtcFZvbHRhZ2U6IDAsXG4gICAgICAgIHRkc1ZhbHVlOiAwLFxuICAgICAgICB3YXRlclRlbXBlcmF0dXJlOiAwLFxuICAgICAgICBzeXN0ZW1Qb3dlcmVkOiB0cnVlXG4gICAgICB9LFxuICAgICAgcHVtcExldmVsczogWyflhbMnLCAn5LiA5qGjJywgJ+S6jOahoycsICfkuInmoaMnXSxcbiAgICAgIGxhc3RVcGRhdGVUaW1lOiAnJyxcbiAgICAgIHRpbWVyOiBudWxsLFxuICAgICAgcmVuYW1lVmlzaWJsZTogZmFsc2UsXG4gICAgICByZW5hbWVWYWx1ZTogJycsXG4gICAgICByZW5hbWVUYXJnZXQ6ICcnLFxuICAgICAgcmVuYW1lRGVmYXVsdDogJycsXG4gICAgICB3czogbnVsbCxcbiAgICAgIHdzQ29ubmVjdGVkOiBmYWxzZSxcbiAgICAgIHdzUmVjb25uZWN0VGltZXI6IG51bGwsXG4gICAgICBzZXJ2b1RpbWVyOiBudWxsLFxuICAgICAgc2Vydm9TdGFydFRpbWU6IDAsXG4gICAgICBsYXN0Q2xpY2tUaW1lOiAwXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHRhc2tUeXBlTGFiZWxzKCkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfSxcbiAgICBkdXJhdGlvbkxhYmVscygpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH0sXG4gICAgd2F0ZXJRdWFsaXR5VGV4dCgpIHtcbiAgICAgIGNvbnN0IHYgPSB0aGlzLnN0YXR1cy50ZHNWYWx1ZSB8fCAwXG4gICAgICBpZiAodiA8IDE1MCkgcmV0dXJuICfkvJgnXG4gICAgICBpZiAodiA8IDIwMCkgcmV0dXJuICfoia8nXG4gICAgICBpZiAodiA8IDQwMCkgcmV0dXJuICfkuK0nXG4gICAgICByZXR1cm4gJ+W3ridcbiAgICB9LFxuICAgIHdhdGVyUXVhbGl0eUNsYXNzKCkge1xuICAgICAgY29uc3QgdiA9IHRoaXMuc3RhdHVzLnRkc1ZhbHVlIHx8IDBcbiAgICAgIGlmICh2IDwgMTUwKSByZXR1cm4gJ3dxLWV4Y2VsbGVudCdcbiAgICAgIGlmICh2IDwgMjAwKSByZXR1cm4gJ3dxLWdvb2QnXG4gICAgICBpZiAodiA8IDQwMCkgcmV0dXJuICd3cS1mYWlyJ1xuICAgICAgcmV0dXJuICd3cS1wb29yJ1xuICAgIH1cbiAgfSxcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB0aGlzLmRldmljZUtleSA9IG9wdGlvbnMuZGV2aWNlX2tleSB8fCAnJ1xuICAgIGlmICghdGhpcy5kZXZpY2VLZXkpIHtcbiAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+WPguaVsOmUmeivrycsIGljb246ICdub25lJyB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5sb2FkU3RhdHVzKClcblxuICAgIC8vIOi/nuaOpSBXZWJTb2NrZXQg5o6l5pS25a6e5pe25o6o6YCBXG4gICAgdGhpcy5jb25uZWN0V1MoKVxuXG4gICAgLy8g6L+b5YWl6aG16Z2i6Ieq5Yqo6K+35rGC5pyA5paw54q25oCBXG4gICAgcmVxdWVzdERldmljZVN0YXR1cyh0aGlzLmRldmljZUtleSkudGhlbigoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApXG4gICAgfSlcblxuICAgIC8vIDEw56eS6L2u6K+iXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZFN0YXR1cygpXG4gICAgICB0aGlzLmNoZWNrU2Vydm9UaW1lb3V0KClcbiAgICB9LCAxMDAwMClcblxuICAgIC8vIOiIteacuui2heaXtuajgOa1i1xuICAgIHRoaXMuc2Vydm9UaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tTZXJ2b1RpbWVvdXQoKVxuICAgIH0sIDIwMDApXG4gIH0sXG4gIG9uVW5sb2FkKCkge1xuICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLnNlcnZvVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zZXJ2b1RpbWVyKVxuICAgIH1cbiAgICB0aGlzLmRpc2Nvbm5lY3RXUygpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRDdHJsTmFtZSh0YXJnZXQsIGRlZmF1bHROYW1lKSB7XG4gICAgICBjb25zdCBrZXkgPSAnY3RybF9uYW1lXycgKyB0aGlzLmRldmljZUtleSArICdfJyArIHRhcmdldFxuICAgICAgY29uc3QgbmFtZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhrZXkpXG4gICAgICByZXR1cm4gbmFtZSB8fCBkZWZhdWx0TmFtZVxuICAgIH0sXG5cbiAgICBjaGVja1JhdGVMaW1pdCgpIHtcbiAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RDbGlja1RpbWUgPCAxMDAwKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+aTjeS9nOi/h+W/q++8jOaFoueCueWTnycsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdENsaWNrVGltZSA9IG5vd1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuXG4gICAgc3RhcnRSZW5hbWUodGFyZ2V0LCBkZWZhdWx0TmFtZSkge1xuICAgICAgdGhpcy5yZW5hbWVUYXJnZXQgPSB0YXJnZXRcbiAgICAgIHRoaXMucmVuYW1lRGVmYXVsdCA9IGRlZmF1bHROYW1lXG4gICAgICB0aGlzLnJlbmFtZVZhbHVlID0gdGhpcy5nZXRDdHJsTmFtZSh0YXJnZXQsIGRlZmF1bHROYW1lKVxuICAgICAgaWYgKHRoaXMucmVuYW1lVmFsdWUgPT09IGRlZmF1bHROYW1lKSB7XG4gICAgICAgIHRoaXMucmVuYW1lVmFsdWUgPSAnJ1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5hbWVWaXNpYmxlID0gdHJ1ZVxuICAgIH0sXG5cbiAgICBjYW5jZWxSZW5hbWUoKSB7XG4gICAgICB0aGlzLnJlbmFtZVZpc2libGUgPSBmYWxzZVxuICAgICAgdGhpcy5yZW5hbWVUYXJnZXQgPSAnJ1xuICAgICAgdGhpcy5yZW5hbWVWYWx1ZSA9ICcnXG4gICAgfSxcblxuICAgIGNvbmZpcm1SZW5hbWUoKSB7XG4gICAgICBpZiAoIXRoaXMucmVuYW1lVGFyZ2V0KSByZXR1cm5cbiAgICAgIGNvbnN0IGtleSA9ICdjdHJsX25hbWVfJyArIHRoaXMuZGV2aWNlS2V5ICsgJ18nICsgdGhpcy5yZW5hbWVUYXJnZXRcbiAgICAgIGlmICh0aGlzLnJlbmFtZVZhbHVlICYmIHRoaXMucmVuYW1lVmFsdWUudHJpbSgpKSB7XG4gICAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhrZXksIHRoaXMucmVuYW1lVmFsdWUudHJpbSgpKVxuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfph43lkb3lkI3miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhrZXkpXG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+W3suaBouWkjem7mOiupOWQjeensCcsIGljb246ICdub25lJyB9KVxuICAgICAgfVxuICAgICAgdGhpcy5jYW5jZWxSZW5hbWUoKVxuICAgIH0sXG5cbiAgICAvLyA9PT09PSBXZWJTb2NrZXQg5a6e5pe25o6o6YCBID09PT09XG4gICAgZ2V0V1NCYXNlVVJMKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gYHdzOi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH1gXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICByZXR1cm4gJ3dzOi8vMTEyLjEyNC4xMDcuMTU5Ojc5NjUnXG4gICAgfSxcblxuICAgIGNvbm5lY3RXUygpIHtcbiAgICAgIGlmICh0aGlzLndzKSByZXR1cm5cbiAgICAgIGNvbnN0IHBob25lID0gZ2V0UGhvbmVOdW1iZXIoKVxuICAgICAgaWYgKCFwaG9uZSkgcmV0dXJuXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLmdldFdTQmFzZVVSTCgpXG4gICAgICAgIHRoaXMud3MgPSB1bmkuY29ubmVjdFNvY2tldCh7XG4gICAgICAgICAgdXJsOiBgJHtiYXNlVXJsfS93cy9jbGllbnRgLFxuICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHt9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy53cy5vbk9wZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMud3NDb25uZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgdW5pLnNlbmRTb2NrZXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2F1dGgnLCBwaG9uZSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdW5pLnNlbmRTb2NrZXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ3N1YnNjcmliZScsIGRldmljZV9rZXk6IHRoaXMuZGV2aWNlS2V5IH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLndzLm9uTWVzc2FnZSgocmVzKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IEpTT04ucGFyc2UocmVzLmRhdGEpXG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdkZXZpY2Vfc3RhdHVzJyAmJiBtc2cuZGV2aWNlX2tleSA9PT0gdGhpcy5kZXZpY2VLZXkpIHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXNGcm9tV1MobXNnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy53cy5vbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLndzQ29ubmVjdGVkID0gZmFsc2VcbiAgICAgICAgICB0aGlzLndzID0gbnVsbFxuICAgICAgICAgIGlmICghdGhpcy53c1JlY29ubmVjdFRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLndzUmVjb25uZWN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy53c1JlY29ubmVjdFRpbWVyID0gbnVsbFxuICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RXUygpXG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLndzLm9uRXJyb3IoKCkgPT4ge1xuICAgICAgICAgIHRoaXMud3NDb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnV2ViU29ja2V06L+e5o6l5aSx6LSl77yM5L2/55SoSFRUUOi9ruivoicsIGUpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGRpc2Nvbm5lY3RXUygpIHtcbiAgICAgIGlmICh0aGlzLndzUmVjb25uZWN0VGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMud3NSZWNvbm5lY3RUaW1lcilcbiAgICAgICAgdGhpcy53c1JlY29ubmVjdFRpbWVyID0gbnVsbFxuICAgICAgfVxuICAgICAgaWYgKHRoaXMud3MpIHtcbiAgICAgICAgdGhpcy53cy5jbG9zZSgpXG4gICAgICAgIHRoaXMud3MgPSBudWxsXG4gICAgICAgIHRoaXMud3NDb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVTdGF0dXNGcm9tV1MobXNnKSB7XG4gICAgICBjb25zdCBzID0gbXNnLnN0YXR1cyB8fCB7fVxuICAgICAgY29uc3QgbW92aW5nID0gcy5zZXJ2b01vdmluZyB8fCBmYWxzZVxuICAgICAgaWYgKG1vdmluZyAmJiAhdGhpcy5zZXJ2b1N0YXJ0VGltZSkge1xuICAgICAgICB0aGlzLnNlcnZvU3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgICAgfVxuICAgICAgaWYgKCFtb3ZpbmcpIHtcbiAgICAgICAgdGhpcy5zZXJ2b1N0YXJ0VGltZSA9IDBcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdHVzID0ge1xuICAgICAgICBvbmxpbmU6IG1zZy5vbmxpbmUgfHwgZmFsc2UsXG4gICAgICAgIHB3bTFMZXZlbDogcy5wd20xTGV2ZWwgfHwgMCxcbiAgICAgICAgcHdtM0xldmVsOiBzLnB3bTNMZXZlbCB8fCAwLFxuICAgICAgICBhaXJQdW1wTGV2ZWw6IHMuYWlyUHVtcExldmVsIHx8IDAsXG4gICAgICAgIHJlbGF5MVN0YXRlOiBzLnJlbGF5MVN0YXRlIHx8IGZhbHNlLFxuICAgICAgICByZWxheTJTdGF0ZTogcy5yZWxheTJTdGF0ZSB8fCBmYWxzZSxcbiAgICAgICAgcmVsYXkzU3RhdGU6IHMucmVsYXkzU3RhdGUgfHwgZmFsc2UsXG4gICAgICAgIHNlcnZvTW92aW5nOiBzLnNlcnZvTW92aW5nIHx8IGZhbHNlLFxuICAgICAgICBhZGNXUVZvbHRhZ2U6IHMuYWRjV1FWb2x0YWdlIHx8IDAsXG4gICAgICAgIGFkY1RlbXBWb2x0YWdlOiBzLmFkY1RlbXBWb2x0YWdlIHx8IDAsXG4gICAgICAgIHRkc1ZhbHVlOiBzLnRkc1ZhbHVlIHx8IDAsXG4gICAgICAgIHdhdGVyVGVtcGVyYXR1cmU6IHMud2F0ZXJUZW1wZXJhdHVyZSB8fCAwLFxuICAgICAgICBzeXN0ZW1Qb3dlcmVkOiBzLnN5c3RlbVBvd2VyZWQgIT09IGZhbHNlXG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RVcGRhdGVUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKVxuICAgIH0sXG5cbiAgICBhc3luYyBsb2FkU3RhdHVzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RGV2aWNlU3RhdHVzKHRoaXMuZGV2aWNlS2V5KVxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLmRldmljZU1vZGVsID0gcmVzLm1vZGVsIHx8ICcnXG4gICAgICAgICAgY29uc3QgcyA9IHJlcy5zdGF0dXMgfHwge31cbiAgICAgICAgICBjb25zdCBtb3ZpbmcgPSBzLnNlcnZvTW92aW5nIHx8IGZhbHNlXG4gICAgICAgICAgaWYgKG1vdmluZyAmJiAhdGhpcy5zZXJ2b1N0YXJ0VGltZSkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2b1N0YXJ0VGltZSA9IERhdGUubm93KClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFtb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vydm9TdGFydFRpbWUgPSAwXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc3RhdHVzID0ge1xuICAgICAgICAgICAgb25saW5lOiByZXMub25saW5lIHx8IGZhbHNlLFxuICAgICAgICAgICAgcHdtMUxldmVsOiBzLnB3bTFMZXZlbCB8fCAwLFxuICAgICAgICAgICAgcHdtM0xldmVsOiBzLnB3bTNMZXZlbCB8fCAwLFxuICAgICAgICAgICAgYWlyUHVtcExldmVsOiBzLmFpclB1bXBMZXZlbCB8fCAwLFxuICAgICAgICAgICAgcmVsYXkxU3RhdGU6IHMucmVsYXkxU3RhdGUgfHwgZmFsc2UsXG4gICAgICAgICAgICByZWxheTJTdGF0ZTogcy5yZWxheTJTdGF0ZSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHJlbGF5M1N0YXRlOiBzLnJlbGF5M1N0YXRlIHx8IGZhbHNlLFxuICAgICAgICAgICAgc2Vydm9Nb3Zpbmc6IHMuc2Vydm9Nb3ZpbmcgfHwgZmFsc2UsXG4gICAgICAgICAgICBhZGNXUVZvbHRhZ2U6IHMuYWRjV1FWb2x0YWdlIHx8IDAsXG4gICAgICAgICAgICBhZGNUZW1wVm9sdGFnZTogcy5hZGNUZW1wVm9sdGFnZSB8fCAwLFxuICAgICAgICAgICAgdGRzVmFsdWU6IHMudGRzVmFsdWUgfHwgMCxcbiAgICAgICAgICAgIHdhdGVyVGVtcGVyYXR1cmU6IHMud2F0ZXJUZW1wZXJhdHVyZSB8fCAwLFxuICAgICAgICAgICAgc3lzdGVtUG93ZXJlZDogcy5zeXN0ZW1Qb3dlcmVkICE9PSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxhc3RVcGRhdGVUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLnN0YXR1cy5vbmxpbmUgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICByZWZyZXNoU3RhdHVzKCkge1xuICAgICAgdW5pLnNob3dMb2FkaW5nKHsgdGl0bGU6ICfliLfmlrDkuK0uLi4nIH0pXG4gICAgICByZXF1ZXN0RGV2aWNlU3RhdHVzKHRoaXMuZGV2aWNlS2V5KS50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkU3RhdHVzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDgwMClcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkU3RhdHVzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGFzeW5jIHNldFB1bXAocHVtcCwgbGV2ZWwpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cblxuICAgICAgdGhpcy5zdGF0dXNbYHB3bSR7cHVtcH1MZXZlbGBdID0gbGV2ZWxcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCAnc2V0X3B1bXAnLCB7IHB1bXAsIGxldmVsIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3RhdHVzKCksIDgwMClcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7miJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIHNldExpZ2h0KGxldmVsKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY2hlY2tSYXRlTGltaXQoKSkgcmV0dXJuXG5cbiAgICAgIHRoaXMuc3RhdHVzLnB3bTNMZXZlbCA9IGxldmVsXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3NldF9saWdodCcsIHsgbGV2ZWwgfSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRTdGF0dXMoKSwgODAwKVxuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruaIkOWKnycsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgc2V0QWlyUHVtcChsZXZlbCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUpIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/JywgaWNvbjogJ25vbmUnIH0pOyByZXR1cm4gfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuICAgICAgdGhpcy5zdGF0dXMuYWlyUHVtcExldmVsID0gbGV2ZWxcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3NldF9haXJfcHVtcCcsIHsgbGV2ZWwgfSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3RhdHVzKCksIDgwMCk7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruaIkOWKnycsIGljb246ICdzdWNjZXNzJyB9KSB9XG4gICAgICAgIGVsc2UgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgICAgfSBjYXRjaCAoZSkgeyB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7nva7lpLHotKUnLCBpY29uOiAnbm9uZScgfSkgfVxuICAgIH0sXG5cbiAgICBhc3luYyBzZXRSZWxheTIob24pIHtcbiAgICAgIGlmICghdGhpcy5zdGF0dXMub25saW5lKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvuWkh+emu+e6vycsIGljb246ICdub25lJyB9KTsgcmV0dXJuIH1cbiAgICAgIGlmICghdGhpcy5jaGVja1JhdGVMaW1pdCgpKSByZXR1cm5cbiAgICAgIHRoaXMuc3RhdHVzLnJlbGF5MlN0YXRlID0gb25cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRDb250cm9sQ29tbWFuZCh0aGlzLmRldmljZUtleSwgJ3NldF9yZWxheTInLCB7IG9uIH0pXG4gICAgICAgIGlmIChyZXMuc3VjY2VzcykgeyBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCA4MDApIH1cbiAgICAgICAgZWxzZSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzLm1lc3NhZ2UgfHwgJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgICB9IGNhdGNoIChlKSB7IHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+iuvue9ruWksei0pScsIGljb246ICdub25lJyB9KSB9XG4gICAgfSxcblxuICAgIGFzeW5jIHNldFJlbGF5Myhvbikge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUpIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/JywgaWNvbjogJ25vbmUnIH0pOyByZXR1cm4gfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuICAgICAgdGhpcy5zdGF0dXMucmVsYXkzU3RhdGUgPSBvblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCAnc2V0X3JlbGF5MycsIHsgb24gfSlcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3RhdHVzKCksIDgwMCkgfVxuICAgICAgICBlbHNlIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiByZXMubWVzc2FnZSB8fCAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHsgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+572u5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgdHJpZ2dlclNlcnZvKCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXR1cy5vbmxpbmUgfHwgdGhpcy5zdGF0dXMuc2Vydm9Nb3ZpbmcpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K6+5aSH56a757q/5oiW6Ii15py66L+Q6KGM5LitJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kQ29udHJvbENvbW1hbmQodGhpcy5kZXZpY2VLZXksICd0cmlnZ2VyX3NlcnZvJywge30pXG4gICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMuc3RhdHVzLnNlcnZvTW92aW5nID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuc2Vydm9TdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5ZaC6aOf5bey5ZCv5YqoJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiByZXMubWVzc2FnZSB8fCAn5ZCv5Yqo5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+WQr+WKqOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBjaGVja1NlcnZvVGltZW91dCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXR1cy5zZXJ2b01vdmluZyAmJiB0aGlzLnNlcnZvU3RhcnRUaW1lID4gMCkge1xuICAgICAgICBjb25zdCBlbGFwc2VkID0gKERhdGUubm93KCkgLSB0aGlzLnNlcnZvU3RhcnRUaW1lKSAvIDEwMDBcbiAgICAgICAgaWYgKGVsYXBzZWQgPiA4KSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXMuc2Vydm9Nb3ZpbmcgPSBmYWxzZVxuICAgICAgICAgIHRoaXMuc2Vydm9TdGFydFRpbWUgPSAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgdG9nZ2xlUG93ZXIoKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHVzLm9ubGluZSkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICforr7lpIfnprvnur8nLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzUG93ZXJlZCA9IHRoaXMuc3RhdHVzLnN5c3RlbVBvd2VyZWRcbiAgICAgIGNvbnN0IGNtZCA9IGlzUG93ZXJlZCA/ICdwb3dlcl9vZmYnIDogJ3Bvd2VyX29uJ1xuICAgICAgY29uc3QgY29uZmlybVRleHQgPSBpc1Bvd2VyZWQgPyAn56Gu5a6a6KaB5YWz5py65ZCX77yfXFxu5YWz5py65ZCO6K6+5aSH5L+d5oyB572R57uc6L+e5o6l77yM5Y+v6L+c56iL5byA5py644CCJyA6ICfnoa7lrpropoHlvIDmnLrlkJfvvJ8nXG5cbiAgICAgIHVuaS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+ehruiupOaTjeS9nCcsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpcm1UZXh0LFxuICAgICAgICBzdWNjZXNzOiAobW9kYWxSZXMpID0+IHtcbiAgICAgICAgICBpZiAoIW1vZGFsUmVzLmNvbmZpcm0pIHJldHVyblxuICAgICAgICAgIHRoaXMuZXhlY3V0ZVBvd2VyQ21kKGNtZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgYXN5bmMgZXhlY3V0ZVBvd2VyQ21kKGNtZCkge1xuICAgICAgaWYgKCF0aGlzLmNoZWNrUmF0ZUxpbWl0KCkpIHJldHVyblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZENvbnRyb2xDb21tYW5kKHRoaXMuZGV2aWNlS2V5LCBjbWQsIHt9KVxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLnN0YXR1cy5zeXN0ZW1Qb3dlcmVkID0gY21kID09PSAncG93ZXJfb24nXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiBjbWQgPT09ICdwb3dlcl9vbicgPyAn5byA5py65oiQ5YqfJyA6ICflhbPmnLrmiJDlip8nLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFN0YXR1cygpLCAxMDAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogcmVzdWx0Lm1lc3NhZ2UgfHwgJ+aTjeS9nOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfmk43kvZzlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5jb250cm9sLXBhZ2Uge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgcGFkZGluZy1ib3R0b206IDEyMHJweDtcbn1cblxuLnN0YXR1cy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWE3M2U4IDAlLCAjMGQ0N2ExIDEwMCUpO1xuICBwYWRkaW5nOiA0MHJweDtcbiAgY29sb3I6ICNmZmY7XG5cbiAgJi5vZmZsaW5lIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY2IDAlLCAjMzMzIDEwMCUpO1xuICB9XG59XG5cbi5zdGF0dXMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZ2FwOiAyMHJweDtcbn1cblxuLnN0YXR1cy1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBnYXA6IDIwcnB4O1xufVxuXG4uc3RhdHVzLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC5pbmRpY2F0b3ItZG90IHtcbiAgICB3aWR0aDogMTZycHg7XG4gICAgaGVpZ2h0OiAxNnJweDtcbiAgICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycnB4O1xuXG4gICAgLm9mZmxpbmUgJiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICAgIH1cbiAgfVxuXG4gIHRleHQge1xuICAgIGZvbnQtc2l6ZTogMjZycHg7XG4gIH1cbn1cblxuLmRldmljZS1rZXkge1xuICBmb250LXNpemU6IDMycnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLm1vZGVsLWluZm8taGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnJweDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi8vID09PT09IOS8oOaEn+WZqOS4pOWIlyA9PT09PVxuLnNlbnNvci1zZWN0aW9uIHtcbiAgcGFkZGluZzogMjBycHggNDBycHg7XG59XG5cbi5zZW5zb3ItZ3JpZC50d28tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2Vuc29yLWl0ZW0ge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHJweDtcbiAgcGFkZGluZzogMjRycHggMTBycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAxMHJweDtcbiAgYm94LXNoYWRvdzogMCAycnB4IDEycnB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbi5zZW5zb3ItaXRlbTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2Vuc29yLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnNlbnNvci1pY29uIHtcbiAgZm9udC1zaXplOiA0OHJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJycHg7XG59XG5cbi5zZW5zb3ItbGFiZWwge1xuICBmb250LXNpemU6IDI0cnB4O1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWJvdHRvbTogOHJweDtcbn1cblxuLnNlbnNvci12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzZycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbn1cblxuLndxLXRhZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyMnJweDtcbiAgcGFkZGluZzogNHJweCAxMnJweDtcbiAgYm9yZGVyLXJhZGl1czogOHJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ud3EtZXhjZWxsZW50IHsgYmFja2dyb3VuZDogI2U4ZjVlOTsgY29sb3I6ICMyZTdkMzI7IH1cbi53cS1nb29kIHsgYmFja2dyb3VuZDogI2UzZjJmZDsgY29sb3I6ICMxNTY1YzA7IH1cbi53cS1mYWlyIHsgYmFja2dyb3VuZDogI2ZmZjNlMDsgY29sb3I6ICNlNjUxMDA7IH1cbi53cS1wb29yIHsgYmFja2dyb3VuZDogI2ZmZWJlZTsgY29sb3I6ICNjNjI4Mjg7IH1cblxuLy8gPT09PT0g5aSn5Zu+5qCH5oyJ6ZKuID09PT09XG4uYmlnLWJ0bi1zZWN0aW9uIHtcbiAgcGFkZGluZzogMCA0MHJweCAxMHJweDtcbn1cblxuLmJpZy1idG4tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDMwcnB4O1xufVxuXG4uYmlnLWJ0bi13cmFwcGVyIHtcbiAgZmxleDogMTtcbn1cblxuLmJpZy1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjRycHg7XG4gIHBhZGRpbmc6IDQwcnB4IDA7XG4gIGJveC1zaGFkb3c6IDAgNHJweCAxNnJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cblxuICAuYmlnLWJ0bi1pY29uIHtcbiAgICBmb250LXNpemU6IDgwcnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cnB4O1xuICB9XG5cbiAgLmJpZy1idG4tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjhycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gICYucG93ZXItb24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlOGY1ZTksICNjOGU2YzkpO1xuICAgIC5iaWctYnRuLWxhYmVsIHsgY29sb3I6ICMyZTdkMzI7IH1cbiAgfVxuXG4gICYucG93ZXItb2ZmIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZlYmVlLCAjZmZjZGQyKTtcbiAgICAuYmlnLWJ0bi1sYWJlbCB7IGNvbG9yOiAjYzYyODI4OyB9XG4gIH1cblxuICAmLmZlZWQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTNmMmZkLCAjYmJkZWZiKTtcbiAgICAuYmlnLWJ0bi1sYWJlbCB7IGNvbG9yOiAjMTU2NWMwOyB9XG5cbiAgICAmLmJ1c3kge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZjNlMCwgI2ZmZTBiMik7XG4gICAgICAuYmlnLWJ0bi1sYWJlbCB7IGNvbG9yOiAjZTY1MTAwOyB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09IOaOp+WItuWNoeeJhyA9PT09PVxuLmNvbnRyb2wtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDIwcnB4IDQwcnB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMjBycHg7XG59XG5cbi5jb250cm9sLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHJweDtcbiAgcGFkZGluZzogMzBycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcnB4O1xuICBib3gtc2hhZG93OiAwIDJycHggMTJycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLmNvbnRyb2wtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXJweDtcbn1cblxuLmNvbnRyb2wtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbiAgcGFkZGluZzogNnJweCAxMnJweDtcbiAgYm9yZGVyLXJhZGl1czogOHJweDtcblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgfVxufVxuXG4uY29udHJvbC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiAjMWE3M2U4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnB1bXAtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sZXZlbC1idG4ge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDcwcnB4O1xuICBtYXJnaW46IDAgMTBycHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDI2cnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHJweDtcbiAgYm9yZGVyOiBub25lO1xuXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWE3M2U4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi8vID09PT09IOW8gOWFs+WNoeeJhyA9PT09PVxuLnN3aXRjaC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTZycHg7XG4gIHBhZGRpbmc6IDI0cnB4IDMwcnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDJycHggMTBycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnN3aXRjaC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA2cnB4IDEycnB4O1xuICBib3JkZXItcmFkaXVzOiA4cnB4O1xuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICB9XG59XG5cbi8vID09PT09IOiHquWumuS5ieW8gOWFsyA9PT09PVxuLmN1c3RvbS1zd2l0Y2gge1xuICB3aWR0aDogOTZycHg7XG4gIGhlaWdodDogNTJycHg7XG4gIGJvcmRlci1yYWRpdXM6IDI2cnB4O1xuICBwYWRkaW5nOiA0cnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jdXN0b20tc3dpdGNoLm9mZiB7IGJhY2tncm91bmQ6ICNkZGQ7IH1cbi5jdXN0b20tc3dpdGNoLm9uIHsgYmFja2dyb3VuZDogIzFhNzNlODsgfVxuLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1zd2l0Y2gta25vYiB7XG4gIHdpZHRoOiA0NHJweDtcbiAgaGVpZ2h0OiA0NHJweDtcbiAgYm9yZGVyLXJhZGl1czogMjJycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnJweCA4cnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4uY3VzdG9tLXN3aXRjaC5vbiAuY3VzdG9tLXN3aXRjaC1rbm9iIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQ0cnB4KTtcbn1cblxuLy8gPT09PT0g5bqV6YOo5qCPID09PT09XG4uYm90dG9tLWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHJweCA0MHJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcDogMXJweCBzb2xpZCAjZWVlO1xufVxuXG4ucmVmcmVzaC10aW1lIHtcbiAgZm9udC1zaXplOiAyNHJweDtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5yZWZyZXNoLWJ0biB7XG4gIGZvbnQtc2l6ZTogMjZycHg7XG4gIGNvbG9yOiAjMWE3M2U4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi8vID09PT09IOW8ueeqlyA9PT09PVxuLmRpYWxvZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmRpYWxvZy1ib3gge1xuICB3aWR0aDogNjAwcnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyNHJweDtcbiAgcGFkZGluZzogNTBycHggNDBycHggMzBycHg7XG59XG5cbi5kaWFsb2ctdGl0bGUge1xuICBmb250LXNpemU6IDM0cnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDQwcnB4O1xufVxuXG4uZGlhbG9nLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBycHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDEycnB4O1xuICBwYWRkaW5nOiAwIDI0cnB4O1xuICBmb250LXNpemU6IDMwcnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tYm90dG9tOiA0MHJweDtcbn1cblxuLmRpYWxvZy1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGlhbG9nLWJ0biB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogODBycHg7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAxMHJweDtcbn1cblxuLmRpYWxvZy1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmRpYWxvZy1jb25maXJtIHtcbiAgYmFja2dyb3VuZDogIzFhNzNlODtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vID09PT09IOWumuaXtuS7u+WKoSA9PT09PVxuLmVtcHR5LXRpcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBycHg7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDI2cnB4O1xufVxuXG4udGltZXItY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cnB4O1xuICBwYWRkaW5nOiAyNHJweCAzMHJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycnB4IDEwcnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi50aW1lci1jYXJkLWxlZnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhycHg7XG59XG5cbi50aW1lci1jYXJkLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBycHg7XG59XG5cbi50aW1lci1uYW1lIHtcbiAgZm9udC1zaXplOiAzMHJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4udGltZXItdGltZSB7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiAjMWE3M2U4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpbWVyLWRlc2Mge1xuICBmb250LXNpemU6IDI2cnB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnRpbWVyLWR1cmF0aW9uIHtcbiAgZm9udC1zaXplOiAyNHJweDtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi50aW1lci1jYXJkLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cnB4O1xufVxuXG4udGltZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHJweDtcbn1cblxuLnRpbWVyLWVkaXQge1xuICBmb250LXNpemU6IDI0cnB4O1xuICBjb2xvcjogIzFhNzNlODtcbiAgcGFkZGluZzogNHJweCAxMnJweDtcbn1cblxuLnRpbWVyLWRlbGV0ZSB7XG4gIGZvbnQtc2l6ZTogMjRycHg7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBwYWRkaW5nOiA0cnB4IDEycnB4O1xufVxuXG4uYWRkLXRpbWVyLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzFhNzNlODtcbiAgZm9udC1zaXplOiAzMHJweDtcbiAgYm9yZGVyLXJhZGl1czogMTZycHg7XG4gIGJvcmRlcjogMnJweCBkYXNoZWQgIzFhNzNlODtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcnB4O1xufVxuXG4udGltZXItZGlhbG9nIHtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnRpbWVyLWZvcm0tbGFiZWwge1xuICBmb250LXNpemU6IDI4cnB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE2cnB4O1xuICBtYXJnaW4tdG9wOiAyMHJweDtcbn1cblxuLnRpbWVyLWZvcm0tbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi50aW1lci1waWNrZXItcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBycHg7XG59XG5cbi50aW1lci1waWNrZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHJweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogMTJycHg7XG4gIHBhZGRpbmc6IDAgMjRycHg7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGxpbmUtaGVpZ2h0OiA4MHJweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///38\n");

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
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _storage = __webpack_require__(/*! @/utils/storage */ 15);\nvar _api = __webpack_require__(/*! @/utils/api */ 16);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      deviceKey: ''\n    };\n  },\n  methods: {\n    handleBind: function handleBind() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var phone, res;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(_this.deviceKey.length !== 8)) {\n                  _context.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '请输入8位密钥',\n                  icon: 'none'\n                });\n                return _context.abrupt(\"return\");\n              case 3:\n                phone = (0, _storage.getPhoneNumber)();\n                if (phone) {\n                  _context.next = 8;\n                  break;\n                }\n                uni.showToast({\n                  title: '请先登录',\n                  icon: 'none'\n                });\n                uni.navigateTo({\n                  url: '/pages/login/index'\n                });\n                return _context.abrupt(\"return\");\n              case 8:\n                uni.showLoading({\n                  title: '绑定中...'\n                });\n                _context.prev = 9;\n                _context.next = 12;\n                return (0, _api.bindDevice)(phone, _this.deviceKey);\n              case 12:\n                res = _context.sent;\n                uni.hideLoading();\n                if (res.success) {\n                  uni.showToast({\n                    title: '绑定成功',\n                    icon: 'success'\n                  });\n                  setTimeout(function () {\n                    uni.navigateBack();\n                  }, 1500);\n                } else {\n                  uni.showToast({\n                    title: res.message || '绑定失败',\n                    icon: 'none'\n                  });\n                }\n                _context.next = 21;\n                break;\n              case 17:\n                _context.prev = 17;\n                _context.t0 = _context[\"catch\"](9);\n                uni.hideLoading();\n                uni.showToast({\n                  title: _context.t0.message || '绑定失败',\n                  icon: 'none'\n                });\n              case 21:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[9, 17]]);\n      }))();\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvYmluZC9pbmRleC52dWUiXSwibmFtZXMiOlsiZGF0YSIsImRldmljZUtleSIsIm1ldGhvZHMiLCJoYW5kbGVCaW5kIiwidW5pIiwidGl0bGUiLCJpY29uIiwicGhvbmUiLCJ1cmwiLCJyZXMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUEyREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFQTtFQUNBQTtJQUNBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLE1BQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ0FDO2tCQUFBQztrQkFBQUM7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFJQUM7Z0JBQUEsSUFDQUE7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ0FIO2tCQUFBQztrQkFBQUM7Z0JBQUE7Z0JBQ0FGO2tCQUFBSTtnQkFBQTtnQkFBQTtjQUFBO2dCQUlBSjtrQkFBQUM7Z0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FHQTtjQUFBO2dCQUFBSTtnQkFDQUw7Z0JBRUE7a0JBQ0FBO29CQUFBQztvQkFBQUM7a0JBQUE7a0JBQ0FJO29CQUNBTjtrQkFDQTtnQkFDQTtrQkFDQUE7b0JBQUFDO29CQUFBQztrQkFBQTtnQkFDQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVBRjtnQkFDQUE7a0JBQUFDO2tCQUFBQztnQkFBQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dmlldyBjbGFzcz1cImJpbmQtcGFnZVwiPlxuICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8dGV4dCBjbGFzcz1cImhlYWRlci10aXRsZVwiPue7keWumuiuvuWkhzwvdGV4dD5cbiAgICA8L3ZpZXc+XG4gICAgXG4gICAgPHZpZXcgY2xhc3M9XCJiaW5kLWNhcmRcIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwiYmluZC1pY29uXCI+8J+UkTwvdmlldz5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiYmluZC10aXRsZVwiPui+k+WFpeiuvuWkh+WvhumSpTwvdGV4dD5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiYmluZC1oaW50XCI+6K6+5aSH5a+G6ZKl5Y+v5ZyoT0xFROWxj+W5leS4iuafpeecizwvdGV4dD5cbiAgICAgIFxuICAgICAgPHZpZXcgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgY2xhc3M9XCJrZXktaW5wdXRcIiBcbiAgICAgICAgICB2LW1vZGVsPVwiZGV2aWNlS2V5XCIgXG4gICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpTjkvY3lr4bpkqVcIlxuICAgICAgICAgIG1heGxlbmd0aD1cIjhcIlxuICAgICAgICAvPlxuICAgICAgPC92aWV3PlxuICAgICAgXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYmluZC1idG5cIiBAY2xpY2s9XCJoYW5kbGVCaW5kXCIgOmRpc2FibGVkPVwiIWRldmljZUtleSB8fCBkZXZpY2VLZXkubGVuZ3RoICE9PSA4XCI+XG4gICAgICAgIOe7keWumuiuvuWkh1xuICAgICAgPC9idXR0b24+XG4gICAgICBcbiAgICAgIDx2aWV3IGNsYXNzPVwidGlwc1wiPlxuICAgICAgICA8dGV4dD7pppbmrKHkvb/nlKjor7flhYjov57mjqXorr7lpIdXaUZp6L+b6KGM6YWN572uPC90ZXh0PlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cbiAgICBcbiAgICA8dmlldyBjbGFzcz1cImd1aWRlLXNlY3Rpb25cIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiZ3VpZGUtdGl0bGVcIj7phY3nva7mraXpqqQ8L3RleHQ+XG4gICAgICA8dmlldyBjbGFzcz1cImd1aWRlLWxpc3RcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJndWlkZS1pdGVtXCI+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJndWlkZS1udW1iZXJcIj4xPC92aWV3PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZ3VpZGUtdGV4dFwiPui/nuaOpeiuvuWkh1dpRmkgKGZpc2gtbWFuYWdlci14eHh4KTwvdGV4dD5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8dmlldyBjbGFzcz1cImd1aWRlLWl0ZW1cIj5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cImd1aWRlLW51bWJlclwiPjI8L3ZpZXc+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJndWlkZS10ZXh0XCI+5omT5byA5rWP6KeI5Zmo6K6/6Zeu6YWN572u6aG16Z2iPC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiZ3VpZGUtaXRlbVwiPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZ3VpZGUtbnVtYmVyXCI+Mzwvdmlldz5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImd1aWRlLXRleHRcIj7ovpPlhaXmiYvmnLrlj7flkozlrrbluq1XaUZp5L+h5oGvPC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiZ3VpZGUtaXRlbVwiPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZ3VpZGUtbnVtYmVyXCI+NDwvdmlldz5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImd1aWRlLXRleHRcIj7kv53lrZjlkI7orr7lpIfoh6rliqjov57mjqVXaUZpPC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiZ3VpZGUtaXRlbVwiPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZ3VpZGUtbnVtYmVyXCI+NTwvdmlldz5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImd1aWRlLXRleHRcIj7lnKhBUFDkuK3ovpPlhaXlr4bpkqXlrozmiJDnu5Hlrpo8L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG4gIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBnZXRQaG9uZU51bWJlciB9IGZyb20gJ0AvdXRpbHMvc3RvcmFnZSdcbmltcG9ydCB7IGJpbmREZXZpY2UgfSBmcm9tICdAL3V0aWxzL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXZpY2VLZXk6ICcnXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgaGFuZGxlQmluZCgpIHtcbiAgICAgIGlmICh0aGlzLmRldmljZUtleS5sZW5ndGggIT09IDgpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K+36L6T5YWlOOS9jeWvhumSpScsIGljb246ICdub25lJyB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgcGhvbmUgPSBnZXRQaG9uZU51bWJlcigpXG4gICAgICBpZiAoIXBob25lKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+ivt+WFiOeZu+W9lScsIGljb246ICdub25lJyB9KVxuICAgICAgICB1bmkubmF2aWdhdGVUbyh7IHVybDogJy9wYWdlcy9sb2dpbi9pbmRleCcgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBcbiAgICAgIHVuaS5zaG93TG9hZGluZyh7IHRpdGxlOiAn57uR5a6a5LitLi4uJyB9KVxuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBiaW5kRGV2aWNlKHBob25lLCB0aGlzLmRldmljZUtleSlcbiAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcbiAgICAgICAgXG4gICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+e7keWumuaIkOWKnycsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdW5pLm5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgfSwgMTUwMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IHJlcy5tZXNzYWdlIHx8ICfnu5HlrprlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6IGUubWVzc2FnZSB8fCAn57uR5a6a5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uYmluZC1wYWdlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA0MHJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjZWVlO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzNnJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uYmluZC1jYXJkIHtcbiAgbWFyZ2luOiA0MHJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjRycHg7XG4gIHBhZGRpbmc6IDUwcnB4IDQwcnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmluZC1pY29uIHtcbiAgZm9udC1zaXplOiA4MHJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBycHg7XG59XG5cbi5iaW5kLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzNnJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tYm90dG9tOiAxNnJweDtcbn1cblxuLmJpbmQtaGludCB7XG4gIGZvbnQtc2l6ZTogMjZycHg7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tYm90dG9tOiA0MHJweDtcbn1cblxuLmtleS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcnB4O1xuICBib3JkZXI6IDJycHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogMTJycHg7XG4gIHBhZGRpbmc6IDAgMjRycHg7XG4gIGZvbnQtc2l6ZTogMzJycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDhycHg7XG59XG5cbi5iaW5kLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWE3M2U4IDAlLCAjMGQ0N2ExIDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAzMnJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDQwcnB4O1xufVxuXG4uYmluZC1idG5bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLnRpcHMge1xuICBtYXJnaW4tdG9wOiAzMHJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNHJweDtcbiAgICBjb2xvcjogI2ZmOTgwMDtcbiAgfVxufVxuXG4uZ3VpZGUtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDAgNDBycHg7XG59XG5cbi5ndWlkZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMjBycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZ3VpZGUtbGlzdCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcnB4O1xuICBwYWRkaW5nOiAyMHJweDtcbn1cblxuLmd1aWRlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHJweCAwO1xuICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICNmMGYwZjA7XG4gIFxuICAmOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbn1cblxuLmd1aWRlLW51bWJlciB7XG4gIHdpZHRoOiA1MHJweDtcbiAgaGVpZ2h0OiA1MHJweDtcbiAgYmFja2dyb3VuZDogIzFhNzNlODtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjZycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDIwcnB4O1xufVxuXG4uZ3VpZGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///43\n");

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