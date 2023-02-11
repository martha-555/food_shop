/** @format */

import {
  smallerPrice,
  largerPrice,
  smallerWeight,
  largerWeight,
  setSortType,
  SortType,
} from "../../../store/GoodsStore";
import { useAppDispatch } from "../../../hooks/hooks";
import classes from "./styles.module.scss";

const SortGoods = ({ unit }) => {
  const dispatch = useAppDispatch();

  const selectHandler = (e) => {
    const value = e.target.value;
    if (value == "from_smaller_price") {
      dispatch(setSortType({ type: SortType.ByPrice }));
    }
    if (value == "from_larger_price") {
      dispatch(setSortType({ type: SortType.ByPrice }));
    }
    if (value == "from_smaller_weight") {
      dispatch(setSortType({ type: SortType.ByWeight }));
    }
    if (value == "from_larger_weight") {
      dispatch(setSortType({ type: SortType.ByWeight }));
    }
  };

  return (
    <div>
      <div className={classes.sort}>
        <div>Сортувати по</div>
        <select name="" id="" onChange={selectHandler}>
          <option value="from_smaller_price">Ціна &#8593;</option>
          <option value="from_larger_price">Ціна &#8595;</option>
          <option value="from_smaller_weight">Вага &#8593;</option>
          <option value="from_larger_weight">Вага &#8595;</option>
        </select>
      </div>
    </div>
  );
};

export default SortGoods;
