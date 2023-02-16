/** @format */
import { goodsName, SortType } from "../../store/GoodsStore";
import { useSelector } from "react-redux";
import GoodsCard from "../ui/GoodsCard/GoodsCard";
import classes from "./styles.module.scss";
import SortGoods from "../ui/GoodsCard/SortGoods";
import FilterIngredients from "../ui/GoodsCard/Ingredients";
import { GoodsSections } from "../../types/common";
import sortGoods from "../../utils/sortGoods";
import {
  selectGoodsSortDirection,
  selectGoodsSortType,
  selectGoodsFilterIngredients,
} from "../../store/GoodsStore";
import filterGoods from "../../utils/filterGoods";

export default function GoodsPizza() {
  const goodsList = useSelector(goodsName);
  const sortType = useSelector(selectGoodsSortType);
  const sortDirection = useSelector(selectGoodsSortDirection);
  const ingredients = useSelector(selectGoodsFilterIngredients);

  const filteredGoods = filterGoods({
    items: goodsList[GoodsSections.Pizza],
    ingredients: ingredients,
  });

  const sortedGoods = sortGoods({
    items: goodsList[GoodsSections.Pizza],
    type: sortType,
    direction: sortDirection,
  });

  return (
    <div>
      <SortGoods />
      <FilterIngredients />

      <div className={classes.container}>
        {sortedGoods.map((item) => (
          <GoodsCard item={filteredGoods} key={item.id} />
        ))}
      </div>
    </div>
  );
}
