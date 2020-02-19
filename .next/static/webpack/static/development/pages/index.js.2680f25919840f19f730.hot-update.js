webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layouts/layout.tsx":
/*!***************************************!*\
  !*** ./components/layouts/layout.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rsbear/dev/swapiplayground/webapp/components/layouts/layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Layout = function Layout(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      children = _ref.children;

  // const [state, dispatch] = useTypeFilter();
  var handleSelect = function handleSelect(e) {
    e.preventDefault();
    dispatch({
      type: "setBrowse",
      payload: e.target.value
    });
    dispatch({
      type: "setMainList",
      payload: []
    });
  };

  return __jsx("div", {
    className: "jsx-2747461224" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "SWAPI"), __jsx("nav", {
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "type",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Browse: \xA0"), __jsx("select", {
    defaultValue: state.browseType,
    onChange: function onChange(e) {
      return handleSelect(e);
    },
    className: "jsx-2747461224" + " " + "typeFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("option", {
    value: "films",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "persons",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Characters"), __jsx("option", {
    value: "starships",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Starships")), __jsx("h4", {
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "|"), __jsx("label", {
    htmlFor: "type",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Filter by character: \xA0"), __jsx("select", {
    defaultValue: state.browseType,
    onChange: function onChange(e) {
      return handleSelect(e);
    },
    className: "jsx-2747461224" + " " + "filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("option", {
    value: "films",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "persons",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Characters"), __jsx("option", {
    value: "starships",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Starships")), __jsx("label", {
    htmlFor: "type",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Filter by starship: \xA0"), __jsx("select", {
    defaultValue: state.browseType,
    onChange: function onChange(e) {
      return handleSelect(e);
    },
    className: "jsx-2747461224" + " " + "filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("option", {
    value: "films",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "persons",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Characters"), __jsx("option", {
    value: "starships",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Starships"))), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2747461224",
    __self: this
  }, "nav.jsx-2747461224{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}select.typeFilter.jsx-2747461224{padding-right:20px;margin-right:20px;}h4.jsx-2747461224{margin-right:20px;color:transparent;border-right:solid 1px gray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9sYXlvdXRzL2xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RrQixBQUd3QixBQU1NLEFBS0Qsa0JBQ0EsQ0FMQSxpQkFNVSxDQUw5QiwyQkFNQSxVQWJxQixxRUFDQSw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvc3dhcGlwbGF5Z3JvdW5kL3dlYmFwcC9jb21wb25lbnRzL2xheW91dHMvbGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHlwZUZpbHRlciB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VUeXBlRmlsdGVyXCI7XG5pbXBvcnQgd2l0aERhdGEgZnJvbSBcIi4uLy4uL0hPQy93aXRoRGF0YVwiO1xuXG5jb25zdCBMYXlvdXQ6IEZDPGFueT4gPSAoeyBzdGF0ZSwgZGlzcGF0Y2gsIGNoaWxkcmVuIH0pID0+IHtcbiAgLy8gY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VUeXBlRmlsdGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzZXRCcm93c2VcIiwgcGF5bG9hZDogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcInNldE1haW5MaXN0XCIsIHBheWxvYWQ6IFtdIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgIDxoMz5TV0FQSTwvaDM+XG4gICAgICA8bmF2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVcIj5Ccm93c2U6ICZuYnNwOzwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0eXBlRmlsdGVyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3N0YXRlLmJyb3dzZVR5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlU2VsZWN0KGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpbG1zXCI+TW92aWU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVyc29uc1wiPkNoYXJhY3RlcnM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3RhcnNoaXBzXCI+U3RhcnNoaXBzPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aDQ+fDwvaDQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZVwiPkZpbHRlciBieSBjaGFyYWN0ZXI6ICZuYnNwOzwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXJzXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3N0YXRlLmJyb3dzZVR5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlU2VsZWN0KGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpbG1zXCI+TW92aWU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVyc29uc1wiPkNoYXJhY3RlcnM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3RhcnNoaXBzXCI+U3RhcnNoaXBzPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVcIj5GaWx0ZXIgYnkgc3RhcnNoaXA6ICZuYnNwOzwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXJzXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3N0YXRlLmJyb3dzZVR5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlU2VsZWN0KGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpbG1zXCI+TW92aWU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVyc29uc1wiPkNoYXJhY3RlcnM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3RhcnNoaXBzXCI+U3RhcnNoaXBzPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9uYXY+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3QudHlwZUZpbHRlciB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoNCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmF5O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/rsbear/dev/swapiplayground/webapp/components/layouts/layout.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.2680f25919840f19f730.hot-update.js.map