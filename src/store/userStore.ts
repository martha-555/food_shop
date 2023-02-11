/** @format */
import type { RootState } from "./index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  user: {
    email: string | null;
    id: string;
    userName: string | null;
  };
}
type ActionType = {
  email: string | null;
  id: string;
  userName: string | null;
};

const initialState: CounterState = {
  user: {
    userName: "",
    email: "",
    id: "",
  },
};

export const userStore = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<ActionType>) {
      state.user = {
        userName: action.payload.userName,
        email: action.payload.email,
        id: action.payload.id,
      };
    },
    removeUser: (state) => {
      state.user = {
        userName: "",
        email: "",
        id: "",
      };
    },
  },
});

export const { setUser, removeUser } = userStore.actions;
export const userInfo = (state: RootState) => state.user.user;
export default userStore.reducer;
