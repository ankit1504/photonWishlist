/* eslint-disable import/no-unresolved */
import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";

import { ApolloProvider } from "@apollo/client";
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from "@mui/material/styles";
import * as Sentry from "@sentry/react";

import client from "./config/apolloClient";
import RootStore from "./config/store";
import theme from "./config/theme";
import "./config/i18n";
import "./config/sentry";
import RootNavigation from "./navigation/RootNavigation";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const App: FunctionComponent = () => (
  <Provider store={RootStore}>
    <ApolloProvider client={client}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <RootNavigation />
        </ThemeProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  </Provider>
);

export default Sentry.withProfiler(App);
