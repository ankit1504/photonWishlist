/* eslint-disable @typescript-eslint/no-var-requires */

const { JSDOM } = require("jsdom");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost/",
});

const { window } = jsdom;

/** Configuration for JSDOM*/
function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
};
window.addEventListener = () => {};
window.requestAnimationFrame = () => {
  throw new Error("requestAnimationFrame is not supported in Node");
};
window.cancelAnimationFrame = () => {
  throw new Error("requestAnimationFrame is not supported in Node");
};
copyProps(window, global);

jest.mock("@infra-market/im-web-components", () => ({
  IMButton: jest.fn(),
  IMSearchBar: jest.fn(),
  IMHeaderBar: jest.fn(),
  IMLabelValue: jest.fn(),
}));

jest.mock("redux-observable", () => ({
  ...jest.requireActual("redux-observable"),
  createEpicMiddleware: jest.fn(() => ({
    run: jest.fn(),
  })),
  combineEpics: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));
