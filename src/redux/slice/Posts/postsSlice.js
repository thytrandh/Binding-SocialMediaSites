import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { message } from "antd";
import { getUser } from "../User/userSlice";
import { getCurrentPages } from "../Pages/pagesSlice";
import { getPostsReported } from "../Report/reportSlice";

const initialState = {
  currentCreatePosts: null,
  currentEditPosts: null,
  currentDeletePosts: null,
  currentReportPosts: null,
  currentAllPosts: null,
  allPostsByUser: null,
  newsfeed: null,
  loading: false,
  error: false,
};

export const createPosts = createAsyncThunk(
  "userPosts/create",
  async (data, thunkAPI) => {
    const { content, video, image, feeling, pageId } = data;
    console.log("image", image);
    console.log("video", video);

    const formData = new FormData();

    if (content !== null) {
      formData.append("content", content);
    }
    if (video.length > 0) {
      video.forEach((vid) => {
        formData.append("video", vid);
      });
    }
    if (image.length > 0) {
      image.forEach((img) => {
        formData.append("image", img);
      });
    }
    if (feeling !== null) {
      formData.append("feeling", feeling);
    }
    if (pageId !== undefined) {
      formData.append("page", pageId);
    }

    try {
      console.log([...formData]);
      const result = await api.post("/api/v1/post", formData);
      thunkAPI.dispatch(getNewsfeed());
      thunkAPI.dispatch(getUser());
      thunkAPI.dispatch(getCurrentPages());
      message.success("Posts created successfully.");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const editPosts = createAsyncThunk(
  "userPosts/edit",
  async (data, thunkAPI) => {
    const { id, content, video, image, feeling, pageId } = data;

    const formData = new FormData();

    if (id !== null) {
      formData.append("id", id);
    }

    if (content !== null) {
      formData.append("content", content);
    }
    if (video.length > 0) {
      video.forEach((vid) => {
        formData.append("video", vid);
      });
    }
    if (image.length > 0) {
      image.forEach((img) => {
        formData.append("image", img);
      });
    }
    if (feeling !== null) {
      formData.append("feeling", feeling);
    }
    if (pageId !== null) {
      formData.append("pageId", pageId);
    }

    try {
      const result = await api.put("/api/v1/update-post", formData);
      thunkAPI.dispatch(getNewsfeed());
      thunkAPI.dispatch(getUser());
      message.success("Your posts successfully edited.");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const deletePosts = createAsyncThunk(
  "userPosts/delete",
  async (data, thunkAPI) => {
    const { postsId } = data;
    try {
      const result = await api.delete(`/api/v1/delete-post/${postsId}`);
      thunkAPI.dispatch(getNewsfeed());
      thunkAPI.dispatch(getUser());
      thunkAPI.dispatch(getPostsReported());
      message.success("Your posts successfully deleted.");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getAllPostsByUser = createAsyncThunk(
  "userPosts/getAllPostsByUser",
  async (data, thunkAPI) => {
    const { userId } = data;
    console.log("userId", userId);
    const formData = new FormData();
    formData.append("userId", userId);
    try {
      const result = await api.get("/api/v1/posts-not-page", formData);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getNewsfeed = createAsyncThunk(
  "userPosts/getNewFeed",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/newfeeds");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const postsSlice = createSlice({
  name: "userPosts",
  initialState,
  reducers: {
    deleteStateUserPosts: (state, action) => {
      state.currentCreatePosts = null;
      state.currentEditPosts = null;
    },
  },
  extraReducers: {
    //create posts
    [createPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [createPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentCreatePosts = action.payload;
      state.error = false;
    },
    [createPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //edit posts
    [editPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [editPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentEditPosts = action.payload;
      state.error = false;
    },
    [editPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //delete posts
    [deletePosts.pending]: (state, action) => {
      state.loading = true;
    },
    [deletePosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentDeletePosts = action.payload;
      state.error = false;
    },
    [deletePosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    //get newsfeed
    [getNewsfeed.pending]: (state, action) => {
      state.loading = true;
    },
    [getNewsfeed.fulfilled]: (state, action) => {
      state.loading = false;
      state.newsfeed = action.payload;
      state.error = false;
    },
    [getNewsfeed.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //getAllPostsByUser
    [getAllPostsByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllPostsByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.allPostsByUser = action.payload;
      state.error = false;
    },
    [getAllPostsByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { deleteStateUserPosts } = postsSlice.actions;

export default postsSlice.reducer;
