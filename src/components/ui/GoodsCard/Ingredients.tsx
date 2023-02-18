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

type Section<Filter> = {
  filters: Filter;
};

const FilterIngredients = () => {
  const ingredients = useSelector(selectGoodsFilterIngredients);
  const dispatch = useAppDispatch();
  // const [ingredients, setIngrediens] = useState<Ingredients[]>([]);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    if (target.checked) {
      dispatch(
        filterByIngredients({
          ingredients: [...ingredients, target.value as Ingredients],
        })
      );
    } else {
      const newIngredients = ingredients.filter((e) => e !== target.value);
      dispatch(
        filterByIngredients({
          ingredients: newIngredients,
        })
      );
    }
  };

  const getItems = () => {
    const result = [];

    for (const value of Object.values(Ingredients)) {
      result.push(
        <div key={value}>
          <input
            onChange={handleChange}
            type="checkbox"
            checked={ingredients.includes(value)}
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
