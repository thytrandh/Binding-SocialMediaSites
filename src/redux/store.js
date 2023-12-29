import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/Auth/loginSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import registerSlice from "./slice/Auth/registerSlice";
import resetPasswordSlice from "./slice/Auth/resetPasswordSlice";
import userSlice from "./slice/User/userSlice";
import updateUserSlice from "./slice/User/updateUserSlice";
import updateAccountSlice from "./slice/Account/updateAccountSlice";
import postsSlice from "./slice/Posts/postsSlice";
import commentSlice from "./slice/Posts/commentSlice";
import reportSlice from "./slice/Report/reportSlice";
import likePostsSlice from "./slice/Posts/likePostsSlice";
import friendSlice from "./slice/User/friendSlice";
import pagesSlice from "./slice/Pages/pagesSlice";
import storiesSlice from "./slice/Stories/storiesSlice";

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
  userSettings: updateUserSlice,
  //Account
  accountSettings: updateAccountSlice,
  //Posts
  userPosts: postsSlice,
  commentPosts: commentSlice,
  userLikePosts: likePostsSlice,
  //Stories
  stories: storiesSlice,
  //Friend
  friend: friendSlice,
  //Pages
  pages: pagesSlice,
  //Report
  report: reportSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: {
    persistedReducer,
  },
});

export default store;
