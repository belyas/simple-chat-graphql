import { ApolloClient, InMemoryCache, HttpLink, split } from "apollo-boost";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const SERVER_URL = "http://localhost:5000/graphql";
const SERVER_WS_URL = "ws://localhost:5000/graphql";

const wsLink = new WebSocketLink({
  uri: SERVER_WS_URL,
  options: {
    reconnect: true,
    lazy: true
  }
});

const httpLink = new HttpLink({ uri: SERVER_URL });
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);

    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions: { query: { fetchPolicy: "no-cache" } }
});

export default client;
