/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import {
  ApolloClient,
  ApolloLink,
  DefaultOptions,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { RestLink } from "apollo-link-rest";
import _ from "lodash";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
  mutate: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};


const authRestLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }: any) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjoidHJ1ZSIsImxvZ2luX2lkIjoiOTk3MjMxMTQ2NSIsImxvZ2luX3R5cGUiOiJwaG9uZW5vIiwicmVxdWVzdF91c2VyX2lkIjo0NH0.dI2SUF1-wpdlbfAsUkyD6kpzDRGxJSlprwolehrpm5s'
    const newHeaders = {
      ...headers,
      Accept: "application/json",
      Authorization: token,
    };
    if (operation.variables.isPublic) {
      delete newHeaders.Authorization;
    }
    return { headers: newHeaders };
  });
  return forward(operation).map((result) => {
    const { restResponses } = operation.getContext();
    if (restResponses[0].status === 404) {
      throw new Error("Internal server error");
    }
    const authTokenResponse = restResponses.find((res: any) =>
      res.headers.has("Authorization")
    );

    return result;
  });
});

const restLink = new RestLink({
  endpoints: {
    opsHub: process.env.REACT_APP_API_BASE_URL || "",
  },
  fieldNameDenormalizer: (key: string) => _.snakeCase(key),
  fieldNameNormalizer: (key: string) => _.camelCase(key),
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authRestLink, restLink]),
  defaultOptions,
});

export default client;
