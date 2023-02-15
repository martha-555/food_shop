/** @format */

import { goodsName } from "../../store/GoodsStore";
import { useSelector } from "react-redux";
import GoodsCard from "../ui/GoodsCard/GoodsCard";
import classes from "./styles.module.scss";
import SortGoods from "../ui/GoodsCard/SortGoods";
import { GoodsSections } from "../../types/common";
import {
  selectGoodsSortDirection,
  selectGoodsSortType,
} from "../../store/GoodsStore";
import sortGoods from "../../utils/sortGoods";

export default function GoodsSushi() {
  const goodsList = useSelector(goodsName);
  const sortType = useSelector(selectGoodsSortType);
  const sortDirection = useSelector(selectGoodsSortDirection);

  const sortedGoods = sortGoods({
    items: goodsList[GoodsSections.Sushi],
    type: sortType,
    direction: sortDirection,
  });
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
