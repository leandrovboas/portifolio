import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri:
    `${process.env.NEXT_PUBLIC_STRAPI}/graphql` ||
    'https://portifolio-strapi.herokuapp.com/graphql'
});

const authLink = setContext((_, { headers }) =>
  // const token = localStorage.getItem('token');
  ({
    headers: {
      ...headers
      // authorization: token ? `Bearer ${token}` : ''
    }
  })
);

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
export default apolloClient;
