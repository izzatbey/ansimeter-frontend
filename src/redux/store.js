import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducer as tweet } from "./slice/tweet";

const reducers = combineReducers({
  tweet,
});

const persistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["tweet", "sentimen"],
};

const persist = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persist,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };
