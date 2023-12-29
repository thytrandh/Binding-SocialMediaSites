import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { message } from "antd";

const initialState = {
  currentChangePassword: null,
  loading: false,
  error: false,
};

export const changePassword = createAsyncThunk(
  "accountSettings/changePassword",
  async (data, thunkAPI) => {
    const { email, phone, oldPassword, newPassword } = data;
    try {
      let result;
      if (email === undefined) {
        result = await api.put("/api/v1/changePassword", {
          phone,
          oldPassword,
          newPassword,
        });
      } else {
        result = await api.put("/api/v1/changePassword", {
          email,
          oldPassword,
          newPassword,
        });
      }

      if (result.data?.status === true) {
        message.success(result.data?.message);
      } else {
        message.error(result.data?.message);
      }
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const updateAccountSlice = createSlice({
  name: "accountSettings",
  initialState,
  reducers: {},
  extraReducers: {
    //update personal information
    [changePassword.pending]: (state, action) => {
      state.loading = true;
    },
    [changePassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentChangePassword = action.payload;
      state.error = false;
    },
    [changePassword.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default updateAccountSlice.reducer;
