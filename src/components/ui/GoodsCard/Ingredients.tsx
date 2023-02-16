/** @format */
import Text from "../Text";
// import { filterByComponents } from "../../../store/GoodsStore";
import { useAppDispatch } from "../../../hooks/hooks";
import { goodsName } from "../../../store/GoodsStore";
import { useSelector } from "react-redux";
import { GoodsSections } from "../../../types/common";
import { filterByIngredients } from "../../../store/GoodsStore";
import { Ingredients } from "../../../store/GoodsStore";

const FilterIngredients = () => {
  let goods = useSelector(goodsName);
  const dispatch = useAppDispatch();
  let componentsArr: Set<Ingredients> = new Set();

  const clickHandler = (e: any) => {
    const value = e.target.value;

    if (e.target.localName == "input") {
      componentsArr.add(value);
    }
    if (!e.target.checked) {
      componentsArr.delete(value);
    }

    console.log({ componentsArr });
    const copy = [...componentsArr];
    console.log({ copy });
    // dispatch(filterByIngredients({ ingredients: [...copy] }));
  };

  return (
    <div onClick={clickHandler}>
      <input type="checkbox" value={Ingredients.mushrooms} id="" />
      <label htmlFor="">
        <Text>гриби</Text>{" "}
      </label>
      <input type="checkbox" value={Ingredients.olives} id="" />
      <label htmlFor="">
        <Text>маслини</Text>{" "}
      </label>
    </div>
  );
};
export default FilterIngredients;
