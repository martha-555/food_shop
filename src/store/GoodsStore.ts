/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { goods } from "../goods";
import { GoodsList, GoodsSections } from "../types/common";
import type { RootState } from "./index";

export enum SortType {
  ByPrice,
  ByWeight,
}

export enum SortDirection {
  ASC,
  DESC,
}

export enum PizzaIngredients {
  olives = "маслини",
  ham = "шинка",
  cheese = "сир",
  chicken = "курка",
  mushrooms = "гриби",
  tomatoes = "помідори",
}

export enum BurgerIngredients {
  chicken_cotlet = "куряча котлета",
  shrimp = "креветки",
}

type InitialStateType = {
  goods: GoodsList;
  sortType: SortType;
  sortDirection: SortDirection;
  pizzaIngredients: PizzaIngredients[];
  burgerIngredients: BurgerIngredients[];
};

const initialState: InitialStateType = {
  goods: goods,
  sortType: SortType.ByPrice,
  sortDirection: SortDirection.ASC,
  pizzaIngredients: [],
  burgerIngredients: [],
};

type SetSortTypePayload = {
  payload: { type: SortType };
};
type SetSortDirectionPayload = {
  payload: { direction: SortDirection };
};
type SetIngredients = {
  payload: {
    pizzaIng: PizzaIngredients[];
    burgerIng: BurgerIngredients[];
  };
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
      console.log({ payload });
      return {
        ...state,
        pizzaIngredients: payload.payload.pizzaIng,
        burgerIngredients: payload.payload.burgerIng,
      };
    },
  },
});

export const { setSortType, setSortDirection, filterByIngredients } =
  GoodsStore.actions;
export const goodsName = (state: RootState) => state.goods.goods;
export const selectGoodsSortType = (state: RootState) => state.goods.sortType;
export const selectGoodsSortDirection = (state: RootState) =>
  state.goods.sortDirection;
export const selectGoodsPizzaIngredients = (state: RootState) =>
  state.goods.pizzaIngredients;
export const selectGoodsBurgerIngredients = (state: RootState) =>
  state.goods.burgerIngredients;
export default GoodsStore.reducer;
