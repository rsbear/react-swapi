webpackHotUpdate("static/development/pages/index.js",{

/***/ "./HOC/withData.tsx":
/*!**************************!*\
  !*** ./HOC/withData.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _hooks_useTypeFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useTypeFilter */ "./hooks/useTypeFilter.ts");



var test = function test(props) {
  var _useTypeFilter = Object(_hooks_useTypeFilter__WEBPACK_IMPORTED_MODULE_1__["useTypeFilter"])(),
      _useTypeFilter2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useTypeFilter, 2),
      state = _useTypeFilter2[0],
      dispatch = _useTypeFilter2[1];

  return [state, dispatch];
};

var withData = function withData(WrappedComponent) {
  return function wrappedRender(args) {
    return WrappedComponent(test(args));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withData);

/***/ })

})
//# sourceMappingURL=index.js.e46b16d2dd07705a1067.hot-update.js.map