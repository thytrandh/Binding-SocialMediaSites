import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  currentUser: null,
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

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: {
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
  },
});

export default userSlice.reducer;
