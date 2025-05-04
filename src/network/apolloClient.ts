// apolloClient.js
import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://gorest.co.in/public/v2/graphql', // Replace with your GraphQL API
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer fb80864b3806a3083e93a1750bdf49e339416f5f9e07405e2a0859d8b0719c36`,
  },
});

export default client;
