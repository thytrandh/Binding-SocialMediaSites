import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  currentMessage: null,
  conversation: null,
  loading: false,
  error: false,
};

export const sendMessages = createAsyncThunk(
  "messages/sendMessages",
  async (data, thunkAPI) => {
    const { message, image, receiverId } = data;
    // const receiver = {
    //   id: idReceiver,
    // };
    // const receiver = new Object();
    // receiver.id = idReceiver;
    const formData = new FormData();
    if (message !== null && message !== undefined) {
      formData.append("message", message);
    }

    if (image !== null && image !== undefined) {
      formData.append("image", image);
    }
    formData.append("receiverId", receiverId);

    try {
      const result = await api.post("/api/v1/send-message", formData);
      const userId = receiverId;
      thunkAPI.dispatch(
        getConversation({
          userId,
        })
      );
      message.success("Message sent successfully!");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getConversation = createAsyncThunk(
  "messages/getConversation",
  async (data, thunkAPI) => {
    const { userId } = data;
    try {
      const result = await api.get(`/api/v1/find-conversation/${userId}`);
      //   localStorage.setItem("conversation", JSON.stringify(result.data.data));
      //   console.log(result.data);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: {
    //Send Message
    [sendMessages.pending]: (state, action) => {
      state.loading = true;
    },
    [sendMessages.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentMessage = action.payload;
      state.error = false;
    },
    [sendMessages.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Get conversation
    [getConversation.pending]: (state, action) => {
      state.loading = true;
    },
    [getConversation.fulfilled]: (state, action) => {
      state.loading = false;
      state.conversation = action.payload;
      state.error = false;
    },
    [getConversation.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default messagesSlice.reducer;
