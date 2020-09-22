// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
//
// const httpLink = new HttpLink({
//   uri: 'http://localhost:4000/graphql',
//   credentials: 'include'
// });
//
// const client = new ApolloClient({
//   connectToDevTools: true,
//   link: httpLink,
//   cache: new InMemoryCache()
// });

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import fetch from 'node-fetch';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  fetch
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  credentials: true,
  link: httpLink
});

export default client;
