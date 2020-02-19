webpackHotUpdate("static/development/pages/index.js",{

/***/ "./hooks/useTypeFilter.ts":
/*!********************************!*\
  !*** ./hooks/useTypeFilter.ts ***!
  \********************************/
/*! exports provided: useTypeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTypeFilter", function() { return useTypeFilter; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



var initState = {
  isLoading: true,
  browseType: "films",
  mainList: [],
  characterList: [],
  starshipList: [],
  filterByCharacter: "",
  filterByStarship: ""
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "setLoading":
      return _objectSpread({}, state, {
        isLoading: true
      });

    case "setBrowse":
      return _objectSpread({}, state, {
        browseType: action.payload
      });

    case "setMainList":
      return _objectSpread({}, state, {
        mainList: action.payload,
        isLoading: false
      });

    case "characterList":
      return _objectSpread({}, state, {
        characterList: action.payload
      });

    case "starshipList":
      return _objectSpread({}, state, {
        starshipList: action.payload
      });

    case "setFilterByCharacter":
      return _objectSpread({}, state, {
        filterByCharacter: action.payload
      });

    case "setFilterByStarship":
      return _objectSpread({}, state, {
        filterByStarship: action.payload
      });

    default:
      return [];
  }
};

var useTypeFilter = function useTypeFilter() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_7__["useReducer"])(reducer, initState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var films = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__["useAllFilmsQuery"])();
  var persons = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__["useAllPersonsQuery"])();
  var starships = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__["useAllStarshipsQuery"])();
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (persons.loading) {
      return;
    } else if (!persons.error && persons.data) {
      var personsArr = persons.data.allPersons.map(function (p) {
        return p.name;
      });
      dispatch({
        type: "characterList",
        payload: personsArr
      });
    }
  }, [persons]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
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
  }, [films, state.browseType]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
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
  }, [persons, state.browseType]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
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
  }, [starships, state.browseType]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (state.browseType === "films") {
      if (!films.loading && !films.error) {
        var newArr = [];
        films.data.allFilms.forEach(function (x) {
          var charMap = x.characters.map(function (c) {
            return c.name;
          });

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
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (state.browseType === "films") {
      if (!films.loading && !films.error) {
        var newArr = [];
        films.data.allFilms.forEach(function (x) {
          var shipMap = x.starships.map(function (c) {
            return c.name;
          });

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
  return [state, dispatch];
};

/***/ })

})
//# sourceMappingURL=index.js.7433809c7c589428ef93.hot-update.js.map