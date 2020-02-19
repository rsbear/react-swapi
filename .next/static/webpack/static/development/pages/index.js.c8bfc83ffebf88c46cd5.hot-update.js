webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useTypeFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTypeFilter */ "./hooks/useTypeFilter.ts");
/* harmony import */ var _HOC_withData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HOC/withData */ "./HOC/withData.tsx");
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layouts/layout */ "./components/layouts/layout.tsx");
/* harmony import */ var _components_items_FilmItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/items/FilmItem */ "./components/items/FilmItem.tsx");
/* harmony import */ var _components_items_PersonItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/items/PersonItem */ "./components/items/PersonItem.tsx");
/* harmony import */ var _components_items_StarshipItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/items/StarshipItem */ "./components/items/StarshipItem.tsx");


var _jsxFileName = "/Users/rsbear/dev/swapiplayground/webapp/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Landing = function Landing(_ref) {
  var shortId = _ref.shortId;

  var _useTypeFilter = Object(_hooks_useTypeFilter__WEBPACK_IMPORTED_MODULE_3__["useTypeFilter"])(),
      _useTypeFilter2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useTypeFilter, 2),
      state = _useTypeFilter2[0],
      dispatch = _useTypeFilter2[1];

  return __jsx(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    state: state,
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Currently browsing ", state.mainType), state.isLoading && __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Loading..."), state.browseType === "films" && state.list.map(function (_ref2) {
    var id = _ref2.id,
        title = _ref2.title,
        characters = _ref2.characters,
        starships = _ref2.starships;
    return __jsx(_components_items_FilmItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: title,
      characters: characters,
      starships: starships,
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }), state.browseType === "persons" && state.list.map(function (_ref3) {
    var id = _ref3.id,
        name = _ref3.name;
    return __jsx(_components_items_PersonItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: name,
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  }), state.browseType === "starships" && state.list.map(function (_ref4) {
    var id = _ref4.id,
        name = _ref4.name;
    return __jsx(_components_items_StarshipItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: name,
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    });
  }));
};

Landing.getInitialProps = function _callee(ctx) {
  var shortId;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          shortId = ctx.query.shortId;
          return _context.abrupt("return", {
            shortId: shortId
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_withData__WEBPACK_IMPORTED_MODULE_4__["default"])(Landing));

/***/ })

})
//# sourceMappingURL=index.js.c8bfc83ffebf88c46cd5.hot-update.js.map