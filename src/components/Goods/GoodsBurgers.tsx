/** @format */

import {
  goodsName,
  selectGoodsSortDirection,
  selectGoodsSortType,
  SortDirection,
  SortType,
} from "../../store/GoodsStore";
import { useSelector } from "react-redux";
import classes from "./styles.module.scss";
import GoodsCard from "../ui/GoodsCard/GoodsCard";
import SortGoods from "../ui/GoodsCard/SortGoods";
import { useMemo } from "react";
import sortGoods from "../../utils/sortGoods";
import { GoodsSections } from "../../types/common";

export default function GoodsBurgers() {
  const goods = useSelector(goodsName);
  const sortType = useSelector(selectGoodsSortType);
  const sortDirection = useSelector(selectGoodsSortDirection);

  const sortedGoods = sortGoods({
    items: goods[GoodsSections.Burgers],
    type: sortType,
    direction: sortDirection,
  });
  console.log(sortedGoods);
  return (
    <div>
      <SortGoods />

      <div className={classes.container}>
        {sortedGoods.map((item) => (
          <GoodsCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
