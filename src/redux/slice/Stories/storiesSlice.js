import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { message } from "antd";

const initialState = {
  createStory: null,
  allStory: null,
  loading: false,
  error: false,
};

export const createStory = createAsyncThunk(
  "stories/create",
  async (data, thunkAPI) => {
    const { image, video } = data;
    const formData = new FormData();
    if (video === undefined) {
      formData.append("image", image);
    } else {
      formData.append("video", video);
    }

    try {
      const result = await api.post("/api/v1/story", formData);
      thunkAPI.dispatch(getListStory());

      if (result.data.status) {
        message.success("Story created successfully.");
      } else {
        message.error("Story created unsuccessfully.");
      }
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getListStory = createAsyncThunk(
  "stories/getListStory",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/list-story");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: {
    //create story
    [createStory.pending]: (state, action) => {
      state.loading = true;
    },
    [createStory.fulfilled]: (state, action) => {
      state.loading = false;
      state.createStory = action.payload;
      state.error = false;
    },
    [createStory.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //get all story
    [getListStory.pending]: (state, action) => {
      state.loading = true;
    },
    [getListStory.fulfilled]: (state, action) => {
      state.loading = false;
      state.allStory = action.payload;
      state.error = false;
    },
    [getListStory.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default storiesSlice.reducer;
