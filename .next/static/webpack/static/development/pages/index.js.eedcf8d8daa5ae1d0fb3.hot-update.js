webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/items/FilmItem.tsx":
/*!***************************************!*\
  !*** ./components/items/FilmItem.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rsbear/dev/swapiplayground/webapp/components/items/FilmItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var FilmItem = function FilmItem(_ref) {
  var title = _ref.title,
      characters = _ref.characters,
      starships = _ref.starships;
  return __jsx("div", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, " ", title), __jsx("p", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Characters:", " ", characters.slice(0, 5).map(function (_ref2) {
    var name = _ref2.name,
        id = _ref2.id;
    return __jsx("span", {
      key: id,
      className: "jsx-3733796175",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, name, ", \xA0");
  })), __jsx("p", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Starships:", starships.map(function (_ref3) {
    var name = _ref3.name,
        id = _ref3.id;
    return __jsx("span", {
      key: id,
      className: "jsx-3733796175",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, name, ", \xA0");
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3733796175",
    __self: this
  }, "div.jsx-3733796175{margin:4px 0;padding:4px 20px;border:solid 1px rgba(20,20,20,0.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9pdGVtcy9GaWxtSXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJrQixBQUd3QixhQUNJLGlCQUNzQixvQ0FDekMiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvc3dhcGlwbGF5Z3JvdW5kL3dlYmFwcC9jb21wb25lbnRzL2l0ZW1zL0ZpbG1JdGVtLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBjaGFyYWN0ZXJzPzogYW55O1xuICBzdGFyc2hpcHM/OiBhbnk7XG59XG5jb25zdCBGaWxtSXRlbTogRkM8UHJvcHM+ID0gKHsgdGl0bGUsIGNoYXJhY3RlcnMsIHN0YXJzaGlwcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz4ge3RpdGxlfTwvaDM+XG4gICAgICA8cD5cbiAgICAgICAgQ2hhcmFjdGVyczp7XCIgXCJ9XG4gICAgICAgIHtjaGFyYWN0ZXJzLnNsaWNlKDAsIDUpLm1hcCgoeyBuYW1lLCBpZCB9KSA9PiAoXG4gICAgICAgICAgPHNwYW4ga2V5PXtpZH0+e25hbWV9LCAmbmJzcDs8L3NwYW4+XG4gICAgICAgICkpfVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFN0YXJzaGlwczpcbiAgICAgICAge3N0YXJzaGlwcy5tYXAoKHsgbmFtZSwgaWQgfSkgPT4gKFxuICAgICAgICAgIDxzcGFuIGtleT17aWR9PntuYW1lfSwgJm5ic3A7PC9zcGFuPlxuICAgICAgICApKX1cbiAgICAgIDwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAyMHB4O1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjAsIDIwLCAyMCwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsbUl0ZW07XG4iXX0= */\n/*@ sourceURL=/Users/rsbear/dev/swapiplayground/webapp/components/items/FilmItem.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FilmItem);

/***/ })

})
//# sourceMappingURL=index.js.eedcf8d8daa5ae1d0fb3.hot-update.js.map