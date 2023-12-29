import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import api from "../../api/api";
import { clearAuthHeader, setAuthHeader } from "../../api/setHeader";
import { getUser } from "../User/userSlice";

const initialState = {
  currentLogin: null,
  loading: false,
  error: false,
};

export const login = createAsyncThunk("loginAuth", async (data, thunkAPI) => {
  try {
    const { email, phone, password } = data;
    let result;

    if (email === undefined) {
      result = await api.post("/api/v1/auth/authenticate", {
        phone,
        password,
      });
    } else {
      result = await api.post("/api/v1/auth/authenticate", {
        email,
        password,
      });
    }

    if (result.data === "Email is not Exists") {
      message.error("LOGIN FAIL! Email is not Exists.");
    } else {
      setAuthHeader(result.data.token);
      thunkAPI.dispatch(getUser());
    }
    return result.data;
  } catch (error) {
    message.error(
      "LOGIN FAIL! Please recheck email adress and password and try again."
    );
    const errMessage = error.response.data.message;
    return thunkAPI.rejectWithValue(errMessage);
  }
});

const loginSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {
    logOut: (state, action) => {
      state.currentLogin = null;
      clearAuthHeader();
    },
  },
  extraReducers: {
    //Login
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentLogin = action.payload;
      state.error = false;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { logOut } = loginSlice.actions;

export default loginSlice.reducer;
