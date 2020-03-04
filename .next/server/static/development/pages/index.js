module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./HOC/withData.tsx":
/*!**************************!*\
  !*** ./HOC/withData.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_useTypeFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useTypeFilter */ "./hooks/useTypeFilter.ts");


const test = props => {
  const [state, dispatch] = Object(_hooks_useTypeFilter__WEBPACK_IMPORTED_MODULE_0__["useTypeFilter"])();
  return [state, dispatch];
};

const withData = WrappedComponent => {
  return function wrappedRender(args) {
    return WrappedComponent(test(args));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withData);

/***/ }),

/***/ "./components/items/FilmItem.tsx":
/*!***************************************!*\
  !*** ./components/items/FilmItem.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rsbear/dev/swapiplayground/webapp/components/items/FilmItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const FilmItem = ({
  title,
  characters,
  starships
}) => {
  return __jsx("div", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, " ", title), __jsx("p", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Characters:", " ", characters.slice(0, 3).map(({
    name,
    id
  }) => __jsx("span", {
    key: id,
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, name, ", \xA0"))), __jsx("p", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Starships:", starships.map(({
    name,
    id
  }) => __jsx("span", {
    key: id,
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, name, ", \xA0"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3733796175",
    __self: undefined
  }, "div.jsx-3733796175{margin:4px 0;padding:4px 20px;border:solid 1px rgba(20,20,20,0.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9pdGVtcy9GaWxtSXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQixBQUd3QixhQUNJLGlCQUNzQixvQ0FDekMiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvc3dhcGlwbGF5Z3JvdW5kL3dlYmFwcC9jb21wb25lbnRzL2l0ZW1zL0ZpbG1JdGVtLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBjaGFyYWN0ZXJzPzogYW55O1xuICBzdGFyc2hpcHM/OiBhbnk7XG59XG5cbmNvbnN0IEZpbG1JdGVtOiBGQzxQcm9wcz4gPSAoeyB0aXRsZSwgY2hhcmFjdGVycywgc3RhcnNoaXBzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPiB7dGl0bGV9PC9oMz5cbiAgICAgIDxwPlxuICAgICAgICBDaGFyYWN0ZXJzOntcIiBcIn1cbiAgICAgICAge2NoYXJhY3RlcnMuc2xpY2UoMCwgMykubWFwKCh7IG5hbWUsIGlkIH0pID0+IChcbiAgICAgICAgICA8c3BhbiBrZXk9e2lkfT57bmFtZX0sICZuYnNwOzwvc3Bhbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgU3RhcnNoaXBzOlxuICAgICAgICB7c3RhcnNoaXBzLm1hcCgoeyBuYW1lLCBpZCB9KSA9PiAoXG4gICAgICAgICAgPHNwYW4ga2V5PXtpZH0+e25hbWV9LCAmbmJzcDs8L3NwYW4+XG4gICAgICAgICkpfVxuICAgICAgPC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDIwcHg7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMCwgMjAsIDIwLCAwLjEpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxtSXRlbTtcbiJdfQ== */\n/*@ sourceURL=/Users/rsbear/dev/swapiplayground/webapp/components/items/FilmItem.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FilmItem);

/***/ }),

/***/ "./components/items/PersonItem.tsx":
/*!*****************************************!*\
  !*** ./components/items/PersonItem.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rsbear/dev/swapiplayground/webapp/components/items/PersonItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const PersonItem = ({
  name,
  films
}) => {
  return __jsx("div", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, name), __jsx("p", {
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Films:", " ", films.map(({
    title,
    id
  }) => __jsx("span", {
    key: id,
    className: "jsx-3733796175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, title, ", \xA0"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3733796175",
    __self: undefined
  }, "div.jsx-3733796175{margin:4px 0;padding:4px 20px;border:solid 1px rgba(20,20,20,0.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9pdGVtcy9QZXJzb25JdGVtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtCLEFBR3dCLGFBQ0ksaUJBQ3NCLG9DQUN6QyIsImZpbGUiOiIvVXNlcnMvcnNiZWFyL2Rldi9zd2FwaXBsYXlncm91bmQvd2ViYXBwL2NvbXBvbmVudHMvaXRlbXMvUGVyc29uSXRlbS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBmaWxtczogYW55O1xufVxuY29uc3QgUGVyc29uSXRlbTogRkM8UHJvcHM+ID0gKHsgbmFtZSwgZmlsbXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+e25hbWV9PC9oMz5cbiAgICAgIDxwPlxuICAgICAgICBGaWxtczp7XCIgXCJ9XG4gICAgICAgIHtmaWxtcy5tYXAoKHsgdGl0bGUsIGlkIH0pID0+IChcbiAgICAgICAgICA8c3BhbiBrZXk9e2lkfT57dGl0bGV9LCAmbmJzcDs8L3NwYW4+XG4gICAgICAgICkpfVxuICAgICAgPC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDIwcHg7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMCwgMjAsIDIwLCAwLjEpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJzb25JdGVtO1xuIl19 */\n/*@ sourceURL=/Users/rsbear/dev/swapiplayground/webapp/components/items/PersonItem.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PersonItem);

/***/ }),

/***/ "./components/items/StarshipItem.tsx":
/*!*******************************************!*\
  !*** ./components/items/StarshipItem.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rsbear/dev/swapiplayground/webapp/components/items/StarshipItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const StarshipItem = ({
  name
}) => {
  return __jsx("div", {
    className: "jsx-2923086632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-2923086632",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, " ", name), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2923086632",
    __self: undefined
  }, "div.jsx-2923086632{padding:4px 20px;border:solid 1px rgba(20,20,20,0.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9pdGVtcy9TdGFyc2hpcEl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNrQixBQUc0QixpQkFDc0Isb0NBQ3pDIiwiZmlsZSI6Ii9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9pdGVtcy9TdGFyc2hpcEl0ZW0udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU6IHN0cmluZztcbn1cbmNvbnN0IFN0YXJzaGlwSXRlbTogRkM8UHJvcHM+ID0gKHsgbmFtZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz4ge25hbWV9PC9oMz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMjBweDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDIwLCAyMCwgMjAsIDAuMSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJzaGlwSXRlbTtcbiJdfQ== */\n/*@ sourceURL=/Users/rsbear/dev/swapiplayground/webapp/components/items/StarshipItem.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StarshipItem);

/***/ }),

/***/ "./components/layouts/layout.tsx":
/*!***************************************!*\
  !*** ./components/layouts/layout.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rsbear/dev/swapiplayground/webapp/components/layouts/layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Layout = ({
  state,
  dispatch,
  handlers,
  children
}) => {
  // const [state, dispatch] = useTypeFilter();
  return __jsx("div", {
    className: "jsx-2747461224" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "SWAPI"), __jsx("nav", {
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "type",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Browse: \xA0"), __jsx("select", {
    defaultValue: state.browseType,
    onChange: e => handlers.handleBrowse(e),
    className: "jsx-2747461224" + " " + "typeFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("option", {
    value: "films",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Movie"), __jsx("option", {
    value: "persons",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Characters"), __jsx("option", {
    value: "starships",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Starships")), __jsx("h4", {
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "|"), __jsx("label", {
    htmlFor: "type",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Filter by character: \xA0"), __jsx("select", {
    defaultValue: state.browseType,
    onChange: e => handlers.handleFilterByCharacter(e),
    className: "jsx-2747461224" + " " + "filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("option", {
    value: "default",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "not set"), state.characterDropdownList.map((p, idx) => __jsx("option", {
    value: p,
    key: idx,
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, p))), __jsx("label", {
    htmlFor: "type",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Filter by starship: \xA0"), __jsx("select", {
    defaultValue: state.browseType // onChange={e => handleSelect(e)}
    ,
    onChange: e => handlers.handleFilterByStarship(e),
    className: "jsx-2747461224" + " " + "filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("option", {
    value: "default",
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Not set"), state.starshipsDropdownList.map((p, idx) => __jsx("option", {
    value: p,
    key: idx,
    className: "jsx-2747461224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, p)))), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2747461224",
    __self: undefined
  }, "nav.jsx-2747461224{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}select.typeFilter.jsx-2747461224{padding-right:20px;margin-right:20px;}h4.jsx-2747461224{margin-right:20px;color:transparent;border-right:solid 1px gray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3N3YXBpcGxheWdyb3VuZC93ZWJhcHAvY29tcG9uZW50cy9sYXlvdXRzL2xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURrQixBQUd3QixBQU1NLEFBS0Qsa0JBQ0EsQ0FMQSxpQkFNVSxDQUw5QiwyQkFNQSxVQWJxQixxRUFDQSw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvc3dhcGlwbGF5Z3JvdW5kL3dlYmFwcC9jb21wb25lbnRzL2xheW91dHMvbGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHlwZUZpbHRlciB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VUeXBlRmlsdGVyXCI7XG5pbXBvcnQgd2l0aERhdGEgZnJvbSBcIi4uLy4uL0hPQy93aXRoRGF0YVwiO1xuXG5jb25zdCBMYXlvdXQ6IEZDPGFueT4gPSAoeyBzdGF0ZSwgZGlzcGF0Y2gsIGhhbmRsZXJzLCBjaGlsZHJlbiB9KSA9PiB7XG4gIC8vIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlVHlwZUZpbHRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgIDxoMz5TV0FQSTwvaDM+XG4gICAgICA8bmF2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVcIj5Ccm93c2U6ICZuYnNwOzwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0eXBlRmlsdGVyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3N0YXRlLmJyb3dzZVR5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlcnMuaGFuZGxlQnJvd3NlKGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpbG1zXCI+TW92aWU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVyc29uc1wiPkNoYXJhY3RlcnM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3RhcnNoaXBzXCI+U3RhcnNoaXBzPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aDQ+fDwvaDQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZVwiPkZpbHRlciBieSBjaGFyYWN0ZXI6ICZuYnNwOzwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXJzXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3N0YXRlLmJyb3dzZVR5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlcnMuaGFuZGxlRmlsdGVyQnlDaGFyYWN0ZXIoZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiPm5vdCBzZXQ8L29wdGlvbj5cbiAgICAgICAgICB7c3RhdGUuY2hhcmFjdGVyRHJvcGRvd25MaXN0Lm1hcCgocCwgaWR4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3B9IGtleT17aWR4fT5cbiAgICAgICAgICAgICAge3B9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZVwiPkZpbHRlciBieSBzdGFyc2hpcDogJm5ic3A7PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlcnNcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3RhdGUuYnJvd3NlVHlwZX1cbiAgICAgICAgICAvLyBvbkNoYW5nZT17ZSA9PiBoYW5kbGVTZWxlY3QoZSl9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlcnMuaGFuZGxlRmlsdGVyQnlTdGFyc2hpcChlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCI+Tm90IHNldDwvb3B0aW9uPlxuICAgICAgICAgIHtzdGF0ZS5zdGFyc2hpcHNEcm9wZG93bkxpc3QubWFwKChwLCBpZHg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cH0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgICB7cH1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvbmF2PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0LnR5cGVGaWx0ZXIge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JheTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/rsbear/dev/swapiplayground/webapp/components/layouts/layout.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./generated/graphql.tsx":
/*!*******************************!*\
  !*** ./generated/graphql.tsx ***!
  \*******************************/
/*! exports provided: _ModelMutationType, AssetOrderBy, FilmOrderBy, Person_Eye_Color, Person_Gender, Person_Hair_Color, Person_Skin_Color, PersonOrderBy, PlanetOrderBy, Species_Eye_Color, Species_Hair_Color, Species_Skin_Color, SpeciesOrderBy, StarshipOrderBy, VehicleOrderBy, AllFilmsDocument, useAllFilmsQuery, useAllFilmsLazyQuery, AllPersonsDocument, useAllPersonsQuery, useAllPersonsLazyQuery, AllStarshipsDocument, useAllStarshipsQuery, useAllStarshipsLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ModelMutationType", function() { return _ModelMutationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetOrderBy", function() { return AssetOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmOrderBy", function() { return FilmOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person_Eye_Color", function() { return Person_Eye_Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person_Gender", function() { return Person_Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person_Hair_Color", function() { return Person_Hair_Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person_Skin_Color", function() { return Person_Skin_Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonOrderBy", function() { return PersonOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetOrderBy", function() { return PlanetOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Species_Eye_Color", function() { return Species_Eye_Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Species_Hair_Color", function() { return Species_Hair_Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Species_Skin_Color", function() { return Species_Skin_Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesOrderBy", function() { return SpeciesOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipOrderBy", function() { return StarshipOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleOrderBy", function() { return VehicleOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllFilmsDocument", function() { return AllFilmsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllFilmsQuery", function() { return useAllFilmsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllFilmsLazyQuery", function() { return useAllFilmsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPersonsDocument", function() { return AllPersonsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllPersonsQuery", function() { return useAllPersonsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllPersonsLazyQuery", function() { return useAllPersonsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllStarshipsDocument", function() { return AllStarshipsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllStarshipsQuery", function() { return useAllStarshipsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllStarshipsLazyQuery", function() { return useAllStarshipsLazyQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);


let _ModelMutationType;

(function (_ModelMutationType) {
  _ModelMutationType["Created"] = "CREATED";
  _ModelMutationType["Updated"] = "UPDATED";
  _ModelMutationType["Deleted"] = "DELETED";
})(_ModelMutationType || (_ModelMutationType = {}));

let AssetOrderBy;

(function (AssetOrderBy) {
  AssetOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  AssetOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  AssetOrderBy["FileNameAsc"] = "fileName_ASC";
  AssetOrderBy["FileNameDesc"] = "fileName_DESC";
  AssetOrderBy["HandleAsc"] = "handle_ASC";
  AssetOrderBy["HandleDesc"] = "handle_DESC";
  AssetOrderBy["HeightAsc"] = "height_ASC";
  AssetOrderBy["HeightDesc"] = "height_DESC";
  AssetOrderBy["IdAsc"] = "id_ASC";
  AssetOrderBy["IdDesc"] = "id_DESC";
  AssetOrderBy["MimeTypeAsc"] = "mimeType_ASC";
  AssetOrderBy["MimeTypeDesc"] = "mimeType_DESC";
  AssetOrderBy["SizeAsc"] = "size_ASC";
  AssetOrderBy["SizeDesc"] = "size_DESC";
  AssetOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  AssetOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
  AssetOrderBy["UrlAsc"] = "url_ASC";
  AssetOrderBy["UrlDesc"] = "url_DESC";
  AssetOrderBy["WidthAsc"] = "width_ASC";
  AssetOrderBy["WidthDesc"] = "width_DESC";
})(AssetOrderBy || (AssetOrderBy = {}));

let FilmOrderBy;

(function (FilmOrderBy) {
  FilmOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  FilmOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  FilmOrderBy["DirectorAsc"] = "director_ASC";
  FilmOrderBy["DirectorDesc"] = "director_DESC";
  FilmOrderBy["EpisodeIdAsc"] = "episodeId_ASC";
  FilmOrderBy["EpisodeIdDesc"] = "episodeId_DESC";
  FilmOrderBy["IdAsc"] = "id_ASC";
  FilmOrderBy["IdDesc"] = "id_DESC";
  FilmOrderBy["IsPublishedAsc"] = "isPublished_ASC";
  FilmOrderBy["IsPublishedDesc"] = "isPublished_DESC";
  FilmOrderBy["OpeningCrawlAsc"] = "openingCrawl_ASC";
  FilmOrderBy["OpeningCrawlDesc"] = "openingCrawl_DESC";
  FilmOrderBy["ReleaseDateAsc"] = "releaseDate_ASC";
  FilmOrderBy["ReleaseDateDesc"] = "releaseDate_DESC";
  FilmOrderBy["TitleAsc"] = "title_ASC";
  FilmOrderBy["TitleDesc"] = "title_DESC";
  FilmOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  FilmOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
})(FilmOrderBy || (FilmOrderBy = {}));

let Person_Eye_Color;

(function (Person_Eye_Color) {
  Person_Eye_Color["Unknown"] = "UNKNOWN";
  Person_Eye_Color["Blue"] = "BLUE";
  Person_Eye_Color["Yellow"] = "YELLOW";
  Person_Eye_Color["Red"] = "RED";
  Person_Eye_Color["Brown"] = "BROWN";
  Person_Eye_Color["Bluegrey"] = "BLUEGREY";
  Person_Eye_Color["Black"] = "BLACK";
  Person_Eye_Color["Orange"] = "ORANGE";
  Person_Eye_Color["Hazel"] = "HAZEL";
  Person_Eye_Color["Pink"] = "PINK";
  Person_Eye_Color["Gold"] = "GOLD";
  Person_Eye_Color["Green"] = "GREEN";
  Person_Eye_Color["White"] = "WHITE";
  Person_Eye_Color["Dark"] = "DARK";
})(Person_Eye_Color || (Person_Eye_Color = {}));

let Person_Gender;

(function (Person_Gender) {
  Person_Gender["Unknown"] = "UNKNOWN";
  Person_Gender["Male"] = "MALE";
  Person_Gender["Female"] = "FEMALE";
  Person_Gender["Hermaphrodite"] = "HERMAPHRODITE";
})(Person_Gender || (Person_Gender = {}));

let Person_Hair_Color;

(function (Person_Hair_Color) {
  Person_Hair_Color["Auburn"] = "AUBURN";
  Person_Hair_Color["Black"] = "BLACK";
  Person_Hair_Color["Blonde"] = "BLONDE";
  Person_Hair_Color["Brown"] = "BROWN";
  Person_Hair_Color["Grey"] = "GREY";
  Person_Hair_Color["Unknown"] = "UNKNOWN";
  Person_Hair_Color["White"] = "WHITE";
})(Person_Hair_Color || (Person_Hair_Color = {}));

let Person_Skin_Color;

(function (Person_Skin_Color) {
  Person_Skin_Color["Unknown"] = "UNKNOWN";
  Person_Skin_Color["Fair"] = "FAIR";
  Person_Skin_Color["Gold"] = "GOLD";
  Person_Skin_Color["White"] = "WHITE";
  Person_Skin_Color["Light"] = "LIGHT";
  Person_Skin_Color["Green"] = "GREEN";
  Person_Skin_Color["Greentan"] = "GREENTAN";
  Person_Skin_Color["Pale"] = "PALE";
  Person_Skin_Color["Metal"] = "METAL";
  Person_Skin_Color["Dark"] = "DARK";
  Person_Skin_Color["Brownmottle"] = "BROWNMOTTLE";
  Person_Skin_Color["Brown"] = "BROWN";
  Person_Skin_Color["Grey"] = "GREY";
  Person_Skin_Color["Mottledgreen"] = "MOTTLEDGREEN";
  Person_Skin_Color["Orange"] = "ORANGE";
  Person_Skin_Color["Blue"] = "BLUE";
  Person_Skin_Color["Red"] = "RED";
  Person_Skin_Color["Yellow"] = "YELLOW";
  Person_Skin_Color["Tan"] = "TAN";
  Person_Skin_Color["Silver"] = "SILVER";
})(Person_Skin_Color || (Person_Skin_Color = {}));

let PersonOrderBy;

(function (PersonOrderBy) {
  PersonOrderBy["BirthYearAsc"] = "birthYear_ASC";
  PersonOrderBy["BirthYearDesc"] = "birthYear_DESC";
  PersonOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  PersonOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  PersonOrderBy["GenderAsc"] = "gender_ASC";
  PersonOrderBy["GenderDesc"] = "gender_DESC";
  PersonOrderBy["HeightAsc"] = "height_ASC";
  PersonOrderBy["HeightDesc"] = "height_DESC";
  PersonOrderBy["IdAsc"] = "id_ASC";
  PersonOrderBy["IdDesc"] = "id_DESC";
  PersonOrderBy["IsPublishedAsc"] = "isPublished_ASC";
  PersonOrderBy["IsPublishedDesc"] = "isPublished_DESC";
  PersonOrderBy["MassAsc"] = "mass_ASC";
  PersonOrderBy["MassDesc"] = "mass_DESC";
  PersonOrderBy["NameAsc"] = "name_ASC";
  PersonOrderBy["NameDesc"] = "name_DESC";
  PersonOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  PersonOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
})(PersonOrderBy || (PersonOrderBy = {}));

let PlanetOrderBy;

(function (PlanetOrderBy) {
  PlanetOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  PlanetOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  PlanetOrderBy["DiameterAsc"] = "diameter_ASC";
  PlanetOrderBy["DiameterDesc"] = "diameter_DESC";
  PlanetOrderBy["GravityAsc"] = "gravity_ASC";
  PlanetOrderBy["GravityDesc"] = "gravity_DESC";
  PlanetOrderBy["IdAsc"] = "id_ASC";
  PlanetOrderBy["IdDesc"] = "id_DESC";
  PlanetOrderBy["IsPublishedAsc"] = "isPublished_ASC";
  PlanetOrderBy["IsPublishedDesc"] = "isPublished_DESC";
  PlanetOrderBy["NameAsc"] = "name_ASC";
  PlanetOrderBy["NameDesc"] = "name_DESC";
  PlanetOrderBy["OrbitalPeriodAsc"] = "orbitalPeriod_ASC";
  PlanetOrderBy["OrbitalPeriodDesc"] = "orbitalPeriod_DESC";
  PlanetOrderBy["PopulationAsc"] = "population_ASC";
  PlanetOrderBy["PopulationDesc"] = "population_DESC";
  PlanetOrderBy["RotationPeriodAsc"] = "rotationPeriod_ASC";
  PlanetOrderBy["RotationPeriodDesc"] = "rotationPeriod_DESC";
  PlanetOrderBy["SurfaceWaterAsc"] = "surfaceWater_ASC";
  PlanetOrderBy["SurfaceWaterDesc"] = "surfaceWater_DESC";
  PlanetOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  PlanetOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
})(PlanetOrderBy || (PlanetOrderBy = {}));

let Species_Eye_Color;

(function (Species_Eye_Color) {
  Species_Eye_Color["Amber"] = "AMBER";
  Species_Eye_Color["Black"] = "BLACK";
  Species_Eye_Color["Blue"] = "BLUE";
  Species_Eye_Color["Brown"] = "BROWN";
  Species_Eye_Color["Gold"] = "GOLD";
  Species_Eye_Color["Green"] = "GREEN";
  Species_Eye_Color["Grey"] = "GREY";
  Species_Eye_Color["Hazel"] = "HAZEL";
  Species_Eye_Color["Indigo"] = "INDIGO";
  Species_Eye_Color["Orange"] = "ORANGE";
  Species_Eye_Color["Pink"] = "PINK";
  Species_Eye_Color["Red"] = "RED";
  Species_Eye_Color["Silver"] = "SILVER";
  Species_Eye_Color["Unknown"] = "UNKNOWN";
  Species_Eye_Color["Yellow"] = "YELLOW";
  Species_Eye_Color["Golden"] = "GOLDEN";
})(Species_Eye_Color || (Species_Eye_Color = {}));

let Species_Hair_Color;

(function (Species_Hair_Color) {
  Species_Hair_Color["Unknown"] = "UNKNOWN";
  Species_Hair_Color["Brown"] = "BROWN";
  Species_Hair_Color["White"] = "WHITE";
  Species_Hair_Color["Red"] = "RED";
  Species_Hair_Color["Black"] = "BLACK";
  Species_Hair_Color["Blonde"] = "BLONDE";
})(Species_Hair_Color || (Species_Hair_Color = {}));

let Species_Skin_Color;

(function (Species_Skin_Color) {
  Species_Skin_Color["Blue"] = "BLUE";
  Species_Skin_Color["Brown"] = "BROWN";
  Species_Skin_Color["Caucasian"] = "CAUCASIAN";
  Species_Skin_Color["Dark"] = "DARK";
  Species_Skin_Color["Green"] = "GREEN";
  Species_Skin_Color["Grey"] = "GREY";
  Species_Skin_Color["Magenta"] = "MAGENTA";
  Species_Skin_Color["Orange"] = "ORANGE";
  Species_Skin_Color["Pale"] = "PALE";
  Species_Skin_Color["Palepink"] = "PALEPINK";
  Species_Skin_Color["Peach"] = "PEACH";
  Species_Skin_Color["Pink"] = "PINK";
  Species_Skin_Color["Purple"] = "PURPLE";
  Species_Skin_Color["Red"] = "RED";
  Species_Skin_Color["Tan"] = "TAN";
  Species_Skin_Color["Unknown"] = "UNKNOWN";
  Species_Skin_Color["White"] = "WHITE";
  Species_Skin_Color["Yellow"] = "YELLOW";
  Species_Skin_Color["Black"] = "BLACK";
  Species_Skin_Color["Asian"] = "ASIAN";
  Species_Skin_Color["Hispanic"] = "HISPANIC";
})(Species_Skin_Color || (Species_Skin_Color = {}));

let SpeciesOrderBy;

(function (SpeciesOrderBy) {
  SpeciesOrderBy["AverageHeightAsc"] = "averageHeight_ASC";
  SpeciesOrderBy["AverageHeightDesc"] = "averageHeight_DESC";
  SpeciesOrderBy["AverageLifespanAsc"] = "averageLifespan_ASC";
  SpeciesOrderBy["AverageLifespanDesc"] = "averageLifespan_DESC";
  SpeciesOrderBy["ClassificationAsc"] = "classification_ASC";
  SpeciesOrderBy["ClassificationDesc"] = "classification_DESC";
  SpeciesOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  SpeciesOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  SpeciesOrderBy["DesignationAsc"] = "designation_ASC";
  SpeciesOrderBy["DesignationDesc"] = "designation_DESC";
  SpeciesOrderBy["IdAsc"] = "id_ASC";
  SpeciesOrderBy["IdDesc"] = "id_DESC";
  SpeciesOrderBy["IsPublishedAsc"] = "isPublished_ASC";
  SpeciesOrderBy["IsPublishedDesc"] = "isPublished_DESC";
  SpeciesOrderBy["LanguageAsc"] = "language_ASC";
  SpeciesOrderBy["LanguageDesc"] = "language_DESC";
  SpeciesOrderBy["NameAsc"] = "name_ASC";
  SpeciesOrderBy["NameDesc"] = "name_DESC";
  SpeciesOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  SpeciesOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
})(SpeciesOrderBy || (SpeciesOrderBy = {}));

let StarshipOrderBy;

(function (StarshipOrderBy) {
  StarshipOrderBy["CargoCapacityAsc"] = "cargoCapacity_ASC";
  StarshipOrderBy["CargoCapacityDesc"] = "cargoCapacity_DESC";
  StarshipOrderBy["ClassAsc"] = "class_ASC";
  StarshipOrderBy["ClassDesc"] = "class_DESC";
  StarshipOrderBy["ConsumablesAsc"] = "consumables_ASC";
  StarshipOrderBy["ConsumablesDesc"] = "consumables_DESC";
  StarshipOrderBy["CostInCreditsAsc"] = "costInCredits_ASC";
  StarshipOrderBy["CostInCreditsDesc"] = "costInCredits_DESC";
  StarshipOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  StarshipOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  StarshipOrderBy["CrewAsc"] = "crew_ASC";
  StarshipOrderBy["CrewDesc"] = "crew_DESC";
  StarshipOrderBy["HyperdriveRatingAsc"] = "hyperdriveRating_ASC";
  StarshipOrderBy["HyperdriveRatingDesc"] = "hyperdriveRating_DESC";
  StarshipOrderBy["IdAsc"] = "id_ASC";
  StarshipOrderBy["IdDesc"] = "id_DESC";
  StarshipOrderBy["IsPublishedAsc"] = "isPublished_ASC";
  StarshipOrderBy["IsPublishedDesc"] = "isPublished_DESC";
  StarshipOrderBy["LengthAsc"] = "length_ASC";
  StarshipOrderBy["LengthDesc"] = "length_DESC";
  StarshipOrderBy["MaxAtmospheringSpeedAsc"] = "maxAtmospheringSpeed_ASC";
  StarshipOrderBy["MaxAtmospheringSpeedDesc"] = "maxAtmospheringSpeed_DESC";
  StarshipOrderBy["MgltAsc"] = "mglt_ASC";
  StarshipOrderBy["MgltDesc"] = "mglt_DESC";
  StarshipOrderBy["NameAsc"] = "name_ASC";
  StarshipOrderBy["NameDesc"] = "name_DESC";
  StarshipOrderBy["PassengersAsc"] = "passengers_ASC";
  StarshipOrderBy["PassengersDesc"] = "passengers_DESC";
  StarshipOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  StarshipOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
})(StarshipOrderBy || (StarshipOrderBy = {}));

let VehicleOrderBy;

(function (VehicleOrderBy) {
  VehicleOrderBy["CargoCapacityAsc"] = "cargoCapacity_ASC";
  VehicleOrderBy["CargoCapacityDesc"] = "cargoCapacity_DESC";
  VehicleOrderBy["ClassAsc"] = "class_ASC";
  VehicleOrderBy["ClassDesc"] = "class_DESC";
  VehicleOrderBy["ConsumablesAsc"] = "consumables_ASC";
  VehicleOrderBy["ConsumablesDesc"] = "consumables_DESC";
  VehicleOrderBy["CostInCreditsAsc"] = "costInCredits_ASC";
  VehicleOrderBy["CostInCreditsDesc"] = "costInCredits_DESC";
  VehicleOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  VehicleOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  VehicleOrderBy["CrewAsc"] = "crew_ASC";
  VehicleOrderBy["CrewDesc"] = "crew_DESC";
  VehicleOrderBy["IdAsc"] = "id_ASC";
  VehicleOrderBy["IdDesc"] = "id_DESC";
  VehicleOrderBy["IsPublishedAsc"] = "isPublished_ASC";
  VehicleOrderBy["IsPublishedDesc"] = "isPublished_DESC";
  VehicleOrderBy["LengthAsc"] = "length_ASC";
  VehicleOrderBy["LengthDesc"] = "length_DESC";
  VehicleOrderBy["MaxAtmospheringSpeedAsc"] = "maxAtmospheringSpeed_ASC";
  VehicleOrderBy["MaxAtmospheringSpeedDesc"] = "maxAtmospheringSpeed_DESC";
  VehicleOrderBy["ModelAsc"] = "model_ASC";
  VehicleOrderBy["ModelDesc"] = "model_DESC";
  VehicleOrderBy["NameAsc"] = "name_ASC";
  VehicleOrderBy["NameDesc"] = "name_DESC";
  VehicleOrderBy["PassengersAsc"] = "passengers_ASC";
  VehicleOrderBy["PassengersDesc"] = "passengers_DESC";
  VehicleOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  VehicleOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
})(VehicleOrderBy || (VehicleOrderBy = {}));

const AllFilmsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query AllFilms {
  allFilms {
    title
    characters {
      id
      name
    }
    starships {
      id
      name
    }
  }
}
    `;
/**
 * __useAllFilmsQuery__
 *
 * To run a query within a React component, call `useAllFilmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFilmsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFilmsQuery({
 *   variables: {
 *   },
 * });
 */

function useAllFilmsQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"](AllFilmsDocument, baseOptions);
}
function useAllFilmsLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](AllFilmsDocument, baseOptions);
}
const AllPersonsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query AllPersons {
  allPersons {
    id
    name
    films {
      id
      title
    }
  }
}
    `;
/**
 * __useAllPersonsQuery__
 *
 * To run a query within a React component, call `useAllPersonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPersonsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPersonsQuery({
 *   variables: {
 *   },
 * });
 */

function useAllPersonsQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"](AllPersonsDocument, baseOptions);
}
function useAllPersonsLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](AllPersonsDocument, baseOptions);
}
const AllStarshipsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query AllStarships {
  allStarships {
    id
    name
  }
}
    `;
/**
 * __useAllStarshipsQuery__
 *
 * To run a query within a React component, call `useAllStarshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllStarshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllStarshipsQuery({
 *   variables: {
 *   },
 * });
 */

function useAllStarshipsQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"](AllStarshipsDocument, baseOptions);
}
function useAllStarshipsLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](AllStarshipsDocument, baseOptions);
}

/***/ }),

/***/ "./hooks/useTypeFilter.ts":
/*!********************************!*\
  !*** ./hooks/useTypeFilter.ts ***!
  \********************************/
/*! exports provided: useTypeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTypeFilter", function() { return useTypeFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initState = {
  isLoading: true,
  browseType: "films",
  mainList: [],
  characterDropdownList: [],
  starshipsDropdownList: [],
  filterByCharacter: "",
  filterByStarship: "",
  error: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setLoading":
      return _objectSpread({}, state, {
        isLoading: true
      });

    case "setBrowseType":
      return _objectSpread({}, state, {
        browseType: action.payload
      });

    case "setMainList":
      return _objectSpread({}, state, {
        mainList: action.payload,
        isLoading: false
      });

    case "characterDropdownList":
      return _objectSpread({}, state, {
        characterDropdownList: action.payload
      });

    case "starshipsDropdownList":
      return _objectSpread({}, state, {
        starshipsDropdownList: action.payload
      });

    case "setFilterByCharacter":
      return _objectSpread({}, state, {
        filterByCharacter: action.payload
      });

    case "setFilterByStarship":
      return _objectSpread({}, state, {
        filterByStarship: action.payload
      });

    case "error":
      return _objectSpread({}, state, {
        error: "Oops, something went wrong"
      });

    default:
      return [];
  }
};

const useTypeFilter = () => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initState);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const films = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["useAllFilmsQuery"])();
  const persons = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["useAllPersonsQuery"])();
  const starships = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["useAllStarshipsQuery"])(); // set the main list by query param

  const param = router.query.browse;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: "setBrowseType",
      payload: param
    });
    dispatch({
      type: "setMainList",
      payload: []
    });
  }, [param]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // set the drop down lists
    let loading = persons.loading && starships.loading;
    let error = persons.error && starships.error;
    let data = persons.data && starships.data;

    if (loading) {
      dispatch({
        type: 'setLoading'
      });
    }

    if (error) {
      dispatch({
        type: 'error'
      });
    }

    if (data) {
      let personsArr = persons.data.allPersons.map(p => p.name);
      let starshipsArr = starships.data.allStarships.map(s => s.name);
      dispatch({
        type: "characterDropdownList",
        payload: personsArr
      });
      dispatch({
        type: "starshipsDropdownList",
        payload: starshipsArr
      });
    }
  }, [persons, starships]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (state.browseType === "films") {
      if (films.loading) {
        dispatch({
          type: "setLoading"
        });
      } else if (!films.error && films.data) {
        dispatch({
          type: "setMainList",
          payload: films.data.allFilms
        });
      }
    }

    if (state.browseType === "persons") {
      if (persons.loading) {
        dispatch({
          type: "setLoading"
        });
      } else if (!persons.error && persons.data) {
        dispatch({
          type: "setMainList",
          payload: persons.data.allPersons
        });
      }
    }

    if (state.browseType === "starships") {
      if (starships.loading) {
        dispatch({
          type: "setLoading"
        });
      } else if (!starships.error && starships.data) {
        dispatch({
          type: "setMainList",
          payload: starships.data.allStarships
        });
      }
    }
  }, [films, persons, starships, state.browseType]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (state.browseType === "films") {
      if (!films.loading && !films.error) {
        let newArr = [];
        films.data.allFilms.forEach(x => {
          const charMap = x.characters.map(c => c.name);

          if (charMap.includes(state.filterByCharacter)) {
            newArr.push(x);
          }
        });
        dispatch({
          type: 'setMainList',
          payload: newArr
        });
      }
    }
  }, [state.filterByCharacter]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (state.browseType === "films") {
      if (!films.loading && !films.error) {
        let newArr = [];
        films.data.allFilms.forEach(x => {
          const shipMap = x.starships.map(c => c.name);

          if (shipMap.includes(state.filterByStarship)) {
            newArr.push(x);
          }
        });
        dispatch({
          type: 'setMainList',
          payload: newArr
        });
      }
    }
  }, [state.filterByStarship]);

  const handleBrowse = e => {
    e.preventDefault();
    router.push(`/?browse=${e.target.value}`, `/?browse=${e.target.value}`, {
      shallow: true
    });
  };

  const handleFilterByCharacter = e => {
    e.preventDefault();
    dispatch({
      type: "setFilterByCharacter",
      payload: e.target.value
    });
  };

  const handleFilterByStarship = e => {
    e.preventDefault();
    dispatch({
      type: "setFilterByStarship",
      payload: e.target.value
    });
  };

  const handlers = {
    handleBrowse,
    handleFilterByCharacter,
    handleFilterByStarship
  };
  return [state, dispatch, handlers];
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useTypeFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useTypeFilter */ "./hooks/useTypeFilter.ts");
/* harmony import */ var _HOC_withData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/withData */ "./HOC/withData.tsx");
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/layout */ "./components/layouts/layout.tsx");
/* harmony import */ var _components_items_FilmItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/items/FilmItem */ "./components/items/FilmItem.tsx");
/* harmony import */ var _components_items_PersonItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/items/PersonItem */ "./components/items/PersonItem.tsx");
/* harmony import */ var _components_items_StarshipItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/items/StarshipItem */ "./components/items/StarshipItem.tsx");
var _jsxFileName = "/Users/rsbear/dev/swapiplayground/webapp/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Landing = ({
  shortId
}) => {
  const [state, dispatch, handlers] = Object(_hooks_useTypeFilter__WEBPACK_IMPORTED_MODULE_1__["useTypeFilter"])();
  return __jsx(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    state: state,
    dispatch: dispatch,
    handlers: handlers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Currently browsing ", state.browseType), state.isLoading && __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Loading..."), state.browseType === "films" && state.mainList.map(({
    id,
    title,
    characters,
    starships
  }) => __jsx(_components_items_FilmItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    characters: characters,
    starships: starships,
    key: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), state.browseType === "persons" && state.mainList.map(({
    id,
    name,
    films
  }) => __jsx(_components_items_PersonItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: name,
    films: films,
    key: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })), state.browseType === "starships" && state.mainList.map(({
    id,
    name
  }) => __jsx(_components_items_StarshipItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: name,
    key: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })));
};

Landing.getInitialProps = async ctx => {
  const {
    shortId
  } = ctx.query;
  return {
    shortId
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_withData__WEBPACK_IMPORTED_MODULE_2__["default"])(Landing));

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rsbear/dev/swapiplayground/webapp/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map