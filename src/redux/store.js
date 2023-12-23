import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/Auth/loginSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import registerSlice from "./slice/Auth/registerSlice";
import resetPasswordSlice from "./slice/Auth/resetPasswordSlice";
import userSlice from "./slice/User/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  //Auth
  loginAuth: loginSlice,
  registerAuth: registerSlice,
  resetPasswordAuth: resetPasswordSlice,
  //User
  userInfo: userSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: {
    persistedReducer,
  },
});

export default store;
