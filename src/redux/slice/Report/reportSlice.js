import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { message } from "antd";
import { getAllUser } from "../User/userSlice";
import { getAllPages } from "../Pages/pagesSlice";
const initialState = {
  currentReport: null,
  currentPostsReported: null,
  currentCommentReported: null,
  loading: false,
  error: false,
};

export const createReport = createAsyncThunk(
  "report/create",
  async (data, thunkAPI) => {
    const { contentReport, postId, pageId, commentId } = data;

    try {
      var result;
      if (pageId === undefined && commentId === undefined) {
        result = await api.post("/api/v1/report", {
          contentReport,
          postId,
        });
        thunkAPI.dispatch(getPostsReported());
      } else if (postId === undefined && commentId === undefined) {
        result = await api.post("/api/v1/report", {
          contentReport,
          pageId,
        });
      } else if (postId === undefined && pageId === undefined) {
        result = await api.post("/api/v1/report", {
          contentReport,
          commentId,
        });
        thunkAPI.dispatch(getCommentReported());
      }

      message.success("Successfully reported.");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getCommentReported = createAsyncThunk(
  "report/getCommentReported",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/admin/comment-reported/");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getPostsReported = createAsyncThunk(
  "report/getPostsReported",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/admin/post-reported/");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const disabledUser = createAsyncThunk(
  "report/disabledUser",
  async (data, thunkAPI) => {
    const { userId } = data;
    try {
      const result = await api.put(`/api/v1/admin/disable-user/${userId}`);
      thunkAPI.dispatch(getAllUser());
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const enabledUser = createAsyncThunk(
  "report/disabledUser",
  async (data, thunkAPI) => {
    const { userId } = data;
    try {
      const result = await api.put(`/api/v1/admin/enabled-user/${userId}`);
      thunkAPI.dispatch(getAllUser());
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const disabledPosts = createAsyncThunk(
  "report/disabledPosts",
  async (data, thunkAPI) => {
    const { id } = data;
    try {
      const result = await api.put("/api/v1/admin/disabled-post/", {
        id,
      });
      message.success("Posts successfully disabled.");
      thunkAPI.dispatch(getPostsReported());
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const disabledComment = createAsyncThunk(
  "report/disabledComment",
  async (data, thunkAPI) => {
    const { id } = data;
    try {
      const result = await api.put("/api/v1/admin/disable-comment/", {
        id,
      });
      message.success("Comment successfully disabled.");
      thunkAPI.dispatch(getCommentReported());
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const disabledPage = createAsyncThunk(
  "report/disabledPage",
  async (data, thunkAPI) => {
    const { id } = data;
    try {
      const result = await api.put("/api/v1/admin/disable-page/", {
        id,
      });
      message.success("Pages successfully disabled.");
      thunkAPI.dispatch(getAllPages());
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const deletePage = createAsyncThunk(
  "report/disabledPage",
  async (data, thunkAPI) => {
    const { id } = data;
    try {
      const result = await api.delete(`/api/v1/delete-page/${id}`);
      message.success("Pages successfully deleted.");
      thunkAPI.dispatch(getAllPages());
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {},
  extraReducers: {
    //create comment
    [createReport.pending]: (state, action) => {
      state.loading = true;
    },
    [createReport.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentReport = action.payload;
      state.error = false;
    },
    [createReport.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //get all comments reported
    [getCommentReported.pending]: (state, action) => {
      state.loading = true;
    },
    [getCommentReported.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentCommentReported = action.payload;
      state.error = false;
    },
    [getCommentReported.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //get all posts reported
    [getPostsReported.pending]: (state, action) => {
      state.loading = true;
    },
    [getPostsReported.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentPostsReported = action.payload;
      state.error = false;
    },
    [getPostsReported.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default reportSlice.reducer;
