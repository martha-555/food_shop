/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const basketStore = createSlice({
  name: "basket",
  initialState: {
    value: {},
  },
  reducers: {
    add: (state, elem) => {
      let elemId = elem.payload;
      state.value[elemId] ??= state.value[elemId] = 0;
      state.value[elemId]++;
    },
    minus: (state, elem) => {
      let elemId = elem.payload;
      if (state.value[elemId] > 1) state.value[elemId]--;
    },
    delete_good: (state, elem) => {
      let elemId = elem.payload;
      delete state.value[elemId];
    },
  },
});
export const { add, minus, delete_good } = basketStore.actions;
export const basketChange = (state) => state.basket.value;

export default basketStore.reducer;
