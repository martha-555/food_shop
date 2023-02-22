/** @format */
import Text from "../Text";
import { useAppDispatch } from "../../../hooks/hooks";
import { useSelector } from "react-redux";
import {
  filterByIngredients,
  selectGoodsPizzaIngredients,
  selectGoodsBurgerIngredients,
} from "../../../store/GoodsStore";
import { PizzaIngredients } from "../../../store/GoodsStore";
import { BurgerIngredients } from "../../../store/GoodsStore";
import React from "react";
import { goods } from "../../../goods";

const FilterIngredients = (
  section: PizzaIngredients[],
  good: PizzaIngredients[]
) => {
  const pizzaIngredients = useSelector(selectGoodsPizzaIngredients);
  const burgerIngredients = useSelector(selectGoodsBurgerIngredients);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    if (target.checked) {
      dispatch(
        filterByIngredients({
          pizzaIng: [...pizzaIngredients, target.value as PizzaIngredients],
          burgerIng: [...burgerIngredients],
        })
      );
    } else {
      const newIngredients = pizzaIngredients.filter((e) => e !== target.value);
      dispatch(
        filterByIngredients({
          pizzaIng: newIngredients,
          burgerIng: [...burgerIngredients],
        })
      );
    }
  };

  const getItems = () => {
    const result = [];

    for (const value of Object.values(section)) {
      result.push(
        <div key={value}>
          <input
            onChange={handleChange}
            type="checkbox"
            checked={good.includes(value)}
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
