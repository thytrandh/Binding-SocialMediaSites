import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import api from "../../api/api";
import { getUser } from "./userSlice";

const initialState = {
  currentUpdatePersonal: null,
  currentChangeAvatar: null,
  currentChangeBackground: null,
  loading: false,
  error: false,
};

export const updatePersonal = createAsyncThunk(
  "userSettings/updatePersonal",
  async (data, thunkAPI) => {
    const { firstName, lastName, address, gender, birthday } = data;
    try {
      const result = await api.put("/api/v1/user", {
        firstName,
        lastName,
        address,
        gender,
        birthday,
      });
      thunkAPI.dispatch(getUser());
      message.success("Successful information update.");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const changeAvatar = createAsyncThunk(
  "userSettings/changeAvatar",
  async (data, thunkAPI) => {
    const { picture } = data;
    console.log("picture", picture);
    const formData = new FormData();
    formData.append("image", picture);
    try {
      const result = await api.put("/api/v1/user/avatar", formData);
      thunkAPI.dispatch(getUser());
      message.success("Successful avatar update.");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const changeBackground = createAsyncThunk(
  "userSettings/changeBackground",
  async (data, thunkAPI) => {
    const { picture } = data;
    const formData = new FormData();
    formData.append("image", picture);
    try {
      const result = await api.put("/api/v1/user/background", formData);
      thunkAPI.dispatch(getUser());
      message.success("Successful background cover update.");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const updateUserSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {},
  extraReducers: {
    //update personal information
    [updatePersonal.pending]: (state, action) => {
      state.loading = true;
    },
    [updatePersonal.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUpdatePersonal = action.payload;
      state.error = false;
    },
    [updatePersonal.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    //update avatar
    [changeAvatar.pending]: (state, action) => {
      state.loading = true;
    },
    [changeAvatar.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentChangeAvatar = action.payload;
      state.error = false;
    },
    [changeAvatar.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    //update background
    [changeBackground.pending]: (state, action) => {
      state.loading = true;
    },
    [changeBackground.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentChangeBackground = action.payload;
      state.error = false;
    },
    [changeBackground.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default updateUserSlice.reducer;
