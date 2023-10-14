import type { Config } from "jest";

const config: Config = {
  globals: {
    __DEV__: true,
  },
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native(-.*)?|@react-native(- community)?|@infra-market?)/)",
  ],
  testEnvironment: "node",
  modulePaths: ["node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    "assets/(.*)": [
      "<rootDir>/src/assets/$1",
      "<rootDir>/src/feature/auth/assets/$1",
      "@react-native/assets/registry",
    ],
  },
  setupFiles: ["./test-setup.js"],
  modulePathIgnorePatterns: [
    "<rootDir>/example/node_modules",
    "<rootDir>/lib/",
  ],
  collectCoverageFrom: ["src/**/*.{tsx,jsx,jsx}"],
  coverageThreshold: {
    global: {
      lines: 30,
      functions: 30,
      branches: 30,
    },
  },
  collectCoverage: true,
  coverageProvider: "v8",
  coverageReporters: ["lcov"],
  verbose: true,
};
export default config;
