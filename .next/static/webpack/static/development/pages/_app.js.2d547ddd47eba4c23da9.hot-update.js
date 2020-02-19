webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/apollo.tsx":
/*!************************!*\
  !*** ./lib/apollo.tsx ***!
  \************************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);










var _jsxFileName = "/Users/rsbear/dev/swapiplayground/webapp/lib/apollo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






var isServer = function isServer() {
  return false;
};
/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */


function withApollo(Application) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? true : _ref$ssr;

  var WithApollo = function WithApollo(_ref2) {
    var apolloClient = _ref2.apolloClient,
        serverAccessToken = _ref2.serverAccessToken,
        apolloState = _ref2.apolloState,
        pageProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref2, ["apolloClient", "serverAccessToken", "apolloState"]);

    var client = apolloClient || initApolloClient(apolloState);
    return __jsx(Application, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, pageProps, {
      apolloClient: client,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  };

  if (true) {
    // Find correct display name
    var displayName = Application.displayName || Application.name || "Component"; // Warn if old way of installing apollo is used

    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    } // Set correct display name for devtools


    WithApollo.displayName = "withApollo(".concat(displayName, ")");
  }

  if (ssr || Application.getInitialProps) {
    WithApollo.getInitialProps = function _callee(ctx) {
      var AppTree, _ctx$ctx, req, res, apolloClient, pageProps, _ref3, getDataFromTree, apolloState;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              AppTree = ctx.AppTree, _ctx$ctx = ctx.ctx, req = _ctx$ctx.req, res = _ctx$ctx.res; // Run all GraphQL queries in the component tree
              // and extract the resulting data

              apolloClient = ctx.ctx.apolloClient = initApolloClient({});

              if (!Application.getInitialProps) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(Application.getInitialProps(ctx));

            case 5:
              _context.t0 = _context.sent;
              _context.next = 9;
              break;

            case 8:
              _context.t0 = {};

            case 9:
              pageProps = _context.t0;

              if (true) {
                _context.next = 27;
                break;
              }

              if (!(res && res.finished)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return", {});

            case 13:
              if (!ssr) {
                _context.next = 26;
                break;
              }

              _context.prev = 14;
              _context.next = 17;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @apollo/react-ssr */ "./node_modules/@apollo/react-ssr/lib/react-ssr.esm.js")));

            case 17:
              _ref3 = _context.sent;
              getDataFromTree = _ref3.getDataFromTree;
              _context.next = 21;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(getDataFromTree(__jsx(AppTree, {
                pageProps: _objectSpread({}, pageProps, {
                  apolloClient: apolloClient
                }),
                apolloClient: apolloClient,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              })));

            case 21:
              _context.next = 26;
              break;

            case 23:
              _context.prev = 23;
              _context.t1 = _context["catch"](14);
              // Prevent Apollo Client GraphQL errors from crashing SSR.
              // Handle them in components via the data.error prop:
              // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
              console.error("Error while running `getDataFromTree`", _context.t1);

            case 26:
              // getDataFromTree does not call componentWillUnmount
              // head side effect therefore need to be cleared manually
              next_head__WEBPACK_IMPORTED_MODULE_11___default.a.rewind();

            case 27:
              // Extract query data from the Apollo store
              apolloState = apolloClient.cache.extract();
              return _context.abrupt("return", _objectSpread({}, pageProps, {
                apolloState: apolloState
              }));

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[14, 23]]);
    };
  }

  return WithApollo;
}
var apolloClient = null;
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */

function initApolloClient(initState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (isServer()) {
    return createApolloClient(initState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    // setAccessToken(cookie.parse(document.cookie).test);
    apolloClient = createApolloClient(initState);
  }

  return apolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {Object} config
 */


function createApolloClient() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var link = new _apollo_client__WEBPACK_IMPORTED_MODULE_12__["HttpLink"]({
    uri: "https://graphql.org/swapi-graphql/",
    // Server URL (must be absolute)
    fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default.a
  });
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_12__["ApolloClient"]({
    ssrMode: false,
    link: link,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_12__["InMemoryCache"]().restore(initialState)
  });
} // import React from "react";
// import App from "next/app";
// import { ApolloProvider } from "@apollo/client";
// import createApolloClient from "./apolloClient";
// let globalApolloClient = null;
// /**
//  * @param {NextPageContext | NextAppContext} ctx
//  */
// export const initOnContext = ctx => {
//   const inAppContext = Boolean(ctx.ctx);
//   // We consider installing `withApollo({ ssr: true })` on global App level
//   // as antipattern since it disables project wide Automatic Static Optimization.
//   if (process.env.NODE_ENV === "development") {
//     if (inAppContext) {
//       console.warn(
//         "Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\n" +
//           "Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n"
//       );
//     }
//   }
//   // Initialize ApolloClient if not already done
//   const apolloClient =
//     ctx.apolloClient ||
//     initApolloClient(ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx);
//   apolloClient.toJSON = () => null;
//   ctx.apolloClient = apolloClient;
//   if (inAppContext) {
//     ctx.ctx.apolloClient = apolloClient;
//   }
//   return ctx;
// };
// /**
//  * @param  {NormalizedCacheObject} initialState
//  * @param  {NextPageContext} ctx
//  */
// const initApolloClient = (initialState, ctx) => {
//   if (typeof window === "undefined") {
//     return createApolloClient(initialState, ctx);
//   }
//   if (!globalApolloClient) {
//     globalApolloClient = createApolloClient(initialState, ctx);
//   }
//   return globalApolloClient;
// };
// /**
//  * Creates a withApollo HOC
//  * @param  {Object} withApolloOptions
//  * @param  {Boolean} [withApolloOptions.ssr=false]
//  * @returns {(PageComponent: ReactNode) => ReactNode}
//  */
// export const withApollo = ({ ssr = false } = {}) => PageComponent => {
//   const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
//     let client;
//     if (apolloClient) {
//       // Happens on: getDataFromTree & next.js ssr
//       client = apolloClient;
//     } else {
//       // Happens on: next.js csr
//       client = initApolloClient(apolloState, undefined);
//     }
//     return <PageComponent {...pageProps} client={client} />;
//   };
//   // Set the correct displayName in development
//   if (process.env.NODE_ENV !== "production") {
//     const displayName =
//       PageComponent.displayName || PageComponent.name || "Component";
//     WithApollo.displayName = `withApollo(${displayName})`;
//   }
//   if (ssr || PageComponent.getInitialProps) {
//     WithApollo.getInitialProps = async ctx => {
//       const inAppContext = Boolean(ctx.ctx);
//       const { apolloClient } = initOnContext(ctx);
//       // Run wrapped getInitialProps methods
//       let pageProps = {};
//       if (PageComponent.getInitialProps) {
//         pageProps = await PageComponent.getInitialProps(ctx);
//       } else if (inAppContext) {
//         pageProps = await App.getInitialProps(ctx);
//       }
//       // Only on the server:
//       if (typeof window === "undefined") {
//         const { AppTree } = ctx;
//         if (ctx.res && ctx.res.finished) {
//           return pageProps;
//         }
//         if (ssr && AppTree) {
//           try {
//             const { getDataFromTree } = await import("@apollo/react-ssr");
//             // Since AppComponents and PageComponents have different context types
//             // we need to modify their props a little.
//             let props;
//             if (inAppContext) {
//               props = { ...pageProps, apolloClient };
//             } else {
//               props = { pageProps: { ...pageProps, apolloClient } };
//             }
//             await getDataFromTree(<AppTree {...props} />);
//           } catch (error) {
//             console.error("Error while running `getDataFromTree`", error);
//           }
//         }
//       }
//       return {
//         ...pageProps,
//         apolloState: apolloClient.cache.extract(),
//         apolloClient: ctx.apolloClient
//       };
//     };
//   }
//   return WithApollo;
// };

/***/ })

})
//# sourceMappingURL=_app.js.2d547ddd47eba4c23da9.hot-update.js.map