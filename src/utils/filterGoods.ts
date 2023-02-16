/** @format */

import { Ingredients } from "../store/GoodsStore";
import { Goods } from "../types/common";

type Params = {
  items: Goods[];
  ingredients: Ingredients[];
};

const filterGoods = ({ items, ingredients }: Params) => {
  const filtered = items.filter((item) => {
    return ingredients.every((value) => item.components.includes(value));
  });
  console.log({ filtered });
};

export default filterGoods;
