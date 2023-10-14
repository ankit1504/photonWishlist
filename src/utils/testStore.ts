import { createStore } from "redux";

import RootReducer from "../config/store/RootReducer";

const createTestStore = (preloadedState: any) => {
  const store = createStore(RootReducer, preloadedState);

  return store;
};

export default createTestStore;
