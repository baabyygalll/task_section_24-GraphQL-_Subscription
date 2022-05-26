import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://trusted-guinea-63.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "hinwJ0Kk04waDzUQ0mFiLvGkNKcuxHpFHMkxOsfALswmmgSlkLw5R1bMcCrueH6O",
  },
});

export default client;
