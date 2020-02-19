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
    className: "jsx-1300645728" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1300645728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "SWAPI"), __jsx("nav", {
    className: "jsx-1300645728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "type",
    className: "jsx-1300645728",
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
    className: "jsx-1300645728" + " " + "typeFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("option", {
    value: "films",
    className: "jsx-1300645728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "persons",
    className: "jsx-1300645728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Characters"), __jsx("option", {
    value: "starships",
    className: "jsx-1300645728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Starships")), __jsx("h4", {
    className: "jsx-1300645728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "type",
    className: "jsx-1300645728",
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
    className: "jsx-1300645728" + " " + "filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("option", {
    value: "films",
    className: "jsx-1300645728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "persons",
    className: "jsx-1300645728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Characters"), __jsx("option", {
    value: "starships",
    className: "jsx-1300645728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Starships"))), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1300645728",
    __self: this
  }, "nav.jsx-1300645728{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9sYXlvdXRzL2xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NrQixBQUd3QiwwRUFDTSxxRUFDckIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvc3dhcGlwbGF5Z3JvdW5kL3dlYmFwcC9jb21wb25lbnRzL2xheW91dHMvbGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHlwZUZpbHRlciB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VUeXBlRmlsdGVyXCI7XG5pbXBvcnQgd2l0aERhdGEgZnJvbSBcIi4uLy4uL0hPQy93aXRoRGF0YVwiO1xuXG5jb25zdCBMYXlvdXQ6IEZDPGFueT4gPSAoeyBzdGF0ZSwgZGlzcGF0Y2gsIGNoaWxkcmVuIH0pID0+IHtcbiAgLy8gY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VUeXBlRmlsdGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzZXRUeXBlXCIsIHBheWxvYWQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzZXRMaXN0XCIsIHBheWxvYWQ6IFtdIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgIDxoMz5TV0FQSTwvaDM+XG4gICAgICA8bmF2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVcIj5UeXBlOiAmbmJzcDs8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgY2xhc3NOYW1lPVwidHlwZUZpbHRlclwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzdGF0ZS5tYWluVHlwZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVTZWxlY3QoZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmlsbXNcIj5Nb3ZpZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZXJzb25zXCI+Q2hhcmFjdGVyczwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzdGFyc2hpcHNcIj5TdGFyc2hpcHM8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxoND48L2g0PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVcIj5TZXQgRmlsdGVyczogJm5ic3A7PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlcnNcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3RhdGUubWFpblR5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlU2VsZWN0KGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpbG1zXCI+TW92aWU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVyc29uc1wiPkNoYXJhY3RlcnM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3RhcnNoaXBzXCI+U3RhcnNoaXBzPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9uYXY+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/rsbear/dev/swapiplayground/webapp/components/layouts/layout.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.d7961d7f2d16d87efe4b.hot-update.js.map