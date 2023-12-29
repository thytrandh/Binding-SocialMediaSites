import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { message } from "antd";

const initialState = {
  currentResetPasswordRq: null,
  currentResetPassword: null,
  loading: false,
  error: false,
};

export const resetPasswordRequest = createAsyncThunk(
  "resetPasswordAuth/request",
  async (data, thunkAPI) => {
    try {
      const { email, phone } = data;
      let result;

      if (email === undefined) {
        result = await api.post("/api/v1/auth/resetPasswordRequest", {
          phone,
        });
      } else {
        result = await api.post("/api/v1/auth/resetPasswordRequest", {
          email,
        });
      }

      if (result.data?.status === true) {
        message.success(
          "Successfully sent verification code. Please check your email or mobile"
        );
      } else {
        message.error("Address not found!");
      }
      return result.data;
    } catch (error) {
      message.error("Address not found!");
      const errMessage = error.result.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "resetPasswordAuth/reset",
  async (data, thunkAPI) => {
    try {
      const { verifyCode, email, phone, newPassword } = data;
      let result;

      console.log(verifyCode, email, newPassword);

      if (email === undefined) {
        result = await api.post("/api/v1/auth/resetPassword", {
          verifyCode,
          newPassword,
          phone,
        });
      } else {
        result = await api.post("/api/v1/auth/resetPassword", {
          verifyCode,
          newPassword,
          email,
        });
      }

      if (result?.data) {
        message.success("Awesome, you've successfully updated your password.");
      } else {
        message.error("Wrong code. Please check your email or mobile again.");
      }
      return result.data;
    } catch (error) {
      message.error("Wrong code. Please check your email or mobile again.");
      const errMessage = error.result.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);

const resetPasswordSlice = createSlice({
  name: "resetPasswordAuth",
  initialState,
  reducers: {
    deleteStateResetPasswordRq: (state, action) => {
      state.currentResetPasswordRq = null;
    },
    deleteStateResetPassword: (state, action) => {
      state.currentResetPassword = null;
    },
  },
  extraReducers: {
    //Requests
    [resetPasswordRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [resetPasswordRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentResetPasswordRq = action.payload;
      state.error = false;
    },
    [resetPasswordRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Reset
    [resetPassword.pending]: (state, action) => {
      state.loading = true;
    },
    [resetPassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentResetPassword = action.payload;
      state.error = false;
    },
    [resetPassword.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  deleteStateResetPasswordRq,
  deleteStateResetPassword,
} = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
