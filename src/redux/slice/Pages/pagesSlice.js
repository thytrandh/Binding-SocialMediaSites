import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { message } from "antd";
import { getUser } from "../User/userSlice";

const initialState = {
  currentPages: null,
  getPage: null,
  createPages: null,
  updatePages: null,
  allPages: null,
  memberPage: null,
  isLikePage: null,
  likePage: null,
  unlikePage: null,
  loading: false,
  error: false,
};

export const getCurrentPages = createAsyncThunk(
  "pages/getCurrentPages",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/cur-page");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getPageById = createAsyncThunk(
  "pages/getPageById",
  async (data, thunkAPI) => {
    const { pageId } = data;
    try {
      const result = await api.get(`/api/v1/get-by-id/${pageId}`);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getAllPages = createAsyncThunk(
  "pages/getAllPages",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/all-page");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const createPages = createAsyncThunk(
  "pages/create",
  async (data, thunkAPI) => {
    const { pageName, introduce, avatar, background, category, contact } = data;
    const formData = new FormData();
    formData.append("pageName", pageName);
    formData.append("introduce", introduce);
    formData.append("avatar", avatar);
    formData.append("background", background);
    formData.append("category", category);
    formData.append("contact", contact);
    try {
      const result = await api.post("/api/v1/page", formData);
      thunkAPI.dispatch(getUser());
      thunkAPI.dispatch(getAllPages());
      thunkAPI.dispatch(getCurrentPages());
      message.success("Pages created successfully.");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const updatePages = createAsyncThunk(
  "pages/update",
  async (data, thunkAPI) => {
    const { pageName, introduce, avatar, background, category, contact } = data;
    const formData = new FormData();
    formData.append("pageName", pageName);
    formData.append("introduce", introduce);
    formData.append("avatar", avatar);
    formData.append("background", background);
    formData.append("category", category);
    formData.append("contact", contact);
    try {
      const result = await api.put("/api/v1/update-page", formData);
      thunkAPI.dispatch(getUser());
      thunkAPI.dispatch(getCurrentPages());
      thunkAPI.dispatch(getAllPages());
      message.success("Pages updated successfully.");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

//Check Like page
export const getIsLikePage = createAsyncThunk(
  "pages/isLikePage",
  async (data, thunkAPI) => {
    const { pageId } = data;
    // const formData = new FormData();
    // formData.append("pageId", pageId);
    try {
      const result = await api.get(`/api/v1/is-followed/${pageId}`);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

//Like page
export const likePage = createAsyncThunk(
  "pages/likePage",
  async (data, thunkAPI) => {
    const { pageId } = data;
    try {
      const result = await api.put(`/api/v1/follow-page/${pageId}`);
      thunkAPI.dispatch(getIsLikePage({ pageId }));
      thunkAPI.dispatch(getPageById({ pageId }));
      thunkAPI.dispatch(getMemberPage({ pageId }));
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

//get members page
export const getMemberPage = createAsyncThunk(
  "pages/getMemberPage",
  async (data, thunkAPI) => {
    const { pageId } = data;
    try {
      const result = await api.get(`/api/v1/follower/${pageId}`);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    deleteStatePages: (state, action) => {
      state.createPages = null;
    },
  },
  extraReducers: {
    //get current pages
    [getCurrentPages.pending]: (state, action) => {
      state.loading = true;
    },
    [getCurrentPages.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentPages = action.payload;
      state.error = false;
    },
    [getCurrentPages.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //get page by id
    [getPageById.pending]: (state, action) => {
      state.loading = true;
    },
    [getPageById.fulfilled]: (state, action) => {
      state.loading = false;
      state.getPage = action.payload;
      state.error = false;
    },
    [getPageById.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    //get is like page
    [getIsLikePage.pending]: (state, action) => {
      state.loading = true;
    },
    [getIsLikePage.fulfilled]: (state, action) => {
      state.loading = false;
      state.isLikePage = action.payload;
      state.error = false;
    },
    [getIsLikePage.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    //get all pages
    [getAllPages.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllPages.fulfilled]: (state, action) => {
      state.loading = false;
      state.allPages = action.payload;
      state.error = false;
    },
    [getAllPages.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //create pages
    [createPages.pending]: (state, action) => {
      state.loading = true;
    },
    [createPages.fulfilled]: (state, action) => {
      state.loading = false;
      state.createPages = action.payload;
      state.error = false;
    },
    [createPages.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //update pages
    [updatePages.pending]: (state, action) => {
      state.loading = true;
    },
    [updatePages.fulfilled]: (state, action) => {
      state.loading = false;
      state.updatePages = action.payload;
      state.error = false;
    },
    [updatePages.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //get member page
    [getMemberPage.pending]: (state, action) => {
      state.loading = true;
    },
    [getMemberPage.fulfilled]: (state, action) => {
      state.loading = false;
      state.memberPage = action.payload;
      state.error = false;
    },
    [getMemberPage.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const { deleteStatePages } = pagesSlice.actions;
export default pagesSlice.reducer;
