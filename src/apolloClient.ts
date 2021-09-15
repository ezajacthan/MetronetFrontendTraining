import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { RestLink } from "apollo-link-rest";

// Normally you will want to pull your URL from process.ENV or a config file.
// If you're talking to a GraphQL API you'll want to use HttpLink.
// Here we are just setting our URL directly for this tutorial as we're using an open source REST api.
// We will be using the dog.ceo api to fetch random images.
const restLink = new RestLink({ uri: "https://dog.ceo/api" });

// Error handler for logging, here we're just logging details to the console.
const handleError = onError(
  ({ operation, forward, networkError, graphQLErrors }): any => {
    console.log("An error occurred while processing the request.");
    console.log("operation", operation);
    console.log("forward", forward);
    console.log("networkError", networkError);
    console.log("graphQLErrors", graphQLErrors);
  }
);

// When we have an error, we retry up to 5 times for 500 errors before calling it quits.
export const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error) => /^5\d{2}$/.test(error.statusCode), // only retry 5xx errors
  },
});

// Our Apollo client, with error handler, retry, and our endpoint
const client = new ApolloClient({
  link: ApolloLink.from([handleError, retryLink, restLink]),
  cache: new InMemoryCache(),
  name: "React Tutorial Client",
});

export default client;
