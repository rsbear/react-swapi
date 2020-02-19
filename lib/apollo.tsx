import React from "react";
import Head from "next/head";
import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import fetch from "isomorphic-unfetch";

const isServer = () => typeof window === "undefined";

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(Application: any, { ssr = true } = {}) {
  const WithApollo = ({
    apolloClient,
    serverAccessToken,
    apolloState,
    ...pageProps
  }: any) => {
    const client = apolloClient || initApolloClient(apolloState);
    return <Application {...pageProps} apolloClient={client} />;
  };

  if (process.env.NODE_ENV !== "production") {
    // Find correct display name
    const displayName =
      Application.displayName || Application.name || "Component";

    // Warn if old way of installing apollo is used
    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    }

    // Set correct display name for devtools
    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || Application.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: any) => {
      const {
        AppTree,
        ctx: { req, res }
      } = ctx;

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apolloClient = (ctx.ctx.apolloClient = initApolloClient({}));

      const pageProps = Application.getInitialProps
        ? await Application.getInitialProps(ctx)
        : {};

      // Only on the server
      if (typeof window === "undefined") {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (res && res.finished) {
          return {};
        }

        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import("@apollo/react-ssr");
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient
                }}
                apolloClient={apolloClient}
              />
            );
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error("Error while running `getDataFromTree`", error);
          }
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState
      };
    };
  }

  return WithApollo;
}

let apolloClient: ApolloClient<any> | null = null;

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */
function initApolloClient(initState: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (isServer()) {
    return createApolloClient(initState);
  }

  // Reuse client on the client-side
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
function createApolloClient(initialState = {}) {
  const link = new HttpLink({
    uri: "https://swapi.graph.cool/", // Server URL (must be absolute)
    fetch
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: link,
    cache: new InMemoryCache().restore(initialState)
  });
}
// import React from "react";
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
