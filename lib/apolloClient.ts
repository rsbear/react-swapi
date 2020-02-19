import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'isomorphic-unfetch'

export default function createApolloClient(initialState, ctx) {
  const link = new HttpLink({
    uri: 'https://api.graphcms.com/simple/v1/swapi', // Server URL (must be absolute)
    fetch
  })

  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: link,
    cache: new InMemoryCache().restore(initialState),
  })
}