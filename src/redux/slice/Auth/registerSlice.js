import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import api from "../../api/api";
import { setAuthHeader } from "../../api/setHeader";

const initialState = {
  currentRegister: null,
  currentVerify: null,
  loading: false,
  error: false,
};

export const registerUser = createAsyncThunk(
  "registerAuth/register",
  async (data, thunkAPI) => {
    try {
      const { firstName, lastName, email, phone, password, enabled } = data;
      //call API
      let result;

      if (email === undefined) {
        result = await api.post("/api/v1/auth/register", {
          firstName,
          lastName,
          phone,
          password,
          enabled,
        });
      } else {
        result = await api.post("/api/v1/auth/register", {
          firstName,
          lastName,
          email,
          password,
          enabled,
        });
      }

      return result.data; //payload
    } catch (error) {
      message.error(
        "REGISTER FAIL! Please recheck email adress and try again."
      );
      const errMessage = error.result.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);

export const verifyRegister = createAsyncThunk(
  "registerAuth/verify",
  async (data, thunkAPI) => {
    const { code, email } = data;
    const formData = new FormData();
    formData.append("code", code);
    formData.append("email", email);
    try {
      //call API
      const result = await api.post(
        "/api/v1/auth/verifyRegistration",
        formData
      );
      setAuthHeader(result.data.token);
      return result.data; //payload
    } catch (error) {
      message.error(
        "VERIFICATION FAILED! Please recheck Verification code and try again."
      );
      const errMessage = error.result.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);

const registerSlice = createSlice({
  name: "registerAuth",
  initialState,
  reducers: {
    deteteStateRegister: (state, action) => {
      state.currentRegister = null;
      state.currentVerify = null;
    },
  },
  extraReducers: {
    //Register
    [registerUser.pending]: (state, action) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentRegister = action.payload;
      state.error = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Verify
    [verifyRegister.pending]: (state, action) => {
      state.loading = true;
    },
    [verifyRegister.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentVerify = action.payload;
      state.error = false;
    },
    [verifyRegister.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { deteteStateRegister } = registerSlice.actions;

export default registerSlice.reducer;
