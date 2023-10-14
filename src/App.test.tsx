/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { Provider } from "react-redux";

import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { render } from "@testing-library/react";

import App from "./App";
import theme from "./config/theme";
import createTestStore from "./utils/testStore";

let store: any;

jest.mock("redux", () => ({
  createStore: jest.fn(
    (val) =>
      val ?? {
        "@@observable": jest.fn(),
        dispatch: jest.fn(() => {
          const action = require("../src/config/store/RootAction").action;
          return action;
        }),
        getState: jest.fn(() => {}),
        replaceReducer: jest.fn(),
        subscribe: jest.fn(),
      }
  ),
  combineReducers: jest.fn(),
  applyMiddleware: jest.fn(),
  compose: jest.fn(),
}));

describe("App should", () => {
  beforeEach(() => {
    store = createTestStore({});
    console.error = jest.fn();
  });

  it("be defined", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />,
        </ThemeProvider>
      </Provider>
    );
    expect(screen).toBeDefined();
  });
});
