import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { message } from "antd";

const initialState = {
  currentResetPassword: null,
  loading: false,
  error: false,
};

export const sentEmail = createAsyncThunk(
  "resetPasswordAuth/sentEmail",
  async (data, thunkAPI) => {
    try {
      const { email } = data;

      const result = await api.post("/api/v1/auth/resetPasswordRequest", {
        email,
      });
      if (result.data?.status === true) {
        message.success("Sent email reset verify code!");
      } else {
        message.error("Not found email!");
      }
      return result.data;
    } catch (error) {
      message.error("Not found email!");
      const errMessage = error.result.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);

const resetPasswordSlice = createSlice({
  name: "resetPasswordAuth",
  initialState,
  reducers: {},
  extraReducers: {
    [sentEmail.pending]: (state, action) => {
      state.loading = true;
    },
    [sentEmail.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentResetPassword = action.payload;
      state.error = false;
    },
    [sentEmail.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default resetPasswordSlice.reducer;
