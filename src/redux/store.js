import {
  applyMiddleware,
  combineReducers,
  configureStore,
  createStore
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { IndexReducer } from "./Reducer/IndexReducer";

const persistConfig = {
  key: "root",
  storage,
};
/*
const rootReducer = combineReducers({
  app: IndexReducer
}); */

const persistedReducer = persistReducer(persistConfig, IndexReducer.reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistedStore = persistStore(store);

export { store, persistedStore };
