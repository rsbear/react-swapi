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
    className: "jsx-4154872791" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4154872791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "SWAPI"), __jsx("nav", {
    className: "jsx-4154872791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "type",
    className: "jsx-4154872791",
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
    className: "jsx-4154872791" + " " + "typeFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("option", {
    value: "films",
    className: "jsx-4154872791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "persons",
    className: "jsx-4154872791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Characters"), __jsx("option", {
    value: "starships",
    className: "jsx-4154872791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Starships")), __jsx("h4", {
    className: "jsx-4154872791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "type",
    className: "jsx-4154872791",
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
    className: "jsx-4154872791" + " " + "filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("option", {
    value: "films",
    className: "jsx-4154872791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "persons",
    className: "jsx-4154872791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Characters"), __jsx("option", {
    value: "starships",
    className: "jsx-4154872791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Starships"))), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4154872791",
    __self: this
  }, "nav.jsx-4154872791{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}select.typeFilter.jsx-4154872791{padding-right:20px;margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9sYXlvdXRzL2xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NrQixBQUd3QixBQU1NLG1CQUNELGtCQUNwQixxQ0FQcUIscUVBQ0EsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9sYXlvdXRzL2xheW91dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVR5cGVGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVHlwZUZpbHRlclwiO1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gXCIuLi8uLi9IT0Mvd2l0aERhdGFcIjtcblxuY29uc3QgTGF5b3V0OiBGQzxhbnk+ID0gKHsgc3RhdGUsIGRpc3BhdGNoLCBjaGlsZHJlbiB9KSA9PiB7XG4gIC8vIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlVHlwZUZpbHRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwic2V0VHlwZVwiLCBwYXlsb2FkOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwic2V0TGlzdFwiLCBwYXlsb2FkOiBbXSB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8aDM+U1dBUEk8L2gzPlxuICAgICAgPG5hdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+VHlwZTogJm5ic3A7PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT1cInR5cGVGaWx0ZXJcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3RhdGUubWFpblR5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlU2VsZWN0KGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpbG1zXCI+TW92aWU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVyc29uc1wiPkNoYXJhY3RlcnM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3RhcnNoaXBzXCI+U3RhcnNoaXBzPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aDQ+PC9oND5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+U2V0IEZpbHRlcnM6ICZuYnNwOzwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXJzXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3N0YXRlLm1haW5UeXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZVNlbGVjdChlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmaWxtc1wiPk1vdmllPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlcnNvbnNcIj5DaGFyYWN0ZXJzPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN0YXJzaGlwc1wiPlN0YXJzaGlwczwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvbmF2PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0LnR5cGVGaWx0ZXIge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/rsbear/dev/swapiplayground/webapp/components/layouts/layout.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.ca442d2e5d4939fc978a.hot-update.js.map