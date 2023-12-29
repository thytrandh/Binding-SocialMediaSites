import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  checkIsFriend: null,
  addFriend: null,
  allUser: null,
  loading: false,
  error: false,
};

export const getIsFriend = createAsyncThunk(
  "friend/isFriend",
  async (data, thunkAPI) => {
    const { friendId } = data;
    const formData = new FormData();
    formData.append("friendId", friendId);
    try {
      const result = await api.get("/api/v1/alluser", formData);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const addFriend = createAsyncThunk(
  "friend/addFriend",
  async (data, thunkAPI) => {
    const { friendId } = data;
    const formData = new FormData();
    formData.append("friendId", friendId);
    try {
      const result = await api.post("/api/v1/add-friend", formData);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {},
  extraReducers: {
    //get is friend
    [getIsFriend.pending]: (state, action) => {
      state.loading = true;
    },
    [getIsFriend.fulfilled]: (state, action) => {
      state.loading = false;
      state.checkIsFriend = action.payload;
      state.error = false;
    },
    [getIsFriend.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //add friend
    [addFriend.pending]: (state, action) => {
      state.loading = true;
    },
    [addFriend.fulfilled]: (state, action) => {
      state.loading = false;
      state.addFriend= action.payload;
      state.error = false;
    },
    [addFriend.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default friendSlice.reducer;
