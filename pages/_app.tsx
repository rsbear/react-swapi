import App from "next/app";
import { withApollo } from "./../lib/apollo";
import { ApolloProvider } from "@apollo/client";

const MyApp = ({ Component, pageProps, apolloClient }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default withApollo(MyApp);
