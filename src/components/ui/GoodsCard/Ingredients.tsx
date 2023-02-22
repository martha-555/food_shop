/** @format */
import Text from "../Text";
import { useAppDispatch } from "../../../hooks/hooks";
import { useSelector } from "react-redux";
import {
  filterByIngredients,
  selectGoodsPizzaIngredients,
  selectGoodsBurgerIngredients,
  PizzaIngredientsFilter,
  BurgerIngredientsFilter,
} from "../../../store/GoodsStore";
import { PizzaIngredients } from "../../../store/GoodsStore";
import { BurgerIngredients } from "../../../store/GoodsStore";
import React from "react";
import { goods } from "../../../goods";

type Props = {
  allFilterValues: any[];
  filter: PizzaIngredientsFilter | BurgerIngredientsFilter;
}

const FilterIngredients = ( {allFilterValues, filter}: Props) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    if (target.checked) {
      //@ts-ignore
      dispatch(filterByIngredients({...filter, value: [...filter.value, e.target.value]}));
    } else {
      const newIngredients = [...filter.value].filter((e) => e !== target.value);
      //@ts-ignore
      dispatch(filterByIngredients({...filter, value: newIngredients}));
    }
  };

  const getItems = () => {
    const result = [];

    for (const value of allFilterValues) {
      result.push(
        <div key={value}>
          <input
            onChange={handleChange}
            type="checkbox"
            checked={[...filter.value].includes(value)}
            value={value}
            className="check"
          />
          <label>
            <Text>{value}</Text>
          </label>
        </div>
      );
    }

    return result;
  };

  return <div>{getItems()}</div>;
};
export default FilterIngredients;
