import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import optionReducer from "./reducers/optionReducer";
import { OptionState } from "../modal/option";

export interface RootState {
  option: OptionState[];
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["data"],
  keyPrefix: "",
};

const rootReducer: Reducer<RootState> = combineReducers({
  option: optionReducer,
});

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
