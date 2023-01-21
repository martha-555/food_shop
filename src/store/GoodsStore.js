/** @format */

import { createSlice } from "@reduxjs/toolkit";
import goodsArr from "../goods.json";

export const GoodsStore = createSlice({
  name: "goods",
  initialState: {
    goods: goodsArr,
  },
});
export const goodsName = (state) => state.goods.goods;
export default GoodsStore.reducer;
