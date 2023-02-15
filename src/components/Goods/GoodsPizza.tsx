/** @format */
import { goodsName, SortType } from "../../store/GoodsStore";
import { useSelector } from "react-redux";
import GoodsCard from "../ui/GoodsCard/GoodsCard";
import classes from "./styles.module.scss";
import SortGoods from "../ui/GoodsCard/SortGoods";
import Ingredients from "../ui/GoodsCard/Ingredients";
import { GoodsSections } from "../../types/common";
import sortGoods from "../../utils/sortGoods";
import {
  selectGoodsSortDirection,
  selectGoodsSortType,
} from "../../store/GoodsStore";

export default function GoodsPizza() {
  const goodsList = useSelector(goodsName);
  const sortType = useSelector(selectGoodsSortType);
  const sortDirection = useSelector(selectGoodsSortDirection);

  const sortedGoods = sortGoods({
    items: goodsList[GoodsSections.Pizza],
    type: sortType,
    direction: sortDirection,
  });

  return (
    <div>
      <SortGoods />
      <Ingredients />

      <div className={classes.container}>
        {sortedGoods.map((item) => (
          <GoodsCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
