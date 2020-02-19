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
  var handleBrowseSelect = function handleBrowseSelect(e) {
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

  var handleFilterWordSelect = function handleFilterWordSelect(e) {
    e.preventDefault();
    dispatch({
      type: "filterWords",
      payload: [e.target.value]
    });
  };

  return __jsx("div", {
    className: "jsx-2747461224" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "SWAPI"), __jsx("nav", {
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "type",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Browse: \xA0"), __jsx("select", {
    defaultValue: state.browseType,
    onChange: function onChange(e) {
      return handleBrowseSelect(e);
    },
    className: "jsx-2747461224" + " " + "typeFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("option", {
    value: "films",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "persons",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Characters"), __jsx("option", {
    value: "starships",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Starships")), __jsx("h4", {
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "|"), __jsx("label", {
    htmlFor: "type",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Filter by character: \xA0"), __jsx("select", {
    defaultValue: state.browseType,
    onChange: function onChange(e) {
      return handleFilterWordSelect(e);
    },
    className: "jsx-2747461224" + " " + "filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("option", {
    value: "default",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "not set"), state.characterList.map(function (p, idx) {
    return __jsx("option", {
      value: p,
      key: idx,
      className: "jsx-2747461224",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, p);
  })), __jsx("label", {
    htmlFor: "type",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
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
      lineNumber: 48
    },
    __self: this
  }, __jsx("option", {
    value: "films",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "persons",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Characters"), __jsx("option", {
    value: "starships",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Starships"))), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2747461224",
    __self: this
  }, "nav.jsx-2747461224{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}select.typeFilter.jsx-2747461224{padding-right:20px;margin-right:20px;}h4.jsx-2747461224{margin-right:20px;color:transparent;border-right:solid 1px gray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9sYXlvdXRzL2xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERrQixBQUd3QixBQU1NLEFBS0Qsa0JBQ0EsQ0FMQSxpQkFNVSxDQUw5QiwyQkFNQSxVQWJxQixxRUFDQSw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvc3dhcGlwbGF5Z3JvdW5kL3dlYmFwcC9jb21wb25lbnRzL2xheW91dHMvbGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHlwZUZpbHRlciB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VUeXBlRmlsdGVyXCI7XG5pbXBvcnQgd2l0aERhdGEgZnJvbSBcIi4uLy4uL0hPQy93aXRoRGF0YVwiO1xuXG5jb25zdCBMYXlvdXQ6IEZDPGFueT4gPSAoeyBzdGF0ZSwgZGlzcGF0Y2gsIGNoaWxkcmVuIH0pID0+IHtcbiAgLy8gY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VUeXBlRmlsdGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQnJvd3NlU2VsZWN0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzZXRCcm93c2VcIiwgcGF5bG9hZDogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcInNldE1haW5MaXN0XCIsIHBheWxvYWQ6IFtdIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbHRlcldvcmRTZWxlY3QgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcImZpbHRlcldvcmRzXCIsIHBheWxvYWQ6IFtlLnRhcmdldC52YWx1ZV0gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgPGgzPlNXQVBJPC9oMz5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZVwiPkJyb3dzZTogJm5ic3A7PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT1cInR5cGVGaWx0ZXJcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3RhdGUuYnJvd3NlVHlwZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVCcm93c2VTZWxlY3QoZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmlsbXNcIj5Nb3ZpZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZXJzb25zXCI+Q2hhcmFjdGVyczwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzdGFyc2hpcHNcIj5TdGFyc2hpcHM8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxoND58PC9oND5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+RmlsdGVyIGJ5IGNoYXJhY3RlcjogJm5ic3A7PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlcnNcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3RhdGUuYnJvd3NlVHlwZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVGaWx0ZXJXb3JkU2VsZWN0KGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlZmF1bHRcIj5ub3Qgc2V0PC9vcHRpb24+XG4gICAgICAgICAge3N0YXRlLmNoYXJhY3Rlckxpc3QubWFwKChwLCBpZHg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cH0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgICB7cH1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+RmlsdGVyIGJ5IHN0YXJzaGlwOiAmbmJzcDs8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyc1wiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzdGF0ZS5icm93c2VUeXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZVNlbGVjdChlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmaWxtc1wiPk1vdmllPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlcnNvbnNcIj5DaGFyYWN0ZXJzPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN0YXJzaGlwc1wiPlN0YXJzaGlwczwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvbmF2PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0LnR5cGVGaWx0ZXIge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JheTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/rsbear/dev/swapiplayground/webapp/components/layouts/layout.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.c2d081d2ab8306ae1db6.hot-update.js.map