/** @format */

import { SortDirection, SortType } from "../store/GoodsStore";
import { Goods, GoodsList } from "../types/common";

type Params = {
  items: Goods[];
  type: SortType;
  direction: SortDirection;
};

const sortGoods = ({ items, type, direction }: Params) => {
  const key: keyof Goods = type === SortType.ByPrice ? "price" : "weight";

  if (direction === SortDirection.ASC) {
    return [...items].sort((a, b) => +a[key] - b[key]);
  }

  return [...items].sort((a, b) => +b[key] - a[key]);
};

export default sortGoods;
