import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { getNewsfeed } from "../Posts/postsSlice";

const initialState = {
  checkIsFriend: null,
  addFriend: null,
  unFriend: null,
  cancelFriendRequest: null,
  listFriend: null,
  userListFriend: null,
  requestFriend: null,
  activeFriend: null,
  loading: false,
  error: false,
};

export const getIsFriend = createAsyncThunk(
  "friend/isFriend",
  async (data, thunkAPI) => {
    const { friendId } = data;
    // const formData = new FormData();
    // formData.append("friendId", friendId);
    // console.log(friendId);
    try {
      const result = await api.get(`/api/v1/is-Friend/${friendId}`);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getListFriend = createAsyncThunk(
  "friend/listFriend",
  async (data, thunkAPI) => {
    const { userId } = data;
    try {
      const result = await api.get(`/api/v1/list-Friend/${userId}`);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getRequestFriendList = createAsyncThunk(
  "friend/requestFriend",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/request-friend");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getUserListFriend = createAsyncThunk(
  "friend/userListFriend",
  async (data, thunkAPI) => {
    const { userid } = data;
    const userId = userid;
    try {
      const result = await api.get(`/api/v1/list-Friend/${userId}`);
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
      thunkAPI.dispatch(getIsFriend({ friendId }));
      const userId = friendId;
      thunkAPI.dispatch(getListFriend({ userId }));
      thunkAPI.dispatch(getRequestFriendList());
      thunkAPI.dispatch(getNewsfeed());
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const unFriend = createAsyncThunk(
  "friend/unFriend",
  async (data, thunkAPI) => {
    const { userCurId, friendId } = data;
    // const formData = new FormData();
    // formData.append("friendId", friendId);
    try {
      console.log("jdj");
      const result = await api.delete(`/api/v1/un-friend/${friendId}`);
      thunkAPI.dispatch(getIsFriend({ friendId }));
      const userId = friendId;
      thunkAPI.dispatch(getListFriend({ userId }));
      if (userCurId !== undefined) {
        const userid = userCurId;
        thunkAPI.dispatch(getUserListFriend({ userid }));
      }
      thunkAPI.dispatch(getNewsfeed());
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const cancelFriendRequest = createAsyncThunk(
  "friend/cancelFriendRequest",
  async (data, thunkAPI) => {
    const { friendId } = data;
    // const formData = new FormData();
    // formData.append("friendId", friendId);
    try {
      const result = await api.get(`/api/v1/cancel-friend-request/${friendId}`);
      thunkAPI.dispatch(getIsFriend({ friendId }));
      const userId = friendId;
      thunkAPI.dispatch(getListFriend({ userId }));
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getListActiveFriend = createAsyncThunk(
  "friend/getListActiveFriend",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/active-friend");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

// export const getSuggestFriend = createAsyncThunk(
//   "friend/getListActiveFriend",
//   async (data, thunkAPI) => {
//     try {
//       const result = await api.get("/api/v1/active-friend");
//       return result.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue("Error when fetching user information");
//     }
//   }
// );

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
    //get list friend
    [getListFriend.pending]: (state, action) => {
      state.loading = true;
    },
    [getListFriend.fulfilled]: (state, action) => {
      state.loading = false;
      state.listFriend = action.payload;
      state.error = false;
    },
    [getListFriend.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //get request friend list
    [getRequestFriendList.pending]: (state, action) => {
      state.loading = true;
    },
    [getRequestFriendList.fulfilled]: (state, action) => {
      state.loading = false;
      state.requestFriend = action.payload;
      state.error = false;
    },
    [getRequestFriendList.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //get user list friend
    [getUserListFriend.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserListFriend.fulfilled]: (state, action) => {
      state.loading = false;
      state.userListFriend = action.payload;
      state.error = false;
    },
    [getUserListFriend.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //add friend
    [addFriend.pending]: (state, action) => {
      state.loading = true;
    },
    [addFriend.fulfilled]: (state, action) => {
      state.loading = false;
      state.addFriend = action.payload;
      state.error = false;
    },
    [addFriend.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //unfriend
    [unFriend.pending]: (state, action) => {
      state.loading = true;
    },
    [unFriend.fulfilled]: (state, action) => {
      state.loading = false;
      state.addFriend = action.payload;
      state.error = false;
    },
    [unFriend.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //cancel Friend Request
    [cancelFriendRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [cancelFriendRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.cancelFriendRequest = action.payload;
      state.error = false;
    },
    [cancelFriendRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //get List Active Friend
    [getListActiveFriend.pending]: (state, action) => {
      state.loading = true;
    },
    [getListActiveFriend.fulfilled]: (state, action) => {
      state.loading = false;
      state.activeFriend = action.payload;
      state.error = false;
    },
    [getListActiveFriend.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default friendSlice.reducer;
