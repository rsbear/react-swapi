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
      type: "setType",
      payload: e.target.value
    });
    dispatch({
      type: "setList",
      payload: []
    });
  };

  return __jsx("div", {
    className: "jsx-2085888330" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "SWAPI"), __jsx("label", {
    htmlFor: "type",
    className: "jsx-2085888330",
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
    className: "jsx-2085888330" + " " + "typeFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("option", {
    value: "films",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "persons",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Characters"), __jsx("option", {
    value: "starships",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Starships")), __jsx("h4", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "type",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Set Filters: \xA0"), __jsx("select", {
    defaultValue: state.mainType,
    onChange: function onChange(e) {
      return handleSelect(e);
    },
    className: "jsx-2085888330" + " " + "filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("option", {
    value: "films",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "persons",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Characters"), __jsx("option", {
    value: "starships",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Starships"))), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2085888330",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9sYXlvdXRzL2xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NrQiIsImZpbGUiOiIvVXNlcnMvcnNiZWFyL2Rldi9zd2FwaXBsYXlncm91bmQvd2ViYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9sYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUeXBlRmlsdGVyIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVR5cGVGaWx0ZXJcIjtcbmltcG9ydCB3aXRoRGF0YSBmcm9tIFwiLi4vLi4vSE9DL3dpdGhEYXRhXCI7XG5cbmNvbnN0IExheW91dDogRkM8YW55PiA9ICh7IHN0YXRlLCBkaXNwYXRjaCwgY2hpbGRyZW4gfSkgPT4ge1xuICAvLyBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVR5cGVGaWx0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcInNldFR5cGVcIiwgcGF5bG9hZDogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcInNldExpc3RcIiwgcGF5bG9hZDogW10gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgPG5hdj5cbiAgICAgICAgPGgzPlNXQVBJPC9oMz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+VHlwZTogJm5ic3A7PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT1cInR5cGVGaWx0ZXJcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3RhdGUubWFpblR5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlU2VsZWN0KGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpbG1zXCI+TW92aWU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVyc29uc1wiPkNoYXJhY3RlcnM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3RhcnNoaXBzXCI+U3RhcnNoaXBzPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aDQ+PC9oND5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+U2V0IEZpbHRlcnM6ICZuYnNwOzwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXJzXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3N0YXRlLm1haW5UeXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZVNlbGVjdChlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmaWxtc1wiPk1vdmllPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlcnNvbnNcIj5DaGFyYWN0ZXJzPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN0YXJzaGlwc1wiPlN0YXJzaGlwczwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvbmF2PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/rsbear/dev/swapiplayground/webapp/components/layouts/layout.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.f6dc42a72a0de984493a.hot-update.js.map