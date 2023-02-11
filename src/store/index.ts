/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import goodsList from "./GoodsStore";
import basketList from "./basketStore";
import userList from "./userStore";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  goods: goodsList,
  basket: basketList,
  user: userList,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   reducers: persistedReducer,
  // },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
