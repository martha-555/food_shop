/** @format */

import { SortDirection, SortType } from "../store/GoodsStore";
import { GoodsLst } from "../types/common";

type Params = {
  items: GoodsLst[];
  type: SortType;
  direction: SortDirection;
};

const sortGoods = ({ items, type, direction }: Params) => {
  const key: keyof GoodsLst = type === SortType.ByPrice ? "price" : "weight";

  if (direction === SortDirection.ASC) {
    return [...items].sort((a, b) => (a[key] - b[key] > 0 ? 1 : -1));
  }

  return [...items].sort((a, b) => (a[key] - b[key] > 0 ? -1 : 1));
};

export default sortGoods;
