import {
  ApolloClient,
  createHttpLink,
  DefaultOptions,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_STRAPI}/graphql`
});

const defaultOptions: DefaultOptions = {
  query: {
    fetchPolicy: 'no-cache'
  }
};

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
  cache: new InMemoryCache(),
  defaultOptions
});
export default apolloClient;
