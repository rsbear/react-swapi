webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layouts/layout.tsx":
/*!***************************************!*\
  !*** ./components/layouts/layout.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rsbear/dev/swapiplayground/webapp/components/layouts/layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Layout = function Layout(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      children = _ref.children;

  // const [state, dispatch] = useTypeFilter();
  var handleSelect = function handleSelect(e) {
    e.preventDefault();
    dispatch({
      type: "setType",
      payload: e.target.value
    });
    dispatch({
      type: "setList",
      payload: []
    });
  };

  return __jsx("div", {
    className: "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "SWAPI"), __jsx("label", {
    htmlFor: "type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Type: \xA0"), __jsx("select", {
    defaultValue: state.mainType,
    onChange: function onChange(e) {
      return handleSelect(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("option", {
    value: "films",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "persons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Characters"), __jsx("option", {
    value: "starships",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Starships"))), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.2b59a2f4d0c79104060c.hot-update.js.map