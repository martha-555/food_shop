/** @format */
import type { RootState } from "./index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: { [key: string | number]: number };
}

const initialState: CounterState = {
  value: {},
};

export const basketStore = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add(state, elem: PayloadAction<string>) {
      let elemId = elem.payload;
      state.value[elemId] ??= state.value[elemId] = 0;
      state.value[elemId]++;
    },
    minus(state, elem: PayloadAction<string>) {
      let elemId = elem.payload;
      if (state.value[elemId] > 1) state.value[elemId]--;
    },
    delete_good(state, elem: PayloadAction<string>) {
      let elemId = elem.payload;
      delete state.value[elemId];
    },
  },
});

export const { add, minus, delete_good } = basketStore.actions;
export const basketChange = (state: RootState) => state.basket.value;

export default basketStore.reducer;
