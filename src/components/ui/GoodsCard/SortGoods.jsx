/** @format */

import {
  setSortType,
  SortType,
  SortDirection,
  setSortDirection,
} from "../../../store/GoodsStore";
import { useAppDispatch } from "../../../hooks/hooks";
import classes from "./styles.module.scss";

const SortGoods = () => {
  const dispatch = useAppDispatch();

  const selectHandler = (e) => {
    const [type, direction] = e.target.value.split(",");
    dispatch(setSortType({ type: +type }));
    dispatch(setSortDirection({ direction: +direction }));
  };

  return (
    <div>
      <div className={classes.sort}>
        <div>Сортувати по</div>
        <select name="" id="" onChange={selectHandler}>
          <option value={[SortType.ByPrice, SortDirection.ASC]}>
            Ціна &#8593;
          </option>
          <option value={[SortType.ByPrice, SortDirection.DESC]}>
            Ціна &#8595;
          </option>
          <option value={[SortType.ByWeight, SortDirection.ASC]}>
            Вага &#8593;
          </option>
          <option value={[SortType.ByWeight, SortDirection.DESC]}>
            Вага &#8595;
          </option>
        </select>
      </div>
    </div>
  );
};

export default SortGoods;
