/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { goods } from "../goods";
import type { RootState } from "./index";

export enum SortType {
  ByPrice,
  ByWeight,
}

export enum SortDirection {
  ASC,
  DESC,
}

export enum Ingredients {
  маслини,
  шинка,
  сир,
  курка,
  гриби,
  помідори,
}

const initialState = {
  goods: goods,
  sortType: SortType.ByPrice,
  sortDirection: SortDirection.ASC,
  ingredients: Ingredients,
};

type SetSortTypePayload = {
  payload: { type: SortType };
};
type SetSortDirectionPayload = {
  payload: { direction: SortDirection };
};
type SetIngredients = {
  payload: { ingredients: Ingredients };
};

export const GoodsStore = createSlice({
  name: "goods",
  initialState,
  reducers: {
    setSortType: (state, payload: SetSortTypePayload) => {
      return { ...state, sortType: payload.payload.type };
    },
    setSortDirection: (state, payload: SetSortDirectionPayload) => {
      return { ...state, sortDirection: payload.payload.direction };
    },
    filterByIngredients: (state, payload: SetIngredients) => {
      return { ...state, ingredients: payload.payload.ingredients };
    },
  },
});

export const { setSortType, setSortDirection, filterByIngredients } =
  GoodsStore.actions;
export const goodsName = (state: RootState) => state.goods.goods;
export const selectGoodsSortType = (state: RootState) => state.goods.sortType;
export const selectGoodsSortDirection = (state: RootState) =>
  state.goods.sortDirection;
export const selectGoodsSortIngredients = (state: RootState) =>
  state.goods.ingredients;

export default GoodsStore.reducer;
