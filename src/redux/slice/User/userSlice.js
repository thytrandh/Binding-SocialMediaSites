import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  currentUser: null,
  currentMember: null,
  allUser: null,
  loading: false,
  error: false,
};

export const getUser = createAsyncThunk(
  "userInfo/getUser",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/user");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getUserById = createAsyncThunk(
  "userInfo/getUserById",
  async (data, thunkAPI) => {
    const { userId } = data;
    try {
      const result = await api.get(`/api/v1/user/${userId}`);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getAllUser = createAsyncThunk(
  "userInfo/getAllUser",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/alluser");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: {
    //get current user
    [getUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //get user by id
    [getUserById.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentMember = action.payload;
      state.error = false;
    },
    [getUserById.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //get all user
    [getAllUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.allUser = action.payload;
      state.error = false;
    },
    [getAllUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
