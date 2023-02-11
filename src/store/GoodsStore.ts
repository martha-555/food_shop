/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { goods } from "../goods";
import type { RootState } from "./index";
import { PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";

export enum SortType {
  ByPrice,
  ByWeight,
}

export enum SortDirection {
  ASC,
  DESC,
}

const initialState = {
  goods: goods,
  sortType: SortType.ByPrice,
  sortDirection: SortDirection.ASC,
};

type SetSortTypePayload = {
  payload: { type: SortType };
};

export const GoodsStore = createSlice({
  name: "goods",
  initialState,
  reducers: {
    setSortType: (state, payload: SetSortTypePayload) => {
      return { ...state, sortType: payload.payload.type };
    },
    smallerPrice: (state, unit) => {
      state.goods[unit.payload].sort(function (a, b) {
        return a.price - b.price;
      });
    },
    largerPrice: (state, unit) => {
      state.goods[unit.payload].sort(function (a, b) {
        return b.price - a.price;
      });
    },
    smallerWeight: (state, unit) => {
      state.goods[unit.payload].sort(function (a, b) {
        return a.weight - b.weight;
      });
    },
    largerWeight: (state, unit) => {
      state.goods[unit.payload].sort(function (a, b) {
        return b.weight - a.weight;
      });
    },
    filterByComponents: (state, ingredients) => {
      state.goods.pizza.map((item) => {
        let a = item.components.match(/курка гриби/);
        console.log(a);
      });
    },
  },
});

export const {
  smallerPrice,
  largerPrice,
  smallerWeight,
  largerWeight,
  filterByComponents,
  setSortType,
} = GoodsStore.actions;
export const goodsName = (state: RootState) => state.goods.goods;
export default GoodsStore.reducer;
