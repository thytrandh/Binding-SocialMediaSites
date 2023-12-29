import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { getUser } from "../User/userSlice";
import { message } from "antd";
import { getNewsfeed } from "./postsSlice";

const initialState = {
  currentPostComment: null,
  currentEditComment: null,
  currentDeleteComment: null,
  loading: false,
  error: false,
};

export const postComment = createAsyncThunk(
  "commentPosts/post",
  async (data, thunkAPI) => {
    const { postId, content } = data;

    try {
      const result = await api.post("/api/v1/comment", {
        postId,
        content,
      });
      thunkAPI.dispatch(getNewsfeed());
      thunkAPI.dispatch(getUser());
      message.success("Comment posted successfully.");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const editComment = createAsyncThunk(
  "commentPosts/edit",
  async (data, thunkAPI) => {
    const { id, content, postId } = data;
    const rate = 0;
    try {
      const result = await api.put("/api/v1/comment", {
        id,
        content,
        postId,
        rate,
      });
      thunkAPI.dispatch(getNewsfeed());
      thunkAPI.dispatch(getUser());
      message.success("Your comments successfully edited.");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const deleteComment = createAsyncThunk(
  "commentPosts/delete",
  async (data, thunkAPI) => {
    const { commentId } = data;

    try {
      const result = await api.delete(`/api/v1/comment/${commentId}`);
      thunkAPI.dispatch(getNewsfeed());
      thunkAPI.dispatch(getUser());
      message.success("Your comments successfully deleted.");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const commentSlice = createSlice({
  name: "commentPosts",
  initialState,
  reducers: {},
  extraReducers: {
    //create comment
    [postComment.pending]: (state, action) => {
      state.loading = true;
    },
    [postComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentPostComment = action.payload;
      state.error = false;
    },
    [postComment.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //edit comment
    [editComment.pending]: (state, action) => {
      state.loading = true;
    },
    [editComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentEditComment = action.payload;
      state.error = false;
    },
    [editComment.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default commentSlice.reducer;
