/** @format */
import Text from "../Text";
import { useAppDispatch } from "../../../hooks/hooks";
import { useSelector } from "react-redux";
import {
  filterByIngredients,
  selectGoodsFilterIngredients,
} from "../../../store/GoodsStore";
import { Ingredients } from "../../../store/GoodsStore";
import React from "react";

const FilterIngredients = () => {
  const ingredients = useSelector(selectGoodsFilterIngredients);
  const dispatch = useAppDispatch();

  const clickHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    const clickedIngredient = target.value as Ingredients;

    const newIngredients = ingredients.filter(
      (item) => item !== clickedIngredient || target.checked
    );

    if (target.checked && !newIngredients.includes(clickedIngredient)) {
      newIngredients.push(clickedIngredient);
    }

    dispatch(filterByIngredients({ ingredients: newIngredients }));
  };

  window.onload = function () {
    const input = document.getElementsByTagName("input");
    Array.from(input).forEach((item) => {
      item.onchange = () =>
        sessionStorage.setItem(item.id, item.checked.toString());
      item.checked = sessionStorage.getItem(item.id) === "true";
    });
  };

  return (
    <div onClick={clickHandler}>
      <input
        type="checkbox"
        value={Ingredients.mushrooms}
        className="check"
        id="1"
      />
      <label htmlFor="">
        <Text>гриби</Text>{" "}
      </label>
      <input
        type="checkbox"
        value={Ingredients.olives}
        className="check"
        id="2"
      />
      <label htmlFor="">
        <Text>маслини</Text>{" "}
      </label>
    </div>
  );
};
export default FilterIngredients;
