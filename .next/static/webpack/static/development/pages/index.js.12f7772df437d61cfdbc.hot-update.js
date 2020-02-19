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
      lineNumber: 11
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " ", title), __jsx("p", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
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
        lineNumber: 16
      },
      __self: this
    }, name, ", \xA0");
  })), __jsx("p", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
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
        lineNumber: 22
      },
      __self: this
    }, name, ", \xA0");
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3733796175",
    __self: this
  }, "div.jsx-3733796175{margin:4px 0;padding:4px 20px;border:solid 1px rgba(20,20,20,0.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9pdGVtcy9GaWxtSXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQixBQUd3QixhQUNJLGlCQUNzQixvQ0FDekMiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvc3dhcGlwbGF5Z3JvdW5kL3dlYmFwcC9jb21wb25lbnRzL2l0ZW1zL0ZpbG1JdGVtLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBjaGFyYWN0ZXJzPzogYW55O1xuICBzdGFyc2hpcHM/OiBhbnk7XG59XG5cbmNvbnN0IEZpbG1JdGVtOiBGQzxQcm9wcz4gPSAoeyB0aXRsZSwgY2hhcmFjdGVycywgc3RhcnNoaXBzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPiB7dGl0bGV9PC9oMz5cbiAgICAgIDxwPlxuICAgICAgICBDaGFyYWN0ZXJzOntcIiBcIn1cbiAgICAgICAge2NoYXJhY3RlcnMuc2xpY2UoMCwgNSkubWFwKCh7IG5hbWUsIGlkIH0pID0+IChcbiAgICAgICAgICA8c3BhbiBrZXk9e2lkfT57bmFtZX0sICZuYnNwOzwvc3Bhbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgU3RhcnNoaXBzOlxuICAgICAgICB7c3RhcnNoaXBzLm1hcCgoeyBuYW1lLCBpZCB9KSA9PiAoXG4gICAgICAgICAgPHNwYW4ga2V5PXtpZH0+e25hbWV9LCAmbmJzcDs8L3NwYW4+XG4gICAgICAgICkpfVxuICAgICAgPC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDIwcHg7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMCwgMjAsIDIwLCAwLjEpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxtSXRlbTtcbiJdfQ== */\n/*@ sourceURL=/Users/rsbear/dev/swapiplayground/webapp/components/items/FilmItem.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FilmItem);

/***/ })

})
//# sourceMappingURL=index.js.12f7772df437d61cfdbc.hot-update.js.map