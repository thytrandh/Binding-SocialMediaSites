import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { getUser } from "../User/userSlice";
import { getNewsfeed } from "./postsSlice";

const initialState = {
  currentLikePosts: null,
  currentUnlikePosts: null,
  loading: false,
  error: false,
};

export const likePosts = createAsyncThunk(
  "userLikePosts/like",
  async (data, thunkAPI) => {
    const { postId } = data;
    const formData = new FormData();
    formData.append("postId", postId);
    try {
      const result = await api.put("/api/v1/like-post", formData);
      thunkAPI.dispatch(getNewsfeed());
      thunkAPI.dispatch(getUser());
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const unlikePosts = createAsyncThunk(
  "userLikePosts/unlike",
  async (data, thunkAPI) => {
    const { postId } = data;
    const formData = new FormData();
    formData.append("postId", postId);
    try {
      const result = await api.put("/api/v1/unlike-post", formData);
      thunkAPI.dispatch(getNewsfeed());
      thunkAPI.dispatch(getUser());
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const likePostsSlice = createSlice({
  name: "userLikePosts",
  initialState,
  reducers: {},
  extraReducers: {
    //like posts
    [likePosts.pending]: (state, action) => {
      state.loading = true;
    },
    [likePosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentLikePosts = action.payload;
      state.error = false;
    },
    [likePosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //unlike posts
    [unlikePosts.pending]: (state, action) => {
      state.loading = true;
    },
    [unlikePosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUnlikePosts = action.payload;
      state.error = false;
    },
    [unlikePosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default likePostsSlice.reducer;
