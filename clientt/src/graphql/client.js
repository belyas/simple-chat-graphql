import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

const SERVER_URL = "http://localhost:5000/graphql";
const client = new ApolloClient({
  link: new HttpLink({ uri: SERVER_URL }),
  cache: new InMemoryCache()
});

export default client;
