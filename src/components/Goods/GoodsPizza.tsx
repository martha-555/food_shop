/** @format */
import { goodsName, PizzaIngredients, selectGoodsPizzaIngredients, SortType } from "../../store/GoodsStore";
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
} from "../../store/GoodsStore";
import filterGoods from "../../utils/filterGoods";

export default function GoodsPizza() {
  const goodsList = useSelector(goodsName);
  const sortType = useSelector(selectGoodsSortType);
  const sortDirection = useSelector(selectGoodsSortDirection);
  const ingredients = useSelector(selectGoodsPizzaIngredients);

  const filteredGoods = filterGoods({
    items: goodsList[GoodsSections.Pizza],
    ingredients: ingredients,
  });

  const sortedGoods = sortGoods({
    items: filteredGoods,
    type: sortType,
    direction: sortDirection,
  });
  // console.log({ filteredGoods });
  // console.log({ ingredients });
  return (
    <div>
      <SortGoods />
      <FilterIngredients allFilterValues={Object.values(PizzaIngredients)} filter={{key: 'pizzaIngredients', value: ingredients}} />

      <div className={classes.container}>
        {sortedGoods.map((item) => (
          <GoodsCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
