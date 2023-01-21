/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const userStore = createSlice({
  name: "user",
  initialState: {
    user: {
      email: null,
      id: null,
      userName: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = {
        userName: action.payload.user_name,
        email: action.payload.email,
        id: action.payload.id,
      };
    },
    removeUser: (state) => {
      state.user = {
        userName: null,
        email: null,
        id: null,
      };
    },
  },
});

export const { setUser, removeUser } = userStore.actions;
export const userInfo = (state) => state.user.user;
export default userStore.reducer;
