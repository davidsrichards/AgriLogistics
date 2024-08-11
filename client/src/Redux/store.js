import { combineReducers, configureStore } from "@reduxjs/toolkit";
import NavigationSlice from "./Features/Slice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  navigation: NavigationSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getMiddleware) =>
    getMiddleware({
      serializableCheck: false,
    }),
});
